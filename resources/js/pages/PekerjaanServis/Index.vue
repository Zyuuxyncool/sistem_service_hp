
<script setup lang="ts">
import { ref, computed } from 'vue';
import { Head, useForm, router, usePage } from '@inertiajs/vue3';
import { Dialog, DialogScrollContent, DialogHeader, DialogTitle, DialogFooter } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import AppLayout from '@/layouts/AppLayout.vue';
import Combobox from '@/components/Combobox.vue';
import Swal from 'sweetalert2';

defineOptions({ layout: AppLayout });

const props = defineProps<{
    pekerjaan_servis: { data: any[] } | any[];
    filters: any;
    pelanggan_list: any[];
}>();

const isOpen = ref(false);
const isEdit = ref(false);
const currentId = ref<number | null>(null);
const searchQuery = ref('');

const page = usePage();
const getEnumOptions = (enumName: string) => {
    const obj = page.props[enumName] as Record<string, string> || {};
    return Object.entries(obj).map(([key, value]) => ({ id: Number(key), label: value }));
};

const currentPage = ref(1);
const itemsPerPage = 10;

const form = useForm({
    pelanggan_id: '',
    tipe_hp: '',
    nomor_imei: '',
    keluhan: '',
    biaya_jasa: '',
    status_servis: '',
    catatan_teknisi: '',
    lama_garansi: '',
});

const openCreateModal = () => {
    isEdit.value = false;
    currentId.value = null;
    form.reset();
    isOpen.value = true;
};

const openEditModal = (item: any) => {
    isEdit.value = true;
    currentId.value = item.id;
    form.clearErrors();
    form.pelanggan_id = item.pelanggan_id || '';
    form.tipe_hp = item.tipe_hp || '';
    form.nomor_imei = item.nomor_imei || '';
    form.keluhan = item.keluhan || '';
    form.biaya_jasa = item.biaya_jasa || '';
    form.status_servis = item.status_servis || '';
    form.catatan_teknisi = item.catatan_teknisi || '';
    form.lama_garansi = item.lama_garansi || '';
    isOpen.value = true;
};

const submit = () => {
    if (isEdit.value) {
        form.put(`/admin/pekerjaan_servis/${currentId.value}`, {
            onSuccess: () => {
                isOpen.value = false;
            }
        });
    } else {
        form.post(`/admin/pekerjaan_servis`, {
            onSuccess: () => {
                isOpen.value = false;
            }
        });
    }
};

const destroy = (id: number) => {
    Swal.fire({
        title: 'Apakah Anda yakin?',
        text: "Data yang dihapus tidak dapat dikembalikan!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#ef4444',
        cancelButtonColor: '#3f3f46',
        confirmButtonText: 'Ya, hapus!',
        cancelButtonText: 'Batal'
    }).then((result) => {
        if (result.isConfirmed) {
            router.delete(`/admin/pekerjaan_servis/${id}`, {
                onSuccess: () => {
                    Swal.fire({
                        title: 'Terhapus!',
                        text: 'Data berhasil dihapus.',
                        icon: 'success',
                        timer: 1500,
                        showConfirmButton: false
                    });
                }
            });
        }
    });
};

const getFilteredItems = computed(() => {
    const items = Array.isArray(props.pekerjaan_servis) ? props.pekerjaan_servis : (props.pekerjaan_servis?.data || []);
    if (!searchQuery.value) return items;
    const lowerQuery = searchQuery.value.toLowerCase();
    return items.filter(item => {
        return Object.values(item).some(val => 
            String(val).toLowerCase().includes(lowerQuery)
        );
    });
});

const totalPages = computed(() => Math.max(1, Math.ceil(getFilteredItems.value.length / itemsPerPage)));

const getPaginatedItems = computed(() => {
    const start = (currentPage.value - 1) * itemsPerPage;
    return getFilteredItems.value.slice(start, start + itemsPerPage);
});

const prevPage = () => {
    if (currentPage.value > 1) currentPage.value--;
};

