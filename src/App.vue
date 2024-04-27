<script setup>
import { RouterView } from 'vue-router'
import Header from './components/Header.vue';
import HomeView from './views/HomeView.vue';

</script>



<template>
 
<!-- <div class="container"> -->

 <HomeView />
  <RouterView />
<!-- </div> -->
</template>

<style lang="scss">

@import './assets/style.scss';

</style>

