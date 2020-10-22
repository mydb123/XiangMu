import base from './base' // 导入接口域名列表
import {get,post} from '@/utils/http' // 导入http中创建的axios1实例
import qs from 'qs' // 根据需求是否导入qs模块
let baseUrl = base.sq;
const purchaseDept = {
  save(formData){//项目立项保存
    return post(`${base.sq}/bizPurchase/dept/save`, qs.stringify(formData));    
  },
  findById(id){//查询项目立项基本信息
    return get(`${base.sq}/bizPurchase/dept/findById?id=`+id);
  },
  updateStatus(id,status){//改变项目状态，无需填写意见
    let operator = sessionStorage.getItem('user');
    let userName = sessionStorage.getItem('user');
    return post(`${base.sq}/bizPurchase/dept/updateStatus`, qs.stringify({id:id,status:status,operator:operator,userName:userName}));
  },
  updateStatusAndProgress(id,status,progress){//改变项目状态，需要填写意见
    let operator = sessionStorage.getItem('user');
    let userName = sessionStorage.getItem('user');
    return post(`${base.sq}/bizPurchase/dept/updateStatusAndProgress`, qs.stringify({id:id,status:status,progress:progress,operator:operator,userName:userName}));
  },
  savePurchaseRequired(formData){//甲方保存清单
    return post(`${base.sq}/bizPurchase/dept/savePurchaseRequired`, qs.stringify(formData));
  },
  uploadFile(formData){
    return post(baseUrl+'/bizPurchase/dept/uploadFile', formData, { headers: { 'Content-Type': 'multipart/form-data' } })   
  },
  loadFile(projectId,typeValue){//根据项目主键和附件类型查询附件列表
    return get(`${base.sq}/bizPurchase/dept/loadFile?projectId=` + projectId + "&typeValue="+ typeValue);
  },
  deleteFile(fileId){
    let operator = sessionStorage.getItem("user");
    let userName = sessionStorage.getItem("user");
    return post(`${base.sq}/bizPurchase/dept/deleteFile`, qs.stringify({fileId:fileId,operator:operator,userName:userName}));
  },
  savePurchasePlan(formData){//乙方保存采购方案
    return post(`${base.sq}/bizPurchase/dept/savePurchasePlan`, qs.stringify(formData));
  },
  findBizPurchaseProgressByExample(purchaseId,status){//查询项目基本信息和最新意见
    return get(`${base.sq}/bizPurchase/dept/findBizPurchaseProgressByExample?purchaseId=` + purchaseId + "&status="+ status);
  },
  uploadMonthFile(formData){//月度采购清单上传
    return post(baseUrl+'/bizPurchase/dept/uploadMonthFile', formData, { headers: { 'Content-Type': 'multipart/form-data' } }) 
  },
  saveBizPurchaseMonth(formData){
    return post(`${base.sq}/bizPurchase/dept/saveBizPurchaseMonth`, qs.stringify(formData));
  },
  findMouthListByExample(purchaseId){//查询月度采购信息
    return get(`${base.sq}/bizPurchase/dept/findMouthListByExample?purchaseId=` + purchaseId);
  },
  findBizPurchaseProgressByExampleMonth(purchaseId,monthId,status){
    return get(`${base.sq}/bizPurchase/dept/findBizPurchaseProgressByExample?purchaseId=` + purchaseId +"&monthId=" +monthId+ "&status="+ status);
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
    return get(baseUrl+'/bizPurchase/dept/getPageByExample?' + qs.stringify(pageRequest) );
  },
  findProjectDetailsById(id){
    return get(`${base.sq}/bizPurchase/dept/getProjectDetails?id=`+id);
  }
}

export default purchaseDept
