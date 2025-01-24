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
    <div class="neumorphic-card">
        <img :src="img" class="card-img-top" :alt="title">
        <div class="card-body">
            <div class="card-title">{{ title }}</div>
        </div>
    </div>
</template>
