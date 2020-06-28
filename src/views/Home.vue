<template>
  <div class="home-container">
    <div class="home-loading" :class="{'home-loading-active': turnLoadingFlag}" v-if="isLoading">
      <img :src="require('assets/images/home/logo.png')" alt class="logo" />
    </div>

    <!-- <el-carousel arrow="never" v-else>
      <transition-group name="fadeIn" tag="ul">
      <el-carousel-item v-for="item in 4" :key="item">
        <img src="../assets/images/home/banner.jpg" alt />
      </el-carousel-item>
      </transition-group>
    </el-carousel>-->
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div v-for="el in 4" class="swiper-slide" :key="el">
          <img src="../assets/images/home/banner.jpg" alt />
        </div>
      </div>
      <!-- 如果需要分页器 -->
      <div class="swiper-pagination"></div>
    </div>
    <tm-footer></tm-footer>
  </div>
</template>

<script>
import { getUserComTravelersByUserId } from "@/util/request/api.js";
import { setTimeout, setInterval } from "timers";
import Swiper from "swiper";
export default {
  name: "home",
  data() {
    return {
      isLoading: true,
      turnLoadingFlag: false
    };
  },
  created() {
    setInterval(() => {}, 1000);
    setTimeout(() => {
      this.turnLoadingFlag = true;
    }, 700);
    setTimeout(() => {
      this.isLoading = false;
    }, 2100);
  },
  mounted() {
    this.initSwiper();
    this.$nextTick(() => {
      
    });
  },
  methods: {
    initSwiper() {
      new Swiper(".swiper-container", {
        pagination: '.swiper-pagination',
        paginationClickable: true,
        direction: 'vertical',
        spaceBetween: 30,
        hashnav: true,
        hashnavWatchState: true,
        loop: true,
        autoplay: 5000,
        /*触碰后还能够继续轮播*/
        autoplayDisableOnInteraction: false,
        nextButton:'.swiper-button-next1',
        effect : 'fade',
        fade: {
          crossFade: false,
        },
        on: {
          slideChangeTransitionStart: function() {
            
            let prevSlide = this.slides.eq(this.previousIndex);
            let nextSlide = this.slides.eq(this.activeIndex);
            console.log(123, prevSlide);
            prevSlide.removeClass('fadeIn');
            nextSlide.addClass('fadeIn');
          }
        },
        // onSlideChangeEnd: function(swiper) {
        //   prevSlide = swiper.slides[swiper.previousIndex];
        //   prevSlide.className = "swiper-slide";
        // }
      });
    }
  }
};
</script>
<style lang="scss" scoped>
.home-container {
  height: 100%;
  .home-loading {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    z-index: 1000;
    background-color: #2a282a;
    transition: background-color 0.7s ease;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .home-loading-active {
    background-color: #ffffff;
  }
  .logo {
    animation: opacityShow 1s ease infinite;
  }
  @keyframes opacityShow {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
}
.el-carousel {
  height: 1000px;
  .el-carousel__container {
    height: 1000px;
  }
}
.el-carousel__item {
  height: 1000px;
  img {
    height: 100%;
  }
}
.swiper-container {
  width: 100vw;
  height: 100vh;
}
.fadeIn{
  animation: fadeIn 1s;
}
@keyframes fadeIn {
  0% {
    opacity: 0; /*初始状态 透明度为0*/
  }
  50% {
    opacity: 0.5; /*中间状态 透明度为0*/
  }
  100% {
    opacity: 1; /*结尾状态 透明度为1*/
  }
}
@keyframes out {
  0% {
    opacity: 1; /*初始状态 透明度为0*/
  }
  50% {
    opacity: 0.5; /*中间状态 透明度为0*/
  }
  100% {
    opacity: 0; /*结尾状态 透明度为1*/
  }
}
</style>
