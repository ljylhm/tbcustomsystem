<template>
  <div class="slide-container">
    <el-menu
      :default-active="activeIndex"
      class="el-menu-class"
      menu-trigger="click"
      :router="true"
    >
      <el-menu-item index="/payAccount">账号充值</el-menu-item>
      <el-menu-item index="/transFerAccountManage">转账管理</el-menu-item>
      <el-menu-item index="/fundManage">资金管理</el-menu-item>
      <el-menu-item index="/orderManage">订单信息</el-menu-item>
    </el-menu>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

interface IProps{
    currentIndex:string
}

@Component
export default class VPaySlide extends Vue {
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
