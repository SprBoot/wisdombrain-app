<template>
  <div>
    <header class="mui-bar mui-bar-nav">
      <router-link class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left" to="/home"></router-link>
      <h1 class="mui-title">机构</h1>
    </header>
    <div style="margin-top:60px;">
      <mt-loadmore :top-method="loadTop" ref="loadmore">
        <div
          v-for="item in mechaList"
          :key="item.id"
          @click="getUser(item.id)"
          style="margin-top:10px;"
        >
          <el-collapse @change="handleChange">
            <el-collapse-item :title="item.jgmc" name="1" style="margin-left:10px;">
              <div class="mui-card">
                <div class="mui-card-content">
                  <div class="mui-card-content-inner" v-html="item.jgjs"></div>
                </div>
              </div>
              <div class="mui-card" v-if="user != ''">
                <div class="mui-card-content">
                  <div class="mui-card-content-inner" style="color:#000;">
                    人才信息
                    <br>
                    <div style="margin-top:10px;font-size:16px;" v-for="u in user" :key="u.id">
                      <span style="color:#8f8f94;">{{u.name}}</span>
                      <span style="color:#8f8f94;float:right;">{{u.zc}}</span>
                      <br>
                    </div>
                  </div>
                </div>
              </div>
              <div class="mui-card" v-if="project != ''">
                <div class="mui-card-content">
                  <div class="mui-card-content-inner" style="color:#000;">
                    项目信息
                    <br>
                    <div style="margin-top:10px;font-size:16px;" v-for="p in project" :key="p.id">
                      <span style="color:#8f8f94;">{{p.xmmc}}</span>
                      <span style="color:#8f8f94;float:right;">{{p.xmlx}}</span>
                      <br>
                    </div>
                  </div>
                </div>
              </div>
            </el-collapse-item>
          </el-collapse>
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
      mechaList: [],
      user: [],
      project: [],
      instance: ""
    };
  },
  created() {
    this.getMecha();
  },
  methods: {
    getMecha() {
      this.instance = Toast({
        message: "加载中",
        iconClass: "el-icon-loading",
        duration: -1
      });
      this.axios.get("/api/getAllMecha").then(response => {
        this.mechaList = response.data;
        this.instance.close();
      });
    },
    handleChange(val) {},
    getUser(mechaId) {
      this.user = "";
      this.project = "";
      this.$axios.get("/api/getMechaInfoById?id=" + mechaId).then(res => {
        this.user = res.data.mechaUser;
        this.project = res.data.mechaProject;
      });
    },
    loadTop() {
      this.$axios.get("/api/getAllMecha").then(response => {
        this.mechaList = response.data;
        this.$refs.loadmore.onTopLoaded();
      });
    }
  }
};
</script>

<style scoped>
.mui-bar-nav ~ .mui-content {
  padding-top: 0px;
}
</style>
