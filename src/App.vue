<script setup>
import { RouterView } from 'vue-router';
import Header from './components/Header.vue';
// import HomeView from './views/HomeView.vue';
import footar from './components/footar.vue';



</script>



<template>
 
<!-- <div class="container"> -->
  <Header />
  
  <RouterView />

  <footar/>

<!-- </div> -->
</template>

<style lang="scss">

@import './assets/style.scss';


</style>

