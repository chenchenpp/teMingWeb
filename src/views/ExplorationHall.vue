<template>
  <div class="exploration-hall">
    <div class="content">
      <ul class="hall-container" v-move>
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
      </ul>
    </div>
    <tm-footer></tm-footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      bannerImg: require("../assets/images/explorationHall/banner.jpg"),
      hallData: [
        {
          img: require("../assets/images/explorationHall/hall1.jpg"),
          bannerImg: require("../assets/images/explorationHall/banner.jpg"),
          mainTitle: "上海 · 旗舰展厅1",
          subTItle: "采用简约、大气的装修风格，重点突出各种风格产品的实体展示",
          active: true
        },
        {
          img: require("../assets/images/explorationHall/hall1.jpg"),
          bannerImg: require("../assets/images/explorationHall/banner2.jpg"),
          mainTitle: "上海 · 旗舰展厅2",
          subTItle: "采用简约、大气的装修风格，重点突出各种风格产品的实体展示",
          active: false
        },
        {
          img: require("../assets/images/explorationHall/hall1.jpg"),
          bannerImg: require("../assets/images/explorationHall/banner.jpg"),
          mainTitle: "上海 · 旗舰展厅3",
          subTItle: "采用简约、大气的装修风格，重点突出各种风格产品的实体展示",
          active: false
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
  }
};
</script>

<style lang="scss" scoped>
.content {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  position: relative;
  .banner-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: absolute;
    opacity: 0;
    transition: transform 0.5s, opacity 0.5s;
  }
  .banner-img:first-child(1) {
    opacity: 1;
  }
}
.hall-container {
  width: auto;
  display: flex;
  flex-wrap: nowrap;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  font-size: 22px;
  font-weight: 300;
  color: #dddddd;
  overflow: hidden;
  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background: rgba(0, 0, 0, 0.3);
  }
  li {
    width: 650px;
    height: 430px;
    margin-top: 330px;
    margin-right: 56px;
    text-align: left;
    box-shadow: 0px 20px 20px 0px rgba(0, 0, 0, 0.3);
    z-index: 30;
    opacity: 1;
    &:first-child {
      margin-left: 200px;
    }
    &:hover {
      .intruduce-text {
        opacity: 1;
        transform: scaleY(1) translateY(0);
      }
    }
    &:hover + .banner-img {
      opacity: 1;
      transform: scale(1.02);
    }
    z-index: 20;
    img {
      width: 100%;
      height: 430px;
    }
    .intruduce-text {
      opacity: 0;
      padding-top: 30px;
      margin-left: 30px;
      padding-left: 30px;
      border-left: 1px solid #ffffff;
      transform: scaleY(1) translateY(-50px);
      transition: transform 0.2s, opacity 0.5s;
    }

    .sub-title {
      font-size: 16px;
      margin-top: 20px;
    }
  }
}
</style>
