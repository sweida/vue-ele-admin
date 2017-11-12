import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const state = {
	user:{
	  id:'admin',
	  name: '拯救前端一号',
	  region: '超级管理员',
	  img:'https://avatars2.githubusercontent.com/u/23181508?s=460&v=4',
	  password:123456,
	  resource: ''
	},
	form: {
	  id:'admin',
	  name: '拯救前端一号',
	  img:'https://avatars2.githubusercontent.com/u/23181508?s=460&v=4',
	  date1: '',
	  date2: '',
	  delivery: false,
	  type: [],
	  desc: ''
	},
    tableData: [
	    {date: '2016-05-03', name: '张全蛋1', province: '广东', city: '深圳', sex: '男', address: '深圳湾第十八弯', phone: '13798661922'}, 
	    {date: '2016-05-03', name: '张全蛋2', province: '广东', city: '深圳', sex: '男', address: '深圳湾第十八弯', phone: '13798661922'}, 
	    {date: '2016-05-03', name: '张全蛋3', province: '广东', city: '深圳', sex: '男', address: '深圳湾第十八弯', phone: '13798661922'}, 
	    {date: '2016-05-03', name: '张全蛋4', province: '广东', city: '深圳', sex: '男', address: '深圳湾第十八弯', phone: '13798661922'}, 
	    {date: '2016-05-03', name: '张全蛋5', province: '广东', city: '深圳', sex: '男', address: '深圳湾第十八弯', phone: '13798661922'}, 
	    {date: '2016-05-03', name: '张全蛋6', province: '广东', city: '深圳', sex: '男', address: '深圳湾第十八弯', phone: '13798661922'}, 
	    {date: '2016-05-03', name: '张全蛋7', province: '广东', city: '深圳', sex: '男', address: '深圳湾第十八弯', phone: '13798661922'}, 
	    {date: '2016-05-03', name: '张全蛋8', province: '广东', city: '深圳', sex: '男', address: '深圳湾第十八弯', phone: '13798661922'}, 
	    {date: '2016-05-03', name: '张全蛋9', province: '广东', city: '深圳', sex: '男', address: '深圳湾第十八弯', phone: '13798661922'}, 
	    {date: '2016-05-03', name: '张全蛋10', province: '广东', city: '深圳', sex: '男', address: '深圳湾第十八弯', phone: '13798661922'}
	],
	date : new Date
}

        
        
        

export default new Vuex.Store({
	state
});