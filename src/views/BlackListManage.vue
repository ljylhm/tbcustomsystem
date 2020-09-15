<template>
  <div class="personal-container">
    <div class="person-left">
      <Slide :current-index="'/blackListManage'" />
    </div>
    <div class="person-right">

     <div class="black-manage_container">
        <div class="black-manage_introduce">
            <div>1、温馨提示：为防止多渠道混刷，造成的高复购率，建议商家导入近期在其他渠道刷的订单(本平台的无需导入)；</div>
            <div>2、导入过程：模板的内容，主要是买号复购限制。</div>
            <div>3、导入完成：例如导入2000个买号，200个显示在我们平台，说明有200个是我们，其他1800个不是我们平台的。</div>
            <div>4、导入效果：只要是黑名单中的买号 以及 手机号码，无法接手您的任务。有操作问题的，可联系客服。</div>
        </div>

        <div class="black-manage-info">黑名单列表信息</div>

        <div class="black-manage-search">
            <el-form :inline="true">
                <el-form-item label="买手号：">
                    <el-input v-model="searchForm.buy_id"></el-input>
                </el-form-item>

                 <el-form-item label="买手手机：">
                    <el-input v-model="searchForm.buy_phone"></el-input>
                </el-form-item>

                <el-form-item>
                    <el-button type="primary" size="small" round>查询</el-button>
                    <el-button type="primary" size="small" round>全部删除</el-button>
                    <el-button type="primary" size="small" round>导入黑名单</el-button>
                    <el-button type="primary" size="small" round>下载导入模板</el-button>
                </el-form-item>

            </el-form>            
        </div> 
     </div>  

      <el-table 
        :data="blackListData"
        >

        <el-table-column type="selection" width="55"> </el-table-column>

        <el-table-column prop="create_time" label="拉黑时间" />

        <el-table-column prop="phone" label="买手手机号" />

        <el-table-column prop="ww_account" label="旺旺号" />

        <el-table-column prop="remarks" label="备注" />

        <el-table-column label="操作">
            <template slot-scope="props">
                <el-button type="primary" plain size="small"
                    >删除</el-button>
            </template>
        </el-table-column>

      </el-table>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Slide from "@/components/Slide.vue"; // @ is an alias to /src

@Component({
  components: {
    Slide,
  },
})
export default class EditUnit extends Vue {
  
shopInfoData = [{
    platType: "淘宝",
    shop_name: "百丽雅旗舰店",
    re_unit: 30,
    end_date: "--"
},{
    platType: "淘宝",
    shop_name: "钢膜结构棚工厂",
    re_unit: 30,
    end_date: "--"
}]

searchForm = {
   buy_id: "",
   buy_phone: "" 
}

blackListData = [{
    create_time:"2019-12-01",
    phone: "1367878321",
    ww_account: "1233213",
    remarks: "备注一下"
},{
    create_time:"2019-12-01",
    phone: "1367878321",
    ww_account: "1233213",
    remarks: "备注一下"
}]


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
  .person-left {
    width: 180px;
  }
  .person-right {
    padding-left: 30px;
    flex: 1;
  }
}


.black-manage_container{
    .black-manage_introduce{
        text-align: left;
        & > div{
            font-size: 14px;
            color: #000;
            margin: 12px 0px;
        }
    }
    .black-manage-info{
        color: #888;
        font-weight: 600;
        text-align: left;
        margin: 10px 0px;
    }

    .black-manage-search{
        text-align: left;
    }
}

</style>
