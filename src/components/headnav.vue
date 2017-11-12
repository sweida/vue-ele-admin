<template>
  <div class="headnav">
    <div class="headtitle">
      vue后台管理系统
    </div>

    <el-dropdown class="namebox" @command="handleCommand">
      <span class="el-dropdown-link">
        <span class="admin-name">{{$store.state.user.name}}</span>
        <img :src="$store.state.user.img" alt="" class="admin-img">
      </span>

      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item command="/message">个人信息</el-dropdown-item>
        <el-dropdown-item command="/password">修改密码</el-dropdown-item>
        <el-dropdown-item divided @click.native="logout">退出登录</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>

  </div>
</template>

<script>
export default {
  // name: 'aaa',
  data () {
    return {
      // msg: 'aaa'
    }
  },
  methods: {
    logout: function () {
      var _this = this;
      this.$confirm('确认退出吗?', '提示', {
        //type: 'warning'
      }).then(() => {
        // 删除登录信息
        sessionStorage.removeItem('user');
        _this.$router.push('/login');
        this.$message.success('已退出登录')
      }).catch(() => {

      });
    },
    handleCommand(command) {
      this.$router.push(command);
    }

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.headnav{
    background-color:#409eff;
    color: #333;
    line-height: 60px;
    display: flex;
    justify-content: space-between;
    color:#fff;
}
.headtitle{
  flex:0 0 229px;
  border-right: 1px solid #a0cfff;
  text-align: center;
}
.namebox{
  margin-right: 30px;
}
.el-dropdown-link{
  display: flex;
  align-items: center;
  cursor: pointer;
  color:#fff;
}
.admin-img{
  width:48px;
  /*height: 46px;*/
  border-radius:4px;
  margin: 0 0px 0 10px;
}
</style>
