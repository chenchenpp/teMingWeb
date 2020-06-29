<template>
  <div class="brand-entry-container">
    <div class="banner">
      <div class="banner-text-area">
        <p class="main-title">加入特铭 · 让品牌传播更有力</p>
        <p class="sub-title">全屋定制产品库；全面的经营扶持政策；全维度营销引流和门店运营指导</p>
        <p class="sub-title">八大开业扶持政策保障加盟商利益，让品牌传播更有利</p>
        <p class="bottom-line"></p>
      </div>
    </div>
    <div class="content">
      <main>
        <scrollbarTrack></scrollbarTrack>
        <section class="first-section">
          <p class="main-title">特铭家具 · 品牌介绍</p>
          <p class="sub-title">高端家居 深度定制；30年工厂工艺沉淀，考究的工艺和严格的质量标准；国际设计视野，自主研发匠心产品；为有生活追求的你提供专属全</p>
          <ul class="img-intruduce">
            <li>
              <img src="../assets/images/brandEntry/first-content-img1.png" alt class="h450 w335" />
            </li>
            <li>
              <img src="../assets/images/brandEntry/first-content-img1.png" alt class="h450 w335" />
            </li>
            <li>
              <img src="../assets/images/brandEntry/first-content-img1.png" alt class="h450 w335" />
            </li>
            <li>
              <img src="../assets/images/brandEntry/first-content-img1.png" alt class="h450 w335" />
            </li>
          </ul>
        </section>

        <section class="second-section">
          <p class="main-title">我们的优势</p>
          <p class="sub-title">雅居乐，万科，绿地，复兴等地产战略合作；超过100位设计总监级别的合作；高坪效，高利润；全品类产品支持，超过交货期</p>
          <div class="img-intruduce">
            <div class="left-img mr60">
              <img src="../assets/images/brandEntry/second-content-img1.png" alt class="w520 h760" />
            </div>
            <div class="right-img tl">
              <img
                src="../assets/images/brandEntry/second-content-img2.png"
                alt
                class="w940 h350 mb60"
              />
              <img
                src="../assets/images/brandEntry/second-content-img3.png"
                alt
                class="w440 h350 mr60"
              />
              <img src="../assets/images/brandEntry/second-content-img4.png" alt class="w440 h350" />
            </div>
          </div>
        </section>

        <section class="third-section">
          <p class="main-title">加入特铭你可以得到什么</p>
          <p class="sub-title">全屋定制产品库；高定支持，自主研发个性化产品；全面的经营扶持政策；全维度营销引流和门店运营指导</p>
          <div class="img-intruduce">
            <img src="../assets/images/brandEntry/third-content-img1.png" alt class="w1054 h500" />
            <img src="../assets/images/brandEntry/third-content-img2.png" alt class="w404 h500" />
            <img
              src="../assets/images/brandEntry/third-content-img3.png"
              alt
              class="w730 h500 mt60"
            />
            <img
              src="../assets/images/brandEntry/third-content-img4.png"
              alt
              class="w730 h500 mt60"
            />
          </div>
        </section>

        <section class="forth-section">
          <p class="main-title">加入特铭你可以得到什么</p>
          <p class="sub-title">全屋定制产品库；高定支持，自主研发个性化产品；全面的经营扶持政策；全维度营销引流和门店运营指导</p>
          <div class="img-intruduce">
            <img
              src="../assets/images/brandEntry/forth-content-img1.png"
              alt
              class="w345 h345 mb60"
            />
            <img
              src="../assets/images/brandEntry/forth-content-img1.png"
              alt
              class="w345 h345 mb60"
            />
            <img
              src="../assets/images/brandEntry/forth-content-img1.png"
              alt
              class="w345 h345 mb60"
            />
            <img
              src="../assets/images/brandEntry/forth-content-img1.png"
              alt
              class="w345 h345 mb60"
            />
            <img src="../assets/images/brandEntry/forth-content-img1.png" alt class="w345 h345" />
            <img src="../assets/images/brandEntry/forth-content-img1.png" alt class="w345 h345" />
            <img src="../assets/images/brandEntry/forth-content-img1.png" alt class="w345 h345" />
            <img src="../assets/images/brandEntry/forth-content-img1.png" alt class="w345 h345" />
          </div>
          <span class="download mt60 mr60">下载加盟文档</span>
          <span class="upload mt60" @click="innerVisible=true">上传加盟文档</span>
        </section>
      </main>
    </div>
    <el-dialog width="30%" :visible.sync="innerVisible">
      <el-upload
        class="upload-demo"
        drag
        action="https://jsonplaceholder.typicode.com/posts/"
        multiple
        accept=".pdf, .word"
        :on-success="uploadSuccess"
        :on-error="uploadError"
      >
        <i class="el-icon-upload"></i>
        <div class="el-upload__text">
          将文件拖到此处，或
          <em>点击上传</em>
        </div>
        <div class="el-upload__tip" slot="tip" v-show="uploadSuccessFlag">上传成功！</div>
        <div class="el-upload__tip" slot="tip" v-show="uploadErrorFlag">上传失败！</div>
      </el-upload>
    </el-dialog>
    <tm-footer></tm-footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      innerVisible: false,
      uploadSuccessFlag: false,
      uploadErrorFlag: false
    };
  },
  methods: {
    uploadSuccess() {
      this.uploadSuccessFlag = true;
    },
    uploadError() {
      this.uploadErrorFlag = true;
    }
  }
};
</script>

