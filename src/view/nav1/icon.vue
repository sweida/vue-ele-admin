<template>
  <div class="icon">
    <h2>icon 图标</h2>
        <el-popover
          :ref="popover"
          placement="top"
          title="icon图标类名"
          width="100"
          trigger="hover"
          :content="iconstext">
        </el-popover>
    <li><i class="el-icon-upload" v-popover:popover></i></li>
    <li v-for="(icon, index) in icons">
        <i :class="icon.name" :data="index+1" ></i>
    </li>
  </div>
</template>

<script>
export default {
  data () {
    return {
      iconstext:'el-icon-upload',
      icons:[
        {name:'el-icon-upload'},
        {name:'el-icon-error'},
        {name:'el-icon-success'},
        {name:'el-icon-warning'},
        {name:'el-icon-sort-down'},
        {name:'el-icon-sort-up'},
        {name:'el-icon-arrow-left'},
        {name:'el-icon-circle-plus'},
        {name:'el-icon-circle-plus-outline'},
        {name:'el-icon-arrow-down'},
        {name:'el-icon-arrow-right'},
        {name:'el-icon-arrow-up'},
        {name:'el-icon-back'},
        {name:'el-icon-circle-close'},
        {name:'el-icon-date'},
        {name:'el-icon-circle-close-outline'},
        {name:'el-icon-caret-left'},
        {name:'el-icon-caret-bottom'},
        {name:'el-icon-caret-top'},
        {name:'el-icon-caret-right'},
        {name:'el-icon-close'},
        {name:'el-icon-d-arrow-left'},
        {name:'el-icon-check'},
        {name:'el-icon-delete'},
        {name:'el-icon-d-arrow-right'},
        {name:'el-icon-document'},
        {name:'el-icon-d-caret'},
        {name:'el-icon-edit-outline'},
        {name:'el-icon-download'},
        {name:'el-icon-goods'},
        {name:'el-icon-search'},
        {name:'el-icon-info'},
        {name:'el-icon-message'},
        {name:'el-icon-edit'},
        {name:'el-icon-location'},
        {name:'el-icon-loading'},
        {name:'el-icon-location-outline'},
        {name:'el-icon-menu'},
        {name:'el-icon-minus'},
        {name:'el-icon-bell'},
        {name:'el-icon-mobile-phone'},
        {name:'el-icon-news'},
        {name:'el-icon-more'},
        {name:'el-icon-more-outline'},
        {name:'el-icon-phone'},
        {name:'el-icon-phone-outline'},
        {name:'el-icon-picture'},
        {name:'el-icon-picture-outline'},
        {name:'el-icon-plus'},
        {name:'el-icon-printer'},
        {name:'el-icon-rank'},
        {name:'el-icon-refresh'},
        {name:'el-icon-question'},
        {name:'el-icon-remove'},
        {name:'el-icon-share'},
        {name:'el-icon-star-on'},
        {name:'el-icon-setting'},
        {name:'el-icon-circle-check'},
        {name:'el-icon-service'},
        {name:'el-icon-sold-out'},
        {name:'el-icon-remove-outline'},
        {name:'el-icon-star-off'},
        {name:'el-icon-circle-check-outline'},
        {name:'el-icon-tickets'},
        {name:'el-icon-sort'},
        {name:'el-icon-zoom-in'},
        {name:'el-icon-time'},
        {name:'el-icon-view'},
        {name:'el-icon-upload2'},
        {name:'el-icon-zoom-out'}
      ],
      popover:'popover'
    }

  },
  methods: {
    oniconName :function (){
      this.iconNameBox = true
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.icon{
/*  display: flex;
  flex-wrap: wrap;*/
}
.icon li{
  width:100px;
  height: 100px;
  align-items: center;
  justify-content: center;
  /*border: 1px solid #ddd;*/
  display: flex;
  float: left;
}
.icon li i{
    display: block;
    font-size: 32px;
    margin-bottom: 15px;
    color: #409eff;
}

</style>
