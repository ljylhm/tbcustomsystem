<template>
  <div class="goods-manage-container">
    <el-dialog :visible.sync="showShopDetailModal" :title="'查看详情'">
      <div class="dialog-goods_detail">
        <div class="goods-detail_item">
          <span class="goods-detail_item_label">掌柜号：</span>百丽雅旗舰店
        </div>
        <div class="goods-detail_item">
          <span class="goods-detail_item_label">商品简称：</span>8.17百丽雅上新
        </div>
        <div class="goods-detail_item">
          <span class="goods-detail_item_label">商品链接：</span>
          https://detail.tmall.com/item.htm?id=625197645199
        </div>
        <div class="goods-detail_item">
          <span class="goods-detail_item_label">商品名称：</span>
          膜结构车棚充电桩汽车停车棚张拉膜遮阳遮雨棚小区景观棚自行车棚
        </div>
        <div class="goods-detail_item">
          <span class="goods-detail_item_label">PC端淘宝图：</span>
          <div class="upload-container">
            <div class="upload-image">
              <img
                :src="
                  'http://img.alicdn.com/imgextra/i4/4259894285/O1CN01Lhl0LT1hWZcSmnrBD_!!4259894285.jpg_400x400.jpg'
                "
              />
            </div>
          </div>
        </div>

        <div class="goods-detail_item">
          <span class="goods-detail_item_label">PC端天猫图：</span>
          <div class="upload-container">
            <div class="upload-image">
              <img
                :src="
                  'http://img.alicdn.com/imgextra/i4/4259894285/O1CN01Lhl0LT1hWZcSmnrBD_!!4259894285.jpg_400x400.jpg'
                "
              />
            </div>
          </div>
        </div>

        <div class="goods-detail_item">
          <span class="goods-detail_item_label">手机端天猫展示图预览：</span>
          <div class="upload-container">
            <div class="upload-image">
              <img
                :src="
                  'http://img.alicdn.com/imgextra/i4/4259894285/O1CN01Lhl0LT1hWZcSmnrBD_!!4259894285.jpg_400x400.jpg'
                "
              />
            </div>
          </div>
        </div>

        <div class="goods-detail_item">
          <span class="goods-detail_item_label">二维码展现图预览：</span>
          <div class="upload-container">
            <div class="upload-image">
              <img
                :src="
                  'http://img.alicdn.com/imgextra/i4/4259894285/O1CN01Lhl0LT1hWZcSmnrBD_!!4259894285.jpg_400x400.jpg'
                "
              />
            </div>
          </div>
        </div>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="showShopDetailModal = false">关闭</el-button>
      </span>
    </el-dialog>

    <el-dialog :visible.sync="showTargetUserModal" title="目标客户设置">
      <div class="dialog-target_user">
        <div class="target-detail_item">
          <span class="target-detail_label">性别：</span>
          <span class="target-detail_label_small">男</span>
          <el-input-number
            class="space-margin-right-20"
            v-model="targetUserForm.sexy.man"
            size="small"
            :min="0"
            :max="100"
            label="男"
          ></el-input-number>
          <span class="target-detail_label_small">女</span>
          <el-input-number
            v-model="targetUserForm.sexy.woman"
            size="small"
            :min="0"
            :max="100"
            label="女"
          ></el-input-number>
        </div>

        <div class="target-detail_item">
          <span class="target-detail_label">年龄：</span>
          <span class="target-detail_label_small">18-29</span>
          <el-input-number
            class="space-margin-right-20"
            v-model="targetUserForm.age.stateOne"
            size="small"
            :min="0"
            :max="100"
            label="男"
          ></el-input-number>
          <span class="target-detail_label_small">30-39</span>
          <el-input-number
            class="space-margin-right-20"
            v-model="targetUserForm.age.stateTwo"
            size="small"
            :min="0"
            :max="100"
            label="女"
          ></el-input-number>

          <span class="target-detail_label_small">40-59</span>
          <el-input-number
            v-model="targetUserForm.age.stateThree"
            size="small"
            :min="0"
            :max="100"
            label="女"
          ></el-input-number>
        </div>

        <div class="target-detail_item">
          <span class="target-detail_label">所在地：</span>
          <el-checkbox-group v-model="provinceCheckList">
            <div>
              <div class="target-detail-user">
                <span class="target-detail_label_small">直辖市</span>
                <el-checkbox label="北京"></el-checkbox>
                <el-checkbox label="上海"></el-checkbox>
                <el-checkbox label="天津"></el-checkbox>
                <el-checkbox label="重庆"></el-checkbox>
              </div>
            </div>

            <div>
              <div class="target-detail-user">
                <span class="target-detail_label_small">港澳台</span>
                <el-checkbox label="香港"></el-checkbox>
                <el-checkbox label="澳门"></el-checkbox>
                <el-checkbox label="台湾"></el-checkbox>
              </div>
            </div>

            <div>
              <div class="target-detail-user">
                <span class="target-detail_label_small">华北地区</span>
                <el-checkbox label="河北"></el-checkbox>
                <el-checkbox label="山西"></el-checkbox>
                <el-checkbox label="内蒙古"></el-checkbox>
              </div>
            </div>

            <div>
              <div class="target-detail-user">
                <span class="target-detail_label_small">东北地区</span>
                <el-checkbox label="辽宁"></el-checkbox>
                <el-checkbox label="吉林"></el-checkbox>
                <el-checkbox label="黑龙江"></el-checkbox>
              </div>
            </div>

            <div>
              <div class="target-detail-user">
                <span class="target-detail_label_small">华东地区</span>
                <el-checkbox label="江苏"></el-checkbox>
                <el-checkbox label="浙江"></el-checkbox>
                <el-checkbox label="安徽"></el-checkbox>
                <el-checkbox label="福建"></el-checkbox>
                <el-checkbox label="江西"></el-checkbox>
                <el-checkbox label="山东"></el-checkbox>
              </div>
            </div>

            <div>
              <div class="target-detail-user">
                <span class="target-detail_label_small">中南地区</span>
                <el-checkbox label="河南"></el-checkbox>
                <el-checkbox label="湖北"></el-checkbox>
                <el-checkbox label="湖南"></el-checkbox>
                <el-checkbox label="广东"></el-checkbox>
                <el-checkbox label="广西"></el-checkbox>
                <el-checkbox label="海南"></el-checkbox>
              </div>
            </div>

            <div>
              <div class="target-detail-user">
                <span class="target-detail_label_small">西南地区</span>
                <el-checkbox label="四川"></el-checkbox>
                <el-checkbox label="贵州"></el-checkbox>
                <el-checkbox label="云南"></el-checkbox>
                <el-checkbox label="西藏"></el-checkbox>
              </div>
            </div>

            <div>
              <div class="target-detail-user">
                <span class="target-detail_label_small">西北地区</span>
                <el-checkbox label="陕西"></el-checkbox>
                <el-checkbox label="甘肃"></el-checkbox>
                <el-checkbox label="青海"></el-checkbox>
                <el-checkbox label="宁夏"></el-checkbox>
                <el-checkbox label="新疆"></el-checkbox>
              </div>
            </div>

          </el-checkbox-group>
        </div>

        <div class="target-detail_item">
           <span class="target-detail_label zy-font">温馨提示：</span>
           <span class="target-tip_warn">所在地勾选项为制定购买人群地区,全部勾选则默认购买人群地区不限制,系统将按照你设置的性别、年龄、所在地比例分配买手，请根据产品真实购买人群的实际情况进行设置。</span>
        </div>

      </div>

      <span slot="footer" class="dialog-footer">
        <el-button @click="showTargetUserModal = false">保存</el-button>
        <el-button type="primary" @click="showTargetUserModal = false"
          >取消</el-button
        >
      </span>
    </el-dialog>

  
    <el-dialog :visible.sync="showChaseModal" title="购买行为设置" width="1200px">
      <div class="dialog-target_user">
        <div class="target-detail_item">
          <span class="target-detail_label">收藏店铺:</span>
          <span class="target-detail_label_small"></span>
          <el-input-number
            class="space-margin-right-20"
            v-model="chaseActionForm.collect_shop"
            size="small"
            :min="0"
            :max="100"
            label="男"
          ></el-input-number>
        </div>

        <div class="target-detail_item">
          <span class="target-detail_label">收藏商品:</span>
          <span class="target-detail_label_small"></span>
          <el-input-number
            class="space-margin-right-20"
            v-model="chaseActionForm.collect_goods"
            size="small"
            :min="0"
            :max="100"
          ></el-input-number>
        </div>

        <div class="target-detail_item">
          <span class="target-detail_label">拍前聊:</span>
          <span class="target-detail_label_small"></span>
          <el-input-number
            class="space-margin-right-20"
            v-model="chaseActionForm.before_chat"
            size="small"
            :min="0"
            :max="100"
          ></el-input-number>
        </div>

         <div class="target-detail_item">
          <span class="target-detail_label">货比X家：</span>
          <span class="target-detail_label_small">不货比</span>
          <el-input-number
            class="space-margin-right-20"
            v-model="chaseActionForm.compare_with.compare_with_one"
            size="small"
            :min="0"
            :max="100"
          ></el-input-number>

          <span class="target-detail_label_small">货比一家</span>
          <el-input-number
            class="space-margin-right-20"
            v-model="chaseActionForm.compare_with.compare_with_two"
            size="small"
            :min="0"
            :max="100"
          ></el-input-number>

          <span class="target-detail_label_small">货比两家</span>
          <el-input-number
            class="space-margin-right-20"
            v-model="chaseActionForm.compare_with.compare_with_three"
            size="small"
            :min="0"
            :max="100"
          ></el-input-number>

          <span class="target-detail_label_small">货比三家</span>
          <el-input-number
            v-model="chaseActionForm.compare_with.compare_with_four"
            size="small"
            :min="0"
            :max="100"
          ></el-input-number>

        </div>

        <div class="target-detail_item">
          <span class="target-detail_label">复购周期:</span>
          <span class="target-detail_label_small">不限制</span>
          <el-input-number
            class="space-margin-right-20"
            v-model="chaseActionForm.repurchase_date.no_limit"
            size="small"
            :min="0"
            :max="100"
          ></el-input-number>
          <span class="target-detail_label_small">一个月</span>
          <el-input-number
            class="space-margin-right-20"
            v-model="chaseActionForm.repurchase_date.one_month"
            size="small"
            :min="0"
            :max="100"
          ></el-input-number>

          <span class="target-detail_label_small">三个月</span>
          <el-input-number
            v-model="chaseActionForm.repurchase_date.three_month"
            size="small"
            :min="0"
            :max="100"
          ></el-input-number>
        </div>


        <div class="target-detail_item">
          <span class="target-detail_label">浏览深度:</span>
          <span class="target-detail_label_small">不浏览</span>
          <el-input-number
            class="space-margin-right-20"
            v-model="chaseActionForm.view_deepth.no_limit"
            size="small"
            :min="0"
            :max="100"
          ></el-input-number>
          <span class="target-detail_label_small">店内一款</span>
          <el-input-number
            class="space-margin-right-20"
            v-model="chaseActionForm.view_deepth.one"
            size="small"
            :min="0"
            :max="100"
          ></el-input-number>

          <span class="target-detail_label_small">店内两款</span>
          <el-input-number
            class="space-margin-right-20"
            v-model="chaseActionForm.view_deepth.two"
            size="small"
            :min="0"
            :max="100"
          ></el-input-number>

           <span class="target-detail_label_small">店内三款</span>
          <el-input-number
            v-model="chaseActionForm.view_deepth.three"
            size="small"
            :min="0"
            :max="100"
          ></el-input-number>
        </div>

         <div class="target-detail_item">
          <span class="target-detail_label">停留时间:</span>
          <span class="target-detail_label_small">不限制</span>
          <el-input-number
            class="space-margin-right-20"
            v-model="chaseActionForm.stay_time.no_limit"
            size="small"
            :min="0"
            :max="100"
          ></el-input-number>
          <span class="target-detail_label_small">五分钟</span>
          <el-input-number
            class="space-margin-right-20"
            v-model="chaseActionForm.stay_time.five_min"
            size="small"
            :min="0"
            :max="100"
          ></el-input-number>

          <span class="target-detail_label_small">十分钟	</span>
          <el-input-number
            v-model="chaseActionForm.stay_time.ten_min"
            size="small"
            :min="0"
            :max="100"
          ></el-input-number>
        </div>
      </div>

      <span slot="footer" class="dialog-footer">
        <el-button type="warning">使用推荐比例</el-button>
        <el-button @click="showTargetUserModal = false">保存</el-button>
        <el-button type="primary" @click="showTargetUserModal = false"
          >取消</el-button
        >
      </span>
    </el-dialog>

    <div class="person-left">
      <Slide :current-index="'/goodsManage'" />
    </div>
    <div class="person-right">
      <div class="goods-header">
        添加店铺步骤:
        <div class="goods-header-pic"></div>

        <div class="goods-header-guide_one goods-header-guide">
          <em>1</em>
          添加商品
        </div>

        <div class="goods-header-guide_two goods-header-guide">
          <em>2</em>
          设置目标客户
        </div>

        <div class="goods-header-guide_three goods-header-guide">
          <em>3</em>
          设置购买行为
        </div>
      </div>

      <div class="goods-search-form">
        掌柜号:
        <div class="goods-search-form_item">
          <el-input v-model="searchForm.shop_id"></el-input>
        </div>
        <div class="goods-search-form_item">
          <el-input
            v-model="searchForm.alias"
            placeholder="简称/名称"
          ></el-input>
        </div>
        <div class="goods-search-form_item">
          <el-input v-model="searchForm.tb_id" placeholder="淘宝ID"></el-input>
        </div>
        <div class="goods-search-form_item">
          <el-button type="primary">查询</el-button>
        </div>
        <div class="goods-search-form_item">
          <el-button type="primary">新增</el-button>
        </div>
      </div>

      <div class="goods-table">
        <el-button type="warning" plain size="small"
          >批量设置购买行为</el-button
        >
        <el-button type="primary" plain size="small"
          >批量设置目标客户</el-button
        >
        <div class="goods-table-content">
          <el-table :data="goodsInfoData">
            <el-table-column type="selection" width="55"> </el-table-column>
            <el-table-column prop="alias" label="商品简称" align="center" />

            <el-table-column prop="main_pic" label="商品主图" align="center">
              <template slot-scope="porps">
                <img class="goods-main-pic" :src="porps.row.main_pic" />
              </template>
            </el-table-column>

            <el-table-column
              prop="goods_name"
              label="商品名称"
              align="center"
            />

            <el-table-column prop="status" label="状态" align="center" />

            <el-table-column label="操作" align="center">
              <template slot-scope="porps">
                <div class="goods-table_btn">
                  <el-button type="primary" round size="mini"
                    >编辑商品</el-button
                  >

                  <el-button
                    type="primary"
                    round
                    size="mini"
                    @click="openItemDetail"
                    >查看详情</el-button
                  >
                </div>

                <div class="goods-table_btn">
                  <el-button type="primary" round size="mini"
                    @click="openPurchase"
                    >购买行为</el-button
                  >

                  <el-button type="primary" round size="mini"
                    @click="openItemTargetUser"
                    >目标客户</el-button
                  >
                </div>
              </template>
            </el-table-column>
          </el-table>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Slide from "@/components/Slide.vue"; // @ is an alias to /src
