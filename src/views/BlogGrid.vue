<template>
  <div class="flex justify-center">
    <div class="container">

        <div class="flex justify-center bg-[#F6F7F8] mt-8 py-3 px-4">
            <div class="text-[#C1C8CE]">
                <span class="text-[#33A0FF] mx-2">Home </span>
                /
                <span class="text-[#33A0FF] mx-2" @click="addToCart(productData?.id)">{{ productData?.category }}</span>
                / 
                <span class="text-[#22262A] mx-2">{{ productData?.title }}</span>
            </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-[2.5fr_8fr] lg:gap-x-10 gap-x-5 mt-10 px-4">
            <div class="hidden md:flex flex-col gap-y-5">
                <div class="mt-10">
                    <h1 class="text-[#C1C8CE]">TAGS</h1>

                    <div class="flex flex-wrap gap-2 mt-3">
                        <button class="px-5 py-1 border border-[#33A0FF] text-[#33A0FF] rounded-full">Promo</button>
                        <button class="px-5 py-1 border border-[#33A0FF] text-[#33A0FF] rounded-full">Holidays</button>
                        <button class="px-5 py-1 border border-[#33A0FF] text-[#33A0FF] rounded-full">gift</button>
                        <button class="px-5 py-1 border border-[#33A0FF] text-[#33A0FF] rounded-full">Christams</button>
                        <button class="px-5 py-1 border border-[#33A0FF] text-[#33A0FF] rounded-full">Giveaway</button>
                        <button class="px-5 py-1 border border-[#33A0FF] text-[#33A0FF] rounded-full">Tips</button>
                        <button class="px-5 py-1 border border-[#33A0FF] text-[#33A0FF] rounded-full">New Year</button>
                    </div>
                </div>

                <div class="mt-10 bg-[#C1C8CE] px-5 py-8 flex flex-col gap-y-5">
                    <h1 class="text-xl font-bold">Go Pro Hero 6</h1>
                    <p class="text-sm">Lorem Ipsum dolor sit amet, consectetur adipiscing elit, labor</p>
                    <h2 class="text-xl text-[#22262A]">$399</h2>
                    <img src="../assets/image/50051823_540375.png" alt="">
                </div>

                <ProductCard :product="productData" />
            </div>

            <div class="grid grid-cols-1 lg:grid-cols-2 gap-10">
                <div class="flex flex-col gap-y-10">
                    <div class="relative h-[23rem]">
                        <img src="../assets/image/a.png" alt="" class="h-full w-full">
                        <p class="absolute w-full bottom-0 bg-gradient-to-r from-black/20 to-black/70 text-[#ffffff] px-5 pt-7 pb-14">Dolor sit amet, consectetur adipiscing elit, sed do</p>
                    </div>
                    <div class="relative h-[23rem] ">
                        <img src="../assets/image/aaa.png" alt="" class="h-full w-full">
                        <p class="absolute w-full bottom-0 bg-gradient-to-r from-black/20 to-black/70 text-[#ffffff] px-5 pt-7 pb-14">Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis</p>
                    </div>
                    <div class="relative h-[23rem] ">
                        <img src="../assets/image/aaaaa.png" alt="" class="h-full w-full">
                        <p class="absolute w-full bottom-0 bg-gradient-to-r from-black/20 to-black/70 text-[#ffffff] px-5 pt-7 pb-14">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore minima veniam, quis nostrum</p>
                    </div>
                    <div class="relative h-[23rem] ">
                        <img src="../assets/image/aaaaaaa.png" alt="" class="h-full w-full">
                        <p class="absolute w-full bottom-0 bg-gradient-to-r from-black/20 to-black/70 text-[#ffffff] px-5 pt-7 pb-14">Dolor sit amet, consectetur adipiscing elit, sed do</p>
                    </div>
                    <div class="relative h-[23rem] ">
                        <img src="../assets/image/aaaaaaaaa.png" alt="" class="h-full w-full">
                        <p class="absolute w-full bottom-0 bg-gradient-to-r from-black/20 to-black/70 text-[#ffffff] px-5 pt-7 pb-14">Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis</p>
                    </div>
                </div>
                <div class="flex flex-col gap-y-10">
                    <div class="relative h-[23rem] ">
                        <img src="../assets/image/aa.png" alt="" class="h-full w-full">
                        <p class="absolute w-full bottom-0 bg-gradient-to-r from-black/20 to-black/70 text-[#ffffff] px-5 pt-7 pb-14">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore minima veniam, quis nostrum</p>
                    </div>
                    <div class="relative h-[23rem] ">
                        <img src="../assets/image/aaaa.png" alt="" class="h-full w-full">
                        <p class="absolute w-full bottom-0 bg-gradient-to-r from-black/20 to-black/70 text-[#ffffff] px-5 pt-7 pb-14">Dolor sit amet, consectetur adipiscing elit, sed do</p>
                    </div>
                    <div class="relative h-[23rem] ">
                        <img src="../assets/image/aaaaaa.png" alt="" class="h-full w-full">
                        <p class="absolute w-full bottom-0 bg-gradient-to-r from-black/20 to-black/70 text-[#ffffff] px-5 pt-7 pb-14">Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis</p>
                    </div>
                    <div class="relative h-[23rem] ">
                        <img src="../assets/image/aaaaaaaa.png" alt="" class="h-full w-full">
                        <p class="absolute w-full bottom-0 bg-gradient-to-r from-black/20 to-black/70 text-[#ffffff] px-5 pt-7 pb-14">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore minima veniam, quis nostrum</p>
                    </div>
                    <div class="relative h-[23rem] ">
                        <img src="../assets/image/aaaaaaaaaa.png" alt="" class="h-full w-full">
                        <p class="absolute w-full bottom-0 bg-gradient-to-r from-black/20 to-black/70 text-[#ffffff] px-5 pt-7 pb-14">Dolor sit amet, consectetur adipiscing elit, sed do</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script setup>
import ProductCard from '../components/ProductCard.vue';

</script>

<style>

</style>