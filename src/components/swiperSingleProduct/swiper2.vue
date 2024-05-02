<template>
  
  <swiper 
    :slidesPerView="1.7"
    :spaceBetween="50"
    :pagination="{
      clickable: true,
    }"
    :modules="modules"
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
    }"
    class="mySwiper "
  >
  <swiper-slide  >
      <!-- <ProductCard :product="productData"/> -->
      <ProductCard v-for="product in products" :key="product.id" :product="product " />
</swiper-slide>
   
  </swiper>


</template>

<script setup>

import { onMounted, ref } from 'vue';
import { Swiper } from 'swiper/vue';
import 'swiper/css/pagination';


import { Pagination } from 'swiper/modules';
import ProductCard from '../ProductCard.vue';


  const modules = [Pagination];

  
const fetchData = async () => {
  const response = await fetch('https://fakestoreapi.com/products/categories');
  const categories = await response.json();
  const category = categories[0];
  console.log(category);
  const productsResponse = await fetch(`https://fakestoreapi.com/products/category/${category}`);
  const products = await productsResponse.json();
  
  return products.slice(0,10);
};

const useProducts = () => {
  const products = ref([]);

  onMounted(async () => {
    products.value = await fetchData();
  });

  return {
    products
  };
};
const { products } = useProducts();


</script>


<style >
 

</style>