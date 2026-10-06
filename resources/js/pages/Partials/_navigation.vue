<script setup>
import { Link } from '@inertiajs/vue3';
import { Home, LayoutGrid, Info, LogIn } from '@lucide/vue';
defineProps({ canLogin: Boolean });
</script>

<template>
    <div class="lg:hidden fixed bottom-0 w-full bg-white border-t border-gray-200 z-50 h-[70px] pb-safe">
        <div class="grid grid-cols-4 h-full">
            <Link href="/" :class="['flex flex-col justify-center items-center gap-1 transition-colors', $page.url === '/' ? 'text-blue-600' : 'text-gray-500 hover:text-blue-600']">
                <Home class="w-5 h-5" />
                <span class="text-[10px] font-medium">Beranda</span>
            </Link>
            <Link href="/layanan" :class="['flex flex-col justify-center items-center gap-1 transition-colors', $page.url.startsWith('/layanan') ? 'text-blue-600' : 'text-gray-500 hover:text-blue-600']">
                <LayoutGrid class="w-5 h-5" />
                <span class="text-[10px] font-medium">Layanan</span>
            </Link>
            <Link href="/prosedur" :class="['flex flex-col justify-center items-center gap-1 transition-colors', $page.url.startsWith('/prosedur') ? 'text-blue-600' : 'text-gray-500 hover:text-blue-600']">
                <Info class="w-5 h-5" />
                <span class="text-[10px] font-medium">Prosedur</span>
            </Link>
            <Link v-if="canLogin" href="/login" class="flex flex-col justify-center items-center gap-1 text-blue-600 font-medium">
                <LogIn class="w-5 h-5" />
                <span class="text-[10px]">Masuk</span>
            </Link>
        </div>
    </div>
</template>
