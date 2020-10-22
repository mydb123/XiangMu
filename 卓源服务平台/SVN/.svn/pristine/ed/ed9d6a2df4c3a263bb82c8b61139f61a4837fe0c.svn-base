import base from './base' // 导入接口域名列表
import {get,post} from '@/utils/http' // 导入http中创建的axios1实例
import qs from 'qs' // 根据需求是否导入qs模块

const userRelated = {
    getUserList (stationId) {
        return get(`${base.sq}/userRelated/findUserByStation?stationId=`+stationId);
    }
}

export default userRelated