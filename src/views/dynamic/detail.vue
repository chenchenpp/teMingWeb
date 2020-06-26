<template>
  <div class="detail-content">
    <el-breadcrumb class="breadcrumb" separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/dynamic/main' }">特铭动态</el-breadcrumb-item>
      <el-breadcrumb-item>疫情后时代，上海特铭五厂联动，全面投入运营</el-breadcrumb-item>
    </el-breadcrumb>
    <div class="article-contet">
      我是文章
    </div>
    <div class="switch-content">
      <span class="pre">
        <span>上一篇:</span>
        <span class="active" @click="goArticleHandle(3)">寒冬终将过去，已然春暖花开 |上海特铭启幕2020新征途</span>
      </span>
      <span class="next">
        <span>下一篇:</span>
        <span class="active" @click="goArticleHandle(4)">抗击疫情 特铭在行动 | 齐心协力 平安返工</span>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "dynamicetail",
  data() {
    return {
    };
  },
  created(){
    console.log('详情页面')
  },
  methods: {
    goArticleHandle(id){
      this.$router.push({
        name: 'dynamicDetail',
        params: {
          id
        }
      })
    }
  }
};
</script>
<style lang="scss" scoped>
.detail-content {
  width: 1520px;
  margin: 0 auto;
  ::v-deep .el-breadcrumb__inner.is-link{
    color: #ffffff;
    font-weight: normal;
  }
  .breadcrumb{
    padding: 60px 0;
    border-bottom: 1px solid rgba(159,160,160,.5);
  }
  .switch-content{
    font-size:14px;
    margin: 60px 0;
    display: flex;
    justify-content: space-between;
    color:rgba(159,160,160,1);
    .active{
      display: inline-block;
      padding-left: 20px;
      cursor: pointer;
      &:hover{
        color: #ffffff
      }
    }
  }
}
</style>
