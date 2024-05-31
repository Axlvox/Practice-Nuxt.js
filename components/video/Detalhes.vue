<template>
    <h1>Componentes - Nuxt 3</h1>
    <p> {{ diferencaEmDias }}</p>
</template>

<script setup lang="ts">
const { diasPassados, diferencaEmDias } = useFormatacao()

const dataVideo = new Date(2023, 9, 2);

diasPassados(dataVideo);
</script>
