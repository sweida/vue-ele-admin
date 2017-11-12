<template>
  <div class="allradio">
    <h2>steps 步骤条</h2>

<el-steps :active="active" finish-status="success" space="200px">
  <el-step title="步骤 1"></el-step>
  <el-step title="步骤 2"></el-step>
  <el-step title="步骤 3"></el-step>
  <el-step title="步骤 4"></el-step>
</el-steps>


    <div v-if="active ==0 ? true : false  ">
      <h2>Radio 单选框</h2>
      <el-radio-group v-model="radio2">
        <el-radio :label="3">备选项</el-radio>
        <el-radio :label="6">备选项</el-radio>
        <el-radio :label="9">备选项</el-radio>
      </el-radio-group>
      <h2 style="margin-top: 15px;">Radio 按钮样式</h2>
      <el-radio-group v-model="radio3" size="medium">
        <el-radio-button label="上海"></el-radio-button>
        <el-radio-button label="北京"></el-radio-button>
        <el-radio-button label="广州"></el-radio-button>
        <el-radio-button label="深圳"></el-radio-button>
      </el-radio-group>
    </div>
    <div v-if="active ==1 ? true : false  ">
      <h2>Checkbox 多选框</h2>
      <el-checkbox :indeterminate="isIndeterminate" v-model="checkAll" @change="handleCheckAllChange">全选</el-checkbox>
      <div style="margin: 15px 0;"></div>
      <el-checkbox-group v-model="checkedCities" @change="handleCheckedCitiesChange">
        <el-checkbox v-for="city in cities" :label="city" :key="city">{{city}}</el-checkbox>
      </el-checkbox-group>
    </div>

    <div class="demo-input-suffix" v-if="active ==2 ? true : false  ">
      <h2>input 输入框</h2>
      <el-input
        placeholder="请选择日期"
        suffix-icon="el-icon-date"
        v-model="input2" >
      </el-input>
      <el-input
        placeholder="请输入内容"
        prefix-icon="el-icon-search"
        v-model="input21">
      </el-input>
    </div>

    <div class="input-change" v-if="active ==3 ? true : false  ">
      <h2>可选择输入框</h2>
      <div>
        <el-input placeholder="请输入内容" v-model="input3">
          <template slot="prepend">Http://</template>
        </el-input>
      </div>
      <div style="margin-top: 15px;">
        <el-input placeholder="请输入内容" v-model="input4">
          <template slot="append">.com</template>
        </el-input>
      </div>
      <div style="margin-top: 15px;">
        <el-input placeholder="请输入内容" v-model="input5" class="input-with-select">
          <el-select v-model="select" slot="prepend" placeholder="请选择">
            <el-option label="餐厅名" value="1"></el-option>
            <el-option label="订单号" value="2"></el-option>
            <el-option label="用户电话" value="3"></el-option>
          </el-select>
          <el-button slot="append" icon="el-icon-search"></el-button>
        </el-input>
      </div>
    </div>

<el-button  style="margin-top: 12px;" @click="prev">上一步</el-button>
<el-button type="primary" style="margin-top: 12px;" @click="next">下一步</el-button>



  </div>
</template>

<script>
  const cityOptions = ['上海', '北京', '广州', '深圳'];
  export default {
    data() {
      return {
        active: 0,
        show1:true,
        show2:false,
        show3:false,
        show4:false,
        radio2: 3,
        radio3: '上海',
        input2: '',
        input21: '',
        input3: '',
        input4: '',
        input5: '',
        select: '',
        checkAll: false,
        checkedCities: ['上海', '北京'],
        cities: cityOptions,
        isIndeterminate: true
      };
    },
    methods: {
      handleCheckAllChange(val) {
        this.checkedCities = val ? cityOptions : [];
        this.isIndeterminate = false;
      },
      handleCheckedCitiesChange(value) {
        let checkedCount = value.length;
        this.checkAll = checkedCount === this.cities.length;
        this.isIndeterminate = checkedCount > 0 && checkedCount < this.cities.length;
      },
      prev() {
        if(this.active-- < 1) this.active = 0;
      },
      next() {
        if(this.active++ >3) this.active = 4 
        this.show1 =false
      }
    }
  };
</script>




<style scoped>
  .allradio > div{
    margin-bottom: 20px;
  }
  .demo-input-suffix{
    width:280px;

  }
  .demo-input-suffix .el-input{
    margin-bottom: 20px;
  }
  .input-change{
    width:500px;
  }
  .el-select {
    width: 120px;
  }
  .el-input-group__prepend {
    background-color: #fff;
  }
</style>

