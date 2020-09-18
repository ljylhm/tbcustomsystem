<template>
  <div class="tab-container">
    <div class="tab-content">
      <el-menu
        :default-active="activeIndex"
        class="el-menu-class"
        mode="horizontal"
        menu-trigger="hover"
        :router="true"
        @select="handleSelect"
      >
        <el-menu-item index="/">首页</el-menu-item>
        <el-menu-item index="/customManage">接手管理</el-menu-item>
        <el-submenu index="3">
          <template slot="title">评价任务</template>
          <el-menu-item index="3-1">评价任务</el-menu-item>
          <el-menu-item index="3-2">淘宝问大家</el-menu-item>
        </el-submenu>
        <el-submenu index="4">
          <template slot="title">资金管理</template>
          <el-menu-item index="/payAccount">账号充值</el-menu-item>
          <el-menu-item index="/transFerAccountManage">转账管理</el-menu-item>
          <el-menu-item index="/fundManage">资金管理</el-menu-item>
          <el-menu-item index="/orderManage">订单信息</el-menu-item>
        </el-submenu>
        <el-submenu index="5">
          <template slot="title">会员中心</template>
          <el-menu-item index="/personal">基本资料</el-menu-item>
          <el-menu-item index="/blackList">黑名单列表</el-menu-item>
          <el-menu-item index="/smartHelper">智能助手</el-menu-item>
          <el-menu-item index="/shopManage">店铺管理</el-menu-item>
          <el-menu-item index="/goodsManage">商品管理</el-menu-item>
          <el-menu-item index="/platNotice">平台公告</el-menu-item>
          <el-menu-item index="/editUnit">调整单量</el-menu-item>
          <el-menu-item index="/blackListManage">黑名单管理</el-menu-item>
          <el-menu-item index="5-9">买号降权查询</el-menu-item>
        </el-submenu>
        <el-menu-item index="/customService">客服工单</el-menu-item>
        <el-menu-item index="/inviteFriends">好友邀请</el-menu-item>
      </el-menu>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class Tab extends Vue {
  @Prop() private msg!: string; // 感叹号表示必选

  handleSelect() {}

  activeIndex = "/"
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

.tab-container {
  background-color: rgb(72, 130, 240);
  @include flex(center);
  flex-wrap: nowrap;
  min-width: 1400px;

  .el-menu-class {
    background: rgb(72, 130, 240);
    .el-menu-item {
      color: #fff;
      &:hover {
        background: #3b6cca !important;
        color: #fff !important;
      }
    }
    .el-submenu__title {
      width: 180px;
      color: #fff !important;
      &:hover {
        background: #3b6cca !important;
        color: #fff !important;
      }
    }
  }

  .el-menu {
    .el-menu-item {
      width: 180px;
    }
  }

  .el-menu--horizontal > .el-menu-item.is-active {
    background: #3b6cca !important;
    color: #ffffff !important;
    border: none;
  }
  .el-submenu__title i {
    color: #fff !important;
  }
  .el-menu--horizontal > .el-submenu.is-active .el-submenu__title {
    color: #fff;
    background: #3b6cca !important;
    border: none;
  }
}
</style>
