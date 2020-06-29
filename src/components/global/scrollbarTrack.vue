<template>
  <div class="scrollbarTrack" ref="scrollbarTrack">
    <div class="scrollbarThumb" ref="scrollbarThumb"></div>
    <div class="backgroundContainer"></div>
  </div>
</template>

<script>
import { getScrollTop, getClientHeight } from '@/util/publicMethod';
export default {
  name: 'scrollbarTrack',
  data() {
    return {
      trackTop: 0
    }
  },
  mounted() {
    // 先给页面注册滚动事件
    this.trackTop = this.$refs.scrollbarTrack.getBoundingClientRect().top + document.documentElement.scrollTop;
    document.addEventListener('scroll', this.Scroll, false);
    this.$once('hook:beforeDestroy', () => {
      document.removeEventListener('scroll', this.Scroll, false);
    });
  },
  methods:{
    Scroll() {
      let windowHeight = getClientHeight();//当前窗口高度
      let scrollHeight = document.body.scrollHeight;//页面实际高度
      let bodyScrollTop = getScrollTop();//滚动条滚动高度
      let thumbHeight = this.$refs.scrollbarThumb.clientHeight;//进度条总长
      // let scrollbarThumbHeight = windowHeight / scrollHeight * windowHeight;//滑块实际高度
      // console.log('滑块高度', scrollbarThumbHeight);
      let thumbOffsetTop = ((windowHeight + bodyScrollTop) / scrollHeight) * windowHeight - thumbHeight;//滑块滚动相对视口占比
      // console.log('滑块相对父容器距离', thumbOffsetTop, bodyScrollTop)
      let thumbScrollTop = bodyScrollTop + thumbOffsetTop - this.trackTop;
      // console.log('滚动的位置', thumbScrollTop, this.trackTop)
      this.$refs.scrollbarThumb.style.transform = `translate3d(0, ${thumbScrollTop}px, 0)`;
    }
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
