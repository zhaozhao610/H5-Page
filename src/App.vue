<script setup lang="ts">
import { useRoute } from 'vue-router'
import { ref, watch } from 'vue'
import { NavBar } from 'vant';
import { createApp } from 'vue';
import App from './App.vue'


const app = createApp(App);
app.use(NavBar)
const route = useRoute()
const show = ref()
watch(route, (newValue) => {
  show.value = newValue.meta.hidden
})
</script>

<script lang="ts">
export default {
  name: 'App'
}
</script>

<template>
  <div class="container">
    <van-sticky :offset-top="0">
          <img src="https://img.alicdn.com/imgextra/i4/4071218599/O1CN01NdAYTa2DOOnDCRVDU_!!4071218599.png" alt="">
    </van-sticky>
    <router-view />
    <van-tabbar placeholder route v-show="!show" class="tabbar">
      <van-tabbar-item replace to="/home">
         <img src="https://img.alicdn.com/imgextra/i3/4071218599/O1CN01LVXlpm2DOOnFJqLIT_!!4071218599.png" alt="">
      </van-tabbar-item>
      <van-tabbar-item replace to="/category">
        <img src="https://img.alicdn.com/imgextra/i2/4071218599/O1CN01I60Krc2DOOnDlgFaa_!!4071218599.png" alt="">
      </van-tabbar-item>
      <van-tabbar-item replace to="/center">
         <img src="https://img.alicdn.com/imgextra/i4/4071218599/O1CN010V4fbm2DOOnCjEwOR_!!4071218599.png" alt="">
      </van-tabbar-item>
      <van-tabbar-item replace to="/cart">
        <img src="https://img.alicdn.com/imgextra/i4/4071218599/O1CN01NscAn42DOOnEkBKWm_!!4071218599.png" alt="">
      </van-tabbar-item>
      <van-tabbar-item replace to="/my">
        <img src="https://img.alicdn.com/imgextra/i3/4071218599/O1CN01BeRVxb2DOOnDD9KMj_!!4071218599.png" alt="">
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<style scoped lang="less">
.container {
  height: 100%;
  :deep(.van-sticky){
    width:750px;
    height:165px;
    --van-sticky-z-index:1000;
  img{
    width: 750px;
    height: 165px;
  }
  }
  :deep(.van-tabbar) {
    position: fixed;
    bottom: 0;
    z-index: 1000;
    height: 120px;
    .van-tabbar-item {
      height: 116px;
      font-size: 25px;
      img{
        width: 100px;
        height: 116px;
        margin: 0,17px,0,17px;
      }
    }
  }
}
</style>
