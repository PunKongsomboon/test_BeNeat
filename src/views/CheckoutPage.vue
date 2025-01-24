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
    <div>
        <div class="text-center">
            <h2>Shopping Cart</h2>
            <div class="text-start"><a href="/exercise-8" />
            </div>
        </div>

        <div>
            <a href="/exercise-8">Back to shopping cart</a>
        </div>

        <div class="col-8 offset-2">
            <table class="table">
                <tr class="table-info">
                    <th>No.</th>
                    <th>Item</th>
                    <th>Price</th>
                    <th>Qty</th>
                    <th>&nbsp;</th>
                </tr>
                <tr v-for="(item, index) in itemInCart" :key="index">
                    <td class="text-center">{{ index + 1 }}</td>
                    <td class="text-left"><img :src="item.imgUrl" alt="" width="60"
                            class="rounded border border-secondary mr-2">
                        {{ item.name }}
                    </td>
                    <td class="text-center">
                        {{ item.price.toLocaleString('en-US') }}
                    </td>
                    <td class="text-center">{{ item.qty.toLocaleString('en-US') }}</td>
                    <td class="text-center">{{ (item.qty * item.price).toLocaleString('en-US') }}</td>
                </tr>
                <tr>
                    <td colspan="4" class="text-end">
                        <b>Total</b>
                    </td>
                    <td class="text-center">
                        <b>{{ calculateTotal(itemInCart).toLocaleString('en-US') }}</b>
                    </td>
                </tr>

            </table>
        </div>
    </div>
</template>

<style scoped>
table {
    th {
        text-align: center;
    }

    td {
        padding: 12px;
    }
}
</style>