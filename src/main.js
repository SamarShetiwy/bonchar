import './assets/main.scss'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
// import { ScriptCompileContext } from 'vue/compiler-sfc'

const app = createApp(App)

app.use(router)

app.mount('#app');

// const swiper = new Swiper('.swiper', {
//     // Optional parameters
//     direction: 'vertical',
//     loop: true,
  
//     // If we need pagination
//     pagination: {
//       el: '.swiper-pagination',
//     },
  
//     // Navigation arrows
//     navigation: {
//       nextEl: '.swiper-button-next',
//       prevEl: '.swiper-button-prev',
//     },
  
//     // And if we need scrollbar
//     scrollbar: {
//       el: '.swiper-scrollbar',
//     },
//   });
