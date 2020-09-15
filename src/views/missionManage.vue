<template>
  <div class="mission-container">
    <el-dialog :visible.sync="showRemarksModal" class="remarks-modal" :title="'修改任务备注'">
      <el-form>
        <el-form-item :label="'任务编号：'">V61241620966920200902174612</el-form-item>
        <el-form-item :label="'任务备注：'">
          <el-input type="textarea" :rows="4" placeholder="请输入内容" v-model="remarks"></el-input>
        </el-form-item>
      </el-form>

      <span slot="footer" class="dialog-footer">
        <el-button @click="clsoeRemarkModal" round type="warning">确认提交</el-button>
        <el-button type="primary" @click="clsoeRemarkModal" round>返回修改</el-button>
      </span>
    </el-dialog>

    <el-dialog :visible.sync="showDetailModal" class="detail-modal" :title="'查看任务详情'">
      <div class="detail-info">
        <div class="detail-info-header">任务基本信息</div>
        <div class="detail-info-item">
          <div>任务分类： 销量任务</div>
          <div>任务编号： V61241620966920200902174612</div>
        </div>
        <div class="detail-info-item">
          <div>订单编号： 1224865189656197237</div>
        </div>
        <div class="detail-info-item">
          <div>任务平台： 淘宝</div>
          <div>任务类型： 无线端</div>
        </div>
        <div class="detail-info-item">
          <div>产品价格：260.000</div>
        </div>
        <div class="detail-info-item">
          <div>拍下件数： 1</div>
          <div>型号：</div>
        </div>
      </div>

      <div class="detail-info">
        <div class="detail-info-header">搜索关键字</div>
        <div class="detail-info-item">
          <div>搜索关键字： 膜结构车棚</div>
          <div>搜索来路： APP自然搜索</div>
        </div>
        <div class="detail-info-item">
          <div>发货城市：</div>
          <div>价格区间： 无</div>
        </div>
        <div class="detail-info-item">
          <div>排序方式： 无</div>
          <div>其他搜索：</div>
        </div>
      </div>

      <div class="detail-info">
        <div class="detail-info-header">任务要求</div>
        <div class="detail-info-item">
          <div class="detail-info-item_text">
            <span>任务备注：</span>
            <el-input
              type="textarea"
              :autosize="{ minRows: 4, maxRows: 6 }"
              placeholder="请输入内容"
              v-model="detail_remarks"
              readonly="true"
            ></el-input>
          </div>
        </div>
      </div>

      <div class="detail-info">
        <div class="detail-info-header">快递信息</div>
        <div class="detail-info-item">
          <div>运单编号：1233213</div>
          <div>物流公司： 自发快递</div>
        </div>
        <div class="detail-info-item">
          <div>运单号类型： 自发快递</div>
          <div>收货地址：四川省绵阳市</div>
        </div>
      </div>

      <div class="detail-info">
        <div class="detail-info-header">商品信息</div>
        <div class="detail-info-item">
          <div>商品全称： 膜结构车棚自行车棚停车棚雨棚电动车棚遮阳棚张拉膜膜结构景观棚</div>
        </div>
        <div class="detail-info-item_text">
            <span>商品链接：</span>
            <el-input
              type="textarea"
              :autosize="{ minRows: 2, maxRows: 4 }"
              placeholder="请输入内容"
              v-model="detail_remarks"
              readonly="true"
            ></el-input>
        </div>
         <div class="detail-info-item">
            <div class="detail-info-item_text">
            <span>商品展现：</span>
            <img src="http://img.baishou123.cn//data/upload/shopinfo/2020-08-15/5f378b21b303b.png" />
          </div>
        </div>
      </div>

      <span slot="footer" class="dialog-footer">
        <el-button @click="showDetailModal = false" round type="warning">确认提交</el-button>
        <el-button type="primary" @click="showDetailModal = false" round>返回修改</el-button>
      </span>
    </el-dialog>

    <v-header
      :list="[
        '任务管理',
        '待接手任务（0）',
        '进行中任务（0）',
        '待审核订单任务（0）',
        '待审核买手任务（0）',
      ]"
      :currentIndex="currentIndex"
      :handleSwitchTab="handleSwitchTab"
    />

    <div class="zy-font tx-tip">现在需要商家打款本金+部分佣金到买手卡里，其余佣金平台来做打款，（详情看收费标准）</div>

    <div class="mission-form">
      <el-form :inline="true">
        <el-form-item>
          <el-select v-model="searchForm.platType" placeholder="任务分类">
            <el-option
              v-for="item in platTypes"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </el-form-item>

        <el-form-item>
          <el-select v-model="searchForm.missionType" placeholder="全部任务">
            <el-option
              v-for="item in missTypes"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </el-form-item>

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

        <el-form-item label="发布时间">
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
          <el-button type="success" round>批量取消</el-button>
          <el-button type="warning" round>导出</el-button>
        </el-form-item>
      </el-form>
    </div>

    <div class="mission-table">
      <el-table :data="missionData">
        <el-table-column prop="account" label="任务分类" width="100px">
          <template slot-scope="scope">
            <div>淘宝</div>
            <div class="zy-font">销量任务</div>
          </template>
        </el-table-column>

        <el-table-column prop="account" label="商品图片" width="200px">
          <template slot-scope="scope">
            <div class="mission-pic">
              <img
                src="http://img.alicdn.com/imgextra/i2/4259894285/O1CN01VutPqD1hWZcnTXcEF_!!4259894285.jpg_400x400.jpg"
              />
            </div>
          </template>
        </el-table-column>

        <el-table-column prop="account" label="任务/订单编号" width="280px">
          <template slot-scope="scope">
            <div class="zy-font">普通销量任务</div>
            <div>
              任务编号:V61241620966920200902174612
              <span class="zy-font">(APP自然搜索)</span>
            </div>
            <div>订单编号:1224865189656197237</div>
          </template>
        </el-table-column>

        <el-table-column prop="account" label="买号/商品信息" width="260px">
          <template slot-scope="scope">
            <div class="mission-buyer">
              <div class="zy-font">
                买号:s123025967
                <span class="mission-mirror">照妖镜通过</span>
              </div>
              <div>
                <span class="mission-mirror yz-font">商家未验证</span>
                <el-button type="primary" size="mini" round>我已验过</el-button>
              </div>
              <div>关键字：膜结构车棚</div>
              <div>店铺名称：百丽雅旗舰店</div>
              <div>
                <el-button type="text">查看任务详情</el-button>
                <el-button type="text" @click="openRemarkModal">修改备注</el-button>
              </div>
            </div>
          </template>
        </el-table-column>

        <el-table-column prop="account" label="商品价格/任务佣金" width="200px">
          <template slot-scope="scope">
            <div>商品价格：260 元</div>
            <div>实付金额：260.00 元</div>
            <div>任务佣金：6.200 元</div>
            <div>
              转账方式：
              <span class="zy-font">自行转账</span>
            </div>
            <div>
              强制收货：
              <span class="zy-font">否</span>
            </div>
            <div class="zy-font">您将返还4.800元+商品本金给买手</div>
          </template>
        </el-table-column>

        <el-table-column prop="account" label="任务状态" width="200px">
          <template slot-scope="scope">
            <div>
              <el-button type="text">待完成(查看日志)</el-button>
            </div>
            <div>发布时间：2020/09/03 18:59:42</div>
            <div>接手时间：2020/09/04 02:28:49</div>
          </template>
        </el-table-column>

        <el-table-column prop="account" label="操作按钮">
          <template slot-scope="scope">
            <div class="btn-operation">
              <div>
                <el-button type="success" round size="mini">未核对</el-button>
              </div>
              <div>
                <el-button type="primary" round size="mini">发货</el-button>
              </div>
              <div>
                <el-button type="success" round size="mini">查看截图</el-button>
              </div>
              <div>
                <el-button type="success" round size="mini">查看足迹图</el-button>
              </div>
              <div>
                <el-button type="warning" round size="mini">客服介入</el-button>
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
    VHeader
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

  idTypesArray = [
    "任务编号",
    "订单编号",
    "运单号",
    "店铺名称",
    "买号",
    "商品Id",
    "商品名称",
  ];
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
      & img{
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
