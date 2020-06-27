<template>
  <div class="product">
    <div class="product-carousel">
      <el-carousel>
        <el-carousel-item v-for="(item, index) in pageList.bannerCarouselList" :key="index" >
          <div class="caro-banner-container">
            <img :src="require(`assets/images/product/one/${item.src}`)" alt=""/>
            <div v-for="(posItem, posIndex) in item.positionList" :key="`pos${posIndex}`"
              class="dot" :class="{'stop-dot': posItem.isShow}"
              :style="{left: posItem.left, top: posItem.top}"
              @click="openGoodsHandle(posItem, item.positionList)">
              <div class="inner"></div>
            </div>
            <div class="goods-items" :class="{'goods-items-active': goodsItem.isShow}" v-for="(goodsItem, goodsIndex) in item.positionList" :key="`goods${goodsIndex}`">
              <img :src="require(`assets/images/product/one/${goodsItem.smallImgSrc}`)" alt=""/>
              <div class="right-box">
                <p class="title">{{goodsItem.title}}</p>
                <p class="des">{{goodsItem.des}}</p>
                <div class="close" @click="closeGoodsHandle(goodsItem)">关闭 &gt;</div>
              </div>
            </div>
          </div>
        </el-carousel-item>
      </el-carousel>
    </div>
    <div class="product-container">
      <p class="title">{{pageList.title}}</p>
      <p class="des">{{pageList.des}}</p>
      <div class="detail-box">
        <scrollbarTrack></scrollbarTrack>
        <ul class="moduel" v-for="(item, index) in pageList.detailList" :key="index"  :class="[index%2==0 ? 'detail-left':'detail-right']">
          <li class="moduel-mes">
            <p class="title">{{item.title}}</p>
            <p class="des">{{item.info}}</p>
          </li>
          <template v-for="(imgItem, imgIndex) in item.imgArr" >
            <li :key="imgIndex" v-if="Array.isArray(imgItem.src)" class="spe-img">
              <img v-for="(imgSrc, srcIndex) in imgItem.src" :key="srcIndex" :src="require(`assets/images/product/second/${imgSrc}`)" :class="imgItem.imgClass" alt="">
            </li>
            <li v-else :key="imgIndex" :class="imgItem.imgClass">
              <img :src="require(`assets/images/product/second/${imgItem.src}`)" :class="imgItem.imgClass" alt="">
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
      <div class="card-carousel">
        <el-carousel :interval="4000" type="card" indicator-position="none" arrow="never">
          <el-carousel-item v-for="(item, index) in pageList.lastCarouselList" :key="index" >
            <span class="title">莫兰迪系列</span>
            <img :src="require('assets/images/product/one/banner.png')" alt="">
          </el-carousel-item>
        </el-carousel>
      </div>
    </div>
    <tm-footer></tm-footer>
  </div>
