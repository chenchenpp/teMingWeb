<template>
  <div class="exploration-hall">
    <div class="content">
      <!-- <ul class="hall-container" v-move>
        <template v-for="(data, key) in hallData">
          <li :key="data.mainTitle + data.subTItle">
            <img :src="data.img" alt />
            <div class="intruduce-text">
              <p class="main-title">{{data.mainTitle}}</p>
              <p class="sub-title">{{data.subTItle}}</p>
            </div>
          </li>
          <img
            :src="data.bannerImg"
            alt
            :key="data.mainTitle"
            class="banner-img"
            :style="{opacity: key === 0 ? '1' : ''}"
          />
        </template>
      </ul>-->

      <ul>
        <li v-for="(data) in hallData" :key="data.mainTitle + data.subTItle" class="everyHall">
          <div class="left-box">
            <img v-lazy="$host + data.imageUrl" alt />
          </div>
          <div class="right-box">
            <p class="hall-name main-title" v-if="data" v-html="data[`mainTitle${language}`]"></p>
            <p class="contact-info sub-title" v-if="data" v-html="data[`subTitle${language}`]"></p>
            <div class="middle-line"></div>
            <p
              class="intrduce-info sub-title"
              v-if="data"
              v-html="data[`imageDescTitle${language}`]"
            ></p>
          </div>
        </li>
      </ul>
    </div>
    <tm-footer></tm-footer>
  </div>
</template>

<script>
import scrollReveal from "scrollreveal";
export default {
  data() {
    return {
      bannerImg: require("../assets/images/explorationHall/banner.jpg"),
      hallData: [
        {
          createTime: 1593432666000,
          delFlag: 0,
          en: null,
          id: 21,
          imageBelongPage: "3",
          imageDescTitle: "sdfjsdjfskjd f",
          imageDescTitleEnglish: null,
          imageDescription: "",
          imageDescriptionEnglish: null,
          imageSubclass: "品牌故事第一个模块",
          imageUrl: "/static_img/40306461-76c6-470c-b171-4f30c5c217d6.jpg",
          linkUrl: "",
          mainTitle: "2",
          mainTitleEnglish: "sdf",
          name: "",
          no: "",
          pageTitle: "",
          pageTitleEnglish: "",
          pageTitleInfo: "",
          pageTitleInfoEnglish: "",
          subTitle: "sdf",
          subTitleEnglish: "sdf",
          tag: "",
          tagEnglish: ""
        },
        {
          createTime: 1593432666000,
          delFlag: 0,
          en: null,
          id: 21,
          imageBelongPage: "3",
          imageDescTitle: "sdfjsdjfskjd f",
          imageDescTitleEnglish: null,
          imageDescription: "",
          imageDescriptionEnglish: null,
          imageSubclass: "品牌故事第一个模块",
          imageUrl: "/static_img/40306461-76c6-470c-b171-4f30c5c217d6.jpg",
          linkUrl: "",
          mainTitle: "2",
          mainTitleEnglish: "sdf",
          name: "",
          no: "",
          pageTitle: "",
          pageTitleEnglish: "",
          pageTitleInfo: "",
          pageTitleInfoEnglish: "",
          subTitle: "sdf",
          subTitleEnglish: "sdf",
          tag: "",
          tagEnglish: ""
        },
        {
          createTime: 1593432666000,
          delFlag: 0,
          en: null,
          id: 21,
          imageBelongPage: "3",
          imageDescTitle: "sdfjsdjfskjd f",
          imageDescTitleEnglish: null,
          imageDescription: "",
          imageDescriptionEnglish: null,
          imageSubclass: "品牌故事第一个模块",
          imageUrl: "/static_img/40306461-76c6-470c-b171-4f30c5c217d6.jpg",
          linkUrl: "",
          mainTitle: "2",
          mainTitleEnglish: "sdf",
          name: "",
          no: "",
          pageTitle: "",
          pageTitleEnglish: "",
          pageTitleInfo: "",
          pageTitleInfoEnglish: "",
          subTitle: "sdf",
          subTitleEnglish: "sdf",
          tag: "",
          tagEnglish: ""
        },
        {
          createTime: 1593432666000,
          delFlag: 0,
          en: null,
          id: 21,
          imageBelongPage: "3",
          imageDescTitle: "sdfjsdjfskjd f",
          imageDescTitleEnglish: null,
          imageDescription: "",
          imageDescriptionEnglish: null,
          imageSubclass: "品牌故事第一个模块",
          imageUrl: "/static_img/40306461-76c6-470c-b171-4f30c5c217d6.jpg",
          linkUrl: "",
          mainTitle: "2",
          mainTitleEnglish: "sdf",
          name: "",
          no: "",
          pageTitle: "",
          pageTitleEnglish: "",
          pageTitleInfo: "",
          pageTitleInfoEnglish: "",
          subTitle: "sdf",
          subTitleEnglish: "sdf",
          tag: "",
          tagEnglish: ""
        }
      ]
    };
  },
  directives: {
    move: function(el, binding, vnode) {
      let that = vnode.context;
      // eslint-disable-next-line no-unused-vars
      var allLi = el.querySelectorAll("li");
      el.addEventListener("mousemove", function(e) {
        // eslint-disable-next-line no-unused-vars
        var screenX = e.screenX;
        var screenWidth = window.outerWidth;
        for (const li of allLi) {
          li.style.transform = `translateX(-${screenX / 2}px)`;
        }
      });
    }
  },
  computed: {
    language() {
      let lang = this.$i18n.locale == "CN" ? "" : "English";
      return lang;
    }
  },
  methods: {
    getPageData() {
      let that = this;
      this.$get("/image/getImageByPage.do?imageBelongPage=4&en=0")
        .then(res => {
          let data = res.arrList;
          hallData = data.imgArr;
          // this.bannerImg = hallData[0].imageUrl;
        })
        .catch();
    },
    initScroll() {
      scrollReveal().reveal(".exploration-hall img", {
        reset: true,
        scale: 0.9,
        // opacity:0.8,
        delay: 0, // 延时时间
        distance: "0px", // 执行距离
        duration: 1000 // 执行时长
        // easing: "ease" // 执行速度
      });
    }
  },
  mounted() {
    this.getPageData();
    this.initScroll();
  }
};
</script>

