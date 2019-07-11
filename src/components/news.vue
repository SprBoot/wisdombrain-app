<template>
  <div>
    <div style="margin-top:60px;">
      <mt-loadmore :top-method="loadTop" ref="loadmore">
        <div class="mui-card" v-for="item in newsList" :key="item.id">
          <div v-if="item.fmtpId != ''">
            <img
              class="mui-card-header mui-card-media"
              style="height:100%;width:100%;padding:0px;"
              :src="item.fmtpId"
            >
            <div class="mui-card-content">
              <div class="mui-card-content-inner">
                <p>Posted on {{item.date}}</p>
                <p style="color: #333;">{{item.title}}</p>
              </div>
            </div>
            <div class="mui-card-footer">
              <span class="mui-card-link">{{item.fbjg}}</span>
              <a class="mui-card-link" @click="toRead(item.id)">阅读</a>
            </div>
          </div>
          <div v-if="item.fmtpId === ''">
            <div class="mui-card-content">
              <div class="mui-card-content-inner">
                <p>Posted on {{item.date}}</p>
                <p style="color: #333;">{{item.title}}</p>
              </div>
            </div>
            <div class="mui-card-footer">
              <span class="mui-card-link">{{item.fbjg}}</span>
              <a class="mui-card-link" @click="toRead(item.id)">阅读</a>
            </div>
          </div>
        </div>
      </mt-loadmore>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import { Toast } from "mint-ui";
import { Loadmore } from "mint-ui";
export default {
  data() {
    return {
      newsList: [],
      input: "",
      instance: ""
    };
  },
  created() {
    this.getNewsList();
  },
  methods: {
    getNewsList() {
      this.instance = Toast({
        message: "加载中",
        iconClass: "el-icon-loading",
        duration: -1
      });
      this.$axios.get("/api/getAllNewsWithoutUser").then(response => {
        this.newsList = response.data;
        this.instance.close();
      });
    },
    toRead(id) {
      this.$router.push({
        path: `/read/${id}`
      });
    },
    loadTop() {
      this.$axios.get("/api/getAllNewsWithoutUser").then(response => {
        this.newsList = response.data;
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
