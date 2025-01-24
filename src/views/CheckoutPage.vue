<script setup lang="ts">
import { onMounted, ref } from 'vue';
import axios from 'axios';
import { calculateTotal } from '@/util/calculateTotal';


const itemInCart = ref<IProductInCart[]>([]);

const fetchItemInCart = async () => {
    try {
        const response = await axios.get<IProductInCart[]>('https://vuejs-stock-trader-aa575.firebaseio.com/checkout.json');
        itemInCart.value = response.data;
    } catch (err) {
        console.log("Something went wrong!", err);
    }
}

onMounted(() => {
    fetchItemInCart();
});
</script>

<template>
    <div class="">
        <div class="text-center">
            <h2>Shopping Cart</h2>
        </div>

        <div>
            <a href="/exercise-8" class="neumorphic-link">Back to shopping cart</a>
        </div>

        <div class="col-8 offset-2 mt-5">
            <table class="neumorphic-table">
                <thead>
                    <tr class="table-header">
                        <th>No.</th>
                        <th>Item</th>
                        <th>Price</th>
                        <th>Qty</th>
                        <th>Total</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(item, index) in itemInCart" :key="index" class="table-row">
                        <td class="text-center">{{ index + 1 }}</td>
                        <td class="text-start">
                            <img :src="item.imgUrl" alt="" width="60" class="neumorphic-img">
                            {{ item.name }}
                        </td>
                        <td class="text-center">{{ item.price.toLocaleString('en-US') }}</td>
                        <td class="text-center">{{ item.qty.toLocaleString('en-US') }}</td>
                        <td class="text-center">{{ (item.qty * item.price).toLocaleString('en-US') }}</td>
                    </tr>
                    <tr class="table-total">
                        <td colspan="4" class="text-end">
                            <b>Total</b>
                        </td>
                        <td class="text-center">
                            <b>{{ calculateTotal(itemInCart).toLocaleString('en-US') }}</b>
                        </td>
                    </tr>
                </tbody>

            </table>
        </div>
    </div>
</template>

<style scoped>
.neumorphic-table {
    width: 100%;
    border-collapse: collapse;
    background: var(--primary-bg-color);
    border-radius: 16px;
    box-shadow: 8px 8px 16px var(--shadow-dark), -8px -8px 16px var(--shadow-light);
    overflow: hidden;
}

.table-header {
    background: var(--primary-bg-color);
    box-shadow: inset 4px 4px 8px var(--shadow-dark), inset -4px -4px 8px var(--shadow-light);
    color: var(--text-color);
    font-weight: bold;
}

.table-header th {
    padding: 15px;
    text-align: center;
    background: #f0f9ff;
    border-bottom: 2px solid var(--shadow-dark);
}

.table-row {
    transition: all 0.3s ease;
}

.table-row:hover {
    box-shadow: inset 4px 4px 8px var(--shadow-dark), inset -4px -4px 8px var(--shadow-light);
    background: var(--shadow-light);
}

.table-row td {
    padding: 15px;
    text-align: center;
}

.neumorphic-img {
    border-radius: 8px;
    box-shadow: 4px 4px 8px var(--shadow-dark), -4px -4px 8px var(--shadow-light);
    margin-right: 8px;
    vertical-align: middle;
}

.table-total {
    font-weight: bold;
    background: var(--primary-bg-color);
    box-shadow: inset 4px 4px 8px var(--shadow-dark), inset -4px -4px 8px var(--shadow-light);
}

.table-total td {
    padding: 15px;
    text-align: center;
}
</style>