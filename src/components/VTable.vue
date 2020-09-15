<template>
  <div class="table-container">
    <el-pagination
      background
      layout="prev, pager, next,total,jumper"
      :total="total"
      @current-change="pageSizeChange"
    ></el-pagination>
  </div>
</template>


<script lang="ts">
// 地址插件的选择
import { Component, Prop, Vue } from "vue-property-decorator";

interface IEdata {
  label: string;
  value: string | number;
}

@Component
export default class Header extends Vue {
  @Prop() private pageSizeChange!: () => void; // 感叹号表示必选
  @Prop() private total!: number; // 感叹号表示必选

  // pageSizeChange(page:number){
  //   console.log("当前页面...",page)
  // }

  created() {}
}
</script>

<style scoped lang="scss">
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

.table-container {
  text-align: right;
  margin-top: 20px;
}
</style>



