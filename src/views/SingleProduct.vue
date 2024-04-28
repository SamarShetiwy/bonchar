
<template>
  <Header/>

    <div class="flex justify-center bg-[#F6F7F8] mt-8 py-3 px-4">
        <div class="text-[#C1C8CE]">
            <span class="text-[#33A0FF] mx-2">Home </span>
            /
            <span class="text-[#33A0FF] mx-2">Accessories</span>
            / 
            <span class="text-[#22262A] mx-2">Beat Solo2 on Ear Headphone - Black</span>
        </div>
    </div>

    <!-- Product section -->
    <div class="container sm:px-16 grid grid-cols-[7fr_2fr] mt-20">
        <div class="[100%]">
        <div class="flex gap-x-10">
            <div class="w-[40%] flex flex-col gap-y-8">
                <div class=" h-[20rem] flex items-center">
                    <img class="w-full object-cover" src="../assets/image/Rectangle 6.png" alt="">
                </div>
                <div class="flex h-20 gap-x-2">
                    <span class="flex items-center bg-[#dddddd]">
                        <img src="../assets/image/_0053_rgb_MP582-RGB-bttm_V2.png" alt="">
                    </span>
                    <span class="border-2 flex items-center">
                        <img src="../assets/image/_0066_rgb_MNEN2-RGB-side_V2.png" alt="">
                    </span>
                    <span class="border-2 flex items-center border-[#006CFF]">
                        <img src="../assets/image/_0053_rgb_MP582-RGB-bttm_V2.png" alt="">
                    </span>
                    <span class="border-2 flex items-center">
                        <img class="w-20 object-cover pb-5" src="../assets/image/151101_bbd_sodc_blk_06.png" alt="">
                    </span>
                </div>

           

            </div>
          

            <!-- <swiper
    :style="{
      '--swiper-navigation-color': '#fff',
      '--swiper-pagination-color': '#fff',
    }"
    :loop="true"
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
    :loop="true"
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
    >
  </swiper> -->

            <!-- product details -->
            <div class="w-[60%]">
                <p class="text-2xl">Beats Solo2 On Ear Headphones - Black</p>
                <div class="flex gap-x-5 mt-5 items-center">
                    <img class="h-fit" src="../assets/image/rate.png" alt="">
                    <span class="text-[#C1C8CE]">0 Reviews</span>
                    <span class="text-[#33A0FF]">Submit a review</span>
                </div>

                <div class="border-t border-[#F6F7F8] mt-4">
                    <div class="flex gap-x-4 text-2xl">
                        <span class="text-[#FF4858]">$499</span>
                        <span class="text-[#C1C8CE] line-through">$599</span>
                    </div>

                    <div class="mt-4 flex flex-col gap-y-2 border-b border-[#F6F7F8] pb-4">
                        <div class="flex gap-x-14">
                            <span class="font-bold text-sm">Availability:</span>
                            <span>In stock</span>
                        </div>
                        <div class="flex gap-x-14">
                            <span class="font-bold text-sm">Category:</span>
                            <span>Accessories</span>
                        </div>
                        <span class="font-bold text-sm">Free shipping</span>
                    </div>

                    <div class="flex gap-x-14 mt-4">
                        <span class="font-bold text-sm">Select color:</span>
                        <div class="flex gap-x-4">
                            <div class="border border-[#006CFF] size-6 rounded-full flex items-center justify-center">
                                <div class=" bg-[#006CFF] size-4 rounded-full"></div>
                            </div>
                            <div class=" border-[#FC3E39] size-6 rounded-full flex items-center justify-center">
                                <div class=" bg-[#FC3E39] size-4 rounded-full"></div>
                            </div>
                            <div class=" border-[#171717] size-6 rounded-full flex items-center justify-center">
                                <div class=" bg-[#171717] size-4 rounded-full"></div>
                            </div>
                            <div class=" border-[#FFF600] size-6 rounded-full flex items-center justify-center">
                                <div class=" bg-[#FFF600] size-4 rounded-full"></div>
                            </div>
                        </div>
                    </div>

                    <div class="flex gap-x-[6.5rem] mt-4 items-center ">
                        <span class="font-bold text-sm">Size:</span>
                        <select class="border border-[#F1F3F4] pr-8 pl-2 py-1 outline-none">
                            <option value="xs">XS</option>
                            <option value="sm">SM</option>
                            <option value="md">MD</option>
                            <option value="lg">LG</option>
                            <option value="xl">XL</option>
                        </select>
                    </div>

                    <div class="mt-4 border-t border-[#F6F7F8] flex justify-between items-center">
                        <input type="number" placeholder="0" class="mt-4 bg-[#F6F7F8] w-[6rem] py-1 px-3 text-center outline-none">
                        <div class="flex gap-x-5 mt-4">
                            <button class="bg-[#EBF6FF] text-[#33A0FF] h-fit px-8 py-1 rounded flex gap-x-4 items-center">
                                <i class="pi pi-shopping-cart text-lg"></i>
                                Add To Cart
                            </button>
                            <button class="bg-[#EBF6FF] text-[#33A0FF] h-fit px-3 py-1 rounded">
                                <i class="pi pi-heart text-lg"></i>
                            </button>
                        </div>
                    </div>

                    <div class="text-[#FFFFFF] mt-4 border-t border-[#F6F7F8] flex gap-x-4 pt-5">
                        <button class="bg-[#385C8E] w-1/2 px-10 py-2 rounded flex items-center gap-x-3">
                            <i class="pi pi-facebook text-lg"></i>
                            Share on Facebook
                        </button>
                        <button class="bg-[#03A9F4] w-1/2 px-10 py-2 rounded flex items-center gap-x-3">
                            <i class="pi pi-twitter text-lg"></i>
                            Share on Twitter
                        </button>
                    </div>

                </div>
            </div>

      </div>
            
                  <!-- reviews -->
                  <!-- <div class="flex gap-52">
                  <div class="  ">
                <div class="mt-28 pl-10 flex gap-10 pb-10  ">
                    <span class="text-[#2E90E5] border-b-4 border[#2E90E5] ">Product Infomation</span>
                    <div class="flex  gap-2 ">
                        <span>Reviews</span>
                        <div class="h-2 w-2  mt-2.5 rounded bg-black"></div>
                    </div>
                    
                    <span>Another tab</span>
                </div>
                <div class=" max-w-[90%] pl-10 ">
                    <p class="tracking-wide  leading-normal">
                        Nunc facilisis sagittis ullamcorper. Proin lectus ipsum,
                         gravida et mattis vulputate, tristique ut lectus. Sed et lorem nunc.
                          Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Aenean eleifend laoreet congue. Vivamus adipiscing nisl ut dolor dignissim semper.
                          Nulla luctus malesuada tincidunt. 
                         Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Integer enim purus, 
                         posuere at ultricies eu, placerat a felis. Suspendisse aliquet urna pretium eros convallis interdum. Quisque in arcu id dui vulputate mollis eget non arcu. Aenean et nulla purus. Mauris vel tellus non nunc mattis lobortis.

