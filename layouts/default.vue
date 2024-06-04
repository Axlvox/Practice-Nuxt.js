<template>
    <div>
        <nav class="flex items-center justify-between flex-wrap bg-teal-500 p-6">
            <div class="flex items-center flex-shrink-0 text-white mr-6">
                <NuxtLink to="/">
                    <span class="font-semibold text-xl tracking-tight"></span>
                </NuxtLink>
            </div>
            <div class="block lg:hidden">
                <button class="flex items-center px-3 py-2 boder rounded text-teal-200 border-teal-400" @click="toggleMenu">
                    <PhosphorIconMonitorPlay :size="50" color="#000" weight="duotone" />

                    <title>MENU</title>
                <path
                    :class="{ hidden: isOpen, 'inline-block': !isOpen}"
                    class="fill-current"
                    d="M0 0h20v20H0z"
                />
                <path
                    :class="{ hidden: isOpen, 'inline-block': !isOpen}"
                    class="fill-current"
                    d="M0 0h20v20H0z"
                />
                </button>
            </div>
            <div 
                :class="{hidden: !isOpen, block: isOpen}"
                class="w-full block flex-grow lg:flex lg:items-center lg:w-auto"
            >
                <div class="text-sm lg:flex-grow" >
                    <NuxtLink 
                        to="/" 
                        class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white p-3"
                        >
                        Home
                    </NuxtLink>
                    <NuxtLink 
                        to="/videos" 
                        class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white p-3"
                        >
                        Vídeos
                    </NuxtLink>
                    <NuxtLink 
                        to="/videos/favoritos" 
                        class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white p-3"
                        >
                        Favoritos
                    </NuxtLink>
                </div>
                <div>
                    <select v-model="locale" class="ml-8">
                        <option value="pt">PT</option>
                        <option value="en">EN</option>
                    </select>
                </div>

               
            </div>
        </nav>
        <slot></slot>
        Rodapé Padrão
    </div>
</template>

<script setup lang="ts">
const { locale } = useI18n();

</script>
