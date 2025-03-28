<template>
    <div class="detail">
        <div class="center">
            <van-tabs v-model:active="active" color="#8a8a8a">
            <van-tab title="视频" >
                <video class="video" src="http://cloud.video.taobao.com/play/u/null/p/1/e/6/t/1/499323904476.mp4" 	   controls loop autoplay muted></video>
            </van-tab>
            <van-tab title="静态图">
                <swiper
                    class="swiper"
                    :loop="true"
                    :space-between="50"
                    :slides-per-view="1"
                    :autoplay="{ delay:3000 }"
                    navigation
                    :pagination="{ clickable: true }">
                <swiper-slide class="slide" v-for="(image, index) in swipeImg" :key="index">
                    <img :src="image" />
                </swiper-slide>
                </swiper>
            </van-tab>
        </van-tabs>

        <div class="price">
            <img src="https://img.alicdn.com/imgextra/i2/4071218599/O1CN01887aZy2DOOnDJ7NIa_!!4071218599.png" alt="">
        </div>
         <div class="cart" >
              <img src="https://img.alicdn.com/imgextra/i1/4071218599/O1CN01vQk3hj2DOOnCpBN6o_!!4071218599.png" alt="">
         </div>
        </div>
        <div class="bottom">
            <van-tabs v-model:active="active1" color="#8a8a8a">
            <van-tab title="商品信息" class="van-tab1">
                 <img src="https://img.alicdn.com/imgextra/i3/4071218599/O1CN01834AdG2DOOnEql6Xk_!!4071218599.png" alt="">
            </van-tab>
            <van-tab title="安全洗护" class="van-tab2">
                  <img src="https://img.alicdn.com/imgextra/i2/4071218599/O1CN01Xk97w42DOOnDF8SUK_!!4071218599.png" alt="">
            </van-tab>
            <van-tab title="品牌服务" class="van-tab3">
                  <img src="https://img.alicdn.com/imgextra/i1/4071218599/O1CN01MGk5cW2DOOnD5CtGB_!!4071218599.png" alt="">
            </van-tab>
            <van-tab title="礼品包装" class="van-tab4">
                 <img src="https://img.alicdn.com/imgextra/i3/4071218599/O1CN01dmJRFN2DOOnFR7gbF_!!4071218599.png" alt=""> 
            </van-tab>
        </van-tabs>
        </div>

        <van-cell v-for="item in list" :key="item" :title="item" />
        <van-back-top right="15vw" bottom="10vh" />  

    </div>
 </template>
 
 <script>
import { createApp,ref } from 'vue';
import { Tab, Tabs, } from 'vant';
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import 'swiper/css/scrollbar'
import 'swiper/css/pagination'
import "swiper/css/thumbs"
import { BackTop } from 'vant';





const app = createApp();
app.use(Tab);
app.use(Tabs);
app.use(Swiper);
app.use(BackTop);
 export default {
     name: 'Detail',
     components: {
      Swiper,
      SwiperSlide,
    },
     setup(){
        const active =ref(0);
        const active1 = ref(0)

        const swipeImg = [
            'https://img.alicdn.com/imgextra/i2/4071218599/O1CN01K18ISU2DOOnDubBgG_!!4071218599.png',
            'https://img.alicdn.com/imgextra/i4/4071218599/O1CN01lqPS9p2DOOnDIjkoT_!!4071218599.png'
        ]
        const list = [...Array(50).keys()];
        return{
            active,
            swipeImg,
            active1,
            list
        }
     }
 }
 </script>
 
 <style scoped lang="scss">
     .detail{
         width:750px;
         height: 100%;
        :deep(.van-tab){
             --van-tab-font-size:20px;
        }
        .video{
            width: 750px;
            height: 1000px;

        }
        .swiper{
           img{
              width: 750px;
              height: 1000px;
           }
        }
        .price{
            width: 750px;
            height: 200px;
            img{
                margin-top: 20px;
                margin-left: 200px;
                width: 500px;
                height: 177px;
            }
        }
        .cart{
            width: 750px;
            height: 302px;
            img{
                width: 750px;
                height: 302px;
            }
        }
        .bottom{
            .van-tab1{
                width: 750px;
                height: 5614px;
                img{
                    width: 714px;
                    height: 5614px; 
                    margin-left: 18px;
                }
            }
            .van-tab2{
                width: 750px;
                height: 1274px;
                img{
                    width: 750px;
                    height: 1274px; 
                }
            }
            .van-tab3{
                width: 750px;
                height: 775px;
                img{
                    width: 714px;
                    height: 775px; 
                }
            }
            .van-tab4{
                width: 750px;
                height: 1668px;
                img{
                    width: 750px;
                    height: 1668px; 
                }
            }
        }
     }
 </style>