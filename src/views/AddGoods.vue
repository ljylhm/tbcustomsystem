<template>
  <div class="add-goods-manage-container">
    <div class="person-left">
      <Slide :current-index="'/goodsManage'" />
    </div>
    <div class="person-right">
      <div class="add-goods-header">
        添加商品
      </div>

      <el-form :model="goodsForm" :inline="true">
        <div class="add-goods-h2">商品基本信息</div>

        <div class="add-goods_item">
          <el-form-item label="掌柜号：" label-width="140px">
            <el-select
              v-model="goodsForm.shop_keeper_id"
              placeholder="请选择"
              class="add-goods_select_1"
              @change="handleShopKeeperChange"
            >
              <el-option
                v-for="item in shopKeeperData"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              >
              </el-option>
            </el-select>
          </el-form-item>
        </div>
        <div class="add-goods_item">
          <el-form-item label="商品链接：" label-width="140px">
            <el-input
              class="add-goods_select_1"
              v-model="goodsForm.goods_url"
            ></el-input>
            <el-button type="primary" class="add-goods_btn_1"
              >获取商品详情</el-button
            >
          </el-form-item>
        </div>
        <div class="add-goods_item">
          <el-form-item label="商品名称：" label-width="140px">
            <el-input
              class="add-goods_select_1"
              disabled=""
              v-model="goodsForm.goods_url"
            ></el-input>
          </el-form-item>
        </div>
        <div class="add-goods_item">
          <el-tooltip effect="light" placement="top" content="">
            <div slot="content">
              二维码展示图：指的是该商品的二维码展示图，<br />此图会展现在手机端二维码任务中，<br />主要作用是让买手扫二维码进入到目标商品。第二行信息
            </div>
            <i class="el-icon-question add-goods_icon_question"></i>
          </el-tooltip>
          <el-form-item label="二维码展示图：" label-width="140px">
            <div class="upload-container">
              <div class="upload-image" v-if="goodsForm.qrcode_cover">
                <img :src="goodsForm.qrcode_cover" />
              </div>
              <div class="upload-content" @click="uploadImage">
                <i class="el-icon-plus upload-content-icon"></i>
              </div>
            </div>
          </el-form-item>
        </div>

        <div class="add-goods-h2">商品自定义信息</div>

        <div class="add-goods_item">
          <el-form-item label="商品简称：" label-width="140px">
            <el-input
              class="add-goods_select_1"
              :v-model="goodsForm.shop_alias"
              placeholder="请输入2-10位中文、数字、英文，简称可以帮助你快速识别商品"
            ></el-input>
          </el-form-item>
        </div>

        <div class="add-goods_item">
          <el-form-item label="商品重量：" label-width="140px">
            <el-input
              class="add-goods_select_1"
              :v-model="goodsForm.shop_weight"
              placeholder="请输入单件商品的重量"
            ></el-input>
            <div class="zy-font font-14 tip-warn">
              温馨提醒：物品重量会显示在物流公司内网中，可在0.5KG至40.00KG之间自行设定
            </div>
          </el-form-item>
        </div>

        <div class="add-goods_item">
          <el-tooltip effect="light" placement="top">
            <div slot="content">
              商品类别指的是您添加的商品所属的类别，<br />如<span
                class="zy-font"
                >衣服、鞋子、化妆品</span
              >等。
            </div>
            <i class="el-icon-question add-goods_icon_question"></i>
          </el-tooltip>
          <el-form-item label="商品重量：" label-width="140px">
            <el-input
              class="add-goods_select_1"
              :v-model="goodsForm.shop_type"
              placeholder="请输入商品中文类别名称，此信息会展示在物流公司内网中"
            ></el-input>
          </el-form-item>
        </div>

        <div class="add-goods-h2">商品图片信息</div>

        <div class="add-goods_item">
          <el-tooltip effect="light" placement="top" content="">
            <div slot="content">
              指的是该商品在手机端的商品主图，若手机端与电脑端的商品主图一致，可不用上传。
            </div>
            <i class="el-icon-question add-goods_icon_question"></i>
          </el-tooltip>
          <el-form-item label="手机端商品主图：" label-width="140px">
            <div class="upload-container">
              <div class="upload-image" v-if="goodsForm.phone_main_cover">
                <img :src="goodsForm.phone_main_cover" />
              </div>
              <div class="upload-content" @click="uploadImage">
                <i class="el-icon-plus upload-content-icon"></i>
              </div>
            </div>
          </el-form-item>
        </div>

        <div class="add-goods_item">
          <el-form-item label="PC端商品主图：" label-width="140px">
            <div class="upload-container">
              <div class="upload-image" v-if="goodsForm.phone_main_cover">
                <img :src="goodsForm.phone_main_cover" />
              </div>
              <div class="upload-content" @click="uploadImage">
                <i class="el-icon-plus upload-content-icon"></i>
              </div>
            </div>
          </el-form-item>
        </div>

        <div class="add-goods_item">
          <el-form-item label="直通车商品图：" label-width="140px">
            <div
              class="upload-container space-margin-bottom-10"
              v-for="(item, key) in goodsForm.direct_bus_info"
              :key="key"
            >
              <div class="upload-container space-margin-bottom-10">
                <div class="upload-image" v-if="item.pic_url">
                  <img :src="item.pic_url" />
                </div>
                <div class="upload-content" @click="uploadImage">
                  <i class="el-icon-plus upload-content-icon"></i>
                </div>
                <div>
                  <div>
                    <el-switch v-model="item.is_pc" active-text="电脑端" />
                  </div>

                  <div>
                    <el-switch v-model="item.is_phone" active-text="手机端" />
                  </div>
                </div>
              </div>
            </div>
          </el-form-item>
        </div>
      </el-form>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Slide from "@/components/Slide.vue"; // @ is an alias to /src
