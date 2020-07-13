<template>
  <div class="join-us-container">
    <div class="content">
      <div class="banner" :style="{'background':`url(${$host}${bannerData[0].imageUrl})`}">
        <div class="banner-text-area">
          <p class="main-title" v-if="bannerData[0]" v-html="bannerData[0][`mainTitle${language}`]"></p>
          <p class="sub-title" v-if="bannerData[0]" v-html="bannerData[0][`subTitle${language}`]"></p>
          <p class="bottom-line"></p>
        </div>
      </div>

      <main>
        <scrollbarTrack></scrollbarTrack>
        <ul class="recruitment-position">
          <li @click="queryDetail(key)" v-for="(item, key) in firstContentData" :key="item.id">
            <div class="top-img">
              <img v-lazy="$host + item.imageUrl" alt />
              <div class="query-detail">
                <i class="iconfont iconmagnifying-glass"></i>
                <span>{{$t('joinUsInfo.queryDetail')}}</span>
              </div>
            </div>
            <div class="bottom-info">
              <div class="left">
                <p class="main-title" v-if="item">
                  <span v-html="item[`position${language}`]"></span>
                  <span style="vertical-align: text-top;">|</span>
                  <span v-html="item['salaryRange']"></span>
                </p>
                <p class="sub-title" v-if="item" v-html="item[`positionDescription${language}`]"></p>
              </div>
              <div class="right">
                <div class="download">{{$t('joinUsInfo.downloadDoc')}}</div>
                <div class="upload">{{$t('joinUsInfo.uploadDoc')}}</div>
              </div>
            </div>
          </li>
        </ul>
      </main>
    </div>
    <el-dialog :visible.sync="dialogVisible" :before-close="handleClose" class="details-dialog">
      <el-dialog width="30%" :visible.sync="innerVisible" append-to-body>
        <el-upload
          class="upload-demo"
          drag
          action="http://106.52.5.152/sendEmail/upload.do"
          multiple
          accept=".pdf, .doc"
          :on-success="uploadSuccess"
          :on-error="uploadError"
          :open="innerDialogOpen"
        >
          <i class="el-icon-upload"></i>
          <div class="el-upload__text">
            将文件拖到此处，或
            <em>点击上传</em>
          </div>
          <div
            class="el-upload__tip"
            slot="tip"
            v-show="uploadSuccessFlag"
          >{{$t('joinUsInfo.uploadSuccess')}}</div>
          <div
            class="el-upload__tip"
            slot="tip"
            v-show="uploadErrorFlag"
          >{{$t('joinUsInfo.uploadError')}}</div>
        </el-upload>
      </el-dialog>
      <div class="dialog-header">
        <p v-html="$t('joinUsInfo.position') + '：'+ joinUsDetail[`position${language}`]"></p>
        <p v-html="$t('joinUsInfo.salaryRange')+'：'+ joinUsDetail[`salaryRange`]"></p>
      </div>
      <div class="dialog-body">
        <div class="left">
          <h1>{{$t('joinUsInfo.positionDescription')}}：</h1>
          <p v-html="joinUsDetail[`positionDescription${language}`]" class="p-info"></p>
        </div>
        <div class="middle-line"></div>
        <div class="right">
          <h1>{{$t('joinUsInfo.positionRequirement')}}：</h1>
          <p v-html="joinUsDetail[`positionRequirement${language}`]" class="p-info"></p>
        </div>
      </div>
      <span slot="footer" class="dialog-footer">
        <div class="close" @click="dialogVisible = false">{{$t('joinUsInfo.close')}}</div>
        <div>
          <div
            class="download"
            style="display:inline-block"
            @click="download"
          >{{$t('joinUsInfo.downloadWord')}}</div>
          <div
            class="upload"
            style="display:inline-block"
            @click="innerVisible = true"
          >{{$t('joinUsInfo.uploadDoc')}}</div>
        </div>
      </span>
    </el-dialog>

    <tm-footer></tm-footer>
  </div>
</template>

