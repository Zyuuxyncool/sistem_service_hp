<script setup lang="ts">
import { Head, usePage, Link } from '@inertiajs/vue3';
import { 
    Users, 
    Wrench, 
    CreditCard, 
    Package, 
    Activity, 
    AlertTriangle,
    ChevronRight,
    Smartphone,
    Wallet
} from '@lucide/vue';
import { 
    Card, 
    CardContent, 
    CardDescription, 
    CardHeader, 
    CardTitle 
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

defineOptions({
    layout: {
        breadcrumbs: [
            {
                title: 'Dashboard',
                href: '#',
            },
        ],
    },
});

const page = usePage();
const user = page.props.auth.user;

// Props from DashboardController
const props = defineProps<{
    stats: {
        totalPelanggan: number;
        servisAktif: number;
        stokMenipis: number;
        pendapatanBulanan: number;
    };
    recentActivity: Array<{
        id: number;
        pelanggan: string;
        tipe_hp: string;
        status_id: number;
        status_text: string;
        keluhan: string;
        waktu: string;
    }>;
}>();

// Helper to format Rupiah
const formatRupiah = (number: number) => {
    return new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
    }).format(number);
};

// Helper for status badge color
const getStatusBadge = (statusId: number) => {
    switch(statusId) {
        case 1: return { class: 'bg-slate-100 text-slate-700 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-300 border-slate-200 dark:border-slate-700' };
        case 2: return { class: 'bg-blue-100 text-blue-700 hover:bg-blue-200 dark:bg-blue-900/50 dark:text-blue-300 border-blue-200 dark:border-blue-800' };
        case 3: return { class: 'bg-amber-100 text-amber-700 hover:bg-amber-200 dark:bg-amber-900/50 dark:text-amber-300 border-amber-200 dark:border-amber-800' };
        case 4: return { class: 'bg-emerald-100 text-emerald-700 hover:bg-emerald-200 dark:bg-emerald-900/50 dark:text-emerald-300 border-emerald-200 dark:border-emerald-800' };
        case 5: return { class: 'bg-indigo-100 text-indigo-700 hover:bg-indigo-200 dark:bg-indigo-900/50 dark:text-indigo-300 border-indigo-200 dark:border-indigo-800' };
        case 6: return { class: 'bg-red-100 text-red-700 hover:bg-red-200 dark:bg-red-900/50 dark:text-red-300 border-red-200 dark:border-red-800' };
        default: return { class: 'bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 border-gray-200 dark:border-gray-700' };
    }
};

</script>

