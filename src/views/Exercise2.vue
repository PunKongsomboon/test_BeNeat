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
            <h2>Register Form (v-model)</h2>
            <div class="my-4">
                <div>โจทย์: ให้สร้างแบบฟอร์ม และมีการเช็ค Form Validation ข้อมูลก่อนแสดงผลลัพธ์</div>
            </div>
        </div>

        <div class="row justify-content-center mt-4">
            <div class="neumorphic-card-form col-12 col-sm-7 col-md-6 col-xl-5">
                <div class="card-body">
                    <form @submit.prevent="validateForm" class="text-start">
                        <div class="form-group mb-3">
                            <label for="name" class="my-2">ชื่อ</label>
                            <input v-model="formData.name" id="name" class="neumorphic-input" type="text" />
                        </div>
                        <div class="form-group mb-3">
                            <label for="phone" class="my-2">เบอร์โทร</label>
                            <input v-model="formData.phone" id="phone" class="neumorphic-input" type="text" />
                        </div>
                        <div class="form-group mb-3">
                            <label for="address" class="my-2">ที่อยู่</label>
                            <textarea v-model="formData.address" id="address" class="neumorphic-textarea"
                                rows="2"></textarea>
                        </div>
                        <div class="form-group mb-3">
                            <label class="my-2">เพศ</label>
                            <div class="gap-2 d-flex">
                                <input type="radio" id="maleChoice" name="genderChoice" v-model="formData.gender"
                                    value="men" />
                                <label for="maleChoice">ชาย</label>
                            </div>
                            <div class="gap-2 d-flex">
                                <input type="radio" id="femaleChoice" name="genderChoice" v-model="formData.gender"
                                    value="women" />
                                <label for="femaleChoice">หญิง</label>
                            </div>
                        </div>
                        <div class="form-group mb-3">
                            <label for="education" class="my-2">ระดับการศึกษา</label>
                            <select id="education" class="neumorphic-select" v-model="formData.education">
                                <option value="" selected>เลือกระดับการศึกษา</option>
                                <option value="ประถมศึกษา">ประถมศึกษา</option>
                                <option value="มัธยมศึกษา">มัธยมศึกษา</option>
                                <option value="ปริญญาตรี">ปริญญาตรี</option>
                                <option value="ปริญญาโท">ปริญญาโท</option>
                                <option value="ปริญญาเอก">ปริญญาเอก</option>
                            </select>
                        </div>
                        <div class="text-center">
                            <button type="submit" class="neumorphic-btn">Submit</button>
                        </div>
                    </form>
                </div>
            </div>

            <div class="col mt-4">
                <div v-if="showResult" class="neumorphic-card mx-auto">
                    <div class="card-body text-start">
                        <div class="my-2">ชื่อ: {{ formData.name }}</div>
                        <div class="my-2">เบอร์โทร: {{ formData.phone }}</div>
                        <div class="my-2">ที่อยู่: {{ formData.address }}</div>
                        <div class="my-2">เพศ: {{ formData.gender }}</div>
                        <div class="my-2">ระดับการศึกษา: {{ formData.education }}</div>
                        <div class="mt-4 text-center">
                            <button class="neumorphic-btn" @click="clearDate">Clear Data</button>
                        </div>
                    </div>
                </div>
                <div v-if="showAlert" class="neumorphic-alert bg-danger text-white">
                    <div>
                        <strong>Error:</strong> Invalid form.
                    </div>
                    <button @click="showAlert = false" class="alert-close-btn">×</button>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.alert {
    height: fit-content;
}

.neumorphic-card-form {
    background: var(--primary-bg-color);
    border-radius: 16px;
    padding: 20px;
    box-shadow: 8px 8px 16px var(--shadow-dark), -8px -8px 16px var(--shadow-light);
    margin: 10px auto;
}

.neumorphic-input,
.neumorphic-textarea,
.neumorphic-select {
    background: white;
    border: none;
    border-radius: 12px;
    padding: 10px;
    box-shadow: inset 4px 4px 8px var(--shadow-dark), inset -4px -4px 8px var(--shadow-light);
    width: 100%;
    color: var(--text-color);
    font-size: 1rem;
}

.neumorphic-input:focus,
.neumorphic-textarea:focus,
.neumorphic-select:focus {
    border: none;
    box-shadow: 4px 4px 8px var(--shadow-dark), -4px -4px 8px var(--shadow-light);
}


.neumorphic-btn-outline:hover {
    background: var(--primary-bg-color);
    box-shadow: 8px 8px 16px var(--shadow-dark), -8px -8px 16px var(--shadow-light);
}

.neumorphic-alert {
    border-radius: 12px;
    padding: 10px;
    box-shadow: 8px 8px 16px var(--shadow-dark), -8px -8px 16px var(--shadow-light);
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 10px 0;
}

.alert-close-btn {
    background: none;
    border: none;
    font-size: 1.5rem;
    cursor: pointer;
    color: var(--text-color);
}
</style>