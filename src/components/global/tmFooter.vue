<template>
  <el-footer class="footer">
    <div class="top">
      <a href="">友情链接1</a>
      <a href="">友情链接2</a>
      <a href="">友情链接3</a>
      <a href="">友情链接4</a>
    </div>
    <div class="bottom">
      <div class="three-part">
        <a href="">
          <i class="iconfont iconqq"></i>
        </a>
        <a href="">
          <i class="iconfont iconweixin"></i>
        </a>
         <a href="">
          <i class="iconfont iconweibo"></i>
        </a>
        <a href="">
          <i class="iconfont icontuite"></i>
        </a>
        <a href="">
          <i class="iconfont iconfacebook"></i>
        </a>
      </div>
      <div class="address">
        <p>Copyright @2010 - 2020上海特铭家具有限公司</p>
        <p>沪ICP备06025014号</p>
      </div>
    </div>
  </el-footer>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "tmFooter",
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
    }
    .iconfont {
      font-size: 20px;
    }
  }
  .address{
    color:rgba(255,255,255,.5);
    font-size:14px;
    text-align: right;
    p:last-child{
      margin-top: 10px
    }
  }
}
</style>
