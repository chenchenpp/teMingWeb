<template>
  <div class="dynamic-main">
    <nav-bar />
    <div class="container">
      <div class="banner-content">
        <img :src="require('assets/images/dynamic/banner.jpg')" alt="" />
        <div class="info">
          <p class="title animated fadeInDown">特铭最新动态</p>
          <p class="des"> 坚持以“人”为本的理性化厨房设计理念 <br/> 始终注重产品细节，注重人性化设计，注重绿色环保</p>
        </div>
      </div>
      <router-view></router-view>
    </div>
    <tm-footer></tm-footer>
  </div>
</template>
<script>
export default {
  name: "dynamic",
  data() {
    return {
      articleList: [
        {
          imgSrc: "",
          title: "冲刺630，使命必达，疫情之下",
          des: "上海特铭以奔跑者的姿态全力以赴",
          date: "2020年4月15日",
          isModal: false
        },
        {
          imgSrc: "",
          title: "冲刺630，使命必达，疫情之下",
          des: "上海特铭以奔跑者的姿态全力以赴",
          date: "2020年4月15日",
          isModal: false
        },
        {
          imgSrc: "",
          title: "冲刺630，使命必达，疫情之下",
          des: "上海特铭以奔跑者的姿态全力以赴",
          date: "2020年4月15日",
          isModal: false
        },
        {
          imgSrc: "",
          title: "冲刺630，使命必达，疫情之下",
          des: "上海特铭以奔跑者的姿态全力以赴",
          date: "2020年4月15日",
          isModal: false
        },
        {
          imgSrc: "",
          title: "冲刺630，使命必达，疫情之下",
          des: "上海特铭以奔跑者的姿态全力以赴",
          date: "2020年4月15日",
          isModal: false
        },
        {
          imgSrc: "",
          title: "冲刺630，使命必达，疫情之下",
          des: "上海特铭以奔跑者的姿态全力以赴",
          date: "2020年4月15日",
          isModal: false
        }
      ]
    };
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
