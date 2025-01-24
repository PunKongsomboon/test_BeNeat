<script setup lang="ts">
import Card from '@/components/Card.vue';
import { AnimalEnum } from '@/enum/animal.enum';
import { ANIMALS_DATA } from '@/constant/animalData';
import { ref } from 'vue';

const selectValue = ref<AnimalEnum>();

const onSelectValue = (value: AnimalEnum) => {
    selectValue.value = value;
}

</script>
<template>
    <div class="container">
        <div class="col text-center">
            <div>
                <h2> Animals (v-if / v-else-if / v-else)</h2>
                <div class="my-5">โจทย์: ให้แสดงผลข้อมูลตามการกดปุ่ม</div>
            </div>
            <div class="row justify-content-around mt-4">
                <button type="button" class="neumorphic-btn" @click="onSelectValue(AnimalEnum.DOG)">
                    Dogs
                </button>
                <button type="button" class="neumorphic-btn" @click="onSelectValue(AnimalEnum.CAT)">
                    Cats
                </button>
                <button type="button" class="neumorphic-btn" @click="onSelectValue(AnimalEnum.BIRD)">
                    Bird
                </button>
                <button type="button" class="neumorphic-btn" @click="onSelectValue(AnimalEnum.RABBITS)">
                    Rabbits
                </button>
            </div>

            <div class="row justify-content-center mt-5">
                <Card :title="ANIMALS_DATA[0].title" :img="ANIMALS_DATA[0].imgUrI"
                    v-if="selectValue === AnimalEnum.DOG" />
                <Card :title="ANIMALS_DATA[1].title" :img="ANIMALS_DATA[1].imgUrI"
                    v-else-if="selectValue === AnimalEnum.CAT" />
                <Card :title="ANIMALS_DATA[2].title" :img="ANIMALS_DATA[2].imgUrI"
                    v-else-if="selectValue === AnimalEnum.BIRD" />
                <Card :title="ANIMALS_DATA[3].title" :img="ANIMALS_DATA[3].imgUrI"
                    v-else-if="selectValue === AnimalEnum.RABBITS" />
            </div>
        </div>
    </div>
</template>