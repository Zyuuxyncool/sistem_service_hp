<script setup lang="ts">
import { ref, computed } from 'vue';
import { Head, useForm, router, usePage } from '@inertiajs/vue3';
import { Dialog, DialogScrollContent, DialogHeader, DialogTitle, DialogFooter } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import AppLayout from '@/layouts/AppLayout.vue';
import Swal from 'sweetalert2';

defineOptions({ layout: AppLayout });

const props = defineProps<{
    metodePembayaran: { data: any[] } | any[];
    filters: any;
}>();

const isOpen = ref(false);
const isEdit = ref(false);
const currentId = ref<number | null>(null);
const searchQuery = ref('');
const fileInput = ref<HTMLInputElement | null>(null);

const currentPage = ref(1);
const itemsPerPage = 10;

const form = useForm({
    nama: '',
    no_rekening: '',
    atas_nama: '',
    foto_qris: null as File | null,
    is_active: true,
});

const openCreateModal = () => {
    isEdit.value = false;
    currentId.value = null;
    form.reset();
    if (fileInput.value) fileInput.value.value = '';
    isOpen.value = true;
};

const openEditModal = (item: any) => {
    isEdit.value = true;
    currentId.value = item.id;
    form.clearErrors();
    form.nama = item.nama || '';
    form.no_rekening = item.no_rekening || '';
    form.atas_nama = item.atas_nama || '';
    form.is_active = item.is_active == 1;
    form.foto_qris = null;
    if (fileInput.value) fileInput.value.value = '';
    isOpen.value = true;
};

const handleFileChange = (e: Event) => {
    const target = e.target as HTMLInputElement;
    if (target.files && target.files.length > 0) {
        form.foto_qris = target.files[0];
    }
};

const submit = () => {
    if (isEdit.value) {
        // use POST with _method=PUT because of file upload
        form.transform((data) => ({
            ...data,
            _method: 'PUT',
        })).post(`/admin/metode_pembayaran/${currentId.value}`, {
            onSuccess: () => {
                isOpen.value = false;
            }
        });
    } else {
        form.post(`/admin/metode_pembayaran`, {
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
            router.delete(`/admin/metode_pembayaran/${id}`, {
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
    const items = Array.isArray(props.metodePembayaran) ? props.metodePembayaran : (props.metodePembayaran?.data || []);
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
</script>

<template>
    <Head title="Metode Pembayaran" />

    <div class="flex flex-col gap-6 p-6">
        <div class="flex flex-col gap-1">
            <h1 class="text-3xl font-bold tracking-tight">Metode Pembayaran</h1>
            <p class="text-sm text-gray-500 dark:text-gray-400">Kelola master data metode pembayaran di sini.</p>
        </div>

        <div class="flex justify-between items-center">
            <Input v-model="searchQuery" placeholder="Cari data..." class="max-w-sm" @input="currentPage = 1" />
            <Button @click="openCreateModal">Tambah Metode</Button>
        </div>

        <div class="bg-white dark:bg-zinc-900 rounded-lg shadow overflow-hidden border border-gray-100 dark:border-zinc-800">
            <div class="overflow-x-auto">
                <table class="w-full text-sm text-left whitespace-nowrap">
                    <thead class="text-xs uppercase bg-gray-50 dark:bg-zinc-800">
                        <tr>
                            <th class="px-6 py-3 w-16">NO</th>
                            <th class="px-6 py-3">NAMA METODE</th>
                            <th class="px-6 py-3">NO. REKENING</th>
                            <th class="px-6 py-3">ATAS NAMA</th>
                            <th class="px-6 py-3">FOTO QRIS</th>
                            <th class="px-6 py-3">STATUS</th>
                            <th class="px-6 py-3 text-right">AKSI</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(item, index) in getPaginatedItems" :key="item.id" class="border-b dark:border-zinc-700">
                            <td class="px-6 py-4">{{ (currentPage - 1) * itemsPerPage + index + 1 }}</td>
                            <td class="px-6 py-4">{{ item.nama }}</td>
                            <td class="px-6 py-4">{{ item.no_rekening || '-' }}</td>
                            <td class="px-6 py-4">{{ item.atas_nama || '-' }}</td>
                            <td class="px-6 py-4">
                                <a v-if="item.foto_qris" :href="`/storage/${item.foto_qris}`" target="_blank" class="text-blue-500 hover:underline">
                                    Lihat QRIS
                                </a>
                                <span v-else class="text-gray-400">-</span>
                            </td>
                            <td class="px-6 py-4">
                                <span v-if="item.is_active" class="px-2 py-1 bg-green-100 text-green-700 rounded text-xs font-medium">Aktif</span>
                                <span v-else class="px-2 py-1 bg-red-100 text-red-700 rounded text-xs font-medium">Tidak Aktif</span>
                            </td>
                            <td class="px-6 py-4 text-right space-x-2">
                                <Button variant="outline" size="sm" @click="openEditModal(item)">Edit</Button>
                                <Button variant="destructive" size="sm" @click="destroy(item.id)">Hapus</Button>
                            </td>
                        </tr>
                        <tr v-if="getPaginatedItems.length === 0">
                            <td colspan="7" class="px-6 py-4 text-center">Data kosong</td>
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
                    <DialogTitle>{{ isEdit ? 'Edit' : 'Tambah' }} Metode Pembayaran</DialogTitle>
                </DialogHeader>
                <form @submit.prevent="submit" class="space-y-4">
                    <div class="space-y-2">
                        <Label for="nama">NAMA METODE (contoh: BCA, QRIS, Tunai)</Label>
                        <Input id="nama" v-model="form.nama" required />
                        <div v-if="form.errors.nama" class="text-red-500 text-sm">{{ form.errors.nama }}</div>
                    </div>
                    <div class="space-y-2">
                        <Label for="no_rekening">NOMOR REKENING</Label>
                        <Input id="no_rekening" v-model="form.no_rekening" />
                        <div v-if="form.errors.no_rekening" class="text-red-500 text-sm">{{ form.errors.no_rekening }}</div>
                    </div>
                    <div class="space-y-2">
                        <Label for="atas_nama">ATAS NAMA</Label>
                        <Input id="atas_nama" v-model="form.atas_nama" />
                        <div v-if="form.errors.atas_nama" class="text-red-500 text-sm">{{ form.errors.atas_nama }}</div>
                    </div>
                    <div class="space-y-2">
                        <Label for="foto_qris">FOTO QRIS (Opsional)</Label>
                        <Input id="foto_qris" type="file" ref="fileInput" @change="handleFileChange" accept="image/*" />
                        <div v-if="form.errors.foto_qris" class="text-red-500 text-sm">{{ form.errors.foto_qris }}</div>
                    </div>
                    <div class="flex items-center space-x-2 pt-2">
                        <Checkbox id="is_active" v-model:checked="form.is_active" />
                        <Label for="is_active">Aktif digunakan</Label>
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
