<template>
  <div>
    <h2>账号信息</h2>
    <el-form ref="form"  label-width="100px" >
      <el-form-item label="管理员账号">
        <el-input v-model="$store.state.form.id"></el-input>
      </el-form-item>
      <el-form-item label="管理员昵称">
        <el-input v-model="$store.state.form.name"></el-input>
      </el-form-item>
      <el-form-item label="管理员级别">
        <el-select v-model="$store.state.user.region" placeholder="请选择级别">
          <el-option label="超级管理员" value="level1"></el-option>
          <el-option label="普通管理员" value="level2"></el-option>
          <el-option label="临时管理员" value="level3"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="更改头像">
        <div class="adminimg" >
          <img :src="$store.state.form.img" alt="">
        </div>
        <el-upload
          action="https://jsonplaceholder.typicode.com/posts/"
          list-type="picture-card"
          :on-preview="handlePictureCardPreview"
          :on-remove="handleRemove"
          :limit=1
          >
          <i class="el-icon-plus"></i>
        </el-upload>
        <el-dialog :visible.sync="dialogVisible" size="tiny">
          <img width="100%" :src="dialogImageUrl" alt="">
        </el-dialog>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">保存</el-button>
      </el-form-item>
    </el-form>

  </div>
</template>

<script>
  export default {
    data() {
      return {
        dialogImageUrl: 'https://avatars2.githubusercontent.com/u/23181508?s=460&v=4',
        dialogVisible: false
      }
    },
    methods: {
      onSubmit() {
        if(this.$store.state.form.id == '' ||this.$store.state.form.name == ''){
          this.$message.error('信息不能为空')
        }else{
          this.$store.state.user.id ==this.$store.state.form.id
          console.log(this.$store.state.form.name)
          this.$store.state.user.name ==this.$store.state.form.name
          this.$message.success('账号信息修改成功')
        }
      },
      handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handlePictureCardPreview(file) {
        this.dialogImageUrl = file.url;
        this.dialogVisible = true;
      }
    }
  }
</script>
<style>
.el-form{
  width:600px;
}
.line {
    text-align: center;
}
.adminimg{
  width:148px;
  height: 148px;
  margin-right: 10px;
  float: left;
}
.adminimg img{
  width:100%;
}
</style>
