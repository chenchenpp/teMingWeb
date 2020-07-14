<template>
  <div class="brand-story-container">
    <el-carousel arrow="never" class="banner">
      <el-carousel-item
        v-for="(item, index) in bannerData"
        :key="item.id"
        @click="playVideo(index)"
      >
        <img :src="$host + item.imageUrl" alt @click="isShowVideoPlayer=true" class="need" />
      </el-carousel-item>
    </el-carousel>
    <div class="content">
      <scrollbarTrack></scrollbarTrack>

      <section class="first-content">
        <p
          class="main-title"
          v-if="firstContentData[0]"
          v-html="firstContentData[0][`mainTitle${language}`]"
        ></p>
        <p
          class="sub-title"
          v-if="firstContentData[0]"
          v-html="firstContentData[0][`subTitle${language}`]"
        ></p>
        <div class="img-intruduce">
          <!-- <img v-for="item in firstContentData" :key="item.id" v-lazy="$host + item.imageUrl" />
          <div class="img-title-box">
            <p class="img-main-title" v-if="item" v-html="item[`imageDescTitle${language}`]"></p>
            <p class="img-sub-title" v-if="item" v-html="item[`imageDescription${language}`]"></p>
          </div>-->
          <div style="position:relative" v-for="(item,i) in firstContentData" :key="i">
            <img :src="$host + item.imageUrl" alt class="need" />
            <div class="img-title-box">
              <p class="img-main-title" v-if="item" v-html="item[`imageDescTitle${language}`]"></p>
              <p class="img-sub-title" v-if="item" v-html="item[`imageDescription${language}`]"></p>
            </div>
          </div>
        </div>
      </section>

      <section class="second-content" v-if="secondContentData.length > 0">
        <div class="swiper-container">
          <div class="swiper-wrapper">
            <div
              class="swiper-slide"
              :data-year="item.imageDescription"
              v-for="item in secondContentData"
              :key="item.id"
            >
              <div class="swiper-slide-content">
                <div class="title-container">
                  <p class="main-title" v-html="item[`mainTitle${language}`]"></p>
                  <p class="sub-title" v-html="item[`subTitle${language}`]"></p>
                </div>
                <img :src="$host + item.imageUrl" alt />
                <span class="timeline-year">{{item.imageDescription}}</span>
              </div>
            </div>
          </div>
          <div class="swiper-button-prev"></div>
          <div class="swiper-button-next"></div>
          <div class="swiper-pagination"></div>
        </div>
      </section>

      <section class="third-content" v-if="thirdContentData.length > 0">
        <p
          class="main-title"
          v-if="thirdContentData[0]"
          v-html="thirdContentData[0][`mainTitle${language}`]"
        ></p>
        <p
          class="sub-title"
          v-if="thirdContentData[0]"
          v-html="thirdContentData[0][`subTitle${language}`]"
        ></p>
        <div class="img-intruduce">
          <div class="left-img">
            <div class="img-box mb60">
              <div class="img-title-box">
                <p
                  class="img-main-title"
                  v-if="thirdContentData[0]"
                  v-html="thirdContentData[0][`imageDescTitle${language}`]"
                ></p>
                <p
                  class="img-sub-title"
                  v-if="thirdContentData[0]"
                  v-html="thirdContentData[0][`imageDescription${language}`]"
                ></p>
              </div>
              <img v-lazy="$host + thirdContentData[0].imageUrl" alt class="need" />
            </div>
            <div class="img-box">
              <div class="img-title-box">
                <p
                  class="img-main-title"
                  v-if="thirdContentData[1]"
                  v-html="thirdContentData[1][`imageDescTitle${language}`]"
                ></p>
                <p
                  class="img-sub-title"
                  v-if="thirdContentData[1]"
                  v-html="thirdContentData[1][`imageDescription${language}`]"
                ></p>
              </div>
              <img v-lazy="$host + thirdContentData[1].imageUrl" alt />
            </div>
          </div>
          <div class="right-img">
            <div class="img-box">
              <div class="img-title-box">
                <p
                  class="img-main-title"
                  v-if="thirdContentData[2]"
                  v-html="thirdContentData[2][`imageDescTitle${language}`]"
                ></p>
                <p
                  class="img-sub-title"
                  v-if="thirdContentData[2]"
                  v-html="thirdContentData[2][`imageDescription${language}`]"
                ></p>
              </div>
              <img v-lazy="$host + thirdContentData[2].imageUrl" alt class="need" />
            </div>
          </div>
        </div>
      </section>

      <section class="forth-content" v-if="forthContentData.length > 0">
        <p
          class="main-title"
          v-if="forthContentData[0]"
          v-html="forthContentData[0][`mainTitle${language}`]"
        ></p>
        <p
          class="sub-title"
          v-if="forthContentData[0]"
          v-html="forthContentData[0][`subTitle${language}`]"
        ></p>
        <div class="img-intruduce">
          <div class="left-img">
            <el-carousel arrow="never" indicator-position="none" ref="carousel" :autoplay="false">
              <el-carousel-item v-for="item in forthContentData" :key="item.id">
                <img v-lazy="$host + item.imageUrl" alt class="need" />
              </el-carousel-item>
            </el-carousel>
          </div>
          <ul class="right-text">
            <li
              @mouseenter="handleEnter(key)"
              v-for="(item, key) in forthContentData"
              :key="item.id + item.imageUrl"
            >
              <img
                :src="require(`assets/images/brandStory/icon${key + 1}.png`)"
                class="icon-image need"
              />
              <div class="intruduce" :class="{intruduceActive:item.active}">
                <p class="main-title" v-if="item" v-html="item[`imageDescTitle${language}`]"></p>
                <p class="sub-title" v-if="item" v-html="item[`imageDescription${language}`]"></p>
              </div>
            </li>
          </ul>
        </div>
      </section>

      <div class="fifth-content" v-if="fifthContentData.length > 0">
        <p
          class="main-title"
          v-if="fifthContentData[0]"
          v-html="fifthContentData[0][`mainTitle${language}`]"
        ></p>
        <p
          class="sub-title"
          v-if="fifthContentData[0]"
          v-html="fifthContentData[0][`subTitle${language}`]"
        ></p>
        <div class="img-intruduce or-container">
          <div
            class="box"
            :class="[item.left, {bg: !item.active}]"
            v-for="(item,i) in fifthContentData"
            :key="i"
            @mouseenter="enter(i)"
            @mouseleave="out(i)"
          >
            <img :src="$host + item.imageUrl" alt class="need" />
            <div class="tips" v-show="!item.active" v-html="item[`tag${language}`]"></div>
            <div class="title-area"></div>
            <div class="img-title-box" v-show="item.active">
              <p class="img-main-title" v-if="item" v-html="item[`imageDescTitle${language}`]"></p>
              <p class="img-sub-title" v-if="item" v-html="item[`imageDescription${language}`]"></p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <el-dialog :visible.sync="isShowVideoPlayer" :show-close="false" :before-close="handleClose">
      <video-player
        class="video-player vjs-custom-skin"
        ref="videoPlayer"
        :playsinline="true"
        :options="playerOptions"
      ></video-player>
    </el-dialog>

    <tm-footer></tm-footer>
  </div>
