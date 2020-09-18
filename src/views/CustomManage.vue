<template>
  <div class="mission-container">
   
    <v-header
      :list="['全部任务', '进行中', '待发货', '待评价', '待完成', '已完成']"
      :currentIndex="currentIndex"
      :handleSwitchTab="handleSwitchTab"
    />

    <div class="zy-font tx-tip"></div>

    <div class="mission-form">
      <el-form :inline="true">
        <el-form-item>
          <el-select v-model="searchForm.idType">
            <el-option
              v-for="item in idTypes"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </el-form-item>

        <el-form-item>
          <el-input :v-model="searchForm.idValue"></el-input>
        </el-form-item>

        <el-form-item label="接手时间">
          <el-date-picker
            v-model="searchForm.create_time"
            type="daterange"
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
          ></el-date-picker>
        </el-form-item>

        <el-form-item label="发布时间">
          <el-button type="primary" round>查询</el-button>
          <el-button type="warning" round>导出</el-button>
        </el-form-item>
      </el-form>
    </div>

    <div class="mission-table">
      <el-table :data="missionData">
        <el-table-column prop="account" label="任务/订单编号" width="400px">
          <template slot-scope="scope">
            <div class="mission-table_item">
              <div>任务编号：V4384021853120200916142608</div>
              <div class="zy-font">App自然搜索</div>
              <div>订单编号：V4384021853120200916142608</div>
              <div>
                任务说明：先搜索小型会议桌，随便货比3家，找到我的款式后，先收藏，然后退出淘宝，然后重新到搜索页面，搜索会议桌，找到我的款式后，加购物车，然后退出
                我的淘宝，在购物车里面选择下单购买。
              </div>
              <div>
                <el-button type="text">
                  查看备注
                </el-button>
              </div>
            </div>
          </template>
        </el-table-column>

        <el-table-column prop="account" label="买号/商品信息" width="240px">
          <template slot-scope="scope">
            <div class="mission-table_item">
              <div>买号：李易峰</div>
              <div>店铺名称： 淼*****店 (1)</div>
            </div>
          </template>
        </el-table-column>

        <el-table-column prop="account" label="商品价格/任务佣金" width="280px">
          <template slot-scope="scope">
            <div class="mission-table_item">
              <div>商品价格：260 元</div>
              <div>佣金：0.000 元</div>
              <div>
                <el-button type="text" class="zy-font">
                  货款由商家支付，佣金从平台提现。
                </el-button>
              </div>
            </div>
          </template>
        </el-table-column>

        <el-table-column prop="account" label="任务状态" width="300px">
          <template slot-scope="scope">
            <div class="mission-table_item">
              <div>
                <el-button type="text">待完成(查看日志)</el-button>
              </div>
              <div>接手时间：2020/09/04 02:28:49</div>
            </div>
          </template>
        </el-table-column>

        <el-table-column prop="account" label="操作按钮">
          <template slot-scope="scope">
            <div class="btn-operation">
              <div>
                <el-button type="success" round size="mini">淘宝任务</el-button>
              </div>
            </div>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import VHeader from "@/components/VHeader.vue"; // @ is an alias to /src

type ISelect = {
  label: string;
  value: string;
};

@Component({
  components: {
    VHeader,
  },
})
export default class Publish extends Vue {
  currentIndex: number = 0;
  showRemarksModal: boolean = false;
  showDetailModal: boolean = false;

  remarks: string = "";
  detail_remarks =
    "卡天猫 天猫（商品主图一致 不一致的不要下单）郑重提示做过的不要在做 禁止复购  不要河北 北京的 》先货比3家每家2分钟，必须咨询完5句一问一答来回，没咨询5句的审核不通过，客服不在的不要连续发问，截图关键词进店，和浏览的足迹，足记一定至少包含有5张相关的商品图片，足记不够的审核不通过，后台监控店里深度浏览时间不够的，审核不通过，直接客服介入，申请退款！！！咨询问题参考问题1可以定做膜结构景观棚吗？2质保多久3骨架是什么材质的4按什么方式计价5需要预埋吗 6 100到200平";

