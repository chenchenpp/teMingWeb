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
        <p class="main-title">高端家居深度定制专家</p>
        <p class="sub-title">
          我们不做大整装，也不做跨业态，我们就在家居的领域做深度。
          <br />在全屋、高端和品质的战略根基上，把定制做深做透做到极致，成为家具行业与众不同的唯一。
        </p>
        <div class="img-intruduce">
          <el-image v-for="url in urls" :key="url" :src="url" lazy></el-image>
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

        <div class="container">
          <div class="timeline">
            <div class="swiper-container">
              <div class="swiper-wrapper">
                <div class="swiper-slide" data-year="2011">
                  <div class="swiper-slide-content">
                    <span class="timeline-year">2011</span>
                    <h4 class="timeline-title">Our nice super title</h4>
                    <p
                      class="timeline-text"
                    >Lorem ipsum dolor site amet, consectetur adipscing elit, sed do eisumod tempor incididut ut labore et dolore magna aliqua. Ut enim ad mimim venjam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                  </div>
                </div>
                <div class="swiper-slide" data-year="2012">
                  <div class="swiper-slide-content">
                    <span class="timeline-year">2012</span>
                    <h4 class="timeline-title">Our nice super title</h4>
                    <p
                      class="timeline-text"
                    >Lorem ipsum dolor site amet, consectetur adipscing elit, sed do eisumod tempor incididut ut labore et dolore magna aliqua. Ut enim ad mimim venjam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                  </div>
                </div>
                <div class="swiper-slide" data-year="2013">
                  <div class="swiper-slide-content">
                    <span class="timeline-year">2013</span>
                    <h4 class="timeline-title">Our nice super title</h4>
                    <p
                      class="timeline-text"
                    >Lorem ipsum dolor site amet, consectetur adipscing elit, sed do eisumod tempor incididut ut labore et dolore magna aliqua. Ut enim ad mimim venjam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                  </div>
                </div>
                <div class="swiper-slide" data-year="2014">
                  <div class="swiper-slide-content">
                    <span class="timeline-year">2014</span>
                    <h4 class="timeline-title">Our nice super title</h4>
                    <p
                      class="timeline-text"
                    >Lorem ipsum dolor site amet, consectetur adipscing elit, sed do eisumod tempor incididut ut labore et dolore magna aliqua. Ut enim ad mimim venjam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                  </div>
                </div>
                <div class="swiper-slide" data-year="2015">
                  <div class="swiper-slide-content">
                    <span class="timeline-year">2015</span>
                    <h4 class="timeline-title">Our nice super title</h4>
                    <p
                      class="timeline-text"
                    >Lorem ipsum dolor site amet, consectetur adipscing elit, sed do eisumod tempor incididut ut labore et dolore magna aliqua. Ut enim ad mimim venjam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                  </div>
                </div>
                <div class="swiper-slide" data-year="2016">
                  <div class="swiper-slide-content">
                    <span class="timeline-year">2016</span>
                    <h4 class="timeline-title">Our nice super title</h4>
                    <p
                      class="timeline-text"
                    >Lorem ipsum dolor site amet, consectetur adipscing elit, sed do eisumod tempor incididut ut labore et dolore magna aliqua. Ut enim ad mimim venjam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                  </div>
                </div>
              </div>
              <div class="swiper-button-prev"></div>
              <div class="swiper-button-next"></div>
              <div class="swiper-pagination"></div>
            </div>
          </div>
        </div>
      </section>

      <section class="third-content">
        <p class="main-title">�߶˼Ҿ���ȶ���ר��</p>
        <p class="sub-title">���ǲ�������װ��Ҳ������ҵ̬�����Ǿ��ڼҾӵ���������ȡ�</p>
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
        <p class="main-title">��ȶ��� �� ���ķ���</p>
        <p class="sub-title">Χ�ƿͻ������������еļҡ����ռ�Ŀ�꣬�ṩ�ᴩ�ͻ���ʼ���յ����ά��</p>
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
      firstContentData: {},
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
      urls: [
        "https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg",
        "https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg",
        "https://fuss10.elemecdn.com/0/6f/e35ff375812e6b0020b6b4e8f9583jpeg.jpeg",
        "https://fuss10.elemecdn.com/9/bb/e27858e973f5d7d3904835f46abbdjpeg.jpeg"
      ],
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
      new Swiper(".timeline .swiper-container", {
        direction: "vertical",
        // loop: false,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
          //自定义分页类型
          // type: "custom",
          //自定义分页
          renderBullet: function(index, className) {
            // alert(1);
            var year = document
              .querySelectorAll(".swiper-slide")
              [index].getAttribute("data-year");
            return '<span class="' + className + '">' + year + "</span>";
          }
        },

        nextButton: ".swiper-button-next",
        prevButton: ".swiper-button-prev",
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
  // &::after {
  //   content: "";
  //   width: 5px;
  //   height: 100px;
  //   position: fixed;
  //   top: 458px;
  //   left: 97.5px;
  //   // z-index: 1;
  //   background: rgba(255, 255, 255, 1);
  // }
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
  font-size: 14px;
  margin-bottom: 8px;
  line-height: 28px;
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
}
.second-content {
  text-align: right;
  margin-top: 80px;
  padding-left: 100px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.3);
  padding-bottom: 50px;
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
    // font-size: 14px;
    // line-height: 28px;
    margin: 0 auto;
  }
  .img-intruduce {
    margin-top: 60px;
    display: flex;
    .left-img {
      width: 911px;
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
    margin-left: 65px;
    li {
      display: flex;
      text-align: left;
      align-items: center;
      margin-bottom: 50px;
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

/**
i 1

1     2      3          4        5

0  选中150  970+150   970 + 300   970 + 450

0  150     选中 300     970 + 300   970 + 450
0  150       300         选中450    970 + 450

*/
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


.container {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  flex-direction: column;
}

.title {
  font-size: 38px;
  color: #616161;
  font-style: italic;
  font-weight: 800;
}

.timeline {
  width: 100%;
  background-color: #fff;
  box-shadow: 0 5px 25px 5px rgba(0, 0, 0, 0.2);
}
.timeline .swiper-container {
  height: 600px;
  width: 100%;
  position: relative;
}
.timeline .swiper-wrapper {
  transition: 2s cubic-bezier(0.68, -0.4, 0.27, 1.34) 0.2s;
}
.timeline .swiper-slide {
  width: 1520px;
  height: 600px;
  position: relative;
  color: #fff;
  overflow: hidden;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  background: url(../assets/images/brandStory/second-content-img1.jpg);
  background-size: 1520px 600px;
}
.timeline .swiper-slide::after {
  content: "";
  position: absolute;
  z-index: 1;
  right: -115%;
  bottom: -10%;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  box-shadow: -230px 0 150px 60vw rgba(0, 0, 0, 0.7);
  border-radius: 100%;
}
.timeline .swiper-slide-content {
  position: absolute;
  text-align: center;
  width: 80%;
  max-width: 310px;
  right: 50%;
  top: 13%;
  -webkit-transform: translate(50%, 0);
  transform: translate(50%, 0);
  font-size: 12px;
  z-index: 2;
}
.timeline .swiper-slide .timeline-year {
  display: block;
  font-style: italic;
  font-size: 42px;
  margin-bottom: 50px;
  -webkit-transform: translate3d(20px, 0, 0);
  transform: translate3d(20px, 0, 0);
  color: #d4a024;
  font-weight: 300;
  opacity: 0;
  transition: 0.2s ease 0.4s;
}
.timeline .swiper-slide .timeline-title {
  font-weight: 800;
  font-size: 34px;
  margin: 0 0 30px;
  opacity: 0;
  -webkit-transform: translate3d(20px, 0, 0);
  transform: translate3d(20px, 0, 0);
  transition: 0.2s ease 0.5s;
}
.timeline .swiper-slide .timeline-text {
  line-height: 1.5;
  opacity: 0;
  -webkit-transform: translate3d(20px, 0, 0);
  transform: translate3d(20px, 0, 0);
  transition: 0.2s ease 0.6s;
}
.timeline .swiper-slide-active .timeline-year {
  opacity: 1;
  -webkit-transform: translate3d(0, 0, 0);
  transform: translate3d(0, 0, 0);
  transition: 0.4s ease 1.6s;
}
.timeline .swiper-slide-active .timeline-title {
  opacity: 1;
  -webkit-transform: translate3d(0, 0, 0);
  transform: translate3d(0, 0, 0);
  transition: 0.4s ease 1.7s;
}
.timeline .swiper-slide-active .timeline-text {
  opacity: 1;
  -webkit-transform: translate3d(0, 0, 0);
  transform: translate3d(0, 0, 0);
  transition: 0.4s ease 1.8s;
}
.timeline .swiper-pagination {
  right: 15% !important;
  width: 100%;
  font-weight: 300;
  font-size: 18px;
  z-index: 1;
  align-content: center;
  justify-content: space-between;
}
.timeline .swiper-pagination::before {
  content: "";
  position: absolute;
  left: -30px;
  top: 0;
  height: 100%;
  width: 1px;
  background-color: rgba(255, 255, 255, 0.2);
}
.timeline .swiper-pagination-bullet {
  width: auto;
  height: auto;
  text-align: center;
  opacity: 1;
  background: transparent;
  color: #d4a024;
  margin: 15px 0 !important;
  position: relative;
}
.timeline .swiper-pagination-bullet::before {
  content: "";
  position: absolute;
  top: 8px;
  left: -32.5px;
  width: 6px;
  height: 6px;
  border-radius: 100%;
  background-color: #d4a024;
  -webkit-transform: scale(0);
  transform: scale(0);
  transition: 0.2s;
}
.timeline .swiper-pagination-bullet-active {
  color: #d4a024;
}
.timeline .swiper-pagination-bullet-active::before {
  -webkit-transform: scale(1);
  transform: scale(1);
}
.timeline .swiper-button-next,
.timeline .swiper-button-prev {
  background-size: 20px 20px;
  top: 15%;
  width: 20px;
  height: 20px;
  margin-top: 0;
  z-index: 2;
  transition: 0.2s;
}
.timeline .swiper-button-prev {
  left: 8%;
  background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%2027%2044'%3E%3Cpath%20d%3D'M0%2C22L22%2C0l2.1%2C2.1L4.2%2C22l19.9%2C19.9L22%2C44L0%2C22L0%2C22L0%2C22z'%20fill%3D'%23d4a024'%2F%3E%3C%2Fsvg%3E");
}
.timeline .swiper-button-prev:hover {
  -webkit-transform: translateX(-3px);
  transform: translateX(-3px);
}
.timeline .swiper-button-next {
  right: 8%;
  background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%2027%2044'%3E%3Cpath%20d%3D'M27%2C22L27%2C22L5%2C44l-2.1-2.1L22.8%2C22L2.9%2C2.1L5%2C0L27%2C22L27%2C22z'%20fill%3D'%23d4a024'%2F%3E%3C%2Fsvg%3E");
}
.timeline .swiper-button-next:hover {
  -webkit-transform: translateX(3px);
  transform: translateX(3px);
}
// @media screen and (min-width: 768px) {
//   .timeline .swiper-slide::after {
//     right: -30%;
//     bottom: -8%;
//     width: 240px;
//     height: 50%;
//     box-shadow: -230px 0 150px 50vw rgba(0, 0, 0, 0.7);
//   }
//   .timeline .swiper-slide-content {
//     right: 30%;
//     top: 50%;
//     -webkit-transform: translateY(-50%);
//     transform: translateY(-50%);
//     width: 310px;
//     font-size: 11px;
//     text-align: right;
//   }
//   .timeline .swiper-slide .timeline-year {
//     margin-bottom: 0;
//     font-size: 32px;
//   }
//   .timeline .swiper-slide .timeline-title {
//     font-size: 46px;
//     margin: 0;
//   }
//   .timeline .swiper-pagination {
//     display: flex;
//   }
//   .timeline .swiper-button-prev {
//     top: 15%;
//     left: auto;
//     right: 15%;
//     -webkit-transform: rotate(90deg) translate(0, 10px);
//     transform: rotate(90deg) translate(0, 10px);
//   }
//   .timeline .swiper-button-prev:hover {
//     -webkit-transform: rotate(90deg) translate(-3px, 10px);
//     transform: rotate(90deg) translate(-3px, 10px);
//   }
//   .timeline .swiper-button-next {
//     top: auto;
//     bottom: 15%;
//     right: 15%;
//     -webkit-transform: rotate(90deg) translate(0, 10px);
//     transform: rotate(90deg) translate(0, 10px);
//   }
//   .timeline .swiper-button-next:hover {
//     -webkit-transform: rotate(90deg) translate(3px, 10px);
//     transform: rotate(90deg) translate(3px, 10px);
//   }
// }
// @media screen and (min-width: 1024px) {
//   .timeline .swiper-slide::after {
//     right: -20%;
//     bottom: -12%;
//     width: 240px;
//     height: 50%;
//     box-shadow: -230px 0 150px 39vw rgba(0, 0, 0, 0.7);
//   }
//   .timeline .swiper-slide-content {
//     right: 25%;
//   }
// }
</style>
<style lang="scss">
.forth-content {
  .el-carousel__container {
    height: 550px;
  }
}
.second-content {
  .el-carousel {
    margin-top: 50px;
  }
  .el-carousel__item {
    text-align: left;
    display: flex;
    align-items: center;
    .year {
      display: inline-block;
      text-align: center;
      width: 242px;
      border-left: 1px solid rgba(255, 255, 255, 0.5);
      cursor: pointer;
      position: relative;
      color: rgba(255, 255, 255, 0.5);
      &:first-child {
        border-left: none;
      }
      i {
        position: absolute;
        font-size: 24px;
        left: 50%;
        transform: translateX(-50%);
        top: 20px;
      }
      &.active {
        color: #dddddd;
      }
    }
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
// div.swiper-slide {
//   width: 242px !important;
// }
</style>
