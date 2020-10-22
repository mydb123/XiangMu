
 /**
 * axios封装
 * 请求拦截、响应拦截、错误统一处理
 */
import axios from 'axios';
import store from '../store/index';
import { Message } from 'element-ui'
    
const clearstore = {
    source: {
        token: null,
        cancel: null
    }
}

// 设置post请求头
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
axios.defaults.timeout = 10000;
/** 
 * 请求拦截器 
 * 每次请求前，如果存在token则在请求头中携带token 
 */ 
axios.interceptors.request.use(    
    config => {        
        config.cancelToken = clearstore.source.token
        // 登录流程控制中，根据本地是否存在token判断用户的登录情况        
        // 但是即使token存在，也有可能token是过期的，所以在每次的请求头中携带token        
        // 后台根据携带的token判断用户的登录情况，并返回给我们对应的状态码  'Basic '+token      
        // 而后我们可以在响应拦截器中，根据状态码进行一些统一的操作。'Bearer '+token        
        const token = store.getters.token;     
        token && (config.headers.Authorization = 'Bearer '+token);        
        return config;   
    },    
    error => Promise.error(error)
)

// 响应拦截器
axios.interceptors.response.use(    
    
    // 请求成功
    res => 
    {   
        return Promise.resolve(res)
    },  
      
    // 请求失败
    error => {
        // console.info(error.response.status)
        return Promise.reject(error)
    });
/** 
 * get方法，对应get请求 
 * @param {String} url [请求的url地址] 
 * @param {Object} params [请求时携带的参数] 
 */
export function get(url, params){    
    return new Promise((resolve, reject) =>{        
        axios.get(url, {            
            params: params        
        })        
        .then(res => {            
            resolve(res.data);        
        })        
        .catch(err => {            
            reject(err.data)        
        })    
    });
}

/**
 * 封装post请求
 * @param url
 * @param data
 * @returns {Promise}
 */

export function post(url,data = {}){
    return new Promise((resolve,reject) => {
      axios.post(url,data)
           .then(response => {
            resolve(response.data);
           },err => {
             reject(err)
           })
    })
  }

  /**
 * 封装post请求
 * @param url
 * @param data
 * @returns {Promise}
 */

export function postDownLoad(url,data = {}){
    return new Promise((resolve,reject) => {
      axios.post(url,data,{responseType: 'blob'})
           .then(response => {              
            resolve(response);
           },err => {
             reject(err)
           })
    })
  }
export  {clearstore};