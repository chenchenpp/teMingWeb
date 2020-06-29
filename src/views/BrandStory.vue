<template>
  <div class="brand-story-container">
    <el-carousel arrow="never" class="banner">
      <el-carousel-item v-for="item in 4" :key="item" @click="isShowVideoPlayer=true">
        <img src="../assets/images/home/banner.jpg" alt @click="isShowVideoPlayer=true" />
      </el-carousel-item>
    </el-carousel>
    <div class="content">
      <scrollbarTrack></scrollbarTrack>
      <section class="first-content">
        <p class="main-title" v-html="firstContentData.mainTitle"></p>
        <p class="sub-title" v-html="firstContentData.subTitle"></p>
        <div class="img-intruduce">
          <el-image v-for="url in firstContentData.imgArr" :key="url" :src="url" lazy></el-image>
        </div>
      </section>

      <section class="second-content">
        <!-- <p class="main-title">高端家居深度定制专家</p>
        <p class="sub-title">
          我们不做大整装，也不做跨业态，我们就在家居的领域做深度。
          <br />在全屋、高端和品质的战略根基上，把定制做深做透做到极致，成为家具行业与众不同的唯一。
        </p>
        <div class="img-intruduce">
          <img src="../assets/images/brandStory/second-content-img1.jpg" alt />
        </div>-->
        <div class="swiper-container">
          <div class="swiper-wrapper">
            <div class="swiper-slide" data-year="2011">
              <div class="swiper-slide-content">
                <div class="title-container">
                  <p class="main-title">高端家居深度定制专家</p>
                  <p class="sub-title">
                    我们不做大整装，也不做跨业态，我们就在家居的领域做深度。
                    <br />在全屋、高端和品质的战略根基上，把定制做深做透做到极致，成为家具行业与众不同的唯一。
                  </p>
                </div>
                <img src="../assets/images/brandStory/second-content-img1.jpg" alt />
                <span class="timeline-year">2011</span>
              </div>
            </div>

            <div class="swiper-slide" data-year="2012">
              <div class="swiper-slide-content">
                <div class="title-container">
                  <p class="main-title">高端家居深度定制专家</p>
                  <p class="sub-title">
                    我们不做大整装，也不做跨业态，我们就在家居的领域做深度。
                    <br />在全屋、高端和品质的战略根基上，把定制做深做透做到极致，成为家具行业与众不同的唯一。
                  </p>
                </div>
                <img src="../assets/images/brandStory/second-content-img1.jpg" alt />
                <span class="timeline-year">2012</span>
              </div>
            </div>

            <div class="swiper-slide" data-year="2013">
              <div class="swiper-slide-content">
                <div class="title-container">
                  <p class="main-title">高端家居深度定制专家</p>
                  <p class="sub-title">
                    我们不做大整装，也不做跨业态，我们就在家居的领域做深度。
                    <br />在全屋、高端和品质的战略根基上，把定制做深做透做到极致，成为家具行业与众不同的唯一。
                  </p>
                </div>
                <img src="../assets/images/brandStory/second-content-img1.jpg" alt />
                <span class="timeline-year">2013</span>
              </div>
            </div>

            <div class="swiper-slide" data-year="2014">
              <div class="swiper-slide-content">
                <div class="title-container">
                  <p class="main-title">高端家居深度定制专家</p>
                  <p class="sub-title">
                    我们不做大整装，也不做跨业态，我们就在家居的领域做深度。
                    <br />在全屋、高端和品质的战略根基上，把定制做深做透做到极致，成为家具行业与众不同的唯一。
                  </p>
                </div>
                <img src="../assets/images/brandStory/second-content-img1.jpg" alt />
                <span class="timeline-year">2014</span>
              </div>
            </div>

            <div class="swiper-slide" data-year="2015">
              <div class="swiper-slide-content">
                <div class="title-container">
                  <p class="main-title">高端家居深度定制专家</p>
                  <p class="sub-title">
                    我们不做大整装，也不做跨业态，我们就在家居的领域做深度。
                    <br />在全屋、高端和品质的战略根基上，把定制做深做透做到极致，成为家具行业与众不同的唯一。
                  </p>
                </div>
                <img src="../assets/images/brandStory/second-content-img1.jpg" alt />
                <span class="timeline-year">2015</span>
              </div>
            </div>

            <div class="swiper-slide" data-year="2016">
              <div class="swiper-slide-content">
                <div class="title-container">
                  <p class="main-title">高端家居深度定制专家</p>
                  <p class="sub-title">
                    我们不做大整装，也不做跨业态，我们就在家居的领域做深度。
                    <br />在全屋、高端和品质的战略根基上，把定制做深做透做到极致，成为家具行业与众不同的唯一。
                  </p>
                </div>
                <img src="../assets/images/brandStory/second-content-img1.jpg" alt />
                <span class="timeline-year">2016</span>
              </div>
            </div>
          </div>
          <div class="swiper-button-prev"></div>
          <div class="swiper-button-next"></div>
          <div class="swiper-pagination"></div>
        </div>
      </section>

      <section class="third-content">
        <p class="main-title">特铭品牌的核心价值</p>
        <p class="sub-title">特铭是一个用匠心做产品和服务，为客户量身定做高格调居家空间和生活方式尊重每一个客户的高端家居深度定制品牌</p>
        <div class="img-intruduce">
          <div class="left-img">
            <div class="img-box mb60">
              <div class="img-title-box">
                <p class="img-main-title">格调</p>
                <p class="img-sub-title">
                  居住理应不同，格调无处不在
                  <br />特铭家居，同步国际
                  <br />定制属于高端人士的生活质感和家居雅趣
                  <br />让格调精英看见理想生活的全貌
                  <br />
                </p>
              </div>
              <img src="../assets/images/brandStory/third-content-img1.png" alt />
            </div>
            <div class="img-box">
              <div class="img-title-box">
                <p class="img-main-title">格调</p>
                <p class="img-sub-title">
                  居住理应不同，格调无处不在
                  <br />特铭家居，同步国际
                  <br />定制属于高端人士的生活质感和家居雅趣
                  <br />让格调精英看见理想生活的全貌
                  <br />
                </p>
              </div>
              <img src="../assets/images/brandStory/third-content-img2.png" alt />
            </div>
          </div>
          <div class="right-img">
            <div class="img-box">
              <div class="img-title-box">
                <p class="img-main-title">匠心</p>
                <p class="img-sub-title">
                  居住理应不同，格调无处不在
                  <br />特铭家居，同步国际
                  <br />定制属于高端人士的生活质感和家居雅趣
                  <br />让格调精英看见理想生活的全貌
                  <br />
                </p>
              </div>
              <img src="../assets/images/brandStory/third-content-img3.png" alt />
            </div>
          </div>
        </div>
      </section>

      <section class="forth-content">
        <p class="main-title">{{forthContentData.mainTitle}}</p>
        <p class="sub-title" v-html="forthContentData.subTitle"></p>
        <div class="img-intruduce">
          <div class="left-img">
            <el-carousel arrow="never" indicator-position="none" ref="carousel">
              <el-carousel-item v-for="item in forthContentData.data" :key="item.id">
                <img src="../assets/images/brandStory/forth-content-img1.png" alt />
              </el-carousel-item>
            </el-carousel>
          </div>
          <ul class="right-text">
            <li
              @mouseenter="handleEnter(key)"
              v-for="(item, key) in forthContentData.data"
              :key="item.id"
            >
              <img src="../assets/images/brandStory/target.png" class="icon" />
              <div class="intruduce" :class="{intruduceActive:item.active}">
                <p class="main-title">{{item.mainTitle}}</p>
                <p class="sub-title">{{item.subTitle}}</p>
              </div>
            </li>
          </ul>
        </div>
      </section>

      <div class="fifth-content">
        <p class="main-title">深度定制 · 五心服务</p>
        <p class="sub-title">
          围绕客户“打造理想中的家”的终极目标，提供贯穿客户从始至终的深度维护
          <br />一站式满足客户需求，让每位客户都深感尊重，超出预期
        </p>
        <div class="img-intruduce or-container">
          <div
            class="box"
            :class="[ele.left, {bg: !ele.active}]"
            v-for="(ele,i) in fifthContentData.imgInfo"
            :key="i"
            @mouseenter="enter(i)"
            @mouseleave="out(i)"
          >
            <img :src="ele.bg" alt />
            <div class="tips" v-show="!ele.active">{{ele.heart}}</div>
            <div class="title-area"></div>
            <div class="img-title-box" v-show="ele.active">
              <p class="img-main-title">家居设计服务</p>
              <p class="img-sub-title">根据客户房屋结构、装修风格、个人偏好等，提供深度的家居设计服务</p>
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
export default {
  data() {
    return {
      isShowVideoPlayer: false,
      eleindex: 0,
      firstContentData: {
        mainTitle: "高端家居深度定制专家",
        subTitle:
          "  我们不做大整装，也不做跨业态，我们就在家居的领域做深度。<br/>在全屋、高端和品质的战略根基上，把定制做深做透做到极致，成为家具行业与众不同的唯一。",
        imgArr: [
          "https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg",
          "https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg",
          "https://fuss10.elemecdn.com/0/6f/e35ff375812e6b0020b6b4e8f9583jpeg.jpeg",
          "https://fuss10.elemecdn.com/9/bb/e27858e973f5d7d3904835f46abbdjpeg.jpeg"
        ]
      },
      secondContentData: {},
      thirdContentData: {},
      forthContentData: {
        mainTitle: "特铭产品的特色",
        subTitle:
          "特铭并先后从德国、意大利、日本、奥地利等国家引进先进的生产设备，采用各种原装进口自德国、意大利、奥地利等国家的顶级五金配件<br/>以确保每一件产品、每一个细节都达到美感和品质的高度统一",
        data: [
          {
            img: "../assets/images/brandStory/forth-content-img1.png",
            mainTitle: "深度定制",
            subTitle: "每一款特铭家居都是独一无二，量身定制的",
            active: true,
            id: 1
          },
          {
            img: "../assets/images/brandStory/forth-content-img1.png",
            mainTitle: "深度定制",
            subTitle: "每一款特铭家居都是独一无二，量身定制的",
            active: false,
            id: 2
          },
          {
            img: "../assets/images/brandStory/forth-content-img1.png",
            mainTitle: "深度定制",
            subTitle: "每一款特铭家居都是独一无二，量身定制的",
            active: false,
            id: 3
          },
          {
            img: "../assets/images/brandStory/forth-content-img1.png",
            mainTitle: "深度定制",
            subTitle: "每一款特铭家居都是独一无二，量身定制的",
            active: false,
            id: 4
          },
          {
            img: "../assets/images/brandStory/forth-content-img1.png",
            mainTitle: "深度定制",
            subTitle: "每一款特铭家居都是独一无二，量身定制的",
            active: false,
            id: 5
          }
        ]
      },
      fifthContentData: {
        mainTitle: "",
        subTitle: "",
        imgInfo: [
          {
            text: "����/¼��ҳ��",
            bg: require("../assets/images/brandStory/fifth-content-big-img1.png"),
            img: require("../assets/images/brandStory/fifth-content-small-img1.png"),
            active: true,
            heart: "安心"
          },
          {
            text: "����/¼��ҳ��",
            bg: require("../assets/images/brandStory/fifth-content-big-img1.png"),
            img: require("../assets/images/brandStory/fifth-content-small-img2.png"),
            left: "l920",
            active: false,
            heart: "匠心"
          },
          {
            text: "����/¼��ҳ��",
            bg: require("../assets/images/brandStory/fifth-content-big-img1.png"),
            img: require("../assets/images/brandStory/fifth-content-small-img1.png"),
            left: "l1070",
            active: false,
            heart: "舒心"
          },
          {
            text: "����/¼��ҳ��",
            bg: require("../assets/images/brandStory/fifth-content-big-img1.png"),
            img: require("../assets/images/brandStory/fifth-content-small-img1.png"),
            left: "l1220",
            active: false,
            heart: "放心"
          },
          {
            text: "����/¼��ҳ��",
            bg: require("../assets/images/brandStory/fifth-content-big-img1.png"),
            img: require("../assets/images/brandStory/fifth-content-small-img1.png"),
            left: "l1370",
            active: false,
            heart: "省心"
          }
        ]
      },
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
            src: "http://vjs.zencdn.net/v/oceans.mp4"
            // webm
            // src: "https://cdn.theguardian.tv/webM/2015/07/20/150716YesMen_synd_768k_vp8.webm"
          }
        ]
        // poster:
        //   "https://surmon-china.github.io/vue-quill-editor/static/images/surmon-1.jpg"
      },
      superurl: [
        {
          url: "",
          img: "2019-01"
        },
        {
          url: "",
          img: "2019-02"
        },
        {
          url: "",
          img: "2019-03"
        },
        {
          url: "",
          img: "2019-04"
        },
        {
          url: "",
          img: "2019-05"
        },
        {
          url: "",
          img: "2019-06"
        },
        {
          url: "",
          img: "2019-06"
        },
        {
          url: "",
          img: "2019-06"
        },
        {
          url: "",
          img: "2019-06"
        }
      ]
    };
  },

  computed: {
    player() {
      return this.$refs.videoPlayer.player;
    }
  },
  methods: {
    enter: function(i) {
      this.eleindex = i;
      this.fifthContentData.imgInfo.forEach((val, key) => {
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
      this.forthContentData.data.forEach((val, key) => {
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
        direction: "vertical",
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
    }
  },
  mounted() {
    this.initSwiper();
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
    li {
      display: flex;
      text-align: left;
      align-items: center;
      margin-bottom: 40px;
      .icon {
        width: 48px;
        height: 48px;
        margin-right: 37px;
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
    justify-content: space-between;
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
