<template>
  <div>
    <header id="header" class="mui-bar mui-bar-nav">
      <router-link class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left" to="/home"></router-link>
      <h1 class="mui-title">智慧谷概览</h1>
    </header>
    <div class="mui-content" style="margin-top:60px;">
      <div class="mui-card">
        <ul class="mui-table-view">
          <li class="mui-table-view-cell mui-collapse mui-active">
            <a>概况</a>
            <div class="mui-collapse-content">
              <p v-html="survey.gknr"></p>
            </div>
          </li>
          <li class="mui-table-view-cell mui-collapse mui-active">
            <a>发展历史</a>
            <div class="mui-collapse-content">
              <p v-html="development.fzlcnr"></p>
            </div>
          </li>
          <li class="mui-table-view-cell mui-collapse mui-active">
            <a>架构体系</a>
            <div class="mui-collapse-content">
              <p v-html="framework.jgnr"></p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      survey: {},
      development:{},
      framework:{}
    };
  },
  created() {
    this.getSurvey();
    this.getDevelopment();
    this.getFramework();
  },
  methods: {
    getSurvey() {
      this.axios.get("/api/getSurvey").then(response => {
        this.survey = response.data;
      });
    },
    getDevelopment() {
      this.axios.get("/api/getDevelopment").then(response => {
        this.development = response.data;
      });
    },
    getFramework() {
      this.axios.get("/api/getFramework").then(response => {
        this.framework = response.data;
      });
    }
  }
};
</script>
<style scoped>
.mui-bar-nav ~ .mui-content {
  margin-top: 0px;
  padding-top: 0px;
}
.mui-content {
  background-color: #fff;
}
</style>
