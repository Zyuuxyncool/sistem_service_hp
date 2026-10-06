<script setup lang="ts">
import { Link } from '@inertiajs/vue3';
import { ChevronRight } from '@lucide/vue';
import * as Icons from '@lucide/vue';
import {
    SidebarGroup,
    SidebarGroupLabel,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarMenuSub,
    SidebarMenuSubItem,
    SidebarMenuSubButton,
} from '@/components/ui/sidebar';
import {
    Collapsible,
    CollapsibleTrigger,
    CollapsibleContent,
} from '@/components/ui/collapsible';
import { useCurrentUrl } from '@/composables/useCurrentUrl';

defineProps<{
    menus: any[];
}>();

const { isCurrentUrl } = useCurrentUrl();

// Fungsi untuk mendapatkan icon dari Lucide secara dinamis
const getIcon = (iconName: string) => {
    if (!iconName) return Icons.Circle;
    // Map icon names from MenuService (e.g. 'home', 'cube', 'build') to Lucide (e.g. 'Home', 'Box', 'Wrench')
    const mapping: Record<string, any> = {
        'home': Icons.Home,
        'cube': Icons.Box,
        'build': Icons.Wrench,
        'settings': Icons.Settings,
        'monitor': Icons.Monitor,
    };
    
    if (mapping[iconName]) return mapping[iconName];

    const name = iconName.charAt(0).toUpperCase() + iconName.slice(1);
    return Icons[name as keyof typeof Icons] || Icons.Circle;
};
</script>

<template>
    <SidebarGroup class="px-2 py-0">
        <SidebarGroupLabel>Menu Utama</SidebarGroupLabel>
        <SidebarMenu>
            <template v-for="(menu, key) in menus" :key="key">
                <!-- Jika ada sub-menu, gunakan Collapsible -->
                <Collapsible v-if="menu.sub_menus" as-child :default-open="false">
                    <SidebarMenuItem>
                        <CollapsibleTrigger as-child>
                            <SidebarMenuButton :tooltip="menu.caption">
                                <component :is="getIcon(menu.icon)" />
                                <span>{{ menu.caption }}</span>
                                <ChevronRight class="ml-auto transition-transform duration-200 group-data-[state=open]:rotate-90" />
                            </SidebarMenuButton>
                        </CollapsibleTrigger>
                        <CollapsibleContent>
                            <SidebarMenuSub>
                                <SidebarMenuSubItem v-for="(subMenu, subKey) in menu.sub_menus" :key="subKey">
                                    <SidebarMenuSubButton as-child :is-active="isCurrentUrl(subMenu.url)">
                                        <Link :href="subMenu.url">
                                            <span>{{ subMenu.caption }}</span>
                                        </Link>
                                    </SidebarMenuSubButton>
                                </SidebarMenuSubItem>
                            </SidebarMenuSub>
                        </CollapsibleContent>
                    </SidebarMenuItem>
                </Collapsible>

                <!-- Jika tidak ada sub-menu, tampilkan link biasa -->
                <SidebarMenuItem v-else>
                    <SidebarMenuButton
                        as-child
                        :is-active="isCurrentUrl(menu.url)"
                        :tooltip="menu.caption"
                    >
                        <Link :href="menu.url">
                            <component :is="getIcon(menu.icon)" />
                            <span>{{ menu.caption }}</span>
                        </Link>
                    </SidebarMenuButton>
                </SidebarMenuItem>
            </template>
        </SidebarMenu>
    </SidebarGroup>
</template>
