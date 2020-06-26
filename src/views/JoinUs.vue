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
        </ul>
      </main>
    </div>
    <tm-footer></tm-footer>
  </div>
</template>

<script>
export default {};
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
      transition: all 1s ease-in;
      z-index: 99;
      i{
        margin-right: 11px;
      }
    }
    &:hover {
      opacity: 0.5;
      .query-detail {
        display: block;
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
    .main-title{
       margin-bottom: 20px;
    }
    .sub-title{
      font-size: 14px;
      line-height: 21px;
    }
    .download, .upload{
      width:94px;
      height:30px;
      line-height: 30px;
      text-align: center;
      border:1px solid rgba(221,221,221,.2);
      font-size: 14px;
    }
    .download{
      margin-bottom: 14px;
    }
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
