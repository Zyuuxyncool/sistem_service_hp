<script setup lang="ts">
import { Head, useForm, router } from '@inertiajs/vue3';
import AppLayout from '@/layouts/AppLayout.vue';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter, DialogDescription } from '@/components/ui/dialog';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Label } from '@/components/ui/label';
import { ref, computed } from 'vue';
import Swal from 'sweetalert2';

defineOptions({ layout: AppLayout });

const props = defineProps<{
    riwayat: any[];
    metode_pembayaran: any[];
}>();

const formatRupiah = (number: any) => {
    if (!number) return 'Rp 0';
    return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 }).format(number);
};

const getStatusBadge = (statusId: number) => {
    switch(statusId) {
        case 1: return { class: 'bg-slate-100 text-slate-700' };
        case 2: return { class: 'bg-blue-100 text-blue-700' };
        case 3: return { class: 'bg-amber-100 text-amber-700' };
        case 4: return { class: 'bg-emerald-100 text-emerald-700' };
        case 5: return { class: 'bg-indigo-100 text-indigo-700' };
        case 6: return { class: 'bg-red-100 text-red-700' };
        default: return { class: 'bg-gray-100 text-gray-700' };
    }
};

const isPaymentModalOpen = ref(false);
const selectedServis = ref<any>(null);

const form = useForm({
    metode_bayar: '',
});

const selectedMetodeDetails = computed(() => {
    return props.metode_pembayaran.find((m: any) => m.nama === form.metode_bayar);
});

const openPaymentModal = (servis: any) => {
    selectedServis.value = servis;
    form.metode_bayar = '';
    isPaymentModalOpen.value = true;
};

const submitPayment = () => {
    form.post(`/pelanggan/riwayat-servis/${selectedServis.value.id}/bayar`, {
        onSuccess: () => {
            isPaymentModalOpen.value = false;
            Swal.fire({
                title: 'Berhasil!',
                text: 'Permintaan pembayaran berhasil dikirim.',
                icon: 'success',
                timer: 2000,
                showConfirmButton: false
            });
        }
    });
};

const cancelServis = (id: number) => {
    Swal.fire({
        title: 'Batalkan Pendaftaran?',
        text: 'Apakah Anda yakin ingin membatalkan pendaftaran servis ini?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#ef4444',
        cancelButtonColor: '#64748b',
        confirmButtonText: 'Ya, Batalkan!',
        cancelButtonText: 'Tutup'
    }).then((result) => {
        if (result.isConfirmed) {
            router.post(`/pelanggan/riwayat-servis/${id}/cancel`, {}, {
                onSuccess: () => {
                    Swal.fire({
                        title: 'Dibatalkan!',
                        text: 'Pendaftaran servis telah dibatalkan.',
                        icon: 'success',
                        timer: 2000,
                        showConfirmButton: false
                    });
                }
            });
        }
    });
};

</script>

