<template>
    <div class="flex justify-center bg-[#F6F7F8] mt-8 py-3 px-4">
        <div class="text-[#C1C8CE]">
            <span class="text-[#33A0FF] mx-2">Home </span>
            /
            <span class="text-[#33A0FF] mx-2">{{ productData?.category }}</span>
            / 
            <span class="text-[#22262A] mx-2">{{ productData?.title }}</span>
        </div>
    </div>
    <div class=" grid grid-cols-[2.5fr_8fr] h-[50rem] w-[80%] m-auto mt-16 gap-x-8">
        <div class="">

        </div>

        <div class="bg-green-400"></div>
    </div>
</template>

<script setup>

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