<template>
  <el-footer class="footer">
    <!-- <div class="top">
      <a href>{{$t('footerTransInfo.linkFirst')}}</a>
      <a href>{{$t('footerTransInfo.linkSecond')}}</a>
      <a href>{{$t('footerTransInfo.linkThird')}}</a>
      <a href>{{$t('footerTransInfo.linkForth')}}</a>
    </div> -->
    <div class="bottom">
      <div class="three-part">
        <a href>
          <i class="iconfont iconqq"></i>
        </a>
        <a href>
          <i class="iconfont iconweixin"></i>
          <i class="hide vrCode" z-st="footer_focusUs_wechat"></i>
        </a>
        <a href>
          <i class="iconfont iconweibo"></i>
        </a>
        <a href>
          <i class="iconfont icontuite"></i>
        </a>
        <a href>
          <i class="iconfont iconfacebook"></i>
        </a>
      </div>
      <div class="address">
        <p>{{$t('footerTransInfo.companyName')}} {{$t('footerTransInfo.companyNumber')}}</p>
        <p><img width="12px" :src="require('@/assets/images/police.png')" alt=""> {{$t('footerTransInfo.pliceNumber')}}</p>
      </div>
    </div>
  </el-footer>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "tmFooter"
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.footer {
  height: 176px !important;
  font-size: 14px;
  padding: 0 200px;
  background: rgba(42, 40, 42, 1);
  .top {
    height: 74px;
    line-height: 74px;
    text-align: left;
    border-bottom: 1px solid rgba(221, 221, 221, 0.2);
    a {
      color: rgba(255, 255, 255, 0.5);
      text-decoration: none;
      margin-right: 20px;
    }
  }
  .bottom {
    height: 102px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .three-part {
    a {
      color: #9fa0a0;
      text-decoration: none;
      margin-right: 30px;
      display: inline-block;
      width: 40px;
      height: 40px;
      border-radius: 50%;
      border: 1px solid rgba(159, 160, 160, 1);
      text-align: center;
      line-height: 40px;
      opacity: 0.5;
      &:hover {
        opacity: 1;
        .vrCode{
          display: block;
        }
      }
      &:nth-child(2) {
        position: relative;
      }
    }
    .iconfont {
      font-size: 20px;
    }
  }
  .address {
    color: rgba(255, 255, 255, 0.5);
    font-size: 14px;
    text-align: right;
    p:last-child {
      margin-top: 10px;
    }
  }
  .vrCode {
    position: absolute;
    background: url('../../assets/images/vrCode.jpg');
    background-size: 110px 110px;
    width: 110px;
    height: 110px;
    bottom: 60px;
    right: -35px;
    // bottom: 50%;
    // right: 50%;
    // transform: translate(50%,-50%);
    border-radius: 4px;
    z-index: 10;
    display: none;
    &::after {
      content: "";
      border-top: 10px solid #fff;
      border-right: 10px solid transparent;
      border-bottom: none;
      border-left: 10px solid transparent;
      position: absolute;
      bottom: -10px;
      left: 50%;
      margin-left: -10px;
      display: block;
    }
  }
}
</style>
