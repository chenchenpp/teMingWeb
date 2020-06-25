<template>
  <div class="brand-story-container">
    <nav-bar />
    <el-carousel arrow="never">
      <el-carousel-item v-for="item in 4" :key="item">
        <img src="../assets/images/home/banner.jpg" alt />
      </el-carousel-item>
    </el-carousel>
    <div class="content">
      sjdfsk
    </div>
    <tm-footer></tm-footer>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.brand-story-container{
  background: url('@assets'/);
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