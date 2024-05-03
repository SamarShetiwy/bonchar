<template>

  <swiper :slidesPerView="1.7" :spaceBetween="50" :pagination="{
    clickable: true,
  }" :modules="modules" :breakpoints="{
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
    <swiper-slide>
      <!-- <ProductCard :product="productData"/> -->
      <ProductCard v-for="product in products" :key="product.id" :product="product" />
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
  // const response = await fetch('https://fakestoreapi.com/products/categories');
  // const categories = await response.json();
  // const category = categories;
  // console.log(category);
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