import { confirmMessageOne } from "@/lib/notice";
import OpenFile from "@/lib/openFile";
import VAddress from "@/components/VAddress.vue";

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
export default class AddGoods extends Vue {

  showTargetUserModal: boolean = false; // 是否展示修改店铺的弹框
  showShopDetailModal: boolean = false; // 是否展示店铺详情
  showChaseModal: boolean = false;      // 是否展示购买行为的弹框

  provinceCheckList = [];

  goodsInfoData = [
    {
      alias: "8.17百丽雅上新",
      main_pic:
        "http://img.baishou123.cn/data/upload/hebingimg_new/2020-08-17/1597658299155870tbpic.png",
      goods_name: "膜结构车棚充电桩汽车停车棚张拉膜遮",
      status: "正常",
    },
  ];

  searchForm = {
    shop_id: "",
    alias: "",
    tb_id: "",
  };

  targetUserForm = {
    sexy: {
      man: 50,
      woman: 50,
    },
    age: {
      stateOne: 40,
      stateTwo: 30,
      stateThree: 30,
    },
  };

  chaseActionForm = {
    collect_shop: 50,
    collect_goods: 20,
    before_chat: 50,
    compare_with:{
      compare_with_one: 10,
      compare_with_two: 30,
      compare_with_three: 30,
      compare_with_four: 30,
    },
    repurchase_date:{
      no_limit: 10,
      one_month: 90,
      three_month: 0
    },
    view_deepth:{
      no_limit: 10,
      one: 30,
      two: 50,
      three: 10
    },
    stay_time:{
      no_limit: 20,
      five_min: 60,
      ten_min: 20
    }
  }

