<template>
    <div>

<h1 class="text-4xl text-center font-bold">{{ $t("titulo") }}</h1>
    <div class="grid grid-cols-2 lg:grid-cols-3 items-center justify-center gap-4"
>
        <div v-for="video in videos" :key="video.id">
            <h2 class="font-semibold">{{ video.descrição }}</h2>
            <p v-data-horario="'dd/mm/yyyy'">{{ video.data_postagem }}</p>
            <iframe class="h-48 w-full"
            width="550"
            height="400"
            :src="video.url"
            title="YouTube video player"
            frameborder="0"
        />
        <div>
        <button @click="adicionarFavorito(video)"> Favoritar <PhosphorIconHeart :size="30" color="red" weight="fill" />
</button>
        </div>
    </div>
</div>
</div>
</template>

<script setup lang = "ts">
import type { Video } from "@/interfaces/video";
import { useVideoStore } from "~/stores/video";


//const favortos = useFavoritos();

const { adicionarFavorito } = useVideoStore();

const videos: Video[] = [
    {
        id: 1,
        descrição: '01 Introdução e Instalação',
        url: 'https://www.youtube.com/embed/WahQ5AoXpuU?si=Wy6-D1nea4ttFmhT',
        data_postagem: '2023-10-15'

    },
    {
        id: 2,
        descrição: '02 Configuração Nuxt 3',
        url: 'https://www.youtube.com/embed/JbbB84bnPog?si=g4_bYPB08iN4w4Ze',
        data_postagem: '2023-10-16'

    },
    {
        id: 3,
        descrição: '03 Pages',
        url: 'https://www.youtube.com/embed/S99sVicr8NI?si=ak0xKIWerM0NW47E',
        data_postagem: '2023-10-17'

    },
    {
        id: 4,
        descrição: '04 Components',
        url: 'https://www.youtube.com/embed/cCHWanw49l8?si=saDgVPEhmlC6Y9Yo',
        data_postagem: '2023-10-18'

    },
    {
        id: 5,
        descrição: '05 Layouts',
        url: 'https://www.youtube.com/embed/GpFycg4dOmQ?si=GO5zMFeN4Re9hUbl',
        data_postagem: '2023-10-19'

    }
]

const converteDataBrasil = (dataAtual: string) => {
    return new Date(dataAtual).toLocaleDateString("pt-BR")
}
</script>

<style scoped>

.videos {
max-width: 120px;
margin: 0 auto;
display: flex;
flex-wrap: wrap;
gap: 1rem;
}

.videos button {
display: inline-block
}


</style>