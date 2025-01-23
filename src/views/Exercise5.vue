<script setup lang="ts">
import { ref } from 'vue';


const listItem = ref<IItemList[]>([
    {
        id: 1,
        name: ""
    },
    {
        id: 2,
        name: ""
    },
    {
        id: 3,
        name: ""
    },

]);

</script>

<template>
    <div class="container">
        <div class="text-center">
            <h2>Products (components & array data)</h2>
            <div class="text-start">
                <div>โจทย์: ให้สร้าง Item component และนำมาใช้กับข้อมูล Array แสดงผลเป็นฟอร์มให้ผู้ใช้กรอกทางฝั่งซ้าย
                    โดยผู้ใช้สามารถเพิ่มรายการได้ ส่วนการแสดงผลข้อมูลฝั่งขวาเป็นสรุปรายการ Item List</div>
            </div>
        </div>

        <div class="row mt-3">
            <div class="col">
                <div class="row gap-3">
                    <div class="card col-3" v-for="(item, index) in listItem" :key="index">
                        <div class="card-body text-left">
                            <div>Item ID: {{ item.id }}</div>
                            <div class="mt-3">
                                <div class="form-group"><label>Item Name</label>
                                    <input type="text" placeholder="Enter name" class="form-control"
                                        v-model="item.name">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="text-center mt-5">
                    <button type="button" class="btn btn-primary"
                        @click="listItem.push({ id: listItem.length + 1, name: '' })">Add item</button>
                </div>
            </div>
            <div class="col-4">
                <h5>Item List</h5>
                <div class="col">
                    <div v-for="(item, index) in listItem" :key="index">
                        <div v-if="item.name.trim() != ''">
                            <span>{{ item.id }}.</span><span class="ms-2">{{ item.name
                                }}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    </div>
</template>

<style scoped></style>