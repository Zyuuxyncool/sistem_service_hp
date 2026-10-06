<script setup>
import { Head } from '@inertiajs/vue3';
import { onMounted } from 'vue';
import Header from './Partials/_header.vue';
import Footer from './Partials/_footer.vue';
import Navigation from './Partials/_navigation.vue';

defineProps({
    canLogin: {
        type: Boolean,
        default: true
    },
    canRegister: {
        type: Boolean,
        default: false
    },
});

onMounted(() => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('opacity-100', 'translate-y-0');
                entry.target.classList.remove('opacity-0', 'translate-y-10');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.animate-on-scroll').forEach(el => {
        observer.observe(el);
    });
});
</script>

<template>
    <Head title="Selamat Datang di Servis HP">
        <!-- Ion Icons -->
        <component is="script" type="module" src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"></component>
        <component is="script" nomodule src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"></component>
    </Head>

    <div class="min-h-screen bg-slate-50 pb-[70px] lg:pb-0 font-sans text-gray-800 overflow-x-hidden">
        <!-- Desktop Header -->
        <Header :canLogin="canLogin" />

        <!-- Mobile Header (Just Logo) -->
        <div class="lg:hidden flex justify-center items-center p-4 bg-white/95 backdrop-blur-md fixed top-0 w-full z-40 shadow-sm h-[60px]">
            <h5 class="m-0 font-bold text-gray-900 flex items-center gap-2">
                <div class="bg-blue-600 text-white w-8 h-8 flex items-center justify-center rounded-md">
                    <ion-icon name="construct"></ion-icon>
                </div>
                K3N @ROX Service
            </h5>
        </div>

        <!-- Hero Section -->
        <section id="beranda" class="relative overflow-hidden bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-indigo-50 via-white to-white pt-24 lg:pt-0">
            <div class="container mx-auto px-4 max-w-7xl relative z-10">
                <div class="flex flex-col lg:flex-row items-center min-h-[100vh] lg:min-h-[85vh]">
                    <div class="w-full lg:w-1/2 text-center lg:text-left mt-12 lg:mt-0 animate-on-scroll opacity-0 translate-y-10 transition-all duration-700">
                        <span class="inline-flex items-center gap-2 bg-white text-blue-600 px-4 py-2 rounded-full font-bold text-sm shadow-sm border border-blue-100 mb-6">
                            <ion-icon name="star" class="text-amber-400 text-lg"></ion-icon> Teknisi Handal & Terpercaya
                        </span>
                        <h1 class="text-5xl lg:text-6xl font-extrabold mb-6 tracking-tight text-slate-900 leading-[1.1]">
                            Solusi Cepat<br/>
                            <span class="text-blue-600">Masalah HP Anda</span>
                        </h1>
                        <p class="text-lg text-slate-600 mb-10 max-w-lg mx-auto lg:mx-0">
                            Layanan perbaikan layar retak, baterai drop, mati total, hingga masalah software dengan harga transparan dan bergaransi resmi.
                        </p>
                        <div class="flex flex-wrap gap-4 justify-center lg:justify-start">
                            <a href="#layanan" class="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-bold shadow-lg shadow-blue-600/30 hover:shadow-xl hover:-translate-y-1 transition-all">
                                Jelajahi Layanan <ion-icon name="arrow-forward-outline" class="text-xl"></ion-icon>
                            </a>
                            <a href="#cek-status" class="flex items-center gap-2 bg-white hover:bg-gray-50 text-slate-900 border border-gray-200 px-8 py-4 rounded-full font-bold shadow-sm hover:shadow-md transition-all">
                                Cek Status Servis
                            </a>
                        </div>
                    </div>
                    <div class="w-full lg:w-1/2 mt-16 lg:mt-0 flex justify-center animate-on-scroll opacity-0 translate-y-10 transition-all duration-700 delay-200 relative">
                        <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] max-w-[600px] max-h-[600px] bg-gradient-to-tr from-blue-200 to-indigo-100 rounded-[40%_60%_70%_30%/40%_50%_60%_50%] animate-[blob_8s_ease-in-out_infinite] z-0 blur-xl opacity-60"></div>
                        <img src="https://images.unsplash.com/photo-1598327105666-5b89351aff97?q=80&w=800&auto=format&fit=crop" alt="Phone Repair" class="relative z-10 w-full max-w-[400px] rounded-[35px] shadow-2xl border-[6px] border-white animate-[float_4s_ease-in-out_infinite] object-cover h-[500px]">
                    </div>
                </div>
            </div>
        </section>

        <!-- Layanan Kami -->
        <section id="layanan" class="py-24 bg-white">
            <div class="container mx-auto px-4 max-w-7xl">
                <div class="text-center mb-16 animate-on-scroll opacity-0 translate-y-10 transition-all duration-700">
                    <h6 class="text-blue-600 font-bold tracking-widest uppercase text-sm mb-3">Spesialisasi Kami</h6>
                    <h2 class="text-4xl lg:text-5xl font-extrabold text-slate-900">Layanan Perbaikan Terbaik</h2>
                </div>
                
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <!-- Card 1 -->
                    <div class="bg-white rounded-[32px] p-8 xl:p-10 text-center border border-gray-100 shadow-[0_10px_40px_rgba(0,0,0,0.03)] hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(37,99,235,0.1)] transition-all duration-300 group animate-on-scroll opacity-0 translate-y-10 delay-100">
                        <div class="w-20 h-20 mx-auto rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:-rotate-6 transition-transform">
                            <ion-icon name="phone-portrait-outline" class="text-4xl"></ion-icon>
                        </div>
                        <h4 class="text-2xl font-bold mb-4 text-slate-900">Ganti Layar LCD</h4>
                        <p class="text-slate-500 leading-relaxed">Layar retak, blank hitam, atau tidak responsif? Kami ganti dengan part kualitas original terbaik.</p>
                    </div>
                    
                    <!-- Card 2 -->
                    <div class="bg-white rounded-[32px] p-8 xl:p-10 text-center border border-gray-100 shadow-[0_10px_40px_rgba(0,0,0,0.03)] hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(37,99,235,0.1)] transition-all duration-300 group animate-on-scroll opacity-0 translate-y-10 delay-200">
                        <div class="w-20 h-20 mx-auto rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:-rotate-6 transition-transform">
                            <ion-icon name="battery-charging-outline" class="text-4xl"></ion-icon>
                        </div>
                        <h4 class="text-2xl font-bold mb-4 text-slate-900">Ganti Baterai</h4>
                        <p class="text-slate-500 leading-relaxed">Baterai boros atau kembung? Proses ganti cepat, aman, dan bergaransi panjang hingga 6 bulan.</p>
                    </div>

                    <!-- Card 3 -->
                    <div class="bg-white rounded-[32px] p-8 xl:p-10 text-center border border-gray-100 shadow-[0_10px_40px_rgba(0,0,0,0.03)] hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(37,99,235,0.1)] transition-all duration-300 group animate-on-scroll opacity-0 translate-y-10 delay-300">
                        <div class="w-20 h-20 mx-auto rounded-2xl bg-rose-50 text-rose-600 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:-rotate-6 transition-transform">
                            <ion-icon name="hardware-chip-outline" class="text-4xl"></ion-icon>
                        </div>
                        <h4 class="text-2xl font-bold mb-4 text-slate-900">Mati Total & Mesin</h4>
                        <p class="text-slate-500 leading-relaxed">Analisa mendalam untuk kerusakan mesin, IC Power, kena air, atau perangkat konslet parah.</p>
                    </div>
                </div>
            </div>
        </section>

        <!-- Alur Kerja & Cek Status -->
        <section id="alur" class="py-24 bg-slate-50">
            <div class="container mx-auto px-4 max-w-7xl">
                <div class="flex flex-col lg:flex-row items-center gap-16">
                    <div class="w-full lg:w-1/2 animate-on-scroll opacity-0 translate-y-10 transition-all duration-700">
                        <h6 class="text-blue-600 font-bold tracking-widest uppercase text-sm mb-3">Sangat Mudah</h6>
                        <h2 class="text-4xl lg:text-5xl font-extrabold text-slate-900 mb-6">Cara Kerja Kami</h2>
                        <p class="text-lg text-slate-600 mb-10">Transparansi adalah kunci kenyamanan. Ikuti 3 langkah mudah untuk mengembalikan kondisi smartphone Anda.</p>
                        
                        <div class="space-y-8">
                            <div class="flex group">
                                <div class="shrink-0 w-16 h-16 rounded-2xl bg-blue-600 text-white flex items-center justify-center text-2xl font-bold shadow-lg shadow-blue-600/30 group-hover:-translate-y-1 transition-transform">1</div>
                                <div class="ml-6 pt-1">
                                    <h5 class="text-xl font-bold text-slate-900 mb-2">Bawa Perangkat</h5>
                                    <p class="text-slate-500">Admin mencatat keluhan mendetail dan membuatkan Anda Nota Tanda Terima fisik & digital.</p>
                                </div>
                            </div>
                            <div class="flex group">
                                <div class="shrink-0 w-16 h-16 rounded-2xl bg-white text-blue-600 border-2 border-blue-100 shadow-sm flex items-center justify-center text-2xl font-bold group-hover:-translate-y-1 transition-transform">2</div>
                                <div class="ml-6 pt-1">
                                    <h5 class="text-xl font-bold text-slate-900 mb-2">Pengecekan Menyeluruh</h5>
                                    <p class="text-slate-500">Teknisi mengecek secara detail dan menginfokan estimasi biaya sebelum part diganti. Anda bisa menolak tanpa biaya.</p>
                                </div>
                            </div>
                            <div class="flex group">
                                <div class="shrink-0 w-16 h-16 rounded-2xl bg-white text-blue-600 border-2 border-blue-100 shadow-sm flex items-center justify-center text-2xl font-bold group-hover:-translate-y-1 transition-transform">3</div>
                                <div class="ml-6 pt-1">
                                    <h5 class="text-xl font-bold text-slate-900 mb-2">Selesai & Bayar</h5>
                                    <p class="text-slate-500">HP selesai diperbaiki, kami infokan via WhatsApp. Anda datang untuk konfirmasi, pengetesan, dan pembayaran.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div id="cek-status" class="w-full lg:w-1/2 animate-on-scroll opacity-0 translate-y-10 transition-all duration-700 delay-200">
                        <div class="bg-white/70 backdrop-blur-xl border border-white rounded-[40px] p-8 md:p-14 shadow-[0_20px_60px_rgba(0,0,0,0.06)] relative overflow-hidden">
                            <div class="absolute top-0 right-0 w-64 h-64 bg-blue-50 rounded-full blur-3xl -mr-20 -mt-20 z-0"></div>
                            <div class="relative z-10 text-center mb-10">
                                <div class="w-24 h-24 mx-auto bg-blue-600 text-white rounded-3xl flex items-center justify-center shadow-lg shadow-blue-600/30 mb-8 rotate-3">
                                    <ion-icon name="search" class="text-5xl"></ion-icon>
                                </div>
                                <h3 class="text-3xl font-extrabold text-slate-900">Lacak Servisan</h3>
                            </div>
                            <p class="text-slate-500 mb-8 text-center text-lg relative z-10">Masukkan <strong class="text-slate-800">Nomor Nota</strong> atau <strong class="text-slate-800">No. HP</strong> Anda untuk melihat status perbaikan secara Real-time.</p>
                            <div class="flex p-2 bg-slate-50 rounded-full shadow-inner border border-gray-200 relative z-10 focus-within:ring-4 ring-blue-100 transition-all">
                                <input type="text" class="flex-1 bg-transparent border-none px-6 outline-none text-slate-900 placeholder-slate-400 font-medium text-lg" placeholder="Contoh: INV-001...">
                                <button class="bg-blue-600 hover:bg-blue-700 text-white w-14 h-14 rounded-full flex items-center justify-center shrink-0 transition-colors shadow-md">
                                    <ion-icon name="arrow-forward-outline" class="text-2xl"></ion-icon>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Desktop Footer -->
        <Footer class="hidden lg:block" />

        <!-- Mobile Bottom Navigation -->
        <Navigation :canLogin="canLogin" />
    </div>
</template>

<style>
/* CSS Animations (Tailwind classes handle the rest) */
@keyframes float {
    0%, 100% { transform: translateY(0px); }
    50% { transform: translateY(-20px); }
}
@keyframes blob {
    0%, 100% { border-radius: 40% 60% 70% 30% / 40% 50% 60% 50%; }
    34% { border-radius: 70% 30% 50% 50% / 30% 30% 70% 70%; }
    67% { border-radius: 100% 60% 60% 100% / 100% 100% 60% 60%; }
}
</style>
