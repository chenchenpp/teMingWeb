<template>
  <el-container class="header">
    <div class="head-left">
      <img src="../../assets/images/home/logo.png" alt class="logo" />
      <el-dropdown trigger="click">
        <span class="el-dropdown-link">
          <span>CN</span>
          <i class="iconfont icondown"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>CN</el-dropdown-item>
          <el-dropdown-item>EN</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>

    <div class="head-right">
      <el-menu
        :default-active="activeIndex"
        class="el-menu-demo"
        mode="horizontal"
        @select="handleSelect"
        text-color="#DDDDDD"
        active-text-color="#DDDDDD"
      >
        <el-menu-item index="1">首页</el-menu-item>
        <el-menu-item index="2">产品中心</el-menu-item>
        <el-menu-item index="3">品牌故事</el-menu-item>
        <el-menu-item index="4">探索展厅</el-menu-item>
        <el-menu-item index="5">特铭动态</el-menu-item>
        <el-menu-item index="6">加入我们</el-menu-item>
        <el-menu-item index="7"></el-menu-item>
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
      activeIndex: "1",
      activeIndex2: "1"
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
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
    font-size: 16px;
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
  .el-menu-item{
      font-size: 16px;
    position: relative;
    &:hover {
      background-color: transparent!important;
    }
    &:focus {
      background-color: transparent!important;
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
}
</style>