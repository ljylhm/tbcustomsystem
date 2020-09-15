<template>
  <div class="login-container">
    <div class="login-content">
      <div class="login-header">用户登录</div>

      <div class="login-input-container">
        <el-form :model="form" :rules="rules" ref="form">

          <div class="login-input_item">
            <div class="login-input_item_label">账号:</div>
            <div class="login-input_item_content">
              <el-form-item prop="phone">
                <el-input placeholder="请输入注册时的手机号码" v-model="form.phone" size="medium">
                  <i slot="prefix" class="el-input__icon el-icon-user"></i>
                </el-input>
              </el-form-item>
            </div>
          </div>

          <div class="login-input_item space-margin-top-20">
            <div class="login-input_item_label">密码:</div>
            <div class="login-input_item_content">
              <el-form-item prop="password">
                <el-input placeholder="请输入密码" type="password" v-model="form.password" size="medium">
                  <i slot="prefix" class="el-input__icon el-icon-lock"></i>
                </el-input>
              </el-form-item>
            </div>
          </div>

        </el-form>

        <div class="login-btn">
          <el-button size="medium" type="primary" @click="loginAction">登录</el-button>
        </div>

        <div class="login-tips">
          <el-link @click="toForget">会员注册</el-link>
          <el-link>忘记密码</el-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src
import { routerHelper } from "@/login/router";
import { httpPost } from "@/lib/http";

interface IProps {}

const phone_rule = /^1[3456789]\d{9}$/;

@Component({
  components: {
    HelloWorld,
  },
})
export default class Login extends Vue<IProps> {

  form = {
    phone: "",
    password: "",
  };

  rules = {
    phone: [{ validator: this.checkPhone, trigger: "blur" }],
    password: [{ validator: this.checkPassword, trigger: "blur" }],
  };

  checkPhone(rule: any, value: string, callback: any) {
    console.log("...",value)
    if (!value) return callback("请输入手机号码");
    if (!phone_rule.test(value)) return callback("请输入正确的手机号码");
    callback();
  }

  checkPassword(rule: any, value: string, callback: any) {
    console.log("...",value)
    if (!value) return callback("请输入密码");
    if (value.length < 6) return callback("密码的长度不能小于6位");
    callback();
  }

  toForget() {
    routerHelper.to("/forget");
  }

  loginAction() {
    console.log("form form",this.form);
    (this.$refs["form"] as any).validate((valid: boolean) => {
      if (valid) {
        httpPost("/api/login", this.form).then((data) => {});
      }
    });
  }

  beforeCreated() {
    console.log("进入了这里...");
  }
}
</script>

<style lang="scss">
@mixin flex($direction) {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: $direction;
}

.space-margin-top-30 {
  margin-top: 30px;
}

.space-margin-top-20 {
  margin-top: 20px;
}

.login-container {
  width: 100vw;
  height: 100vh;
  background: url("../../assets/login-bg.jpg") no-repeat center center;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  .login-content {
    width: 400px;
    height: auto;
    border-radius: 15px;
    background: #fff;
    .login-header {
      width: 100%;
      height: 50px;
      line-height: 50px;
      box-sizing: border-box;
      padding: 0px 20px;
      font-weight: 600;
      color: #323232;
      font-size: 18px;
      border-bottom: 1px solid #ddd;
    }

    .login-input-container {
      box-sizing: border-box;
      padding: 30px;
      .el-form-item {
        margin-bottom: 0px;
      }
      .login-input_item {
        @include flex(flex-start);
        align-items: center;
        .login-input_item_label {
          width: 60px;
        }
        .login-input_item_content {
          flex: 1;
        }
      }
    }

    .login-tips {
      width: 100%;
      @include flex(space-between);
      align-items: center;
      margin-top: 20px;
    }
  }
  .login-btn {
    width: 100%;
    margin-top: 30px;
    .el-button--primary {
      width: 100%;
    }
    .el-button--medium {
      padding: 12px 20px;
    }
  }
}
</style>
