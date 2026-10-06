<script setup lang="ts">
import { Head, usePage, Link } from '@inertiajs/vue3';
import { 
    Wrench, 
    CheckCircle, 
    Smartphone,
    Activity,
    ChevronRight,
    Clock
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
                title: 'Beranda Pelanggan',
                href: '#',
            },
        ],
    },
});

const page = usePage();
const user = page.props.auth.user;

const props = defineProps<{
    stats: {
        totalServis: number;
        servisAktif: number;
    };
    riwayat: Array<{
        id: number;
        tipe_hp: string;
        status_id: number;
        status_text: string;
        keluhan: string;
        waktu: string;
    }>;
}>();

const getStatusBadge = (statusId: number) => {
    switch(statusId) {
        case 1: return { class: 'bg-slate-100 text-slate-700 hover:bg-slate-200' };
        case 2: return { class: 'bg-blue-100 text-blue-700 hover:bg-blue-200' };
        case 3: return { class: 'bg-amber-100 text-amber-700 hover:bg-amber-200' };
        case 4: return { class: 'bg-emerald-100 text-emerald-700 hover:bg-emerald-200' };
        case 5: return { class: 'bg-indigo-100 text-indigo-700 hover:bg-indigo-200' };
        case 6: return { class: 'bg-red-100 text-red-700 hover:bg-red-200' };
        default: return { class: 'bg-gray-100 text-gray-700 hover:bg-gray-200' };
    }
};

</script>

<template>
    <Head title="Beranda" />

    <div class="flex flex-1 flex-col gap-8 p-6 md:p-8 max-w-5xl mx-auto w-full">
        <div class="flex flex-col gap-1.5">
            <h2 class="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">Halo, {{ user.name }}!</h2>
            <p class="text-zinc-500 dark:text-zinc-400">
                Selamat datang di portal pelanggan. Di sini kamu bisa memantau perbaikan HP kamu.
            </p>
        </div>

        <div class="grid gap-4 md:gap-6 grid-cols-1 sm:grid-cols-2">
            <Card class="relative overflow-hidden border-zinc-200 shadow-sm">
                <div class="absolute right-0 top-0 h-full w-1 bg-blue-500"></div>
                <CardHeader class="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle class="text-sm font-medium text-zinc-600">Servis Aktif</CardTitle>
                    <Activity class="h-4 w-4 text-blue-600" />
                </CardHeader>
                <CardContent>
                    <div class="text-3xl font-bold text-zinc-900">{{ props.stats.servisAktif }}</div>
                    <p class="text-xs text-blue-600 mt-1">Perangkat sedang diperbaiki</p>
                </CardContent>
            </Card>

            <Card class="relative overflow-hidden border-zinc-200 shadow-sm">
                <div class="absolute right-0 top-0 h-full w-1 bg-emerald-500"></div>
                <CardHeader class="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle class="text-sm font-medium text-zinc-600">Total Servis</CardTitle>
                    <CheckCircle class="h-4 w-4 text-emerald-600" />
                </CardHeader>
                <CardContent>
                    <div class="text-3xl font-bold text-zinc-900">{{ props.stats.totalServis }}</div>
                    <p class="text-xs text-emerald-600 mt-1">Total riwayat perbaikan</p>
                </CardContent>
            </Card>
        </div>

        <Card class="border-zinc-200 shadow-sm flex flex-col">
            <CardHeader class="pb-4 border-b border-zinc-100">
                <div class="flex items-center justify-between">
                    <div>
                        <CardTitle class="text-lg text-zinc-800">Riwayat Servis Terbaru</CardTitle>
                    </div>
                    <Link href="#">
                        <Button size="sm">Ajukan Servis Baru</Button>
                    </Link>
                </div>
            </CardHeader>
            <CardContent class="p-0 flex-1">
                <div class="divide-y divide-zinc-100" v-if="props.riwayat.length > 0">
                    <div v-for="servis in props.riwayat" :key="servis.id" class="p-4 sm:p-5 flex items-start sm:items-center gap-4 hover:bg-zinc-50 transition-colors group">
                        <div class="bg-zinc-100 p-3 rounded-xl shrink-0 text-zinc-500">
                            <Smartphone class="h-5 w-5" />
                        </div>
                        <div class="flex-1 min-w-0">
                            <p class="text-sm font-semibold text-zinc-900">{{ servis.tipe_hp }}</p>
                            <p class="text-sm text-zinc-500 mt-1 line-clamp-1">Keluhan: {{ servis.keluhan }}</p>
                        </div>
                        <div class="flex flex-col items-end gap-1.5 shrink-0">
                            <Badge variant="outline" :class="getStatusBadge(servis.status_id).class">{{ servis.status_text }}</Badge>
                            <span class="text-xs text-zinc-400 font-medium flex items-center">
                                <Clock class="w-3 h-3 mr-1"/> {{ servis.waktu }}
                            </span>
                        </div>
                    </div>
                </div>
                <div v-else class="text-center py-12 flex flex-col items-center justify-center">
                    <div class="bg-zinc-100 p-4 rounded-full mb-3">
                        <Wrench class="h-6 w-6 text-zinc-400" />
                    </div>
                    <p class="text-sm font-medium text-zinc-900">Belum ada riwayat servis</p>
                    <p class="text-sm text-zinc-500 mt-1">Kamu belum pernah mendaftarkan servis HP.</p>
                </div>
            </CardContent>
        </Card>
    </div>
</template>