</template>

<script>
import Swiper from "swiper";
import scrollReveal from "scrollreveal";
export default {
  data() {
    return {
      isShowVideoPlayer: false,
      eleindex: 0,
      bannerData: [],
      firstContentData: [],
      secondContentData: [],
      thirdContentData: [],
      forthContentData: [],
      fifthContentData: [],
      // videojs options
      playerOptions: {
        height: "360",
        autoplay: false,
        muted: true,
        language: "en",
        playbackRates: [0.7, 1.0, 1.5, 2.0],
        sources: [
          {
            type: "video/mp4",
            // mp4
            src: ""
          }
        ]
      }
    };
  },

  computed: {
    player() {
      return this.$refs.videoPlayer.player;
    },
    language() {
      let lang = this.$i18n.locale == "CN" ? "" : "English";
      return lang;
    }
  },
  watch: {
    "$i18n.locale"(newValue) {}
  },
  methods: {
    enter: function(i) {
      this.eleindex = i;
      this.fifthContentData.forEach((val, key) => {
        val.active = false;
        if (key <= i) {
          val.left = `l${key * 150}`;
        }
        if (key == i) {
          val.active = true;
        }
        if (key > i) {
          val.left = `l${920 + (key - 1) * 150}`;
        }
        if (key > i) {
          val.left = `l${920 + (key - 1) * 150}`;
        }
      });
    },
    out: function(i) {
      this.imgindex = -1;
    },
    handleEnter(i) {
      this.forthContentData.forEach((val, key) => {
        this.$refs.carousel.setActiveItem(i);
        val.active = false;
        if (key === i) {
          val.active = true;
        }
      });
    },
    handleClose() {
      this.$refs.videoPlayer.player.pause();
      this.isShowVideoPlayer = false;
    },
    initSwiper() {
      new Swiper(".swiper-container", {
        // speed: 1000,
        effect: "coverflow",
        pagination: {
          el: ".swiper-pagination",
          clickable: true,

          //自定义分页
          renderBullet: function(index, className) {
            var year = document
              .querySelectorAll(".swiper-slide")
              [index].getAttribute("data-year");
            return `<span class="${className}"><span>${year}</span><i class="iconfont icontriangle"></i></span>`;
          }
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        },
        breakpoints: {
          768: {
            direction: "horizontal"
          }
        }
      });
    },
    getPageData() {
      let that = this;
      this.$get("/image/getImageByPage.do?imageBelongPage=3&en=0")
        .then(res => {
          let data = res.arrList;
          that.bannerData = data[0].imgArr;
          that.firstContentData = data[1].imgArr;
          that.secondContentData = data[2].imgArr;
          that.thirdContentData = data[3].imgArr;
          that.forthContentData = data[4].imgArr;
          that.fifthContentData = data[5].imgArr;
          that.fifthContentData.forEach((val, key) => {
            switch (key) {
              case 0:
                that.$set(val, "active", true);
                break;
              case 1:
                // val.left = "l920";
                that.$set(val, "left", "l920");

                break;
              case 2:
                // val.left = "l1070";
                that.$set(val, "left", "l1070");
                break;
              case 3:
                // val.left = "l1220";
                that.$set(val, "left", "l1220");
                break;
              case 4:
                // val.left = "l1370";
                that.$set(val, "left", "l1370");
                break;
              default:
                break;
            }
          });
          that.$nextTick(() => {
            that.enter(0);
            scrollReveal().reveal(".brand-story-container img.need", {
              reset: true,
              scale: 1.1,
              delay: 0, // 延时时间
              distance: "10px", // 执行距离
              duration: 400, // 执行时长
              easing: "cubic-bezier(0.5, 0, 0, 1)" // 执行速度
            });
            that.initSwiper();
          });
        })
        .catch();
    },
    playVideo(index) {
      this.playerOptions.sources.src = this.bannerData[index].linkUrl;
      isShowVideoPlayer = true;
    }
  },
  created() {
    this.getPageData();
  },
  mounted() {
    // this.getPageData();
  }
};
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
  margin-bottom: 60px;
}
.mb60 {
  margin-bottom: 60px;
}
.tl {
  text-align: left;
}
.tc {
  text-align: center;
}
.tr {
  text-align: right;
}
.main-title {
  font-size: 30px;
  margin-bottom: 40px;
}
.sub-title {
  font-size: 16px;
  margin-bottom: 8px;
  line-height: 28px;
}
.img-box {
  position: relative;
}
.img-title-box {
  position: absolute;
  bottom: 40px;
  left: 40px;
  z-index: 99;
}
.img-main-title {
  font-size: 24px;
  margin-bottom: 30px;
}
.img-sub-title {
  font-size: 14px;
  line-height: 24px;
}
//
.first-content,
.third-content,
.fifth-content {
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
  .img-intruduce {
    display: flex;
    justify-content: space-between;
    margin-top: 60px;
    .el-image {
      width: 347px;
      height: 450px;
      transition: transform 0.5s;
      &:hover {
        transform: scale(1.1);
      }
    }
    img {
      width: 347px;
      height: 450px;
      &:hover {
        transform: scale(1.1);
      }
    }
  }
}
.second-content {
  text-align: right;
  margin-top: 80px;
  padding-left: 100px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.3);
  padding-bottom: 20px;
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
  .first-sub-title {
    width: 854px;
    margin: 0 auto;
  }
  .img-intruduce {
    margin-top: 60px;
    display: flex;
    justify-content: space-around;
    .left-img {
      width: 911px;
      height: 550px;
    }

    .el-carousel__item {
      // height: 550px;
      img {
        width: 911px;
        height: 550px;
      }
    }
  }
  .el-carousel__container {
    height: 550px;
  }
  .right-text {
    width: 532px;
    li {
      display: flex;
      text-align: left;
      align-items: center;
      margin-bottom: 40px;
      .icon-image {
        width: 48px !important;
        height: 48px !important;
        margin-right: 37px !important;
      }
      .main-title {
        font-size: 24px;
        margin-bottom: 15px;
      }
    }
  }

  .intruduce {
    color: #999999;
    cursor: pointer;
  }
  .intruduceActive {
    color: #dddddd;
  }
}

