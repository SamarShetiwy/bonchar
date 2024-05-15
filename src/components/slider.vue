<template>
  <swiper :navigation="true" :modules="modules" class="mySwiper">


                <swiper-slide class="flex px-16 xl:px-48 relative">
                  <div class="text-start flex flex-col gap-y-6 text-[#FFFFFF] w-[35rem] z-10 px-5 xs:px-10 sm:px-20  py-5 lg:py-0 bg-zinc-800/60 lg:bg-transparent rounded">
                    <h1 class="text-3xl font-semibold text-shadow-2xl">iPhone x</h1>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy.</p>
                    <button class="text-start border-b-2 w-fit pb-2 hover:transform hover:scale-105">More</button>
                  </div>

                  <img class="max-w-fit lg:static absolute" src="../assets/image/iphonex_spacegray.png" alt="">
                </swiper-slide>
                <swiper-slide>Slide 2</swiper-slide><swiper-slide>Slide 3</swiper-slide>
              
            </swiper>
 

</template>


<script setup>

  import { Swiper, SwiperSlide } from 'swiper/vue';
  // import 'swiper/css/navigation';
  import { Navigation,Thumbs } from 'swiper/modules';


  const  modules = [Navigation, Thumbs];

</script>
<style lang="css " scoped>

.swiper {
    width: 100%;
    height: 100%;
    position: relative;
  }
  
  .swiper-slide {
    text-align: center;
    font-size: 18px;
    background: linear-gradient(90deg, rgba(143,101,255,1) 0%, rgba(255,72,88,1) 100%);

  
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .swiper-slide img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .swiper-button-prev:after, .swiper-button-next:after {
    font-family: swiper-icons;
    font-size: x-large;
    text-transform: none !important;
    letter-spacing: 0;
    font-variant: initial;
    line-height: 1;
    color: black;
}

</style>