<template>
  <div id="app">
    <nav-bar />
    <div class="scroll-top" :class="{'scroll-top-active': isTopShow}" @click="scrollTopHandle">
      <span style="display:inline-block;width: 30px;height:2px;background: rgba(255, 255, 255, .8);margin: 2px auto"></span>
      <i class="iconfont iconscrollTop"></i>
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
      isTopShow: false
    }
  },
  mounted(){
    // 先给页面注册滚动事件
    document.addEventListener('scroll',this.scrollTop, false);
    this.$once('hook:beforeDestroy', ()=>{
      console.log('销毁')
      document.removeEventListener('scroll', this.scrollTop, false)
    })
  },
  methods:{
    scrollTop() {
      let bodyScrollTop=getScrollTop();//滚动条滚动高度
      let windowHeight=getClientHeight();
      if(bodyScrollTop>windowHeight+500){
        this.isTopShow=true;
      } else {
        this.isTopShow=false;
      }
    },
    scrollTopHandle(){
      window.scrollTo(0, 0)

    }
  }
};
</script>
<style lang="scss">
@font-face {
  font-family: "zhanghaishan";
  src: url("./assets/font/zhanghaishan.ttf");
}
body{
  font-size: 16px;
}
#app {
  font-family: "zhanghaishan", "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  min-width: 1024px;
  max-width: 1920px;
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
  position: fixed;
  bottom: 100px;
  right: 100px;
  color: rgba(255, 255, 255, .8);
  opacity: 0;
  transition: opacity 1s ease-in-out;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  .iconfont{
    font-size: 60PX;
  }
}
.scroll-top-active{
  opacity: 1;
}
.el-menu--horizontal{
  // background: #292729!important;
}
.el-menu--popup{
  background: #FFFFFF!important;
  
  .el-menu-item{
    background: #FFFFFF!important;
    color: #2a282a!important;
    &:hover{
      background: #FFFFFF;
      color: #2a282a!important;
    }
  }
}
</style>
