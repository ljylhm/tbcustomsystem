<template>
  <div class="pay-account-container">
    <div class="person-left">
      <VPaySlide :current-index="'/payAccount'" />
    </div>
    <div class="person-right">
      <div class="pay-header">
        <div class="pay-header_left">
          <div class="pay-account_item zy-font zy-weight">麻烦各位老板转账到支付宝 预祝各位老板大红大紫</div>
          <div class="pay-account_item">
            <div class="pay-account_item_label">收款人：</div>
            <div class="pay-account_item_content"></div>张三
          </div>
          <div class="pay-account_item">
            <div class="pay-account_item_label">收款账号：</div>
            <div class="pay-account_item_content">157889322@qq.com</div>
          </div>

          <div class="pay-account_item xs-font zy-weight">我的账户信息</div>

          <!-- 收款人信息集合 -->
          <div class="collect-container">
            <div class="pay-account_item">
              <div class="pay-account_item_label">账户余额：</div>
              <div class="pay-account_item_content">100元</div>
            </div>

            <div class="pay-account_item">
              <div class="pay-account_item_label">支付宝账号：</div>
              <div class="pay-account_item_content">uzzh069883@163.com</div>
            </div>

            <div class="pay-account_item">
              <div class="pay-account_item_label">支付宝开户人：</div>
              <div class="pay-account_item_content">宗晓芳</div>
            </div>

            <div class="pay-account_item">
              <div class="pay-account_item_label">转账备注：</div>
              <div class="pay-account_item_content">6124</div>
            </div>

            <div class="pay-account_item">
              <div class="pay-account_item_label">提示：</div>
              <div
                class="pay-account_item_content zy-font"
              >现在需要商家打款本金+部分佣金到买手卡里，其余佣金平台来做打款，（详情看收费标准）</div>
            </div>

            <div class="pay-account_item">
              <div class="pay-account_item_label">支付宝昵称：</div>
              <div class="pay-account_item_content zy-font">
                <el-input
                  :style="{width:'200px'}"
                  v-model="aliPayName"
                  :disabled="isAliPayInputActive"
                  placeholder="请输入您的支付宝昵称"
                ></el-input>
                <el-button :style="{marginLeft:'10px'}" type="primary" @click="saveAliPayName">保存</el-button>（必填）
              </div>
            </div>

            <div class="pay-account_item">
              <div class="pay-account_item_label">交易流水号：</div>
              <div class="pay-account_item_content zy-font">
                 <el-input :style="{width:'200px'}" v-model="aliPaySerial" placeholder="请输入支付宝交易流水号"></el-input>
                <el-input :style="{width:'200px',marginLeft:'15px'}" v-model="aliPayNameCount" placeholder="请输入金额"></el-input>
                <el-button :style="{marginLeft:'10px'}" type="primary" @click="saveAliPayNameCount">保存</el-button>
              </div>
            </div>
          </div>
        </div>
        <div class="pay-header_right">
          <div class="pay-header_right_title">充值小贴士</div>
          <div class="pay-header_right_content">
            <div class="pay-header_right_subtitle zy-font">轮流更换支付宝，请充值的时候仔细看，否则不会到账！</div>
            <div class="pay-header_right_text">1. 目前站点暂时只支持支付宝充值，请使用支付宝扫进行转账。(转账前请核对收款人信息，见下方)</div>
            <div
              class="pay-header_right_text"
            >2. 在转账页面备注一栏填写在本站的专属ID（见下方），可实现自动到账!不要低于100充值，会扣除帐号资金、需要联系客服退回！谢谢</div>
            <div
              class="pay-header_right_text"
            >3. 在转账页面备注一栏填写在本站的专属ID（见下方），可实现自动到账!不要低于100充值，会扣除帐号资金、需要联系客服退回！谢谢</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import VPaySlide from "@/components/VPaySlide.vue"; // @ is an alias to /src
import { openSuccessMsg, openWarnMsg } from '@/lib/notice';

@Component({
  components: {
    VPaySlide,
  },
})
export default class AddGoods extends Vue {
  aliPayName: string = "";

  aliPayNameCount: string = "";

  aliPaySerial: string = "";

  isAliPayInputActive: boolean = false;

  // 保存支付宝昵称的方法
  saveAliPayName() {
    // if (this.isAliPayInputActive) {
    //   this.isAliPayInputActive = false;
    // }else{
    //   this.isAliPayInputActive = true
    // }
  }

  saveAliPayNameCount(){
    if(!this.aliPayNameCount || this.aliPaySerial){
      openWarnMsg("流水号和交易金额不能为空")
    }
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

.zy-font {
  color: red;
}

.xs-font {
  color: #4882f0;
}

.zy-weight {
  font-weight: 600;
}

.font-18 {
  font-size: 18px;
}

.font-14 {
  font-size: 14px;
}

.space-margin-right-20 {
  margin-right: 20px;
}

.el-table td,
.el-table th {
  text-align: center;
}

.pay-account-container {
  width: 1400px;
  height: 400px;
  text-align: left;
  margin: 20px auto 0px;
  @include flex(flex-start);
  flex-wrap: nowrap;

  .person-left {
    width: 180px;
  }
  .person-right {
    padding-left: 30px;
    flex: 1;

    .pay-header {
      @include flex(space-between);
      font-size: 14px;
      .pay-header_left {
      }
      .pay-header_right {
        width: 465px;
        position: relative;
        margin: 10px;
        border: 10px solid #dae6fc;
        border-radius: 10px;
        .pay-header_right_content {
          padding: 0px 20px;
          box-sizing: border-box;
          background: #fff;
          height: 310px;
          overflow: auto;
          &::-webkit-scrollbar {
            width: 8px;
            height: 5px;
          }

          &::-webkit-scrollbar-button {
            background-color: #dae6fc;
          }

          &::-webkit-scrollbar-corne {
            background: #4882f0;
          }

          &::-webkit-scrollbar-thumb {
            background: #4882f0;
            border-radius: 8px;
          }

          &::-webkit-scrollbar-track {
            background: #dae6fc;
          }

          &::-webkit-scrollbar-track-piece {
            background: #dae6fc;
          }
        }

        .pay-header_right_title {
          position: absolute;
          top: -20px;
          background: url(http://img.baishou123.cn/public/home/css/img/xiaotishi.gif)
            no-repeat;
          width: 201px;
          font-size: 16px;
          position: relative;
          text-align: center;
          color: #fff;
          margin: 0px auto;
          line-height: 34px;
        }
        .pay-header_right_subtitle {
          font-size: 18px;
          line-height: 28px;
          margin-bottom: 10px;
        }
        .pay-header_right_text {
          font-weight: 600;
          line-height: 20px;
          margin-bottom: 15px;
        }
      }
    }
  }

  .shop-operation_btn {
    margin-bottom: 10px;
  }

  .pay-account_item {
    @include flex(flex-start);
    .pay-account_item_label {
      width: 120px;
      text-align: right;
      font-weight: 600;
    }
    .pay-account_item_content {
      padding-left: 4px;
    }
    align-items: center;
    margin-bottom: 22px;
    .pay-account_input {
      width: 350px;
    }
  }

  .collect-container {
  }
}
</style>