Nunc facilisis sagittis ullamcorper. Proin lectus ipsum, gravida et mattis vulputate,
 tristique ut lectus. Sed et lorem nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae.
 
                    </p>
                </div>
            </div> 
            <div class="h-[80%] w-[270%] bg-slate-500 ">
                
            </div>
      </div> -->

        </div>


        <!-- Best Sellers -->

        <div>
    
            <h1>Best Sellers</h1>

            <ProductCard />

        </div>
        <div class="swiper">
            <swiper :navigation="true" :modules="modules" class="mySwiper">
                <swiper-slide>Slide 1</swiper-slide>
                <swiper-slide>Slide 2</swiper-slide><swiper-slide>Slide 3</swiper-slide>
                <swiper-slide>Slide 4</swiper-slide><swiper-slide>Slide 5</swiper-slide>
                <swiper-slide>Slide 6</swiper-slide><swiper-slide>Slide 7</swiper-slide>
                <swiper-slide>Slide 8</swiper-slide><swiper-slide>Slide 9</swiper-slide>
            </swiper>
        </div>

    </div>
</template>


<script setup>
  import { Swiper, SwiperSlide } from 'swiper/vue';
  import 'swiper/css/navigation';
  import { Navigation,Thumbs } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import ProductCard from '../components/ProductCard.vue';
// import { useRouter } from 'vue-router';
import { useRoute } from 'vue-router'
import { ref } from 'vue';
const  modules = [Navigation, Thumbs];

const route = useRoute();
// console.log('>>>>>>>>>>>>>>>>>>>>', route.params.productId)

//  const router = useRouter();
 const products = ref({});
 const id = route.params.productId; 

 async function getSingleProducts(id){
     try {
    const response = await fetch('https://fakestoreapi.com/products/${id}');
    const data = await response.json();
    products.value = data;
    // console.log('>>>>>>>>>>>>>>>prod', products.value);
  } catch (error) {
    console.error(error);
  }
}
getSingleProducts(id);



// import { Swiper, SwiperSlide } from 'swiper/vue';

// import 'swiper/scss';
// import 'swiper/scss/free-mode';
// import 'swiper/scss/navigation';
// import 'swiper/scss/thumbs';
// import { FreeMode, Navigation, Thumbs } from 'swiper/modules';

// const thumbsSwiper = ref(null);

// const setThumbsSwiper = (swiper) => {
//   thumbsSwiper.value = swiper;
// };

</script>

<style lang="scss">
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

.mySwiper2 {
  height: 80%;
  width: 100%;
}

.mySwiper {
  height: 20%;
  box-sizing: border-box;
  padding: 10px 0;

  .swiper-slide {
    width: 25%;
    height: 100%;
    opacity: 0.4;

    &-thumb-active {
      opacity: 1;
    }

    img {
      display: block;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
}
</style>