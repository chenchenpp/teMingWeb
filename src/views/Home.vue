<template>
  <div class="home">
    <div class="clearfix">
      <div class="left">
        <img src="../assets/images/home/forth4.jpg" alt="">
      </div>
      <div class="right">
        <img src="../assets/images/home/forth5.jpg" alt="">
      </div>
    </div>
    <img alt="Vue logo" src="../assets/logo.png">
    <ul>
      <li class="shouye">首页</li>
      <li>关于</li>
    </ul>
  </div>
</template>

<script>
import { getUserComTravelersByUserId } from '@/util/request/api.js';
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue';
export default {
  name: 'home',
  components: {
    // HelloWorld
  },
  methods: {
    goAbout() {
      this.$router.push({ path: '/about' });
    },
    clickHttp() {
      this.$get(getUserComTravelersByUserId, {
        page: 1,
        rows: 10
      }).then((res) => {
        console.log(res);
      });
    }
  }
};
</script>
<style lang="scss" scoped>
.home{
  .clearfix{
    &::before{
      content: '';
      display: block;
    height: 0;
    clear: both;
    visibility: hidden;
    }
  }
  .shouye{
    background: $color-theme
  }
  .log{
    width: 2.1rem;
    height: 0.51rem;
  }
  .left{
    width: 30%;
    height: 550px;
    float: left;
    img{
      width: 100%;
      height: 100%;
    }
  }
  .right{
    float: right;
    width: 70%;
    height: 550px;
    img{
      width: 100%;
      // max-height: 550px;
      height: 100%;
    }
  }
}
</style>
