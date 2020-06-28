<template>
  <div class="home-container">
    <div class="home-loading" :class="{'home-loading-active': turnLoadingFlag}" v-if="isLoading">
      <img :src="require('assets/images/home/logo.png')" alt class="logo" />
    </div>

    <!-- <el-carousel arrow="never" v-else>
      <el-carousel-item v-for="item in 4" :key="item">
        <transition name="fadeIn" tag="ul">
        <img src="../assets/images/home/banner.jpg" alt />
        </transition>
      </el-carousel-item>
      
    </el-carousel>-->
    <transition-group name="flip-list" tag="ul">
      <div v-for="curImg in currImgs" v-bind:key="curImg" class="list-item">
        <img :src="curImg" alt />
      </div>
    </transition-group>
    <tm-footer></tm-footer>
  </div>
</template>

<script>
import { getUserComTravelersByUserId } from "@/util/request/api.js";
import { setTimeout, setInterval } from "timers";
export default {
  name: "home",
  data() {
    return {
      isLoading: true,
      turnLoadingFlag: false,
      currImgs: [],
      imgs: [
        "https://img11.360buyimg.com/da/jfs/t4000/107/2234194410/85271/6c24d985/58a50cafNb60886c9.jpg",
        "https://img20.360buyimg.com/da/jfs/t3154/175/5917485830/129679/f123634c/5897e6a2N83837dd2.jpg",
        "https://img1.360buyimg.com/da/jfs/t3133/89/5984232745/66970/beaf615c/589ac9bcNe544a72e.jpg",
        "https://img20.360buyimg.com/da/jfs/t3157/165/6117849901/102894/88bf53b8/589d67b6Ne8986a9e.jpg"
      ],
      index: 0
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
    this.startChange();
  },
  methods: {
    startChange: function() {
      var _this = this;
      setInterval(function() {
        if (_this.index < _this.imgs.length - 1) {
          _this.index++;
        } else {
          _this.index = 0;
        }
        _this.currImgs.splice(0, 1, _this.imgs[_this.index]);
      }, 2000);
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
  height: 100vh;
  .el-carousel__container {
    height: 100vh;
  }
}
.el-carousel__item {
  height: 100vh;
  img {
    width: 100vw;
    height: 100vh;
  }
}
.list-item {
  width: 100vw;
  height: 100vh;
  img {
    width: 100%;
    height: 100%;
  }
}
.flip-list-enter-active,
.flip-list-leave-active {
  transition: all 1s;
}
.flip-list-enter,
.flip-list-leave-active {
  opacity: 0;
}
</style>
