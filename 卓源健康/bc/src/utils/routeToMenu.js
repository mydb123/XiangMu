
import {asyncRouterMap} from '@/router'
import store from '@/store'
//一级菜单、二级菜单配置
const routeToMenu = [
  {
    path: '/workbench',
    first:'/workbench',
    second:'/workbench/raw/donorList',
  },
  // 供体列表 
  {
    path: '/workbench/raw/donorList',
    first:'/workbench',
    second:'/workbench/raw/donorList',
  },
  //供体新增
  {
    path: '/workbench/raw/addDonor',
    first:'/workbench',
    second:'/workbench/raw/donorList',
  },
  //供体详情
  {
    path: '/workbench/raw/donorDetail',
    first:'/workbench',
    second:'/workbench/raw/donorList',
  },
  //原料列表
  {
    path: '/workbench/raw/rawList',
    first:'/workbench',
    second:'/workbench/raw/rawList',
  },
  //原料补印
  {
    path: '/workbench/raw/rawMaterialReprints',
    first:'/workbench',
    second:'/workbench/raw/rawList',
  },
  //新增原料打印
  {
    path: '/workbench/raw/addMaterialPrinting',
    first:'/workbench',
    second:'/workbench/raw/rawList',
  },
  //原料新增
  {
    path: '/workbench/raw/addRaw',
    first:'/workbench',
    second:'/workbench/raw/rawList',
  },
  //原料列表原料详情
  {
    path: '/workbench/raw/rawDetailList',
    first:'/workbench',
    second:'/workbench/raw/rawList',
  },
  //原料初检原料详情
  {
    path: '/workbench/raw/rawDetailInspection',
    first:'/workbench',
    second:'/workbench/raw/rawInspection',
  },
  //原料复检原料详情
  {
    path: '/workbench/raw/rawDetailReinspection',
    first:'/workbench',
    second:'/workbench/raw/rawReinspection',
  },
  //原料库存原料详情
  {
    path: '/workbench/raw/rawDetailRepertory',
    first:'/workbench',
    second:'/workbench/raw/rawRepertory',
  },
  //原料废弃原料详情
  {
    path: '/workbench/raw/rawDetailWaste',
    first:'/workbench',
    second:'/workbench/raw/wasteraws',
  },
  //原料初检
  {
    path: '/workbench/raw/rawInspection',
    first:'/workbench',
    second:'/workbench/raw/rawInspection',
  },
  //原料初检操作 
  {
    path: '/workbench/raw/rawInspectionOperation',
    first:'/workbench',
    second:'/workbench/raw/rawInspection',
  },
  // 原料复检
  {
    path: '/workbench/raw/rawReinspection',
    first:'/workbench',
    second:'/workbench/raw/rawReinspection',
  },
  //原料复检操作
  {
    path: '/workbench/raw/rawReinspectionOperation',
    first:'/workbench',
    second:'/workbench/raw/rawReinspection',
  },
  // 原料库存
  {
    path: '/workbench/raw/rawRepertory',
    first:'/workbench',
    second:'/workbench/raw/rawRepertory',
  },
  // 废弃原料
  {
      path: '/workbench/raw/wasteraws',
      first:'/workbench',
      second:'/workbench/raw/wasteraws',
  },
  //制备列表
  {
    path: '/workbench/management/preparationList',
    first:'/workbench',
    second:'/workbench/management/preparationList',
  },
  //制备补印
  {
    path: '/workbench/management/PreparationOfReprints',
    first:'/workbench',
    second:'/workbench/management/preparationList',
  },
  //新增制备打印
  {
    path: '/workbench/management/addPreparationPrinting',
    first:'/workbench',
    second:'/workbench/management/preparationList',
  },
  //制备列表制备详情
  {
    path: '/workbench/management/preparationDetailList',
    first:'/workbench',
    second:'/workbench/management/preparationList',
  },
  //成品质检制备详情
  {
    path: '/workbench/management/preparationDetailTest',
    first:'/workbench',
    second:'/workbench/management/productInspection',
  },
  //废弃成品制备详情
  {
    path: '/workbench/management/preparationDetailWaste',
    first:'/workbench',
    second:'/workbench/management/wasteProducts',
  },
  //新增制备
  {
    path: '/workbench/management/addPreparation',
    first:'/workbench',
    second:'/workbench/management/preparationList',
  },
  // 成品质检列表
  {
    path: '/workbench/management/productInspection',
    first:'/workbench',
    second:'/workbench/management/productInspection',
  },
  {
    path: '/workbench/management/qualityTesting',
    first:'/workbench',
    second:'/workbench/management/productInspection',
  },
    // 废弃成品
  {
    path: '/workbench/management/wasteProducts',
    first:'/workbench',
    second:'/workbench/management/wasteProducts',
  },
    // 出库管理(箱号列表)
    {
    path: '/workbench/warehouseMmanagement/ctnList',
    first:'/workbench',
    second:'/workbench/warehouseMmanagement/ctnList',
    },
    //箱号列表详情页面
    {
      path: '/workbench/warehouseMmanagement/showDetailsCtn',
      first:'/workbench',
      second:'/workbench/warehouseMmanagement/ctnList',
    },
    // 售后列表
    {
      path: '/workbench/warehouseMmanagement/aftersaleList',
      first:'/workbench',
      second:'/workbench/warehouseMmanagement/aftersaleList',
    },
    // 售后列表详情页面
    {
      path: '/workbench/warehouseMmanagement/showDetailsAfterSale',
      first:'/workbench',
      second:'/workbench/warehouseMmanagement/aftersaleList',
    },

    //售后维护
    {
      path: '/workbench/warehouseMmanagement/sale',
      first:'/workbench',
      second:'/workbench/warehouseMmanagement/aftersaleList',
    },
    //新增出货
    {
      path: '/workbench/warehouseMmanagement/addctnList',
      first:'/workbench',
      second:'/workbench/warehouseMmanagement/ctnList',
    },
    // 详情页面
    {
      path: '/workbench/warehouseMmanagement/showDetails',
      first:'/workbench',
      second:'/workbench/warehouseMmanagement/showDetails',
    },
    // 成品列表
    {
    path: '/workbench/stockControl/finishedproductList',
    first:'/workbench',
    second:'/workbench/stockControl/finishedproductList',
    },
    //成品打印
    {
      path: '/workbench/stockControl/finishedPrinting',
      first:'/workbench',
      second:'/workbench/stockControl/finishedproductList',
      },
    // 库存列表
    {
      path: '/workbench/stockControl/inventoryList',
      first:'/workbench',
      second:'/workbench/stockControl/inventoryList',
    },
      // 出货列表
      {
      path: '/workbench/stockControl/shipmentList',
      first:'/workbench',
      second:'/workbench/stockControl/shipmentList',
    },
      // 过期列表
      {
      path: '/workbench/stockControl/pastdueList',
      first:'/workbench',
      second:'/workbench/stockControl/pastdueList',
    },
    //退货列表
    {
      path: '/workbench/stockControl/salesreturnList',
      first:'/workbench',
      second:'/workbench/stockControl/salesreturnList',
    },
    //留样列表
    {
      path: '/workbench/stockControl/reservedList',
      first:'/workbench',
      second:'/workbench/stockControl/reservedList',
    },
    //留样打印
    {
      path: '/workbench/stockControl/reservedPrinting',
      first:'/workbench',
      second:'/workbench/stockControl/reservedList',
    },
    //成品列表制备详情
    {
      path: '/workbench/stockControl/particularsFinishedProduct',
      first:'/workbench',
      second:'/workbench/stockControl/finishedproductList',
    },
    //库存列表制备详情 
    {
      path: '/workbench/stockControl/particularsInventory',
      first:'/workbench',
      second:'/workbench/stockControl/inventoryList',
    },
    //出货列表制备详情
    {
      path: '/workbench/stockControl/particularsShipment',
      first:'/workbench',
      second:'/workbench/stockControl/shipmentList',
    },
    //过期列表制备详情
    {
      path: '/workbench/stockControl/particularsPastdue',
      first:'/workbench',
      second:'/workbench/stockControl/pastdueList',
    },
    //退货列表制备详情
    {
      path: '/workbench/stockControl/particularsSalesReturn',
      first:'/workbench',
      second:'/workbench/stockControl/salesreturnList',
    },
    //成品列表箱号详情
    {
      path: '/workbench/stockControl/showDetailsFinishedProduct',
      first:'/workbench',
      second:'/workbench/stockControl/finishedproductList',
    },
    //库存列表箱号详情
    {
      path: '/workbench/stockControl/showDetailsInventory',
      first:'/workbench',
      second:'/workbench/stockControl/inventoryList',
    },
    //出货列表箱号详情
    {
      path: '/workbench/stockControl/showDetailsShipment',
      first:'/workbench',
      second:'/workbench/stockControl/shipmentList',
    },
    //过期列表箱号详情
    {
      path: '/workbench/stockControl/showDetailsPastdue',
      first:'/workbench',
      second:'/workbench/stockControl/pastdueList',
    },
    //退货列表箱号详情
    {
      path: '/workbench/stockControl/showDetailsSalesReturn',
      first:'/workbench',
      second:'/workbench/stockControl/salesreturnList',
    },
    // 后台管理
    {
      path: '/backstageManagement',
      first:'/backstageManagement',
      second:'/backstageManagement/Information/informationChanges',
    },
    // 供体信息修改
    {
      path: '/backstageManagement/Information/informationChanges',
      first:'/backstageManagement',
      second:'/backstageManagement/Information/informationChanges',
    },
      // 成品信息修改
      {
      path: '/backstageManagement/Information/finishedproductModification',
      first:'/backstageManagement',
      second:'/backstageManagement/Information/finishedproductModification',
    },
      // 出货信息修改
      {
      path: '/backstageManagement/Information/shipmentModification',
      first:'/backstageManagement',
      second:'/backstageManagement/Information/shipmentModification',
    },
      //供体信息微调
      {
      path: '/backstageManagement/Information/informationChangesDetail',
      first:'/backstageManagement',
      second:'/backstageManagement/Information/informationChanges',
    },
      //成品信息微调
      {
      path: '/backstageManagement/Information/productDetail',
      first:'/backstageManagement',
      second:'/backstageManagement/Information/finishedproductModification',
    },
      //出货信息微调
      {
      path: '/backstageManagement/Information/shipmentDetail',
      first:'/backstageManagement',
      second:'/backstageManagement/Information/shipmentModification',
    },
    //批量打印
    {
      path: '/workbench/dataCoding/BatchPrint',
      first: '/workbench',
      second:'/workbench/dataCoding/CodeList',
    },
    {
      path: '/workbench/dataCoding/singleBatchPrint',
      first: '/workbench',
      second:'/workbench/dataCoding/CodeList',
    },
  {
    path: '/',
    first:'/',
    second:'/productCodeList',
  },
  {
    path: '/createProductCode',
    first:'/',
    second:'/productCodeList',
  },
  {
    path: '/productCodeList',
    first:'/',
    second:'/productCodeList',
  },
  {
    path: '/productCodePreview',
    first:'/',
    second:'/productCodeList',
  },
  {
    path: '/singleProductCodePreview',
    first:'/',
    second:'/productCodeList',
  },
  //数据编码-数据列表
  {
    path: '/workbench/dataCoding/CodeList',
    first:'/workbench',
    second:'/workbench/dataCoding/CodeList',
  },
  //附加功能-编码列表-打印
  {
    path: '/workbench/dataCoding/print',
    first:'/workbench',
    second:'/workbench/dataCoding/CodeList',
  }
]




const methodRouteMenu = {
  getRoutes:function(firstUrl,router){
    if(firstUrl =='/'){
      return router.options.routes[2].children
    }
    for (let index = 0; index < asyncRouterMap.length; index++) {
      const element = asyncRouterMap[index];
      if(element.path ==  firstUrl){
        return element.children  
      }
    }
  },
  getRouteMenu:function(path){
    for (let index = 0; index < routeToMenu.length; index++) {
      const element = routeToMenu[index];
      if(path == element.path){
        return element
      }
    }
    return ;
  },
  getSecond:function(element){
    let _second 
    if(!element.second){
      let temp1 = store.getters.permission_routers ? store.getters.permission_routers : constantRouterMap
      for (let index = 0; index <temp1.length; index++) {
        const _element = temp1[index];
        if(_element.path ==  element.first){
          _second = _element.children[0].redirect || _element.redirect ||_element.path
        }
      }
    }else{
      _second = element.second
    }
    return _second
  }
}

export  {methodRouteMenu}
export default routeToMenu
