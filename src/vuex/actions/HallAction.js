import {axGet} from '../../common/HttpBean'

export function getRoomList(thisa){
		axGet('/api/hall/getRoomList',{},function(res){
	//alert(res.data);
	thisa.roomList=res.data;
	},function(err){
		alert(err);
});
};

export function newRoom(roomobj,thisa){
	
		axGet('/api/hall/newroom?roompwd='+roomobj,{},function(res){
			
	//alert(res.data);
	getRoomList(thisa);
	thisa.$router.push('/room');
	},function(err){
		alert(err);
});
};