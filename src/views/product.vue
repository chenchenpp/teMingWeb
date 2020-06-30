<template>
  <div class="product">
    <div class="product-carousel" ref="productCarouRef">
      <el-carousel :autoplay="false">
        <el-carousel-item
          v-for="(item, index) in pageList.bannerCarouselList"
          :key="index"
        >
          <div class="caro-banner-container">
            <img
              class="banner-img"
              :src="require(`assets/images/product/one/${item.src}`)"
              alt=""
            />
            <div
              v-for="(posItem, posIndex) in item.positionList"
              :key="`pos${posIndex}`"
              class="dot"
              :class="{ 'stop-dot': posItem.isShow }"
              :style="{ left: posItem.left, top: posItem.top }"
              @click="openGoodsHandle(posItem, item.positionList)"
            >
              <div class="inner"></div>
            </div>
            <div
              class="goods-items"
              :class="{ 'goods-items-active': goodsItem.isShow }"
              v-for="(goodsItem, goodsIndex) in item.positionList"
              :key="`goods${goodsIndex}`"
            >
              <img
                :src="
                  require(`assets/images/product/one/${goodsItem.smallImgSrc}`)
                "
                alt=""
              />
              <div class="right-box">
                <p class="title">{{ goodsItem.title }}</p>
                <p class="des">{{ goodsItem.des }}</p>
                <div class="close" @click="closeGoodsHandle(goodsItem)">
                  关闭 &gt;
                </div>
              </div>
            </div>
          </div>
        </el-carousel-item>
      </el-carousel>
    </div>
    <div class="product-container">
      <p class="title">{{ pageList.title }}</p>
      <p class="des">{{ pageList.des }}</p>
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
            <p class="title">{{ item.title }}</p>
            <p class="des">{{ item.info }}</p>
          </li>
          <template v-for="(imgItem, imgIndex) in item.imgArr">
            <li
              :key="imgIndex"
              v-if="Array.isArray(imgItem.src)"
              class="spe-img"
            >
              <img
                v-for="(imgSrc, srcIndex) in imgItem.src"
                :key="srcIndex"
                v-lazy="require(`assets/images/product/second/${imgSrc}`)"
                :class="imgItem.imgClass"
                alt=""
              />
            </li>
            <li v-else :key="imgIndex" :class="imgItem.imgClass">
              <img
                v-lazy="require(`assets/images/product/second/${imgItem.src}`)"
                :class="imgItem.imgClass"
                alt=""
              />
            </li>
          </template>
        </ul>
      </div>
      <div class="clearfix">
        <div class="download-pdf">
          <i class="iconfont icondownload"></i>
          PDF 下载
        </div>
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
        >
          <span class="title">{{item.title}}</span>
          <img
            :src="require(`assets/images/product/one/${item.imgSrc}`)"
            alt=""
          />
        </div>
      </div>
    </div>
    <tm-footer></tm-footer>
  </div>
</template>
<script>
import Swiper from "swiper";
import { getClientHeight } from '@/util/publicMethod';
export default {
  name: "product",
  data() {
    return {
      dejiaList: {
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
      pageList: {},
      footerCarSwiper: null
    };
  },
  created() {
    this.pageList = this.dejiaList; //临时使用 // this.pageList=this[`${this.$route.params.type}List`];//最后请替换这个
  },
  mounted() {
    this.initSwiper();
    document.addEventListener('scroll', this.productScrollHandle, false);
    this.$once('hook:beforeDestroy', () => {
      document.removeEventListener('scroll', this.productScrollHandle, false);
    });
  },
  methods: {
    productScrollHandle() {
      let windowHeight = getClientHeight();
      for (let i = 0; i < this.pageList.detailList.length; i++) {
        this.$refs[`IMGmoduel${i}`][0].childNodes.forEach(ele => {
          let eleTop = ele.getBoundingClientRect().top;
          let eleHeight = ele.clientHeight; //当前元素高度
          if (eleTop >= 0) {
            ele.childNodes[0].style.transform = `scale(${1 + (windowHeight - eleTop) / windowHeight / 10})`;
            ele.style.opacity = `${(windowHeight - eleTop) / windowHeight}`;
          } else if (-eleTop <= eleHeight && eleTop < 0) {
            ele.childNodes[0].style.transform = `scale(${1 + (eleHeight + eleTop) / eleHeight / 10})`;
            ele.style.opacity = `${(eleHeight + eleTop) / eleHeight}`;
          } else {
            ele.childNodes[0].style.transform = 'scale(1)';
            ele.style.opacity = '1';
          }
        });
      }
    },
    initSwiper() {
      this.footerCarSwiper = new Swiper(".swiper-container", {
        autoplay: {
          delay: 30000,
          disableOnInteraction: false
        },
        loop: true, //循环轮播
        // simulateTouch: false, //禁止滑动轮播 关闭会影响点击事件的触发！！！！！
        effect: "coverflow", //slide的切换效果 3d效果
        slidesPerView: "2", 
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
        on: {
          click: function(event) {
            event.stopPropagation();
            let currentClass = event.target.className;
            if (currentClass.includes('swiper-slide-prev')) {
              this.slidePrev();
            } else if (currentClass.includes('swiper-slide-next')) {
              this.slideNext();
            }
          }
        }
      });
    },
    //关闭轮播图
    stopFooterCarousel() {
      this.footerCarSwiper.autoplay.stop();
    },
    //开启轮播图
    startFooterCarousel() {
      this.footerCarSwiper.autoplay.start();
    },
    closeGoodsHandle(data) {
      data.isShow = false;
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
  .caro-banner-container {
    .banner-img {
      width: 100%;
      height: 100vh;
    }
    .dot {
      // opacity: 0;
      background: rgba(27, 31, 34, 0.25);
      border: 1px solid rgba(255, 255, 255, 0.7);
      box-shadow: 0 0 15px 0 rgba(0, 0, 0, 0.28);
      z-index: 2;
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
      img {
        width: 240px;
        height: 180px;
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
      margin-top: 82px;
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
        overflow: hidden;
      }
      .spe-img {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
      }
    }
    .detail-left {
      .moduel-mes::before {
        content: "";
        display: inline-block;
        width: 50px;
        height: 1px;
        background: rgba(255, 255, 255, 0.5);
        position: absolute;
        top: 70px;
        right: -50px;
        z-index: 10;
      }
    }
    .detail-right {
      flex-direction: row-reverse;
      .moduel-mes::before {
        content: "";
        display: inline-block;
        width: 50px;
        height: 1px;
        background: rgba(255, 255, 255, 0.5);
        position: absolute;
        top: 70px;
        left: -50px;
        z-index: 10;
      }
    }
    .moduel-mes {
      width: 440px;
      position: relative;
      .title {
        font-size: 24px;
        font-weight: normal;
        color: rgba(221, 221, 221, 1);
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
  .title {
    font-size: 20px;
    color: rgba(221, 221, 221, 0.7);
    position: absolute;
    top: 50%;
    transform: translate(-50%, 50%);
  }
  img {
    width: 1320px;
    height: 750px;
  }
  .swiper-slide-active .title {
    left: 50%;
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
      background: rgba(255, 255, 255, 0.5);
    }
  }
}
</style>
