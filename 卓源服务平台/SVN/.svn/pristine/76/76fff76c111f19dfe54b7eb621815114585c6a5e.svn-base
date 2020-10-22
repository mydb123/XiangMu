import base from './base' // 导入接口域名列表
import {get,post} from '@/utils/http' // 导入http中创建的axios1实例
import qs from 'qs' // 根据需求是否导入qs模块

const counsel = {
    // 分页查询所有项目列表
    pageSearch (formData) {
        return get(`${base.sq}/workbench/bizProject/pageAllProject?`+ qs.stringify(formData));
    },
    // 分页查询正在进行中项目列表
    pageGoingProject (formData) {
        return get(`${base.sq}/workbench/bizProject/pageGoingProject?`+ qs.stringify(formData));
    },
    // 分页查询正在进行中项目列表
    pageCompleteProject (formData) {
        return get(`${base.sq}/workbench/bizProject/pageCompleteProject?`+ qs.stringify(formData));
    },
    // 新增咨询
    createCounsel (formData) {
        return post(`${base.sq}/workbench/bizCounsel/save`,qs.stringify(formData));
    },
    // 按照咨询类型分页查询咨询列表：查新条件：标题 项目名称 咨询单位 咨询类型 分页条件
    pageCounselSearch (formData) {
        return get(`${base.sq}/workbench/bizCounsel/page?`+ qs.stringify(formData));
    },
    // 咨询回复和服务评价
    updateCounsel (formData) {
        return post(`${base.sq}/workbench/bizCounsel/update`,qs.stringify(formData));
    },
    pageHome(){//最新咨询进展
        return get(`${base.sq}/workbench/bizCounsel/pageHome`); 
    }

    

}

export default counsel