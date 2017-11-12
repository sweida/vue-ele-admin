<template>
  <div>
    <h2>更改密码</h2>
    <el-form ref="form"  label-width="100px" >
      <el-form-item label="原账号密码">
        <el-input v-model="userpassword"></el-input>
      </el-form-item>
      <el-form-item label="新账号密码">
        <el-input type="password" v-model="newpassword1"></el-input>
      </el-form-item>
      <el-form-item label="确认新密码">
        <el-input type="password" v-model="newpassword2"></el-input>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="onSubmit" >更改</el-button>
      </el-form-item>
    </el-form>
  </div>

</template>

<script>
  export default {
    data() {
      return {
        userpassword: '',
        newpassword1: '',
        newpassword2:''
      };
    },
    methods: {
      onSubmit:function () {
        if(this.userpassword =='' || this.newpassword1 ==''){
          this.$message.error('密码不能为空');
        }else if(this.userpassword != this.$store.state.user.password){
          this.$message.error('原密码不正确');
        }else if (this.newpassword1 != this.newpassword2){
          this.$message.error('2次输入的密码不一样');
        }else {
          this.$message.success('密码修改成功');
        }
      }
    }
  }
</script>

<style scoped>
.el-form{
  width:400px;
}
</style>