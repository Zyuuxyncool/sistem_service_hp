<script setup lang="ts">
import { Head, useForm } from '@inertiajs/vue3';
import AppLayout from '@/layouts/AppLayout.vue';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import Swal from 'sweetalert2';

defineOptions({
    layout: AppLayout,
});

const form = useForm({
    tipe_hp: '',
    nomor_imei: '',
    keluhan: '',
});

const submit = () => {
    form.post('/pelanggan/pendaftaran-servis', {
        onSuccess: () => {
            Swal.fire({
                title: 'Berhasil!',
                text: 'Pendaftaran servis kamu berhasil dikirim.',
                icon: 'success',
                timer: 2000,
                showConfirmButton: false
            });
            form.reset();
        }
    });
};
</script>

<template>
    <Head title="Pendaftaran Servis" />

    <div class="flex flex-col gap-6 p-6 max-w-3xl mx-auto w-full">
        <div class="flex flex-col gap-1">
            <h1 class="text-3xl font-bold tracking-tight">Pendaftaran Servis Baru</h1>
            <p class="text-sm text-zinc-500">Isi formulir di bawah ini untuk mendaftarkan HP yang ingin diservis.</p>
        </div>

        <Card>
            <CardHeader>
                <CardTitle>Informasi Perangkat & Keluhan</CardTitle>
                <CardDescription>Jelaskan secara detail spesifikasi HP dan masalah yang kamu alami.</CardDescription>
            </CardHeader>
            <CardContent>
                <form @submit.prevent="submit" class="space-y-6">
                    <div class="space-y-2">
                        <Label for="tipe_hp">Tipe/Merk HP <span class="text-red-500">*</span></Label>
                        <Input id="tipe_hp" v-model="form.tipe_hp" placeholder="Contoh: Samsung Galaxy S23 Ultra" required />
                        <div v-if="form.errors.tipe_hp" class="text-sm text-red-500">{{ form.errors.tipe_hp }}</div>
                    </div>
                    
                    <div class="space-y-2">
                        <Label for="nomor_imei">Nomor IMEI (Opsional)</Label>
                        <Input id="nomor_imei" v-model="form.nomor_imei" placeholder="Ketik *#06# di HP untuk melihat IMEI" />
                        <div class="text-xs text-zinc-500">Opsional, tapi membantu teknisi untuk identifikasi unit.</div>
                    </div>

                    <div class="space-y-2">
                        <Label for="keluhan">Detail Keluhan / Kerusakan <span class="text-red-500">*</span></Label>
                        <Textarea 
                            id="keluhan" 
                            v-model="form.keluhan" 
                            placeholder="Contoh: Layar retak sebelah kiri atas, dan kalau dipakai 10 menit langsung panas lalu mati sendiri." 
                            rows="4" 
                            required 
                        />
                        <div v-if="form.errors.keluhan" class="text-sm text-red-500">{{ form.errors.keluhan }}</div>
                    </div>

                    <Button type="submit" class="w-full" :disabled="form.processing">
                        Kirim Pendaftaran Servis
                    </Button>
                </form>
            </CardContent>
        </Card>
    </div>
</template>
