<template>
  <div>
    <header id="header" class="mui-bar mui-bar-nav">
      <router-link class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left" to="/home"></router-link>
      <h1 class="mui-title">通知</h1>
    </header>
    <div style="margin-top:60px;">
      <mt-loadmore :top-method="loadTop" ref="loadmore">
        <div class="mui-card" v-for="item in noticeList" :key="item.id">
          <div class="mui-card-content">
            <div class="mui-card-content-inner">
              <p>Posted on {{item.date}}</p>
              <p style="color: #333;">{{item.tzbt}}</p>
            </div>
          </div>
          <div class="mui-card-footer">
            <span class="mui-card-link">{{item.fbjg}}</span>
            <a class="mui-card-link" @click="toReadNotice(item.id)">阅读</a>
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
      noticeList: [],
      instance: ""
    };
  },
  created() {
    this.getNoticeList();
  },
  methods: {
    getNoticeList() {
      this.instance = Toast({
        message: "加载中",
        iconClass: "el-icon-loading",
        duration: -1
      });
      this.$axios.get("/api/getAllNotice").then(response => {
        this.noticeList = response.data;
        this.instance.close();
      });
    },
    toReadNotice(id) {
      this.$router.push({
        path: `/singleNotice/${id}`
      });
    },
    loadTop() {
      this.$axios.get("/api/getAllNotice").then(response => {
        this.noticeList = response.data;
        this.$refs.loadmore.onTopLoaded();
      });
    }
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
