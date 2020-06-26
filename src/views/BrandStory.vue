<template>
  <div class="brand-story-container">
    <el-carousel arrow="never" class="banner">
      <el-carousel-item v-for="item in 4" :key="item">
        <img src="../assets/images/home/banner.jpg" alt />
      </el-carousel-item>
    </el-carousel>
    <div class="content">
      <section class="first-content">
        <p class="main-title">�߶˼Ҿ���ȶ���ר��</p>
        <p class="sub-title">���ǲ�������װ��Ҳ������ҵ̬�����Ǿ��ڼҾӵ���������ȡ�</p>
        <p class="sub-title">��ȫ�ݡ��߶˺�Ʒ�ʵ�ս�Ը����ϣ��Ѷ���������͸�������£���Ϊ�Ҿ���ҵ���ڲ�ͬ��Ψһ��</p>
        <div class="img-intruduce">
          <img src="../assets/images/brandStory/first-content-img1.png" alt />
          <img src="../assets/images/brandStory/first-content-img1.png" alt />
          <img src="../assets/images/brandStory/first-content-img1.png" alt />
          <img src="../assets/images/brandStory/first-content-img1.png" alt />
        </div>
      </section>

      <section class="second-content">
        <p class="main-title">������չ����</p>
        <p class="sub-title">�����ｨ�������Ŀ��������ߣ��Ƴ�8�����Ṥ�յ��ֹ������Ű塣</p>
        <p class="sub-title">����ϸ�����������ձ�֤���Ű岻������������ۣ��Ҿ������ã��ڵ�ʱΪ�й�������ҵ�������Ⱥӡ�</p>
        <div class="img-intruduce">
          <img src="../assets/images/brandStory/second-content-img1.jpg" alt />
        </div>
        <el-carousel indicator-position="none" height="40px" arrow="always">
          <el-carousel-item v-for="item in 4" :key="item">
            <h3>{{ item }}</h3>
          </el-carousel-item>
        </el-carousel>
      </section>

      <section class="third-content">
        <p class="main-title">�߶˼Ҿ���ȶ���ר��</p>
        <p class="sub-title">���ǲ�������װ��Ҳ������ҵ̬�����Ǿ��ڼҾӵ���������ȡ�</p>
        <p class="sub-title">��ȫ�ݡ��߶˺�Ʒ�ʵ�ս�Ը����ϣ��Ѷ���������͸�������£���Ϊ�Ҿ���ҵ���ڲ�ͬ��Ψһ��</p>
        <div class="img-intruduce">
          <div class="left-img">
            <img src="../assets/images/brandStory/third-content-img1.png" alt />
            <img src="../assets/images/brandStory/third-content-img2.png" alt />
          </div>
          <div class="right-img">
            <img src="../assets/images/brandStory/third-content-img3.png" alt />
          </div>
        </div>
      </section>

      <section class="forth-content">
        <p class="main-title">�߶˼Ҿ���ȶ���ר��</p>
        <p class="sub-title">���ǲ�������װ��Ҳ������ҵ̬�����Ǿ��ڼҾӵ���������ȡ�</p>
        <p class="sub-title">��ȫ�ݡ��߶˺�Ʒ�ʵ�ս�Ը����ϣ��Ѷ���������͸�������£���Ϊ�Ҿ���ҵ���ڲ�ͬ��Ψһ��</p>
        <div class="img-intruduce">
          <div class="left-img">
            <el-carousel arrow="never">
              <el-carousel-item v-for="item in 4" :key="item">
                <img src="../assets/images/brandStory/forth-content-img1.png" alt />
              </el-carousel-item>
            </el-carousel>
          </div>
          <ul class="right-text">
            <li>
              <img src="../assets/images/brandStory/target.png" class="icon" />
              <div class="intruduce">
                <p class="main-title">��ȶ���</p>
                <p class="sub-title">ÿһ�������ҾӶ��Ƕ�һ�޶��������Ƶ�</p>
              </div>
            </li>
            <li>
              <img src="../assets/images/brandStory/target.png" class="icon" />
              <div class="intruduce">
                <p class="main-title">��ȶ���</p>
                <p class="sub-title">ÿһ�������ҾӶ��Ƕ�һ�޶��������Ƶ�</p>
              </div>
            </li>
            <li>
              <img src="../assets/images/brandStory/target.png" class="icon" />
              <div class="intruduce">
                <p class="main-title">��ȶ���</p>
                <p class="sub-title">ÿһ�������ҾӶ��Ƕ�һ�޶��������Ƶ�</p>
              </div>
            </li>
            <li>
              <img src="../assets/images/brandStory/target.png" class="icon" />
              <div class="intruduce">
                <p class="main-title">��ȶ���</p>
                <p class="sub-title">ÿһ�������ҾӶ��Ƕ�һ�޶��������Ƶ�</p>
              </div>
            </li>
            <li>
              <img src="../assets/images/brandStory/target.png" class="icon" />
              <div class="intruduce">
                <p class="main-title">��ȶ���</p>
                <p class="sub-title">ÿһ�������ҾӶ��Ƕ�һ�޶��������Ƶ�</p>
              </div>
            </li>
          </ul>
        </div>
      </section>

      <div class="fifth-content">
        <p class="main-title">��ȶ��� �� ���ķ���</p>
        <p class="sub-title">Χ�ƿͻ������������еļҡ����ռ�Ŀ�꣬�ṩ�ᴩ�ͻ���ʼ���յ����ά��</p>
        <p class="sub-title">һվʽ����ͻ�������ÿλ�ͻ���������أ�����Ԥ��</p>
        <div class="img-intruduce or-container">
          <div
            class="box"
            :class="eleindex == i ?'eleactive':''"
            v-for="(ele,i) in piclist"
            :key="i"
            @mouseenter="enter(i)"
            @mouseleave="out(i)"
          >
            <!-- <img :src="ele.bg" v-if="eleindex == i"/> -->
            <img :src="ele.bg" alt="">
          </div>
        </div>
      </div>
    </div>
    <tm-footer></tm-footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      eleindex: 0,
      piclist: [
        {
          text: "����/¼��ҳ��",
          bg: require("../assets/images/brandStory/fifth-content-big-img1.png"),
          img: require("../assets/images/brandStory/fifth-content-small-img1.png")
        },
        {
          text: "����/¼��ҳ��",
          bg: require("../assets/images/brandStory/fifth-content-big-img1.png"),
          img: require("../assets/images/brandStory/fifth-content-small-img2.png")
        },
        {
          text: "����/¼��ҳ��",
          bg: require("../assets/images/brandStory/fifth-content-big-img1.png"),
          img: require("../assets/images/brandStory/fifth-content-small-img1.png")
        },
        {
          text: "����/¼��ҳ��",
          bg: require("../assets/images/brandStory/fifth-content-big-img1.png"),
          img: require("../assets/images/brandStory/fifth-content-small-img1.png")
        },
        {
          text: "����/¼��ҳ��",
          bg: require("../assets/images/brandStory/fifth-content-big-img1.png"),
          img: require("../assets/images/brandStory/fifth-content-small-img1.png")
        }
      ]
    };
  },
  methods:{
    enter: function (i) {
        this.eleindex = i
        // if (this.eleindex === i) {
        //   this.eleindex = -1
        // } else {
        //   this.eleindex = i
        // }
      },
      out: function (i) {
        this.imgindex = -1
      }
  }
};
</script>

