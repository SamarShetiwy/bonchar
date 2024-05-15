<template>

  <swiper :slidesPerView="1.7" :spaceBetween="50" :pagination="{
    clickable: true,
  }" :modules="modules"
    
     
     :breakpoints="{
      '640': {
        slidesPerView: 2.5,
        spaceBetween: 16,
      },
      '768': {
        slidesPerView: 3,
        spaceBetween: 24,
      },
      '992': {
        slidesPerView: 23,
        spaceBetween: 24,
      }
    }" class="mySwiper ">
    <swiper-slide class=" flex gap-11 my-7 mt-20" >
      <!-- <ProductCard :product="productData"/> -->
      <ProductCard v-for="product in products" :key="product.id" :product="product" />
      <!-- <div v-for="product in products" :key="product.id" :product="product" class="container" > -->
        <div class=" product border p-3 flex flex-col items-center gap-y-7">
    <img class=" w-[20rem] h-60" :src="product?.image" />
    <div class="flex flex-col items-center gap-y-3">
      <h1>{{ product?.title }}</h1>
      <div class="flex flex-col gap-y-2">
        <img src="../../assets/image/rate.png" />
        <div class="flex gap-x-3">
          <span class="text-[#FF4858]">${{ product?.price }}</span>
          <span class="text-[#5D656B] line-through">${{ product?.price }}</span>
        </div>
      </div>
    </div>
  </div>
    
<!-- </div> -->

    </swiper-slide>

  </swiper>


</template>

<script setup>

import { onMounted, ref, defineProps } from 'vue';
import { Swiper } from 'swiper/vue';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import ProductCard from '../ProductCard.vue';

const props = defineProps(['category']);


const modules = [Pagination];
const fetchData = async () => {
 console.log(props);
  const productsResponse = await fetch(`https://fakestoreapi.com/products/category/${props.category}`);
  const products = await productsResponse.json();

  return products.slice(0, 4);
};




const useProducts = () => {
  const products = ref([]);

  onMounted(async () => {
    products.value = await fetchData();
    console.log(products.value);
  });

  return {
    products
  };
};
const { products } = useProducts();


</script>


<style></style>