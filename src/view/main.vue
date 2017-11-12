<template>
  <div id="app">
    <h3>欢迎账号:{{$store.state.user.name}} ({{$store.state.user.region}}) 登录 vue-element-admin后台系统</h3>
    <p>登录时间：{{$store.state.date}}</p>
  </div>
</template>

<script>

export default {
  name: 'app',
  data () {
    return {

    }
  }
}
</script>

<style>
body {
  margin:0;
}
.el-container{
  display: flex;
  position: absolute;
  top: 60px;
  bottom: 0;
  overflow: hidden;
  width: 100%;
}
.main-center{
  padding: 20px;
  width: 100%;
  overflow-y: scroll;
}
</style>
