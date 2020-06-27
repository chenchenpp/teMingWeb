<template>
  <div class="scrollbarTrack" ref="scrollbarTrack">
    <div class="scrollbarThumb" ref="scrollbarThumb"></div>
    <div class="backgroundContainer"></div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  name: 'scrollbarTrack',
  data(){
    return {

    }
  },
  mounted(){
    // 先给页面注册滚动事件
    document.addEventListener('scroll',this.Scroll, false);
    this.$once('hook:beforeDestroy', ()=>{
      console.log('销毁')
      document.removeEventListener('scroll', this.Scroll, false)
    })
  },
  methods:{
    getClientHeight(){
      var clientHeight=0;
      if(document.body.clientHeight&&document.documentElement.clientHeight){
        var clientHeight = (document.body.clientHeight<document.documentElement.clientHeight)?document.body.clientHeight:document.documentElement.clientHeight;
      }else {
        var clientHeight = (document.body.clientHeight>document.documentElement.clientHeight)?document.body.clientHeight:document.documentElement.clientHeight;
      }
      return clientHeight;
    },
    getScrollTop() {
      var scroll_top = 0;
      if (document.documentElement && document.documentElement.scrollTop) {
        scroll_top = document.documentElement.scrollTop;
      }else if (document.body) {
        scroll_top = document.body.scrollTop;
      }
      return scroll_top;
    },
    Scroll(){
      let windowHeight=this.getClientHeight();//当前窗口高度
      let scrollHeight=document.body.scrollHeight;//页面实际高度
      let bodyScrollTop=this.getScrollTop();//滚动条滚动高度
      let scrollbarAllHeight=this.$refs.scrollbarTrack.clientHeight;//进度条总长
      let thumbHeight=this.$refs.scrollbarThumb.clientHeight;//滑块的高度
      let scrollbarThumbHeight=windowHeight/scrollHeight*scrollbarAllHeight;//滑块实际高度
      // console.log('滑块高度', scrollbarThumbHeight)
      let thumbOffsetTop=((windowHeight+bodyScrollTop)/scrollHeight)*thumbHeight-scrollbarThumbHeight;//滑块相对父容器距离
      // console.log('滑块相对父容器距离', thumbOffsetTop)
      let thumbScrollTop=bodyScrollTop+thumbOffsetTop-thumbHeight;
      let scrollBarTop=this.$refs.scrollbarThumb.style.transform= `translate3d(0, ${thumbScrollTop}px, 0)`
    },
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.scrollbarTrack{
  height: 100%;
  z-index: 4;
  overflow: hidden;
  position: absolute;
  height: 100%;
  top: 0;
  width: 3PX;
  left: 0;
  .backgroundContainer{
    width: 1PX;
    height: 100%;
    background: rgba(255,255,255,.3);
  }
  .scrollbarThumb{
    position: absolute;
    width: 3PX;
    height: 72PX;
    background: #ffffff;
    transform: translate3d(0, 0, 0)
  }
}
</style>
