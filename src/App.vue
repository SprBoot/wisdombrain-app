<template>
  <div>
    <header id="header" class="mui-bar mui-bar-nav">
      <h1 class="mui-title">淮安智慧谷</h1>
    </header>
    <div class="posi">
      <router-view></router-view>
    </div>
    <nav class="mui-bar mui-bar-tab">
      <router-link class="mui-tab-item" to="/home">
        <span class="mui-icon mui-icon-home"></span>
        <span class="mui-tab-label">首页</span>
      </router-link>
      <router-link class="mui-tab-item" to="/news">
        <span class="mui-icon mui-icon-extra mui-icon-extra-new"></span>
        <span class="mui-tab-label">新闻</span>
      </router-link>
      <router-link class="mui-tab-item" to="/user">
        <span class="mui-icon mui-icon-contact"></span>
        <span class="mui-tab-label">用户</span>
      </router-link>
    </nav>
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style scoped>
.posi {
  margin-top: 40px;
  margin-bottom: 60px;
}
body {
  font-family: "Microsoft YaHei";
}
</style>
