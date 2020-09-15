<template>
  <div class="home">
    <div class="home-banner_container">
      <div class="home-board-container">
        <div class="home-ban_tab">
          <span
            :class="cur_mission == 'xl' ? 'cur' : ''"
            @click="handleTabChange('xl')"
            >销量任务</span
          >
          <span
            :class="cur_mission == 'fg' ? 'cur' : ''"
            @click="handleTabChange('fg')"
            >复购任务</span
          >
        </div>

        <div class="board-content" v-show="cur_mission == 'xl'">
          <div class="board-list_item">
            <div class="board-list_label">选择平台</div>
            <div
              :class="
                xlForm.select_tb
                  ? 'board-list_btn board-list_btn_select'
                  : 'board-list_btn'
              "
              @click="handleXlChange('select_tb')"
            >
              淘宝
            </div>
            <div
              :class="
                xlForm.select_jd
                  ? 'board-list_btn board-list_btn_select'
                  : 'board-list_btn'
              "
              @click="handleXlChange('select_jd')"
            >
              京东
            </div>
          </div>

          <div class="board-list_item">
            <div class="board-list_label">下单终端</div>
            <div
              :class="
                xlForm.is_pc
                  ? 'board-list_btn board-list_btn_select'
                  : 'board-list_btn'
              "
              @click="handleXlChange('is_pc')"
            >
              电脑端
            </div>
            <div
              :class="
                xlForm.is_phone
                  ? 'board-list_btn board-list_btn_select'
                  : 'board-list_btn'
              "
              @click="handleXlChange('is_phone')"
            >
              无线端
            </div>
          </div>

          <div class="board-list_item">
            <div class="board-list_label">任务类型</div>
            <div
              :class="
                xlForm.is_js
                  ? 'board-list_btn board-list_btn_select'
                  : 'board-list_btn'
              "
              @click="handleXlChange('is_js')"
            >
              及时任务
            </div>
            <div
              :class="
                xlForm.is_order
                  ? 'board-list_btn board-list_btn_select'
                  : 'board-list_btn'
              "
              @click="handleXlChange('is_order')"
            >
              预约任务
            </div>
          </div>

          <div class="board-list_item">
            <div class="board-list_label">金额上限</div>
            <div>
              <el-input
                v-model="xlForm.money_num"
                class="board-list_input"
              ></el-input>
            </div>
          </div>

          <div class="board-start_btn">
            开始任务
          </div>
        </div>

        <div class="board-content" v-show="cur_mission == 'fg'">
          <div class="board-list_item">
            <div class="board-list_label">选择平台</div>
            <div
              :class="
                fgForm.plat_form == 'jd'
                  ? 'board-list_btn'
                  : 'board-list_btn board-list_btn_select'
              "
              @click="handleXlChange('plat_form', 'tb')"
            >
              淘宝
            </div>
          </div>

          <div class="board-list_item">
            <div class="board-list_label">下单终端</div>
            <div
              :class="
                fgForm.os == 'phone'
                  ? 'board-list_btn'
                  : 'board-list_btn board-list_btn_select'
              "
              @click="handleXlChange('os', 'pc')"
            >
              电脑端
            </div>
            <div
              :class="
                fgForm.os == 'pc'
                  ? 'board-list_btn'
                  : 'board-list_btn board-list_btn_select'
              "
              @click="handleXlChange('os', 'phone')"
            >
              无线端
            </div>
          </div>

          <div class="board-list_item">
            <div class="board-list_label">金额上限</div>
            <div>
              <el-input
                v-model="fgForm.money_num"
                class="board-list_input"
              ></el-input>
            </div>
          </div>

          <div class="tabcontant_txt_clear">
            <div class="tabcontant_txt_left">特点</div>
            <div class="tabcontant_txt_right">
              <div>* 目标商品易查找</div>
              <div>* 同时受淘宝接手机会限制</div>
            </div>
          </div>

          <div class="board-start_btn">
            开始任务
          </div>
        </div>
      </div>
    </div>

    <div class="ad-container">
      <div class="ad-content">
        
        <div class="ad-item">
          <div class="ad-item_header">待办事项</div>
          <div class="ad-item_content">
            <div class="ad-logo_item">
              <div class="ad-logo_item_pic">
                <i class="el-icon-alarm-clock"></i>
              </div>
              <div class="ad-logo_item_content">
                销量任务
              </div>
            </div>

            <div class="ad-logo_item">
              <div class="ad-logo_item_pic">
                <i class="el-icon-chat-line-round"></i>
              </div>
              <div class="ad-logo_item_content">
                评价管理
              </div>
            </div>

            <div class="ad-logo_item">
              <div class="ad-logo_item_pic">
                <i class="el-icon-view"></i>
              </div>
              <div class="ad-logo_item_content">
                收费标准
              </div>
            </div>

            <div class="ad-logo_item">
              <div class="ad-logo_item_pic">
                <i class="el-icon-document"></i>
              </div>
              <div class="ad-logo_item_content">黑名单列表</div>
            </div>
          </div>
        </div>

        <div class="ad-item">
          <div class="ad-item_header">平台公告</div>
          <div class="ad-item_content">
            <div class="ad-logo_item">
              <div class="ad-logo_item_pic">
                <i class="el-icon-document"></i>
              </div>
              <div class="ad-logo_item_content">销量任务</div>
            </div>
            <div class="ad-logo_item">
              <div class="ad-logo_item_pic">
                <i class="el-icon-video-play"></i>
              </div>
              <div class="ad-logo_item_content">新手教程</div>
            </div>
            <div class="ad-logo_item">
              <div class="ad-logo_item_pic">
                <i class="el-icon-mic"></i>
              </div>
              <div class="ad-logo_item_content">所有公告</div>
            </div>
            <div class="ad-logo_item">
              <div class="ad-logo_item_pic">
                <i class="el-icon-user"></i>
              </div>
              <div class="ad-logo_item_content">邀请好友</div>
            </div>
          </div>
        </div>

        <div class="ad-item">
          <div class="ad-item_header">平台公告</div>
          <div class="ad-item_content">
            <div class="ad-logo_item">
              <div class="ad-logo_item_pic">
                <i class="el-icon-document"></i>
              </div>
              <div class="ad-logo_item_content">销量任务</div>
            </div>
            <div class="ad-logo_item">
              <div class="ad-logo_item_pic">
                <i class="el-icon-video-play"></i>
              </div>
              <div class="ad-logo_item_content">新手教程</div>
            </div>
            <div class="ad-logo_item">
              <div class="ad-logo_item_pic">
                <i class="el-icon-mic"></i>
              </div>
              <div class="ad-logo_item_content">所有公告</div>
            </div>
            <div class="ad-logo_item">
              <div class="ad-logo_item_pic">
                <i class="el-icon-user"></i>
              </div>
              <div class="ad-logo_item_content">邀请好友</div>
            </div>
          </div>
        </div>
      </div>
  
    </div>


  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src
