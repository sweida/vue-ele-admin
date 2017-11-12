<template>
  <div>
    <h2>Table 表格</h2>
    <el-button type="primary" style="margin-bottom: 20px" @click="newformButton">新 建</el-button>
    <el-button type="danger" style="margin-bottom: 20px" @click="deleteall">删除选中</el-button>

    <!-- 表格 -->
    <el-table :data="$store.state.tableData" border style="width: 100%">
      <el-table-column type="selection" label="全选" width="55"> </el-table-column>
      <el-table-column type="index" label="编号" width="50"> </el-table-column>
      <el-table-column prop="name" label="姓名" width="120" sortable> </el-table-column>
      <el-table-column prop="sex" label="性别" width="80" sortable> </el-table-column>
      <el-table-column prop="date" label="生日" width="180"> </el-table-column>
      <el-table-column prop="province" label="省份" width="80"> </el-table-column>
      <el-table-column prop="city" label="城市" width="80"> </el-table-column>
      <el-table-column prop="address" label="地址" > </el-table-column>
      <el-table-column prop="phone" label="电话" width="150"> </el-table-column>
      <el-table-column fixed="right" label="操作" width="180"> 
        <template slot-scope="scope">
          <el-button type="primary" size="small" @click="editformButton(scope.$index)" >编辑</el-button>
          <el-button type="danger" size="small" @click="deleteform(scope.$index)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <!-- 分页 -->
    <el-pagination  layout="prev, pager, next" :total="$store.state.tableData.length"> </el-pagination>
    
    <!-- 编辑窗口 -->
    <el-dialog title="编辑信息" :visible.sync="editform">
      <el-form >
        <el-form-item label="姓名" >
          <el-input v-model="editText.name" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="性别">
          <el-radio-group v-model="editText.sex">
            <el-radio  label="男"></el-radio>
            <el-radio label="女"></el-radio>
          </el-radio-group>
        </el-form-item>    
        <el-form-item label="生日" >
          <el-date-picker type="date" placeholder="选择日期" v-model="editText.date"></el-date-picker>
        </el-form-item>
        <el-form-item label="省份" >
          <el-select v-model="editText.province" placeholder="请选择省份">
            <el-option label="广东" value="广东"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="城市" >
          <el-select v-model="editText.city" placeholder="请选择城市">
            <el-option label="广州" value="广州"></el-option>
            <el-option label="深圳" value="深圳"></el-option>
            <el-option label="珠海" value="珠海"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="地址" >
          <el-input v-model="editText.address" ></el-input>
        </el-form-item>
        <el-form-item label="电话" >
          <el-input v-model="editText.phone" auto-complete="off"></el-input>
        </el-form-item>

      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="editform = false">取 消</el-button>
        <el-button type="primary" @click="dialogFormVisible2">确 定</el-button>
      </div>
    </el-dialog>




  </div>
</template>

<script>
  export default {
    data() {
      return {
        editText:{
          date: '',
          name: '',
          province: '',
          city: '',
          sex: '',
          address: '',
          phone: ''
        },
        newform:false,
        editform:false,
        date:'2016-05-03',
        radio:'男',
        formLabelWidth: '120px'
      }
    },
    methods: {
      // 删除当前
      deleteform: function(index){
        this.$confirm('是否删除该信息?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$store.state.tableData.splice(index, 1); 
          this.$message({
            type: 'success',
            message: '删除成功!'
          });
        }).catch(() => {

        });
      },
      // 批量删除
      deleteall() {
        this.$confirm('是否删除选中的列表?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$message({
            type: 'success',
            message: '批量删除成功!'
          });
        }).catch(() => {

        });
      },
      // 新建表格
      newformButton() {
        this.editform = true
        this.editText = []
      },
      //编辑表格
      editformButton(index) {
        this.editform = true
        this.editText = this.$store.state.tableData[index]
      },
      // 编辑成功
      dialogFormVisible2: function(){
        this.editform = false
        this.$message.success('编辑成功')
      }

    }
  }
</script>
<style scoped>
/*.el-table{
  text-align: center;
}
.el-table th{
  text-align: center;
}*/
.el-dialog{
  padding: 10px;
}
.el-input {
    width: 280px;
}
.el-dialog__header {
    font-weight: 600;
}
.el-dialog__body {
    padding: 20px 30px;
}

</style>