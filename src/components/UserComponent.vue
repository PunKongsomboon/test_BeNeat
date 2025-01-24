<script setup lang="ts">
import type { IUserData } from '@/interface/userData.interface';
import type { PropType } from 'vue';


defineProps({
    userData: {
        type: Object as PropType<IUserData>,
    }
})
</script>

<template>
    <div class="container user-component text-center py-4">
        <h2>User Component</h2>
        <div class="my-3">
            <div>Name: {{ userData?.name }}</div>
            <div>Age: {{ userData?.age }}</div>
        </div>
        <img :src="userData?.img">
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