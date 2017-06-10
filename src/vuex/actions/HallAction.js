import {axGet} from '../../common/HttpBean'

export function getRoomList(thisa){
		axGet('/api/hall/getRoomList',{},function(res){
			//console.log(res.data[1]);
	       //alert(res.data[1].nicheng);
	thisa.roomList=res.data[0];
	thisa.loginbean=res.data[1];
	},function(err){
		alert(err);
});
};

export function newRoom(roomobj,thisa){
	
		axGet('/api/hall/newroom?roompwd='+roomobj,{},function(res){
		
			if(res.data.id){
				getRoomList(thisa);
				//跳进
				//thisa.$router.push('/room');
				thisa.$router.push({ path: '/room', query:res.data});
			}
		
		},function(err){
		alert(err);
});
};
  

  export function getPwdByRoom(room,thisa){
		axGet('/api/hall/getPwdByRoom?room='+room,{},function(res){
			
	 thisa.rpwd=res.data;

	},function(err){
		alert(err);
});
};