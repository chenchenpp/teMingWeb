<template>
  <div class="product">
    <navBar />
    <div class="product-carousel">
      <el-carousel>
        <el-carousel-item v-for="item in 4" :key="item">
          <img :src="require('assets/images/product/one/banner.png')" alt="">
        </el-carousel-item>
      </el-carousel>
    </div>
    <div class="product-container">
      <p class="title">莫兰迪系列</p>
      <p class="des">智能化的特色，最顶级的配置，将艺术、潮流、功能互相结合在了一起。</p>
      <div class="detail-box">
        <div class="scrollbarTrack" ref="scrollbarTrack">
          <div class="scrollbarThumb" ref="scrollbarThumb"></div>
          <div class="backgroundContainer"></div>
        </div>
        <ul class="moduel" v-for="(item, index) in detailList" :key="index"  :class="[index%2==0 ? 'detail-left':'detail-right']">
          <li class="moduel-mes">
            <p class="title">{{item.title}}</p>
            <p class="des">{{item.info}}</p>
          </li>
          <template v-for="(imgItem, imgIndex) in item.imgArr" >
            <li :key="imgIndex" v-if="Array.isArray(imgItem.src)" class="spe-img">
              <img  v-for="(imgSrc, srcIndex) in imgItem.src" :key="srcIndex" :src="require(`assets/images/product/second/${imgSrc}`)" :class="imgItem.imgClass" alt="">
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
        <el-carousel :interval="4000" type="card" height="750px">
          <el-carousel-item v-for="item in 6" :key="item">
            <img :src="require('assets/images/product/one/banner.png')" alt="" style="height: 750px">
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
      scrollbarTrackTop: 0
    }
  },
  mounted(){
    this.scrollbarTrackTop=this.$refs.scrollbarTrack.getBoundingClientRect().top;
    console.log(this.scrollbarTrackTop)
    // 先给页面注册滚动事件
    document.addEventListener('scroll',this.Scroll, false);
    this.$once('hook:beforeDestroy', ()=>{
      console.log('销毁')
      document.removeEventListener('scroll', this.Scroll, false)
    })
  },
  methods: {
    getScrollTop() {
      var scroll_top = 0;
      if (document.documentElement && document.documentElement.scrollTop) {
          scroll_top = document.documentElement.scrollTop;
      }
      else if (document.body) {
          scroll_top = document.body.scrollTop;
      }
      return scroll_top;
    },
    Scroll(){
      let scrollbarTrackTop=this.$refs.scrollbarTrack.getBoundingClientRect().top;
      let bodyScrollTop=this.getScrollTop();
      if(scrollbarTrackTop<=0){
        this.$refs.scrollbarThumb.style.transform= `translate3d(0, ${bodyScrollTop-this.scrollbarTrackTop}px, 0)`
      }
      console.log(this.$refs.scrollbarTrack.getBoundingClientRect().top,this.getScrollTop())
      console.log(this.$refs)
    },
    goHome() {
      this.$router.push({ path: '/' });
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
  .product-container{
    width: 1579px;
    margin: 0 auto;
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
    .scrollbarTrack{
      height: 100%;
      z-index: 4;
      overflow: hidden;
      position: absolute;
      height: 100%;
      top: 0;
      width: 3px;
      left: 0;
      .backgroundContainer{
        width: 1px;
        height: 100%;
        background: rgba(255,255,255,.3);
      }
      .scrollbarThumb{
        position: absolute;
        width: 3px;
        height: 72px;
        background: #ffffff;
        transform: translate3d(0, 0, 0)
      }
    }
    .moduel {
      padding-bottom: 60px;
      border-bottom: 1px solid rgba(255,255,255,.3);
      display: flex;
      flex-wrap: wrap;
      li{
        margin-left: 50px;
        margin-top: 60px;
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
.el-carousel--horizontal{
  overflow: hidden;
}
.el-carousel__item{
  img{
    height: 1000px;
  }
}

</style>
