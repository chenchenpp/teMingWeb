<template>
  <el-container class="header">
    <div class="head-left">
      <img src="../../assets/images/home/logo.png" alt class="logo" />
      <el-dropdown trigger="click" @command="handleCommand">
        <span class="el-dropdown-link">
          <span>{{langType}}</span>
          <i class="iconfont icondown"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item command="CN">CN</el-dropdown-item>
          <el-dropdown-item command="EN">EN</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>

    <div class="head-right">
      <el-menu
        :default-active="activeIndex"
        class="el-menu-demo"
        mode="horizontal"
        text-color="#DDDDDD"
        active-text-color="#DDDDDD"
        @select="handleSelect"
      >
        <el-menu-item index="/"> {{$t('message.home')}}</el-menu-item>
        <!-- <el-menu-item index="2">

          <router-link to="/product" tag="div">产品中心</router-link>
        </el-menu-item> -->
        <el-submenu index="/product">
          <template slot="title">产品中心</template>
          <el-menu-item index="/product">贾德系列</el-menu-item>
          <el-menu-item index="/product">莫兰蒂系列</el-menu-item>
          <el-menu-item index="/product">密斯系列</el-menu-item>
          <el-menu-item index="/product">迪克森系列</el-menu-item>
        </el-submenu>
        <el-menu-item index="/brandStory">品牌故事</el-menu-item>
        <el-menu-item index="4">探索展厅</el-menu-item>
        <el-menu-item index="/dynamic/main">特铭动态</el-menu-item>
        <el-menu-item index="6">加入我们</el-menu-item>
        <el-menu-item index="7"><span class="line"></span></el-menu-item>
        <el-menu-item index="8">
            <i class="iconfont iconcart-full"></i>
            进入商城
        </el-menu-item>
        <!-- <el-submenu index="2">
          <template slot="title">我的工作台</template>
          <el-menu-item index="2-1">选项1</el-menu-item>
          <el-menu-item index="2-2">选项2</el-menu-item>
          <el-menu-item index="2-3">选项3</el-menu-item>
          <el-submenu index="2-4">
            <template slot="title">选项4</template>
            <el-menu-item index="2-4-1">选项1</el-menu-item>
            <el-menu-item index="2-4-2">选项2</el-menu-item>
            <el-menu-item index="2-4-3">选项3</el-menu-item>
          </el-submenu>
        </el-submenu> -->
        <!-- <el-menu-item index="3" disabled>消息中心</el-menu-item>
        <el-menu-item index="4">
          <a href="https://www.ele.me" target="_blank">订单管理</a>
        </el-menu-item> -->
      </el-menu>
    </div>
  </el-container>
</template>

<script>
export default {
  data() {
    return {
      activeIndex: '/',
      langType:'CN'
    };
  },
  created(){
    this.activeIndex=this.$route.path
  },
  methods: {
    handleCommand(command) {
      console.log(command);
      this.langType = command;
      this.$i18n.locale = command;
    },
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
      this.activeIndex = key;
      this.$router.push(key)
    }
  }
};
</script>

<style lang="scss" scoped>
.header {
  background: rgba(255, 255, 255, 0.2);
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100px;
  padding: 0 80px;
  width: 100%;
  position: absolute;
  top: 0;
  z-index: 99;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  .head-left {
    display: flex;
    align-items: center;
  }
  .logo {
    width: 210px;
    height: 51px;
    margin-right: 40px;
  }
  .el-dropdown {
    color: #dddddd;
    text-align: center;
    cursor: pointer;
    // font-size: 16PX;
    span{
        display: inline-block;
        width: 100%;
    }
    i{
        font-size: 12px;
    }
  }
  .head-right {
    font-size: 16px;
  }
}
</style>
<style lang="scss">
.header {
  .el-menu.el-menu--horizontal {
    border-bottom: none;
    background: transparent;
  }
  .el-menu-item,
  .el-submenu,
  .el-submenu__title {
    height: 100px;
    line-height: 100px;
  }
  .el-submenu__title{
    font-size: 16PX;
    .el-submenu__icon-arrow{
      font-size: 16PX;
      color: #ffffff;
    }
  }
  .el-menu--popup{
    .el-menu-item{
      height: 40PX!important;
    }
  }

  .el-menu-item{
    font-size: 16PX;
    position: relative;
    &:hover {
      background-color: transparent!important;
    }
    &:focus {
      background-color: transparent!important;
    }
    div{
      display: inline-block;
      height: 100%;
    }
  }
  .el-menu-item.is-active {
    border-bottom: none;
    &::after {
      content: "";
      width: 100%;
      height: 1px;
      background: rgba(255, 255, 255, 0.9);
      position: absolute;
      bottom: 0;
      left: 0;
    }
  }
  .el-menu--horizontal > .el-submenu .el-submenu__title {
    height: 100px;
    line-height: 100px;
  }
  .el-submenu__title {
    position: relative;
    &:hover {
      background-color: transparent !important;
    }
    &:focus {
      background-color: transparent;
    }
  }
  .line{
      width: 1px;
      height: 16px;
      display: inline-block;
      background: rgba(255, 255, 255, 0.2);
  }
}
</style>
