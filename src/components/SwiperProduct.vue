<template>
    <swiper
      :style="{
        '--swiper-navigation-color': '#fff',
        '--swiper-pagination-color': '#fff',
      }"
      :spaceBetween="10"
      :navigation="true"
      :thumbs="{ swiper: thumbsSwiper.value }"
      :modules="modules"
      class="mySwiper2"
    >
      <swiper-slide
        ><img
          src="https://swiperjs.com/demos/images/nature-1.jpg" /></swiper-slide
      ><swiper-slide
        ><img
          src="https://swiperjs.com/demos/images/nature-2.jpg" /></swiper-slide
      ><swiper-slide
        ><img
          src="https://swiperjs.com/demos/images/nature-3.jpg" /></swiper-slide
      ><swiper-slide
        ><img
          src="https://swiperjs.com/demos/images/nature-4.jpg" /></swiper-slide
      ><swiper-slide
        ><img
          src="https://swiperjs.com/demos/images/nature-5.jpg" /></swiper-slide
      ><swiper-slide
        ><img
          src="https://swiperjs.com/demos/images/nature-6.jpg" /></swiper-slide
      ><swiper-slide
        ><img
          src="https://swiperjs.com/demos/images/nature-7.jpg" /></swiper-slide
      ><swiper-slide
        ><img
          src="https://swiperjs.com/demos/images/nature-8.jpg" /></swiper-slide
      ><swiper-slide
        ><img
          src="https://swiperjs.com/demos/images/nature-9.jpg" /></swiper-slide
      ><swiper-slide
        ><img src="https://swiperjs.com/demos/images/nature-10.jpg"
      /></swiper-slide>
    </swiper>
    <swiper
      @swiper="setThumbsSwiper"
      :spaceBetween="10"
      :slidesPerView="4"
      :freeMode="true"
      :watchSlidesProgress="true"
      :modules="modules"
      class="mySwiper"
    >
      <swiper-slide
        ><img
          src="https://swiperjs.com/demos/images/nature-1.jpg" /></swiper-slide
      ><swiper-slide
        ><img
          src="https://swiperjs.com/demos/images/nature-2.jpg" /></swiper-slide
      ><swiper-slide
        ><img
          src="https://swiperjs.com/demos/images/nature-3.jpg" /></swiper-slide
      ><swiper-slide
        ><img
          src="https://swiperjs.com/demos/images/nature-4.jpg" /></swiper-slide
      ><swiper-slide
        ><img
          src="https://swiperjs.com/demos/images/nature-5.jpg" /></swiper-slide
      ><swiper-slide
        ><img
          src="https://swiperjs.com/demos/images/nature-6.jpg" /></swiper-slide
      ><swiper-slide
        ><img
          src="https://swiperjs.com/demos/images/nature-7.jpg" /></swiper-slide
      ><swiper-slide
        ><img
          src="https://swiperjs.com/demos/images/nature-8.jpg" /></swiper-slide
      ><swiper-slide
        ><img
          src="https://swiperjs.com/demos/images/nature-9.jpg" /></swiper-slide
      ><swiper-slide
        ><img src="https://swiperjs.com/demos/images/nature-10.jpg"
      /></swiper-slide>
    </swiper>
  </template>


  <script setup>

import { ref, onMounted } from 'vue';

import { Swiper, SwiperSlide } from 'swiper/vue';

import 'swiper/css';

import 'swiper/css/free-mode';

import 'swiper/css/navigation';

import 'swiper/css/thumbs';

import { FreeMode, Navigation, Thumbs } from 'swiper/modules';


const thumbsSwiper = ref(null);


const slides = [

  {

    image: 'https://swiperjs.com/demos/images/nature-10.jpg',

    thumb: 'https://swiperjs.com/demos/images/nature-10-thumbs.jpg',

  },

  {

    image: 'https://swiperjs.com/demos/images/nature-11.jpg',

    thumb: 'https://swiperjs.com/demos/images/nature-11-thumbs.jpg',

  },

  {

    image: 'https://swiperjs.com/demos/images/nature-12.jpg',

    thumb: 'https://swiperjs.com/demos/images/nature-12-thumbs.jpg',

  },

  {

    image: 'https://swiperjs.com/demos/images/nature-13.jpg',

    thumb: 'https://swiperjs.com/demos/images/nature-13-thumbs.jpg',

  },

];


onMounted(() => {

  thumbsSwiper.value.params.control.control = thumbsSwiper;

});

</script>





<style lang="scss" scoped>
.swiper {
  width: 100%;
  height: 100%;
  
  &-slide {
    text-align: center;
    font-size: 18px;
    background: #fff;

    /* Center slide text vertically */
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      display: block;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
}


.swiper {
  width: 100%;
  height: 300px;
  margin-left: aut
}
</style>


























// const products = ref({
    //   id: 0,
    //   title: '',
    //   price: 0,
    //   description: '',
    //   category: '',
    //   image: '',
    //   rating: {
    //     rate: 0,
    //     count: 0,
    //   },
    // });
    
    // const id = router.params.productId; 
    
    // async function getSingleProduct(id) {
    //   try {
    //     const response = await fetch(`https://fakestoreapi.com/products/${id}`);
    
    //     if (!response.ok) { 
    //       throw new Error(`Error fetching product: ${response.statusText}`);
    //     }
    //     const data = await response.json();
    //     products.value = data;
    //     console.log('Products after fetching:', products.value);
    
    //   } catch (error) {
    //     console.error('Error fetching product:', error);
    //   }
    // }
    
    // getSingleProduct(id); 
    