<template>
  <div>
    <div class="block" style="margin-top:60px;margin-left:10px;margin-right:10px;">
      <el-carousel height="200px" style="border-radius: 10px;">
        <el-carousel-item>
          <img class="pic" src="../assets/images/banner1.jpg">
        </el-carousel-item>
        <el-carousel-item>
          <img class="pic" src="../assets/images/banner2.jpg">
        </el-carousel-item>
        <el-carousel-item>
          <img class="pic" src="../assets/images/banner3.jpg">
        </el-carousel-item>
      </el-carousel>
    </div>
    <div class="mui-content" style="background-color:#fff;padding-top:20px;">
      <ul class="mui-table-view mui-grid-view mui-grid-9">
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
          <router-link to="/overview">
            <span class="mui-icon mui-icon-extra mui-icon-extra-order"></span>
          </router-link>
          <div class="mui-media-body" style="width:52px;">概览</div>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
          <router-link to="/mecha">
            <span class="mui-icon mui-icon-extra mui-icon-extra-university"></span>
          </router-link>
          <div class="mui-media-body" style="width:52px;">机构</div>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
          <router-link to="/notice">
            <span class="mui-icon mui-icon-extra mui-icon-extra-notice"></span>
          </router-link>
          <div class="mui-media-body" style="width:52px;">通知</div>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
          <router-link to="/tech">
            <span class="mui-icon mui-icon-extra mui-icon-extra-filter"></span>
          </router-link>
          <div class="mui-media-body" style="width:52px;">技术</div>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
          <router-link to="/push">
            <span class="mui-icon mui-icon-extra mui-icon-extra-express"></span>
          </router-link>
          <div class="mui-media-body" style="width:52px;">推广</div>
        </li>
      </ul>
    </div>
    <!-- 最新通知 -->
    <div style="font-size:16px;margin-left:10px;margin-right:10px;margin-top:20px;">
      最新通知
      <div
        class="mui-card"
        style="margin:0px;margin-top:10px;"
        v-for="item in noticeList"
        :key="item.id"
      >
        <div>
          <div class="mui-card-content">
            <div class="mui-card-content-inner">
              <p>{{item.fbjg}}</p>
              <p style="color: #333;">{{item.tzbt}}</p>
            </div>
          </div>
          <div class="mui-card-footer">
            <p class="mui-card-link">{{item.date}}</p>
            <a class="mui-card-link" @click="toReadNotice(item.id)">阅读</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      noticeList: []
    };
  },
  methods: {
    getNotice() {
      this.$axios.get("/api/getNotice").then(res => {
        this.noticeList = res.data;
      });
    },
    toReadNotice(id) {
      this.$router.push({
        path: `/singleNotice/${id}`
      });
    }
  },
  created() {
    this.getNotice();
  }
};
</script>

<style scoped>
.el-carousel__item h3 {
  color: #475669;
  font-size: 18px;
  opacity: 0.75;
  line-height: 300px;
  margin: 0;
}
.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}
.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
.pic {
  width: 100%;
  height: 100%;
}
.mui-content > .mui-table-view:first-child {
  margin-top: 0;
}
.mui-grid-view.mui-grid-9 {
  background-color: #fff;
}
.mui-grid-view.mui-grid-9 .mui-table-view-cell {
  margin: 0;
  padding-left: 3.6%;
  padding-right: 3.6%;
  vertical-align: top;
  border-right: 0px solid #eee;
  border-bottom: 0px solid #eee;
  font-size: 8px;
}
.mui-grid-view.mui-grid-9 {
  margin: 0;
  padding: 0;
  border-top: 0px solid #eee;
  border-left: 0px solid #eee;
}
li a {
  background-color: red;
  border-radius: 120px;
  width:52px;
  height: 52px;
}
span {
  color: #fff;
  padding-top: 6px;
}
li {
  width: 20%;
}
</style>
