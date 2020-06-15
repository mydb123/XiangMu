import base from './base' // 导入接口域名列表
import {get,post,postDownLoad} from '@/utils/http' // 导入http中创建的axios1实例
import qs from 'qs' // 根据需求是否导入qs模块
const box = {
  // 箱号列表
  pageByExample(query,pageRequest) {
    return get(`${base.sq}/workbench/bizBox/pageByExample?`+ qs.stringify(query) +'&'+ qs.stringify(pageRequest));
  },
  // 箱号列表
  getBizBoxDetails(id) {
    return get(`${base.sq}/workbench/bizBox/getBizBoxDetails?id=`+id);
  },
  //扫码处的接口
  scan(code) {
    return get(`${base.sq}/workbench/bizProduct/scan?code=`+code);
  },
  save(formData) {
    return post(`${base.sq}/workbench/bizBox/save`,qs.stringify(formData));
  },
  // 箱号详情-箱号列表上面数据
  findById(id){
    return get(`${base.sq}/workbench/bizBox/findById?id=`+id);
  },
  // 箱号详情-箱号列表
  productPage(boxId,pageRequest) {
    return get(`${base.sq}/workbench/bizProduct/pageByExample?boxId=` + boxId +'&'+ qs.stringify(pageRequest));
  },
  //箱号详情-售后提交
  afterService(formData) {
    return post(`${base.sq}/workbench/bizBox/afterService`,qs.stringify(formData));
  },
  //导出
  exportExcel(query) {
    return postDownLoad(`${base.sq}/workbench/bizBox/exportExcel?`+qs.stringify(query));
  },
 
}
export default box