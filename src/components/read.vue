<template>
  <div>
    <header id="header" class="mui-bar mui-bar-nav">
      <router-link class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left" to="/news"></router-link>
      <h1 class="mui-title">{{news.title}}</h1>
    </header>
    <div class="mui-card">
      <div class="mui-card-header">{{news.title}}</div>
      <div class="mui-card-content">
        <div class="mui-card-content-inner" v-html="news.xwnr"></div>
      </div>
      <div class="mui-card-footer">
          <span class="mui-card-link">机构:{{news.fbjg}}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newsId: null,
      news: {}
    };
  },
  created() {
    this.getNewsId();
  },
  methods: {
    getNewsId() {
      this.newsId = this.$route.params.id;
      this.$axios.get("/api/getNews?id=" + this.newsId).then(response => {
        this.news = response.data;
      });
    }
  }
};
</script>

<style scoped>
.mui-card-footer{
    background-color: #f7f7f7;
}
.mui-card{
  margin-top: 60px;
}
</style>