.or-container {
  width: 100%;
  box-sizing: border-box;
  height: 600px;
  position: relative;
}
.or-container:before {
  background-color: rgba(0, 0, 0, 0.4);
}

.box {
  overflow: hidden;
  transition: 0.5s;
  box-shadow: 0 20px 30px rgba(0, 0, 0, 0.1);
  width: 920px;
  transition: left 0.5s;
  position: absolute;
  img {
    width: 100%;
    height: 100%;
  }
  .tips {
    position: absolute;
    left: 57px;
    top: 50%;
    transform: translateY(-50%);
    font-size: 20px;
    color: #dddddd;
  }
}
.l0 {
  left: 0;
}
.l150 {
  left: 150px;
}
.l300 {
  left: 300px;
}
.l450 {
  left: 450px;
}
.l600 {
  left: 600px;
}
// 920
.l920 {
  left: 920px;
}
// 920+150
.l1070 {
  left: 1070px;
}
// 920 + 300
.l1220 {
  left: 1220px;
}
//  920 + 450
.l1370 {
  left: 1370px;
}

.or-container div.box > img {
  width: 920px;
  height: 600px;
}

.box > span {
  display: block;
  text-align: center;
}

.eleactive {
  width: 920px;
  height: 600px;
}

div.box.eleactive img {
  width: 100%;
  height: 100%;
}