import Header from "@/components/Header.vue"; // @ is an alias to /src

@Component({
  components: {
    HelloWorld,
    Header,
  },
})
export default class Home extends Vue {
  cur_mission = "xl";

  xlForm: any = {
    // 销量任务
    select_jd: false,
    select_tb: false,
    is_pc: false,
    is_phone: false,
    is_js: false,
    is_order: false,
    money_num: "",
  };

  fgForm: any = {
    // 销量任务
    plat_form: "jd",
    os: "phone",
    mission_type: "js",
    money_num: "",
  };

  handleXlChange(type: string, value: any) {
    this.xlForm[type] = !this.xlForm[type];
  }

  handleTabChange(status: string) {
    this.cur_mission = status;
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

.home {
  .home-banner_container {
    width: 100%;
    height: 400px;
    position: relative;
    background: url(http://img.baishou123.cn/data/upload/fen/2020-08-08/5f2eb50562970.png)
      no-repeat center;
    background-size: 100% 100%;
    .home-board-container {
      position: absolute;
      top: 40px;
      right: 200px;
      background: #fff;
      width: 365px;
      height: auto;
      padding-bottom: 20px;
      .home-ban_tab {
        height: 50px;
        .cur {
          background: url(http://aaa.66145.cn/themes/simplebootx/Public/home/images/sanjiao.png)
            no-repeat center bottom #4882f0;
          color: #fff;
          height: 60px;
          line-height: 60px;
          margin-top: -10px;
        }
        & > span {
          height: 50px;
          line-height: 50px;
          width: 50%;
          float: left;
          text-align: center;
          font-size: 18px;
          background: #e8e8e8;
          font-weight: 600;
          cursor: pointer;
        }
      }
      .board-content {
        padding: 24px 0px 0px;

        .tabcontant_txt_clear {
          width: 330px;
          height: 60px;
          border: 1px dotted #ccc;
          margin: 12px auto;
          border-radius: 4px;
          display: inline-block;
          @include flex(flex-start);
          align-items: center;
          .tabcontant_txt_left {
            color: red;
            width: 74px;
            font-size: 16px;
            line-height: 60px;
            text-align: center;
            border-right: 1px dotted #ccc;
          }
          .tabcontant_txt_right {
            font-size: 14px;
            text-align: left;
            padding-left: 30px;
          }
        }
        .board-list_item {
          @include flex(flex-start);
          align-items: center;
          margin-bottom: 16px;
          .board-list_label {
            width: 100px;
          }
          .board-list_input {
            width: 240px;
          }
          .board-list_btn {
            width: 110px;
            height: 30px;
            line-height: 30px;
            font-size: 14px;
            color: #fff;
            margin-right: 18px;
            text-align: left;
            padding-left: 10px;
            background: url("http://aaa.66145.cn/themes/simplebootx/Public/home/images/checkgrey.png")
              no-repeat center center;
            background-size: 100% 100%;
            &:hover {
              cursor: pointer;
            }
          }
          .board-list_btn_select {
            background: url("http://aaa.66145.cn/themes/simplebootx/Public/home/images/checkblue.png")
              no-repeat center center;
            background-size: 100% 100%;
          }
        }

        .board-start_btn {
          margin: 0 auto;
          background: rgba(72, 130, 240, 1);
          color: #fff;
          width: 320px;
          height: 40px;
          line-height: 40px;
          text-align: center;
          font-size: 14px;
          border-radius: 2px;
          text-decoration: none;
          border-radius: 5px;
          text-align: center;
          &:hover {
            cursor: pointer;
            background: rgba(72, 130, 240, 0.5);
          }
        }
      }
    }
  }

  .ad-container {
    margin-top: 20px;
    @include flex(center);
    .ad-content {
      width: 1200px;
      @include flex(space-between);
      .ad-item {
        width: 570px;
        .ad-item_header {
          @include setHeight(40px);
          background: #4882f0;
          color: #fff;
          font-size: 14px;
        }
        .ad-item_content {
          @include flex(space-between);
          border: 1px solid #ddd;
          padding: 20px;
          .ad-logo_item {
            width: 110px;
            height: 120px;
            background: #eee;
            cursor: pointer;
            .ad-logo_item_pic {
              margin-top: 30px;
              & > i {
                font-size: 30px;
              }
            }
            .ad-logo_item_content {
              text-align: center;
              color: #000;
              margin-top: 12px;
              font-size: 14px;
              &:hover {
                color: #4882f0;
              }
            }
          }
        }
      }
    }
  }
}
</style>
