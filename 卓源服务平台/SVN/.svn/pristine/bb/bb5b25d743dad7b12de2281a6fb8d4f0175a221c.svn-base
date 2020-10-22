import base from './base'; // 导入接口域名列表
import { get, post } from '@/utils/http'; // 导入http中创建的axios1实例
import qs from 'qs'; // 根据需求是否导入qs模块
let baseUrl = base.sq;
const designDept = {
    save(formData) {//项目立项保存
        return post(`${base.sq}/bizDesign/dept/add`, qs.stringify(formData));
    },
    findById(id) {//查询项目立项基本信息
        return get(`${base.sq}/bizDesign/dept/findById?id=` + id);
    },
    updateStatus(id,status) {//更改项目状态，无需填写意见   
        let operator = sessionStorage.getItem('user');
        let userName = sessionStorage.getItem('user');
        return post(`${base.sq}/bizDesign/dept/updateStatus`, qs.stringify({ id: id, status: status, operator: operator,userName:userName}));
    },
    updateStatusAndProgress(id, status, progress) {//改变项目状态，需要填写意见
        let operator = sessionStorage.getItem('user');
        let userName = sessionStorage.getItem('user');
        return post(`${base.sq}/bizDesign/dept/updateStatusAndProgress`, qs.stringify({ id: id, status: status, progress: progress, operator: operator,userName:userName}));
    },
    findBizDesignProgressByExample(designId,status){//查询项目最新意见
        return get(`${base.sq}/bizDesign/dept/findBizDesignProgressByExample?designId=` + designId + "&status="+ status);
    },
    uploadFile(formData){//上传附件
        return post(`${base.sq}/bizDesign/dept/uploadFile`, formData, { headers: { 'Content-Type': 'multipart/form-data' } })   
    },
    loadFile(projectId,typeValue){//根据项目主键和附件类型查询附件列表
        return get(`${base.sq}/bizDesign/dept/loadFile?projectId=` + projectId + "&typeValue="+ typeValue);
    },
    saveDesignPlan(formData){//乙方保存设计方案
        return post(`${base.sq}/bizDesign/dept/saveDesignPlan`, qs.stringify(formData));
    },
    saveDesignResult(formData){//乙方保存设计成果
        return post(`${base.sq}/bizDesign/dept/saveDesignResult`, qs.stringify(formData));
    },
    deleteFile(fileId){
        let operator = sessionStorage.getItem("user");
        let userName = sessionStorage.getItem("user");
        return post(`${base.sq}/bizDesign/dept/deleteFile`, qs.stringify({fileId:fileId,operator:operator,userName:userName}));
      },
    getPage (pageRequest) {
      return this.getList(pageRequest)    
    },
    getPageByStatus(pageRequest){
      return this.getList(pageRequest)  
    },
    getPageByLeader (pageRequest) {
      let leader = sessionStorage.getItem('user');
      pageRequest.leader = leader
      return this.getList(pageRequest)  
    },
    getPageByLeaderAndStatus(pageRequest){
      let leader = sessionStorage.getItem('user');
      pageRequest.leader = leader
      return this.getList(pageRequest)  
    },
    getList(pageRequest){
      return get(baseUrl+'/bizDesign/dept/getPageByExample?' + qs.stringify(pageRequest) );
    },
    findProjectDetailsById(id){
        return get(`${base.sq}/bizDesign/dept/getProjectDetails?id=`+id);
    }
}

export default designDept;