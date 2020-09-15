<template>
  <div class="personal-container">

      <el-dialog
        title="支付密码修改"
        width="500px"
        :visible="showPwdModal"
        @close="closePayPwdModal"
      >
        <div>
            <div class="pwd-dialog_item">
                设置密码：<el-input 
                size="medium" 
                class="pwd-dialog_input" 
                v-model="resetPwdForm.origin_pwd"
                placeholder="请输入新的支付密码"
                ></el-input> 
            </div>

            <div class="pwd-dialog_item">
                确认密码：<el-input 
                size="medium" 
                class="pwd-dialog_input" 
                v-model="resetPwdForm.current_pwd"
                placeholder="请输入确认新的支付密码"
                ></el-input> 
            </div>

            <div class="pwd-dialog_item">
                支付密码：<el-input 
                size="medium" 
                class="pwd-dialog_input" 
                v-model="resetPwdForm.pay_pwd"
                placeholder="请输入登录密码"></el-input> 
            </div>
        </div>

        <span slot="footer" class="dialog-footer">
            <el-button @click="showPwdModal = false">确认提交</el-button>
            <el-button type="primary" @click="showPwdModal = false">返回修改</el-button>
        </span>
      </el-dialog>

      <div class="person-left">
           <Slide 
              :current-index = "'/personal'"  
           />
      </div>
      <div class="person-right">
          <div class="person-page-container">

            <div class="person-page-left">
                <div class="person-item">
                会员名：1588888888
            </div>
            <div class="person-item">
                总资产：76.80
            </div>

            <div class="person-item">
                登录密码：已设置
                <el-button type="primary" size="mini" @click="openPayPwdModal">修改</el-button>
            </div>

            <div class="person-item">
                支付密码：已设置
                <el-button type="primary" size="mini">修改</el-button>
            </div>

             <div class="person-item">
                QQ：2361618191
                <el-button type="primary" size="mini">修改</el-button>
            </div>

            <div class="person-item">
                微信：
                <el-button type="primary" size="mini">修改</el-button>
            </div>
            </div>
            
            <div class="person-page-right">
                <div class="person-tips_item">愉快合作：第<span class="zy-font">200</span>天</div>
                <div class="person-tips_item">账户余额<span class="zy-font">76.99</span>元</div>
                <div class="person-tips_item">绑定店铺<span class="zy-font">12</span>个</div>
            </div>

          </div>
      </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Slide from "@/components/Slide.vue"; // @ is an alias to /src
import VAddress from "@/components/VAddress.vue"; // @ is an alias to /src
import { httpGet } from "@/lib/http"

@Component({
  components: {
    Slide,
    VAddress
  }
})
export default class Home extends Vue {

    showPwdModal:boolean = false


    resetPwdForm = {
        origin_pwd: "",
        current_pwd: "",
        pay_pwd: ""
    }

    created(){
       
    }

    openPayPwdModal(){
        this.showPwdModal = true
    }

    closePayPwdModal(){
         this.showPwdModal = false
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

.personal-container {
    width: 1200px;
    height: 400px;
    margin: 20px auto 0px;
    @include flex(flex-start);
    text-align: left;
   

    .person-left{
        width: 180px;
    }
    .person-right{
        padding-left: 30px;
        flex: 1;
    }
}

.pwd-dialog_item{
    @include flex(flex-start);
    align-items: center;
    margin-bottom: 22px;
    .pwd-dialog_input{
        width: 350px;
    }
}

.dialog-footer{
    text-align: center;
    margin: 0 auto;
}

.person-page-container{
    color: #000;
    width: 100%;
    text-align: left;
    font-size: 14px;
    padding-top: 20px;

    @include flex(space-between);
    .person-page-left{
        width: 400px;
    }

    .person-page-right{
        width: 220px;
        height: 240px;
        border-radius: 10px;
        border: 10px solid #dae6fc;
        padding: 30px;
        // text-align: center;
        .person-tips_item{
            margin-bottom: 15px;
        }
    }

    .person-item{
        @include flex(space-between);
        align-items: center;
        margin-bottom: 20px
    }
}
</style>
