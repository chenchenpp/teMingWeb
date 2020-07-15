<template>
  <div id="app">
    <nav-bar />
    <div class="scroll-top" :class="{'scroll-top-active': isTopShow}" @click="scrollTopHandle">
      <img src="./assets/images/common/top.png" alt="">
    </div>
    <router-view></router-view>
  </div>
</template>
<script>
import {getScrollTop, getClientHeight} from '@/util/publicMethod'
export default {
  name: "app",
  data(){
    return {
      isTopShow: false,
      timerScroll: null
    }
  },
  mounted() {
    // 先给页面注册滚动事件
    document.addEventListener('scroll', this.scrollTop, false);
    this.$once('hook:beforeDestroy', () => {
      document.removeEventListener('scroll', this.scrollTop, false)
    });
  },
  methods:{
    scrollTopHandle(className) {
      let that = this;
      let aniFun = function() {
        let bodyScrollTop = getScrollTop();//滚动条滚动高度
        if (bodyScrollTop > 0) {
          window.scrollTo(0, bodyScrollTop - 100);
          that.timerScroll = requestAnimationFrame(aniFun);
        } else {
          cancelAnimationFrame(that.timerScroll);
        }
      };
      if (this.timerScroll) {
        cancelAnimationFrame(this.timerScroll);
      }
      this.timerScroll = requestAnimationFrame(aniFun);

    },
    scrollTop() {
      let bodyScrollTop = getScrollTop();//滚动条滚动高度
      let windowHeight = getClientHeight();
      if (bodyScrollTop > windowHeight + 500) {
        this.isTopShow = true;
      } else {
        this.isTopShow = false;
      }
    }
  }
};
</script>

<style lang="scss">
body{
  font-size: 16px;
  min-width: 1024PX;
  max-width: 1920PX;
  width: 100%;
  height: 100%;
  overflow:auto;
  background: url('./assets/images/back-color.jpg') center repeat !important;
  background-size: 100%;
}
#app {
  width: 100%;
  font-family: 'zhanghaishan', "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0 auto;
}
.el-carousel--horizontal{
  overflow: hidden;
}
.icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
.scroll-top{
  width: 48px;
  height: 152px;
  position: fixed;
  bottom: 100px;
  right: 100px;
  opacity: 0;
  display: none;
  transition: opacity 1s ease-in-out;
  z-index: 1000;
  cursor: pointer;
  img{
    width: 100%;
    height: 100%;
  }
}
.scroll-top-active{
  display: block;
  opacity: .5;
  &:hover{
    opacity: 1;
  }
}
.el-menu--popup{
  background: #2A282A!important;
  .el-menu-item{
    background: #2A282A!important;
    color: #DDDDDD!important;
    &:hover{
      background: #2A282A;
      color: #DDDDDD!important;
    }
  }
}
</style>
