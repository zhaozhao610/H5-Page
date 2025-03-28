
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { VueMasonryPlugin } from 'vue-masonry'
import './style.css'
import 'vant/lib/index.css'
import 'amfe-flexible'
import 'element-plus/dist/index.css'
// import "@/node_modules/swiper/dist/css/swiper.css"
import { VueAwesomeSwiper } from 'vue-awesome-swiper'
import vue3SeamlessScroll  from "vue3-seamless-scroll"
import ElementPlus from 'element-plus'
import components from '@/components'
import router from '@/router'
import Vant from 'vant'
import App from './App.vue'
import { NavBar } from 'vant';

const app = createApp(App).use(createPinia()).use(router).use(components).use(VueMasonryPlugin).use(ElementPlus).use(Vant).use(NavBar)


app.mount('#app')