const nextPage = () => {
    if (currentPage.value < totalPages.value) currentPage.value++;
};

const formatRupiah = (number: any) => {
    if (!number) return 'Rp 0';
    return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 }).format(number);
};
</script>

<template>
    <Head title="Pekerjaan Servis" />

    <div class="flex flex-col gap-6 p-6">
        <div class="flex flex-col gap-1">
            <h1 class="text-3xl font-bold tracking-tight">Pekerjaan Servis</h1>
            <p class="text-sm text-gray-500 dark:text-gray-400">Kelola data pekerjaan servis Anda di sini.</p>
        </div>

        <div class="flex justify-between items-center">
            <Input v-model="searchQuery" placeholder="Cari data..." class="max-w-sm" @input="currentPage = 1" />
            <Button @click="openCreateModal">Tambah Pekerjaan Servis</Button>
        </div>

        <div class="bg-white dark:bg-zinc-900 rounded-lg shadow overflow-hidden border border-gray-100 dark:border-zinc-800">
            <div class="overflow-x-auto">
                <table class="w-full text-sm text-left whitespace-nowrap">
                    <thead class="text-xs uppercase bg-gray-50 dark:bg-zinc-800">
                        <tr>
                            <th class="px-6 py-3 w-16">NO</th>
                            <th class="px-6 py-3">NAMA PELANGGAN</th>
                            <th class="px-6 py-3">TIPE HP</th>
                            <th class="px-6 py-3">NOMOR IMEI</th>
                            <th class="px-6 py-3">KELUHAN</th>
                            <th class="px-6 py-3">BIAYA JASA</th>
                            <th class="px-6 py-3">STATUS SERVIS</th>
                            <th class="px-6 py-3">CATATAN TEKNISI</th>
                            <th class="px-6 py-3">LAMA GARANSI</th>
                            <th class="px-6 py-3 text-right">AKSI</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(item, index) in getPaginatedItems" :key="item.id" class="border-b dark:border-zinc-700">
                            <td class="px-6 py-4">{{ (currentPage - 1) * itemsPerPage + index + 1 }}</td>
                            <td class="px-6 py-4">{{ item.pelanggan?.nama_pelanggan || item.pelanggan_id }}</td>
                            <td class="px-6 py-4">{{ item.tipe_hp }}</td>
                            <td class="px-6 py-4">{{ item.nomor_imei }}</td>
                            <td class="px-6 py-4">{{ item.keluhan }}</td>
                            <td class="px-6 py-4 font-semibold text-base whitespace-nowrap text-green-700 dark:text-green-500">{{ formatRupiah(item.biaya_jasa) }}</td>
                            <td class="px-6 py-4">
                                <span class="px-2 py-1 bg-gray-100 dark:bg-zinc-800 rounded-md text-xs font-medium">
                                    {{ (page.props.list_status && page.props.list_status[item.status_servis]) || item.status_servis }}
                                </span>
                            </td>
                            <td class="px-6 py-4">{{ item.catatan_teknisi }}</td>
                            <td class="px-6 py-4">{{ item.lama_garansi }}</td>
                            <td class="px-6 py-4 text-right space-x-2">
                                <Button variant="outline" size="sm" @click="openEditModal(item)">Edit</Button>
                                <Button variant="destructive" size="sm" @click="destroy(item.id)">Hapus</Button>
                            </td>
                        </tr>
                        <tr v-if="getPaginatedItems.length === 0">
                            <td colspan="10" class="px-6 py-4 text-center">Data kosong</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            
            <div class="p-4 border-t dark:border-zinc-700 flex items-center justify-between">
                <span class="text-sm text-gray-600 dark:text-gray-400">
                    Menampilkan halaman {{ currentPage }} dari {{ totalPages }}
                </span>
                <div class="space-x-2">
                    <Button variant="outline" size="sm" :disabled="currentPage === 1" @click="prevPage">Sebelumnya</Button>
                    <Button variant="outline" size="sm" :disabled="currentPage === totalPages" @click="nextPage">Selanjutnya</Button>
                </div>
            </div>
        </div>

        <Dialog :open="isOpen" @update:open="isOpen = $event">
            <DialogScrollContent class="w-full sm:max-w-2xl">
                <DialogHeader>
                    <DialogTitle>{{ isEdit ? 'Edit' : 'Tambah' }} Pekerjaan Servis</DialogTitle>
                </DialogHeader>
                <form @submit.prevent="submit" class="space-y-4">
                    <div class="space-y-2">
                        <Label for="pelanggan_id">NAMA PELANGGAN</Label>
                        <Combobox
                            v-model="form.pelanggan_id"
                            :options="pelanggan_list"
                            label="nama_pelanggan"
                            placeholder="Pilih pelanggan"
                        />
                        <div v-if="form.errors.pelanggan_id" class="text-red-500 text-sm">{{ form.errors.pelanggan_id }}</div>
                    </div>
                    <div class="space-y-2">
                        <Label for="tipe_hp">TIPE HP</Label>
                        <Input id="tipe_hp" v-model="form.tipe_hp" />
                        <div v-if="form.errors.tipe_hp" class="text-red-500 text-sm">{{ form.errors.tipe_hp }}</div>
                    </div>
                    <div class="space-y-2">
                        <Label for="nomor_imei">NOMOR IMEI</Label>
                        <Input id="nomor_imei" v-model="form.nomor_imei" />
                        <div v-if="form.errors.nomor_imei" class="text-red-500 text-sm">{{ form.errors.nomor_imei }}</div>
                    </div>
                    <div class="space-y-2">
                        <Label for="keluhan">KELUHAN</Label>
                        <Textarea id="keluhan" v-model="form.keluhan" rows="3" />
                        <div v-if="form.errors.keluhan" class="text-red-500 text-sm">{{ form.errors.keluhan }}</div>
                    </div>
                    <div class="space-y-2">
                        <Label for="biaya_jasa">BIAYA JASA</Label>
                        <div class="relative">
                            <span class="absolute left-3 top-2 text-gray-500 font-medium">Rp</span>
                            <Input id="biaya_jasa" v-model="form.biaya_jasa" class="pl-9 font-semibold" @input="form.biaya_jasa = String($event.target.value).replace(/\D/g, '')" />
                        </div>
                        <div v-if="form.biaya_jasa" class="text-sm font-bold text-green-700 dark:text-green-500">{{ formatRupiah(form.biaya_jasa) }}</div>
                        <div v-if="form.errors.biaya_jasa" class="text-red-500 text-sm">{{ form.errors.biaya_jasa }}</div>
                    </div>
                    <div class="space-y-2">
                        <Label for="status_servis">STATUS SERVIS</Label>
                        <Combobox
                            v-model="form.status_servis"
                            :options="getEnumOptions('list_status')"
                            label="label"
                            placeholder="Pilih status servis"
                        />
                        <div v-if="form.errors.status_servis" class="text-red-500 text-sm">{{ form.errors.status_servis }}</div>
                    </div>
                    <div class="space-y-2">
                        <Label for="catatan_teknisi">CATATAN TEKNISI</Label>
                        <Textarea id="catatan_teknisi" v-model="form.catatan_teknisi" rows="3" />
                        <div v-if="form.errors.catatan_teknisi" class="text-red-500 text-sm">{{ form.errors.catatan_teknisi }}</div>
                    </div>
                    <div class="space-y-2">
                        <Label for="lama_garansi">LAMA GARANSI</Label>
                        <Input id="lama_garansi" v-model="form.lama_garansi" />
                        <div v-if="form.errors.lama_garansi" class="text-red-500 text-sm">{{ form.errors.lama_garansi }}</div>
                    </div>
                    
                    <DialogFooter>
                        <Button type="button" variant="outline" @click="isOpen = false">Batal</Button>
                        <Button type="submit" :disabled="form.processing">Simpan</Button>
                    </DialogFooter>
                </form>
            </DialogScrollContent>
        </Dialog>
    </div>
</template>
