import base from './base' // 导入接口域名列表
import {get,post,postDownLoad} from '@/utils/http' // 导入http中创建的axios1实例
import qs from 'qs' // 根据需求是否导入qs模块
const donator = {
    //根据id查询供体
    findById(id){
      return get(`${base.sq}/workbench/bizDonator/findById?id=`+id);
    },
    //分页查询（带条件）    
    pageByExample (query,pageRequest) {
      return get(`${base.sq}/workbench/bizDonator/pageByExample?`+qs.stringify(query) +'&'+ qs.stringify(pageRequest));
    },
    //附件上传
    uploadFile(type){
      return post(`${base.sq}/workbench/uploadFile?type=`+type)
    },
    //新增供体
    save(formData,fileIds){
      return post(`${base.sq}/workbench/bizDonator/save?fileIds=`+fileIds,qs.stringify(formData));
    },
    //查询供体详情
    findDonatorDetailsById(id){
      return get(`${base.sq}/workbench/bizDonator/getBizDonatorDetails?id=`+id);
    },
    //根据名称模糊查询所有供体
    findByName(name){
      return get(`${base.sq}/workbench/bizDonator/findByName?name=`+name);
    },
    //导出   
    exportExcel(query) {
      return postDownLoad(`${base.sq}/workbench/bizDonator/exportExcel?`+qs.stringify(query));
    },
}
export default donator