<template>
  <div class="w-full border-b border-[#C1C8CE] flex flex-col items-center">
    <div class="flex xs:flex-row flex-col items-center justify-between container sm:px-16">
        <div class=" flex m-3 gap-4" >

          <div class="flex justify-center items-end gap-x-2">
            <p>EN</p>
            <i class="pi pi-sort-down-fill text-sm"></i>         
          </div>
          <div class="flex justify-center items-end gap-x-2">
            <p>USD</p>
            <i class="pi pi-sort-down-fill text-sm"></i> 
          </div>

        </div>

        <div class=" flex items-center gap-x-10 xs:gap-x-5 md:gap-x-11 m-3">
          <div class="flex items-center gap-x-2">
            <i class="pi pi-user text-sm"></i> 
            <p>My Profile</p>
          </div>
            
          <div class="flex items-center gap-x-2">
            <i class="pi pi-shopping-bag text-sm"></i> 
            <p>0 items <span class="text-[#707070] ">$0.00</span>  </p>
          </div>
          <i class="pi pi-search text-sm"></i> 
        </div>
    </div>
  </div>



<!-- Nav -->

<nav class="mt-8 hidden justify-center sm:flex">
  <div class="container flex items-center justify-center flex-col gap-y-4">
    <h1 class="text-[#FF4252] font-bold text-2xl text-shadow-2xl tracking-widest">BOUNCER</h1>
    
    <HomeDropDown />

    <ul class="flex gap-x-8 md:gap-x-11 w-full sm:w-auto">
      <li @click="toggleDiv" :class="{'text-[#33A0FF]': isOpen } ">HOME</li>
      <li>STORE</li>
      <li>IPHONE</li>
      <li>IPAD</li>
      <li>MACBOOK</li>
      <li>ACCESSORIES</li>
    </ul>
  </div>
</nav>

</template>

<script setup>
import { ref } from 'vue';
import HomeDropDown from './HomeDropDown.vue';

const isOpen = ref(false);
const toggleDiv = ()=>{
  isOpen.value =!isOpen.value;
  console.log(isOpen.value);
};
</script>



  
  <style>
  </style>
  