import { confirmMessageOne } from "@/lib/notice";
import OpenFile from "@/lib/openFile";
import VAddress from "@/components/VAddress.vue";
import { routerHelper } from "@/login/router";

const DEFAUL_EDITSHOPNAMEFORM = {
  origin_name: "",
  current_name: "",
  pay_pwd: "",
};

let fileOpener = new OpenFile({
  multiple: false,
});

@Component({
  components: {
    Slide,
    VAddress,
  },
})
export default class BlackList extends Vue {
  showEditShopNameModal: boolean = false; // 是否展示修改店铺的弹框
  showShopDetailModal: boolean = false; // 是否展示店铺详情
  showBindShopModal: boolean = false; // 是否展示绑定店铺弹框

  goodsInfoData = [
    {
      alias: "8.17百丽雅上新",
      main_pic:
        "http://img.baishou123.cn/data/upload/hebingimg_new/2020-08-17/1597658299155870tbpic.png",
      goods_name: "膜结构车棚充电桩汽车停车棚张拉膜遮",
      status: "正常",
    },
  ];

  goodsForm = {
    shop_keeper_id: "", // 掌柜号
    goods_url: "", // 商品链接
    goods_name: "", // 商品名称
    qrcode_cover: "", // 二维码展示图
    shop_alias: "", // 商品简称
    shop_weight: "", // 商品重量
    shop_type: "", // 商品类别

    phone_main_cover: "", // 手机端商品主图
    pc_main_cover: "", // pc端商品主图

    direct_bus_info: [
      {
        pic_url: "",
        is_pic: false,
        is_phone: false,
      },
    ],
  };

  shopKeeperData = [
    {
      label: "百丽雅旗舰店",
      value: "1",
    },
  ];

  created() {
    const direct_bus_info = [];
    for (let i = 0; i < 4; i++) {
      direct_bus_info.push({
        pic_url: "",
        is_pic: false,
        is_phone: false,
      });
    }
    this.goodsForm.direct_bus_info = direct_bus_info;
  }

  // 选择掌柜号改变事件
  handleShopKeeperChange = () => {};

  // 上传图片
  uploadImage() {
    fileOpener.getLocalImage((data) => {
      this.goodsForm.qrcode_cover = data[0].base64Buffer;
    });
  }

  toCreateGoods() {
    routerHelper.to("/addGoods");
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

.font-18 {
  font-size: 18px;
}

.font-14 {
  font-size: 14px;
}

.space-margin-bottom-10 {
  margin-bottom: 10px;
}

.tip-warn {
  margin: 8px 0px;
}

.upload-container {
  @include flex(flex-start);
  align-items: center;
  .upload-image {
    width: 80px;
    height: 80px;
    & img {
      width: 100%;
      height: 100%;
    }
    margin-right: 10px;
  }
  .upload-content {
    width: 80px;
    height: 80px;
    border: 1px dashed #d9d9d9;
    margin-right: 10px;
    .upload-content-icon {
      font-size: 20px;
      color: #8c939d;
      width: 80px;
      @include setHeight(80px);
      text-align: center;
      cursor: pointer;
    }
    &:hover {
      border-color: #409eff;
    }
  }
}

.el-table td,
.el-table th {
  text-align: center;
}

.add-goods-manage-container {
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
    font-size: 14px;
    .add-goods-header {
      font-weight: 600;
    }

    .add-goods-h2 {
      width: 800px;
      @include setHeight(40px);
      margin-bottom: 12px;
      font-weight: 600;
      color: #888888;
      border-bottom: 1px dashed #888888;
    }

    .add-goods_select_1 {
      width: 300px;
    }

    .add-goods_btn_1 {
      margin-left: 12px;
    }

    .add-goods_item {
      position: relative;
      .add-goods_icon_question {
        position: absolute;
        top: 12px;
        left: -8px;
      }
    }
  }
}
</style>
