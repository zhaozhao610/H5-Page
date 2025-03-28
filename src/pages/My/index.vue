<template>
     <div class="my">
         <img src="https://img.alicdn.com/imgextra/i2/4071218599/O1CN0102K4nk2DOOnD9Blog_!!4071218599.png" alt="">
     </div>
     <van-cell  />
     <van-back-top right="15vw" bottom="10vh" />
</template>
<script>
import { createApp } from 'vue';
import { BackTop } from 'vant';

const app = createApp();
app.use(BackTop);

export default {
   name:'My',
   setup(){

   }

}
</script>
<style scoped lang="scss">
   .my{
      width: 750px;
      height: 1461px;
      img{
        width: 750px;
        height: 1461px;
      }
   }
</style>
