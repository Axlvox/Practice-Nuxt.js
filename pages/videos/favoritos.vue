<template>
    <div class="text-4xl text-center font-bold">Vídeos Favoritos</div>
    <div  class="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div>
    <div>
        <div v-for="video in favoritos" :key="video.id">
            <button @click="videoStore.deletarFavorito(video.id)" class="items-center">Remover <PhosphorIconTrash :size="30" color="gray" weight="fill" /></button>
            <h2 class="font-semibold text-center">{{ video.descrição }}</h2>
            <iframe class="h-48 w-full"
            width="550"
            height="400"
            :src="video.url"
            title="YouTube video player"
            frameborder="0"
        />
        <div>
        </div>
    </div>
    </div>
</div>
</div>
</template> 

<script setup lang="ts">

//const favoritos = useFavoritos();

const videoStore = useVideoStore();
const { favoritos } = storeToRefs(videoStore);


</script>

<style lang="scss" scoped>

</style>