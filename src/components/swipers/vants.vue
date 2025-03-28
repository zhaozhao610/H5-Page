<template>
   <div>
	   <!-- content -->
	   <div class="bigSwiper">
		   <swiper
			    class="galleryTop";
				:spaceBetween= "10";
				:thumbs="{ swiper: thumbsSwiper }";
				:modules="modules"
				:loop="true"
				:autoplay="true"
				:navigation="true"
				>
			   <swiper-slide class="slide1" v-for="(item,index) in bigImg" :key="index">
				   <img :src="item"/>
			   </swiper-slide>
			   <div class="leftPrev"></div>
			   <div class="rightPrev"></div>
		   </swiper>
	   </div>
	   <!-- btn -->
	   <div class="minSwiper">
		   <swiper 
		        class="galleryBtn";
				:spaceBetween= "10"
				@swiper="setThumbsSwiper"
				:modules="modules"
				:loop="true"
				:autoplay="true"
				:watchSlidesProgress="true"
		   >
		   		<swiper-slide class="slide2"></swiper-slide>
			   <div class="leftPrev"></div>
			   <div class="rightPrev"></div>
		   </swiper>
	   </div>
   </div>
</template>

<script>
import swiper, { Swiper, SwiperSlide } from 'swiper'
import { createApp, ref, reactive  } from 'vue';
import "swiper/css"
import "swiper/css/free-mode"
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/thumbs";
import { Thumbs, Navigation, Autoplay, Zoom, FreeMode } from "swiper/modules";
const modules = [Thumbs, Navigation, Autoplay, Zoom, FreeMode];
import { useRouter } from "vue-router";

const app =createApp()
app.use(Swipe)
app.use(SwipeItem)

export default {
    name: 'swiper1',
    setup() {
    	const bigImg = [
            'https://p3-aio.ecombdimg.com/ecom-shop-material/UpJzlbaB_m_37a624b838a0f41e877d0e960b43a4ea_sx_1169740_www751-991~tplv-qzsgku4lz6-zoom:300:300:q75.webp',
            'https://p3-aio.ecombdimg.com/ecom-shop-material/UpJzlbaB_m_01fa5464541befece22718638f671e72_sx_1467363_www751-991~tplv-qzsgku4lz6-zoom:300:300:q75.webp',
            'https://p3-aio.ecombdimg.com/ecom-shop-material/UpJzlbaB_m_f3d25d4d345110b6adb206b79b3df6d0_sx_877119_www751-991~tplv-qzsgku4lz6-zoom:300:300:q75.webp',
			'https://p3-aio.ecombdimg.com/ecom-shop-material/UpJzlbaB_m_7925ccd39943537520311acb3b785577_sx_844795_www751-991~tplv-qzsgku4lz6-zoom:300:300:q75.webp',
			'https://p3-aio.ecombdimg.com/ecom-shop-material/UpJzlbaB_m_1151c244b8b825de71396df714c12d7b_sx_687789_www751-991~tplv-qzsgku4lz6-zoom:300:300:q75.webp',
			'https://p3-aio.ecombdimg.com/ecom-shop-material/UpJzlbaB_m_444f679ca27ed9ea59058c7c5fc9bdcb_sx_944274_www751-991~tplv-qzsgku4lz6-zoom:300:300:q75.webp',
		]
		
		return {bigImg}
		
		
		const thumbsSwiper = ref(null)
		
		const setThumbsSwiper = (swiper) => {
			thumbsSwiper.value = swiper
		}
		
		return {
		    Thumbs,
		    thumbsSwiper,
		    setThumbsSwiper,
		};
    }

}
</script>

<style scoped>
</style>