<template>
    <Head title="Riwayat Servis" />

    <div class="flex flex-col gap-6 p-6 max-w-5xl mx-auto w-full">
        <div class="flex flex-col gap-1">
            <h1 class="text-3xl font-bold tracking-tight">Riwayat Servis</h1>
            <p class="text-sm text-zinc-500">Pantau perkembangan status perbaikan dan rincian biaya HP kamu.</p>
        </div>

        <div class="space-y-6">
            <Card v-for="servis in props.riwayat" :key="servis.id" class="overflow-hidden">
                <CardHeader class="bg-zinc-50/50 border-b border-zinc-100 pb-4">
                    <div class="flex items-start justify-between">
                        <div>
                            <CardTitle class="text-lg">{{ servis.tipe_hp }}</CardTitle>
                            <CardDescription class="mt-1">Tanggal Masuk: {{ servis.waktu }}</CardDescription>
                        </div>
                        <div class="flex flex-col items-end gap-2">
                            <Badge :class="getStatusBadge(servis.status_id).class" class="text-sm px-3 py-1">{{ servis.status_text }}</Badge>
                            <Button v-if="servis.status_id === 1" variant="outline" size="sm" class="text-red-600 border-red-200 hover:bg-red-50 hover:text-red-700" @click="cancelServis(servis.id)">Batalkan</Button>
                        </div>
                    </div>
                </CardHeader>
                <CardContent class="p-6">
                    <div class="grid md:grid-cols-2 gap-8">
                        <div class="space-y-4">
                            <div>
                                <h4 class="text-sm font-semibold text-zinc-900 mb-1">Keluhan:</h4>
                                <p class="text-sm text-zinc-600">{{ servis.keluhan }}</p>
                            </div>
                            <div v-if="servis.catatan_teknisi">
                                <h4 class="text-sm font-semibold text-zinc-900 mb-1">Catatan Teknisi:</h4>
                                <p class="text-sm text-zinc-600 bg-amber-50 p-3 rounded-md border border-amber-100">{{ servis.catatan_teknisi }}</p>
                            </div>
                        </div>

                        <div class="bg-zinc-50 p-4 rounded-xl border border-zinc-100">
                            <h4 class="text-sm font-semibold text-zinc-900 mb-3 border-b pb-2">Rincian Biaya</h4>
                            
                            <div class="space-y-2 text-sm">
                                <div class="flex justify-between text-zinc-600">
                                    <span>Biaya Jasa Pengecekan/Servis</span>
                                    <span>{{ formatRupiah(servis.biaya_jasa) }}</span>
                                </div>
                                
                                <div v-for="part in servis.parts" :key="part.nama" class="flex justify-between text-zinc-600">
                                    <span>{{ part.nama }} (x{{ part.jumlah }})</span>
                                    <span>{{ formatRupiah(part.subtotal) }}</span>
                                </div>
                                
                                <div class="pt-3 border-t flex justify-between font-bold text-zinc-900 text-base">
                                    <span>Total Biaya</span>
                                    <span class="text-emerald-600">{{ formatRupiah(servis.total_biaya) }}</span>
                                </div>
                            </div>

                            <div class="mt-6" v-if="servis.status_id === 4 && !servis.transaksi">
                                <!-- Status 4 = Selesai dikerjakan & belum bayar -->
                                <Button class="w-full bg-emerald-600 hover:bg-emerald-700" @click="openPaymentModal(servis)">
                                    Bayar Sekarang
                                </Button>
                            </div>
                            
                            <div class="mt-4" v-else-if="servis.transaksi">
                                <div class="bg-green-100 text-green-800 p-3 rounded-lg text-sm text-center flex flex-col gap-1 border border-green-200">
                                    <span class="font-bold">Pembayaran Diterima</span>
                                    <span>Metode: {{ servis.transaksi.metode_bayar }}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </CardContent>
            </Card>

            <div v-if="props.riwayat.length === 0" class="text-center py-12 bg-white rounded-xl border border-dashed border-zinc-300">
                <p class="text-zinc-500">Belum ada riwayat servis. Silakan buat pendaftaran servis baru.</p>
            </div>
        </div>

        <Dialog :open="isPaymentModalOpen" @update:open="isPaymentModalOpen = $event">
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Pilih Metode Pembayaran</DialogTitle>
                    <DialogDescription>
                        Total yang harus dibayar: <strong class="text-emerald-600">{{ formatRupiah(selectedServis?.total_biaya) }}</strong>
                    </DialogDescription>
                </DialogHeader>
                
                <form @submit.prevent="submitPayment" class="space-y-6 py-4">
                    <div class="space-y-2">
                        <Label>Metode Pembayaran</Label>
                        <Select v-model="form.metode_bayar">
                            <SelectTrigger>
                                <SelectValue placeholder="Pilih metode pembayaran" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem v-for="metode in props.metode_pembayaran" :key="metode.id" :value="metode.nama">
                                    {{ metode.nama }}
                                </SelectItem>
                            </SelectContent>
                        </Select>
                        <div v-if="form.errors.metode_bayar" class="text-sm text-red-500">{{ form.errors.metode_bayar }}</div>
                    </div>

                    <div v-if="selectedMetodeDetails && (selectedMetodeDetails.no_rekening || selectedMetodeDetails.foto_qris)" class="p-4 bg-blue-50 text-blue-800 rounded-lg text-sm border border-blue-100">
                        <p class="font-semibold mb-2">Instruksi Pembayaran:</p>
                        
                        <div v-if="selectedMetodeDetails.no_rekening" class="mb-3">
                            <p>Transfer ke Rekening:</p>
                            <p class="font-bold text-lg">{{ selectedMetodeDetails.no_rekening }}</p>
                            <p v-if="selectedMetodeDetails.atas_nama">a/n {{ selectedMetodeDetails.atas_nama }}</p>
                        </div>
                        
                        <div v-if="selectedMetodeDetails.foto_qris">
                            <p class="mb-2">Atau scan QRIS berikut:</p>
                            <img :src="`/storage/${selectedMetodeDetails.foto_qris}`" alt="QRIS" class="w-48 h-auto rounded-lg border border-blue-200" />
                        </div>
                        
                        <p class="mt-3 text-xs opacity-80 pt-2 border-t border-blue-200/50">Harap konfirmasi bukti transfer ke WhatsApp setelah melakukan pembayaran.</p>
                    </div>

                    <DialogFooter>
                        <Button type="button" variant="outline" @click="isPaymentModalOpen = false">Batal</Button>
                        <Button type="submit" :disabled="form.processing || !form.metode_bayar">Konfirmasi Pembayaran</Button>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    </div>
</template>