<script>
import scrollReveal from "scrollreveal";
export default {
  data() {
    return {
      dialogVisible: false,
      innerVisible: false,
      uploadSuccessFlag: false,
      uploadErrorFlag: false,
      bannerData: [
        {
          createTime: null,
          delFlag: null,
          en: null,
          id: 21,
          imageBelongPage: "3",

          imageSubclass: "品牌故事第一个模块",
          imageUrl: "/static_img/585818b2-c29c-4650-9c5f-a0e433978071.jpg",
          linkUrl: "",
          mainTitle: "2",
          mainTitleEnglish: "模块的英文主标题",
          name: null,
          no: "",
          subTitle: "sdf",
          subTitleEnglish: "模块的英文副标题",
          imageDescTitle: "图片的主标题",
          imageDescTitleEnglish: "图片的英文主标题",
          imageDescription: "图片的副标题",
          imageDescriptionEnglish: "图片的英文副标题"
        },
        {
          createTime: null,
          delFlag: null,
          en: null,
          id: 24,
          imageBelongPage: "3",
          imageSubclass: "品牌故事第一个模块",
          imageUrl: "/static_img/3e44ab81-0e58-4e69-8bd1-5be2a29301b4.png",
          linkUrl: "dfsd",
          mainTitle: "ss",
          mainTitleEnglish: null,
          name: null,
          no: "",
          subTitle: "sdf",
          subTitleEnglish: null,
          imageDescTitle: "图片的主标题",
          imageDescTitleEnglish: "图片的英文主标题",
          imageDescription: "图片的副标题",
          imageDescriptionEnglish: "图片的英文副标题"
        },
        {
          createTime: null,
          delFlag: null,
          en: null,
          id: 25,
          imageBelongPage: "3",
          imageSubclass: "品牌故事第一个模块",
          imageUrl: "/static_img/f66fab6f-ddfd-466d-a368-8522264d8a7b.png",
          linkUrl: "",
          mainTitle: "sdf",
          mainTitleEnglish: null,
          name: null,
          no: "",
          subTitle: "1231",
          subTitleEnglish: null,
          imageDescTitle: "图片的主标题",
          imageDescTitleEnglish: "图片的英文主标题",
          imageDescription: "图片的副标题",
          imageDescriptionEnglish: "图片的英文副标题"
        },
        {
          createTime: null,
          delFlag: null,
          en: null,
          id: 25,
          imageBelongPage: "3",
          imageSubclass: "品牌故事第一个模块",
          imageUrl: "/static_img/f66fab6f-ddfd-466d-a368-8522264d8a7b.png",
          linkUrl: "",
          mainTitle: "sdf",
          mainTitleEnglish: null,
          name: null,
          no: "",
          subTitle: "1231",
          subTitleEnglish: null,
          imageDescTitle: "图片的主标题",
          imageDescTitleEnglish: "图片的英文主标题",
          imageDescription: "图片的副标题",
          imageDescriptionEnglish: "图片的英文副标题"
        }
      ],
      firstContentData: [],
      joinUsDetail: {}
    };
  },
  methods: {
    queryDetail(id) {
      this.joinUsDetail = this.firstContentData[id];
      this.dialogVisible = true;
    },
    handleClose() {},
    closeUploadDialog() {
      this.isShowDownloadDialog = false;
    },
    uploadSuccess() {
      this.uploadSuccessFlag = true;
      this.innerVisible = false;
    },
    uploadError() {
      this.uploadErrorFlag = true;
    },
    initScroll() {
      scrollReveal().reveal("img", {
        reset: true,
        scale: 1.1,
        opacity: 0.8,
        delay: 0, // 延时时间
        distance: "0px", // 执行距离
        duration: 2000, // 执行时长
        easing: "ease" // 执行速度
      });
    },
    getPageData() {
      let that = this;
      this.$get("/join/getJoinList.do")
        .then(res => {
          that.firstContentData = res.rows;
        })
        .catch();
    },
    download() {
      // this.$get("http://106.52.5.152/static_html/test.docx");
      window.open('http://106.52.5.152/static_html/test.docx');
    },
    innerDialogOpen() {

    }
  },
  mounted() {
    this.getPageData();
    this.initScroll();
  },
  computed: {
    language() {
      let lang = this.$i18n.locale == "CN" ? "" : "English";
      return lang;
    }
  }
};
</script>

<style lang="scss" scoped>
.join-us-container {
  color: #dddddd;
  font-size: 24px;
  background: url("../assets/images/home/background.jpg");
  .p-info{
    line-height: 30px;
  }
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
    font-size: 28px;
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
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);
    padding-bottom: 20px;
    position: relative;
    overflow: hidden;
    font-size: initial;
    color: #dddddd;
  }
  .top-img {
    width: 730px;
    height: 380px;
    position: relative;
    overflow: hidden;
    img {
      width: 730px;
      height: 380px;
    }
    .query-detail {
      width: 100%;
      height: 100%;
      // display: none;
      position: absolute;
      top: 0;
      left: 0;
      text-align: center;
      line-height: 380px;
      transition: all 1s;
      background: rgba(0, 0, 0, 0.3);
      transform: translateY(100%);
      z-index: 99;
      i {
        margin-right: 11px;
      }
    }
    &:hover {
      // opacity: 0.5;
      // transition: all 1s ease-in;
      .query-detail {
        display: block;
        transform: translateY(0);
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
      line-height: 30px;
    }
  }
  .download,
  .upload,
  .close {
    min-width: 94px;
    height: 30px;
    line-height: 30px;
    padding: 0 20px;
    text-align: center;
    border: 1px solid rgba(221, 221, 221, 0.2);
    font-size: 14px;
    cursor: pointer;
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
    background: rgba(55, 54, 55, 1);
    box-shadow: 0px 20px 21px 0px rgba(0, 0, 0, 0.3);
    padding: 30px 60px;
    color: #dddddd;
  }
  .dialog-header {
    display: flex;
    justify-content: space-between;
    background: rgba(90, 90, 90, 0.5);
    height: 73px;
    align-items: center;
    padding: 0 60px;
    font-size: 18px;
    color: #dddddd;
  }
  .el-dialog__body {
    padding: 0;
  }
  .el-dialog__header {
    display: none;
  }
  .dialog-body {
    display: flex;
    justify-content: space-between;
    text-align: left;
    padding: 40px 60px;
    color: #dddddd;
    font-weight: 300;
    border-bottom: 1px solid rgba(221, 221, 221, 0.1);
    .middle-line {
      height: 205px;
      width: 1px;
      background: rgba(221, 221, 221, 0.2);
    }
    h1 {
      font-size: 18px;
      margin-bottom: 20px;
      font-weight: 300;
    }
    p {
      margin-bottom: 10px;
    }
  }
  .el-dialog__footer {
    padding: 0;
    padding-top: 30px;
  }
  .dialog-footer {
    display: flex;
    justify-content: space-between;
    .download {
      margin-right: 30px;
    }
  }
}
.upload-demo {
  text-align: center;
}
</style>
