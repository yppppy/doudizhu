<template>
	<div>
		<el-button type="success"  @click='createNewRoom'>新建房间</el-button>
		<el-form ref="form" name='RoomForm'  id= 'RoomForm'style="display: none;margin:20px; ">

					<el-form-item style='text-align: center;margin:0px;'>
						
					</el-form-item>
				  <el-form-item >
				    
				    <el-input placeholder="设置密码，不设置任何人都可进入" type='password' class='elInputClass' name='roompwd'></el-input>
				   
				  </el-form-item>
				  <el-form-item style='text-align: center'>
				    <el-button type="primary" >创建房间</el-button>
				    
				    	<el-button @click='hide'>收起</el-button>
				  
				  </el-form-item>
				</el-form>
	</div>
</template>
<script>
import {zhuce} from '../../vuex/actions/UserAction';
import {getZhuce} from '../../vuex/getters/UserGetter'
export default {
	data(){
		return {
			data:0
		}
	},
	methods:{
		createNewRoom:function(e){
			

			$('#RoomForm').show();
		},
		hide:function(e){
			

			$('#RoomForm').hide();
		}
	},
	computed:{
		data:getZhuce
	}
}
</script>