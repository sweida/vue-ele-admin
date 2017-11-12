<template>
  <div id="app">
    <headnav></headnav>
    <el-container>
      <leftnav></leftnav>
      <router-view class="main-center"/>
    </el-container>
  </div>
</template>

<script>
import headnav from '../components/headnav'
import leftnav from '../components/leftnav'

export default {
  name: 'app',
  components:{
    headnav,
    leftnav
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
