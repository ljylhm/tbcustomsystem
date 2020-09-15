<template>
  <div class="custom-servive_container">
    <div class="custom-header">
      <div class="custom-header_item">新客服工单</div>
    </div>

    <el-tabs v-model="activeName" @tab-click="handleTabClick" class="custom-tab_container">
      <el-tab-pane label="任务处罚列表" name="first">
        <div class="custom-form">
          <el-form :inline="true">
            <el-form-item label="工单类型：">
              <el-select v-model="form.orderType" placeholder="请选择" class="short-input">
                <el-option
                  v-for="item in orderTypes"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                ></el-option>
              </el-select>
            </el-form-item>

            <el-form-item label="问题分类：">
              <el-select v-model="form.questionType" placeholder="请选择" class="short-input">
                <el-option
                  v-for="item in questionTypes"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                ></el-option>
              </el-select>
            </el-form-item>

            <el-form-item label="列表类型：">
              <el-select v-model="form.statusType" placeholder="请选择" class="short-input">
                <el-option
                  v-for="item in statusType"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                ></el-option>
              </el-select>
            </el-form-item>
            <br />

            <el-form-item label="任务编号：">
              <el-input v-model="form.missionId" class="short-input"></el-input>
            </el-form-item>

            <el-form-item label="订单编号：">
              <el-input v-model="form.orderId" class="short-input"></el-input>
            </el-form-item>

            <el-form-item label="订单时间：">
              <el-date-picker
                v-model="form.create_time"
                type="daterange"
                range-separator="至"
                start-placeholder="开始日期"
                end-placeholder="结束日期"
              ></el-date-picker>
            </el-form-item>

            <el-form-item>
              <el-button type="primary" round>查询</el-button>
            </el-form-item>
          </el-form>

          <div>
            <el-table :data="customServicePublishData">
              <el-table-column label="任务编号" prop="missionId" align="center" width="200px"></el-table-column>
              <el-table-column label="订单编号" prop="orderId" align="center" width="200px"></el-table-column>
              <el-table-column label="工单类型" prop="orderType" align="center" width="200px"></el-table-column>
              <el-table-column label="问题分类" prop="questionType" align="center" width="180px"></el-table-column>

              <el-table-column label="处罚金额" prop="pubishNumber" align="center" width="180px"></el-table-column>

              <el-table-column label="工单状态" prop="status" align="center" width="180px"></el-table-column>
              <el-table-column label="创建时间" prop="create_time" align="center"></el-table-column>
            </el-table>
          </div>
        </div>
      </el-tab-pane>
      <el-tab-pane label="多退少补列表" name="second">
        <div class="custom-form">
          <el-form :inline="true">
            <el-form-item label="任务编号：">
              <el-input v-model="formOne.missionId" class="short-input"></el-input>
            </el-form-item>

            <el-form-item label="订单编号：">
              <el-input v-model="formOne.orderId" class="short-input"></el-input>
            </el-form-item>
            <br/>

            <el-form-item label="列表类型：">
              <el-select v-model="formOne.statusType" placeholder="请选择" class="short-input">
                <el-option
                  v-for="item in statusType"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                ></el-option>
              </el-select>
            </el-form-item>
            

            <el-form-item label="订单时间：">
              <el-date-picker
                v-model="formOne.create_time"
                type="daterange"
                range-separator="至"
                start-placeholder="开始日期"
                end-placeholder="结束日期"
              ></el-date-picker>
            </el-form-item>

            <el-form-item>
              <el-button type="primary" size="small">查询</el-button>
            </el-form-item>
          </el-form>
        </div>

        <div>
          <el-table :data="moreFixData">
            <el-table-column label="任务编号" prop="missionId" align="center" width="200px"></el-table-column>
            <el-table-column label="订单编号" prop="orderId" align="center" width="200px"></el-table-column>
            <el-table-column label="担保金额" prop="orderType" align="center" width="200px"></el-table-column>
            <el-table-column label="支付金额" prop="questionType" align="center" width="180px"></el-table-column>
            <el-table-column label="工单状态" prop="status" align="center" width="180px"></el-table-column>
            <el-table-column label="创建时间" prop="create_time" align="center"></el-table-column>
          </el-table>
        </div>
      </el-tab-pane>
      <el-tab-pane label="发货提醒列表" name="third">
        <div class="custom-form">
          <el-form :inline="true">
            <el-form-item label="任务编号：">
              <el-input v-model="formTwo.missionId" class="short-input"></el-input>
            </el-form-item>

            <el-form-item label="订单编号：">
              <el-input v-model="formTwo.orderId" class="short-input"></el-input>
            </el-form-item>
            <br/>
            
            <el-form-item label="列表类型：">
              <el-select v-model="formTwo.statusType" placeholder="请选择" class="short-input">
                <el-option
                  v-for="item in statusType"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                ></el-option>
              </el-select>
            </el-form-item>
            

            <el-form-item label="订单时间：">
              <el-date-picker
                v-model="formTwo.create_time"
                type="daterange"
                range-separator="至"
                start-placeholder="开始日期"
                end-placeholder="结束日期"
              ></el-date-picker>
            </el-form-item>

            <el-form-item>
              <el-button type="primary" size="small">查询</el-button>
            </el-form-item>
          </el-form>

          <div>
            <el-table :data="sendWranData">
              <el-table-column label="任务编号" prop="missionId" align="center" width="200px"></el-table-column>
              <el-table-column label="订单编号" prop="orderId" align="center" width="200px"></el-table-column>
              <el-table-column label="任务状态" prop="orderstatus" align="center" width="180px"></el-table-column>
              <el-table-column label="工单状态" prop="status" align="center" width="180px"></el-table-column>
              <el-table-column label="创建时间" prop="create_time" align="center"></el-table-column>
            </el-table>
          </div>
        </div>
      </el-tab-pane>
    </el-tabs>
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
export default class Publish extends Vue {
  activeName = "first";

