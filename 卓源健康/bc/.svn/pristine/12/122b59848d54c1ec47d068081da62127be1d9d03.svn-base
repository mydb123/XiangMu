import base from './base' // 导入接口域名列表
import {get,post,postDownLoad} from '@/utils/http' // 导入http中创建的axios1实例
import qs from 'qs' // 根据需求是否导入qs模块
const raw = {
    //分页查询
    pageByExample (query,pageRequest) {
        return get(`${base.sq}/workbench/bizRaw/pageByExample?`+qs.stringify(query) +'&'+ qs.stringify(pageRequest));
    },
    //新增原料
    save(formData){
        return post(`${base.sq}/workbench/bizRaw/save`,qs.stringify(formData));
    },
    //根据id查询原料
    findById(id){
        return get(`${base.sq}/workbench/bizRaw/findById?id=`+id);
    },
    //原料初检保存
    firstCheckSave(formData){
        return post(`${base.sq}/workbench/bizRaw/firstCheck`,qs.stringify(formData));
    },
    //原料复检保存
    reCheckSave(formData){
        return post(`${base.sq}/workbench/bizRaw/reCheck`,qs.stringify(formData));
    },
    //原料废弃
    discard(id){
        return post(`${base.sq}/workbench/bizRaw/discard`,qs.stringify({id:id}));
    },
    //查询原料详情
    getRawDetails(id){
        return get(`${base.sq}/workbench/bizRaw/getRawDetails?id=`+id);
    },
    //新增原料打印页面
    findByIds(id){
        return get(`${base.sq}/workbench/bizRaw/findByIds?ids=`+id);
    },
    //导出
    exportExcel(query) {
        return postDownLoad(`${base.sq}/workbench/bizRaw/exportExcel?`+qs.stringify(query));
    },
}
export default raw