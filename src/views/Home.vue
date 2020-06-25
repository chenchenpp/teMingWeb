<template>
  <div class="home-container">
    <navBar />
    <el-carousel arrow="never">
      <el-carousel-item v-for="item in 4" :key="item">
        <img src="../assets/images/home/banner.jpg" alt />
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
import { getUserComTravelersByUserId } from "@/util/request/api.js";
import NavBar from "components/global/NavBar";
export default {
  name: "home",
  components: {
    NavBar
  },
  methods: {}
};
</script>
<style lang="scss" scoped>
.home-container {
  height: 100%;
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
