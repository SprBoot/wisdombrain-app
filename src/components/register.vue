<template>
  <div style="width:100%;height:100%;">
    <header id="header" class="mui-bar mui-bar-nav">
      <router-link class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left" to="/login"></router-link>
      <h1 class="mui-title">注册</h1>
    </header>
    <div>
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
      <form @submit.prevent="register">
        <div class="login_form">
          <div class="input">
            <div class="img">
              <img style="width:27px;height: 27px;" src="../assets/images/icon_user.png">
            </div>
            <input
              type="text"
              v-model="user.username"
              placeholder="请输入用户账号"
              @blur="checkUserName"
              required="required"
            >
            <div class="img">
              <img class="img_del" src="../assets/images/icon_del.png" @click="delUserNameInfo()">
            </div>
          </div>
          <div class="line"/>
          <div class="input">
            <div class="img">
              <img style="width:20px;height: 25px;" src="../assets/images/icon_pwd.png">
            </div>
            <input
              type="password"
              v-model="user.password"
              placeholder="请输入密码"
              style="margin-bottom:0px;"
              required="required"
            >
            <div class="img">
              <img class="img_pwd_switch" src="../assets/images/icon_pwd_switch.png">
            </div>
          </div>
          <div class="line"/>
          <div class="input">
            <div class="img">
              <img style="width:20px;height: 25px;" src="../assets/images/3.png">
            </div>
            <input
              type="password"
              v-model="user.againPassword"
              placeholder="再次输入"
              style="margin-bottom:0px;"
              required="required"
              @blur="passwordCheck"
            >
            <div class="img">
              <img class="img_pwd_switch" src="../assets/images/icon_pwd_switch.png">
            </div>
          </div>
          <div class="line"/>
          <!-- 姓名 -->
          <div class="input">
            <div class="img">
              <img style="width:27px;height: 27px;" src="../assets/images/4.png">
            </div>
            <input type="text" v-model="user.name" placeholder="请输入姓名" required="required">
            <div class="img">
              <img class="img_del" src="../assets/images/icon_del.png" @click="delNameInfo()">
            </div>
          </div>
          <div class="line"/>
          <!-- 单位 -->
          <div class="input">
            <div class="img">
              <img style="width:27px;height: 27px;" src="../assets/images/ty1.png">
            </div>
            <input type="text" v-model="user.dw" placeholder="请输入单位" required="required">
            <div class="img">
              <img class="img_del" src="../assets/images/icon_del.png" @click="delPositionInfo()">
            </div>
          </div>
          <div class="line"/>
        </div>
        <div class="login_form" style="border:0px solid #d6d6d6;">
          <!-- 登录提交 -->
          <input
            class="submit"
            type="submit"
            style="border:0px solid #007aff;text-align:center;width:100%;"
            value="注册"
          >
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        username: "",
        password: "",
        againPassword: "",
        name: "",
        dw: ""
      }
    };
  },
  methods: {
    checkUserName() {
      this.$axios
        .get("/api/usernameCheck?username=" + this.user.username)
        .then(res => {
          if (res.data.code === "200") {
            this.$message.error({
              message: "用户名已占用！",
              center: true
            });
            this.user.username = null;
          }
        });
    },
    passwordCheck() {
      if (this.user.password != null) {
        if (this.user.password != this.user.againPassword) {
          this.$message.error({
            message: "两次输入的密码不一致！",
            center: true
          });
          this.user.password = null;
          this.user.againPassword = null;
        }
      }
    },
    delUserNameInfo() {
      this.user.username = null;
    },
    delNameInfo() {
      this.user.name = null;
    },
    delPositionInfo() {
      this.user.dw = null;
    },
    register() {
      this.$axios.post("/api/register?name="+this.user.name+"&&username="+
      this.user.username+"&&password="+this.user.password+"&&dw="+this.user.dw).then(res => {
          this.$message({
            message: "注册成功！",
            type: "success",
            center: true
          });
          this.$router.push("/login");
      });
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
.posi {
  margin-top: 30px;
}
input[type="text"] {
  margin-bottom: 0px;
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
