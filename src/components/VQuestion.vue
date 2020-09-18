<template>
  <div class="question_container">
    <el-drawer
      title="我是标题"
      :visible.sync="showDrawer"
      :modal="false"
      custom-class="question-drawer_container"
      :withHeader="false"
      direction="ltr"
    >
      <el-collapse
        :model="formTabList[currentStatus - 1]['form_name']"
        accordion
        v-if="currentStatus == 1"
      >
        <el-collapse-item title="做任务需要垫付资金吗？" name="1">
          <div>
            接任务后购买商品，需要垫付资金，垫付金在提交任务后，由商家在次日转回。
          </div>
        </el-collapse-item>
      </el-collapse>

      <el-collapse
        :model="formTabList[currentStatus - 1]['form_name']"
        accordion
        v-if="currentStatus == 2"
      >
        <el-collapse-item title="找不到商品" name="1">
          <div>
            1、检查【关键字】是否正确。
            2、检查【搜索入口】是否正确：淘宝搜索、天猫搜索、直通车搜索。
            3、检查【任务信息】是否匹配：店铺名、掌柜号、主图、价格。
            4、实在找不到，请退出任务。
          </div>
        </el-collapse-item>
      </el-collapse>

      <el-collapse
        :model="formTabList[currentStatus - 1]['form_name']"
        accordion
        v-if="currentStatus == 4"
      >
        <el-collapse-item title="如何查询“网银收支明细”" name="1">
          <div>1、手机下载提现银行卡对应的“**银行APP”。</div>
          <div>2、登录手机银行APP，可以使用“余额、明细、转账”等功能。</div>
          <div>
            3、查询“收支明细”，把提现前后1天（共计3天）的收支记录，截图并发送给客服QQ（截图需要显示姓名、卡号、日期，金额等重要信息）。
          </div>
          <div>
            4、只有证明您确实未收到款，客服才会要求商家重新转账，请配合处理。
          </div>
        </el-collapse-item>

        <el-collapse-item title="佣金怎么体现" name="2">
          <div>
            佣金，点击【资金管理】-【平台提现】自行申请提现，平台会通过微信公众号/平台专用银行卡，向买家账户转账提现。
          </div>
        </el-collapse-item>
      </el-collapse>

      <el-collapse
        :model="formTabList[currentStatus - 1]['form_name']"
        accordion
        v-if="currentStatus == 5"
      >
        <el-collapse-item title="淘宝客违规证据是什么？" name="1">
          <div>
            淘宝客违规证据，由商家截图提供。图片信息包括“确认收货时间、结算时间、创建时间……佣金金额、淘宝订单编号、淘客昵称”。买家可打开工单详情/平台公告（淘宝客违规说明）/或者联系人工客服，查看截图证件，并了解具体情况。
          </div>
        </el-collapse-item>
        <el-collapse-item title="什么是淘宝客违规？" name="1">
          <div>
            买家下单付款时，使用“返利网、返利红包、Q群链接、微信群链接”等手段，使得商家损失推广费，买家自己赚取额外佣金的行为。（平台严禁买家使用淘宝客，详情请登录电脑版查看公告“淘宝客违规说明”）
          </div>
        </el-collapse-item>
      </el-collapse>

       <el-collapse
        :model="formTabList[currentStatus - 1]['form_name']"
        accordion
        v-if="currentStatus == 6"
      >
        <el-collapse-item title="什么是直通车？" name="1">
          <div>
            什么是直通车？/A直通车是卖家付费推广的一种重要方式，请务必按要求操作，否则将被扣款扣分。电脑端的直通车位置是“掌柜热卖”栏，手机端的直通车位置是“图片左上角有HOT标志”。具体说明请参看平台公告。/或者联系人工客服，查看截图证件，并了解具体情况。
          </div>
        </el-collapse-item>
        <el-collapse-item title="快递必须签收吗？" name="1">
          <div>
            A平台有部分卖家，会发真实包裹，里面可能会有小礼品。遇到快递小哥派件通知签收的，不能拒签，如果自己无法签收，可以通知快递小哥放代收点，或者直接代签
          </div>
        </el-collapse-item>
      </el-collapse>

    </el-drawer>

    <div class="question_container_btn" @click="openFold">
     {{foldStatus ? "收起" : "常见问题"}}
      <div class="question-cmtab" v-if="foldStatus">
        <div v-for="(i, key) in formTabList" :key="key">
          <div
            :class="'question-cmtab_' + (key + 1)"
            @click="openDrawer(key + 1,$event)"
          >
            <span></span>
            <em></em>
            {{ i.name }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

interface ITab {
  name: string;
  form_name: string;
}

@Component
export default class VQuestion extends Vue {
  currentStatus: number = 1; // 当前选择的选项
  showDrawer: boolean = false;

  foldStatus: boolean = false

  tabList: string[] = [
    "资金安全",
    "任务过程",
    "邀请好友",
    "常见问题",
    "淘宝客",
    "其他",
  ];

  formTabList: ITab[] = [];


  // 打开抽屉
  openDrawer(status: number,event:any) {
    event.stopPropagation()
    event.preventDefault()
    this.currentStatus = status;
    this.showDrawer = true;
  }

  // 关闭抽屉
  closeDrawer() {
    this.showDrawer = false;
  }

  // 打开常见问题的按钮
  openFold(){
      this.foldStatus = !this.foldStatus
  }

  created() {
    this.formTabList = this.tabList.map((item) => {
      return {
        name: item,
        form_name: "1",
      };
    });
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

.question_container {
  .question-drawer_container {
    height: 100vh;
    text-align: left;
  }

  .question_container_btn {
    position: fixed;
    z-index: 1000;
    width: 108px;
    right: 0px;
    bottom: 30px;
    color: #fff;
    height: 40px;
    cursor: pointer;
    border-radius: 4px;
    z-index: 1001;
    line-height: 40px;
    background: url(http://aaa.66145.cn/themes/simplebootx/Public/home/images/shouqi.png)
      no-repeat 10px center #4882f0;
    font-size: 14px;
    padding-left: 40px;

    text-align: left;
    border-bottom: 1px solid #989898;
    & em {
      width: 20px;
      height: 32px;
      float: left;
      margin-right: 5px;
    }
  }

  .question-cmtab {
    width: 108px;
    line-height: 35px;
    bottom: 35px;
    right: 0px;
    position: absolute;
    z-index: 1001;
    background: #828282;
    color: #fff;
    border-radius: 5px;
    & > div {
      padding: 0px 10px;
      &:hover {
        background: #4882f0;
      }
    }
  }

  .question-cmtab_1 {
    background: url(http://aaa.66145.cn/themes/simplebootx/Public/home/images/tc1.png)
      no-repeat left -32px;
  }

  .question-cmtab_2 {
    background: url(http://aaa.66145.cn/themes/simplebootx/Public/home/images/tc2.png)
      no-repeat left -32px;
  }

  .question-cmtab_3 {
    background: url(http://aaa.66145.cn/themes/simplebootx/Public/home/images/tc3.png)
      no-repeat left -32px;
  }

  .question-cmtab_4 {
    background: url(http://aaa.66145.cn/themes/simplebootx/Public/home/images/tc4.png)
      no-repeat left -48px;
  }

  .question-cmtab_5 {
    background: url(http://aaa.66145.cn/themes/simplebootx/Public/home/images/tc5.png)
      no-repeat left -50px;
  }

  .question-cmtab_6 {
    background: url(http://aaa.66145.cn/themes/simplebootx/Public/home/images/tc6.png)
      no-repeat left -48px;
  }
}
</style>
