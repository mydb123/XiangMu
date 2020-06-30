

import base from './base'; // 导入接口域名列表
import {get,post} from '@/utils/http'; // 导入http中创建的axios1实例
import qs from 'qs'; // 根据需求是否导入qs模块

const login = {         
    loginByUsernameApi(username, password) {     
        return post(`${base.sq}/oauth/token`, //todo 发布时修改client
            qs.stringify({username:username,password:password,grant_type:'password',client_id:'client',client_secret:123456}));    
    },
    getUserInfoApi(token,username) {    
        // return get(`${base.sq}/test/userinfo?access_token=`+token+'&username='+username);    
        return get(`${base.sq}/userRelated/userMenus?`+'username='+username);    
    },
    registerApi(username, password) {     
        return post(`${base.sq}/userRelated/register`, 
            qs.stringify({name:username,password:password}));    
    },
    updatePasswordApi(username, password,oldPassword) {     
        return post(`${base.sq}/userRelated/updatePassword`, 
            qs.stringify({name:username,password:password,oldPassword:oldPassword}));    
    },
}

export default login;