<style lang="scss" scoped>
.brand-story-container {
  background: url("../assets/images/home/background.jpg");
}
.content {
  margin-left: 100px;
  margin-right: 200px;
  border-left: 1px solid rgba(255, 255, 255, 0.2);
  position: relative;
  overflow: hidden;
  font-size: initial;
  color: #dddddd;
  &::after {
    content: "";
    width: 5px;
    height: 100px;
    position: fixed;
    top: 458px;
    left: 97.5px;
    // z-index: 1;
    background: rgba(255, 255, 255, 1);
  }
}
// �����������⸱����
.main-title {
  font-size: 30px;
  margin-bottom: 40px;
}
.sub-title {
  margin-bottom: 8px;
}
//
.first-content,
.third-content,
.fifth-content {
  text-align: left;
  margin-top: 80px;
  padding-left: 100px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.3);
  padding-bottom: 80px;
  .img-intruduce {
    display: flex;
    justify-content: space-between;
    margin-top: 60px;
    img {
      width: 345px;
    }
    .left-img {
      img {
        &:first-child {
          margin-bottom: 60px;
        }
      }
    }
  }
}
.first-content {
}
.second-content {
  text-align: right;
  margin-top: 80px;
  padding-left: 100px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.3);
  padding-bottom: 80px;
  .img-intruduce {
    margin-top: 60px;
    img {
      width: 1520px;
    }
  }
}
.third-content {
  .img-intruduce {
    display: flex;
    justify-content: space-between;
    margin-top: 60px;
    img {
      width: 730px;
    }
  }
}

.forth-content {
  text-align: center;
  margin-top: 80px;
  padding-left: 100px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.3);
  padding-bottom: 80px;

  .img-intruduce {
    margin-top: 60px;
    display: flex;
    .left-img {
      width: 911px;
    }

    .el-carousel__item {
      // height: 550px;
      img {
        width: 911px;
        height: 550px;
      }
    }
  }
  .el-carousel__container {
    height: 550px;
  }
  .right-text {
    margin-left: 65px;
    li {
      display: flex;
      text-align: left;
      align-items: center;
      margin-bottom: 58px;
      .icon {
        width: 48px;
        height: 48px;
        margin-right: 37px;
      }
      .main-title {
        font-size: 24px;
        margin-bottom: 15px;
      }
    }
  }
}

// �ַ�����ʽ
.or-container {
  width: 100%;
  box-sizing: border-box;
  height: 600px;
}
.or-container:before {
  background-color: rgba(0, 0, 0, 0.4);
}

.box {
  overflow: hidden;
  transition: 0.5s;
  box-shadow: 0 20px 30px rgba(0, 0, 0, 0.1);
  width: 150px;
  transition: all .5s ease-in;
}

.or-container div.box > img {
  width: 917px;
  height: 600px;

}

.box > span {
  display: block;
  text-align: center;
}

.eleactive {
  width: 917px;
  height: 600px;
}

div.box.eleactive img {
  width: 100%;
  height: 100%;
}

.banner.el-carousel {
  height: 1000px;
  .el-carousel__container {
    height: 1000px;
  }
}

.banner .el-carousel__item {
  height: 1000px;
  img {
    height: 100%;
  }
}
</style>
<style lang="scss">
.forth-content {
  .el-carousel__container {
    height: 550px;
  }
}
</style>
