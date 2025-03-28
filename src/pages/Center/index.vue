<template>
    <div class="member">
        <div class="top">
             <img src="https://img.alicdn.com/imgextra/i3/4071218599/O1CN01fv2rDY2DOOn7i9LGu_!!4071218599.png" alt="">
        </div>
        <div class="content1" >
              <img src="https://img.alicdn.com/imgextra/i4/4071218599/O1CN0189DfTm2DOOnEDBiY8_!!4071218599.png" alt="">
        </div>
        <div class="content2" >
              <img src="https://img.alicdn.com/imgextra/i4/4071218599/O1CN01TAiYjS2DOOnCm3o5Z_!!4071218599.png" alt="">
        </div>
        <div class="content3" >
              <img src="https://img.alicdn.com/imgextra/i4/4071218599/O1CN01Klog802DOOnC3pIYK_!!4071218599.png" alt="">
        </div>
        <div class="content4" >
              <img src="https://img.alicdn.com/imgextra/i2/4071218599/O1CN01pcFrn82DOOnDxpxRh_!!4071218599.png" alt="">
        </div>
        <div class="bottom" >
              <img src="https://img.alicdn.com/imgextra/i2/4071218599/O1CN01uMI2lN2DOOnEDAmLr_!!4071218599.png" alt="">
        </div>
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
     name: 'Cart',
     setup(){
   }
 }
 </script>
 
 <style scoped lang="scss">
     .member{
         width:750px;
        .top{
            width: 750px;
            height: 73px;
            img{
                margin-left:33px;
                width: 684px;
                height: 73px;
            }
        }
        .content1{
            width: 750px;
            height: 902px;
            img{
                width: 750px;
                height: 902px;
            }
        }
        .content2{
            width: 750px;
            height: 1096px;
            img{
                margin-left:18px;
                width: 714px;
                height: 1096px;
            }
        }
        .content3{
            width: 750px;
            height: 924px;
            img{
                margin-left:18px;
                width: 714px;
                height: 924px;
            }
        }
        .content4{
            width: 750px;
            height: 813px;
            img{
                margin-left:18px;
                width: 714px;
                height: 813px;
            }
        }
        .bottom{
            width: 750px;
            height: 342px;
            img{
                margin-left:25px;
                width: 700px;
                height: 342px;
            }
        }
     }
 </style>