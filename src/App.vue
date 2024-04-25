<script setup>
import { RouterView } from 'vue-router'
import Navigation from './components/Header.vue';
import HomeView from './views/HomeView.vue';

</script>



<template>
 
<!-- <div class="container"> -->
 
  <Navigation />
  <v-btn color="primary">Click me</v-btn>
  
  <!-- <HomeView /> -->
  <RouterView />
<!-- </div> -->
</template>

<style lang="scss">

@import './assets/style.scss';

</style>

