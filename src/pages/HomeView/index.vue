<template>
  <!-- kv -->
  <div class="kv">

    <swiper
      class="swiper"
      :loop="true"
      :space-between="50"
      :slides-per-view="1"
      :autoplay="{ delay: 3000 }"
      navigation
      :pagination="{ clickable: true }"
      @click="goDeatil"
    >
      <swiper-slide class="slide" v-for="(image, index) in images" :key="index">
        <img :src="image" />
      </swiper-slide>

      <div class="swiper-pagination"></div>
    </swiper>
  </div>
  <!-- 电梯 -->
  <div class="elevator">
    <div class="top">
      <img
        src="https://img.alicdn.com/imgextra/i2/3969049197/O1CN01T1m03a2HoHbtqj3du_!!3969049197.png"
        alt=""
      />
    </div>
  </div>
  <!-- 缩略图轮播 -->
  <div class="thumbSwiper">
    <div class="title">
      <img
        src="https://img.alicdn.com/imgextra/i4/3969049197/O1CN01Zpdial2HoHc85kgYd_!!3969049197.png"
        alt=""
      />
    </div>
    <div class="container">
      <swiper
        class="minThumb"
        :slides-per-view="2"
        :spaceBetween:="20"
        :watchSlidesVisibility="true"
        :modules="modules"
      >
        <swiper-slide class="thumbsChange" v-for="(imgs, index) in minThumbImgs" :key="index">
          <img v-show="thumbImgsActive != index" :src="imgs" @click="handleMin(index)" />
          <img
            v-show="thumbImgsActive == index"
            :src="minThumbImgs1[index]"
            @click="handleMin(index)"
          />
        </swiper-slide>
      </swiper>
      <swiper
        class="bigThumb"
        :loop="true"
        :space-between="50"
        :slides-per-view="1"
        :autoplay="{ delay: 3000 }"
        :thumbs="{ swiper: thumbSwiper }"
        :modules="modules"
        @slideChange="changeSwiper"
        ref="mySwiper"
      >
        <swiper-slide class="thumbs" v-for="(img, index) in thumbImgs" :key="index">
          <img :src="img" />
        </swiper-slide>
      </swiper>
    </div>

    <div class="bottom">
      <img
        src="https://img.alicdn.com/imgextra/i2/3969049197/O1CN010KDM7Q2HoHcAPebAC_!!3969049197.png"
        alt=""
      />
    </div>
  </div>
  <!-- 无缝轮播 -->
  <div class="seamlessSwiper">
    <div class="title">
      <img
        src="https://img.alicdn.com/imgextra/i4/3969049197/O1CN01IRmdu22HoHc5ki56V_!!3969049197.png"
        alt=""
      />
    </div>
    <div class="content">
      <swiper
        class="swiper"
        :loop="true"
        :initial-slide="1"
        :centered-slides="true"
        :slides-per-view="1.5"
        :effect="'coverflow'"
        :coverflow-effect="coverflowEffect"
      >
        <swiper-slide class="seamless" v-for="(image, index) in seamlessImgs" :key="index">
          <img :src="image" />
        </swiper-slide>
      </swiper>

      <!-- <el-carousel  class="swiper" :interval="4000" type="card" :cardScale="0.5">
        <el-carousel-item class="seamless" v-for="(image,index) in seamlessImgs"   :key="index">
          <img :src="image" >
        </el-carousel-item>
     </el-carousel> -->
    </div>
  </div>

  <!-- 热门推荐 -->
  <div class="hotRecommend">
    <div class="title">
      <img
        src="https://img.alicdn.com/imgextra/i3/3969049197/O1CN01hF1cg62HoHc9GNbMY_!!3969049197.png"
        alt=""
      />
    </div>
    <div class="content">
      <img
        src="https://img.alicdn.com/imgextra/i4/3969049197/O1CN01hLlVB42HoHc80VYVb_!!3969049197.png"
        alt=""
      />
    </div>
  </div>

  <!-- 简单轮播 -->
  <div class="gifts">
    <div class="title">
      <img
        src="https://img.alicdn.com/imgextra/i2/3969049197/O1CN01wAcp572HoHc8bBbZj_!!3969049197.png"
        alt=""
      />
    </div>
    <swiper
      class="giftsSwiper"
      :loop="true"
      :space-between="50"
      :slides-per-view="1"
      :autoplay="{ delay: 3000 }"
      navigation
      :pagination="{ clickable: true }"
      :scrollbar="{ draggable: true, dragSize: 200 }"
    >
      <swiper-slide class="giftsSlide" v-for="(image, index) in giftsImgs" :key="index">
        <img :src="image" />
      </swiper-slide>
    </swiper>
  </div>

  <!-- 底部 -->
  <div class="bottom">
    <img
      src="https://img.alicdn.com/imgextra/i1/4071218599/O1CN013nPrK12DOOn6nx38W_!!4071218599.png"
      alt=""
    />
  </div>

  <van-cell />
  <van-back-top right="15vw" bottom="10vh" />
