<template>
  <div class="brand-entry-container">
    <div class="banner" :style="{'background':`url(${$host}${bannerData[0].imageUrl})`}">
      <div class="banner-text-area">
        <p class="main-title" v-if="bannerData[0]" v-html="bannerData[0][`mainTitle${language}`]"></p>
        <p class="sub-title" v-if="bannerData[0]" v-html="bannerData[0][`subTitle${language}`]"></p>
        <p class="bottom-line"></p>
      </div>
    </div>
    <div class="content">
      <main>
        <scrollbarTrack></scrollbarTrack>

        <section class="first-section">
          <p
            class="main-title"
            v-if="firstContentData[0]"
            v-html="firstContentData[0][`mainTitle${language}`]"
          ></p>
          <p
            class="sub-title"
            v-if="firstContentData[0]"
            v-html="firstContentData[0][`subTitle${language}`]"
          ></p>
          <ul class="img-intruduce">
            <li v-for="item in firstContentData" :key="item.id">
              <div class="img-box">
                <div class="img-title-box">
                  <p class="img-main-title" v-if="item" v-html="item[`imageDescTitle${language}`]"></p>
                  <p class="img-sub-title" v-if="item" v-html="item[`imageDescription${language}`]"></p>
                </div>
                <img v-lazy="$host + item.imageUrl" class="h450 w335" alt />
              </div>
            </li>
          </ul>
        </section>

        <section class="second-section">
          <p
            class="main-title"
            v-if="secondContentData[0]"
            v-html="secondContentData[0][`mainTitle${language}`]"
          ></p>
          <p
            class="sub-title"
            v-if="secondContentData[0]"
            v-html="secondContentData[0][`subTitle${language}`]"
          ></p>
          <div class="img-intruduce">
            <div class="left-img mr60">
              <div class="img-box">
                <div class="img-title-box">
                  <p
                    class="img-main-title"
                    v-if="secondContentData[0]"
                    v-html="secondContentData[0][`imageDescTitle${language}`]"
                  ></p>
                </div>
                <img v-lazy="$host + secondContentData[0].imageUrl" alt class="w520 h760" />
              </div>
            </div>
            <div class="right-img tl">
              <div class="img-box">
                <div class="img-title-box">
                  <p
                    class="img-main-title"
                    v-if="secondContentData[2]"
                    v-html="secondContentData[2][`imageDescTitle${language}`]"
                  ></p>
                </div>
                <img v-lazy="$host + secondContentData[2].imageUrl" alt class="w940 h350 mb60" />
              </div>
              <div class="img-box">
                <div class="img-title-box">
                  <p
                    class="img-main-title"
                    v-if="secondContentData[2]"
                    v-html="secondContentData[2][`imageDescTitle${language}`]"
                  ></p>
                </div>
                <img v-lazy="$host + secondContentData[2].imageUrl" alt class="w440 h350 mr60" />
              </div>
              <div class="img-box">
                <div class="img-title-box">
                  <p
                    class="img-main-title"
                    v-if="secondContentData[2]"
                    v-html="secondContentData[2][`imageDescTitle${language}`]"
                  ></p>
                </div>
                <img v-lazy="$host + secondContentData[2].imageUrl" alt class="w440 h350" />
              </div>
            </div>
          </div>
        </section>

        <section class="third-section">
          <p
            class="main-title"
            v-if="thirdContentData[0]"
            v-html="thirdContentData[0][`mainTitle${language}`]"
          ></p>
          <p
            class="sub-title"
            v-if="thirdContentData[0]"
            v-html="thirdContentData[0][`subTitle${language}`]"
          ></p>
          <div class="img-intruduce">
            <div class="img-box" v-for="(item, index) in thirdContentData" :key="item.id">
              <div class="img-title-box">
                <p class="img-main-title" v-html="item[`imageDescTitle${language}`]"></p>
              </div>
              <img
                v-lazy="$host + item.imageUrl"
                :class="{w1054:index === 0, w404:index === 1,w730:index===3 || index ===4}"
                class="h500"
                alt
              />
            </div>
          </div>
        </section>

        <section class="forth-section">
          <p
            class="main-title"
            v-if="forthContentData[0]"
            v-html="forthContentData[0][`mainTitle${language}`]"
          ></p>
          <p
            class="sub-title"
            v-if="forthContentData[0]"
            v-html="forthContentData[0][`subTitle${language}`]"
          ></p>
          <div class="img-intruduce">
            <div class="img-box" v-for="(item) in forthContentData" :key="item.id">
              <div class="img-title-box">
                <p class="img-main-title" v-html="item[`imageDescTitle${language}`]"></p>
              </div>
              <img v-lazy="$host + item.imageUrl" class="w345 h345 mb60" alt />
            </div>
          </div>
          <span class="download mt60 mr60" @click="download">{{$t('brandEntryInfo.downloadJoiningDocuments')}}</span>
          <span class="upload mt60" @click="innerVisible=true">{{$t('brandEntryInfo.uploadJoiningDocuments')}}</span>
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
import scrollReveal from "scrollreveal";
export default {
  data() {
    return {
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
      firstContentData: [
        {
          createTime: null,
          delFlag: null,
          en: null,
          id: 21,
          imageBelongPage: "3",

          imageSubclass: "品牌故事第一个模块",
          imageUrl: "/static_img/40306461-76c6-470c-b171-4f30c5c217d6.jpg",
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
      secondContentData: [
        {
          createTime: null,
          delFlag: null,
          en: null,
          id: 21,
          imageBelongPage: "3",

          imageSubclass: "品牌故事第一个模块",
          imageUrl: "/static_img/40306461-76c6-470c-b171-4f30c5c217d6.jpg",
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
          id: 26,
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
      thirdContentData: [
        {
          createTime: null,
          delFlag: null,
          en: null,
          id: 21,
          imageBelongPage: "3",

          imageSubclass: "品牌故事第一个模块",
          imageUrl: "/static_img/40306461-76c6-470c-b171-4f30c5c217d6.jpg",
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
      forthContentData: [
        {
          createTime: null,
          delFlag: null,
          en: null,
          id: 21,
          imageBelongPage: "3",
          imageSubclass: "品牌故事第一个模块",
          imageUrl: "/static_img/40306461-76c6-470c-b171-4f30c5c217d6.jpg",
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
          imageDescriptionEnglish: "图片的英文副标题",
          active: true
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
          imageDescriptionEnglish: "图片的英文副标题",
          active: false
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
          imageDescriptionEnglish: "图片的英文副标题",
          active: false
        },
        {
          createTime: null,
          delFlag: null,
          en: null,
          id: 26,
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
          imageDescriptionEnglish: "图片的英文副标题",
          active: false
        },
        {
          createTime: null,
          delFlag: null,
          en: null,
          id: 27,
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
          imageDescriptionEnglish: "图片的英文副标题",
          active: false
        }
      ]
    };
  },
  methods: {
    uploadSuccess() {
      this.uploadSuccessFlag = true;
    },
    uploadError() {
      this.uploadErrorFlag = true;
    },
    initScroll() {
      scrollReveal().reveal(".brand-entry-container img", {
        reset: true,
        scale: 0.9,
        // opacity:0.8,
        delay: 0, // 延时时间
        distance: "0px", // 执行距离
        duration: 1000 // 执行时长
        // easing: "ease" // 执行速度
      });
    },
    getPageData() {
      let that = this;
      this.$get("/image/getImageByPage.do?imageBelongPage=6&en=0")
        .then(res => {
          console.log(res);
          let data = res.arrList;
          data.forEach(val => {
            switch (val.title) {
              case "1":
                this.bannerData = val.imgArr;
                break;
              case "2":
                this.firstContentData = val.imgArr;
                break;
              case "3":
                this.secondContentData = val.imgArr;
                break;
              default:
                break;
            }
          });
          that.$nextTick(() => {
            that.initSwiper();
            that.enter(0);
            scrollReveal().reveal("img", {
              reset: true,
              scale: 1.1,
              delay: 0, // 延时时间
              distance: "0px", // 执行距离
              duration: 600, // 执行时长
              easing: "cubic-bezier(0.5, 0, 0, 1)" // 执行速度
            });
          });
          console.log(
            this.bannerData,
            this.firstContentData,
            this.secondContentData
          );
        })
        .catch();
    },
    download() {
      // this.$get('http://106.52.5.152/static_html/test.docx');
      window.open('http://106.52.5.152/static_html/test.docx');
    }
  },
  mounted() {
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
    line-height: 28px;
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
    position: relative;
    overflow: hidden;
    font-size: initial;
    color: #dddddd;
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
    min-width: 150px;
    padding: 0 20px;
    height: 34px;
    line-height: 34px;
    text-align: center;
    border: 1px solid rgba(221, 221, 221, 0.2);
    color: rgba(221, 221, 221, 0.5);
    cursor: pointer;
  }
}
.img-box {
  position: relative;
  text-align: left;
  display: inline-block;
}
.img-title-box {
  position: absolute;
  bottom: 40px;
  left: 40px;
  z-index: 2;
}
.img-main-title {
  font-size: 24px;
  margin-bottom: 30px;
}
.img-sub-title {
  font-size: 14px;
  line-height: 24px;
}
.img-box {
  position: relative;
}
.img-title-box {
  position: absolute;
  bottom: 40px;
  left: 40px;
}
.img-main-title {
  font-size: 24px;
  margin-bottom: 30px;
}
.img-sub-title {
  font-size: 14px;
  line-height: 24px;
}
</style>