  openItemDetail() {
    this.showShopDetailModal = true;
  }

  openItemTargetUser(){
    this.showTargetUserModal = true
  }

  openPurchase(){
    this.showChaseModal = true
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

.space-margin-right-20 {
  margin-right: 20px;
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

.goods-manage-container {
  width: 1400px;
  height: 400px;
  text-align: left;
  margin: 20px auto 0px;
  @include flex(flex-start);
  flex-wrap: nowrap;

  .dialog-goods_detail {
    margin: 0 auto;
    color: #000;

    .goods-detail_item {
      padding-left: 120px;
      @include flex(flex-start);
      align-items: center;
      text-align: center;
      margin-bottom: 20px;
      .goods-detail_item_label {
        display: inline-block;
        width: 160px;
        text-align: right;
      }
    }
  }

  .dialog-target_user {
    padding-left: 80px;
    .target-detail_item {
      @include flex(flex-start);
      align-items: center;
      margin-bottom: 20px;
      .target-tip_warn{
        flex: 1;
      }
      .target-detail_label {
        width: 80px;
      }
      .target-detail-user {
        @include flex(flex-start);
        margin-bottom: 15px;
        // align-items: center;
      }
      .target-detail_label_small {
        width: 64px;
        font-size: 14px
      }
    }
  }

  .person-left {
    width: 180px;
  }
  .person-right {
    padding-left: 30px;
    flex: 1;
    .goods-header {
      @include flex(flex-start);
      align-items: center;
      position: relative;

      & em {
        border: 1px solid #666;
        margin-right: 5px;
        font-style: normal;
        border-radius: 100%;
        height: 15px;
        width: 15px;
        float: left;
        text-align: center;
        line-height: 15px;
        color: #666;
        font-size: 14px;
      }

      .goods-header-guide {
        font-size: 14px;
      }
      .goods-header-guide_one {
        position: absolute;
        left: 90px;
        bottom: -4px;
      }

      .goods-header-guide_two {
        position: absolute;
        left: 340px;
        bottom: -4px;
      }

      .goods-header-guide_three {
        position: absolute;
        left: 600px;
        bottom: -4px;
      }

      .goods-header-pic {
        width: 800px;
        height: 84px;
        background: url(http://img.baishou123.cn/public/shop/images/img/buzou.jpg)
          no-repeat 20px center;
      }
    }

    .goods-search-form {
      margin-top: 20px;
      @include flex(flex-start);
      align-items: center;
      .goods-search-form_item {
        margin-left: 10px;
      }
    }

    .goods-table {
      margin-top: 15px;
      .goods-table-content {
        .goods-main-pic {
          margin: 0 auto;
          width: 100px;
          height: 100px;
        }

        .goods-table_btn {
          margin-bottom: 10px;
        }
      }

      .gooods-table_title {
        font-size: 14px;
        margin-bottom: 10px;
      }
    }
  }

  .shop-operation_btn {
    margin-bottom: 10px;
  }

  .row-item-form {
  }

  .shop-detail {
    color: #000;
    .shop-detail_item {
      width: 100%;
      padding: 12px 0px;
      @include flex(flex-start);
      .shop-detail_label {
        width: 150px;
        text-align: right;
      }
      .shop-detail_name {
        flex: 1;
        padding-left: 10px;
      }
      .shop-detail_image {
        width: 80px;
        height: 80px;
        padding-left: 10px;
        cursor: pointer;
        & img {
          width: 100%;
          height: 100%;
        }
      }
    }
  }
}
</style>
