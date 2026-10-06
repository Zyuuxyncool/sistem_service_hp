const fs = require('fs');
const path = require('path');

const models = {
    User: {
        fields: ['name', 'email', 'password', 'akses'],
        tableFields: ['name', 'email', 'akses'],
        title: 'User',
        varName: 'users',
        relations: {},
        enums: { akses: 'list_akses' }
    },
    Pelanggan: {
        fields: ['nama_pelanggan', 'nomor_wa', 'alamat'],
        tableFields: ['nama_pelanggan', 'nomor_wa', 'alamat'],
        title: 'Pelanggan',
        varName: 'pelanggan',
        relations: {}
    },
    SukuCadang: {
        fields: ['nama_barang', 'jumlah_stok', 'harga_modal', 'harga_jual'],
        tableFields: ['nama_barang', 'jumlah_stok', 'harga_modal', 'harga_jual'],
        title: 'Suku Cadang',
        varName: 'suku_cadang',
        relations: {}
    },
    PekerjaanServis: {
        fields: ['pelanggan_id', 'tipe_hp', 'nomor_imei', 'keluhan', 'biaya_jasa', 'status_servis', 'catatan_teknisi', 'lama_garansi'],
        tableFields: ['pelanggan_id', 'tipe_hp', 'nomor_imei', 'keluhan', 'biaya_jasa', 'status_servis', 'catatan_teknisi', 'lama_garansi'],
        title: 'Pekerjaan Servis',
        varName: 'pekerjaan_servis',
        relations: {
            pelanggan_id: { prop: 'pelanggan_list', label: 'nama_pelanggan', display: 'item.pelanggan?.nama_pelanggan' }
        },
        enums: { status_servis: 'list_status' }
    },
    DetailPenggunaanPart: {
        fields: ['pekerjaan_servis_id', 'suku_cadang_id', 'jumlah_dipakai', 'subtotal_harga'],
        tableFields: ['pekerjaan_servis_id', 'suku_cadang_id', 'jumlah_dipakai', 'subtotal_harga'],
        title: 'Detail Penggunaan Part',
        varName: 'detail_penggunaan_part',
        relations: {
            pekerjaan_servis_id: { prop: 'pekerjaan_servis_list', label: 'id_label', display: 'item.pekerjaan_servis?.pelanggan?.nama_pelanggan' },
            suku_cadang_id: { prop: 'suku_cadang_list', label: 'nama_barang', display: 'item.suku_cadang?.nama_barang' }
        }
    },
    TransaksiPembayaran: {
        fields: ['pekerjaan_servis_id', 'total_bayar', 'metode_bayar', 'status_pembayaran'],
        tableFields: ['pekerjaan_servis_id', 'total_bayar', 'metode_bayar', 'status_pembayaran'],
        title: 'Transaksi Pembayaran',
        varName: 'transaksi',
        relations: {
            pekerjaan_servis_id: { prop: 'pekerjaan_servis_list', label: 'id_label', display: 'item.pekerjaan_servis?.pelanggan?.nama_pelanggan' }
        },
        enums: { status_pembayaran: 'list_status' }
    }
};