<style lang="scss" scoped>
.h350 {
  height: 350px;
}
.h345 {
  height: 345px;
}
.h450 {
  height: 450px;
}
.h500 {
  height: 500px;
}
.h760 {
  height: 760px;
}
.w335 {
  width: 335px;
}
.w345 {
  width: 345px;
}
.w404 {
  width: 404px;
}
.w440 {
  width: 440px;
}
.w520 {
  width: 520px;
}
.w730 {
  width: 730px;
}
.w940 {
  width: 940px;
}
.w1054 {
  width: 1054px;
}
.tl {
  text-align: left;
}
.tr {
  text-align: right;
}
.tc {
  text-align: center;
}
.ml60 {
  margin-left: 60px;
}
.mr60 {
  margin-right: 60px;
}
.mt60 {
  margin-top: 60px;
}
.mb60 {
  margin-bottom: 60px;
}
.brand-entry-container {
  color: #dddddd;
  text-align: center;
  font-size: 24px;
  background: url("../assets/images/home/background.jpg");
  .banner {
    width: 100%;
    height: 600px;
    background: url(../assets/images/brandEntry/banner.jpg);
  }
  .banner-text-area {
    position: absolute;
    top: 287px;
    left: 200px;
    text-align: left;
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
    position: relative;
    overflow: hidden;
    font-size: initial;
    color: #dddddd;

    // &::after {
    //   content: "";
    //   width: 5px;
    //   height: 100px;
    //   position: fixed;
    //   top: 650px;
    //   left: 98px;
    //   // z-index: 1;
    //   background: rgba(255, 255, 255, 1);
    //   transition: all 0.5s;
    // }
  }
  .img-intruduce {
    display: flex;
    justify-content: space-between;
    margin-top: 60px;
  }
  section {
    margin-top: 60px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.3);
    padding-left: 100px;
    padding-bottom: 80px;
  }
  .first-section {
    margin-top: 80px;
  }
  .third-section .img-intruduce,
  .forth-section .img-intruduce {
    flex-wrap: wrap;
  }
  .download,
  .upload {
    display: inline-block;
    width: 150px;
    height: 34px;
    line-height: 34px;
    text-align: center;
    border: 1px solid rgba(221, 221, 221, 0.2);
    color: rgba(221, 221, 221, 0.5);
    cursor: pointer;
  }
}
</style>
