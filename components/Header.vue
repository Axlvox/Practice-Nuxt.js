<script setup lang="ts">
</script>

<template>
<div>
    <h1>Header</h1>
    <PhosphorIconBiohazard :size="32" color="black" id="hazard"/>
    <PhosphorIconSkull :size="32" color="gray"/>
    <PhosphorIconBiohazard :size="32" color="black" id="hazard"/>
</div>
</template>

<style scoped>
#hazard {
    background-color: yellowgreen;
    border-radius: 10px;
}
</style>