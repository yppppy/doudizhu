<template>
	
	<el-row>
	<h3 class="text-center text-primary">游戏大厅</h3>
	<el-col :span="6">
	<levelnav/>
	</el-col>
	<el-col :span="18">
	<roomlist/>
	</el-col>
</el-row>


</template>
<script>
import {getRoomList} from '../../vuex/actions/HallAction'
import RoomList from './RoomList.vue';
import Levelnav from './Levelnav.vue';
	export default {
		mounted:function(){ 
       		//axios向服务器发请求,获取房间列表
       		getRoomList(this,$('#roompwd').val());
  		},

  		components:{
  			levelnav:Levelnav,
  			roomlist:RoomList

  		}
	}
</script>