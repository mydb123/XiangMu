import base from './base' // 导入接口域名列表
import {get,post} from '@/utils/http' // 导入http中创建的axios1实例
import qs from 'qs' // 根据需求是否导入qs模块
let baseUrl = base.sq;
const constructionDept = {
  upload (formData ) {
    return post(baseUrl+'/test/upload', formData, { headers: { 'Content-Type': 'multipart/form-data' } })   
  },
  save(formData){//项目立项保存
    return post(baseUrl+'/bizConstruction/dept/save', qs.stringify(formData));    
  },
  findById(id){//查询项目立项基本信息
    return get(baseUrl+'/bizConstruction/dept/findById?id='+id);
  },
  updateStatus(id,status){//改变项目状态，无需填写意见
    let operator = sessionStorage.getItem('user');
    let userName = sessionStorage.getItem('user');
    return post(`${base.sq}/bizConstruction/dept/updateStatus`, qs.stringify({id:id,status:status,operator:operator,userName:userName}));
  },
  updateStatusAndProgress(id,status,progress){//改变项目状态，需要填写意见
    let operator = sessionStorage.getItem('user');
    let userName = sessionStorage.getItem('user');
    return post(`${base.sq}/bizConstruction/dept/updateStatusAndProgress`, qs.stringify({id:id,status:status,progress:progress,operator:operator,userName:userName}));
  },
  saveConstructionRequired(formData){//甲方保存清单
    return post(`${base.sq}/bizConstruction/dept/saveConstructionRequired`, qs.stringify(formData));
  },
  uploadFile(formData){
    return post(baseUrl+'/bizConstruction/dept/uploadFile', formData, { headers: { 'Content-Type': 'multipart/form-data' } })   
  },
  loadFile(projectId,typeValue){//根据项目主键和附件类型查询附件列表
    return get(`${base.sq}/bizConstruction/dept/loadFile?projectId=` + projectId + "&typeValue="+ typeValue);
  },
  deleteFile(fileId){
    let operator = sessionStorage.getItem('user');
    return post(`${base.sq}/bizConstruction/dept/deleteFile`, qs.stringify({fileId:fileId,operator:operator}));
  },
  saveConstructionPlan(formData){//乙方保存采购方案
    return post(`${base.sq}/bizConstruction/dept/saveConstructionPlan`, qs.stringify(formData));
  },
  findBizConstructionProgressByExample(ConstructionId,status){//查询项目基本信息和最新意见
    return get(`${base.sq}/bizConstruction/dept/findBizConstructionProgressByExample?ConstructionId=` + ConstructionId + "&status="+ status);
  },
  uploadMonthFile(formData){//月度采购清单上传
    return post(baseUrl+'/bizConstruction/dept/uploadMonthFile', formData, { headers: { 'Content-Type': 'multipart/form-data' } }) 
  },
  saveBizConstructionMonth(formData){
    return post(`${base.sq}/bizConstruction/dept/saveBizConstructionMonth`, qs.stringify(formData));
  },
  findMouthListByExample(constructionId){//查询月度采购信息
    return get(`${base.sq}/bizConstruction/dept/findMouthListByExample?constructionId=` + constructionId);
  },
  findBizConstructionProgressByExampleMonth(constructionId,monthId,status){
    return get(`${base.sq}/bizConstruction/dept/findBizConstructionProgressByExample?constructionId=` + constructionId +"&monthId=" +monthId+ "&status="+ status);
  },
  getPage (pageRequest) {
    console.info(pageRequest)
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
    return get(baseUrl+'/bizConstruction/dept/getPageByExample?' + qs.stringify(pageRequest) );
  },
  findProjectDetailsById(id){
    return get(`${base.sq}/bizConstruction/dept/getProjectDetails?id=`+id);
  }
}

export default constructionDept
