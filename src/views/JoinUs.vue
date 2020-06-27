<template>
  <div class="join-us-container">
    <div class="content">
      <div class="banner">
        <div class="banner-text-area">
          <p class="main-title">加入特铭 · 让品牌传播更有力</p>
          <p class="sub-title">全屋定制产品库；全面的经营扶持政策；全维度营销引流和门店运营指导</p>
          <p class="sub-title">八大开业扶持政策保障加盟商利益，让品牌传播更有利</p>
          <p class="bottom-line"></p>
        </div>
      </div>
      <main>
        <ul class="recruitment-position">
          <li @click="dialogVisible = true">
            <div class="top-img">
              <img src="../assets/images/joinUs/img1.png" alt />
              <div class="query-detail">
                <i class="iconfont iconmagnifying-glass"></i>
                <span>查看详情</span>
              </div>
            </div>
            <div class="bottom-info">
              <div class="left">
                <p class="main-title">市场经理 丨 10k-15K</p>
                <p class="sub-title">进品开始前的市场调研工作；根据市场及需求形成可行性课程资料根据推广工作的需求以及市场的客观要求，设计并不断推出各种</p>
              </div>
              <div class="right">
                <div class="download">下载文档</div>
                <div class="upload">上传简历</div>
              </div>
            </div>
          </li>
          <li>
            <div class="top-img">
              <img src="../assets/images/joinUs/img1.png" alt />
              <div class="query-detail">
                <i class="iconfont iconmagnifying-glass"></i>
                <span>查看详情</span>
              </div>
            </div>
            <div class="bottom-info">
              <div class="left">
                <p class="main-title">市场经理 丨 10k-15K</p>
                <p class="sub-title">进品开始前的市场调研工作；根据市场及需求形成可行性课程资料根据推广工作的需求以及市场的客观要求，设计并不断推出各种</p>
              </div>
              <div class="right">
                <div class="download">下载文档</div>
                <div class="upload">上传简历</div>
              </div>
            </div>
          </li>
          <li @click="dialogVisible = true">
            <div class="top-img">
              <img src="../assets/images/joinUs/img1.png" alt />
              <div class="query-detail">
                <i class="iconfont iconmagnifying-glass"></i>
                <span>查看详情</span>
              </div>
            </div>
            <div class="bottom-info">
              <div class="left">
                <p class="main-title">市场经理 丨 10k-15K</p>
                <p class="sub-title">进品开始前的市场调研工作；根据市场及需求形成可行性课程资料根据推广工作的需求以及市场的客观要求，设计并不断推出各种</p>
              </div>
              <div class="right">
                <div class="download">下载文档</div>
                <div class="upload">上传简历</div>
              </div>
            </div>
          </li>
          <li @click="dialogVisible = true">
            <div class="top-img">
              <img src="../assets/images/joinUs/img1.png" alt />
              <div class="query-detail">
                <i class="iconfont iconmagnifying-glass"></i>
                <span>查看详情</span>
              </div>
            </div>
            <div class="bottom-info">
              <div class="left">
                <p class="main-title">市场经理 丨 10k-15K</p>
                <p class="sub-title">进品开始前的市场调研工作；根据市场及需求形成可行性课程资料根据推广工作的需求以及市场的客观要求，设计并不断推出各种</p>
              </div>
              <div class="right">
                <div class="download">下载文档</div>
                <div class="upload">上传简历</div>
              </div>
            </div>
          </li>
        </ul>
      </main>
    </div>
    <el-dialog :visible.sync="dialogVisible" :before-close="handleClose" class="details-dialog">
      <div class="dialog-header">
        <p>职位：市场经理</p>
        <p>薪资：12K-15K</p>
      </div>
      <div class="dialog-body">
        <div class="left">
          <h1>岗位职责：</h1>
          <p>1、进品开始前的市场调研工作；</p>
          <p>2、根据市场及需求形成可行性课程资料；</p>
          <p>3、根据推广工作的需求以及市场的客观要求，设计并不断推出各种学习方案；</p>
          <p>4、承办所需的各项培训会议与市场推广活动；</p>
          <p> 5、收集分析公司增值服务产品及竞争伙伴的相关信息；</p>
          <p>6、加强与公司内部的协调，优化与公司外部的合作。</p>
        </div>
        <div class="middle-line"></div>
        <div class="right">
          <h1>岗位要求：</h1>
          <p>1、有较好的沟通能力、表达能力、逻辑思维能力，有激情，有耐心；</p>
          <p> 2、文字文案能力强；</p>
          <p>3、能熟练使用Word、PowerPoint的高级功能；</p>
          <p>4、对市场调查工作有一定的了解；</p>
          <p>5、有教育行业背景或经验者优先。</p>            
        </div>
      </div>
      <span slot="footer" class="dialog-footer">
        <div class="close" @click="dialogVisible = false">关闭</div>
        <div>
          <div class="download">下载Word</div>
           <div class="upload">上传简历</div>
        </div>
      </span>
    </el-dialog>
    <tm-footer></tm-footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dialogVisible: false
    };
  },
  methods: {
    handleClose() {}
  }
};
</script>