</template>
<script>
export default {
  name: 'product',
  data(){
    return {
      dejiaList: {
        title: '德贾系列',
        des: '智能化的特色，最顶级的配置，将艺术、潮流、功能互相结合在了一起。',
        bannerCarouselList: [{
          src: 'banner.png',
          positionList: [{
            isShow: false,
            left: '20%',
            top: '20%',
            smallImgSrc: 'banner.png',
            title: '厨房用具',
            des: '巧妙地将开放理念运用到厨房设计中，将篮子的透气性拉到极致，让您在最快的时间内烹饪，最方便的找到厨房用具，一目了然的享受乐趣。'
          },{
            isShow: false,
            left: '40%',
            top: '30%',
            smallImgSrc: 'banner.png',
            title: '厨房用具',
            des: '巧妙地将开放理念运用到厨房设计中，将篮子的透气性拉到极致，让您在最快的时间内烹饪，最方便的找到厨房用具，一目了然的享受乐趣。'
          },{
            isShow: false,
            left: '60%',
            top: '40%',
            smallImgSrc: 'banner.png',
            title: '厨房用具',
            des: '巧妙地将开放理念运用到厨房设计中，将篮子的透气性拉到极致，让您在最快的时间内烹饪，最方便的找到厨房用具，一目了然的享受乐趣。'
          }]
        },{
          src: 'banner.png',
          positionList: [{
            isShow: false,
            left: '20%',
            top: '20%',
            smallImgSrc: 'banner.png',
            title: '厨房用具',
            des: '巧妙地将开放理念运用到厨房设计中，将篮子的透气性拉到极致，让您在最快的时间内烹饪，最方便的找到厨房用具，一目了然的享受乐趣。'
          },{
            isShow: false,
            left: '40%',
            top: '30%',
            smallImgSrc: 'banner.png',
            title: '厨房用具',
            des: '巧妙地将开放理念运用到厨房设计中，将篮子的透气性拉到极致，让您在最快的时间内烹饪，最方便的找到厨房用具，一目了然的享受乐趣。'
          },{
            isShow: false,
            left: '60%',
            top: '40%',
            smallImgSrc: 'banner.png',
            title: '厨房用具',
            des: '巧妙地将开放理念运用到厨房设计中，将篮子的透气性拉到极致，让您在最快的时间内烹饪，最方便的找到厨房用具，一目了然的享受乐趣。'
          }]
        },{
          src: 'banner.png',
          positionList: [{
            isShow: false,
            left: '20%',
            top: '20%',
            smallImgSrc: 'banner.png',
            title: '厨房用具',
            des: '巧妙地将开放理念运用到厨房设计中，将篮子的透气性拉到极致，让您在最快的时间内烹饪，最方便的找到厨房用具，一目了然的享受乐趣。'
          },{
            isShow: false,
            left: '40%',
            top: '30%',
            smallImgSrc: 'banner.png',
            title: '厨房用具',
            des: '巧妙地将开放理念运用到厨房设计中，将篮子的透气性拉到极致，让您在最快的时间内烹饪，最方便的找到厨房用具，一目了然的享受乐趣。'
          },{
            isShow: false,
            left: '60%',
            top: '40%',
            smallImgSrc: 'banner.png',
            title: '厨房用具',
            des: '巧妙地将开放理念运用到厨房设计中，将篮子的透气性拉到极致，让您在最快的时间内烹饪，最方便的找到厨房用具，一目了然的享受乐趣。'
          }]
        }],
        // bannerCarouselList:['banner.png','banner.png','banner.png','banner.png'],
        detailList: [{
          title: '现代、科技、以人为本',
          info: '新型开门方式，节省空间；使用方便，安静安全；安装空间小，门板转动距离短；满足多样化的设计需求，适合书房、衣帽间、厨房、橱柜和其他不同的家居空间。',
          imgArr: [{
            imgClass: 'height600',
            src: 'first1.jpg'
          },{
            imgClass: 'height800',
            src: 'first2.jpg'
          },{
            imgClass: 'height960',
            src: 'first3.jpg'
          },{
            imgClass: 'height450',
            src: ['first4.jpg','first5.png']
          }]
        },{
          title: '现代、科技、以人为本',
          info: '新型开门方式，节省空间；使用方便，安静安全；安装空间小，门板转动距离短；满足多样化的设计需求，适合书房、衣帽间、厨房、橱柜和其他不同的家居空间。',
          imgArr: [{
            imgClass: 'height600',
            src: 'second1.jpg'
          },{
            imgClass: 'height800',
            src: 'second2.jpg'
          },{
            imgClass: 'height600',
            src: 'second3.jpg'
          },{
            imgClass: 'height600',
            src: 'second4.jpg'
          }]
        },{
          title: '现代、科技、以人为本',
          info: '新型开门方式，节省空间；使用方便，安静安全；安装空间小，门板转动距离短；满足多样化的设计需求，适合书房、衣帽间、厨房、橱柜和其他不同的家居空间。',
          imgArr: [{
            imgClass: 'height600',
            src: 'third1.jpg'
          },{
            imgClass: 'height600',
            src: 'third2.jpg'
          },{
            imgClass: 'height600',
            src: 'third3.jpg'
          },{
            imgClass: 'height800',
            src: 'third4.jpg'
          },{
            imgClass: 'height300',
            src: 'third5.jpg'
          }]
        },{
          title: '现代、科技、以人为本',
          info: '新型开门方式，节省空间；使用方便，安静安全；安装空间小，门板转动距离短；满足多样化的设计需求，适合书房、衣帽间、厨房、橱柜和其他不同的家居空间。',
          imgArr: [{
            imgClass: 'height600',
            src: 'four1.jpg'
          },{
            imgClass: 'height600',
            src: 'four2.jpg'
          },{
            imgClass: 'height700',
            src: 'four3.jpg'
          },{
            imgClass: 'height600',
            src: 'four4.jpg'
          },{
            imgClass: 'height600',
            src: 'four5.jpg'
          }]
        }],
        lastCarouselList:['banner.png','banner.png','banner.png','banner.png','banner.png','banner.png','banner.png'],
      },
      moLanDiList: {
        title: '莫兰迪系列',
        des: '智能化的特色，最顶级的配置，将艺术、潮流、功能互相结合在了一起。',
        bannerCarouselList:['banner.png','banner.png','banner.png','banner.png'],
        detailList: [{
          title: '现代、科技、以人为本',
          info: '新型开门方式，节省空间；使用方便，安静安全；安装空间小，门板转动距离短；满足多样化的设计需求，适合书房、衣帽间、厨房、橱柜和其他不同的家居空间。',
          imgArr: [{
            imgClass: 'height600',
            src: 'first1.jpg'
          },{
            imgClass: 'height800',
            src: 'first2.jpg'
          },{
            imgClass: 'height960',
            src: 'first3.jpg'
          },{
            imgClass: 'height450',
            src: ['first4.jpg','first5.png']
          }]
        },{
          title: '现代、科技、以人为本',
          info: '新型开门方式，节省空间；使用方便，安静安全；安装空间小，门板转动距离短；满足多样化的设计需求，适合书房、衣帽间、厨房、橱柜和其他不同的家居空间。',
          imgArr: [{
            imgClass: 'height600',
            src: 'second1.jpg'
          },{
            imgClass: 'height800',
            src: 'second2.jpg'
          },{
            imgClass: 'height600',
            src: 'second3.jpg'
          },{
            imgClass: 'height600',
            src: 'second4.jpg'
          }]
        },{
          title: '现代、科技、以人为本',
          info: '新型开门方式，节省空间；使用方便，安静安全；安装空间小，门板转动距离短；满足多样化的设计需求，适合书房、衣帽间、厨房、橱柜和其他不同的家居空间。',
          imgArr: [{
            imgClass: 'height600',
            src: 'third1.jpg'
          },{
            imgClass: 'height600',
            src: 'third2.jpg'
          },{
            imgClass: 'height600',
            src: 'third3.jpg'
          },{
            imgClass: 'height800',
            src: 'third4.jpg'
          },{
            imgClass: 'height300',
            src: 'third5.jpg'
          }]
        },{
          title: '现代、科技、以人为本',
          info: '新型开门方式，节省空间；使用方便，安静安全；安装空间小，门板转动距离短；满足多样化的设计需求，适合书房、衣帽间、厨房、橱柜和其他不同的家居空间。',
          imgArr: [{
            imgClass: 'height600',
            src: 'four1.jpg'
          },{
            imgClass: 'height600',
            src: 'four2.jpg'
          },{
            imgClass: 'height700',
            src: 'four3.jpg'
          },{
            imgClass: 'height600',
            src: 'four4.jpg'
          },{
            imgClass: 'height600',
            src: 'four5.jpg'
          }]
        }],
        lastCarouselList:['banner.png','banner.png','banner.png','banner.png'],
      },
      pageList: {}

    }
  },
  created(){
    this.pageList=this.dejiaList; //临时使用 // this.pageList=this[`${this.$route.params.type}List`];//最后请替换这个
    console.log(this.pageList)
  },
  methods: {
    closeGoodsHandle(data){
      data.isShow=false;
    },
    openGoodsHandle(data, dataList){
      dataList.forEach(item => {
        item.isShow=false;
      });
      data.isShow=true;
    }
  }
};
</script>
<style lang="scss" scoped>

