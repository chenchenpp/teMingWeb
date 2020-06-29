<template>
  <el-dialog :visible.sync="dialogVisible" :before-close="handleClose" class="upload-dialog">
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
        <p>5、收集分析公司增值服务产品及竞争伙伴的相关信息；</p>
        <p>6、加强与公司内部的协调，优化与公司外部的合作。</p>
      </div>
      <div class="middle-line"></div>
      <div class="right">
        <h1>岗位要求：</h1>
        <p>1、有较好的沟通能力、表达能力、逻辑思维能力，有激情，有耐心；</p>
        <p>2、文字文案能力强；</p>
        <p>3、能熟练使用Word、PowerPoint的高级功能；</p>
        <p>4、对市场调查工作有一定的了解；</p>
        <p>5、有教育行业背景或经验者优先。</p>
      </div>
    </div>
    <span slot="footer" class="dialog-footer">
      <div class="close" @click="dialogVisible = false">关闭</div>
      <div>
        <div class="download" style="display:inline-block">下载Word</div>
        <div class="upload" style="display:inline-block">上传简历</div>
      </div>
    </span>
  </el-dialog>
</template>

<script>
export default {
  props: {
    dialogVisible: Boolean
  },
  data() {
    return {
      //   dialogVisible: false
    };
  },
  methods: {
    handleClose() {}
  }
};
</script>

<style lang="scss" scoped>
.upload-dialog {
  width: 200px;
  height: 200px;
  background: red;
}
</style>>

