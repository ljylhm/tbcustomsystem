<template>
  <div class="personal-container">
    <div class="person-left">
      <Slide :current-index="'/blackList'" />
    </div>
    <div class="person-right">
      <el-table 
        :data="blackListData"
        >

        <el-table-column prop="account" label="淘宝买号" />

        <el-table-column prop="reason" label="提交原因" />

        <el-table-column prop="status" label="状态" />

        <el-table-column prop="creatime" label="提交时间" />

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
export default class BlackList extends Vue {
  blackListData = [
    {
      account: "测试账号",
      reason: "被降权次数",
      status: "冻结",
      creatime: "2020-08-26 16:25:53",
    },
  ];
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

.person-page-container {
  color: #000;
  width: 100%;
  text-align: left;
  font-size: 14px;
  padding-top: 20px;

  @include flex(space-between);
  .person-page-left {
    width: 400px;
  }

  .person-page-right {
    width: 220px;
    height: 240px;
    border-radius: 10px;
    border: 10px solid #dae6fc;
    padding: 30px;
    // text-align: center;
    .person-tips_item {
      margin-bottom: 15px;
    }
  }

  .person-item {
    @include flex(space-between);
    align-items: center;
    margin-bottom: 20px;
  }
}
</style>