.banner.el-carousel {
  height: 100vh;
  .el-carousel__container {
    height: 100vh;
  }
}

.banner .el-carousel__item {
  height: 100vh;
  img {
    width: 100vw;
    height: 100%;
    object-fit: cover;
  }
}
</style>
<style lang="scss">
.forth-content {
  .el-carousel__container {
    height: 550px;
  }
}

.el-dialog__body,
.el-dialog__header {
  padding: 0;
}
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
.el-carousel__button {
  width: 50px;
  height: 4px;
  margin-left: 28px !important;
}
.second-content {
  .swiper-pagination {
    display: flex;
    justify-content: flex-start;
    height: 60px;
    align-items: center;
  }
  .swiper-slide-content {
    img {
      width: 1520px;
      height: 600px;
    }
  }
  .swiper-pagination-bullet {
    width: 242px;
    background: none;
    height: 60px;
    font-size: 20px;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
    position: relative;
    font-family: "zhanghaishangcaonima";
    i {
      font-size: 28px;
      opacity: 0;
    }
    &::after {
      content: "";
      width: 1px;
      height: 20px;
      position: absolute;
      background: rgba(255, 255, 255, 0.5);
      right: 0;
      top: 15px;
    }
  }
  .swiper-pagination-bullet:last-child {
    &::after {
      display: none;
    }
  }
  .swiper-pagination-bullet-active {
    i {
      opacity: 1;
    }
  }
  .title-container {
    margin-bottom: 58px;
  }
  .timeline-year {
    opacity: 0;
    height: 110px;
    display: block;
  }
  .swiper-button-prev,
  .swiper-button-next {
    top: 97%;
    height: auto;
    z-index: 11;
    width: 25px;
    height: 20px;
    background-size: contain;
    opacity: 0.5;
    &::after {
      display: none;
    }
    &:hover {
      opacity: 1;
    }
  }
  .swiper-button-prev {
    left: 0;
    background-image: url("../assets/images/brandStory/back-left.png");
  }
  .swiper-button-next {
    right: 0;
    background-image: url("../assets/images/brandStory/back-right.png");
  }
}
</style>