</template>
<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue'
import { useRouter } from 'vue-router'
// import Swiper from 'swiper';
// Import Swiper styles
import 'swiper/css'
import 'swiper/css/scrollbar'
import 'swiper/css/pagination'
import 'swiper/css/thumbs'
// import { Autoplay, Navigation, Scrollbar } from 'swiper'
import SwiperCore, {
  EffectCoverflow,
  Navigation,
  Pagination,
  A11y,
  Autoplay,
  Scrollbar,
  Thumbs,
  FreeMode
} from 'swiper/core'
SwiperCore.use([
  EffectCoverflow,
  Navigation,
  Pagination,
  A11y,
  Autoplay,
  Scrollbar,
  Thumbs,
  FreeMode
])
// const modules = [Autoplay, Navigation, Scrollbar]
import { ref } from 'vue'

export default {
  components: {
    Swiper,
    SwiperSlide
  },
  name: 'HomeView',
  setup() {
    const route = useRouter()
    // 定义效果配置
    const coverflowEffect = {
      rotate: 0, //slide做3d旋转时Y轴的旋转角度。默认50。
      stretch: -50, //每个slide间的拉伸值，越大slide靠得越紧。
      depth: 50, //slide的位置深度。值越大z轴距离越远，看起来越小。
      modifier: 1, //depth和rotate和stretch的倍率，相当于depth*modifier、rotate*modifier、stretch*modifier，值越大这三个参数的效果越明显。默认1。
      slideShadows: false //开启slide阴影。默认 true。
    }
    // kv内容
    const images = [
      'https://img.alicdn.com/imgextra/i3/3969049197/O1CN012qfAJ32HoHc9WVAD2_!!3969049197.png',
      'https://img.alicdn.com/imgextra/i3/3969049197/O1CN01RgWHQE2HoHbpSQMsZ_!!3969049197.png'
    ]

    // 无缝轮播内容
    const seamlessImgs = [
      'https://img.alicdn.com/imgextra/i2/3969049197/O1CN01er5c3D2HoHcAPtAYi_!!3969049197.png',
      'https://img.alicdn.com/imgextra/i2/3969049197/O1CN01er5c3D2HoHcAPtAYi_!!3969049197.png',
      'https://img.alicdn.com/imgextra/i2/3969049197/O1CN01er5c3D2HoHcAPtAYi_!!3969049197.png'
    ]

    // 缩略图轮播内容
    const thumbImgs = [
      'https://img.alicdn.com/imgextra/i2/3969049197/O1CN01HCw5jD2HoHc9Vb2f2_!!3969049197.png',
      'https://img.alicdn.com/imgextra/i4/3969049197/O1CN01yY1gUo2HoHcBA3JnO_!!3969049197.png'
    ]

    const minThumbImgs = [
      'https://img.alicdn.com/imgextra/i2/3969049197/O1CN01S4zzN72HoHc6ZDpx4_!!3969049197.png',
      'https://img.alicdn.com/imgextra/i2/3969049197/O1CN01S4zzN72HoHc6ZDpx4_!!3969049197.png'
    ]

    const minThumbImgs1 = [
      'https://img.alicdn.com/imgextra/i2/3969049197/O1CN01IsQUQs2HoHcBj90rz_!!3969049197.png',
      'https://img.alicdn.com/imgextra/i2/3969049197/O1CN01IsQUQs2HoHcBj90rz_!!3969049197.png'
    ]

    // 礼赠心选轮播内容
    const giftsImgs = [
      'https://img.alicdn.com/imgextra/i1/3969049197/O1CN01AxVuDy2HoHc9GvqFS_!!3969049197.png',
      'https://img.alicdn.com/imgextra/i1/3969049197/O1CN01AxVuDy2HoHc9GvqFS_!!3969049197.png',
      'https://img.alicdn.com/imgextra/i1/3969049197/O1CN01AxVuDy2HoHc9GvqFS_!!3969049197.png',
      'https://img.alicdn.com/imgextra/i1/3969049197/O1CN01AxVuDy2HoHc9GvqFS_!!3969049197.png'
    ]

    // 大切换小
    const thumbImgsActive = ref('')

    const changeSwiper = (i) => {
      if (i.activeIndex <= thumbImgs.length) {
        thumbImgsActive.value = i.activeIndex - 1
      } else {
        thumbImgsActive.value = 0
      }
    }

    // 小切换大
    const mySwiper = ref(null)

    const handleMin = (i) => {
      mySwiper.value?.$el.swiper.slideTo(i + 1)
      // swiperRef.value.swiper.slideTo(i+1)
      // console.log(swiperRef.value)
      // slideTo(3)
      // thumbImgsActive.value = i
    }

    const goDeatil = () => {
      route.push('/detail')
    }

    return {
      mySwiper,
      images,
      seamlessImgs,
      coverflowEffect,
      thumbImgs,
      minThumbImgs,
      minThumbImgs1,
      thumbImgsActive,
      changeSwiper,
      handleMin,
      giftsImgs,
      goDeatil
    }
  }
}
</script>

