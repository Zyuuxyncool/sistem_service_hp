<script setup>
import { Head } from '@inertiajs/vue3';
import { Cpu, Smartphone, BatteryCharging } from '@lucide/vue';
import Header from '../Partials/_header.vue';
import Footer from '../Partials/_footer.vue';
import Navigation from '../Partials/_navigation.vue';

defineProps({
    canLogin: {
        type: Boolean,
        default: true
    }
});
</script>

<template>
    <Head title="Layanan | Sistem Informasi Servis HP" />

    <div class="min-h-screen bg-gray-50 text-gray-900 pb-[70px] lg:pb-0 font-sans flex flex-col">
        <Header :canLogin="canLogin" />

        <!-- Mobile Header -->
        <div class="lg:hidden flex justify-between items-center px-6 py-4 bg-white border-b border-gray-200 fixed top-0 w-full z-40">
            <h1 class="font-bold text-lg text-gray-900 flex items-center gap-2">
                <Cpu class="text-blue-600 w-5 h-5" />
                K3N @ROX
            </h1>
        </div>

        <main class="pt-24 lg:pt-32 pb-16 flex-grow">
            <div class="max-w-7xl mx-auto px-6 lg:px-8">
                <div class="mb-12">
                    <h1 class="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Layanan Utama Kami</h1>
                    <p class="text-lg text-gray-600">Pilih dari berbagai layanan spesialisasi perbaikan kami yang ditangani langsung oleh teknisi profesional.</p>
                </div>
                
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div class="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                        <div class="w-12 h-12 bg-blue-50 border border-blue-100 text-blue-600 rounded-lg flex items-center justify-center mb-4">
                            <Smartphone class="w-6 h-6" />
                        </div>
                        <h3 class="text-lg font-semibold text-gray-900 mb-2">Penggantian LCD</h3>
                        <p class="text-gray-600 text-sm leading-relaxed">Pengerjaan cepat untuk layar retak atau blank. Menggunakan suku cadang original dengan garansi sentuhan.</p>
                    </div>
                    
                    <div class="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                        <div class="w-12 h-12 bg-blue-50 border border-blue-100 text-blue-600 rounded-lg flex items-center justify-center mb-4">
                            <BatteryCharging class="w-6 h-6" />
                        </div>
                        <h3 class="text-lg font-semibold text-gray-900 mb-2">Perbaikan Baterai</h3>
                        <p class="text-gray-600 text-sm leading-relaxed">Solusi untuk baterai drop atau kembung. Mengembalikan performa daya tahan perangkat seperti baru.</p>
                    </div>
                    
                    <div class="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                        <div class="w-12 h-12 bg-blue-50 border border-blue-100 text-blue-600 rounded-lg flex items-center justify-center mb-4">
                            <Cpu class="w-6 h-6" />
                        </div>
                        <h3 class="text-lg font-semibold text-gray-900 mb-2">Service Mesin & IC</h3>
                        <p class="text-gray-600 text-sm leading-relaxed">Penanganan mati total, konslet, atau rusak akibat cairan oleh teknisi mikro-soldering berpengalaman.</p>
                    </div>
                </div>
            </div>
        </main>

        <Footer class="hidden lg:block mt-auto" />
        <Navigation :canLogin="canLogin" />
    </div>
</template>
