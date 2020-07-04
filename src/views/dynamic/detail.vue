<template>
  <div class="detail-main">
    <div class="content">
      <scrollbar-track></scrollbar-track>
      <el-breadcrumb class="breadcrumb" separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/dynamic/main' }">特铭动态</el-breadcrumb-item>
        <el-breadcrumb-item>疫情后时代，上海特铭五厂联动，全面投入运营</el-breadcrumb-item>
      </el-breadcrumb>
      <div class="article-contet">
        我是详情
      </div>
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
import api from '@/util/request/api';
export default {
  name: "dynamicetail",
  data() {
    return {
    };
  },
  created(){
    //getdiscdetail
    this.$get(api.getdiscdetail, {
        title: this.$route.params.id,
      }).then(res=>{
        console.log(res)
      })
  },
  methods: {
    goArticleHandle(id) {
      this.$router.push({
        name: 'dynamicDetail',
        params: {
          id
        }
      });
    }
  }
};
</script>
<style lang="scss" scoped>
.detail-main {
  width: 1620px;
  margin-left: 100px;
  ::v-deep .el-breadcrumb__inner.is-link{
    color: #ffffff;
    font-weight: normal;
  }
  .content{
    padding-left: 100px;
    padding-bottom: 82px;
    border-bottom: 1px solid rgba(255,255,255,.3);
    position: relative;
  }
  .breadcrumb{
    padding: 60px 0;
    border-bottom: 1px solid rgba(159,160,160,.5);
  }
  .switch-content{
    font-size:14px;
    margin: 60px 0;
    padding-left: 100px;
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