const template = (modelName, data) => `
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
    ${data.varName}: { data: any[] } | any[];
    filters: any;
${Object.values(data.relations).map(rel => `    ${rel.prop}: any[];`).join('\n')}
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
${data.fields.map(f => `    ${f}: '',`).join('\n')}
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
${data.fields.map(f => `    form.${f} = item.${f} || '';`).join('\n')}
    isOpen.value = true;
};

const submit = () => {
    if (isEdit.value) {
        form.put(\`/admin/${data.title.toLowerCase().replace(/ /g, '_')}/\${currentId.value}\`, {
            onSuccess: () => {
                isOpen.value = false;
            }
        });
    } else {
        form.post(\`/admin/${data.title.toLowerCase().replace(/ /g, '_')}\`, {
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
            router.delete(\`/admin/${data.title.toLowerCase().replace(/ /g, '_')}/\${id}\`, {
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
    const items = Array.isArray(props.${data.varName}) ? props.${data.varName} : (props.${data.varName}?.data || []);
    if (!searchQuery.value) return items;
    const lowerQuery = searchQuery.value.toLowerCase();
    return items.filter(item => {
        return Object.values(item).some(val => 
            String(val).toLowerCase().includes(lowerQuery)
        );
    });
});

const totalPages = computed(() => Math.ceil(getFilteredItems.value.length / itemsPerPage));

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
    <Head title="${data.title}" />

    <div class="flex flex-col gap-6 p-6">
        <div class="flex flex-col gap-1">
            <h1 class="text-3xl font-bold tracking-tight">${data.title}</h1>
            <p class="text-sm text-gray-500 dark:text-gray-400">Kelola data ${data.title.toLowerCase()} Anda di sini.</p>
        </div>

        <div class="flex justify-between items-center">
            <Input v-model="searchQuery" placeholder="Cari data..." class="max-w-sm" @input="currentPage = 1" />
            <Button @click="openCreateModal">Tambah ${data.title}</Button>
        </div>

        <div class="bg-white dark:bg-zinc-900 rounded-lg shadow overflow-hidden border border-gray-100 dark:border-zinc-800">
            <div class="overflow-x-auto">
                <table class="w-full text-sm text-left whitespace-nowrap">
                    <thead class="text-xs uppercase bg-gray-50 dark:bg-zinc-800">
                        <tr>
                            <th class="px-6 py-3 w-16">NO</th>
${data.tableFields.map(f => {
    let header = f.replace('_id', '').replace(/_/g, ' ').toUpperCase();
    if (f === 'pelanggan_id' || f === 'pekerjaan_servis_id') header = 'NAMA PELANGGAN';
    return `                            <th class="px-6 py-3">${header}</th>`;
}).join('\n')}
                            <th class="px-6 py-3 text-right">AKSI</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(item, index) in getPaginatedItems" :key="item.id" class="border-b dark:border-zinc-700">
                            <td class="px-6 py-4">{{ (currentPage - 1) * itemsPerPage + index + 1 }}</td>
${data.tableFields.map(f => {
    if (data.relations && data.relations[f]) {
        return `                            <td class="px-6 py-4">{{ ${data.relations[f].display} || item.${f} }}</td>`;
    }
    if (data.enums && data.enums[f]) {
        return `                            <td class="px-6 py-4">
                                <span class="px-2 py-1 bg-gray-100 dark:bg-zinc-800 rounded-md text-xs font-medium">
                                    {{ (page.props.${data.enums[f]} && page.props.${data.enums[f]}[item.${f}]) || item.${f} }}
                                </span>
                            </td>`;
    }
    if (f.includes('harga') || f.includes('biaya') || f.includes('total')) {
        return `                            <td class="px-6 py-4 font-semibold text-base whitespace-nowrap text-green-700 dark:text-green-500">{{ formatRupiah(item.${f}) }}</td>`;
    }
    return `                            <td class="px-6 py-4">{{ item.${f} }}</td>`;
}).join('\n')}
                            <td class="px-6 py-4 text-right space-x-2">
                                <Button variant="outline" size="sm" @click="openEditModal(item)">Edit</Button>
                                <Button variant="destructive" size="sm" @click="destroy(item.id)">Hapus</Button>
                            </td>
                        </tr>
                        <tr v-if="getPaginatedItems.length === 0">
                            <td colspan="${data.tableFields.length + 2}" class="px-6 py-4 text-center">Data kosong</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            
            <div class="p-4 border-t dark:border-zinc-700 flex items-center justify-between" v-if="totalPages > 1">
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
                    <DialogTitle>{{ isEdit ? 'Edit' : 'Tambah' }} ${data.title}</DialogTitle>
                </DialogHeader>
                <form @submit.prevent="submit" class="space-y-4">
${data.fields.map(f => {
    if (data.relations && data.relations[f]) {
        return `                    <div class="space-y-2">
                        <Label for="${f}">${(f === 'pelanggan_id' || f === 'pekerjaan_servis_id') ? 'NAMA PELANGGAN' : f.replace('_id', '').replace(/_/g, ' ').toUpperCase()}</Label>
                        <Combobox
                            v-model="form.${f}"
                            :options="${data.relations[f].prop}"
                            label="${data.relations[f].label}"
                            placeholder="Pilih ${(f === 'pelanggan_id' || f === 'pekerjaan_servis_id') ? 'pelanggan' : f.replace('_id', '').replace(/_/g, ' ')}"
                        />
                        <div v-if="form.errors.${f}" class="text-red-500 text-sm">{{ form.errors.${f} }}</div>
                    </div>`;
    }
    if (data.enums && data.enums[f]) {
        return `                    <div class="space-y-2">
                        <Label for="${f}">${f.replace(/_/g, ' ').toUpperCase()}</Label>
                        <Combobox
                            v-model="form.${f}"
                            :options="getEnumOptions('${data.enums[f]}')"
                            label="label"
                            placeholder="Pilih ${f.replace(/_/g, ' ')}"
                        />
                        <div v-if="form.errors.${f}" class="text-red-500 text-sm">{{ form.errors.${f} }}</div>
                    </div>`;
    }
    const isTextarea = ['keluhan', 'catatan_teknisi', 'alamat'].includes(f);
    if (isTextarea) {
        return `                    <div class="space-y-2">
                        <Label for="${f}">${f.replace(/_/g, ' ').toUpperCase()}</Label>
                        <Textarea id="${f}" v-model="form.${f}" rows="3" />
                        <div v-if="form.errors.${f}" class="text-red-500 text-sm">{{ form.errors.${f} }}</div>
                    </div>`;
    }
    const isCurrency = f.includes('harga') || f.includes('biaya') || f.includes('total');
    if (isCurrency) {
        return `                    <div class="space-y-2">
                        <Label for="${f}">${f.replace(/_/g, ' ').toUpperCase()}</Label>
                        <div class="relative">
                            <span class="absolute left-3 top-2 text-gray-500 font-medium">Rp</span>
                            <Input id="${f}" v-model="form.${f}" class="pl-9 font-semibold" @input="form.${f} = String($event.target.value).replace(/\\D/g, '')" />
                        </div>
                        <div v-if="form.${f}" class="text-sm font-bold text-green-700 dark:text-green-500">{{ formatRupiah(form.${f}) }}</div>
                        <div v-if="form.errors.${f}" class="text-red-500 text-sm">{{ form.errors.${f} }}</div>
                    </div>`;
    }
    return `                    <div class="space-y-2">
                        <Label for="${f}">${f.replace(/_/g, ' ').toUpperCase()}</Label>
                        <Input id="${f}" v-model="form.${f}" />
                        <div v-if="form.errors.${f}" class="text-red-500 text-sm">{{ form.errors.${f} }}</div>
                    </div>`;
}).join('\n')}
                    
                    <DialogFooter>
                        <Button type="button" variant="outline" @click="isOpen = false">Batal</Button>
                        <Button type="submit" :disabled="form.processing">Simpan</Button>
                    </DialogFooter>
                </form>
            </DialogScrollContent>
        </Dialog>
    </div>
</template>
`;

Object.entries(models).forEach(([name, data]) => {
    const dir = path.join(__dirname, 'resources/js/Pages', name);
    const file = path.join(dir, 'Index.vue');
    fs.writeFileSync(file, template(name, data));
    console.log(`Generated ${file}`);
});
