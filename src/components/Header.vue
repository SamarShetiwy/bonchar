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
           <router-link to="/cart">
            <p> {{data.countCartItems}}items <span class="text-[#707070] ">$0.00</span>  </p>
          </router-link>
          </div>
          <i class="pi pi-search text-sm"></i> 
        </div>
    </div>
  </div>




<nav class="mt-8  justify-center sm:flex ">
 <div class="container flex items-center justify-center flex-col gap-y-4">
    <h1 class="text-[#FF4252] font-bold text-2xl text-shadow-2xl tracking-widest">BOUNCER</h1>
    
    <HomeDropDown v-show="showDropdown" />

    <ul class="sm:flex gap-x-8 md:gap-x-11 w-full sm:w-auto hidden">
    <router-link></router-link>
    <router-link to="/"><li >HOME</li></router-link>   
    <router-link to="#"><li @click.prevent="toggleComponent" :class="{'text-[#33A0FF]': showDropdown }">STORE</li></router-link>
    <router-link to="#"><li>IPHONE</li></router-link>
    <router-link to="#"><li>IPAD</li></router-link>
    <router-link to="#"><li>MACBOOK</li></router-link>
    <router-link to="#"><li>ACCESSORIES</li></router-link>
    </ul>
  </div>
</nav>



</template>

<script setup>
import { ref } from 'vue';
import HomeDropDown from './HomeDropDown.vue';
import { useCartStore } from '../stores/cartStore.js';

const data = useCartStore();





const showDropdown = ref(false);

const toggleComponent = ()=>{

  showDropdown.value = !showDropdown.value;
  console.log(showDropdown.value);
};








</script>







  