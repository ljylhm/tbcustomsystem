<template>
  <div class="pub-container">
    <div class="pub-item_table_header">
      <div>发布时间</div>
      <div>
        <el-radio-group
          v-model="form.publishType"
          @change="handleChange"
          size="small"
        >
          <el-radio label="1">立即发布</el-radio>
          <el-radio label="2">多天平均发布</el-radio>
          <el-radio label="3"
            >预约发布任务(预约任务将在原有佣金基础上加2元)</el-radio
          >
        </el-radio-group>
        <el-button type="primary" round size="mini" v-if="form.publishType == 3" :style="{marginLeft: '10px'}"
          >一键设置时间</el-button
        >
      </div>
    </div>

    <div class="pub-table">
      <el-table :data="tableData">
        <el-table-column
          prop="date"
          label="日期(剩余可发布数)"
          width="200px"
          align="center"
        >
          <template slot-scope="scope">
            <div @click="expressScope(scope.row)">{{ scope.row.date }}</div>
          </template>
        </el-table-column>

        <el-table-column prop="missionNum" label="任务数(0)" width="200px">
          <template slot-scope="scope">
            <el-input
              v-model="scope.row.missionNum"
              placeholder="请输入数量"
              type="number"
              :disabled="scope.row.disabled"
            ></el-input>
          </template>
        </el-table-column>

        <el-table-column prop="start_time" label="开始时间" width="240px">
          <template slot-scope="scope">
            <div>
              <el-time-picker
                class="time-select-class"
                placeholder="起始时间"
                v-model="scope.row.start_time"
                format="HH:mm"
                :disabled="scope.row.disabled"
              ></el-time-picker>
            </div>
          </template>
        </el-table-column>

        <el-table-column prop="date" label="结束时间" width="240px">
          <template slot-scope="scope">
            <div>
              <el-time-picker
                class="time-select-class"
                placeholder="结束时间"
                v-model="scope.row.end_time"
                format="HH:mm"
                value-format="HH:mm"
                :disabled="scope.row.disabled"
              ></el-time-picker>
            </div>
          </template>
        </el-table-column>

        <el-table-column prop="date" label="超时取消">
          <template slot-scope="scope">
            <div>
              <el-time-picker
                class="time-select-class"
                placeholder="超时取消"
                v-model="scope.row.over_cancel_time"
                format="HH:mm"
                value-format="HH:mm"
                :disabled="scope.row.disabled"
              ></el-time-picker>
            </div>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script lang="ts">
// 地址插件的选择
import { Component, Prop, Vue, Watch } from "vue-property-decorator";

interface IEdata {
  label: string;
  value: string | number;
}

const ONE_DAT_TIME = 60 * 60 * 24 * 1000;

const plain_mission = {
  date: "",
  missionNum: "",
  start_time: "",
  end_time: "",
  over_cancel_time: "",
  disabled: true
};

@Component
export default class VPublish extends Vue {
  @Prop() private pageSizeChange!: () => void; // 感叹号表示必选
  @Prop() private total!: number; // 感叹号表示必选

  form = {
    publishType: "1",
  };

  datevalue = "";

  tableData = [
    {
      date: "",
      missionNum: "",
      start_time: "",
      end_time: "",
      over_cancel_time: "",
      disabled: true
    },
  ];

  transFormDate(index: number) {
    const t = new Date(Date.now() + index * ONE_DAT_TIME);
    const m = t.getMonth() + 1;
    const d = t.getDate();
    if (index == 0) return `(今天) ${m}月${d}日`;
    return `${m}月${d}日`;
  }

  expressScope(data: any) {
    console.log(data);
  }

  // 初始化表格的数据
  initTableData() {
    for (let i = 0; i < 7; i++) {
      this.$set(this.tableData, i, {
        ...plain_mission,
        date: this.transFormDate(i),
      });
    }
  }

  // 表格数据变成多天平均发布
  initTableTodayData(){
    for (let i = 0; i < 7; i++) {
      const disabled = i == 0 ? false : true 
      this.$set(this.tableData, i, {
        ...plain_mission,
        date: this.transFormDate(i),
        disabled
      });
    }
  }

  initTableMoreData(){
    for (let i = 0; i < 7; i++) {
      this.$set(this.tableData, i, {
        ...plain_mission,
        date: this.transFormDate(i),
        disabled: false
      });
    }
  }

  created() {
    this.initTableData()
  }

  // 单选框点击change事件
  handleChange(label: string) {
    // 点击立即发布的按钮
    if (label == "1") {
      this.initTableData()
    }else if(label == "2"){
      this.initTableTodayData()
    }else{
      this.initTableMoreData()
    }
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

.pub-container {
  width: 100%;
  .time-select-class {
    width: 220px;
  }
  .pub-table {
    border: 1px solid #ddd;
  }
}
</style>
