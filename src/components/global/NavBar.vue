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
        :default-active="$route.path"
        class="el-menu-demo"
        mode="horizontal"
        text-color="#DDDDDD"
        active-text-color="#DDDDDD"
        @select="handleSelect"
      >
        <el-menu-item index="/"> {{$t('headerTransInfo.home')}}</el-menu-item>
        <el-submenu index="/product">
          <template slot="title"> {{$t('headerTransInfo.product.title')}}</template>
          <el-menu-item index="/product/dejia">{{$t('headerTransInfo.product.jiaDe')}}</el-menu-item>
          <el-menu-item index="/product/molandi">{{$t('headerTransInfo.product.molandi')}}</el-menu-item>
          <el-menu-item index="/product/miss">{{$t('headerTransInfo.product.miss')}}</el-menu-item>
          <el-menu-item index="/product/dikesen">{{$t('headerTransInfo.product.dikesen')}}</el-menu-item>
          <el-menu-item index="/product/bier">{{$t('headerTransInfo.product.bier')}}</el-menu-item>
          <el-menu-item index="/product/kelinte">{{$t('headerTransInfo.product.kelinte')}}</el-menu-item>
          <el-menu-item index="/product/botiqieli">{{$t('headerTransInfo.product.botiqieli')}}</el-menu-item>
        </el-submenu>
        <el-menu-item index="/brandStory">{{$t('headerTransInfo.brandStory')}}</el-menu-item>
        <el-menu-item index="/explorationHall">{{$t('headerTransInfo.explorHall')}}</el-menu-item>
        <el-menu-item index="/dynamic/main">{{$t('headerTransInfo.temingDynamic')}}</el-menu-item>
        <el-submenu index="/joinUs || /BrandEntry">
          <template slot="title">{{$t('headerTransInfo.joinUs.title')}}</template>
          <el-menu-item index="/BrandEntry"><router-link to="/BrandEntry" tag="div">{{$t('headerTransInfo.joinUs.BrandPresence')}}</router-link></el-menu-item>
          <el-menu-item index="/joinUs"><router-link to="/joinUs" tag="div">{{$t('headerTransInfo.joinUs.recruit')}}</router-link></el-menu-item>
        </el-submenu>
        <el-menu-item index="7"><span class="line"></span></el-menu-item>
        <el-menu-item index="8">
            <i class="iconfont iconcart-full"></i>
            {{$t('headerTransInfo.enterMall')}}
        </el-menu-item>
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
  position: fixed;
  top: 0;
  left: 0;
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
  .el-menu-item i{
    color:#DDDDDD;
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
    font-size: 16PX;
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
