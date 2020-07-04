<template>
  <div class="article-content">
    <scrollbar-track></scrollbar-track>
    <ul class="article-items">
      <li v-for="(item, index) in articleList" :key="index">
        <div
          class="image-box"
          @mouseover="enter(item)"
          @mouseleave="leave(item)"
        >
          <img :src="`/${item.imgUrl}`" alt="">
          <div
            class="modal"
            :class="{ 'img-modal': item.isModal }"
            @click="checkDetailHandle(item)"
          >
            <i class="iconfont iconmagnifying-glass"></i>
            <span style="margin-left: 10px; display: inline-block;"
              >{{$t('tmDynamic.viewDetails')}}</span
            >
          </div>
        </div>
        <div class="des-box">
          <p>{{ item['title'+language] }}</p>
          <p>{{ item['des'+language] }}</p>
        </div>
        <div class="date-box">
          <span>{{ item.publishTime }}</span>
          <span>&gt;</span>
        </div>
      </li>
    </ul>
    <div class="pagination-box">
      <el-pagination
        :prev-text="$t('tmDynamic.homePage')"
        background
        layout="prev, pager, next"
        @current-change="changePage"
        :total="pagiTotal"
        :pageSize="pageSize"
      >
      </el-pagination>
    </div>
  </div>
</template>
<script>
import api from '@/util/request/api';
export default {
  name: "dynamicMain",
  data() {
    return {
      articleList: [
        {
          id: 1,
          imgSrc: "",
          title: "冲刺630，使命必达，疫情之下",
          des: "上海特铭以奔跑者的姿态全力以赴",
          date: "2020年4月15日",
          isModal: false,
        },
        {
          id: 2,
          imgSrc: "",
          title: "冲刺630，使命必达，疫情之下",
          des: "上海特铭以奔跑者的姿态全力以赴",
          date: "2020年4月15日",
          isModal: false,
        },
        {
          id: 3,
          imgSrc: "",
          title: "冲刺630，使命必达，疫情之下",
          des: "上海特铭以奔跑者的姿态全力以赴",
          date: "2020年4月15日",
          isModal: false,
        },
        {
          id: 4,
          imgSrc: "",
          title: "冲刺630，使命必达，疫情之下",
          des: "上海特铭以奔跑者的姿态全力以赴",
          date: "2020年4月15日",
          isModal: false,
        },
        {
          id: 5,
          imgSrc: "",
          title: "冲刺630，使命必达，疫情之下",
          des: "上海特铭以奔跑者的姿态全力以赴",
          date: "2020年4月15日",
          isModal: false,
        },
        {
          id: 6,
          imgSrc: "",
          title: "冲刺630，使命必达，疫情之下",
          des: "上海特铭以奔跑者的姿态全力以赴",
          date: "2020年4月15日",
          isModal: false,
        },
      ],
      pagiTotal: 0,
      pageSize: 6
    };
  },
  computed:{
    language() {
      return this.$i18n.locale == "CN" ? "" : "English";
    }
  },
  created(){
    this.getCurPageDataHandle()
  },
  methods: {
    getCurPageDataHandle(curIndex=0){
      this.$get(api.getDiscList, {
        limit: this.pageSize,
        offset: curIndex,
      }).then(res=>{
        if(res.rows.length){
          this.pagiTotal=res.total;
          this.articleList=res.rows;
          this.articleList.forEach(item=>{
            this.$set(item, 'isModal', false)
          })
        }
      })
    },
    enter(item) {
      item.isModal = true;
    },
    leave(item) {
      item.isModal = false;
    },
    checkDetailHandle(item) {
      this.$router.push({
        name: "dynamicDetail",
        params: {
          id: item.title,
        },
      });
    },
    changePage(val) {
      this.getCurPageDataHandle(val-1)
    },
  },
};
</script>
<style lang="scss" scoped>
.article-content {
  width: 1620px;
  margin-left: 100px;
  position: relative;
  border-bottom: 1px solid rgba(255, 255, 255, 0.3);
  margin-bottom: 60px;
  .article-items {
    font-size: 16px;
    color: rgba(221, 221, 221, 0.8);
    display: flex;
    flex-wrap: wrap;
    margin-left: 39px;
    li {
      width: 466px;
      height: 450px;
      padding: 0 30px;
      background: #383638;
      box-sizing: border-box;
      margin-top: 60px;
      margin-left: 60px;
    }
    .image-box {
      width: 406px;
      height: 240px;
      border: 1px solid #dddddd;
      margin-top: 30px;
      position: relative;
      overflow: hidden;
      img {
        width: 100%;
        height: 100%;
      }
      .modal {
        position: absolute;
        top: 0;
        z-index: 100;
        width: 100%;
        height: 100%;
        background: rgba(42, 40, 42, 0.5);
        display: flex;
        justify-content: center;
        align-items: center;
        transform: translateY(100%);
        transition: transform 1s ease-in-out;
        cursor: pointer;
      }
      .img-modal {
        transform: translateY(0);
      }
    }

    .des-box {
      margin-top: 32px;
      padding-bottom: 30px;
      border-bottom: 1px solid rgba(255, 255, 255, 0.2);
      text-align: left;
      line-height: 30px;
    }
    .date-box {
      margin-top: 20px;
      display: flex;
      justify-content: space-between;
    }
  }
  .pagination-box {
    height: 36px;
    padding: 60px 0;
    display: flex;
    justify-content: center;
  }
  ::v-deep .el-pagination.is-background .btn-prev,
  ::v-deep .el-pagination.is-background .btn-next {
    width: 50px;
    height: 36px;
    border: 1px solid rgba(159, 160, 160, 1);
    background: none;
  }
  ::v-deep .el-pagination.is-background .el-pager li:not(.disabled).active {
    border: 1px solid #ffffff;
    background: none;
  }
  ::v-deep .el-pager {
    .more {
      width: 36px;
      height: 100%;
      line-height: 36px;
      background: none;
    }
    .number {
      width: 36px;
      height: 36px;
      text-align: center;
      line-height: 36px;
      background: none;
      border: 1px solid rgba(159, 160, 160, 1);
    }
  }
}
</style>
