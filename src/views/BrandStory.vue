<template>
  <div class="brand-story-container">
    <nav-bar />
    <el-carousel arrow="never">
      <el-carousel-item v-for="item in 4" :key="item">
        <img src="../assets/images/home/banner.jpg" alt />
      </el-carousel-item>
    </el-carousel>
    <div class="content">
      <section class="first-content">
        <p class="main-title">高端家居深度定制专家</p>
        <p class="sub-title">我们不做大整装，也不做跨业态，我们就在家居的领域做深度。</p>
        <p class="sub-title">在全屋、高端和品质的战略根基上，把定制做深做透做到极致，成为家具行业与众不同的唯一。</p>
        <div class="img-intruduce">
          <img src="../assets/images/brandStory/img-intruduce1.png" alt="">
          <img src="" alt="">
          <img src="" alt="">
          <img src="" alt="">
        </div>
      </section>
    </div>
    <tm-footer></tm-footer>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.brand-story-container{
  background: url('../assets/images/home/background.jpg');
}
.content{
  margin-left: 100px;
  margin-right: 200px;
  border-left: 1px solid rgba(255,255,255,.2);
  position: relative;
  height: 1000px;
  overflow: hidden;
  font-size: initial;
  color: #DDDDDD;
  padding-left: 100px;
  &::after{
    content: '';
    width: 5px;
    height: 100px;
    position: fixed;
    top:458px;
    left: 97.5px;
    // z-index: 1;
    background:rgba(255,255,255,1);
  }
}
.first-content{
  text-align: left;
  margin-top: 80px;
  .main-title{
    font-size: 30PX;
    margin-bottom: 40px;
  }
  .sub-title{
    margin-bottom: 8px;
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