<template>
  <div class=" hidden   :style= '{ display: showDivComputed } '
  flex absolute top-44 w-[60rem] left-1/2 -translate-x-1/2 justify-between gap-x-11 py-4 px-6 rounded border">
    <div class="flex flex-col gap-y-5">
        <div class="text-[#C1C8CE] mx-2 font-semibold">Category</div>
        <div>Airport & Wireless</div>
        <div>AppleCare</div>
        <div>Bags, shells & Sleeves</div>
        <div>Business & Security</div>
        <div>Cables & Docks</div>
    </div>
    <div class="flex flex-col gap-y-5 mt-9">
        <div>Cameras & Video</div>
        <div>Car & Travel</div>
        <div>Cases & Films</div>
    </div>
    <div class="flex flex-col gap-y-5">
        <div class="text-[#C1C8CE] font-semibold">Category</div>
        <div>Charging Devices</div>
        <div>Connected Home</div>
        <div>Device Care</div>
        <div>Display & Graphic</div>
        <div>Fitness & Sport</div>
    </div>
    <div class="flex flex-col gap-y-5 mt-9">
        <div>Headphones</div>
        <div>Healhkit</div>
    </div>
    <div class="flex flex-col gap-y-5">
        <div class="text-[#C1C8CE] font-semibold">Category</div>
        <div>Mice & Keyboards</div>
        <div>Music Creation</div>
        <div>Networking & Server</div>
    </div>
  </div>
</template>



 <script setup>

import { defineProps ,computed } from 'vue';

const props = defineProps({
  showDiv: {
    type: Boolean,
    default: true
  }
});

const showDivComputed = computed(() => {
return props.showDiv ? 'block' : 'none';
});
console.log(showDivComputed)

</script>
<style>

</style>