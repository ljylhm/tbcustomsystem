<template>
  <div class="publish-container">
    <el-dialog title="选择商品" :visible.sync="showSearchShopModal">
      <div class="pubilsh-choose-header">
        选择商品：
        <div>
          <el-cascader :options="shopOptions"></el-cascader>
        </div>
        <div class="pubilsh-choose_input">
          <el-input v-model="input" placeholder="请输入商品名称"></el-input>
        </div>
        <el-button type="primary">搜索</el-button>
      </div>
      <div class="pubilsh-choose-content">
        <el-table :data="tableData" border>

          <el-table-column
            prop="name"
            label="商品名"
          />

          <el-table-column
            prop="name"
            label="店铺名"
          />

          <el-table-column prop="num" label="数量" width="200" align="center">
            <template slot-scope="scope">
              <el-input
                v-model="scope.row.num"
                placeholder="请输入数量"
                type="number"
              ></el-input>
            </template>
          </el-table-column>

        </el-table>
      </div>
    </el-dialog>

    <el-dialog title="其他搜索条件" :visible.sync="showSearchShopModal">
      <div class="pubilsh-choose-header">
        
      </div>
    </el-dialog>

    <div class="pub-header">
      <div class="pub-header_item" :class="{ 'is-active': status == 'first' }">
        第一步：相关商品设置
      </div>
      <div class="pub-header_item" :class="{ 'is-active': status == 'second' }">
        第二步：快递和备注
      </div>
    </div>

    <div class="pub-item">
      <span>选定商品</span>
      <el-button type="primary" round size="mini">选择商品</el-button>
    </div>

    <div class="pub-table">
      <div class="pub-table_header">商品1</div>
      <table border="1">
        <tr class="pub-table_content_item">
          <td class="pub-table_content_label">商品名称</td>
          <td class="pub-table_content_content">1</td>
          <td rowspan="4" class="pub-table_image">123</td>
        </tr>
        <tr class="pub-table_content_item">
          <td class="pub-table_content_label">店铺名</td>
          <td class="pub-table_content_content">1</td>
        </tr>
        <tr class="pub-table_content_item">
          <td class="pub-table_content_label">商品标题</td>
          <td class="pub-table_content_content">1</td>
        </tr>
        <tr class="pub-table_content_item">
          <td class="pub-table_content_label">商品链接</td>
          <td class="pub-table_content_content">1</td>
        </tr>
      </table>
    </div>

    <div class="pub-item space-margin-top-15">
      <div>
        快递费设置：<el-input
          class="pub-input_price"
          size="mini"
          v-model="form.price"
          type="number"
        />元
      </div>
      <div class="zy-font">
        温馨提示：如果商品不包邮，则在此输入快递费。反之包邮商品不用填写。
      </div>
    </div>

    <div class="pub-item space-margin-top-15">
      <div>
        接单选择：（自行审核买号）
        <el-radio v-model="form.checkBuyer" label="1">是</el-radio>
        <el-radio v-model="form.checkBuyer" label="2">否</el-radio>
      </div>
      <div class="zy-font">
        温馨提示：买手接到单后无法开始任务,需要您进行审核,十分钟不处理自动通过,且通过后不可再换人接单。
      </div>
    </div>

    <div class="pub-item_table space-margin-top-15">
      <div class="pub-item_table_header">标题与图片设置</div>
      <div class="pub-item_table_content">
        <div class="pub-item_table_content_item">
          <div class="left-pub">是否需要买手上传图片(搜索图，足迹图)</div>
          <div class="right-pub">
            <div>
              <el-radio v-model="form.needUpImage" label="1">需要</el-radio>
              <el-radio v-model="form.needUpImage" label="2">不需要</el-radio>
            </div>
            温馨提示：部分商家反馈截图不利于店铺成长、无截图后果需要商家来承担（比如改词，乱搜索等等），平台建议截图模式！！请慎重选择
          </div>
        </div>
      </div>
    </div>

    <div class="pub-item_table space-margin-top-15">
      <div class="pub-item_table_header">
        <span>来路设置</span>
        <div class="pub-item_table_right">
          来路设置总数：<span class="zy-font">0</span> PC：<span class="zy-font"
            >0</span
          >
          无线端：<span class="zy-font">0</span>
          <el-button
            type="primary"
            class="pub-item_table_right_btn"
            round
            size="mini"
            @click="addFromSetting"
            >新增</el-button
          >
        </div>
      </div>

      <div class="pub-item_table_content">
        <el-table :data="tableData" border>
          <el-table-column
            prop="flowType"
            label="流量入口"
            width="200"
            align="center"
          >
            <template slot-scope="scope">
              <el-select v-model="scope.row.flowType" placeholder="请选择">
                <el-option
                  v-for="item in flowTypes"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                >
                </el-option>
              </el-select>
            </template>
          </el-table-column>

          <el-table-column
            prop="keyWord"
            label="关键字"
            width="300"
            align="center"
          >
            <template slot-scope="scope">
              <el-input
                v-model="scope.row.keyWord"
                placeholder="请输入关键字"
              ></el-input>
            </template>

            <template slot="header">
              关键字<span class="zy-font space-margin-left-15 under-line"
                >搜索关键字设置规范</span
              >
            </template>
          </el-table-column>

          <el-table-column prop="num" label="数量" width="200" align="center">
            <template slot-scope="scope">
              <el-input
                v-model="scope.row.num"
                placeholder="请输入数量"
                type="number"
              ></el-input>
            </template>
          </el-table-column>

          <el-table-column
            prop=""
            label="其他设置条件(可选)"
            width="200"
            align="center"
          >
            <template slot-scope="scope">
              <el-button type="primary" round>设置</el-button>
            </template>
          </el-table-column>

          <el-table-column prop="" label="操作" align="center">
            <template slot-scope="scope">
              <el-button
                type="primary"
                round
                @click="deleteFromSetting(scope.$index)"
                >删除</el-button
              >
            </template>
          </el-table-column>
        </el-table>
      </div>
    </div>

    <div class="pub-item_table space-margin-top-15">
      <VPublish />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src
