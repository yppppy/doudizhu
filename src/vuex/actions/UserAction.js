import {axPost} from '../../common/HttpBean'
import userStore from '../stores/UserStore'

export function zhuce(form,thisa){
		axPost('/api/users/zhuce',$(form).serialize(),function(res){
				if(res.data!=0){
					userStore.commit('zhuce',res.data);
					thisa.$router.push('/gamehill');
					return;
				}
				
			},function(err){
				alert(err);
		});
};

export function login(form,thisa){
		axPost('/api/users/login',$(form).serialize(),function(res){
				if(res.data!=0){
					userStore.commit('login',res.data);
					thisa.$router.push('/gamehill');
					return;
				}else{
					alert('账号/密码错误');
				}
				//alert(res.data);
				//userStore.commit('login',res.data);
			},function(err){
				alert(err);
		});
};