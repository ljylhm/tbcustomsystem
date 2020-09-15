<template>
  <div class="header-container">
    <div class="header-logo"></div>
    <div class="header-person">
      <div class="header-avatur"></div>
      <div class="header-content">
        <div>
          <div>1577771234</div>
          <div>
            当前状态：
            <span class="header-slogan">审核通过</span>
          </div>
        </div>
      </div>
      <div class="exit-btn" @click="logoutAction">退出</div>
    </div>
  </div>
</template>

<script lang="ts">
import { httpGet, httpPost } from '@/lib/http';
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class Header extends Vue {
  @Prop() private msg!: string; // 感叹号表示必选

  logoutAction(){
    httpGet("/api/logout",{
      token:"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC8xMjkuMjExLjg3Ljc5XC9hcGlcL2xvZ2luIiwiaWF0IjoxNTk5ODk1MzYxLCJleHAiOjE1OTk4OTg5NjEsIm5iZiI6MTU5OTg5NTM2MSwianRpIjoiRG10VWdkU25WVnlvcnZlUiIsInN1YiI6MywicHJ2IjoiYzFiNjViMWYwZDY4YTY5YTBiMWNmMjk2NzNkMjg1NGJjMGYyOTkzZCJ9.rtQztHVCgZCT7P_MfXE5PMyJHY-9LNJlEsLDujFrzfc"
    }).then(data=>{
      console.log(data)
    })
  }
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

.header-container {
  width: 100%;
  height: 80px;
  padding: 0px 180px;
  min-width: 1400px;
  @include flex(space-between);
  .header-logo {
    width: 400px;
    height: 100%;
    background: url(http://img.baishou123.cn/data/upload/fen/2020-08-08/5f2eb601735cb.jpg)
      no-repeat center;
    background-size: 100% 100%;
  }
  .header-person {
    height: 100%;
    @include flex(flex-start);
    align-items: center;
    .header-avatur {
      width: 50px;
      height: 50px;
      border-radius: 50%;
      background: url(http://aaa.66145.cn/themes/simplebootx/Public/home/img/boy.png)
        no-repeat center;
      background-size: 100% 100%;
    }
    .header-content {
      color: #000;
      font-size: 14px;
      text-align: left;
      margin-left: 10px;
      .header-slogan {
        color: red;
      }
    }
    .exit-btn{
      font-size: 12px;
      background: #4882f0;
      color: #fff;
      padding: 0px 10px;
      @include setHeight(22px);
      margin-left: 10px;
      border-radius: 5px;
      cursor: pointer;
      &:hover{
        background: #3b6cca;
      }
    }
  }
}
</style>