<template>
    <Head title="Dashboard" />

    <div class="flex flex-1 flex-col gap-8 p-6 md:p-8 max-w-7xl mx-auto w-full">
        <!-- Welcome Section -->
        <div class="flex flex-col gap-1.5">
            <h2 class="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">Selamat Datang, {{ user.name }}!</h2>
            <p class="text-zinc-500 dark:text-zinc-400">
                Berikut adalah ringkasan performa dan aktivitas toko servis Anda hari ini.
            </p>
        </div>

        <!-- Stats Grid -->
        <div class="grid gap-4 md:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            <!-- Total Pelanggan -->
            <Card class="relative overflow-hidden border-zinc-200 dark:border-zinc-800 shadow-sm transition-all hover:shadow-md">
                <div class="absolute right-0 top-0 h-full w-1 bg-blue-500"></div>
                <CardHeader class="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle class="text-sm font-medium text-zinc-600 dark:text-zinc-400">Total Pelanggan</CardTitle>
                    <div class="p-2 bg-blue-50 dark:bg-blue-900/20 rounded-full">
                        <Users class="h-4 w-4 text-blue-600 dark:text-blue-400" />
                    </div>
                </CardHeader>
                <CardContent>
                    <div class="text-3xl font-bold text-zinc-900 dark:text-zinc-50">{{ props.stats.totalPelanggan }}</div>
                    <p class="text-xs text-zinc-500 mt-1">
                        Terdaftar di sistem
                    </p>
                </CardContent>
            </Card>

            <!-- Servis Aktif -->
            <Card class="relative overflow-hidden border-zinc-200 dark:border-zinc-800 shadow-sm transition-all hover:shadow-md">
                <div class="absolute right-0 top-0 h-full w-1 bg-amber-500"></div>
                <CardHeader class="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle class="text-sm font-medium text-zinc-600 dark:text-zinc-400">Servis Aktif</CardTitle>
                    <div class="p-2 bg-amber-50 dark:bg-amber-900/20 rounded-full">
                        <Wrench class="h-4 w-4 text-amber-600 dark:text-amber-400" />
                    </div>
                </CardHeader>
                <CardContent>
                    <div class="text-3xl font-bold text-zinc-900 dark:text-zinc-50">{{ props.stats.servisAktif }}</div>
                    <p class="text-xs text-amber-600 dark:text-amber-400 mt-1 font-medium">
                        Sedang dalam antrean
                    </p>
                </CardContent>
            </Card>

            <!-- Stok Menipis -->
            <Card class="relative overflow-hidden border-zinc-200 dark:border-zinc-800 shadow-sm transition-all hover:shadow-md">
                <div class="absolute right-0 top-0 h-full w-1" :class="props.stats.stokMenipis > 0 ? 'bg-red-500' : 'bg-zinc-300 dark:bg-zinc-700'"></div>
                <CardHeader class="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle class="text-sm font-medium text-zinc-600 dark:text-zinc-400">Peringatan Stok</CardTitle>
                    <div class="p-2 rounded-full" :class="props.stats.stokMenipis > 0 ? 'bg-red-50 dark:bg-red-900/20' : 'bg-zinc-100 dark:bg-zinc-800'">
                        <Package class="h-4 w-4" :class="props.stats.stokMenipis > 0 ? 'text-red-600 dark:text-red-400' : 'text-zinc-400'" />
                    </div>
                </CardHeader>
                <CardContent>
                    <div class="text-3xl font-bold" :class="props.stats.stokMenipis > 0 ? 'text-red-600 dark:text-red-400' : 'text-zinc-900 dark:text-zinc-50'">{{ props.stats.stokMenipis }}</div>
                    <p class="text-xs text-zinc-500 mt-1 flex items-center">
                        <template v-if="props.stats.stokMenipis > 0">
                            <AlertTriangle class="mr-1 h-3 w-3 text-red-500" />
                            Item di bawah batas aman
                        </template>
                        <template v-else>
                            Stok suku cadang aman
                        </template>
                    </p>
                </CardContent>
            </Card>

            <!-- Pendapatan -->
            <Card class="relative overflow-hidden border-zinc-200 dark:border-zinc-800 shadow-sm transition-all hover:shadow-md bg-gradient-to-br from-emerald-50 to-white dark:from-emerald-950/20 dark:to-zinc-900">
                <div class="absolute right-0 top-0 h-full w-1 bg-emerald-500"></div>
                <CardHeader class="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle class="text-sm font-medium text-emerald-800 dark:text-emerald-400">Pendapatan Bulan Ini</CardTitle>
                    <div class="p-2 bg-emerald-100 dark:bg-emerald-900/40 rounded-full">
                        <Wallet class="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
                    </div>
                </CardHeader>
                <CardContent>
                    <div class="text-2xl sm:text-3xl font-black text-emerald-700 dark:text-emerald-400 tracking-tight">{{ formatRupiah(props.stats.pendapatanBulanan) }}</div>
                    <p class="text-xs text-emerald-600 dark:text-emerald-500 mt-1 font-medium">
                        Dari transaksi berstatus Lunas
                    </p>
                </CardContent>
            </Card>
        </div>

        <!-- Dua Kolom Bawah -->
        <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-7">
            <!-- Tabel Servis Terbaru (Lebar) -->
            <Card class="lg:col-span-4 border-zinc-200 dark:border-zinc-800 shadow-sm flex flex-col">
                <CardHeader class="pb-4 border-b border-zinc-100 dark:border-zinc-800/50">
                    <div class="flex items-center justify-between">
                        <div>
                            <CardTitle class="text-lg text-zinc-800 dark:text-zinc-100">Pekerjaan Servis Terbaru</CardTitle>
                            <CardDescription class="mt-1">
                                5 perangkat terakhir yang terdaftar di sistem.
                            </CardDescription>
                        </div>
                    </div>
                </CardHeader>
                <CardContent class="p-0 flex-1">
                    <div class="divide-y divide-zinc-100 dark:divide-zinc-800" v-if="props.recentActivity.length > 0">
                        <!-- Iterasi Item -->
                        <div v-for="servis in props.recentActivity" :key="servis.id" class="p-4 sm:p-5 flex items-start sm:items-center gap-4 hover:bg-zinc-50 dark:hover:bg-zinc-800/50 transition-colors group">
                            <div class="bg-zinc-100 dark:bg-zinc-800 p-3 rounded-xl shrink-0 group-hover:scale-105 transition-transform group-hover:bg-blue-100 dark:group-hover:bg-blue-900/40 group-hover:text-blue-600 dark:group-hover:text-blue-400 text-zinc-500">
                                <Smartphone class="h-5 w-5" />
                            </div>
                            <div class="flex-1 min-w-0">
                                <p class="text-sm font-semibold text-zinc-900 dark:text-zinc-100 truncate">
                                    {{ servis.tipe_hp }} 
                                    <span class="text-zinc-500 font-normal ml-1">({{ servis.pelanggan }})</span>
                                </p>
                                <p class="text-sm text-zinc-500 mt-1 line-clamp-1" :title="servis.keluhan">Keluhan: {{ servis.keluhan }}</p>
                            </div>
                            <div class="flex flex-col items-end gap-1.5 shrink-0">
                                <Badge variant="outline" :class="getStatusBadge(servis.status_id).class">{{ servis.status_text }}</Badge>
                                <span class="text-xs text-zinc-400 font-medium">{{ servis.waktu }}</span>
                            </div>
                        </div>
                    </div>
                    <div v-else class="text-center py-12 flex flex-col items-center justify-center">
                        <div class="bg-zinc-100 dark:bg-zinc-800/50 p-4 rounded-full mb-3">
                            <Wrench class="h-6 w-6 text-zinc-400" />
                        </div>
                        <p class="text-sm font-medium text-zinc-900 dark:text-zinc-100">Belum ada aktivitas</p>
                        <p class="text-sm text-zinc-500 mt-1">Belum ada pekerjaan servis yang didaftarkan.</p>
                    </div>
                </CardContent>
                <div class="p-4 border-t border-zinc-100 dark:border-zinc-800/50 mt-auto bg-zinc-50/50 dark:bg-zinc-900/20 rounded-b-xl">
                    <Link href="/admin/pekerjaan_servis" class="w-full">
                        <Button variant="outline" class="w-full bg-white dark:bg-zinc-900 hover:bg-zinc-100 dark:hover:bg-zinc-800 group">
                            Lihat Semua Pekerjaan Servis 
                            <ChevronRight class="ml-2 h-4 w-4 text-zinc-400 group-hover:text-zinc-600 dark:group-hover:text-zinc-300 transition-colors" />
                        </Button>
                    </Link>
                </div>
            </Card>

            <!-- Aktivitas Terkini (Sempit) -->
            <Card class="lg:col-span-3 border-zinc-200 dark:border-zinc-800 shadow-sm">
                <CardHeader class="pb-4 border-b border-zinc-100 dark:border-zinc-800/50">
                    <CardTitle class="text-lg text-zinc-800 dark:text-zinc-100">Status Sistem</CardTitle>
                    <CardDescription class="mt-1">
                        Informasi dan notifikasi real-time.
                    </CardDescription>
                </CardHeader>
                <CardContent class="p-5">
                    <div class="space-y-5">
                        <div class="flex items-start gap-4 p-3 rounded-lg bg-red-50 dark:bg-red-900/10 border border-red-100 dark:border-red-900/30" v-if="props.stats.stokMenipis > 0">
                            <div class="relative flex h-10 w-10 items-center justify-center rounded-full bg-red-100 dark:bg-red-900/40 shrink-0">
                                <Package class="h-5 w-5 text-red-600 dark:text-red-400" />
                            </div>
                            <div class="grid gap-1">
                                <p class="text-sm font-bold text-red-900 dark:text-red-300">Peringatan Stok Suku Cadang</p>
                                <p class="text-sm text-red-700/80 dark:text-red-400/80 leading-relaxed">Ada <strong>{{ props.stats.stokMenipis }} item suku cadang</strong> yang stoknya hampir habis (kurang dari 10). Segera lakukan pengecekan dan restock agar layanan servis tidak terhambat.</p>
                                <div class="mt-2">
                                    <Link href="/admin/suku_cadang">
                                        <Button size="sm" variant="outline" class="h-8 border-red-200 dark:border-red-800/50 hover:bg-red-100 dark:hover:bg-red-900/30 text-red-700 dark:text-red-400">
                                            Cek Suku Cadang
                                        </Button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        
                        <div class="flex items-start gap-4 p-3 rounded-lg border border-emerald-100 dark:border-emerald-900/20 bg-emerald-50/50 dark:bg-emerald-900/5">
                            <div class="relative flex h-10 w-10 items-center justify-center rounded-full bg-emerald-100 dark:bg-emerald-900/30 shrink-0">
                                <Activity class="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
                            </div>
                            <div class="grid gap-1">
                                <p class="text-sm font-semibold text-zinc-900 dark:text-zinc-100">Sistem Berjalan Normal</p>
                                <p class="text-sm text-zinc-500 leading-relaxed">Aplikasi berjalan dengan lancar. Seluruh modul layanan aktif dan siap digunakan hari ini.</p>
                            </div>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    </div>
</template>
