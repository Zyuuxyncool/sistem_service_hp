<script setup>
import { Link } from '@inertiajs/vue3';
import { ref, onMounted, onUnmounted } from 'vue';

defineProps({
    canLogin: Boolean
});

const isScrolled = ref(false);

const handleScroll = () => {
    isScrolled.value = window.scrollY > 50;
};

onMounted(() => window.addEventListener('scroll', handleScroll));
onUnmounted(() => window.removeEventListener('scroll', handleScroll));
</script>

<template>
    <nav :class="[
        'fixed top-0 w-full z-50 transition-all duration-300 hidden lg:block',
        isScrolled ? 'bg-white/90 backdrop-blur-md shadow-md py-3' : 'bg-white/80 backdrop-blur-sm border-b border-white/30 py-5'
    ]">
        <div class="container mx-auto px-4 flex justify-between items-center max-w-7xl">
            <a href="#" class="flex items-center gap-3 text-xl font-bold text-gray-900">
                <div class="bg-blue-600 text-white w-10 h-10 flex items-center justify-center rounded-xl shadow-sm">
                    <ion-icon name="construct" class="text-xl"></ion-icon>
                </div>
                K3N @ROX Service
            </a>
            <div class="flex items-center gap-8 font-semibold text-gray-600">
                <a href="#beranda" class="hover:text-blue-600 transition-colors">Beranda</a>
                <a href="#layanan" class="hover:text-blue-600 transition-colors">Layanan</a>
                <a href="#alur" class="hover:text-blue-600 transition-colors">Cara Kerja</a>
                <Link v-if="canLogin" href="/login" class="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-full shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all">
                    Login Sistem <ion-icon name="log-in-outline" class="text-xl"></ion-icon>
                </Link>
            </div>
        </div>
    </nav>
</template>
