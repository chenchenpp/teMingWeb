<template>
  <div class="product">
    <div class="product-carousel" style="height: 500px">
      <el-carousel height="500px">
        <el-carousel-item v-for="item in 4" :key="item">
          <h3>{{ item }}</h3>
        </el-carousel-item>
      </el-carousel>
    </div>
    <tm-footer></tm-footer>
  </div>
</template>
<script>
export default {
  name: 'product',
  methods: {
    goHome() {
      this.$router.push({ path: '/' });
    }
  }
};
</script>
<style lang="scss" scoped>
.product-carousel{
  // height: 500px
}
.el-carousel--horizontal{
  overflow: hidden;
}
.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n+1) {
  background-color: #d3dce6;
}
</style>
