<script setup lang="ts">
import UserComponent from '@/components/UserComponent.vue';
import { ref } from 'vue';

const formData = ref({
    name: '',
    age: '',
    img: ''
});
</script>


<template>
    <div class="container">
        <div class="text-center">
            <h2>Photo (components, props)</h2>
            <div class="text-start">โจทย์: ให้สร้าง User component ในหน้านี้และทำการส่งข้อมูลจาก Form ไปยัง User component ผ่าน Props</div>
        </div>
        <form class="mb-4">
            <div class="form-group mb-3">
                <label for="name" class="my-2">Name</label>
                <input v-model="formData.name" id="name" class="form-control" type="text" />
            </div>
            <div class="form-group mb-3">
                <label for="phone">Age</label>
                <input v-model="formData.age" id="phone" class="form-control" type="text" />
            </div>
            <div class="form-group mb-3">
                <label for="img">Image Url</label>
                <input v-model="formData.img" id="img" class="form-control" type="text" />
            </div>
        </form>
        <UserComponent :user-data="formData" />

    </div>
</template>

<style scoped></style>