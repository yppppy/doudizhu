import {axGet} from '../../common/HttpBean'

export function getRoomList(thisa,pwd){
		axGet('/api/hall/getRoomList?roompwd='+pwd,{},function(res){
	alert(res.data);
	},function(err){
		alert(err);
});

};