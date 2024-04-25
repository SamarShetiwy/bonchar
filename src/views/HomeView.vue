

<template>

  <div class=" h-[25rem] bg-gradient-to-r from-[#8F65FF] to-[#FF4858] mt-10 flex flex-col justify-center items-center">
    <div class="w-[100%] bg-yellow-700">
      <swiper
        :modules="modules"
        :slides-per-view="3"
        :space-between="50"
        navigation
        :pagination="{ clickable: true }"
        :scrollbar="{ draggable: true }"
        @swiper="onSwiper"
        @slideChange="onSlideChange"
      >
        <swiper-slide>Slide 1</swiper-slide>
        <swiper-slide>Slide 1</swiper-slide>
        <swiper-slide>Slide 1</swiper-slide>
      
        ...
      </swiper>
    </div>

  </div>

<div class="flex justify-center sm:px-16 relative">
  <div class="xs:w-[54rem] w-full flex sm:flex-row items-center flex-col container justify-center absolute -top-10 !bg-transparent">
    <div class="w-1/2 sm:w-1/3 bg-[#FF6875] text-[#FFFFFF] h-[10rem] relative p-4">
      <div class="max-w-[8rem] gap-y-2 flex flex-col">
        <h1 class="font-semibold">iPhone 6</h1>
        <p class="break-words text-xs">loremloremloremloremloremloremlorem</p>
        <span>$399</span>
      </div>

      <img 
        src="../assets/image/iPhone6s_discover_desktop_08_iOS9.png"
        class="object-cover w-[8rem] absolute right-0 top-[33%]"
      />
    </div>
    <div class="w-1/2 sm:w-1/3 bg-[#F6F7F8] text-[#22262A] h-[10rem] p-4 flex justify-center items-center flex-col">
      <img 
        src="../assets/image/Oculus-Rift-profile_grande.png"
        class="object-cover w-[8rem]"
      />

      <div class="flex gap-x-16">
        <h1 class="font-semibold">Oculus Rift</h1>
        <span>$399</span>
      </div>
    </div>

    <div class="w-1/2 sm:w-1/3 bg-[#C1C8CE] text-[#22262A] h-[10rem] relative p-4">
      <div class="max-w-[8rem] gap-y-2 flex flex-col">
        <h1 class="font-semibold">iPhone 6</h1>
        <p class="break-words text-xs">loremloremloremloremloremloremlorem</p>
        <span>$399</span>
      </div>

      <img 
        src="../assets/image/50051823_540375.png"
        class="object-cover w-[8rem] absolute left-1/2 bottom-0"
      />
    </div>
  </div>
</div>

<div class="flex justify-center sm:px-16 sm:mt-[14rem] mt-[32rem]">
  <div class="flex flex-col container justify-center w-[54rem] items-center">
    <h1 class="text-xl font-semibold">BEST SELLERS</h1>
    <ul class="flex flex-wrap justify-center gap-x-8 mt-4">
      <li>All</li>
      <li>Mac</li>
      <li>iPhone</li>
      <li>iPad</li>
      <li>iPad</li>
      <li>Accessories</li>
    </ul>

    <div class="grid lg:grid-cols-4 md:grid-cols-3 xs:grid-cols-2 grid-cols-1 gap-4 mt-7">
      <grid />
      <grid />
      <grid />
      <grid />
      <grid />
      <grid />
      <grid />
      <grid />
      <grid />
    </div>
  </div>
</div>

</template>

<script setup>
  import grid from '../components/grid.vue'

  // // Import Swiper core and required modules
  // import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
  
  // // Import Swiper Vue.js components
  // import { Swiper, SwiperSlide } from 'swiper/vue';
  
  // // Import Swiper Sass
  // import 'swiper/swiper.sass';
  // import 'swiper/components/navigation/navigation.sass';
  // import 'swiper/components/pagination/pagination.sass';
  // import 'swiper/components/scrollbar/scrollbar.sass';
  
  // const onSwiper = (swiper) => {
  //   console.log(swiper);
  // };
  // const onSlideChange = () => {
  //   console.log('slide change');
  // };
  
  // // Return props, context, and initial reactive bindings
  // return {
  //   onSwiper,
  //   onSlideChange,
  //   modules: [Navigation, Pagination, Scrollbar, A11y]
  // };
</script>






<style >

</style>
