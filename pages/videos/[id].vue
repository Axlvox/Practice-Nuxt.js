<template>
<div>Você está em {{ idParams}}</div>
<VideoDetalhes />
<VideoControlePlay />
</template>

<script setup>
const route = useRoute();
const idParams = computed(() => route.params.id);
</script>

<style lang="scss" scoped>

</style>