<template>
    <div class="flex justify-center bg-[#F6F7F8] mt-8 py-3 px-4 ">
        <div class="text-[#C1C8CE]">
            <span class="text-[#33A0FF] mx-2">Home </span>
            /
            <span class="text-[#33A0FF] mx-2">{{ productData?.category }}</span>
            / 
            <span class="text-[#22262A] mx-2">{{ productData?.title }}</span>
        </div>
    </div>

    <div class="flex justify-center mt-10 px-4">
      <div class="container grid grid-cols-1 sm:grid-cols-[2.5fr_8fr] mt-16 gap-x-8">
          <div class="">
            <div class="p-4 bg-[#E5E5E5] rounded">
              <h1 class="text-xl font-semibold">Accessories</h1>
              <ul class="mt-6 flex flex-col gap-y-5">
                <li class="flex justify-between">
                  Apple Car
                  <span>10</span>
                </li>
                <li class="flex justify-between text-[#33A0FF]">
                  Air port & wireless
                  <span>10</span>
                </li>
                <li class="flex justify-between">
                  Cables & Docks
                  <span>10</span>
                </li>
                <li class="flex justify-between">
                  Cases & Films
                  <span>10</span>
                </li>
                <li class="flex justify-between">
                  Charging Devices
                  <span>10</span>
                </li>
                <li class="flex justify-between">
                  Connected home
                  <span>10</span>
                </li>
                <li>
                  Headphones
                  <span>10</span>
                </li>
              </ul>
            </div>

            <div class="bg-[#E5E5E5] rounded mt-10 p-4 flex flex-col gap-y-3">
              <h1 class="text-xl font-semibold">Prices</h1>
              <div class="flex justify-between">
                <span>Ranger:</span>
                <span>$14 - $30</span>
              </div>
              <input type="range"/>
            </div>

            <div class="bg-[#E5E5E5] rounded mt-10 p-4">
              <h1 class="text-xl font-semibold">Color</h1>
              <div class="flex gap-x-14 mt-4">
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
                    <div class=" border-[#FF00B4] size-6 rounded-full flex items-center justify-center">
                        <div class=" bg-[#FF00B4] size-4 rounded-full"></div>
                    </div>
                    <div class=" border-[#EFDFDF] size-6 rounded-full flex items-center justify-center">
                        <div class=" bg-[#EFDFDF] size-4 rounded-full"></div>
                    </div>
                </div>
              </div>
            </div>

            <div class="bg-[#E5E5E5] rounded mt-10 p-4">
              <h1 class="text-xl font-semibold">Brand</h1>
              <ul class="mt-6 flex flex-col gap-y-5">
                <li class="flex justify-between">
                  Apple
                  <span>10</span>
                </li>
                <li class="flex justify-between text-[#33A0FF]">
                  LG
                  <span>10</span>
                </li>
                <li class="flex justify-between">
                  Samsung
                  <span>10</span>
                </li>
                <li class="flex justify-between">
                  Siemens
                  <span>10</span>
                </li>
              </ul>
            </div>

            <button class="bg-[#E5E5E5] rounded mt-10 p-4 w-full">More</button>
          </div>

          <div>

            <div class="rounded bg-[#2E90E5] mt-10 sm:mt-0 flex items-center justify-center lg:justify-between xl:px-20 lg:px-10 gap-x-9 relative h-fit">
              <div class="text-[#FFFFFF] flex flex-col lg:p-0 rounded p-5 gap-y-4 lg:gap-y-8 absolute lg:static bg-[#091e31]/50 lg:bg-transparent lg:w-auto w-[80%]">
                <h1 class="text-4xl">iPhone 8</h1>
                <p>Performance and design. Taken right to the edge.</p>
                <button class="border-b-2 w-fit pb-1 border-[#FFFFFF]">Shop now</button>
              </div>
              <img class="w-[20rem]" src="../assets/image/iPhone6s_discover_desktsdop_08_iOS9.png" alt="">
            </div>

            <div class="bg-[#E5E5E5] mt-10 p-4 rounded flex justify-between">
              <div class="flex flex-wrap gap-y-5 gap-x-8">
                <div>
                  <span>13</span>
                  items
                </div>
                <div class="flex gap-x-2">
                  Sort by
                  <select class="bg-[#E5E5E5] outline-0 px-6 border border-[#dbdbdb]">
                    <option>Name</option>
                    <option>Price</option>
                  </select>
                </div>
                <div class="flex gap-x-2">
                  Show
                  <select class="bg-[#E5E5E5] outline-0 px-6 border border-[#dbdbdb]">
                    <option>12</option>
                    <option>6</option>
                  </select>
                </div>
              </div>

              <div class="flex gap-x-6 text-[#2E90E5]">
                <i class="pi pi-th-large text-2xl"></i>
                <i class="pi pi-bars text-2xl text-[#C1C8CE]"></i>
              </div>

            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8 mt-10 rounded">
              <div v-for=" index in 9" :key="index"   class=" product border p-3 flex flex-col items-center gap-y-7">
                <img class="h-40 w-fit object-cover" src="../assets/image/50061505_575246.png" />
                <div class="flex flex-col items-center gap-y-3">
                  <h1>Product title</h1>
                  <div class="flex flex-col gap-y-2">
                    <img src="../assets/image/rate.png" />
                    <div class="flex gap-x-3">
                      <span class="text-[#FF4858]">$499</span>
                      <span class="text-[#5D656B] line-through">$599</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- <div class="flex flex-col gap-y-5 mt-10">
              <div v-for=" index in 9" :key="index"   class="border-b p-3 flex flex-col lg:flex-row items-center gap-x-7">
                <div class="w-full border px-3 py-16 md:w-3/4 lg:w-[35%] relative flex justify-center">
                  <button class="px-3 py-1 bg-[#FF4858] text-[#ffffff] rounded absolute top-2 left-4">HOT</button>
                  <img class="xl:h-40 lg:h-28 h-52 w-fit object-cover" src="../assets/image/50061505_575246.png" />
                </div>
                <div class="flex flex-col gap-y-3 w-full md:w-3/4 lg:w-[65%] mt-6 lg:mt-0">
                  <h1 class="font-semibold">Beats Solo2 On Ear Headphones - Black</h1>
                  <div class="border-b pb-4 flex gap-x-5 items-center text-[#2E90E5]">
                    <img class="h-fit" src="../assets/image/rate.png" />
                    <div class="text-[#C1C8CE]">
                      <span>0</span>
                      Reviews
                    </div>
                    Submit a review
                  </div>
                  <div class="flex gap-x-3">
                    <span class="text-[#FF4858]">$499</span>
                    <span class="text-[#5D656B] line-through">$599</span>
                  </div>
                  <p>Nunc facilisis sagittis ullamcorper. Proin lectus ipsum, gravida et mattis vulputate, tristique ut lectus. Sed et lectus lorem nunc leifend laorevtr istique et congue. Vivamus adipiscin vulputate g nisl ut dolor ...</p>
                  <div class="flex gap-x-3 mt-4">
                    <button @click="data.addToCart(item)" class="bg-[#EBF6FF] text-[#33A0FF] h-fit px-5 py-1 rounded flex gap-x-4 items-center">
                        <i class="pi pi-shopping-cart text-lg"></i>
                        Add To Cart
                    </button>
                    <button class="bg-[#EBF6FF] text-[#33A0FF] h-fit px-3 py-1 rounded">
                        <i class="pi pi-heart text-lg"></i>
                    </button>
                  </div>
                  </div>
              </div>
            </div> -->

          </div>
        </div>
    </div>

</template>

<script setup>
  import ProductCard from '../components/ProductCard.vue'
</script>

<style lang="scss" scoped>

.swiper {
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: white;

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


</style>