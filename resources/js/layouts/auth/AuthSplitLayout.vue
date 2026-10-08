<script setup lang="ts">
import { Link, usePage } from '@inertiajs/vue3';
import { Wrench, Sparkles } from '@lucide/vue';
import { home } from '@/routes';
import { onMounted } from 'vue';

const page = usePage();
const name = page.props.name || 'K3N @ROX';

defineProps<{
    title?: string;
    description?: string;
}>();

onMounted(() => {
    // Add simple reveal animation for the form
    const formContainer = document.querySelector('.auth-form-container');
    if (formContainer) {
        setTimeout(() => {
            formContainer.classList.add('opacity-100', 'translate-y-0');
            formContainer.classList.remove('opacity-0', 'translate-y-8');
        }, 100);
    }
});
</script>

<template>
    <div class="relative grid h-dvh flex-col items-center justify-center lg:max-w-none lg:grid-cols-2 overflow-hidden bg-slate-50">
        
        <!-- Bagian Kiri (Visual/Image) -->
        <div class="relative hidden h-full flex-col lg:flex overflow-hidden">
            <!-- Background Image -->
            <div class="absolute inset-0 bg-slate-900">
                <img src="/images/hero_phone_repair.jpg" class="absolute inset-0 w-full h-full object-cover opacity-60 scale-105 hover:scale-110 transition-transform duration-[20s] ease-out" alt="Background" />
                <div class="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/40 to-slate-900/20"></div>
                
                <!-- Ambient Glow -->
                <div class="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/30 rounded-full blur-[100px] mix-blend-screen pointer-events-none"></div>
                <div class="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/30 rounded-full blur-[100px] mix-blend-screen pointer-events-none"></div>
            </div>
            
            <div class="relative z-20 flex p-10 h-full flex-col justify-between">
                <Link :href="home()" class="inline-flex items-center gap-3 text-2xl font-bold tracking-tight text-white w-fit group">
                    <div class="bg-white/10 backdrop-blur-md p-2.5 rounded-xl border border-white/20 group-hover:bg-white/20 transition-all shadow-lg shadow-blue-500/20">
                        <Wrench class="size-6 text-blue-400 group-hover:rotate-12 transition-transform" />
                    </div>
                    <span class="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent drop-shadow-sm">
                        {{ name }}
                    </span>
                </Link>

                <!-- Floating Testimonial/Info Card -->
                <div class="mb-10 w-full max-w-lg">
                    <div class="bg-slate-950/60 backdrop-blur-xl border border-white/10 p-8 rounded-[2rem] shadow-2xl relative overflow-hidden group">
                        <div class="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        <div class="absolute -top-10 -right-10 w-32 h-32 bg-blue-500/20 rounded-full blur-2xl"></div>
                        
                        <div class="relative z-10">
                            <div class="flex items-center gap-3 mb-6">
                                <span class="flex h-3 w-3 relative">
                                    <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                                    <span class="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
                                </span>
                                <span class="text-sm font-medium text-emerald-400">Sistem Online Aktif</span>
                            </div>
                            
                            <blockquote class="space-y-4">
                                <p class="text-xl font-medium text-white leading-relaxed">
                                    "Manajemen perbaikan perangkat yang transparan, cepat, dan profesional. Kelola semuanya dalam satu dashboard cerdas."
                                </p>
                                <footer class="text-sm text-slate-400 font-medium flex items-center gap-2">
                                    <Sparkles class="w-4 h-4 text-purple-400" />
                                    Powered by K3N @ROX
                                </footer>
                            </blockquote>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <!-- Bagian Kanan (Form) -->
        <div class="relative flex flex-col justify-center h-full p-6 sm:p-10 lg:p-16 bg-slate-50 z-10 shadow-[-20px_0_40px_rgba(0,0,0,0.03)]">
            <!-- Decorative Elements -->
            <div class="absolute top-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-100/40 via-transparent to-transparent pointer-events-none -z-10"></div>
            
            <div class="mx-auto flex w-full flex-col justify-center space-y-8 sm:w-[420px] auth-form-container opacity-0 translate-y-8 transition-all duration-1000 ease-out">
                <div class="flex flex-col space-y-3 text-center lg:text-left">
                    <!-- Logo untuk mobile -->
                    <div class="flex justify-center lg:hidden mb-2">
                        <div class="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm">
                            <Wrench class="size-8 text-blue-600" />
                        </div>
                    </div>
                    <h1 class="text-3xl lg:text-4xl font-extrabold tracking-tight text-slate-900" v-if="title">
                        {{ title }}
                    </h1>
                    <p class="text-base text-slate-500 font-medium" v-if="description">
                        {{ description }}
                    </p>
                </div>
                
                <!-- Wrapper slot form dengan glass effect ringan -->
                <div class="bg-white p-8 rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 relative">
                    <slot />
                </div>
            </div>
        </div>
    </div>
</template>
