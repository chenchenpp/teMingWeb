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
        <p class="main-title">�߶˼Ҿ���ȶ���ר��</p>
        <p class="sub-title">���ǲ�������װ��Ҳ������ҵ̬�����Ǿ��ڼҾӵ���������ȡ�</p>
        <p class="sub-title">��ȫ�ݡ��߶˺�Ʒ�ʵ�ս�Ը����ϣ��Ѷ���������͸�������£���Ϊ�Ҿ���ҵ���ڲ�ͬ��Ψһ��</p>
        <div class="img-intruduce">
          <img src="../assets/images/brandStory/first-content-img1.png" alt />
          <img src="../assets/images/brandStory/first-content-img1.png" alt />
          <img src="../assets/images/brandStory/first-content-img1.png" alt />
          <img src="../assets/images/brandStory/first-content-img1.png" alt />
        </div>
      </section>

      <section class="second-content">
        <p class="main-title">������չ����</p>
        <p class="sub-title">�����ｨ�������Ŀ��������ߣ��Ƴ�8�����Ṥ�յ��ֹ������Ű塣</p>
        <p
          class="sub-title"
        >����ϸ�����������ձ�֤���Ű岻������������ۣ��Ҿ������ã��ڵ�ʱΪ�й�������ҵ�������Ⱥӡ�</p>
        <div class="img-intruduce">
          <img src="../assets/images/brandStory/second-content-img1.jpg" alt />
        </div>
        <el-carousel indicator-position="none" height="40px" arrow="always" :autoplay="false">
          <el-carousel-item v-for="item in 4" :key="item">
            <span class="year active">
              <span>1996</span>
              <i class="iconfont icontriangle"></i>
            </span>
            <span class="year">1999</span>
            <span class="year">2005</span>
            <span class="year">2006</span>
            <span class="year">2010</span>
            <span class="year">2012</span>
          </el-carousel-item>
        </el-carousel>
      </section>

      <section class="third-content">
        <p class="main-title">�߶˼Ҿ���ȶ���ר��</p>
        <p class="sub-title">���ǲ�������װ��Ҳ������ҵ̬�����Ǿ��ڼҾӵ���������ȡ�</p>
        <p class="sub-title">��ȫ�ݡ��߶˺�Ʒ�ʵ�ս�Ը����ϣ��Ѷ���������͸�������£���Ϊ�Ҿ���ҵ���ڲ�ͬ��Ψһ��</p>
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
        <p class="main-title first-main-title">{{forthContentData.mainTitle}}</p>
        <p class="sub-title first-sub-title">{{forthContentData.subTitle}}</p>
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
        <p class="sub-title">һվʽ����ͻ�������ÿλ�ͻ���������أ�����Ԥ��</p>
        <div class="img-intruduce or-container">
          <div
            class="box"
            :class="[ele.left, {bg: !ele.active}]"
            v-for="(ele,i) in piclist"
            :key="i"
            @mouseenter="enter(i)"
            @mouseleave="out(i)"
          >
            <img :src="ele.bg" alt />
            <div class="tips" v-show="!ele.active">{{ele.heart}}</div>
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
export default {
  data() {
    return {
      isShowVideoPlayer: false,
      eleindex: 0,
      piclist: [
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
      ],
      forthContentData: {
        mainTitle: "特铭产品的特色",
        subTitle:
          "特铭并先后从德国、意大利、日本、奥地利等国家引进先进的生产设备，采用各种原装进口自德国、意大利、奥地利等国家的顶级五金配件以确保每一件产品、每一个细节都达到美感和品质的高度统一",
        data: [
          {
            img: "../assets/images/brandStory/forth-content-img1.png",
            mainTitle: "深度定制",
            subTitle: "每一款特铭家居都是独一无二，量身定制的",
            active: true,
            id:1
          },
          {
            img: "../assets/images/brandStory/forth-content-img1.png",
            mainTitle: "深度定制",
            subTitle: "每一款特铭家居都是独一无二，量身定制的",
            active: false,
            id:2
          },
          {
            img: "../assets/images/brandStory/forth-content-img1.png",
            mainTitle: "深度定制",
            subTitle: "每一款特铭家居都是独一无二，量身定制的",
            active: false,
            id:3
          },
          {
            img: "../assets/images/brandStory/forth-content-img1.png",
            mainTitle: "深度定制",
            subTitle: "每一款特铭家居都是独一无二，量身定制的",
            active: false,
            id:4
          },
          {
            img: "../assets/images/brandStory/forth-content-img1.png",
            mainTitle: "深度定制",
            subTitle: "每一款特铭家居都是独一无二，量身定制的",
            active: false,
            id:5
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
        ],
        // poster:
        //   "https://surmon-china.github.io/vue-quill-editor/static/images/surmon-1.jpg"
      }
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
      this.piclist.forEach((val, key) => {
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
    }
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
.main-title {
  font-size: 30px;
  margin-bottom: 40px;
}
.sub-title {
  margin-bottom: 8px;
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
    font-size: 14px;
    line-height: 28px;
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
      margin-bottom: 58px;
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
.bg {
  // opacity: 0.8;
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
// .video-player{
//   position: fixed;
//   top: 200px;
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
.el-dialog__body, .el-dialog__header{
  padding: 0;
}
</style>
