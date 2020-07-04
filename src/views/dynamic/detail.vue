<template>
  <div class="detail-main">
    <div class="content">
      <scrollbar-track></scrollbar-track>
      <el-breadcrumb class="breadcrumb" separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/dynamic/main' }">{{$t('tmDynamic.dynamicHome')}}</el-breadcrumb-item>
        <el-breadcrumb-item>{{articleForm['title'+language]}}</el-breadcrumb-item>
      </el-breadcrumb>
      <div class="article-main">
        <h1 class="title">{{articleForm['title'+language]}}</h1>
        <p class="mesInfo">{{articleForm.publishTime}} {{$t('tmDynamic.HomeFurnishing')}}</p>
        <div class="article-contet" v-html="articleForm['content'+language]"></div>
      </div>

    </div>
    <div class="switch-content">
      <span class="next"  v-if="articleForm.next">
        <span>{{$t('tmDynamic.nextPage')}}:</span>
        <span class="active" @click="goArticleHandle(articleForm.nextId)">{{articleForm['next'+language]}}</span>
      </span>
      <span class="pre" v-if="articleForm.pre">
        <span>{{$t('tmDynamic.prePage')}}:</span>
        <span class="active" @click="goArticleHandle(articleForm.preId)">{{articleForm['pre'+language]}}</span>
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
      articleForm: {
        content: null,
        title: '',
        titleEnglish: '',
        next: '',
        nextEnglish: '',
        nextId: '',
        publishTime: '',
        pre: '',
        preEnglish: '',
        preId: ''
      }
    };
  },
  watch: {
    '$route': function(to, from) {
      this.init();
    }
  },
  computed:{
    language() {
      return this.$i18n.locale == "CN" ? "" : "English";
    }
  },
  created(){
    this.init()
  },
  methods: {
    init(){
      this.$get(api.getdiscdetail, {
        id: this.$route.params.id
      }).then(res=>{
        Object.assign(this.$data, this.$options.data())
        this.articleForm=Object.assign(this.articleForm, res)
      })
    },
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
    flex-direction: row-reverse;
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
  .article-main{
    padding-top: 62px;
    padding-bottom: 82px;
    .title{
      font-size:24px;
      color:rgba(221,221,221,1);
    }
    .mesInfo{
      font-size:14px;
      color:rgba(221,221,221,1);
      margin-top: 18px
    }
    .article-contet{
      margin-top: 69px;
    }
  }
}
</style>
