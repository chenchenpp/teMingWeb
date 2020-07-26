<template>
  <div class="product">
    <div class="product-carousel" ref="productCarouRef">
      <el-carousel :autoplay="false" :indicator-position="pageList.bannerCarouselList.length>1?'':'none'">
        <el-carousel-item
          v-for="(item, index) in pageList.bannerCarouselList"
          :key="index"
        >
          <div class="caro-banner-container">
            <img class="banner-img" :src="item.imageUrl" alt="" />
            <div v-for="(posItem, posIndex) in item.positionList"
              :key="`pos${posIndex}`"
              class="dot"
              :class="{ 'stop-dot': posItem.isShow }"
              :style="{ left: posItem.left, top: posItem.top }"
              @click="openGoodsHandle(posItem, item.positionList)">
              <div class="inner"></div>
            </div>
            <template v-for="(goodsItem, goodsIndex) in item.positionList">
              <div v-if="!goodsItem.isVideoFlag" class="goods-items"
                :class="{ 'goods-items-active': goodsItem.isShow }"
                :key="`goods${goodsIndex}`"
              >
                <img :src="require(`assets/images/product/${goodsItem.src}`)" alt="" />
                <div class="right-box">
                  <p class="title" v-html="goodsItem['title'+language]"></p>
                  <p class="des" v-html="goodsItem['des'+language]"></p>
                  <div class="close" @click="closeGoodsHandle(goodsItem)">
                    {{$t('product.close')}} &gt;
                  </div>
                </div>
              </div>
            </template>
          </div>
        </el-carousel-item>
      </el-carousel>
    </div>
    <div class="product-container">
      <p class="title">{{ pageList['pageTitle'+language] }}</p>
      <p class="des">{{ pageList['pageTitleInfo'+language] }}</p>
      <div class="detail-box">
        <scrollbar-track></scrollbar-track>
        <ul
          class="moduel"
          v-for="(item, index) in pageList.detailList"
          :key="index"
          :class="[index % 2 == 0 ? 'detail-left' : 'detail-right']"
          :ref="`IMGmoduel${index}`"
        >
          <li class="moduel-mes">
            <p class="title">{{ item['title'+language] }}</p>
            <p class="des">{{ item['info'+language] }}</p>
          </li>
          <template v-for="(imgItem, imgIndex) in item.imgArr">
            <li
              :key="imgIndex"
              v-if="Array.isArray(imgItem.imgArr)"
              class="spe-img"
            >
              <img
                v-for="(imgSrc, srcIndex) in imgItem.imgArr"
                :key="srcIndex"
                v-lazy="imgSrc.imageUrl"
                :class="imgSrc.imageDescription"
                alt=""
              />
            </li>
            <li v-else :key="imgIndex" :class="imgItem.imageDescription">
              <img
                v-lazy="imgItem.imageUrl"
                :class="imgItem.imageDescription"
                alt=""
              />
            </li>
          </template>
        </ul>
      </div>
      <div class="clearfix">
        <a :href="`http://106.52.5.152/static_html/${$route.params.type}.pdf`" target="_blank" class="download-pdf">
          <i class="iconfont icondownload"></i>
          PDF 下载
        </a>
      </div>
    </div>
    <div class="card-carousel swiper-container">
      <div class="swiper-wrapper">
        <div
          class="swiper-slide"
          v-for="(item, index) in pageList.lastCarouselList"
          :key="index"
          @mouseenter.stop="stopFooterCarousel"
          @mouseleave.stop="startFooterCarousel"
          :urlPath='item.linkUrl'
        >
          <span class="title">{{item['imageDescription'+language]}}</span>
          <img
            :src="item.imageUrl"
            alt=""
          />
        </div>
      </div>
    </div>
    <tm-footer></tm-footer>
    <el-dialog :visible.sync="isShowVideoPlayer" :show-close="false" :before-close="closePlayHandle">
      <video-player class="video-player vjs-custom-skin" ref="videoPlayer"
        :playsinline="true"
        :options="playerOptions"
      ></video-player>
    </el-dialog>
  </div>
