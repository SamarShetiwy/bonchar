<template>
  

    <div class="flex justify-center bg-[#F6F7F8] mt-8 py-3 px-4">
        <div class="text-[#C1C8CE]">
            <span class="text-[#33A0FF] mx-2">Home </span>
            /
            <span class="text-[#33A0FF] mx-2" @click="addToCart(productData?.id)">{{ productData?.category }}</span>
            /
            <span class="text-[#22262A] mx-2">{{ productData?.title }}</span>
        </div>
    </div>

    <!-- Product section -->
    <div class="container sm:px-16 grid grid-cols-[7fr_2fr] mt-20 gap-x-8">
        <div class="flex flex-col gap-x-10">

            <div class="flex gap-x-5">

                <swiper1 />

                <!-- <div class="w-[40%] flex flex-col gap-y-8">

                
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
             -->

                <!-- product details -->
                <div class="w-[60%]">
                    <p class="text-2xl">{{ productData?.title }} </p>
                    <div class="flex gap-x-5 mt-5 items-center">
                        <img class="h-fit" src="../assets/image/rate.png" alt="">
                        <span class="text-[#C1C8CE]">{{ productData?.rate }}</span>
                        <span class="text-[#33A0FF]">Submit a review</span>
                    </div>

                    <div class="border-t border-[#F6F7F8] mt-4">
                        <div class="flex gap-x-4 text-2xl">
                            <span class="text-[#FF4858]">{{ productData?.price }}</span>
                            <span class="text-[#C1C8CE] line-through">{{ productData?.price }}</span>
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
                                <div
                                    class="border border-[#006CFF] size-6 rounded-full flex items-center justify-center">
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
                            <input type="number" placeholder="0"
                                class="mt-4 bg-[#F6F7F8] w-[6rem] py-1 px-3 text-center outline-none">
                            <div class="flex gap-x-5 mt-4">
                                <button @click="data.addToCart(productData) "
                                    class="bg-[#EBF6FF] text-[#33A0FF] h-fit px-8 py-1 rounded flex gap-x-4 items-center hover:transform hover:scale-105">
                                    <i class="pi pi-shopping-cart text-lg"></i>
                                    Add To Cart
                                </button>
                                <button class="bg-[#EBF6FF] text-[#33A0FF] h-fit px-3 py-1 rounded hover:transform hover:scale-105">
                                    <i class="pi pi-heart text-lg"></i>
                                </button>
                            </div>
                        </div>

                        <div class="text-[#FFFFFF] mt-4 border-t border-[#F6F7F8] flex gap-x-4 pt-5">
                            <button class="bg-[#385C8E] w-1/2 px-6 py-2 rounded flex items-center gap-x-3 hover:transform hover:scale-105">
                                <i class="pi pi-facebook text-lg"></i>
                                Share on Facebook
                            </button>
                            <button class="bg-[#03A9F4] w-1/2 px-6 py-2 rounded flex items-center gap-x-3 hover:transform hover:scale-105">
                                <i class="pi pi-twitter text-lg"></i>
                                Share on Twitter
                            </button>
                        </div>

                    </div>

                </div>
            </div>


            <!-- Reviews -->
            <div class="bg-[#FAFAFB] mt-10 p-6">
                <div class="flex gap-x-10 font-semibold border-b-2 border-[#E5E8EA] ">
                    <button class="text-[#2E90E5] border-b-4 border-[#2E90E5] pb-5 hover:transform hover:scale-105">Product Information</button>
                    <button class="pb-5">
                        Reviews
                        <span>0</span>
                    </button>
                    <button class="pb-5 hover:transform hover:scale-105">Another tab</button>
                </div>
                <p class="mt-8">
                    Nunc facilisis sagittis ullamcorper. Proin lectus ipsum, gravida et mattis vulputate, tristique ut
                    lectus. Sed et lorem nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere
                    cubilia Curae; Aenean eleifend laoreet congue. Vivamus adipiscing nisl ut dolor dignissim semper.
                    Nulla luctus malesuada tincidunt. Class aptent taciti sociosqu ad litora torquent per conubia
                    nostra, per inceptos himenaeos. Integer enim purus, posuere at ultricies eu, placerat a felis.
                    Suspendisse aliquet urna pretium eros convallis interdum. Quisque in arcu id dui vulputate mollis
                    eget non arcu. Aenean et nulla purus. Mauris vel tellus non nunc mattis lobortis.
                    Nunc facilisis sagittis ullamcorper. Proin lectus ipsum, gravida et mattis vulputate, tristique ut
                    lectus. Sed et lorem nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere
                    cubilia Curae.
                </p>
            </div>

        </div>

        <!-- Best Sellers -->
        <div>

            <h1>Best Sellers</h1>

           <div>
                <!-- <ProductCard :product="productData" /> -->
           </div>
            <div class="mt-10 bg-[#C1C8CE] px-5 py-8 flex flex-col gap-y-5">
                <h1 class="text-xl font-bold">Go Pro Hero 6</h1>
                <p class="text-sm">Lorem Ipsum dolor sit amet, consectetur adipiscing elit, labor</p>
                <h2 class="text-xl text-[#22262A]">$399</h2>
                <img src="../assets/image/50051823_540375.png" alt="">
            </div>

        </div>
    </div>
   <div class="container gap-x-14 flex justify-center items-center">
    <swiper2 v-if="productData.category" :category= "productData.category" />

   </div>

</template>


<script setup>

import Swiper1 from '../components/swiperSingleProduct/swiper1.vue';
import Swiper2 from '../components/swiperSingleProduct/swiper2.vue';

// cart0
import { useCartStore } from '../stores/cartStore.js';
const data = useCartStore();

// console.log('hhhhhhhhhhhhhhhhhhhhhhhh', data.products);

// import ProductCard from '../components/ProductCard.vue';
import { useRoute } from 'vue-router';
import { ref, onMounted } from 'vue';



const route = useRoute();
// console.log('>>>>>>>>>>>>>>>>', route.params.productId)

//const router = useRouter();
const productData = ref({});

async function getSingleProduct(id) {
    try {
        const response = await fetch(`https://fakestoreapi.com/products/${id}`);
        const data = await response.json();

        productData.value = data;
        console.log(productData.value);

    } catch (error) {
        console.error(error);
    }
}
const id = route.params.productId;
onMounted(() => {

    getSingleProduct(id);

});



</script>


<style></style>