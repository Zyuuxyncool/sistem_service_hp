<script setup>
import { onMounted } from 'vue';
import { Head, Link } from '@inertiajs/vue3';
import { 
    Cpu, ArrowRight, ShieldCheck, Clock, 
    Search, CheckCircle2, MessageSquare, Wrench 
} from '@lucide/vue';
import Header from '../Partials/_header.vue';
import Footer from '../Partials/_footer.vue';
import Navigation from '../Partials/_navigation.vue';

defineProps({
    canLogin: {
        type: Boolean,
        default: true
    }
});

onMounted(() => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('opacity-100', 'translate-y-0');
                entry.target.classList.remove('opacity-0', 'translate-y-8');
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

    document.querySelectorAll('.reveal').forEach((el) => {
        observer.observe(el);
    });
});
</script>

<template>
    <Head title="Beranda | Sistem Informasi Servis HP" />

    <div class="min-h-screen bg-gray-50 text-gray-900 pb-[70px] lg:pb-0 font-sans flex flex-col selection:bg-blue-200 selection:text-blue-900 overflow-x-hidden">
        <Header :canLogin="canLogin" />

        <!-- Mobile Header -->
        <div class="lg:hidden flex justify-between items-center px-6 py-4 bg-white/80 backdrop-blur-md border-b border-gray-200 fixed top-0 w-full z-40">
            <h1 class="font-bold text-lg text-gray-900 flex items-center gap-2">
                <Cpu class="text-blue-600 w-5 h-5" />
                K3N @ROX
            </h1>
        </div>

        <main class="pt-24 lg:pt-32 flex-grow">
            <!-- Hero Section -->
            <section class="max-w-7xl mx-auto px-6 lg:px-8 mb-24 lg:mb-32">
                <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
                    <div class="reveal opacity-0 translate-y-8 transition-all duration-700 ease-out">
                        <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-sm font-medium mb-6">
                            <span class="relative flex h-2 w-2">
                                <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                                <span class="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                            </span>
                            Sistem Tracking Real-time
                        </div>
                        <h1 class="text-4xl lg:text-6xl font-extrabold tracking-tight text-gray-900 mb-6 leading-[1.1]">
                            Servis HP Cepat.<br class="hidden lg:block"/> Transparan.
                        </h1>
                        <p class="text-lg text-gray-600 mb-8 max-w-xl leading-relaxed">
                            Pantau status perbaikan perangkat Anda dari mana saja. Kami menjamin transparansi harga, pengerjaan presisi, dan garansi untuk setiap suku cadang.
                        </p>
                        
                        <div class="flex flex-col sm:flex-row gap-4">
                            <Link href="/layanan" class="group inline-flex justify-center items-center gap-2 bg-gray-900 text-white px-6 py-3.5 rounded-xl font-medium hover:bg-gray-800 hover:-translate-y-0.5 transition-all shadow-sm">
                                Lihat Layanan
                                <ArrowRight class="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </Link>
                            <Link href="/prosedur" class="inline-flex justify-center items-center gap-2 bg-white text-gray-700 border border-gray-300 px-6 py-3.5 rounded-xl font-medium hover:bg-gray-50 hover:-translate-y-0.5 transition-all">
                                Cara Kerja
                            </Link>
                        </div>
                    </div>
                    
                    <!-- Tracking Widget -->
                    <div class="reveal opacity-0 translate-y-8 transition-all duration-700 delay-100 ease-out lg:ml-8 relative">
                        <!-- Decorative background element (clean, not slop) -->
                        <div class="absolute -inset-4 bg-gradient-to-tr from-gray-200 to-gray-50 rounded-3xl opacity-50 -z-10 transform rotate-2"></div>
                        
                        <div id="lacak" class="bg-white p-8 rounded-2xl border border-gray-200 shadow-[0_8px_30px_rgb(0,0,0,0.04)] relative z-10">
                            <div class="mb-8">
                                <div class="w-12 h-12 bg-gray-50 border border-gray-100 rounded-xl flex items-center justify-center mb-4">
                                    <Search class="w-5 h-5 text-gray-700" />
                                </div>
                                <h3 class="text-2xl font-bold text-gray-900 tracking-tight">Cek Status Service</h3>
                                <p class="text-sm text-gray-500 mt-2">Masukkan Nomor Nota atau Nomor HP yang terdaftar saat penyerahan perangkat.</p>
                            </div>
                            
                            <form @submit.prevent="" class="space-y-5">
                                <div>
                                    <label for="tracking_id" class="block text-sm font-semibold text-gray-700 mb-2">ID Pelacakan</label>
                                    <input type="text" id="tracking_id" class="w-full px-4 py-3.5 rounded-xl border border-gray-300 focus:ring-4 focus:ring-blue-50 focus:border-blue-500 transition-all outline-none text-gray-900 placeholder:text-gray-400" placeholder="Contoh: INV-2023-001">
                                </div>
                                <button type="button" class="group w-full bg-blue-600 text-white px-4 py-3.5 rounded-xl font-medium hover:bg-blue-700 active:scale-[0.98] transition-all flex justify-center items-center gap-2">
                                    Lacak Sekarang
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            <!-- Features Section -->
            <section class="border-t border-gray-200 bg-white py-24">
                <div class="max-w-7xl mx-auto px-6 lg:px-8">
                    <div class="reveal opacity-0 translate-y-8 transition-all duration-700 ease-out text-center max-w-2xl mx-auto mb-16">
                        <h2 class="text-3xl font-bold text-gray-900 tracking-tight mb-4">Standar Layanan Kami</h2>
                        <p class="text-gray-600">Berkomitmen memberikan pengalaman perbaikan yang aman, jujur, dan profesional untuk setiap pelanggan.</p>
                    </div>

                    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div class="reveal opacity-0 translate-y-8 transition-all duration-700 delay-100 ease-out group p-8 rounded-2xl border border-gray-100 bg-gray-50/50 hover:bg-white hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:border-gray-200 transition-all">
                            <div class="w-12 h-12 bg-white border border-gray-200 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:-translate-y-1 transition-all duration-300">
                                <Search class="w-5 h-5 text-gray-900" />
                            </div>
                            <h3 class="text-lg font-bold text-gray-900 mb-3">Transparansi Penuh</h3>
                            <p class="text-gray-600 text-sm leading-relaxed">Dari pengecekan awal hingga harga suku cadang, semuanya diinformasikan di depan. Tidak ada biaya tersembunyi.</p>
                        </div>

                        <div class="reveal opacity-0 translate-y-8 transition-all duration-700 delay-200 ease-out group p-8 rounded-2xl border border-gray-100 bg-gray-50/50 hover:bg-white hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:border-gray-200 transition-all">
                            <div class="w-12 h-12 bg-white border border-gray-200 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:-translate-y-1 transition-all duration-300">
                                <Clock class="w-5 h-5 text-gray-900" />
                            </div>
                            <h3 class="text-lg font-bold text-gray-900 mb-3">Pengerjaan Tepat Waktu</h3>
                            <p class="text-gray-600 text-sm leading-relaxed">Estimasi waktu perbaikan yang akurat. Sebagian besar masalah ringan dapat diselesaikan pada hari yang sama.</p>
                        </div>

                        <div class="reveal opacity-0 translate-y-8 transition-all duration-700 delay-300 ease-out group p-8 rounded-2xl border border-gray-100 bg-gray-50/50 hover:bg-white hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:border-gray-200 transition-all">
                            <div class="w-12 h-12 bg-white border border-gray-200 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:-translate-y-1 transition-all duration-300">
                                <ShieldCheck class="w-5 h-5 text-gray-900" />
                            </div>
                            <h3 class="text-lg font-bold text-gray-900 mb-3">Garansi Suku Cadang</h3>
                            <p class="text-gray-600 text-sm leading-relaxed">Semua perbaikan dan penggantian suku cadang dilindungi oleh garansi resmi dari bengkel kami.</p>
                        </div>
                    </div>
                </div>
            </section>

            <!-- CTA Section -->
            <section class="py-24 bg-gray-50">
                <div class="max-w-4xl mx-auto px-6 lg:px-8 text-center reveal opacity-0 translate-y-8 transition-all duration-700 ease-out">
                    <div class="bg-gray-900 rounded-3xl p-10 lg:p-16 overflow-hidden relative">
                        <!-- Minimalist grid background inside dark card -->
                        <div class="absolute inset-0 opacity-[0.03]" style="background-image: radial-gradient(circle at 2px 2px, white 1px, transparent 0); background-size: 24px 24px;"></div>
                        
                        <div class="relative z-10">
                            <h2 class="text-3xl lg:text-4xl font-bold text-white tracking-tight mb-6">
                                Perangkat Anda bermasalah?
                            </h2>
                            <p class="text-gray-400 text-lg mb-10 max-w-xl mx-auto">
                                Konsultasikan kendala smartphone Anda sekarang. Tim teknisi kami siap memberikan solusi terbaik.
                            </p>
                            <a href="#" class="inline-flex justify-center items-center gap-2 bg-white text-gray-900 px-8 py-4 rounded-xl font-bold hover:bg-gray-100 hover:scale-105 active:scale-95 transition-all">
                                <MessageSquare class="w-5 h-5" />
                                Konsultasi via WhatsApp
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </main>

        <Footer class="hidden lg:block mt-auto" />
        <Navigation :canLogin="canLogin" />
    </div>
</template>
