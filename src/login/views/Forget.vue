<template>
  <div class="forget-container">
    <div class="forget-header"></div>
    <div class="forget-content">
      <div class="forget-header">重置密码</div>
      <div class="forget-label">
        <div class="forget-label-item"
            :class="{'forget-label-item-select' : status == 'edit' }">
          验证会员信息
        </div>
        <div class="forget-label-item"
            :class="{'forget-label-item-select' : status == 'reset' }">重置登录密码</div>
      </div>
      <div v-if="status == 'edit'" class="forget-input">
        <div class="forget-input_item">
          <div class="forget-input_item_label">登录会员名：</div>
          <div class="forget-input_item_content forget-input_item_long">
            <el-input
              v-model="form.name"
              placeholder="请输入您的登录会员名"
            ></el-input>
          </div>
        </div>

        <div class="forget-input_item">
          <div class="forget-input_item_label">手机号码：</div>
          <div class="forget-input_item_content forget-input_item_long">
            <el-input
              v-model="form.phone"
              placeholder="请输入注册时绑定的手机号码~"
            ></el-input>
          </div>
        </div>

        <div class="forget-input_item">
          <div class="forget-input_item_label">验证码：</div>
          <div class="forget-input_item_content forget-input_item_short">
            <el-input v-model="form.code" placeholder="请输入验证码"></el-input>
          </div>
          <div id="forget-verify"></div>
        </div>

        <div class="forget-input_item">
          <div class="forget-input_item_label">手机验证码：</div>
          <div class="forget-input_item_content forget-input_item_long">
            <el-input
              v-model="form.verifyCode"
              placeholder="请输入6位验证码"
            ></el-input>
          </div>
          <div class="verify-btn">获取验证码</div>
        </div>

        <div class="next-btn" @click="toReset">
          <el-button type="primary" round>下一步</el-button>
        </div>
      </div>

      <div v-if="status == 'reset'" class="forget-input">

          <div class="forget-input_item">
            <div class="forget-input_item_label">设置新的密码：</div>
            <div class="forget-input_item_content forget-input_item_long">
              <el-input
                v-model="resetForm.password"
                placeholder="请输入您的登录会员名"
              ></el-input>
            </div>
          </div>

          <div class="forget-input_item">
            <div class="forget-input_item_label">再次输入：</div>
            <div class="forget-input_item_content forget-input_item_long">
              <el-input
                v-model="resetForm.passwordAgain"
                placeholder="请输入您的登录会员名"
              ></el-input>
            </div>
          </div>

           <div class="next-btn" @click="toReset">
            <el-button type="primary" round>确认</el-button>
          </div>

      </div>

    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src
import GVerify from "@/lib/verify"; // @ is an alias to /src

interface IProps {}

@Component({
  components: {
    HelloWorld,
  },
})
export default class Forget extends Vue<IProps> {

  status = "edit"

  form = {
      name: "",
      phone: "",
      code: "",
      verifyCode:""
  }

  resetForm = {
    password: 123,
    passwordAgain: 123
  }

  beforeCreated() {
    console.log("进入了这里...");
  }

  mounted() {
    var verifyCode = new GVerify("forget-verify");
  }

  toReset(){
    this.status = "reset"
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
      .forget-input_item {
        margin: 0 auto 30px;
        font-size: 14px;
        display: inline-block;
        @include flex(flex-start);

        .verify-btn{
          color: #fff;
          background: #409EFF;
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