<style scoped lang="scss">
* {
  padding: 0;
  margin: 0;
}

// kv
.kv {
  height: 1000px;
  .swiper:deep() {
    height: 1000px;
    width: 750px;
    .slide {
      img {
        height: 1000px;
        width: 750px;
      }
    }
  }
}

// 电梯
.elevator {
  width: 750px;
  .top {
    width: 714px;
    margin-left: 18px;
    img {
      width: 714px;
      height: 165px;
    }
  }
}

// 缩略图轮播
.thumbSwiper {
  .title {
    width: 750px;
    height: 323px;
    img {
      margin-left: 18px;
      width: 714px;
      height: 323px;
    }
  }
  .container {
    width: 750px;
    height: 952px;
    // background-color: pink;
    position: relative;
    .minThumb {
      width: 628px;
      height: 65px;
      position: absolute;
      top: 50px;
      left: 61px;
      z-index: 100;
      .thumbsChange {
        width: 628px;
        height: 65px;
        img {
          width: 314px;
          height: 54px;
        }
      }
    }
    .bigThumb {
      width: 750px;
      height: 952px;

      .thumbs {
        width: 750px;
        height: 952px;
        img {
          margin-left: 16px;
          width: 714px;
          height: 952px;
        }
      }
    }
  }
  .bottom {
    width: 750px;
    height: 1462px;
    img {
      width: 714px;
      height: 1462px;
      margin-left: 18px;
    }
  }
}

// 无缝轮播
.seamlessSwiper {
  .title {
    width: 750px;
    height: 323px;
    img {
      width: 714px;
      height: 323px;
      margin-left: 18px;
    }
  }
  .content {
    width: 750px;
    height: 656px;
    .swiper {
      width: 750px;
      height: 656px;
      .seamless {
        width: 536px;
        height: 656px;
        img {
          width: 536px;
          height: 656px;
        }
      }
    }
  }
}

// 热门推荐
.hotRecommend {
  width: 750px;
  height: 816px;
  .title {
    width: 750px;
    height: 323px;
    img {
      width: 714px;
      height: 323px;
      margin-left: 18px;
    }
  }
  .content {
    width: 750px;
    height: 493px;
    img {
      width: 714px;
      height: 493px;
      margin-left: 18px;
    }
  }
}

// 礼赠心选
.gifts {
  width: 750px;
  height: 1100px;
  .title {
    width: 750px;
    height: 323px;
    img {
      width: 714px;
      height: 323px;
      margin-left: 18px;
    }
  }
  .giftsSwiper {
    width: 750px;
    height: 558px;
    .giftsSlide {
      width: 750px;
      height: 558px;
      img {
        width: 714px;
        height: 558px;
        margin-left: 18px;
      }
    }
  }
}

// 底部
.bottom {
  width: 750px;
  height: 605px;
  img {
    width: 750px;
    height: 605px;
  }
}
</style>
