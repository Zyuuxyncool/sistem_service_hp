<script setup>
import { Link } from '@inertiajs/vue3';

defineProps({
    canLogin: Boolean
});
</script>

<template>
    <div class="fixed bottom-0 w-full bg-white/95 backdrop-blur-lg border-t border-gray-100 shadow-[0_-5px_20px_rgba(0,0,0,0.05)] z-[1030] lg:hidden h-[70px]">
        <div class="flex justify-around items-center h-full text-gray-500">
            <a href="#beranda" class="flex flex-col items-center gap-1 hover:text-blue-600 transition-colors">
                <ion-icon name="home-outline" class="text-2xl"></ion-icon>
                <span class="text-[10px] font-semibold">Beranda</span>
            </a>
            <a href="#layanan" class="flex flex-col items-center gap-1 hover:text-blue-600 transition-colors">
                <ion-icon name="layers-outline" class="text-2xl"></ion-icon>
                <span class="text-[10px] font-semibold">Layanan</span>
            </a>
            <a href="#alur" class="flex flex-col items-center gap-1 hover:text-blue-600 transition-colors">
                <ion-icon name="sync-circle-outline" class="text-2xl"></ion-icon>
                <span class="text-[10px] font-semibold">Alur</span>
            </a>
            <Link v-if="canLogin" href="/login" class="flex flex-col items-center gap-1 text-blue-600">
                <ion-icon name="log-in-outline" class="text-2xl"></ion-icon>
                <span class="text-[10px] font-semibold">Login</span>
            </Link>
        </div>
    </div>
</template>
