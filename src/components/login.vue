<template>
  <div style="width:100%;height:100%;">
    <header id="header" class="mui-bar mui-bar-nav">
      <router-link class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left" to="/user"></router-link>
      <h1 class="mui-title">登录</h1>
    </header>
    <div style="width:100%;height:100%;">
      <div class="head">
        <div class="head_bg">
          <div class="head_inner_bg">
            <img
              style="width: 55px;height: 65px;"
              src="../assets/images/head.png"
              class="head_logo"
            >
          </div>
        </div>
      </div>
      <p class="text" style="color:red;text-align:center;">{{info}}</p>
      <form @submit.prevent="login">
        <div class="login_form">
          <div class="input">
            <div class="img">
              <img style="width:27px;height: 27px;" src="../assets/images/icon_user.png">
            </div>
            <input type="text" v-model="username" placeholder="请输入用户账号">
            <div class="img">
              <img class="img_del" src="../assets/images/icon_del.png" @click="delUserName">
            </div>
          </div>
          <div class="line"/>
          <div class="input">
            <div class="img">
              <img style="width:20px;height: 25px;" src="../assets/images/icon_pwd.png">
            </div>
            <input
              type="password"
              v-model="password"
              placeholder="请输入密码"
              style="margin-bottom:0px;"
            >
            <div class="img">
              <img class="img_pwd_switch" src="../assets/images/icon_pwd_switch.png">
            </div>
          </div>
        </div>
        <!-- 登录提交 -->
        <div class="login_form" style="border:0px solid #d6d6d6;">
          <input
            class="submit"
            type="submit"
            style="border:0px solid #007aff;text-align:center;width:100%;"
            value="登录"
          >
          <div class="opts">
            <p
              class="text"
              style="color:#B6B6B6;text-align:center;margin-top:10px;"
              @click="register"
            >立即注册</p>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: "",
      password: "",
      info: "",
      user: {}
    };
  },
  methods: {
    login() {
      this.$axios.post("/api/login?username="+this.username+"&&password="+this.password).then(res => {
        if (res.data.code === "500") {
          this.info = res.data.msg;
        } else {
          this.$message({
            message: res.data.msg,
            type: "success",
            center: true
          });
          this.user = res.data.user;
          var userInfo = JSON.stringify(this.user);
          this.$store.commit("ADD_COUNT", userInfo);
          this.$router.push("/user");
        }
      }).catch(err=>{
          this.$message({
            message: err.toString(),
            type: "success",
            center: true
          });
      }).finally(()=>{
          this.$message({
            message: "finally",
            type: "success",
            center: true
          });
      });
    },
    register() {
      this.$router.push("/register");
    },
    delUserName() {
      this.username = null;
    }
  }
};
</script>

<style lang="scss" scoped>
$logo-padding: 60px;
$form-border-color: rgba(214, 214, 214, 1);
$text-color: #b6b6b6;
.head {
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: $logo-padding;
  padding-bottom: $logo-padding;

  .head_bg {
    border: 1px solid #fbecf1;
    border-radius: 50px;
    width: 100px;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: center;

    .head_inner_bg {
      border-radius: 40px;
      width: 80px;
      height: 80px;
      display: flex;
      background-color: #fc2c5d;
      align-items: flex-end;
      justify-content: center;
      overflow: hidden;
    }
  }
}
.login_form {
  display: flex;
  margin: 20px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid $form-border-color;
  border-radius: 10px;

  .line {
    width: 100%;
    height: 1px;
    background-color: $form-border-color;
  }

  .input {
    width: 100%;
    max-height: 45px;
    display: flex;
    padding: 3px;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    .img {
      min-width: 40px;
      min-height: 40px;
      margin: 5px;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .img_del {
      width: 21px;
      height: 21px;
    }

    .img_pwd_switch {
      width: 28px;
      height: 12px;
    }

    input {
      outline: none;
      height: 30px;
      width: 100%;
      border: 0px solid rgba(0, 0, 0, 0.2);
      background-color: #fff;

      &:focus {
        outline: none;
      }
    }
  }
}
.posi {
  margin-top: 30px;
}
input[type="text"] {
  margin-bottom: 0px;
}
.submit {
  margin-top: 30px;
  margin-left: 20px;
  margin-right: 20px;
  color: white;
  background-color: rgba(252, 44, 93, 1);
  -webkit-tap-highlight-color: rgba(252, 44, 93, 1);

  &:active {
    color: #b6b6b6;
    background-color: rgba(252, 44, 93, 0.8);
  }
}
</style>
