

<template>

  <Header/>

  <div class=" h-[30rem] bg-gradient-to-r from-[#8F65FF] to-[#FF4858] mt-10 flex flex-col justify-center items-center">
   
    <slider/>

  </div>

<div class="flex justify-center sm:px-16 relative z-10">
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

  <div id="products-container" class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-7">

  <ProductCard v-for="product in products" :key="product.id" :product="product" />

</div>
    <a  class="text-xl font-semibold mt-20 flex justify-center text-[#33A0FF]  uppercase underline  " href="">load more</a>
  </div>
  
</div>

<div>
  <div class="h-[30rem] bg-[#2E90E5] mt-10 flex justify-center items-center gap-x-12 lg:gap-x-44 px-10 relative">
    <div class="text-[#FFFFFF] flex flex-col gap-y-8 md:static absolute top-3 left-3 w-[50%] xs:w-auto">
      <h1 class="sm:text-5xl text-3xl tracking-wide">iPhone 6 plus</h1>
      <p>Performance and design. Taken right <br> to the edge</p>
      <button class="text-start border-b-2 border-[#ffffff] w-fit pb-2">Shop now</button>
    </div>
    <img class="h-full object-cover" src="../assets/image/iphone.png"/>
  </div>
</div>

<div class="flex justify-center mt-16">
  <div class="grid grid-cols-1 sm:grid-cols-3 container xs:w-[54rem] w-full gap-x-12 px-4 sm:gap-y-0 gap-y-12">
    <div class="flex flex-col items-center gap-y-4">
      <i class="pi pi-truck text-5xl text-[#FF6875]"></i>
      <h1 class="text-xl">Free shipping</h1>
      <p class="text-sm text-center">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur porro ex doloremque odit, beatae placeat! Mollitia eaque eum exercitationem cupiditate! Vitae nihil dignissimos tempora est et qui.</p>
    </div>
    <div class="flex flex-col items-center gap-y-4">
      <i class="pi pi-dollar text-5xl text-[#FF6875]"></i>
      <h1 class="text-xl">Free shipping</h1>
      <p class="text-sm text-center">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur porro ex doloremque odit, beatae placeat! Mollitia eaque eum exercitationem cupiditate! Vitae nihil dignissimos tempora est et qui.</p>
    </div>
    <div class="flex flex-col items-center gap-y-4">
      <i class="pi pi-user text-5xl text-[#FF6875]"></i>
      <h1 class="text-xl">Free shipping</h1>
      <p class="text-sm text-center">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur porro ex doloremque odit, beatae placeat! Mollitia eaque eum exercitationem cupiditate! Vitae nihil dignissimos tempora est et qui.</p>
    </div>
  </div>
</div>

<div class="flex flex-col items-center mt-16">
  <h1 class="text-2xl font-semibold">LATEST NEWS</h1>
  <div class="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 lg:container lg:w-[65rem] w-full gap-x-6 px-12 sm:gap-y-4 gap-y-12 mt-12">

    <div class="flex gap-x-3 h-36">
      <img src="../assets/image/Rectangle 1 copy 25.png"/>
      <div class="flex flex-col justify-center">
        <span class="text-[#C1C8CE]">01 Jan, 2015</span>
        <h2 class="font-semibold">Typesetting industry</h2>
        <p>lorem lorem lorem lorem lorem lorem lorem lorem lorem </p>
      </div>
    </div>
    <div class="flex gap-x-3 h-36">
      <img src="../assets/image/Rectangle 1 copy 26.png"/>
      <div class="flex flex-col justify-center">
        <span class="text-[#C1C8CE]">01 Jan, 2015</span>
        <h2 class="font-semibold">Typesetting industry</h2>
        <p>lorem lorem lorem lorem lorem lorem lorem lorem lorem </p>
      </div>
    </div>
    <div class="flex gap-x-3 h-36">
      <img src="../assets/image/Rectangle 1 copy 27.png"/>
      <div class="flex flex-col justify-center">
        <span class="text-[#C1C8CE]">01 Jan, 2015</span>
        <h2 class="font-semibold">Typesetting industry</h2>
        <p>lorem lorem lorem lorem lorem lorem lorem lorem lorem </p>
      </div>
    </div>

  </div>
</div>

<div class="flex flex-col items-center mt-28">
  <h1 class="text-2xl font-semibold">FEATURED PRODUCTS</h1>
  <div class="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 lg:container lg:w-[65rem] w-full gap-x-6 px-12 sm:gap-y-4 gap-y-12 mt-12">

    <div class="flex gap-x-3 h-36">
      <img class="w-32 object-cover" src="../assets/image/c04297141.png"/>
      <div class="flex flex-col justify-center gap-y-2">
        <p>lorem lorem lorem lorem lorem lorem lorem lorem lorem </p>
        <img class="w-24" src="../assets/image/rate.png"/>
        <div class="flex gap-x-4">
          <span class="text-[#FF4858]">$499</span>
          <span class="line-through text-[#C1C8CE]">$399</span>
        </div>
      </div>
    </div>
    <div class="flex gap-x-3 h-36">
      <img class="w-32 object-cover" src="../assets/image/PR-104-0015-002-8A.png"/>
      <div class="flex flex-col justify-center gap-y-2">
        <p>lorem lorem lorem lorem lorem lorem lorem lorem lorem </p>
        <img class="w-24" src="../assets/image/rate.png"/>
        <div class="flex gap-x-4">
          <span class="text-[#FF4858]">$499</span>
          <span class="line-through text-[#C1C8CE]">$399</span>
        </div>
      </div>
    </div>
    <div class="flex gap-x-3 h-36">
      <img class="w-32 object-cover" src="../assets/image/50050995_530579.png"/>
      <div class="flex flex-col justify-center gap-y-2">
        <p>lorem lorem lorem lorem lorem lorem lorem lorem lorem </p>
        <img class="w-24" src="../assets/image/rate.png"/>
        <div class="flex gap-x-4">
          <span class="text-[#FF4858]">$499</span>
          <span class="line-through text-[#C1C8CE]">$399</span>
        </div>
      </div>
    </div>

  </div>
</div>

<div class="mt-32 flex justify-center px-4">
  <input class="w-[25rem] py-2 px-4 border" placeholder="Search query..."/>
  <button class="bg-[#2E90E5] text-[#ffffff] px-6">Search</button>
</div>


</template>

<script setup>
  
  import ProductCard from '../components/ProductCard.vue';
  import slider from '../components/slider.vue';
  import { ref } from 'vue';

const products = ref({});
  async function getProducts(){
  try {
    const response = await fetch('https://fakestoreapi.com/products');
    const data = await response.json();
    products.value = data;
    console.log(products.value);
    console.log(products.id);
  } catch (error) {
    console.error(error);
  }
}
getProducts()





</script>


<style >

</style>
