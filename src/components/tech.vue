<template>
  <div>
    <header class="mui-bar mui-bar-nav">
      <router-link class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left" to="/home"></router-link>
      <h1 class="mui-title">技术</h1>
    </header>
    <div style="margin-top:60px;">
      <mt-loadmore :top-method="loadTop" ref="loadmore">
        <div class="mui-card" v-for="item in techList" :key="item.id">
          <div class="mui-card-header">机构:{{item.jsfbjg}}</div>
          <div class="mui-card-content">
            <div class="mui-card-content-inner">{{item.jsmc}}</div>
          </div>
          <div class="mui-card-footer">
            <span class="mui-card-link">分类:{{item.jsfl}}</span>
            <a class="mui-card-link" @click="toTech(item.id)">查看</a>
          </div>
        </div>
      </mt-loadmore>
    </div>
  </div>
</template>

<script>
import { Toast } from "mint-ui";
export default {
  data() {
    return {
      techList: [],
      instance: ""
    };
  },
  methods: {
    getTechs() {
      this.instance = Toast({
        message: "加载中",
        iconClass: "el-icon-loading",
        duration: -1
      });
      this.$axios.get("/api/getAllTech").then(response => {
        this.techList = response.data;
        this.instance.close();
      });
    },
    toTech(id) {
      this.$router.push({
        path: `/singleTech/${id}`
      });
    },
    loadTop() {
      this.$axios.get("/api/getAllTech").then(response => {
        this.techList = response.data;
        this.$refs.loadmore.onTopLoaded();
      });
    }
  },
  created() {
    this.getTechs();
  }
};
</script>

<style scoped>
.mui-card {
  border-radius: 5px;
}
.mui-card-footer {
  background-color: #f7f7f7;
}
</style>
