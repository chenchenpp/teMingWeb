<template>
  <div class="exploration-hall">
    <div class="content">
      <img :src="bannerImg" alt class="content-banner" />
      <ul class="hall-container" v-move>
        <li>
          <img src="../assets/images/explorationHall/hall1.jpg" alt />
          <div class="intruduce-text">
            <p class="main-title">上海 · 旗舰展厅</p>
            <p class="sub-title">采用简约、大气的装修风格，重点突出各种风格产品的实体展示</p>
          </div>
        </li>
        <li>
          <img src="../assets/images/explorationHall/hall1.jpg" alt />
          <div class="intruduce-text">
            <p class="main-title">上海 · 旗舰展厅</p>
            <p class="sub-title">采用简约、大气的装修风格，重点突出各种风格产品的实体展示</p>
          </div>
        </li>
        <li>
          <img src="../assets/images/explorationHall/hall1.jpg" alt />
          <div class="intruduce-text">
            <p class="main-title">上海 · 旗舰展厅</p>
            <p class="sub-title">采用简约、大气的装修风格，重点突出各种风格产品的实体展示</p>
          </div>
        </li>
      </ul>
    </div>
    <tm-footer></tm-footer>
  </div>
</template>

<script>
import bannerImg from '../assets/images/explorationHall/banner.jpg';
export default {
  data() {
    return {
      bannerImg: bannerImg
    };
  },
  directives: {
    move: function(el) {
      // eslint-disable-next-line no-unused-vars
      var allLi = el.querySelectorAll('li');
      el.addEventListener('mousemove', function(e) {
        // eslint-disable-next-line no-unused-vars
        var screenX = e.screenX;
        var screenWidth = window.outerWidth;
        for (const li of allLi) {
          li.style.transform = `translateX(-${screenX/2}px)`;
        }
      });
      //  el.addEventListener('mouseleave', function(e) {
      //   for (const li of allLi) {
      //     li.style.transform = `translateX(0)`;

      //   }
      // });
    }
  }
};
</script>

<style lang="scss" scoped>
.content {
  width: 100%;
  height: 1000px;
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
    background: #000000;
    opacity: 0.6;
  }
  position: relative;
}
.hall-container {
  width: auto;
  display: flex;
  // align-items: center;
  flex-wrap: nowrap;
  position: absolute;
  margin-top: 330px;
  top: 0;
  left: 0;
  bottom: 0;
  font-size: 22px;
  font-weight: 300;
  padding-left: 200px;
  color: #dddddd;
  overflow: hidden;
  li {
    width: 650px;
    height: 430px;
    margin-right: 56px;
    text-align: left;
    box-shadow: 0px 20px 20px 0px rgba(0, 0, 0, 0.3);
    transition: all 0.5 ease-in;
    img {
      width: 100%;
      height: 430px;
    }
    .intruduce-text {
      padding-top: 30px;
      margin-left: 30px;
      padding-left: 30px;
      border-left: 1px solid #ffffff;
    }
    .sub-title {
      font-size: 16px;
      margin-top: 20px;
    }
  }
}
</style>
