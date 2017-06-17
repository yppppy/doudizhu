<template>
	<div>
		<el-button type="success" @click='openNewRoom'>新建房间</el-button><br/>
		<el-form ref="newRoomForm" name='newRoomForm' style='display:none'>
			<br/>
					<el-form-item style='text-align: center;margin:0px;'>
					</el-form-item>
				  <el-form-item >
				    <el-input placeholder="设置密码,无密码任何人都可进入" class='elInputClass' name='roompwd'></el-input>
				    <center>
				    <el-button type="primary" @click='newRoom'>创建房间</el-button>
				    <el-button @click='hidNewRoom'>收起</el-button>
				    </center>
				  </el-form-item>
		</el-form>
		<br/>
		<el-table :data="roomList">
		    <el-table-column
		      fixed
		      prop="room"
		      label="房号">
		    </el-table-column>
		    <el-table-column
		      prop="num"
		      label="人数">
		    </el-table-column>
		    <el-table-column
		      prop="pwd"
		      label="密码">
		    </el-table-column>
		    <el-table-column
		      prop="createtime"
		      label="创建时间">
		    </el-table-column>
		 <el-table-column inline-template
        fixed="right"
            label="操作"
              width="150">
		        <el-button @click="enterRoom(row)"
		          type="text"
		          size="small"  >
		          进入
		        </el-button>
		     
		    </el-table-column>
		  </el-table>

	</div>
</template>
<script>
import {axGet} from '../../common/HttpBean'
import {newRoom,getRoomList} from '../../vuex/actions/HallAction'
import userStore from '../../vuex/stores/UserStore'
let newVue =  {
  data(){
  	return {
  		roomList:[],
  		//loginbean:{},
  		rpwd:""
  	}
  },
  mounted:function(){ 
		//axios向服务器发请求,获取房间列表
		getRoomList(this);
  },

  methods:{
  	openNewRoom:function(){
  		$(newRoomForm).show();
  	},
  	hidNewRoom:function(){
  		$(newRoomForm).hide();
  	},
  	newRoom:function(){
  		let formObj=newRoomForm.roompwd.value;
  		newRoom(formObj,this);
  	},
  	enterRoom:function(rowa){


           //获取房间号后把它加入到loginbean中
  		    //组合好参数跳进room
  		    if(rowa.pwd=="有"){
  		    let	pwd = prompt("请输入房间密码:");//对话框点击取消返回null，不做任何操作
  		  
  		
  			if (pwd != null){//点击了确定
  		    	 
  		    	 if(pwd==""){//没输入
                      alert("输入密码不能为空！！！！")
  		    	 }else{
               let thisa=this;
       //从服务器获取密码[方法内this指针发生转移]
          axGet('/api/hall/getPwdByRoom?room='+rowa.room,{},function(res){
			
	           thisa.rpwd=res.data;
	           if(pwd==thisa.rpwd){//密码输入正确，进入房间
	             let msg=userStore.state.loginbean
	           	  msg.room=rowa.room;
  		    	  thisa.$router.push({ path: '/room', query:msg});
	           }else{
               	alert("密码输入错误！！！！")
               }
 
	          },function(err){
		     alert(err);
            });

         }//end of else
               }
                
            }else{//无密码，直接进入房间
            
            let msg=userStore.state.loginbean
           
            alert(userStore.state.loginbean);
	           	  msg.room=rowa.room;
	           this.$router.push({ path: '/room', query:msg});
  		    	    
            }
  		    },
  	 			 
  },
}
export default newVue;
</script>