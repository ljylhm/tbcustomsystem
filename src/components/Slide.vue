<template>
  <div class="slide-container">
    <el-menu
      :default-active="activeIndex"
      class="el-menu-class"
      menu-trigger="click"
      :router="true"
    >
      <el-menu-item index="/personal">基本资料</el-menu-item>
      <el-menu-item index="/blackList">黑名单列表</el-menu-item>
      <el-menu-item index="/smartHelper">智能助手</el-menu-item>
      <el-menu-item index="/shopManage">店铺管理</el-menu-item>
      <el-menu-item index="/goodsManage">商品管理</el-menu-item>
      <el-menu-item index="/platNotice">平台公告</el-menu-item>
      <el-menu-item index="/editUnit">调整单量</el-menu-item>
      <el-menu-item index="/blackListManage">黑名单管理</el-menu-item>
      <el-menu-item index="5-9">买号降权查询</el-menu-item>
      <el-menu-item index="/inviteFriends">好友邀请</el-menu-item>
    </el-menu>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

interface IProps{
    currentIndex:string
}

@Component
export default class Slide extends Vue {
  @Prop() private currentIndex!: string;// 感叹号表示必选
  
  activeIndex = this.currentIndex

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

.slide-container {
}
</style>
