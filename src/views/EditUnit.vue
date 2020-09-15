<template>
  <div class="personal-container">
    <div class="person-left">
      <Slide :current-index="'/editUnit'" />
    </div>
    <div class="person-right">

     <div class="edit-unit_container">
        <div class="edit-unit_header">
            补单量调整说明：
        </div>
        <div class="edit-unit_introduce">
            <div>1、平台以店铺为单位对补单量进行收费。</div>
            <div>2、店铺补单量由卖家自助购买，有效期为30天。立即购买，立即扣费。</div>
            <div>3、调整单量原则：但凡购买成功，一律不进行退费操作。</div>
        </div>

        <div class="edit-unit-info">已绑定店铺信息</div> 
     </div>  

     

      <el-table 
        :data="shopInfoData"
        >

        <el-table-column prop="platType" label="平台类型" />

        <el-table-column prop="shop_name" label="店铺名称" />

        <el-table-column prop="re_unit" label="补单量（单/天）" />

        <el-table-column prop="end_date" label="到期时间" />

        <el-table-column label="操作">
            <template slot-scope="props">
                <el-button type="primary" plain size="small"
                    >批量设置目标客户</el-button>
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
  blackListData = [
    {
      account: "测试账号",
      reason: "被降权次数",
      status: "冻结",
      creatime: "2020-08-26 16:25:53",
    },
  ];

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


.edit-unit_container{
    .edit-unit_header{
        @include flex(flex-start);
        border: 1px solid #ddd;
        background: url(http://img.baishou123.cn/public/shop/images/img/t_icon.png) no-repeat 10px center #FCEACD;
        width: 200px;
        height: 35px;
        line-height: 35px;
        padding-left: 45px;
        font-size: 14px;
        font-weight: normal;
        color: #888
    }
    .edit-unit_introduce{
        text-align: left;
        & > div{
            font-size: 14px;
            color: #000;
            margin: 12px 0px;
        }
    }
    .edit-unit-info{
        color: #888;
        font-weight: 600;
        text-align: left;
        margin: 10px 0px;
    }
}

</style>
