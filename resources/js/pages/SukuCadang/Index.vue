
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
    suku_cadang: { data: any[] } | any[];
    filters: any;

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
    nama_barang: '',
    jumlah_stok: '',
    harga_modal: '',
    harga_jual: '',
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
    form.nama_barang = item.nama_barang || '';
    form.jumlah_stok = item.jumlah_stok || '';
    form.harga_modal = item.harga_modal || '';
    form.harga_jual = item.harga_jual || '';
    isOpen.value = true;
};

const submit = () => {
    if (isEdit.value) {
        form.put(`/admin/suku_cadang/${currentId.value}`, {
            onSuccess: () => {
                isOpen.value = false;
            }
        });
    } else {
        form.post(`/admin/suku_cadang`, {
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
            router.delete(`/admin/suku_cadang/${id}`, {
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
    const items = Array.isArray(props.suku_cadang) ? props.suku_cadang : (props.suku_cadang?.data || []);
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
    <Head title="Suku Cadang" />

    <div class="flex flex-col gap-6 p-6">
        <div class="flex flex-col gap-1">
            <h1 class="text-3xl font-bold tracking-tight">Suku Cadang</h1>
            <p class="text-sm text-gray-500 dark:text-gray-400">Kelola data suku cadang Anda di sini.</p>
        </div>

        <div class="flex justify-between items-center">
            <Input v-model="searchQuery" placeholder="Cari data..." class="max-w-sm" @input="currentPage = 1" />
            <Button @click="openCreateModal">Tambah Suku Cadang</Button>
        </div>

        <div class="bg-white dark:bg-zinc-900 rounded-lg shadow overflow-hidden border border-gray-100 dark:border-zinc-800">
            <div class="overflow-x-auto">
                <table class="w-full text-sm text-left whitespace-nowrap">
                    <thead class="text-xs uppercase bg-gray-50 dark:bg-zinc-800">
                        <tr>
                            <th class="px-6 py-3 w-16">NO</th>
                            <th class="px-6 py-3">NAMA BARANG</th>
                            <th class="px-6 py-3">JUMLAH STOK</th>
                            <th class="px-6 py-3">HARGA MODAL</th>
                            <th class="px-6 py-3">HARGA JUAL</th>
                            <th class="px-6 py-3 text-right">AKSI</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(item, index) in getPaginatedItems" :key="item.id" class="border-b dark:border-zinc-700">
                            <td class="px-6 py-4">{{ (currentPage - 1) * itemsPerPage + index + 1 }}</td>
                            <td class="px-6 py-4">{{ item.nama_barang }}</td>
                            <td class="px-6 py-4">{{ item.jumlah_stok }}</td>
                            <td class="px-6 py-4 font-semibold text-base whitespace-nowrap text-green-700 dark:text-green-500">{{ formatRupiah(item.harga_modal) }}</td>
                            <td class="px-6 py-4 font-semibold text-base whitespace-nowrap text-green-700 dark:text-green-500">{{ formatRupiah(item.harga_jual) }}</td>
                            <td class="px-6 py-4 text-right space-x-2">
                                <Button variant="outline" size="sm" @click="openEditModal(item)">Edit</Button>
                                <Button variant="destructive" size="sm" @click="destroy(item.id)">Hapus</Button>
                            </td>
                        </tr>
                        <tr v-if="getPaginatedItems.length === 0">
                            <td colspan="6" class="px-6 py-4 text-center">Data kosong</td>
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
                    <DialogTitle>{{ isEdit ? 'Edit' : 'Tambah' }} Suku Cadang</DialogTitle>
                </DialogHeader>
                <form @submit.prevent="submit" class="space-y-4">
                    <div class="space-y-2">
                        <Label for="nama_barang">NAMA BARANG</Label>
                        <Input id="nama_barang" v-model="form.nama_barang" />
                        <div v-if="form.errors.nama_barang" class="text-red-500 text-sm">{{ form.errors.nama_barang }}</div>
                    </div>
                    <div class="space-y-2">
                        <Label for="jumlah_stok">JUMLAH STOK</Label>
                        <Input id="jumlah_stok" v-model="form.jumlah_stok" />
                        <div v-if="form.errors.jumlah_stok" class="text-red-500 text-sm">{{ form.errors.jumlah_stok }}</div>
                    </div>
                    <div class="space-y-2">
                        <Label for="harga_modal">HARGA MODAL</Label>
                        <div class="relative">
                            <span class="absolute left-3 top-2 text-gray-500 font-medium">Rp</span>
                            <Input id="harga_modal" v-model="form.harga_modal" class="pl-9 font-semibold" @input="form.harga_modal = String($event.target.value).replace(/\D/g, '')" />
                        </div>
                        <div v-if="form.harga_modal" class="text-sm font-bold text-green-700 dark:text-green-500">{{ formatRupiah(form.harga_modal) }}</div>
                        <div v-if="form.errors.harga_modal" class="text-red-500 text-sm">{{ form.errors.harga_modal }}</div>
                    </div>
                    <div class="space-y-2">
                        <Label for="harga_jual">HARGA JUAL</Label>
                        <div class="relative">
                            <span class="absolute left-3 top-2 text-gray-500 font-medium">Rp</span>
                            <Input id="harga_jual" v-model="form.harga_jual" class="pl-9 font-semibold" @input="form.harga_jual = String($event.target.value).replace(/\D/g, '')" />
                        </div>
                        <div v-if="form.harga_jual" class="text-sm font-bold text-green-700 dark:text-green-500">{{ formatRupiah(form.harga_jual) }}</div>
                        <div v-if="form.errors.harga_jual" class="text-red-500 text-sm">{{ form.errors.harga_jual }}</div>
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
