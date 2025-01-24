<script setup lang="ts">
defineProps({
    title: {
        type: String,
    },
    img: {
        type: String,
    },
})
</script>

<template>
    <div class="card p-0" style="max-width: 250px;">
        <img :src="img" class="card-img-top" :alt="title">
        <div class="card-body">
            <div class="card-title">{{ title }}</div>
        </div>
    </div>
</template>

<style></style>