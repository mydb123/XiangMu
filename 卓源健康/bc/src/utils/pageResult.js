import api from '@/api/index';

// 条件参数
const query = {
    name:'',
    code:'',
    status:''
}
// 请求参数
const pageRequest = {
    pageNumber:1, //初始页
    pageSize:10,   //每页的数据
}
// 返回结果
const pageResult = {
    rows:[], //每页显示数据
    total:0,   //总条目数
}

pageRequest.clear= function(){
    this.pageNumber=1
    this.pageSize=10
}

query.clear= function(){
    this.name='',
    this.code='',
    this.status=''
}

pageResult.clear = function(){
    this.rows = [],
    this.total = 0
}

export  {query,pageResult,pageRequest,pageSearch,conditionSearch,getSalesreturnList,createdSearch}

//页面发生变化时查询
function pageSearch(method/*todo方法*/,query/*入参*/,pageRequest/*入参*/,pageResult/*返回结果*/){
    method(query,pageRequest,pageResult)
}
//条件查询
function conditionSearch(method,query,pageRequest,pageResult) {
    method(query,pageRequest,pageResult)
}
//进入页面时查询
function createdSearch(method/*业务方法*/,query,pageRequest,pageResult,status) {
    pageRequest.clear()
    query.clear()
    pageResult.clear()
    query.status = status
    method(query,pageRequest,pageResult)
}

//todo 业务逻辑
export  {
    getCtnList,
    getaFersaleList,
    getInventoryList,
    getShipmentList,
    getFinishedList,
    getpastdueList,
    getDonatorInformationList,
    getProductInformationList,
    getShipmentInformationList,
    getKeepPage,
    page
}

//出库管理-箱号列表
function getCtnList(query,pageRequest,pageResult) {   
    api.box.pageByExample(query,pageRequest,pageResult).then((response)=>{
        pageResult.rows = response.rows;
        pageResult.total = response.total;
    }).catch((error)=>{
        console.log(error);
    });
}

//出库管理-售后列表
function getaFersaleList(query,pageRequest,pageResult) {   
    api.box.pageByExample(query,pageRequest,pageResult).then((response)=>{
        pageResult.rows = response.rows;
        pageResult.total = response.total;
    }).catch((error)=>{
        console.log(error);
    });
}

//库存管理-成品列表
function getFinishedList(query,pageRequest,pageResult) {   
    api.product.productPage(query,pageRequest,pageResult).then((response)=>{
        pageResult.rows = response.rows;
        pageResult.total = response.total;
    }).catch((error)=>{
        console.log(error);
    });
}

//库存管理-库存列表
function getInventoryList(query,pageRequest,pageResult) {   
    api.product.stockPage(query,pageRequest,pageResult).then((response)=>{
        pageResult.rows = response.rows;
        pageResult.total = response.total;
    }).catch((error)=>{
        console.log(error);
    });
}

//库存管理-出货列表
function getShipmentList(query,pageRequest,pageResult) {   
    api.product.sellPage(query,pageRequest,pageResult).then((response)=>{
        pageResult.rows = response.rows;
        pageResult.total = response.total;
    }).catch((error)=>{
        console.log(error);
    });
}

//库存管理-过期列表
function getpastdueList(query,pageRequest,pageResult) {   
    api.product.stockPage(query,pageRequest,pageResult).then((response)=>{
        pageResult.rows = response.rows;
        pageResult.total = response.total;
    }).catch((error)=>{
        console.log(error);
    });
}

//库存管理-退货列表
function getSalesreturnList(query,pageRequest,pageResult) {   
    api.product.stockPage(query,pageRequest,pageResult).then((response)=>{
        pageResult.rows = response.rows;
        pageResult.total = response.total;
    }).catch((error)=>{
        console.log(error);
    });
}

export {getDonatorList,getRawList,getProductList,produceProduct}
//原料管理-供体列表
function getDonatorList(query,pageRequest,pageResult) {   
    api.donator.pageByExample(query,pageRequest,pageResult).then((response)=>{
        pageResult.rows = response.rows;
        pageResult.total = response.total;
    }).catch((error)=>{
        console.log(error);
    });
}

//原料管理-原料列表
function getRawList(query,pageRequest,pageResult) {   
    api.raw.pageByExample(query,pageRequest,pageResult).then((response)=>{
        pageResult.rows = response.rows;
        pageResult.total = response.total;
    }).catch((error)=>{
        console.log(error);
    });
}

//制备管理-制备列表
function produceProduct(query,pageRequest,pageResult) {   
    api.product.produceProduct(query,pageRequest,pageResult).then((response)=>{
        pageResult.rows = response.rows;
        pageResult.total = response.total;
    }).catch((error)=>{
        console.log(error);
    });
}

//制备管理-成品质检列表-废弃成品列表
function getProductList(query,pageRequest,pageResult) {   
    api.product.pageByExample(query,pageRequest,pageResult).then((response)=>{
        pageResult.rows = response.rows;
        pageResult.total = response.total;
    }).catch((error)=>{
        console.log(error);
    });
}

//制备管理-留样列表
function getKeepPage(query,pageRequest,pageResult) {   
    api.product.keepPage(query,pageRequest,pageResult).then((response)=>{
        pageResult.rows = response.rows;
        pageResult.total = response.total;
    }).catch((error)=>{
        console.log(error);
    });
}



//后台管理-供体信息修改列表
function getDonatorInformationList(query,pageRequest,pageResult) {   
    api.admin.pageByExample(query,pageRequest,pageResult).then((response)=>{
        pageResult.rows = response.rows;
        pageResult.total = response.total;
    }).catch((error)=>{
        console.log(error);
    });
}


//后台管理-成品信息修改列表
function getProductInformationList(query,pageRequest,pageResult) {   
    api.admin.productPage(query,pageRequest,pageResult).then((response)=>{
        pageResult.rows = response.rows;
        pageResult.total = response.total;
    }).catch((error)=>{
        console.log(error);
    });
}

//后台管理-出货信息修改列表
function getShipmentInformationList(query,pageRequest,pageResult) {   
    api.admin.manufacture(query,pageRequest,pageResult).then((response)=>{
        pageResult.rows = response.rows;
        pageResult.total = response.total;
    }).catch((error)=>{
        console.log(error);
    });
}


//附加功能-编码列表
function page(query,pageRequest,pageResult) {   
    api.product.page(pageRequest,pageResult).then((response)=>{
        pageResult.rows = response.data.rows;
        pageResult.total = response.data.total;
    }).catch((error)=>{
        console.log(error);
    });
}






























//todo
