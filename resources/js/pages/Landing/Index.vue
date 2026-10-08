<script setup>
import { onMounted } from 'vue';
import { Head, Link } from '@inertiajs/vue3';
import { 
    Cpu, ArrowRight, ShieldCheck, Clock, 
    Search, Activity, Smartphone, ArrowUpRight, Sparkles
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
                entry.target.classList.remove('opacity-0', 'translate-y-12');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

    document.querySelectorAll('.reveal').forEach((el) => {
        observer.observe(el);
    });
});
</script>

<template>
    <Head title="Beranda | K3N @ROX" />

    <div class="min-h-screen bg-slate-50 text-slate-900 pb-[70px] lg:pb-0 font-sans flex flex-col selection:bg-blue-200 selection:text-blue-900 overflow-x-hidden relative">
        
        <!-- Ambient Mesh Background -->
        <div class="absolute top-0 inset-x-0 h-screen overflow-hidden pointer-events-none -z-10">
            <div class="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-blue-400/20 rounded-full blur-[120px] mix-blend-multiply"></div>
            <div class="absolute top-[10%] right-[-10%] w-[40%] h-[40%] bg-purple-400/20 rounded-full blur-[120px] mix-blend-multiply"></div>
            <div class="absolute bottom-[-10%] left-[20%] w-[60%] h-[40%] bg-teal-300/20 rounded-full blur-[120px] mix-blend-multiply"></div>
        </div>

        <Header :canLogin="canLogin" class="z-50 relative" />

        <!-- Mobile Header (Glassmorphism) -->
        <div class="lg:hidden flex justify-between items-center px-6 py-4 bg-white/70 backdrop-blur-xl border-b border-white/20 fixed top-0 w-full z-40 shadow-sm">
            <h1 class="font-bold text-lg text-slate-900 flex items-center gap-2">
                <Cpu class="text-blue-600 w-5 h-5" />
                <span class="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">K3N @ROX</span>
            </h1>
        </div>

        <main class="flex-grow pt-24 lg:pt-8">
            <!-- Hero Section -->
            <section class="relative py-20 lg:py-32 px-6 lg:px-8 max-w-7xl mx-auto z-10">
                <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 items-center">
                    
                    <!-- Left Content -->
                    <div class="reveal opacity-0 translate-y-12 transition-all duration-1000 ease-out order-2 lg:order-1">
                        <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 border border-blue-100 text-blue-700 text-sm font-semibold mb-8 backdrop-blur-sm shadow-sm hover:shadow-md transition-shadow cursor-default">
                            <Sparkles class="w-4 h-4 text-blue-500" />
                            Sistem Tracking Real-time Aktif
                        </div>
                        
                        <h1 class="text-5xl lg:text-7xl font-extrabold tracking-tight text-slate-900 mb-6 leading-[1.1] drop-shadow-sm">
                            Servis Cepat.<br/>
                            <span class="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent pb-2 block">
                                Transparansi Total.
                            </span>
                        </h1>
                        
                        <p class="text-lg lg:text-xl text-slate-600 mb-10 max-w-xl leading-relaxed font-medium">
                            Pantau perbaikan perangkat Anda dari mana saja. Kami menjamin transparansi harga, pengerjaan presisi dengan standar tinggi, dan garansi pasti.
                        </p>
                        
                        <div class="flex flex-col sm:flex-row gap-4">
                            <a href="#lacak" class="group inline-flex justify-center items-center gap-2 bg-slate-900 text-white px-8 py-4 rounded-full font-semibold hover:bg-blue-600 hover:shadow-lg hover:shadow-blue-500/30 active:scale-95 transition-all duration-300">
                                Lacak Perangkat
                                <Search class="w-4 h-4 group-hover:rotate-12 transition-transform" />
                            </a>
                            <Link href="/layanan" class="group inline-flex justify-center items-center gap-2 bg-white text-slate-700 border border-slate-200 px-8 py-4 rounded-full font-semibold hover:bg-slate-50 hover:border-slate-300 active:scale-95 transition-all duration-300 shadow-sm hover:shadow-md">
                                Lihat Layanan
                                <ArrowRight class="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </div>
                    </div>
                    
                    <!-- Right Content (Image & Floating Cards) -->
                    <div class="reveal opacity-0 translate-y-12 transition-all duration-1000 delay-200 ease-out order-1 lg:order-2 relative lg:ml-12">
                        <!-- Main Image Container -->
                        <div class="relative rounded-[2.5rem] overflow-hidden border-8 border-white/60 bg-white/30 backdrop-blur-xl shadow-2xl shadow-blue-500/10 aspect-square lg:aspect-auto lg:h-[600px] flex items-center justify-center group">
                            <div class="absolute inset-0 bg-gradient-to-tr from-blue-100/40 to-purple-100/40 opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-10 pointer-events-none"></div>
                            <img src="/images/hero_phone_repair.jpg" alt="Modern Smartphone Repair" class="w-full h-full object-cover transform scale-[1.02] group-hover:scale-110 transition-transform duration-1000 ease-out">
                        </div>

                        <!-- Floating Glass Card 1 -->
                        <div class="absolute -bottom-6 -left-6 lg:-left-12 bg-white/90 backdrop-blur-xl border border-white/50 p-5 rounded-2xl shadow-xl shadow-slate-200/60 animate-[bounce_4s_infinite] z-20">
                            <div class="flex items-center gap-4">
                                <div class="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center border border-emerald-200">
                                    <Activity class="w-6 h-6 text-emerald-600" />
                                </div>
                                <div>
                                    <p class="text-sm text-slate-500 font-medium">Status Perbaikan</p>
                                    <p class="text-slate-900 font-bold">Selesai (100%)</p>
                                </div>
                            </div>
                        </div>

                        <!-- Floating Glass Card 2 -->
                        <div class="absolute top-8 -right-4 lg:-right-8 bg-white/90 backdrop-blur-xl border border-white/50 p-4 rounded-2xl shadow-xl shadow-slate-200/60 animate-[bounce_5s_infinite_reverse] z-20">
                            <div class="flex items-center gap-3">
                                <ShieldCheck class="w-8 h-8 text-blue-600" />
                                <div>
                                    <p class="text-slate-900 font-bold text-sm">Garansi Resmi</p>
                                    <p class="text-xs text-slate-500">Aktif 90 Hari</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <!-- Tracking Widget Section -->
            <section id="lacak" class="relative z-20 mt-10 max-w-5xl mx-auto px-6 lg:px-8 mb-32 scroll-mt-32">
                <div class="reveal opacity-0 translate-y-12 transition-all duration-1000 ease-out bg-white/70 backdrop-blur-2xl border border-white rounded-[2.5rem] p-8 lg:p-14 shadow-2xl shadow-slate-200/60 relative overflow-hidden">
                    
                    <!-- Decorative blob inside widget -->
                    <div class="absolute -top-24 -right-24 w-64 h-64 bg-blue-400/10 rounded-full blur-[40px] pointer-events-none"></div>
                    <div class="absolute -bottom-24 -left-24 w-64 h-64 bg-purple-400/10 rounded-full blur-[40px] pointer-events-none"></div>
                    
                    <div class="text-center mb-10 relative z-10">
                        <div class="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-100 mb-6 shadow-sm">
                            <Search class="w-8 h-8 text-blue-600" />
                        </div>
                        <h2 class="text-3xl lg:text-4xl font-bold text-slate-900 mb-4 tracking-tight">Lacak Status Perbaikan</h2>
                        <p class="text-slate-600 text-lg">Masukkan ID Pelacakan (Invoice) atau Nomor HP yang terdaftar.</p>
                    </div>
                    
                    <form @submit.prevent="" class="flex flex-col md:flex-row gap-4 max-w-3xl mx-auto relative z-10">
                        <div class="relative flex-grow group">
                            <div class="absolute inset-y-0 left-0 pl-6 flex items-center pointer-events-none transition-transform group-focus-within:scale-110">
                                <Smartphone class="h-6 w-6 text-slate-400 group-focus-within:text-blue-500 transition-colors" />
                            </div>
                            <input 
                                type="text" 
                                id="tracking_id" 
                                class="w-full pl-16 pr-6 py-5 bg-white border-2 border-slate-100 rounded-2xl focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all outline-none text-slate-900 placeholder:text-slate-400 text-lg shadow-sm" 
                                placeholder="Contoh: INV-2023-001"
                            >
                        </div>
                        <button type="button" class="bg-slate-900 hover:bg-blue-600 text-white px-10 py-5 rounded-2xl font-bold text-lg transition-all active:scale-95 flex-shrink-0 flex items-center justify-center gap-3 shadow-xl shadow-slate-900/10 hover:shadow-blue-500/30 group">
                            Cek Status
                            <ArrowUpRight class="w-6 h-6 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                        </button>
                    </form>
                </div>
            </section>

            <!-- Features Section -->
            <section class="py-24 relative bg-white border-y border-slate-100">
                <div class="max-w-7xl mx-auto px-6 lg:px-8">
                    <div class="reveal opacity-0 translate-y-12 transition-all duration-1000 ease-out text-center max-w-2xl mx-auto mb-20">
                        <h2 class="text-3xl lg:text-5xl font-bold text-slate-900 tracking-tight mb-6">Standar Layanan Premium</h2>
                        <p class="text-slate-600 text-lg">Berkomitmen memberikan pengalaman perbaikan yang transparan, aman, dan bergaransi penuh.</p>
                    </div>

                    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <!-- Feature 1 -->
                        <div class="reveal opacity-0 translate-y-12 transition-all duration-1000 delay-100 ease-out group">
                            <div class="h-full bg-slate-50 border border-slate-200/60 p-8 lg:p-10 rounded-3xl hover:bg-white hover:border-blue-200 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-500/10 relative overflow-hidden">
                                <div class="absolute top-0 right-0 w-32 h-32 bg-blue-100/50 rounded-full blur-[30px] -translate-y-1/2 translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                                
                                <div class="relative z-10 w-16 h-16 bg-white border border-slate-200 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 group-hover:bg-blue-50 group-hover:border-blue-200 transition-all duration-500 shadow-sm">
                                    <Activity class="w-8 h-8 text-slate-700 group-hover:text-blue-600 transition-colors" />
                                </div>
                                <h3 class="relative z-10 text-xl font-bold text-slate-900 mb-4">Transparansi Penuh</h3>
                                <p class="relative z-10 text-slate-600 leading-relaxed font-medium">Dari pengecekan awal hingga harga suku cadang, semuanya diinformasikan di depan tanpa biaya tersembunyi.</p>
                            </div>
                        </div>

                        <!-- Feature 2 -->
                        <div class="reveal opacity-0 translate-y-12 transition-all duration-1000 delay-200 ease-out group">
                            <div class="h-full bg-slate-50 border border-slate-200/60 p-8 lg:p-10 rounded-3xl hover:bg-white hover:border-purple-200 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-purple-500/10 relative overflow-hidden">
                                <div class="absolute top-0 right-0 w-32 h-32 bg-purple-100/50 rounded-full blur-[30px] -translate-y-1/2 translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                                
                                <div class="relative z-10 w-16 h-16 bg-white border border-slate-200 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 group-hover:bg-purple-50 group-hover:border-purple-200 transition-all duration-500 shadow-sm">
                                    <Clock class="w-8 h-8 text-slate-700 group-hover:text-purple-600 transition-colors" />
                                </div>
                                <h3 class="relative z-10 text-xl font-bold text-slate-900 mb-4">Pengerjaan Tepat Waktu</h3>
                                <p class="relative z-10 text-slate-600 leading-relaxed font-medium">Estimasi waktu perbaikan akurat. Mayoritas perbaikan ringan dapat diselesaikan dalam hitungan jam di hari yang sama.</p>
                            </div>
                        </div>

                        <!-- Feature 3 -->
                        <div class="reveal opacity-0 translate-y-12 transition-all duration-1000 delay-300 ease-out group">
                            <div class="h-full bg-slate-50 border border-slate-200/60 p-8 lg:p-10 rounded-3xl hover:bg-white hover:border-pink-200 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-pink-500/10 relative overflow-hidden">
                                <div class="absolute top-0 right-0 w-32 h-32 bg-pink-100/50 rounded-full blur-[30px] -translate-y-1/2 translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                                
                                <div class="relative z-10 w-16 h-16 bg-white border border-slate-200 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 group-hover:bg-pink-50 group-hover:border-pink-200 transition-all duration-500 shadow-sm">
                                    <ShieldCheck class="w-8 h-8 text-slate-700 group-hover:text-pink-600 transition-colors" />
                                </div>
                                <h3 class="relative z-10 text-xl font-bold text-slate-900 mb-4">Garansi Suku Cadang</h3>
                                <p class="relative z-10 text-slate-600 leading-relaxed font-medium">Nikmati ketenangan pikiran dengan garansi resmi pada setiap perbaikan dan suku cadang yang kami ganti.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <!-- CTA Section -->
            <section class="py-24 lg:py-32 relative overflow-hidden bg-slate-50">
                <div class="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdib3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxjaXJjbGUgY3g9IjMiIGN5PSIzIiByPSIzIiBmaWxsPSIjZTE1OTU5IiBmaWxsLW9wYWNpdHk9IjAuMDUiLz48L2c+PC9zdmc+')] opacity-60"></div>
                
                <div class="max-w-5xl mx-auto px-6 lg:px-8 text-center reveal opacity-0 translate-y-12 transition-all duration-1000 ease-out relative z-10">
                    <div class="bg-slate-900 rounded-[3rem] p-12 lg:p-24 shadow-2xl overflow-hidden relative border border-slate-800">
                        <!-- Abstract shapes in CTA -->
                        <div class="absolute top-0 right-0 w-64 h-64 bg-blue-600/30 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
                        <div class="absolute bottom-0 left-0 w-64 h-64 bg-purple-600/30 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>
                        
                        <div class="relative z-10">
                            <h2 class="text-4xl lg:text-6xl font-bold text-white tracking-tight mb-8">
                                Perangkat Bermasalah?
                            </h2>
                            <p class="text-xl text-slate-300 mb-12 max-w-2xl mx-auto font-medium">
                                Jangan biarkan masalah perangkat menghambat aktivitas Anda. Konsultasikan dengan tim ahli kami sekarang.
                            </p>
                            <a href="#" class="group inline-flex justify-center items-center gap-3 bg-white text-slate-900 px-10 py-5 rounded-full font-bold text-lg hover:bg-blue-50 hover:scale-105 active:scale-95 transition-all shadow-[0_0_40px_rgba(255,255,255,0.2)]">
                                <Smartphone class="w-6 h-6 group-hover:animate-bounce" />
                                Konsultasi Gratis via WhatsApp
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </main>

        <Footer class="hidden lg:block mt-auto z-10 border-t border-slate-200 bg-white relative" />
        <Navigation :canLogin="canLogin" class="z-50" />
    </div>
</template>