  searchForm = {
    platType: "",
    missionType: "",
    idType: "1",
    idValue: "",
    create_time: "",
  };

  platTypes = [
    {
      label: "淘宝",
      value: "1",
    },
    {
      label: "京东",
      value: "2",
    },
    {
      label: "拼多多",
      value: "3",
    },
  ];

  missTypesArray = [
    "隐藏任务",
    "待接手",
    "进行中",
    "待发货",
    "待评价",
    "已完成",
    "待完成",
    "已取消",
    "多商品任务",
  ];
  missTypes: ISelect[] = [];

  idTypesArray = ["任务编号", "订单编号", "任务名称"];
  idTypes: ISelect[] = [];

  missionData = [
    {
      platType: "",
      missionType: "",
      missionId: "",
      orderId: "",

      buyerName: "",
      isMirror: false,
      isVailteSelf: false,
      keyWord: "",
      shopName: "",
    },
  ];

  mounted() {
    this.missTypes = this.missTypesArray.map((item, index) => {
      return {
        label: item,
        value: index.toString(),
      };
    });

    this.idTypes = this.idTypesArray.map((item, index) => {
      return {
        label: item,
        value: index.toString(),
      };
    });
  }

  openRemarkModal() {
    this.showRemarksModal = true;
  }

  clsoeRemarkModal() {
    this.showRemarksModal = false;
  }

  handleSwitchTab(index: number) {
    this.currentIndex = index;
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

.yz-font {
  font-size: 14px;
  font-weight: 600;
  margin-right: 10px;
}

.under-line {
  text-decoration: underline;
  cursor: pointer;
}

.space-margin-top-15 {
  margin-top: 20px;
}
.space-margin-left-15 {
  margin-left: 15px;
}

.pubilsh-choose-header {
  @include flex(flex-start);
  align-items: center;
  .pubilsh-choose_input {
    margin: 0px 10px;
  }
}
.pubilsh-choose-content {
  margin-top: 15px;
}

.mission-container {
  width: 1400px;
  height: auto;
  border: 1px solid #ddd;
  margin: 20px auto 60px;
  padding: 20px;

  .detail-info {
    font-size: 14px;
    .detail-info-header {
      font-weight: 600;
      padding-bottom: 10px;
      border-bottom: 1px solid #ccc;
    }
    .detail-info-item {
      margin: 8px 0px;
      @include flex(flex-start);
      & > div {
        flex: 1;
      }
      & img {
        width: 120px;
        height: 120px;
      }
    }
    .detail-info-item_text {
      margin-top: 10px;
      @include flex(flex-start);
      align-items: flex-start;
    }
  }

  .mission-header {
    width: 100%;
    height: 50px;
    line-height: 50px;
    font-size: 14px;
    background: #eee;
    text-align: left;
    .mission-header_item {
      display: inline-block;
      text-align: center;
      padding: 0px 20px;
      background: #4782ef;
      color: #fff;
    }
  }

  .mission-form {
    text-align: left;
  }

  .mission-table {
    .mission-table_item {
      & > div {
        margin-bottom: 8px;
      }
    }
    .mission-pic {
      width: 100px;
      height: 100px;
      border: 1px solid #000;
      & > img {
        width: 100%;
        height: 100%;
      }
    }

    .mission-mirror {
      display: inline-block;
      border: 1px red solid;
      color: red;
      border-radius: 8px;
      padding-left: 5px;
      padding-right: 5px;
    }

    .mission-buyer {
      & > div {
        margin-bottom: 5px;
      }
    }

    .btn-operation {
      & > div {
        margin-bottom: 8px;
      }
    }
  }

  .tx-tip {
    text-align: left;
    margin: 10px 0px;
  }
}

.remarks-modal {
  text-align: left;
  .el-dialog__title {
    font-size: 16px;
  }
  .el-textarea {
    width: 330px;
  }
  .el-dialog {
    width: 500px;
  }
}

.detail-modal {
  text-align: left;
  .el-dialog__title {
    font-size: 16px;
  }
  .el-textarea {
    width: 600px;
  }
  // .el-dialog {
  //   width: 500px;
  // }
}
</style>
