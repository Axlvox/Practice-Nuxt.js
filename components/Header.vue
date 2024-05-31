<script setup lang="ts">
</script>

<template>
<div>
    <h1>Header</h1>
    <PhosphorIconBiohazard :size="32" color="black" id="hazard"/>
    <PhosphorIconSkull :size="32" color="gray" weight="duotone"/>
    <PhosphorIconBiohazard :size="32" color="black" id="hazard"/>
</div>
</template>

<style scoped>
#hazard {
    background-color: yellow;
    border-radius: 10px;
    }
</style>