<style lang="scss" scoped>
.join-us-container {
  color: #dddddd;
  font-size: 24px;
  background: url("../assets/images/home/background.jpg");
  .banner {
    width: 100%;
    height: 600px;
    background: url("../assets/images/joinUs/banner.jpg");
  }
  .banner-text-area {
    position: absolute;
    top: 287px;
    left: 200px;
  }
  .main-title {
    font-size: 30px;
    margin-bottom: 30px;
  }
  .sub-title {
    font-size: 16px;
    margin-bottom: 10px;
  }
  .bottom-line {
    width: 40px;
    height: 1px;
    background: rgba(221, 221, 221, 1);
    opacity: 0.8;
    border-radius: 1px;
    margin-top: 30px;
  }
  main {
    margin-left: 100px;
    margin-right: 200px;
    border-left: 1px solid rgba(255, 255, 255, 0.2);
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);
    padding-bottom: 20px;
    position: relative;
    overflow: hidden;
    font-size: initial;
    color: #dddddd;

    &::after {
      content: "";
      width: 5px;
      height: 100px;
      position: fixed;
      top: 650px;
      left: 98px;
      // z-index: 1;
      background: rgba(255, 255, 255, 1);
      transition: all 0.5s;
    }
  }
  .top-img {
    width: 730px;
    height: 380px;
    position: relative;
    img {
      width: 730px;
      height: 380px;
    }
    .query-detail {
      display: none;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);

      z-index: 99;
      i {
        margin-right: 11px;
      }
    }
    &:hover {
      opacity: 0.5;
      // transition: all 1s ease-in;
      .query-detail {
        display: block;
        transition: all 1s;
      }
    }
  }
  .bottom-info {
    display: flex;
    padding: 40px;
    justify-content: space-between;
    .left {
      width: 410px;
    }
    .main-title {
      margin-bottom: 20px;
    }
    .sub-title {
      font-size: 14px;
      line-height: 21px;
    }
   
  }
   .download,
    .upload, .close {
      width: 94px;
      height: 30px;
      line-height: 30px;
      text-align: center;
      border: 1px solid rgba(221, 221, 221, 0.2);
      font-size: 14px;
      cursor: pointer;
      display: inline-block;
      &:hover {
        background: #6b6b6b;
      }
    }
    .download {
      margin-bottom: 14px;
    }
  .recruitment-position {
    display: flex;
    flex-wrap: wrap;
    padding-left: 100px;
    margin-top: 80px;
    font-size: 24px;
    text-align: left;
    justify-content: space-between;
    li {
      background: rgba(56, 54, 56, 1);
      box-shadow: 0px 20px 20px 0px rgba(0, 0, 0, 0.15);
      margin-bottom: 60px;
    }
  }
}
</style>
<style lang="scss">
.details-dialog {
  .el-dialog {
    width: 1360px;
    height: 480px;
    background: rgba(55, 54, 55, 1);
    box-shadow: 0px 20px 21px 0px rgba(0, 0, 0, 0.3);
    padding: 30px 60px;
    color: #dddddd;
  }
  .dialog-header {
    display: flex;
    justify-content: space-between;
    background: rgba(90, 90, 90, .5);
    height:73px;
    align-items: center;
    padding: 0 60px;
    font-size: 18px;
    color: #DDDDDD;
  }
  .el-dialog__body{
    padding: 0;
  }
  .el-dialog__header{
    display: none;
  }
  .dialog-body{
    display: flex;
    justify-content: space-between;
    text-align: left;
    padding: 40px 60px;
    color: #DDDDDD;
    font-weight: 300;
    border-bottom: 1px solid rgba(221,221,221,.1);
    .middle-line{
      height: 205px;
      width: 1PX;
      background:rgba(221,221,221,.2);
    }
    h1{
      font-size: 18PX;
      margin-bottom: 20px;
      font-weight: 300;
    }
    p{
      margin-bottom: 10px;
    }
  }
  .el-dialog__footer{
    padding: 0;
    padding-top: 30px;
  }
  .dialog-footer{
    display: flex;
    justify-content: space-between;
    .download{
      margin-right: 30px;
    }
  }
}
</style>
