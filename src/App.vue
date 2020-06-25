<template>
  <div id="app">

      <router-view></router-view>
  
  </div>
</template>
<script>
export default {
  name: "app",
  components:{
  },
  created() {
  }
};
</script>
<style>
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
}

.icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}

</style>
<style lang="scss" scoped>
.el-main{
  width:100%;
  height:100%;
  padding: 0;
}
</style>