.height600{
  height: 600px;
}
.height800{
  height: 800px;
}
.height960{
  height: 960px;
}
.height450{
  height: 450px;
}
.height300{
  height: 300px;
}
.height700{
  height: 700px;
}
.product{
  height: 100%;
  background: #2A282A;
  ::v-deep .el-carousel__container{
    height: 1000px;
  }
  .caro-banner-container{
    height: 1000px;
    width: 100%;
    position: relative;
    .dot{
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
        animation: pulse 3s linear infinite;
        content: "";
        position: absolute;
        width: 30px;
        height: 30px;
        left: 50%;
        top: 50%;
        border-radius: 50%;
        transform: translate3d(-50%, -50%, 0);
        border: solid 1px #FFFFFF;
      }
    }
    .stop-dot::before{
      animation: unset;
    }
    .inner{
      margin: 0 auto;
      border-radius: 50%;
      width: 8px;
      height: 8px;
      overflow: auto;
      background: #FFFFFF;
      transition: .5s;
    }
    @keyframes pulse {
      0%{
        width: 30px;
        height: 30px;
        opacity: 1;
      }
      100%{
        width: 50px;
        height: 50px;
        opacity: 0;
      }
    }

    .goods-items{
      width:900px;
      height:220px;
      background:rgba(41,39,41,.7);
      box-shadow:0px 0px 20px 0px rgba(41,39,41,0.3);
      position: absolute;
      right: -100%;
      bottom: 68px;
      overflow: hidden;
      font-size:14PX;
      display: flex;
      align-items: center;
      padding-left: 20px;
      transition: right 1s ease-in-out;
      img{
        width: 240px;
        height: 180px;
      }
      .right-box{
        height: 180px;
        text-align: left;
        padding-left: 20px;
        color:rgba(221,221,221,1);
        display: flex;
        flex-direction: column;
        justify-content: space-between;
      }
      .title{
        font-size:20px;
      }
      .des{
        width: 478px;
        line-height:24px;
      }
    }
    .goods-items-active{
      right: 0;
    }
  }
  .product-container{
    width: 1580px;
    margin-left: 139px;
    box-sizing: border-box;
    color:#DDDDDD;
    .title{
      font-size:30px;
      font-weight:normal;
      margin-top: 82px;
    }
    .des{
      margin-top: 22px;
      margin-bottom: 80px;
      font-size:16px;
      line-height:24px;
    }

    .detail-box{
      position: relative;
      border-top: 1px solid rgba(255,255,255,.3);
      // border-left: 1px solid rgba(255,255,255,.3);
    }
    .moduel {
      padding-bottom: 60px;
      border-bottom: 1px solid rgba(255,255,255,.3);
      display: flex;
      flex-wrap: wrap;
      li{
        margin-left: 50px;
        margin-top: 60px;
        overflow: hidden;
      }
      .spe-img{
        display: flex;
        flex-direction: column;
        justify-content: space-between
      }
    }
    .detail-left{
      .moduel-mes::before{
        content: '';
        display: inline-block;
        width:50px;
        height:1px;
        background:rgba(255,255,255,.5);
        position: absolute;
        top: 70px;
        right: -50px
      }
    }
    .detail-right{
      flex-direction: row-reverse;
      .moduel-mes::before{
        content: '';
        display: inline-block;
        width:50px;
        height:1px;
        background:rgba(255,255,255,.5);
        position: absolute;
        top: 70px;
        left: -50px
      }
    }
    .moduel-mes{
      width: 440px;
      position: relative;
      .title{
        font-size:30px;
        font-weight:normal;
        color:rgba(221,221,221,1);
      }
      .des{
        font-size:16px;
        color:rgba(221,221,221,1);
        line-height:24px;
      }
    }
  }
  .download-pdf{
    width: 160px;
    height: 40px;
    border:1px solid rgba(255,255,255,.3);
    font-size:16px;
    color:rgba(221,221,221,1);
    line-height: 40px;
    margin-top: 60px;
    float: right;
  }
}
.el-carousel__item{
  img{
    height: 1000px;
  }
}
.card-carousel{
  .title{
    font-size:20PX;
    color:rgba(221,221,221,.7);
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, 50%)
  }
  img{
    width:1320px;
    height:750px;
  }
}
</style>
