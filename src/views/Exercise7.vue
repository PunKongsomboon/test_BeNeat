<script setup lang="ts">
import axios from 'axios';
import { onMounted } from 'vue';
import { ref } from 'vue';
import Swal from 'sweetalert2'

const formData = ref<IRegisterForm>({
    name: "",
    address: "",
    age: "",
    education: "",
    email: "",
    gender: "",
    national: "",
    newsletter: false,
    tel: "",
});

const fetchUsers = async () => {
    try {
        const response = await axios.get('https://vuejs-stock-trader-aa575.firebaseio.com/userFormData.json')
        formData.value = response.data;
    } catch (err) {
        console.log("Something went wrong!", err);
    }
}


onMounted(fetchUsers);

const onSubmit = async () => {
    try {
        await axios.put('https://vuejs-stock-trader-aa575.firebaseio.com/userFormData.json', formData.value);
        await fetchUsers();
        Swal.fire({
            title: "Saved data success",
            icon: "success",
        });
    } catch (err) {
        console.log("Something went wrong!", err);
    }
}
</script>

<template>
    <div class="container">
        <div class="text-center">
            <h2>Regsiter Form (API)</h2>
            <div class="text-start">โจทย์: ให้ทำการบันทึกข้อมูลผ่าน Restful API หากผู้ใช้เคยบันทึกข้อมูลไว้แล้ว
                และกลับมายังหน้านี้ให้เอาค่าที่บันทึกไว้ใส่ลงในฟอร์ม
                APIs:
                Save form data
                Method: PUT
                URL: https://vuejs-stock-trader-aa575.firebaseio.com/userFormData.json

                Fetch form data
                Method: GET
                URL: https://vuejs-stock-trader-aa575.firebaseio.com/userFormData.json

                Form data { "address": String, "age": String, "education": String, "email": String, "gender": String,
                "name": String, "national": String, "newsletter": Boolean, "tel": String }</div>
        </div>

        <div class="d-flex justify-content-center mt-3">
            <div class="card col-6">
                <div class="card-body">
                    <form @submit.prevent="onSubmit()">
                        <div class="form-group mb-3">
                            <label class="mb-2">ชื่อ</label>
                            <input type="text" id="name" class="form-control" v-model="formData.name">
                        </div>
                        <div class="form-group mb-3">
                            <label class="mb-2">สัญชาติ</label>
                            <input type="text" id="tel" class="form-control" v-model="formData.national">
                        </div>
                        <div class="form-group mb-3">
                            <label class="mb-2">อีเมล</label>
                            <input type="text" id="tel" class="form-control" v-model="formData.email">
                        </div>
                        <div class="form-group mb-3">
                            <label class="mb-2">อายุ</label>
                            <input type="text" id="tel" class="form-control" v-model="formData.age">
                        </div>
                        <div class="form-group mb-3">
                            <label class="mb-2">เบอร์โทร</label>
                            <input type="text" id="tel" class="form-control" v-model="formData.tel">
                        </div>
                        <div class="form-group mb-3">
                            <label class="mb-2">ที่อยู่</label>
                            <textarea id="address" rows="2" class="form-control" v-model="formData.address"></textarea>
                        </div>
                        <div class="form-group mb-3">
                            <label class="mb-2">เพศ</label>
                            <div class="form-check">
                                <input type="radio" name="gender" id="male" value="male" class="form-check-input"
                                    v-model="formData.gender">
                                <label for="male" class="form-check-label">
                                    ชาย
                                </label>
                            </div>
                            <div class="form-check">
                                <input type="radio" name="gender" id="female" value="female" class="form-check-input"
                                    v-model="formData.gender">
                                <label for="female" class="form-check-label">
                                    หญิง
                                </label>
                            </div>
                        </div>
                        <div class="form-group mb-3">
                            <label class="mb-2">ระดับการศึกษา</label>
                            <select class="form-control" v-model="formData.education">
                                <option value="">เลือกระดับการศึกษา</option>
                                <option value="ประถมศึกษา">ประถมศึกษา</option>
                                <option value="มัธยมศึกษา">มัธยมศึกษา</option>
                                <option value="ปริญญาตรี">ปริญญาตรี</option>
                                <option value="ปริญญาโท">ปริญญาโท</option>
                                <option value="ปริญญาเอก">ปริญญาเอก</option>
                            </select>
                        </div>
                        <div class="form-group mb-3">
                            <div class="form-check">
                                <input type="checkbox" id="newsletter" class="form-check-input"
                                    v-model="formData.newsletter">
                                <label for="newsletter" class="form-check-label">
                                    คุณต้องการรับข่าวสารใช่หรือไม่
                                </label>
                            </div>
                        </div>
                        <button type="submit" class="btn btn-primary btn-block">
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped></style>