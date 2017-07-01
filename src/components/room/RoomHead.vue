<template>
	<el-row style='border:1px solid green;'>
		<el-col :span='18'>&nbsp;</el-col>
		<el-col :span='3'>
			<el-button type="primary" @click='leaveRoom'>离开房间</el-button>
		</el-col>
		<el-col :span='3'>&nbsp;</el-col>
	</el-row>
</template>
<script>
import SocketBean from '../../common/SocketBean'
export default {
	methods:{
		leaveRoom:function(){
			SocketBean.getSingleTon().closeConnect();
			this.$router.push('/gamehill');
		}
	}
}
</script>