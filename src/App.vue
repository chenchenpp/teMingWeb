<template>
  <div id="app">
    <el-container>
      <el-header class="header">
        <div class="head-left">
          <img src="./assets/images/home/logo.png" alt="" class="logo">
          <el-dropdown>
            <span class="el-dropdown-link">
              CN<i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>CN</el-dropdown-item>
              <el-dropdown-item>EN</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>

        <div class="head-right">
            <div class="top-nav">
                <span class="menu"><img src="./assets/images/home/nav-icon.png" alt=""> </span>
                <ul>
                    <li>
                        <a href="index.html" class="active">
                            <span class="lang-ch">首页</span>
                            <span class="lang-en hidden">Home</span>
                        </a>
                    </li>
                    <li>
                        <a href="about.html">
                            <span class="lang-ch">产品中心</span>
                            <span class="lang-en hidden">Home</span>
                        </a>
                    </li>
                    <li>
                        <a href="typo.html">
                            <span class="lang-ch">品牌故事</span>
                            <span class="lang-en hidden">Home</span>
                        </a>
                    </li>
                    <li>
                        <a href="gallery.html">
                            <span class="lang-ch">探索展厅</span>
                            <span class="lang-en hidden">Home</span>
                        </a>
                    </li>
                    <li>
                        <a href="contact.html">
                            <span class="lang-ch">特铭动态</span>
                            <span class="lang-en hidden">Home</span>
                        </a>
                    </li>
                    <li>
                        <a href="contact.html">
                            <span class="lang-ch">加入我们</span>
                            <span class="lang-en hidden">Home</span>
                        </a>
                    </li>
                    <li class="middle-line"></li>
                    <li>
                        <a href="contact.html">
                            <span class="lang-ch">
            <i class="iconfont iconcart-full">&#xe746;</i>
            进入商城
          </span>
                            <span class="lang-en hidden">
            Home
          </span>
                        </a>
                    </li>

                    <div class="menu-language">
                        <span class="js-language-text">CN</span>
                        <p class="cn-language">CN</p>
                        <p class="en-language">EN</p>
                    </div>

                </ul>
            </div>
        </div>
      </el-header>
              <router-view></router-view>

      <!-- <el-footer class="footer">
        <i class="iconfont iconcart-full"></i>
        我是脚步
      </el-footer> -->
    </el-container>

  </div>
</template>
<script>
export default {
  name: 'app',
  created(){
    console.log('我是入口')
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
  font-family: 'zhanghaishan', 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
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
.header{
  background: rgba($color: #000000, $alpha: 0.5);
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 1rem;
  font-size: 16px;
  .head-left{
    display: flex
  }
  .logo{
    width: 2.1rem;
    height: 0.51rem;
  }
  .el-dropdown{
   height: 1rem;
   line-height: 1rem;
  }
}
.footer{
  font-size: 16px
}
</style>