</template>
<script>
import Swiper from 'swiper';
import { getClientHeight } from '@/util/publicMethod';
import api from '@/util/request/api';
import { productPointList } from '@/util/productData';
export default {
  name: 'product',
  data() {
    return {
      isShowVideoPlayer: false,
      jiadeList: {
        title: "德贾系列",
        des: "智能化的特色，最顶级的配置，将艺术、潮流、功能互相结合在了一起。",
        bannerCarouselList: [
          {
            src: "banner.png",
            positionList: [
              {
                isShow: false,
                left: "20%",
                top: "20%",
                smallImgSrc: "banner.png",
                title: "厨房用具",
                des:
                  "巧妙地将开放理念运用到厨房设计中，将篮子的透气性拉到极致，让您在最快的时间内烹饪，最方便的找到厨房用具，一目了然的享受乐趣。"
              },
              {
                isShow: false,
                left: "40%",
                top: "30%",
                smallImgSrc: "banner.png",
                title: "厨房用具",
                des:
                  "巧妙地将开放理念运用到厨房设计中，将篮子的透气性拉到极致，让您在最快的时间内烹饪，最方便的找到厨房用具，一目了然的享受乐趣。"
              },
              {
                isShow: false,
                left: "60%",
                top: "40%",
                smallImgSrc: "banner.png",
                title: "厨房用具",
                des:
                  "巧妙地将开放理念运用到厨房设计中，将篮子的透气性拉到极致，让您在最快的时间内烹饪，最方便的找到厨房用具，一目了然的享受乐趣。"
              }
            ]
          },
          {
            src: "banner.png",
            positionList: [
              {
                isShow: false,
                left: "20%",
                top: "20%",
                smallImgSrc: "banner.png",
                title: "厨房用具",
                des:
                  "巧妙地将开放理念运用到厨房设计中，将篮子的透气性拉到极致，让您在最快的时间内烹饪，最方便的找到厨房用具，一目了然的享受乐趣。"
              },
              {
                isShow: false,
                left: "40%",
                top: "30%",
                smallImgSrc: "banner.png",
                title: "厨房用具",
                des:
                  "巧妙地将开放理念运用到厨房设计中，将篮子的透气性拉到极致，让您在最快的时间内烹饪，最方便的找到厨房用具，一目了然的享受乐趣。"
              },
              {
                isShow: false,
                left: "60%",
                top: "40%",
                smallImgSrc: "banner.png",
                title: "厨房用具",
                des:
                  "巧妙地将开放理念运用到厨房设计中，将篮子的透气性拉到极致，让您在最快的时间内烹饪，最方便的找到厨房用具，一目了然的享受乐趣。"
              }
            ]
          },
          {
            src: "banner.png",
            positionList: [
              {
                isShow: false,
                left: "20%",
                top: "20%",
                smallImgSrc: "banner.png",
                title: "厨房用具",
                des:
                  "巧妙地将开放理念运用到厨房设计中，将篮子的透气性拉到极致，让您在最快的时间内烹饪，最方便的找到厨房用具，一目了然的享受乐趣。"
              },
              {
                isShow: false,
                left: "40%",
                top: "30%",
                smallImgSrc: "banner.png",
                title: "厨房用具",
                des:
                  "巧妙地将开放理念运用到厨房设计中，将篮子的透气性拉到极致，让您在最快的时间内烹饪，最方便的找到厨房用具，一目了然的享受乐趣。"
              },
              {
                isShow: false,
                left: "60%",
                top: "40%",
                smallImgSrc: "banner.png",
                title: "厨房用具",
                des:
                  "巧妙地将开放理念运用到厨房设计中，将篮子的透气性拉到极致，让您在最快的时间内烹饪，最方便的找到厨房用具，一目了然的享受乐趣。"
              }
            ]
          }
        ],
        // bannerCarouselList:['banner.png','banner.png','banner.png','banner.png'],
        detailList: [
          {
            title: "现代、科技、以人为本",
            info:
              "新型开门方式，节省空间；使用方便，安静安全；安装空间小，门板转动距离短；满足多样化的设计需求，适合书房、衣帽间、厨房、橱柜和其他不同的家居空间。",
            imgArr: [
              {
                imgClass: "H600 W1020",
                src: "first1.jpg"
              },
              {
                imgClass: "H800 W1520",
                src: "first2.jpg"
              },
              {
                imgClass: "H960 W730",
                src: "first3.jpg"
              },
              {
                imgClass: "H450 W730",
                src: ["first4.jpg", "first5.png"]
              }
            ]
          },
          {
            title: "现代、科技、以人为本",
            info:
              "新型开门方式，节省空间；使用方便，安静安全；安装空间小，门板转动距离短；满足多样化的设计需求，适合书房、衣帽间、厨房、橱柜和其他不同的家居空间。",
            imgArr: [
              {
                imgClass: "H600 W1020",
                src: "second1.jpg"
              },
              {
                imgClass: "H800 W1520",
                src: "second2.jpg"
              },
              {
                imgClass: "H600 W730",
                src: "second3.jpg"
              },
              {
                imgClass: "H600 W730",
                src: "second4.jpg"
              }
            ]
          },
          {
            title: "现代、科技、以人为本",
            info:
              "新型开门方式，节省空间；使用方便，安静安全；安装空间小，门板转动距离短；满足多样化的设计需求，适合书房、衣帽间、厨房、橱柜和其他不同的家居空间。",
            imgArr: [
              {
                imgClass: "H600 W1020",
                src: "third1.jpg"
              },
              {
                imgClass: "H600 W440",
                src: "third2.jpg"
              },
              {
                imgClass: "H600 W1020",
                src: "third3.jpg"
              },
              {
                imgClass: "H800 W1520",
                src: "third4.jpg"
              },
              {
                imgClass: "H300 W1520",
                src: "third5.jpg"
              }
            ]
          },
          {
            title: "现代、科技、以人为本",
            info:
              "新型开门方式，节省空间；使用方便，安静安全；安装空间小，门板转动距离短；满足多样化的设计需求，适合书房、衣帽间、厨房、橱柜和其他不同的家居空间。",
            imgArr: [
              {
                imgClass: "H600 W494",
                src: "four1.jpg"
              },
              {
                imgClass: "H600 W494",
                src: "four2.jpg"
              },
              {
                imgClass: "H700 W1520",
                src: "four3.jpg"
              },
              {
                imgClass: "H600 W1047",
                src: "four4.jpg"
              },
              {
                imgClass: "H600 W414",
                src: "four5.jpg"
              }
            ]
          }
        ],
        lastCarouselList: [
          {
            imgSrc: "banner.png",
            title: "莫兰迪系列"
          },
          {
            imgSrc: "banner.png",
            title: "莫兰迪系列"
          },
          {
            imgSrc: "banner.png",
            title: "莫兰迪系列"
          },
          {
            imgSrc: "banner.png",
            title: "莫兰迪系列"
          }
        ]
      },
      playerOptions: {
        height: '360',
        autoplay: false,
        muted: true,
        language: 'en',
        playbackRates: [0.7, 1.0, 1.5, 2.0],
        sources: [
          {
            type: 'video/mp4',
            src: ''
          }
        ]
      },
      pageList: {
        pageTitle: "",
        pageTitleEnglish: '',
        pageTitleInfo: "",
        pageTitleInfoEnglish: "",
        detailList: [],
        bannerCarouselList: [],
        lastCarouselList: []
      },
      footerCarSwiper: null
    };
  },
  watch: {
    '$route': function(to, from) {
      this.init();
    },
    '$i18n.locale': function(val) {
      // 初始化轮播图
      this.$nextTick(() => {
        this.footerCarSwiper.updateSlides();
      })
    }
  },
  computed:{
    language() {
      return this.$i18n.locale == "CN" ? "" : "English";
    }
  },
  created() {
    this.init();
  },
  mounted() {
    document.addEventListener('scroll', this.productScrollHandle, false);
    this.$once('hook:beforeDestroy', () => {
      document.removeEventListener('scroll', this.productScrollHandle, false);
    });
  },
  methods: {
    init() {
      let allSeries = {
        'jiade':2,
        'molandi': 8,
        'miss': 9,
        'dikesen': 10,
        'bier': 11,
        'kelinte': 12,
        'botiqieli': 13,
        'mengdelian': 14
      };
      this.$get(api.getPageHttp, {
        imageBelongPage: allSeries[this.$route.params.type],
        en: 0
      }).then(res => {
        let { pageTitle, pageTitleEnglish, pageTitleInfo, pageTitleInfoEnglish } =res;
        Object.assign(this.pageList, { pageTitle, pageTitleEnglish, pageTitleInfo, pageTitleInfoEnglish });
        let arrList = [...res.arrList];
        // 头部轮播
        this.pageList.bannerCarouselList = arrList.shift().imgArr;
        this.pageList.bannerCarouselList.forEach((item, index) => {
          this.$set(item, 'positionList', productPointList[this.$route.params.type][index]);
        });
        // 主体部分
        this.pageList.detailList = arrList.splice(0, res.arrList.length - 2);
        this.pageList.detailList.forEach(item => {
          let speArr = [];
          let copyArr = [];
          let no;
          item.imgArr.forEach(data => {
            if (data.name || data.name == '0') {
              no=data.no-1;
              speArr.push(data);
            } else {
              copyArr.push(data);
            }
          });
          if (speArr.length) {
            copyArr.splice(no, 0, {
              imgArr: speArr
            })
          }
          item.imgArr = copyArr;
        });
        // 脚步轮播图
        this.pageList.lastCarouselList = arrList.pop().imgArr;
        // 初始化轮播图
        this.$nextTick(() => {
          if (this.footerCarSwiper) {
            this.footerCarSwiper.init();
          } else {
            this.initSwiper();
          }
        });
      });
    },
    productScrollHandle() {
      let windowHeight = getClientHeight();
      for (let i = 0; i < this.pageList.detailList.length; i++) {
        for(let j=0; j<this.$refs[`IMGmoduel${i}`][0].childNodes.length; j++){
          let ele= this.$refs[`IMGmoduel${i}`][0].childNodes[j];
          let eleTop = ele.getBoundingClientRect().top-100;
          let eleHeight = ele.clientHeight; //当前元素高度
          if (ele.childNodes[0].nodeName == 'IMG'||ele.childNodes[0].nodeName == 'P') {
            if (eleTop >= 0) {
              ele.childNodes[0].style.transform = `scale(${1 + (windowHeight - eleTop) / windowHeight / 20})`;
              ele.style.opacity = `${(windowHeight - eleTop) / windowHeight}`;
            } else if (-eleTop <= eleHeight && eleTop < 0) {
              ele.childNodes[0].style.transform = `scale(${1 + (eleHeight + eleTop) / eleHeight / 20})`;
              ele.style.opacity = `${(eleHeight + eleTop) / eleHeight}`;
            } else {
              ele.childNodes[0].style.transform = 'scale(1)';
              ele.style.opacity = '1';
            }
          }
        }

      }
    },
    initSwiper() {
      var that = this;
      this.footerCarSwiper = new Swiper('.swiper-container', {
        autoplay:3000,
        loop: true, //循环轮播
        // simulateTouch: false, //禁止滑动轮播 关闭会影响点击事件的触发！！！！！
        effect: 'coverflow', //slide的切换效果 3d效果
        slidesPerView: "2", //设置slider容器能够同时显示的slides数量(carousel模式)。
        loopedSlides: 2,
        centeredSlides: true, //设定为true时，active slide会居中，而不是默认状态下的居左。
        spaceBetween: "-50%", //在slide之间设置距离（单位px）
        coverflowEffect: {
          rotate: 0, //slide做3d旋转时Y轴的旋转角度
          stretch: 0, //每个slide之间的拉伸值，越大slide靠得越紧。5.3.6 后可使用%百分比
          depth: 0, //slide的位置深度。值越大z轴距离越远，看起来越小。
          modifier: 4, //depth和rotate和stretch的倍率，相当于depth*modifier、rotate*modifier、stretch*modifier，值越大这三个参数的效果越明显。
          slideShadows: false
        },
        slideToClickedSlide:true,
        onTouchStart: function(swiper, event) {
          let currentClass = event.target.className;
          let currentIndex=swiper.realIndex;
          console.log(currentClass)
          if (!currentClass.includes('swiper-slide-prev')&&!currentClass.includes('swiper-slide-next')) {
            that.$router.push(that.pageList.lastCarouselList[currentIndex].linkUrl)
          }
        }
      });
    },
    //关闭轮播图
    stopFooterCarousel() {
      this.footerCarSwiper.stopAutoplay();
    },
    //开启轮播图
    startFooterCarousel() {
      this.footerCarSwiper.startAutoplay();
    },
    closeGoodsHandle(data) {
      data.isShow = false;
    },
    closePlayHandle() {
      this.$refs.videoPlayer.player.pause();
      this.isShowVideoPlayer = false;
    },
    openGoodsHandle(data, dataList) {
      if (data.isShow) {
        data.isShow = false;
      } else {
        dataList.forEach(item => {
          item.isShow = false;
        });
        data.isShow = true;
      }
      if (data.isVideoFlag) {
        this.isShowVideoPlayer = true;
        this.$set(this.playerOptions.sources, 0, {
          type: 'video/mp4',
          src: `http://106.52.5.152/static_img/${data.src}`
        });
      }
    }
  }
};
</script>
<style lang="scss" scoped>
.product {
  height: 100%;
  ::v-deep .el-carousel__container {
    height: 100vh;
  }
  ::v-deep .el-carousel__indicators--horizontal{
    font-size: 14px;
    transform: translate(-50%, -104%);
    .el-carousel__indicator{
      padding: 0;
    }
  }
  ::v-deep .el-carousel__button {
    width: 50px;
    height: 4px;
    margin: 0 !important;
    margin-left: 28px !important;
    background: rgba(255, 255, 255, 1);
    border-radius: 0;
  }
  .caro-banner-container {
    .banner-img {
      width: 100%;
      height: 100vh;
      // object-fit: cover;
    }
    .dot {
      // opacity: 0;
      background: rgba(27, 31, 34, 0.25);
      border: 1px solid rgba(255, 255, 255, 0.7);
      box-shadow: 0 0 15px 0 rgba(0, 0, 0, 0.28);
      z-index: 10;
      position: absolute;
      display: flex;
      align-items: center;
      width: 30px;
      height: 30px;
      border-radius: 50%;
      cursor: pointer;
      transform: translate(-50%, -50%);
      transition: width 0.5s, height 0.5s, transform 0.5s;
      &::before {
        content: "";
        position: absolute;
        width: 30px;
        height: 30px;
        left: 50%;
        top: 50%;
        border-radius: 50%;
        transform: translate3d(-50%, -50%, 0);
        border: solid 1px #ffffff;
        animation: pulse 3s linear infinite;
      }
      &:hover {
        transform: translate(-50%, -50%) scale(1.25);
      }
    }
    .stop-dot::before {
      animation: unset;
    }
    .inner {
      margin: 0 auto;
      border-radius: 50%;
      width: 8px;
      height: 8px;
      overflow: auto;
      background: #ffffff;
      transition: 0.5s;
    }
    @keyframes pulse {
      0% {
        width: 30px;
        height: 30px;
        opacity: 1;
        border: solid 1px #ffffff;
      }
      100% {
        width: 50px;
        height: 50px;
        opacity: 0;
        border: solid 2px #ffffff;
      }
    }

    .goods-items {
      width: 900px;
      height: 220px;
      background: rgba(41, 39, 41, 0.7);
      box-shadow: 0px 0px 20px 0px rgba(41, 39, 41, 0.3);
      position: absolute;
      right: -100%;
      bottom: 68px;
      overflow: hidden;
      font-size: 14px;
      display: flex;
      align-items: center;
      padding-left: 20px;
      transition: right 1s ease-in-out;
      z-index: 10;
      img {
        width: 240px;
        height: 180px;
        object-fit: cover;
      }
      .right-box {
        height: 180px;
        text-align: left;
        padding-left: 20px;
        color: rgba(221, 221, 221, 1);
        display: flex;
        flex-direction: column;
        justify-content: space-between;
      }
      .title {
        font-size: 20px;
      }
      .des {
        width: 478px;
        line-height: 24px;
        margin-top: 20px;
        flex: 1;
      }
    }
    .goods-items-active {
      right: 0;
    }
  }
  .product-container {
    width: 1580px;
    margin-left: 139px;
    box-sizing: border-box;
    color: #dddddd;
    .title {
      font-size: 30px;
      font-weight: normal;
      margin-top: 60px;
    }
    .des {
      margin-top: 22px;
      margin-bottom: 80px;
      font-size: 16px;
      line-height: 24px;
    }

    .detail-box {
      position: relative;
      border-top: 1px solid rgba(255, 255, 255, 0.3);
      // border-left: 1px solid rgba(255,255,255,.3);
    }
    .moduel {
      padding-bottom: 60px;
      border-bottom: 1px solid rgba(255, 255, 255, 0.3);
      display: flex;
      flex-wrap: wrap;
      li {
        margin-left: 50px;
        margin-top: 60px;
        &:not(.moduel-mes){
          overflow: hidden;
        }
        img{
          object-fit: cover;
        }
      }
      .spe-img {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
      }
    }
    .detail-right {
      flex-direction: row-reverse;
    }
    .moduel-mes {
      box-sizing: border-box;
      width: 440px;
      position: relative;
      padding: 0 10px;
      .title {
        font-size: 24px;
        font-weight: normal;
        color: rgba(221, 221, 221, 1);
        text-align: left;
      }
      .des {
        font-size: 16px;
        color: rgba(221, 221, 221, 1);
        line-height: 28px;
        text-align: left;
      }
    }
  }
  .download-pdf {
    cursor: pointer;
    width: 160px;
    height: 40px;
    border: 1px solid rgba(255, 255, 255, 0.3);
    font-size: 16px;
    color: rgba(221, 221, 221, 1);
    line-height: 40px;
    margin-top: 60px;
    float: right;
  }
}
.el-carousel__item {
  img {
    height: 1000px;
  }
}
.card-carousel {
  width: 100%;
  height: 750px;
  overflow: hidden;
  margin-top: 60px;
  cursor: pointer;
  .title {
    font-size: 20px;
    color: rgba(221, 221, 221, 0.7);
    position: absolute;
    top: 50%;
    transform: translate(-50%, 50%);
    cursor: pointer;
  }
  img {
    width: 1320px;
    height: 750px;
  }
  .swiper-slide-active{
    z-index: 2!important;
    .title {
      left: 50%;
    }
  }
  .swiper-slide-prev .title {
    left: 26%;
  }
  .swiper-slide-next .title {
    right: 20%;
  }
  .swiper-slide-prev,
  .swiper-slide-next {
    position: relative;
    &::before {
      content: "";
      display: block;
      position: absolute;
      top: 0;
      bottom: 0;
      width: 100%;
      background: rgba(0, 0, 0, 0.7);
    }
  }
}
</style>
