<template>
  <div>
    <div>
      <h2>slide 开关</h2>
      <el-switch
        v-model="value30"
        active-text="按月付费"
        inactive-text="按年付费">
      </el-switch>
      <el-switch
        style="display: block"
        v-model="value40"
        active-color="#13ce66"
        inactive-color="#ff4949"
        active-text="按月付费"
        inactive-text="按年付费">
      </el-switch>    
    </div>

    <div class="sliderbox">
      <h2>Slider 滑块</h2>
      <div class="block">
        <span class="demonstration">默认</span>
        <el-slider v-model="value1"></el-slider>
      </div>
      <div class="block">
        <span class="demonstration">自定义初始值</span>
        <el-slider v-model="value2"></el-slider>
      </div>
      <div class="block">
        <span class="demonstration">隐藏 Tooltip</span>
        <el-slider v-model="value3" :show-tooltip="false"></el-slider>
      </div>
      <div class="block">
        <span class="demonstration">格式化 Tooltip</span>
        <el-slider v-model="value4" :format-tooltip="formatTooltip"></el-slider>
      </div>
      <div class="block">
        <span class="demonstration">禁用</span>
        <el-slider v-model="value5" disabled></el-slider>
      </div>
    </div>

    <div class="inputbox">
      <h2>时间选择器</h2>
      <el-time-select
        placeholder="起始时间"
        v-model="startTime"
        :picker-options="{
          start: '08:30',
          step: '00:15',
          end: '18:30'
        }">
      </el-time-select>
      <el-time-select
        placeholder="结束时间"
        v-model="endTime"
        :picker-options="{
          start: '08:30',
          step: '00:15',
          end: '18:30',
          minTime: startTime
        }">
      </el-time-select>

    </div>

    <div class="selectdate">
        <el-date-picker type="date" placeholder="选择日期" v-model="date" style="width: 100%;"></el-date-picker>

    </div>




  </div>

</template>

<script>
  export default {
    data() {
      return {
        value30: true,
        value40: true,
        value1: 0,
        value2: 50,
        value3: 36,
        value4: 48,
        value5: 42,
        startTime: '',
        endTime: '',
        date:''
      }
    },
    methods: {
      formatTooltip(val) {
        return val / 100;
      }
    }
  }
</script>

<style scoped>
.sliderbox{
  width:500px;
}
.el-switch{
  margin-bottom: 20px;
}
.selectdate{
  margin-top: 20px;
  width: 200px;
}
</style>

