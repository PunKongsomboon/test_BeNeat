<script setup lang="ts">
import UserComponent from '@/components/UserComponent.vue';
import type { IUserData } from '@/interface/userData.interface';
import { ref } from 'vue';

const formData = ref<IUserData>({
    name: '',
    age: '',
    img: ''
});

const showResult = ref(false);

</script>


<template>
    <div class="container">
        <div class="text-center">
            <h2>Photos (components, ref)</h2>
            <div>โจทย์: ให้สร้าง User component ในหน้านี้และทำการส่งข้อมูลจาก Form ไปยัง User component ผ่าน Refs</div>
        </div>
        <form class="mb-4" @submit.prevent="showResult = true">
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
            <button type="submit" class="btn btn-primary">Submit</button>
        </form>


        <UserComponent :user-data="formData" v-if="showResult" />

    </div>
</template>

<style scoped></style>