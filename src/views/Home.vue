<template>
  <div class="home-container">
    <div class="home-loading" :class="{ 'home-loading-active': turnLoadingFlag }" v-if="isLoading">
      <img :src="require(`assets/images/home/${turnLoadingFlag? 'logo.png':'wLogo.png'}`)" alt class="logo" />
    </div>
    <div class="swiper-container" v-if="imgList.length">
      <div class="swiper-wrapper">
        <div v-for="el in imgList" class="swiper-slide" :key="el.imageUrl">
          <img :src="$host + el.imageUrl" alt />
        </div>
      </div>
      <!-- 如果需要分页器 -->
      <div class="swiper-pagination"></div>
    </div>
    <tm-footer></tm-footer>
  </div>
</template>
<script>
// import { getUserComTravelersByUserId } from "@/util/request/api.js";
// import { setTimeout, setInterval } from "timers";
import Swiper from "swiper";
export default {
  name: "home",
  data() {
    return {
      isLoading: true,
      turnLoadingFlag: false,
      imgList: [
        // "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3401764231,948938699&fm=26&gp=0.jpg",
        // "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1593356891264&di=843351dd98ba9b5e7d359da9d15008a7&imgtype=0&src=http%3A%2F%2Fimg.51miz.com%2FElement%2F00%2F71%2F46%2F82%2Ffffc6885_E714682_92040862.jpg%2521%2Fquality%2F90%2Funsharp%2Ftrue%2Fcompress%2Ftrue%2Fformat%2Fjpg",
        // "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1211338343,1056512950&fm=26&gp=0.jpg"
      ]
    };
  },
  created() {
    // document.body.style = "height:100vh;overflow:hidden";
    setInterval(() => {}, 1000);
    setTimeout(() => {
      this.turnLoadingFlag = true;
    }, 700);
    setTimeout(() => {
      this.isLoading = false;
      // document.body.style = "height:auto;overflow:auto";
    }, 2100);
  },
  mounted() {
    this.getPageData();
  },
  methods: {
    initSwiper() {
      let homeSwiper = new Swiper(".swiper-container", {
        autoplay: true,
        loop: true,
        speed: 3000, // 切换速度，slider自动滑动开始到结束的时间单位ms，也是触摸滑动时释放至贴合的时间。
        effect: "fade",
        pagination: {
          el: ".swiper-pagination",
          clickable :true,
        }
      });
    },
    getPageData() {
      let that = this;
      this.$get("/image/getImageByPage.do?imageBelongPage=1&en=0")
        .then(res => {
          let data = res.arrList;
          that.imgList = data[0].imgArr;
          that.$nextTick(() => {
           that.initSwiper();
          })

        })
        .catch();
    },
  }
};
</script>
<style lang="scss" scoped>
.home-container {
  // height: 100%;
  .home-loading {
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    z-index: 1000;
    height: 100vh;
    background-color: #ffffff;
    transition: background-color 0.7s ease;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .home-loading-active {
    background-color: #2a282a;
  }
}

.swiper-container {
  width: 100vw;
  height: 100vh;
}

.swiper-slide img {
  width: 100%;
  height: 100%;
  transition: 5s linear 5s; /* 必须的必 */
  transform: scale(1.1); /* 必须的必 */
  object-fit: cover;
}
.swiper-slide-active img,
.swiper-slide-duplicate-active img {
  transition: 6s linear; /* 必须的必 */
  transform: scale(1); /* 必须的必 */

}
</style>
<style lang="scss">
.home-container {
  .swiper-pagination-bullet {
    width: 50px;
    height: 4px;
    margin: 0 !important;
    margin-left: 28px !important;
    background: rgba(255, 255, 255, 1);
    opacity: 0.5;
    border-radius: 0;
  }
  .swiper-pagination-bullet-active {
    opacity: 1;
  }
}
</style>
