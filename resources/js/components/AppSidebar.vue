<script setup lang="ts">
import { computed } from 'vue';
import { usePage, Link } from '@inertiajs/vue3';
import { BookOpen, FolderGit2, Cpu } from '@lucide/vue';
import AppLogo from '@/components/AppLogo.vue';
import NavFooter from '@/components/NavFooter.vue';
import NavMain from '@/components/NavMain.vue';
import NavUser from '@/components/NavUser.vue';
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from '@/components/ui/sidebar';

// Ambil data menu dari HandleInertiaRequests (MenuService)
const menus = computed(() => usePage().props.menus || []);


</script>

<template>
    <Sidebar collapsible="icon" variant="inset">
        <SidebarHeader>
            <SidebarMenu>
                <SidebarMenuItem>
                    <SidebarMenuButton size="lg" as-child>
                        <Link href="/" class="flex items-center gap-2 text-lg font-bold text-gray-900 group-data-[collapsible=icon]:justify-center">
                            <Cpu class="text-blue-600 w-8 h-8 " />
                            <h5 class="truncate group-data-[collapsible=icon]:hidden">K3N @ROX</h5>
                        </Link>
                    </SidebarMenuButton>
                </SidebarMenuItem>
            </SidebarMenu>
        </SidebarHeader>

        <SidebarContent>
            <!-- Kirim dinamis menus ke NavMain -->
            <NavMain :menus="menus" />
        </SidebarContent>

        <SidebarFooter>
            <NavUser />
        </SidebarFooter>
    </Sidebar>
    <slot />
</template>