<style lang="scss" scoped>
.content {
  width: 100vw;
  position: relative;
  ul {
    margin: 80px 200px;
    margin-top: 180px;
  }
  .everyHall {
    width: 100%;
    display: flex;
    justify-content: space-around;
    margin-bottom: 60px;
    background: rgba(56, 54, 56, 1);
    box-shadow: 0px 30px 50px 0px rgba(0, 0, 0, 0.2);
  }
  .left-box {
    width: 1000px;
    height: 600px;
    img {
      width: 1000px;
      height: 600px;
    }
  }
  .right-box {
    width: 520px;
    color: rgba(221, 221, 221, 1);
    text-align: left;
    padding-top: 65px;
    padding-left: 83px;
    padding-right: 83px;
  }
  .main-title {
    font-size: 28px;
    margin-bottom: 30px;
  }
  .sub-title {
    font-size: 16px;
    margin-bottom: 10px;
    line-height: 30px;
  }
  .middle-line {
    width: 60px;
    height: 1px;
    background: rgba(204, 204, 204, 1);
    opacity: 0.8;
    margin-top: 44px;
    margin-bottom: 40px;
  }
  // .banner-img {
  //   width: 100%;
  //   height: 100%;
  //   object-fit: cover;
  //   position: absolute;
  //   opacity: 0;
  //   transition: transform 0.5s, opacity 0.5s;
  // }
  // .banner-img:first-child(1) {
  //   opacity: 1;
  // }
}
// .hall-container {
//   // width: auto;
//   // display: flex;
//   // flex-wrap: nowrap;
//   // position: absolute;
//   // top: 0;
//   // left: 0;
//   // bottom: 0;
//   // font-size: 22px;
//   // font-weight: 300;
//   // color: #dddddd;
//   // overflow: hidden;

//   // &::after {
//   //   content: "";
//   //   position: absolute;
//   //   top: 0;
//   //   left: 0;
//   //   bottom: 0;
//   //   right: 0;
//   //   background: rgba(0, 0, 0, 0.3);
//   // }
//   // li {
//   //   width: 650px;
//   //   height: 430px;
//   //   margin-top: 330px;
//   //   margin-right: 56px;
//   //   text-align: left;
//   //   box-shadow: 0px 20px 20px 0px rgba(0, 0, 0, 0.3);
//   //   z-index: 30;
//   //   opacity: 1;
//   //   &:first-child {
//   //     margin-left: 200px;
//   //   }
//   //   &:hover {
//   //     .intruduce-text {
//   //       opacity: 1;
//   //       transform: scaleY(1) translateY(0);
//   //     }
//   //   }
//   //   &:hover + .banner-img {
//   //     opacity: 1;
//   //     transform: scale(1.02);
//   //   }
//   //   z-index: 20;
//   //   img {
//   //     width: 100%;
//   //     height: 430px;
//   //   }
//   //   .intruduce-text {
//   //     opacity: 0;
//   //     padding-top: 30px;
//   //     margin-left: 30px;
//   //     padding-left: 30px;
//   //     border-left: 1px solid #ffffff;
//   //     transform: scaleY(1) translateY(-50px);
//   //     transition: transform 0.2s, opacity 0.5s;
//   //   }

//   //   .sub-title {
//   //     font-size: 16px;
//   //     margin-top: 20px;
//   //   }
//   // }
// }
</style>
