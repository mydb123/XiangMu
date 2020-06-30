import urls from '@/utils/url.js'
import address from '@/utils/address.js'
export {urls,address} 
export function post(url,data = {}){
    return uni.request({
		sslVerify:false,
		url:url,
		data:data,
		header: {
			'content-type':'application/x-www-form-urlencoded;charset = utf-8' 
		},
		method:'POST'
	})
}

export function get(url,data = {}){
    return uni.request({
		url:url,
		data:data,
	}) 
}


  