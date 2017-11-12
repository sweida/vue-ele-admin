<template>
  <div class="leftnav">
    <el-row class="tac">
        <el-menu :default-active="$route.path" 
        :router="true" 
        unique-opened="true"
        class="el-menu-vertical-demo" 
        @open="handleOpen" 
        @close="handleClose" 
        >
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-menu"></i>
              <span>导航一</span>
            </template >
              <el-menu-item index="/button" >button</el-menu-item>
              <el-menu-item index="/icon" >icon</el-menu-item>
              <el-menu-item index="/radio">step</el-menu-item>
          </el-submenu>

          <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-tickets"></i>
              <span>导航二</span>
            </template >
              <el-menu-item index="/slider" >slider</el-menu-item>
              <el-menu-item index="/form" >Form表单</el-menu-item>
              <el-menu-item index="/table">Table表格</el-menu-item>
          </el-submenu>

          <el-submenu index="3">
            <template slot="title">
              <i class="el-icon-edit"></i>
              <span>导航三</span>
            </template >
              <el-menu-item index="/message" >个人信息</el-menu-item>
              <el-menu-item index="/password" >修改密码</el-menu-item>
          </el-submenu>

        </el-menu>
    </el-row>

  </div>
</template>

<script>
  export default {
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.leftnav{
    flex:0 0 230px;
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;  
}
</style>




