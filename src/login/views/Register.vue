<template>
  <div class="forget-container">
    <div class="forget-header"></div>
    <div class="forget-content">
      <div class="forget-header">马上注册</div>
      <div class="forget-label">
        <div
          class="forget-label-item"
          :class="{ 'forget-label-item-select': status == 'edit' }"
        >
          验证会员信息
        </div>
      </div>

      <div class="forget-input">
        <el-form :model="form" :rules="rules" ref="form">
          <div class="forget-input_item">
            <div class="forget-input_item_label">登录会员名：</div>
            <div class="forget-input_item_content forget-input_item_long">
              <el-form-item prop="name">
                <el-input
                  v-model="form.name"
                  placeholder="请输入您的登录会员名"
                ></el-input>
              </el-form-item>
            </div>
          </div>

          <div class="forget-input_item">
            <div class="forget-input_item_label">手机号码：</div>
            <div class="forget-input_item_content forget-input_item_long">
              <el-form-item prop="phone">
                <el-input
                  v-model="form.phone"
                  placeholder="请输入注册时绑定的手机号码~"
                ></el-input>
              </el-form-item>
            </div>
          </div>

          <div class="forget-input_item">
            <div class="forget-input_item_label">验证码：</div>
            <div class="forget-input_item_content forget-input_item_short">
              <el-form-item prop="code">
                <el-input
                  v-model="form.code"
                  placeholder="请输入验证码"
                ></el-input>
              </el-form-item>
            </div>
            <div id="forget-verify"></div>
          </div>

          <div class="forget-input_item">
            <div class="forget-input_item_label">QQ：</div>
            <div class="forget-input_item_content forget-input_item_long">
              <el-form-item prop="qq">
                <el-input v-model="form.qq" placeholder="请输入密码"></el-input>
              </el-form-item>
            </div>
          </div>

          <div class="forget-input_item">
            <div class="forget-input_item_label">密码：</div>
            <div class="forget-input_item_content forget-input_item_long">
              <el-form-item prop="password">
                <el-input
                  type="password"
                  v-model="form.password"
                  placeholder="请输入密码"
                ></el-input>
              </el-form-item>
            </div>
          </div>

          <div class="forget-input_item">
            <div class="forget-input_item_label">重复密码：</div>
            <div class="forget-input_item_content forget-input_item_long">
              <el-form-item prop="password_again">
                <el-input
                  type="password"
                  v-model="form.password_again"
                  placeholder="请输入重复密码"
                ></el-input>
              </el-form-item>
            </div>
          </div>

          <div class="forget-input_item">
            <div class="forget-input_item_label">手机验证码：</div>
            <div class="forget-input_item_content forget-input_item_long">
              <el-form-item prop="verify_code">
                <el-input
                  v-model="form.verify_code"
                  placeholder="请输入6位验证码"
                ></el-input>
              </el-form-item>
            </div>
            <div class="verify-btn">获取验证码</div>
          </div>
        </el-form>

        <div class="next-btn" @click="registerAction">
          <el-button type="primary" round>马上注册</el-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { httpGet,httpPost } from '@/lib/http'
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src
import GVerify from "@/lib/verify"; // @ is an alias to /src

interface IProps {}

const phone_rule = /^1[3456789]\d{9}$/;

@Component({
  components: {
    HelloWorld,
  },
})
export default class Forget extends Vue<IProps> {
  status = "edit";

  gVerify: any = "";

  form = {
    name: "",
    password: "",
    password_again: "",
    qq: "",
    verify_code: "",
    code: "",
  };

  rules = {
    name: [{ required: true, message: "请输入用户昵称", trigger: "blur" }],
    phone: [{ validator: this.checkPhone, trigger: "blur" }],
    password: [{ validator: this.checkPassword, trigger: "blur" }],
    password_again: [{ validator: this.checkPasswordAgain, trigger: "blur" }],
    code: [{ validator: this.checkVerifyCode, trigger: "blur" }],
  };

