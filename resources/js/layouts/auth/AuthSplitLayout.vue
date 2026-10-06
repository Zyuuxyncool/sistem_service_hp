<script setup lang="ts">
import { Link, usePage } from '@inertiajs/vue3';
import { Wrench } from '@lucide/vue';
import { home } from '@/routes';

const page = usePage();
const name = page.props.name || 'Service Center';

defineProps<{
    title?: string;
    description?: string;
}>();
</script>

<template>
    <div class="relative grid h-dvh flex-col items-center justify-center px-4 sm:px-0 lg:max-w-none lg:grid-cols-2 lg:px-0">
        <!-- Bagian Kiri (Gambar / Visual) -->
        <div class="relative hidden h-full flex-col p-10 text-white lg:flex dark:border-r border-zinc-800">
            <!-- Background Gradient Modern -->
            <div class="absolute inset-0 bg-zinc-900 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-blue-900/40 via-zinc-900 to-zinc-900" />
            
            <Link :href="home()" class="relative z-20 flex items-center text-xl font-bold tracking-tight">
                <div class="bg-blue-600 p-2 rounded-lg mr-3">
                    <Wrench class="size-5 text-white" />
                </div>
                {{ name }}
            </Link>

            <div class="relative z-20 mt-auto">
                <blockquote class="space-y-2">
                    <p class="text-lg">
                        "Sistem manajemen perbaikan perangkat terlengkap. Pantau status servis, kelola suku cadang, dan layani pelanggan dengan lebih profesional."
                    </p>
                    <footer class="text-sm text-zinc-400">Dashboard Manajemen Terpadu</footer>
                </blockquote>
            </div>
        </div>
        
        <!-- Bagian Kanan (Form) -->
        <div class="p-4 lg:p-8">
            <div class="mx-auto flex w-full flex-col justify-center space-y-8 sm:w-[400px]">
                <div class="flex flex-col space-y-2 text-center">
                    <!-- Logo untuk mobile -->
                    <div class="flex justify-center mb-4 lg:hidden">
                        <div class="bg-blue-600 p-3 rounded-xl">
                            <Wrench class="size-6 text-white" />
                        </div>
                    </div>
                    <h1 class="text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50" v-if="title">
                        {{ title }}
                    </h1>
                    <p class="text-sm text-zinc-500 dark:text-zinc-400" v-if="description">
                        {{ description }}
                    </p>
                </div>
                <slot />
            </div>
        </div>
    </div>
</template>
