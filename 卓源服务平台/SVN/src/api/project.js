import base from './base' // 导入接口域名列表
import {get,post} from '@/utils/http' // 导入http中创建的axios1实例
import qs from 'qs' // 根据需求是否导入qs模块

const project = {
    // 立项信息
    lxxx (formData) {
        return post(`${base.sq}/workbench/bizProject/lxxx`,qs.stringify(formData));
    },
    //设计方案
    sjfa (formData) {
        return post(`${base.sq}/workbench/bizProject/sjfa`,qs.stringify(formData));
    },
    //设计成果
    sjcg (formData) {
        return post(`${base.sq}/workbench/bizProject/sjcg`,qs.stringify(formData));
    },
    //采购方案
    cgfa (formData) {
        return post(`${base.sq}/workbench/bizProject/cgfa`,qs.stringify(formData));
    },
    //施工方案
    sgfa (formData) {
        return post(`${base.sq}/workbench/bizProject/sgfa`,qs.stringify(formData));
    },
    //采购记录
    cgjl (formData) {
        return post(`${base.sq}/workbench/bizPurchaseMonth/save`,qs.stringify(formData));
    },
    //施工记录
    sgjl (formData) {
        return post(`${base.sq}/workbench/bizConstructionMonth/save`,qs.stringify(formData));
    },
    //竣工
    jg (formData) {
        return post(`${base.sq}/workbench/bizProject/complete`,qs.stringify(formData));
    },


    // 根据角色名称查询用户
    getUserByRoleName (roleName) {
        return get(`${base.sq}/workbench/bizProject/getUserByRoleName?roleName=`+roleName);
    },
    // 根据角色名称查询用户
    getUserByRoleNamePost (roleName) {
        return post(`${base.sq}/workbench/bizProject/getUserByRoleName`,qs.stringify({"roleName":roleName}));
    },
    // 根据id查询项目信息
    getProjectById (id) {
        return get(`${base.sq}/workbench/bizProject/`+id);
    },
    // 上传文件
    uploadFile (obj) {
        return post(`${base.sq}/workbench/uploadFile`, obj, { headers: { 'Content-Type': 'multipart/form-data' }});
    },
    deleteFile(id) {//删除文件
        let operator = sessionStorage.getItem("user");
        return post(`${base.sq}/workbench/deleteFile`, qs.stringify({ id: id, operator: operator }));
    },
    loadFile(foreignId, type) {//加载
        return get(`${base.sq}/workbench/findFileByForeignIdAndType?foreignId=` + foreignId + "&type=" + type);
    },
    goingAndCompleteProject(){//首页当前在建项目和竣工项目
        return get(`${base.sq}/workbench/bizProject/goingAndCompleteProject`);
    },
    listRecentlyProject(){//首页最新项目进展
        return get(`${base.sq}/workbench/bizProject/listRecentlyProject`); 
    },
    countProjectByYear(){//首页项目年度分布图
        return get(`${base.sq}/workbench/bizProject/countProjectByYear`); 
    },
    countProjectByProvince(){//首页项目地区图
        return get(`${base.sq}/workbench/bizProject/countProjectByProvince`); 
    },
    countProjectByScale(){//首页项目规模图
        return get(`${base.sq}/workbench/bizProject/countProjectByScale`); 
    },
    bizProjectSupplierList(projectId){//供应商列表
        return get(`${base.sq}/workbench/bizProjectSupplier/list?projectId=`+projectId); 
    },
    bizProjectConstructionList(projectId){//劳务列表
        return get(`${base.sq}/workbench/bizProjectConstruction/list?projectId=`+projectId); 
    },
    bizPurchaseMonthList(projectId){//月度采购列表
        return get(`${base.sq}/workbench/bizPurchaseMonth/list?projectId=`+projectId); 
    },
    bizConstructionMonthList(projectId){//月度施工列表
        return get(`${base.sq}/workbench/bizConstructionMonth/list?projectId=`+projectId); 
    },

}

export default project