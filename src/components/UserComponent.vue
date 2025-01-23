<script setup lang="ts">
defineProps({
    name: {
        type: String,
    },
    age: {
        type: String,
    },
    img: {
        type: String,
    },
})
</script>

<template>
    <div class="container user-component text-center py-4">
        <h2>User Component</h2>
        <div class="my-3">
            <div>Name: {{ name }}</div>
            <div>Age: {{ age }}</div>
        </div>
        <img :src="img">
    </div>
</template>

<style scoped>
.user-component {
    background: rgb(238, 238, 238);

    img {
        max-width: 500px;
    }
}
</style>