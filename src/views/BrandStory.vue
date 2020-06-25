<template>
  <div class="brand-story-container">
    <nav-bar />
    <el-carousel arrow="never" class="banner">
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
          <img src="../assets/images/brandStory/first-content-img1.png" alt />
          <img src="../assets/images/brandStory/first-content-img1.png" alt />
          <img src="../assets/images/brandStory/first-content-img1.png" alt />
          <img src="../assets/images/brandStory/first-content-img1.png" alt />
        </div>
      </section>

      <section class="second-content">
        <p class="main-title">特铭发展历程</p>
        <p class="sub-title">特铭筹建了完整的烤漆生产线，推出8道油漆工艺的手工烤漆门板。</p>
        <p class="sub-title">精致细做的制作工艺保证了门板不但有完美的外观，且经久耐用，在当时为中国橱柜行业开辟了先河。</p>
        <div class="img-intruduce">
          <img src="../assets/images/brandStory/second-content-img1.jpg" alt />
        </div>
        <el-carousel indicator-position="none" height="40px" arrow="always">
          <el-carousel-item v-for="item in 4" :key="item">
            <h3>{{ item }}</h3>
          </el-carousel-item>
        </el-carousel>
      </section>

      <section class="third-content">
        <p class="main-title">高端家居深度定制专家</p>
        <p class="sub-title">我们不做大整装，也不做跨业态，我们就在家居的领域做深度。</p>
        <p class="sub-title">在全屋、高端和品质的战略根基上，把定制做深做透做到极致，成为家具行业与众不同的唯一。</p>
        <div class="img-intruduce">
          <div class="left-img">
            <img src="../assets/images/brandStory/third-content-img1.png" alt />
            <img src="../assets/images/brandStory/third-content-img2.png" alt />
          </div>
          <div class="right-img">
            <img src="../assets/images/brandStory/third-content-img3.png" alt />
          </div>
        </div>
      </section>

      <section class="forth-content">
        <p class="main-title">高端家居深度定制专家</p>
        <p class="sub-title">我们不做大整装，也不做跨业态，我们就在家居的领域做深度。</p>
        <p class="sub-title">在全屋、高端和品质的战略根基上，把定制做深做透做到极致，成为家具行业与众不同的唯一。</p>
        <div class="img-intruduce">
          <div class="left-img">
            <img src="../assets/images/brandStory/forth-content-img1.png" alt />
          </div>
          <ul class="right-text">
            <li>
              <img src="../assets/images/brandStory/target.png" class="icon"/>
              <div class="intruduce">
                <p>深度定制</p>
                <p>每一款特铭家居都是独一无二，量身定制的</p>
              </div>
            </li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
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
.brand-story-container {
  background: url("../assets/images/home/background.jpg");
}
.content {
  margin-left: 100px;
  margin-right: 200px;
  border-left: 1px solid rgba(255, 255, 255, 0.2);
  position: relative;
  overflow: hidden;
  font-size: initial;
  color: #dddddd;
  &::after {
    content: "";
    width: 5px;
    height: 100px;
    position: fixed;
    top: 458px;
    left: 97.5px;
    // z-index: 1;
    background: rgba(255, 255, 255, 1);
  }
}
//
.main-title {
  font-size: 30px;
  margin-bottom: 40px;
}
.sub-title {
  margin-bottom: 8px;
}
//
.first-content,
.third-content {
  text-align: left;
  margin-top: 80px;
  padding-left: 100px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.3);
  padding-bottom: 80px;
  .img-intruduce {
    display: flex;
    justify-content: space-between;
    margin-top: 60px;
    img {
      width: 345px;
    }
    .left-img {
      img {
        &:first-child {
          margin-bottom: 60px;
        }
      }
    }
  }
}
.first-content {
}
.second-content {
  text-align: right;
  margin-top: 80px;
  padding-left: 100px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.3);
  padding-bottom: 80px;
  .img-intruduce {
    margin-top: 60px;
    img {
      width: 1520px;
    }
  }
}
.third-content {
  .img-intruduce {
    display: flex;
    justify-content: space-between;
    margin-top: 60px;
    img {
      width: 730px;
    }
  }
}
.forth-content {
  text-align: center;
  margin-top: 80px;
  padding-left: 100px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.3);
  padding-bottom: 80px;
}
.banner.el-carousel {
  height: 1000px;
  .el-carousel__container {
    height: 1000px;
  }
}

.banner .el-carousel__item {
  height: 1000px;
  img {
    height: 100%;
  }
}
</style>