  beforeCreated() {
    console.log("进入了这里...");
  }

  mounted() {
    this.gVerify = new GVerify("forget-verify");

     httpGet("/api/current",{
       token:"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC8xMjkuMjExLjg3Ljc5XC9hcGlcL2xvZ2luIiwiaWF0IjoxNTk5ODkxNTI5LCJleHAiOjE1OTk4OTUxMjksIm5iZiI6MTU5OTg5MTUyOSwianRpIjoiVXBnWGxWOWE0WERHRGRlayIsInN1YiI6MSwicHJ2IjoiYzFiNjViMWYwZDY4YTY5YTBiMWNmMjk2NzNkMjg1NGJjMGYyOTkzZCJ9.eV8P7OG_UTl96-wqv7HjJ6nN0G8_A-oM3shsx3EBTtk"
     }).then(data=>{
      console.log("用户信息",data)
    })
  }

  checkPhone(rule: any, value: string, callback: any) {
    if (!value) return callback("请输入手机号码");
    if (!phone_rule.test(value)) return callback("请输入正确的手机号码");
    callback();
  }

  checkPassword(rule: any, value: string, callback: any) {
    if (!value) return callback("请输入密码");
    if (value.length < 6) return callback("密码的长度不能小于6位");
    callback();
  }

  checkPasswordAgain(rule: any, value: string, callback: any) {
    if (!value) return callback("请输入密码");
    if (value.length < 6) return callback("密码的长度不能小于6位");
    if (value !== this.form.password) return callback("两次输入密码不一致");
    callback();
  }

  checkVerifyCode(rule: any, value: string, callback: any) {
    if (!value) return callback("图形验证码");
    if (!this.gVerify.validate(value)) {
      this.gVerify.refresh();
      return callback("图形验证码输入不一致，请重新输入");
    }
    callback();
  }

  doRegister(){
    httpPost("/api/register",this.form).then(data=>{
      console.log("132321")
    })
  }

  registerAction() {
    (this.$refs["form"] as any).validate((valid: boolean) => {
      if (valid) {
          this.doRegister()
      }
    });
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

@mixin setHeight($height) {
  height: $height;
  line-height: $height;
}

.forget-container {
  .forget-header {
    width: 100%;
    height: 80px;
  }
  .forget-content {
    width: 960px;
    height: auto;
    border: 1px solid #ddd;
    margin: 0 auto;
    .forget-header {
      @include setHeight(50px);
      font-weight: 600;
      font-size: 18px;
      color: #323232;
      box-sizing: border-box;
      padding: 0px 20px;
      border-bottom: 1px solid #ddd;
    }
    .forget-label {
      width: 880px;
      margin: 20px auto;
      font-size: 14px;
      @include flex(flex-start);
      .forget-label-item {
        text-align: center;
        @include setHeight(40px);
        background: #eee;
        color: #323232;
        flex: 1;
      }
      .forget-label-item-select {
        background: #ff9900;
        color: #ffffff;
      }
    }
    .forget-input {
      padding: 20px 0px 20px 160px;
      .el-form-item {
        margin-bottom: 0px;
      }
      .forget-input_item {
        margin: 0 auto 30px;
        font-size: 14px;
        display: inline-block;
        @include flex(flex-start);

        .verify-btn {
          color: #fff;
          background: #409eff;
          padding: 0px 10px;
          border-radius: 2px;
          margin-left: 20px;
          @include setHeight(36px);
          cursor: pointer;
        }

        .forget-input_item_label {
          width: 200px;
          text-align: right;
          @include setHeight(36px);
        }

        .forget-input_item_short {
          width: 200px;
        }

        .forget-input_item_long {
          width: 300px;
        }

        .forget-input_item_content {
          .el-input__inner {
            height: 36px;
            line-height: 36px;
          }
        }

        #forget-verify {
          margin-left: 20px;
        }
      }
      .next-btn {
        margin-left: 200px;
        .el-button--primary {
          width: 280px;
        }
      }
    }
  }
}
</style>
