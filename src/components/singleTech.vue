<template>
  <div>
    <header id="header" class="mui-bar mui-bar-nav">
      <router-link class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left" to="/tech"></router-link>
      <h1 class="mui-title">{{tech.jsmc}}</h1>
    </header>
    <div class="mui-card">
      <div class="mui-card-header">{{tech.jsmc}}</div>
      <div class="mui-card-content">
        <div class="mui-card-content-inner" v-html="tech.jsnr"></div>
      </div>
      <div class="mui-card-footer">
          <span class="mui-card-link">机构:{{tech.jsfbjg}}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      techId: null,
      tech: {}
    };
  },
  created() {
    this.getTechId();
  },
  methods: {
    getTechId() {
      this.techId = this.$route.params.id;
      this.$axios.get("/api/getTech?id=" + this.techId).then(response => {
        this.tech = response.data;
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