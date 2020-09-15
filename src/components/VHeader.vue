<template>
  <div class="header_container">
    <div :class="key == currentIndex ? 'header-item header-item-active' : 'header-item' " v-for="(i,key) in showListItem" :key="key" @click="handleSwitchTab(key)">{{i}}</div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class VHeader extends Vue {
    @Prop() private list!: string[];// 感叹号表示必选
    @Prop() private currentIndex!: number; 
    @Prop() private handleSwitchTab!: (index:number)=> void

   created(){
     console.log("currentIndex",this.currentIndex)
   }

    private get showListItem():string[]{
        return this.list
    }

    showHeaderItem(index:number):string{
      if(index == this.currentIndex) return "header-item header-item-active"
      else return "header-item"
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

.header_container {
  width: 100%;
  height: 50px;
  line-height: 50px;
  font-size: 14px;
  background: #eee;
  text-align: left;
  .header-item-active,
  .header-item {
    display: inline-block;
    text-align: center;
    padding: 0px 20px;
    color: #000;
    &:hover{
      cursor: pointer;
    }
  }
  .header-item-active {
    color: #fff;
    background: #4782ef !important;
  }
  .header-item {
    min-width: 200px;
    background: #eeeeee;
  }
}
</style>
