<script setup>
import { Head } from '@inertiajs/vue3';
import { Cpu } from '@lucide/vue';
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
    <Head title="Prosedur | Sistem Informasi Servis HP" />

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
                    <h1 class="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Prosedur Layanan</h1>
                    <p class="text-lg text-gray-600">Langkah-langkah yang transparan dan terukur untuk setiap perbaikan perangkat Anda.</p>
                </div>
                
                <div class="bg-gray-900 rounded-2xl p-8 md:p-12 text-white overflow-hidden relative shadow-lg">
                    <!-- Subtle background pattern -->
                    <div class="absolute inset-0 opacity-10" style="background-image: radial-gradient(#ffffff 1px, transparent 1px); background-size: 20px 20px;"></div>
                    
                    <div class="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-10">
                        <div>
                            <div class="text-blue-400 font-mono text-xl mb-3 border-b border-gray-700 pb-2 inline-block">01.</div>
                            <h4 class="text-xl font-medium mb-3">Pengecekan Awal</h4>
                            <p class="text-gray-400 text-sm leading-relaxed">Bawa perangkat Anda ke tempat kami. Teknisi ahli akan melakukan diagnosa kerusakan secara menyeluruh dan memberikan rincian estimasi biaya secara transparan sebelum tindakan apapun dilakukan.</p>
                        </div>
                        <div>
                            <div class="text-blue-400 font-mono text-xl mb-3 border-b border-gray-700 pb-2 inline-block">02.</div>
                            <h4 class="text-xl font-medium mb-3">Proses Servis</h4>
                            <p class="text-gray-400 text-sm leading-relaxed">Jika Anda setuju dengan estimasi biaya, teknisi akan mulai mengerjakan perbaikan. Anda bisa terus memantau progress pengerjaan dari rumah menggunakan nomor nota pada menu Beranda.</p>
                        </div>
                        <div>
                            <div class="text-blue-400 font-mono text-xl mb-3 border-b border-gray-700 pb-2 inline-block">03.</div>
                            <h4 class="text-xl font-medium mb-3">Selesai & Garansi</h4>
                            <p class="text-gray-400 text-sm leading-relaxed">Setelah perangkat selesai diperbaiki dan melewati proses Quality Control (QC), Anda akan dihubungi. Kami memberikan garansi tertulis untuk setiap layanan perbaikan kami.</p>
                        </div>
                    </div>
                </div>
            </div>
        </main>

        <Footer class="hidden lg:block mt-auto" />
        <Navigation :canLogin="canLogin" />
    </div>
</template>
