<script setup lang="ts">
import { Form, Head } from '@inertiajs/vue3';
import InputError from '@/components/InputError.vue';
import PasswordInput from '@/components/PasswordInput.vue';
import TextLink from '@/components/TextLink.vue';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Spinner } from '@/components/ui/spinner';
import { register } from '@/routes';
import { store } from '@/routes/login';
import { request } from '@/routes/password';
import PasskeyVerify from '@/components/PasskeyVerify.vue';

defineOptions({
    layout: {
        title: 'Masuk ke Akun Anda',
        description: 'Masukkan email dan password untuk masuk ke sistem',
    },
});

defineProps<{
    status?: string;
    canResetPassword: boolean;
}>();
</script>

<template>
    <Head title="Log in" />

    <div
        v-if="status"
        class="mb-4 text-center text-sm font-medium text-emerald-600 bg-emerald-50 dark:bg-emerald-900/30 p-3 rounded-lg"
    >
        {{ status }}
    </div>

    <div
        v-if="$page.props.flash.error"
        class="mb-4 text-center text-sm font-medium text-red-600 bg-red-50 dark:bg-red-900/30 p-3 rounded-lg"
    >
        {{ $page.props.flash.error }}
    </div>

    <PasskeyVerify />

    <Form
        v-bind="store.form()"
        :reset-on-success="['password']"
        v-slot="{ errors, processing }"
        class="flex flex-col gap-6"
    >
        <div class="grid gap-5">
            <div class="grid gap-2">
                <Label for="email">Alamat Email</Label>
                <Input
                    id="email"
                    type="email"
                    name="email"
                    required
                    v-focus
                    :tabindex="1"
                    autocomplete="email"
                    placeholder="nama@email.com"
                    class="h-11"
                />
                <InputError :message="errors.email" />
            </div>

            <div class="grid gap-2">
                <div class="flex items-center justify-between">
                    <Label for="password">Password</Label>
                    <TextLink
                        v-if="canResetPassword"
                        :href="request()"
                        class="text-sm font-medium text-blue-600 hover:text-blue-500"
                        :tabindex="5"
                    >
                        Lupa password?
                    </TextLink>
                </div>
                <PasswordInput
                    id="password"
                    name="password"
                    required
                    :tabindex="2"
                    autocomplete="current-password"
                    placeholder="Masukkan password"
                    class="h-11"
                />
                <InputError :message="errors.password" />
            </div>

            <div class="flex items-center justify-between mt-1">
                <Label for="remember" class="flex items-center space-x-3 cursor-pointer">
                    <Checkbox id="remember" name="remember" :tabindex="3" />
                    <span class="text-sm font-normal text-zinc-600 dark:text-zinc-400">Ingat saya</span>
                </Label>
            </div>

            <Button
                type="submit"
                class="w-full h-11 text-base font-semibold bg-blue-600 hover:bg-blue-700 text-white"
                :tabindex="4"
                :disabled="processing"
                data-test="login-button"
            >
                <Spinner v-if="processing" class="mr-2" />
                Masuk
            </Button>
        </div>

        <div class="relative">
            <div class="absolute inset-0 flex items-center">
                <span class="w-full border-t border-zinc-200 dark:border-zinc-800" />
            </div>
            <div class="relative flex justify-center text-xs uppercase">
                <span class="bg-white dark:bg-zinc-950 px-2 text-zinc-500">Atau lanjutkan dengan</span>
            </div>
        </div>

        <a href="/auth/google" class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-sm hover:bg-zinc-50 dark:hover:bg-zinc-800 w-full h-11">
            <svg class="mr-2 h-4 w-4" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="google" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512">
                <path fill="currentColor" d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"></path>
            </svg>
            Google
        </a>

        <div class="text-center text-sm text-zinc-500 dark:text-zinc-400 mt-2">
            Belum punya akun?
            <TextLink :href="register()" :tabindex="5" class="font-semibold text-blue-600 hover:text-blue-500">Daftar sekarang</TextLink>
        </div>
    </Form>
</template>
