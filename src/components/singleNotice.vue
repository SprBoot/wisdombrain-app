<template>
  <div>
    <header id="header" class="mui-bar mui-bar-nav">
      <router-link class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left" to="/notice"></router-link>
      <h1 class="mui-title">{{notices.tzbt}}</h1>
    </header>
    <div class="mui-card">
      <div class="mui-card-header">{{notices.tzbt}}</div>
      <div class="mui-card-content">
        <div class="mui-card-content-inner" v-html="notices.tznr"></div>
      </div>
      <hr style="color:#c8c7cc;">
      <div class="mui-card-content">
        <div class="mui-card-content-inner" style="color:#000;">
          附件下载
          <br>
          <div v-for="file in files" :key="file.id" style="margin-top:10px;font-size:16px;">
            <span style="color:#8f8f94;">{{file.ysmc}}</span><a style="float:right;font-size:22px;" class="el-icon-download"
            :href="file.wjmc"></a>
            <br>
          </div>
        </div>
      </div>
      <div class="mui-card-footer">
        <span class="mui-card-link">机构:{{notices.fbjg}}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      noticeId: null,
      notices: {},
      files: []
    };
  },
  created() {
    this.getNoticeId();
  },
  methods: {
    getNoticeId() {
      this.noticeId = this.$route.params.id;
      this.$axios
        .get("/api/getNoticeById?id=" + this.noticeId)
        .then(response => {
          this.notices = response.data.notice;
          this.files = response.data.files;
          console.log(this.files);
        });
    }
  }
};
</script>

<style scoped>
.mui-card-footer {
  background-color: #f7f7f7;
}
.mui-card {
  margin-top: 60px;
}
</style>