import Header from "@/components/Header.vue"; // @ is an alias to /src
import VPublish from "@/components/VPublish.vue"; // @ is an alias to /src

@Component({
  components: {
    HelloWorld,
    Header,
    VPublish
  },
})
export default class Publish extends Vue {
  // 展示模态框的集合
  showSearchShopModal = false;

  status = "first";
  input = ""

  shopInfo = {
    name: "",
    title: "",
    shop_name: "",
    link: "",
    image: "",
  };

  form = {
    price: 1,
    checkBuyer: "2",
    needUpImage: "2",
    publishType: "1",
  };

  tableData = [
    {
      flowType: "",
      keyWord: "",
      num: "",
    },
  ];

  dateDate = [{}];

  flowTypes = [
    {
      value: "1",
      label: "APP自然搜索",
    },
    {
      value: "2",
      label: "PC自然搜索",
    },
    {
      value: "3",
      label: "APP淘口令",
    },
    {
      value: "4",
      label: "APP直通车",
    },
    {
      value: "5",
      label: "PC直通车",
    },
    {
      value: "6",
      label: "抖音任务",
    },
  ];

  shopOptions = [
    {
      value: "1",
      label: "淘宝",
      children: [
        {
          value: "11",
          label: "耐克",
        },
        {
          value: "12",
          label: "阿迪",
        },
      ],
    },
  ];

  searchShopForm = {
    type: "",
  };

  addFromSetting = () => {
    const o = {
      flowType: "",
      keyWord: "",
      num: "",
    };
    this.tableData.push(o);
  };

  deleteFromSetting = (index: number) => {
    if (this.tableData.length == 1) return;
    this.tableData.splice(index, 1);
  };
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

.pubilsh-choose-header {
  @include flex(flex-start);
  align-items: center;
  .pubilsh-choose_input {
    margin: 0px 10px;
  }
}
.pubilsh-choose-content{
  margin-top: 15px;
}

.publish-container {
  width: 1200px;
  height: auto;
  border: 1px solid #ddd;
  margin: 20px auto 60px;
  padding: 20px;
  .pub-header {
    @include setHeight(46px);
    @include flex(flex-start);
    background: #eeeeee;
    font-size: 14px;
    .pub-header_item {
      flex: 1;
    }
    .is-active {
      background: #ff9900;
      color: #fff;
    }
  }

  .pub-item {
    width: 100%;
    height: 50px;
    padding: 0px 20px;
    font-size: 14px;
    border: 1px solid #ddd;
    @include flex(space-between);
    align-items: center;
  }

  .pub-table {
    font-size: 14px;
    & > table {
      border-color: #ddd;
      border: none;
    }
    .pub-table_header {
      width: 100%;
      @include setHeight(40px);
      margin-top: 15px;
      background: #ddd;
      color: #000;
      text-align: center;
    }

    .pub-table_content_item {
      & td {
        height: 40px;
        text-align: center;
      }
    }

    .pub-table_content_label {
      width: 300px;
      background: #f5f5f5;
    }

    .pub-table_content_content {
      width: 700px;
    }

    .pub-table_image {
      width: 200px;
    }
  }

  .pub-input_price {
    width: 100px;
    margin-right: 10px;
  }

  .pub-item_table {
    .pub-item_table_header {
      padding: 0px 20px;
      @include setHeight(40px);
      @include flex(space-between);
      border: 1px solid #ddd;
      border-bottom: none;
      font-weight: 600;
      .pub-item_table_right {
        font-size: 12px;
        .pub-item_table_right_btn {
          margin-left: 12px;
        }
      }
    }

    .pub-item_table_content {
      .pub-item_table_content_item {
        width: 100%;
        border: 1px solid #ddd;
        @include flex(flex-start);
        align-items: center;
        height: 60px;
        font-size: 14px;
        .left-pub {
          height: 100%;
          width: 200px;
          box-sizing: border-box;
          padding: 15px;
          background: #f5f5f5;
        }
        .right-pub {
          flex: 1;
        }
      }
    }
  }
}
</style>
