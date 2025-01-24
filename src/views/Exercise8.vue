<script setup lang="ts">
import { formatDate } from '@/util/dateFormat';
import axios from 'axios';
import { ref } from 'vue';
import { onMounted, watch } from 'vue';
import router from '@/router/index';
import { calculateTotal } from '@/util/calculateTotal';

const productData = ref<IProduct[]>([]);

const itemInCart = ref<IProductInCart[]>([]);

const total = ref<number>(0);

const fetchProduct = async () => {
    try {
        const response = await axios.get<{ products: IProduct[] }>('https://vuejs-stock-trader-aa575.firebaseio.com/data.json');
        productData.value = response.data.products;
    } catch (err) {
        console.log("Something went wrong!", err);
    }
}

const fetchItemInCart = async () => {
    try {
        const response = await axios.get<IProductInCart[]>('https://vuejs-stock-trader-aa575.firebaseio.com/checkout.json');
        itemInCart.value = response.data;
    } catch (err) {
        console.log("Something went wrong!", err);
    }
}



const addItemToCart = (newItem: IProduct) => {
    if (!itemInCart.value.find((e) => e.id === newItem.id)) {
        itemInCart.value.push({
            ...newItem,
            qty: 1
        })
    }
}

const onCheckout = async () => {
    try {
        await axios.put('https://vuejs-stock-trader-aa575.firebaseio.com/checkout.json', itemInCart.value);
        router.push('/checkout');
    } catch (err) {
        console.log("Something went wrong!", err);
    }
}

watch(() => itemInCart.value, () => {
    total.value = calculateTotal(itemInCart.value);
}, { deep: true })

onMounted(() => {
    fetchProduct();
    fetchItemInCart();
});

</script>

<template>
    <div class="container">
        <div class="text-center">
            <h2>Shopping Cart</h2>
            <div class="text-start">โจทย์: ทำฟีเจอร์ Shopping Cart โดยแสดงรายการสินค้าฝั่งซ้าย (ดึงข้อมูลจาก API)
                ทางฝั่งขวา ผู้ใช้สามารถเพิ่มสินค้าลงตะกร้า แก้ไข้จำนวนสินค้า และลบรายการสินค้าที่ไม่ต้องการได้
                เมื่อผู้ใช้ทำการกดปุ่ม Checkout ให้บันทึกรายการสินที่ในตะกร้าผ่าน API (สามารถใช้ข้อมูล Product
                บันทึกได้เลย) และนำลูกค้าไปยังหน้าสรุปผลการสั่งซื้อ

                <div>
                    APIs:
                    Fetch products
                    Method: GET
                    URL: https://vuejs-stock-trader-aa575.firebaseio.com/data.json

                    Save shopping cart
                    Method: PUT
                    URL: https://vuejs-stock-trader-aa575.firebaseio.com/checkout.json

                    Fetch shopping cart (ลูกค้ากลับเข้ามาหน้านี้อีกครั้งจะเห็นสินค้าในตะกร้า)
                    Method: GET
                    URL: https://vuejs-stock-trader-aa575.firebaseio.com/checkout.json
                </div>
            </div>
        </div>

        <div class="row">
            <div class="row col gap-3 justify-content-evenly">
                <div class="card col-3 text-start p-0" v-for="(item, index) in productData" :key="index">
                    <img :src="item.imgUrl" alt="Card image cap" class="card-img-top">
                    <div class="card-body text-left">
                        <h5 class="card-title">
                            {{ item.name }}
                            <span><span class="badge badge-success">New</span></span>
                        </h5>
                        <div class="card-text text-small">
                            {{ item.description }}
                        </div>
                        <div class="pt-3">
                            <h4 class="text-danger">{{ item.price.toLocaleString('en-US') }}</h4>
                        </div>
                        <div>สร้างเมื่อ</div>
                        <div>
                            {{ formatDate(item.created_at) }}
                        </div>
                        <button class="btn btn-primary col-12 mt-4" @click="addItemToCart(item)">
                            Add to cart
                        </button>
                    </div>
                </div>
            </div>
            <div class="col-3">
                <h5>ตะกร้าสินค้า</h5>
                <div class="card mb-4" v-for="(item, index) in itemInCart" :key="index">
                    <div class="card-body text-start">
                        <div class="row">
                            <div class="col-4"><img :src="item.imgUrl" alt="" class="img-fluid border border-secondary">
                            </div>
                            <div class="col-8 text-left">
                                <div>
                                    {{ item.name }}
                                </div>
                                <div class="text-danger">
                                    {{ item.price.toLocaleString('en-US') }}
                                </div>
                                <div class="mt-3">
                                    <input type="text" class="form-control" v-model="item.qty">
                                </div>
                                <div class="mt-2">
                                    <button class="btn btn-danger" @click="itemInCart.splice(index, 1)">
                                        ลบ
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div v-if="itemInCart.length !== 0">
                    <h5 class="text-end">Total: {{ total.toLocaleString('en-US') }}</h5>
                    <button type="button" class="btn btn-success col-12" v-if="total !== 0"
                        @click="onCheckout">Checkout</button>
                </div>
                <div v-else>ตะกร้าสินค้ายังว่างอยู่</div>

            </div>
        </div>
    </div>
</template>

<style></style>