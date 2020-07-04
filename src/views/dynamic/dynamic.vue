<template>
  <div class="dynamic-main">
    <nav-bar />
    <div class="container">
      <div class="banner-content">
        <img :src="imageUrl" alt="" />
        <div class="info">
          <p class="title animated fadeInDown">{{headerBanner['title'+language]}}</p>
          <p class="des">{{headerBanner['info'+language]}}</p>
        </div>
      </div>
      <router-view></router-view>
    </div>
    <tm-footer></tm-footer>
  </div>
</template>
<script>
import api from '@/util/request/api';
export default {
  name: "dynamic",
  data() {
    return {
      imageUrl: null,
      headerBanner: {}
    };
  },
  computed:{
    language() {
      return this.$i18n.locale == "CN" ? "" : "English";
    }
  },
  created(){
    this.$get(api.getPageHttp, {
        imageBelongPage: 5,
        en: 0
      }).then(res => {
        console.log(res)
        this.headerBanner=res.arrList[0];
        this.imageUrl=this.headerBanner.imgArr[0].imageUrl
      })

  },
  methods: {
    enter(item) {
      item.isModal = true;
    },
    leave(item) {
      item.isModal = false;
    },
  }
};
</script>
<style lang="scss" scoped>
.dynamic-main {
  width: 100%;
  height: 100%;
  .banner-content {
    width: 100%;
    height: 600px;
    position: relative;
    img {
      width: 100%;
      height: 600px;
    }
    .info{
      position: absolute;
      font-size:16PX;
      color:rgba(221,221,221,1);
      line-height:24px;
      left: 200px;
      top: 287px;
      text-align: left;
      &::after{
        content: '';
        display: block;
        width:40px;
        height:1px;
        background:rgba(221,221,221,.8);
        margin-top: 30px;
      }
      .title{
        font-size:30PX;
      }
      .des{
        margin-top: 30px;
      }
    }
  }
}
</style>
