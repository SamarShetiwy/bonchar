<template>
  <swiper :navigation="true" :modules="modules" class="mySwiper">
                <swiper-slide>
                  <div>
                    <p>rbrtnbrnblkkrr</p>
                    <img src="" alt="">
                  </div>

                </swiper-slide>
                <swiper-slide>Slide 2</swiper-slide><swiper-slide>Slide 3</swiper-slide>
                <swiper-slide>Slide 4</swiper-slide><swiper-slide>Slide 5</swiper-slide>
              
            </swiper>
</template>


<script setup>

  import { Swiper, SwiperSlide } from 'swiper/vue';
  import 'swiper/css/navigation';
  import { Navigation,Thumbs } from 'swiper/modules';
// Import Swiper styles
  import 'swiper/css';

  const  modules = [Navigation, Thumbs];

</script>
<style>

</style>