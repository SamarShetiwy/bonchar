<template>
  
              <div class="w-[40%] flex flex-col gap-y-8">
<!-- 
          <swiper
    :style="{
      '--swiper-navigation-color': '#fff',
      '--swiper-pagination-color': '#fff',
    }"
    :loop="true"
    :spaceBetween="1"
    :navigation="true"
    :thumbs="{ swiper: thumbsSwiper.value }"
    :modules="modules"
    class="mySwiper2"
    />
    <swiper-slide
      ><img class="flex items-center bg-[#dddddd]"
      src="../../assets/image/_0053_rgb_MP582-RGB-bttm_V2.png" /></swiper-slide
    ><swiper-slide
      ><img class="border-2 flex items-center"
        src="../../assets/image/_0066_rgb_MNEN2-RGB-side_V2.png"/></swiper-slide
    ><swiper-slide
      ><img class="border-2 flex items-center border-[#006CFF]"
        src="../../assets/image/_0053_rgb_MP582-RGB-bttm_V2.png"  /></swiper-slide
    ><swiper-slide
      ><img class="border-2 flex items-center"
        src="../../assets/image/151101_bbd_sodc_blk_06.png" /></swiper-slide
    > -->

          <swiper
    @swiper="setThumbsSwiper"
    :loop="true"
    :spaceBetween="10"
    :slidesPerView="4"
    :freeMode="true"
    :watchSlidesProgress="true"
    :modules="modules"
    class="mySwiper flex h-20 gap-x-2"
  >
    <swiper-slide
      ><img class="flex items-center bg-[#dddddd]"
      src="../../assets/image/_0053_rgb_MP582-RGB-bttm_V2.png" /></swiper-slide
    ><swiper-slide
      ><img class="border-2 flex items-center"
        src="../../assets/image/_0066_rgb_MNEN2-RGB-side_V2.png"/></swiper-slide
    ><swiper-slide
      ><img class="border-2 flex items-center border-[#006CFF]"
        src="../../assets/image/_0053_rgb_MP582-RGB-bttm_V2.png"  /></swiper-slide
    ><swiper-slide
      ><img class="border-2 flex items-center"
        src="../../assets/image/151101_bbd_sodc_blk_06.png" /></swiper-slide
    >
  </swiper>

         </div>  
</template>


<script setup>

import { ref } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
  // Import Swiper styles
  import 'swiper/css/free-mode';
  import 'swiper/css/navigation';
  import 'swiper/css/thumbs';
  import 'swiper/css';
  import 'swiper/css/pagination';
  import { Pagination,FreeMode, Navigation, Thumbs } from 'swiper/modules';


const thumbsSwiper = ref(null);
 const setThumbsSwiper = (swiper) => {
        thumbsSwiper.value = swiper};
const modules = [Pagination,FreeMode, Navigation, Thumbs];




  
</script>

<style scoped>
  .swiper {
  width: 100%;
  height: 100%;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;

  /* Center slide text vertically */
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
.swiper {
  width: 100%;
  height: 300px;
  margin-left: auto;
  margin-right: auto;
}

.swiper-slide {
  background-size: cover;
  background-position: center;
}

.mySwiper2 {
  height: 80%;
  width: 100%;
}

.mySwiper {
  height: 20%;
  box-sizing: border-box;
  padding: 10px 0;
}

.mySwiper .swiper-slide {
  width: 25%;
  height: 100%;
  opacity: 0.4;
}

.mySwiper .swiper-slide-thumb-active {
  opacity: 1;
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

</style>