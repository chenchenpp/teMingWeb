<template>
  <div class="home-container">
    <div class="home-loading" :class="{'home-loading-active': turnLoadingFlag}" v-if="isLoading">
      <img :src="require('assets/images/home/logo.png')" alt class="logo" />
    </div>
    <el-carousel arrow="never" v-else>
      <el-carousel-item v-for="item in 4" :key="item">
        <img src="../assets/images/home/banner.jpg" alt />
      </el-carousel-item>
    </el-carousel>
    <tm-footer></tm-footer>
  </div>
</template>

<script>
import { getUserComTravelersByUserId } from "@/util/request/api.js";
import { setTimeout, setInterval } from 'timers';
export default {
  name: "home",
  data(){
    return {
      isLoading: true,
      turnLoadingFlag: false
    }
  },
  created(){

    setInterval(()=>{
console.log(document.readyState)
    }, 1000)
    setTimeout(() => {
      this.turnLoadingFlag=true;
    }, 700);
    setTimeout(()=>{
      this.isLoading=false
    }, 2100)
  },
  methods: {}
};
</script>
<style lang="scss" scoped>
.home-container {
  height: 100%;
  .home-loading{
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
  .home-loading-active{
    background-color: #ffffff;
  }
  .logo{
    animation: opacityShow 1s ease infinite;
  }
  @keyframes opacityShow {
    0%{
      opacity: 0;
    }
    100%{
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
</style>