  form = {
    orderType: "",
    questionType: "",
    listType: "",
    missionId: "",
    orderId: "",
    create_time: "",
  };

  formOne = {
    missionId: "",
    orderId: "",
    statusType: "",
    create_time: "",
  };

  formTwo = {
    missionId: "",
    orderId: "",
    statusType: "",
    create_time: "",
  };

  orderTypes = [
    {
      value: "1",
      label: "订单信息错误",
    },
    {
      value: "2",
      label: "好评问题",
    },
    {
      value: "3",
      label: "其他导致卖家损失的行为",
    },
    {
      value: "4",
      label: "任务过程出错",
    },
    {
      value: "5",
      label: "提醒卖家发货",
    },
    {
      value: "6",
      label: "抖音任务",
    },
  ];

  questionTypes = [
    {
      value: "1",
      label: "问题一",
    },
    {
      value: "2",
      label: "问题二",
    },
  ];

  statusType = [
    {
      value: "1",
      label: "待处理",
    },
    {
      value: "2",
      label: "跟进中",
    },
    {
      value: "3",
      label: "处理完成",
    },
    {
      value: "4",
      label: "已撤销",
    },
    {
      value: "5",
      label: "拒绝处理",
    },
  ];

  customServicePublishData = [
    {
      missionId: "123321",
      orderId: "13213",
      orderType: "-",
      questionType: "-",
      pubishNumber: 60,
      status: "-",
      create_time: "-",
    },
  ];

  moreFixData = [
    {
      missionId: "123321",
      orderId: "13213",
      warrantNumber: "123",
      payNumber: "123321",
      status: "",
      create_time: "",
    },
  ];

  sendWranData = [
    {
      missionId: "123321",
      orderId: "13213",
      status: "",
      orderstatus: "",
      create_time: "",
    },
  ];

  handleTabClick(tab: string) {
    console.log(tab, event);
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

.custom-servive_container {
  width: 1400px;
  margin: 0 auto;
  padding-top: 40px;
  .custom-header {
    width: 100%;
    height: 50px;
    line-height: 50px;
    font-size: 14px;
    background: #eee;
    text-align: left;
    .custom-header_item {
      display: inline-block;
      text-align: center;
      padding: 0px 20px;
      background: #4782ef;
      color: #fff;
    }
  }

  .custom-tab_container {
    margin: 10px 0px;
  }

  .custom-form {
    margin: 10px 0px;
    text-align: left;
    .short-input {
      width: 150px;
      margin-right: 10px;
    }
  }
}
</style>
