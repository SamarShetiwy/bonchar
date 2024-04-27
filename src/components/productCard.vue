<template>
  <div  @click="getProductsId (id)" class=" border p-3 flex flex-col items-center gap-y-7">
    <img class="h-40 w-full" :src="product.image" />
    <div class="flex flex-col items-center gap-y-3">
      <h1>{{ product.title }}</h1>
      <div class="flex flex-col gap-y-2">
        <img src="../assets/image/rate.png" />
        <div class="flex gap-x-3">
          <span class="text-[#FF4858]">${{ product.price }}</span>
          <span class="text-[#5D656B] line-through">${{ product.price }}</span>
        </div>
      </div>
    </div>
  </div>
</template>


<script setup>

import { defineProps } from 'vue';

const props = defineProps({
  product: {
    type: Object,
    required: true
  }
});


const getProductsId = (id) => {
  const products = ref({ id: null });
  products.value.id = id;
  console.log(products.value.id);
}



</script>

<style>

</style>