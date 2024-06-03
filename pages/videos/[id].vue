<template>
    <div>
<div>Você está em {{ idParams}}</div>
<VideoDetalhes />
<VideoControlePlay />
</div>
</template>

<script setup>
definePageMeta( {
    layout: "exibicao",
    middleware: ['video', 'auth']
});

const route = useRoute();
const idParams = computed(() => route.params.id);
</script>

<style lang="scss" scoped>

</style>