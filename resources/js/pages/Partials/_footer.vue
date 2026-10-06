<script setup>
import { Cpu, Phone, Mail } from '@lucide/vue';
</script>

<template>
    <footer class="bg-white border-t border-gray-200 py-10 mt-10">
        <div class="max-w-7xl mx-auto px-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <div class="flex items-center gap-2 text-gray-900 font-bold">
                <Cpu class="text-blue-600 w-5 h-5" />
                K3N @ROX Service
            </div>
            <p class="text-sm text-gray-500">
                &copy; {{ new Date().getFullYear() }} K3N AROX. Hak cipta dilindungi.
            </p>
            <div class="flex gap-4 text-gray-400">
                <a href="#" class="hover:text-gray-900 transition-colors"><Phone class="w-5 h-5" /></a>
                <a href="#" class="hover:text-gray-900 transition-colors"><Mail class="w-5 h-5" /></a>
            </div>
        </div>
    </footer>
</template>
