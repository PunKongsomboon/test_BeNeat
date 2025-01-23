<script setup lang="ts">
import { ref } from 'vue';

const formData = ref({
    name: '',
    phone: '',
    address: '',
    gender: '',
    education: '',
})


const showAlert = ref(false)
const showResult = ref(false)

const validateForm = () => {

    if (formData.value.name.trim() === "" || formData.value.address.trim() === "" || formData.value.address.trim() === "" || formData.value.gender.trim() === "" || formData.value.education.trim() === "") {
        showAlert.value = true;
        return;
    }

    showResult.value = true;

}

const clearDate = () => {
    formData.value = {
        name: '',
        phone: '',
        address: '',
        gender: '',
        education: '',
    };

    showResult.value = false;
    showAlert.value = false;
}

</script>

<template>
    <div class="container">
        <div class="text-center">
            <h2>Regsiter Form (v-model)</h2>
            <div class="text-start">
                <div>โจทย์: ให้สร้างแบบฟอร์ม และมีการเช็ค Form Validation ข้อมูลก่อนแสดงผลลัพธ์</div>
            </div>
        </div>

        <div class="row">
            <div class="card col-12 col-sm-7 col-md-6 col-xl-5">
                <div class="card-body">
                    <form @submit.prevent="validateForm">
                        <div class="form-group mb-3">
                            <label for="name" class="my-2">ชื่อ</label>
                            <input v-model="formData.name" id="name" class="form-control" type="text" />
                        </div>
                        <div class="form-group mb-3">
                            <label for="phone" class="my-2">เบอร์โทร</label>
                            <input v-model="formData.phone" id="phone" class="form-control" type="text" />
                        </div>
                        <div class="form-group">
                            <label for="name" class="my-2">ที่อยู่</label>
                            <textarea v-model="formData.address" class="form-control" type="text" rows="2"></textarea>
                        </div>
                        <div class="form-group mb-3">
                            <label for="name" class="my-2">เพศ</label>

                            <div class="gap-2 d-flex">
                                <input type="radio" id="maleChoice" name="genderChoice" v-model="formData.gender"
                                    value="men">
                                <label for="maleChoice">ชาย</label>
                            </div>
                            <div class="gap-2 d-flex">
                                <input type="radio" id="femaleChoice" name="genderChoice" v-model="formData.gender"
                                    value="women">
                                <label for="femaleChoice">หญิง</label>
                            </div>

                        </div>
                        <div class="form-group mb-3">
                            <label for="name" class="my-2">ระดับการศึกษา</label>
                            <select class="form-select" v-model="formData.education">
                                <option value="" selected>เลือกระดับการศึกษา</option>
                                <option value="ประถมศึกษา">ประถมศึกษา</option>
                                <option value="มัธยมศึกษา">มัธยมศึกษา</option>
                                <option value="ปริญญาตรี">ปริญญาตรี</option>
                                <option value="ปริญญาโท">ปริญญาโท</option>
                                <option value="ปริญญาเอก">ปริญญาเอก</option>
                            </select>
                        </div>
                        <button type="submit" class="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>



            <div class="col">
                <div class="card" v-if="showResult">
                    <div class="card-body text-left">
                        <div>ชื่อ: {{ formData.name }}</div>
                        <div>เบอร์โทร: {{ formData.phone }}</div>
                        <div>ที่อยู่: {{ formData.address }}</div>
                        <div>เพศ: {{ formData.gender }}</div>
                        <div>ระดับการศึกษา: {{ formData.education }}</div>
                        <div class="mt-4">
                            <button class="btn btn-outline-danger btn-block" @click="clearDate">
                                Clear Data
                            </button>
                        </div>
                    </div>
                </div>
                <div v-if="showAlert" role="alert"
                    class="alert alert-danger alert-dismissible fade show text-center p-0 d-flex align-items-center">
                    <div class="col-10">
                        <strong>Error:</strong>
                        <span class="mx-2">Invalid form.</span>

                    </div>
                    <div class="col text-end">
                        <button @click="showAlert = false" type="button" class="btn">
                            <span>×</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.alert {
    height: fit-content;
}
</style>