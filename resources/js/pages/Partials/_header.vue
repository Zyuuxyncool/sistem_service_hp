<script setup>
import { Link } from '@inertiajs/vue3';
import { Cpu, LogIn } from '@lucide/vue';

defineProps({ canLogin: Boolean });
</script>

<template>
    <nav class="hidden lg:block bg-white border-b border-gray-200 fixed top-0 w-full z-50">
        <div class="max-w-7xl mx-auto px-8 h-16 flex justify-between items-center">
            <Link href="/" class="flex items-center gap-2 text-lg font-bold text-gray-900">
                <Cpu class="text-blue-600 w-6 h-6" />
                K3N @ROX
            </Link>
            <div class="flex items-center gap-8 text-sm font-medium text-gray-600">
                <Link href="/" :class="['transition-colors', $page.url === '/' ? 'text-gray-900 font-bold' : 'hover:text-gray-900']">Beranda</Link>
                <Link href="/layanan" :class="['transition-colors', $page.url.startsWith('/layanan') ? 'text-gray-900 font-bold' : 'hover:text-gray-900']">Layanan</Link>
                <Link href="/prosedur" :class="['transition-colors', $page.url.startsWith('/prosedur') ? 'text-gray-900 font-bold' : 'hover:text-gray-900']">Prosedur</Link>
                <div class="w-px h-4 bg-gray-300"></div>
                <Link v-if="canLogin" href="/login" class="flex items-center gap-2 text-blue-600 hover:text-blue-700">
                    <LogIn class="w-5 h-5" />
                    <span>Login</span>
                </Link>
            </div>
        </div>
    </nav>
</template>
