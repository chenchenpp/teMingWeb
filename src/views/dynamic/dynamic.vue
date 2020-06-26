<template>
  <div class="dynamic-main">
    <nav-bar />
    <div class="container">
      <div class="banner-content">
        <img :src="require('assets/images/dynamic/banner.png')" alt="">
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
    checkDetailHandle(item){
      console.log(item)
    },
    changePage(val){
      console.log('页数', val)
    }
  }
};
</script>
<style lang="scss" scoped>
.dynamic-main {
  width: 100%;
  height: 100%;
  background: #2a282a;
  .banner-content {
    width: 100%;
    img {
      width: 100%;
    }
  }
}

</style>
