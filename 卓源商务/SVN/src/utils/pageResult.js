import api from '@/api/index';

const pageResult = {
    currentPage:1, //初始页
    pageSize:10,   //每页的数据
    rows: [],
    total:0
}

const pageRequest = {
    pageNumber:1,
    pageSize:10,
    status:'',
    leader:'',
    name:'',
}
pageRequest.clear= function(){
    this.pageNumber=1
    this.pageSize=10
    this.status=''
    this.leader=''
    this.name=''
}

function pageSearch(getPage,pageRequest,pageResult,currentPage,name,status){
    pageRequest.clear()
    pageRequest.pageNumber = currentPage;
    pageRequest.name = name
    pageRequest.status = status
    getPage(pageRequest,pageResult)
}
function conditionSearch(getPage,pageRequest,pageResult,name,status) {
    pageRequest.clear()
    pageRequest.name = name
    pageRequest.status = status
    getPage(pageRequest,pageResult)
}

function createdSearch(getPage,pageRequest,pageResult,status) {
    pageRequest.clear()
    pageRequest.status = status
    getPage(pageRequest,pageResult)
}

function getPageConstructionPartner(pageRequest,pageResult) { 
    api.constructionPartner.getPageByLeader(pageRequest).then((response)=>{
        pageResult.rows = response.rows;
        pageResult.total = response.total;
    }).catch((error)=>{
        console.log(error);
    });
}

function getPageConstructionDept(pageRequest,pageResult) { 
    api.constructionDept.getPage(pageRequest).then((response)=>{
        pageResult.rows = response.rows;
        pageResult.total = response.total;
    }).catch((error)=>{
        console.log(error);
    });
}

function getPagePurchasePartner(pageRequest,pageResult) { 
    api.purchasePartner.getPageByLeader(pageRequest).then((response)=>{
        pageResult.rows = response.rows;
        pageResult.total = response.total;
    }).catch((error)=>{
        console.log(error);
    });
}

function getPagePurchaseDept(pageRequest,pageResult) { 
    api.purchaseDept.getPage(pageRequest).then((response)=>{
        pageResult.rows = response.rows;
        pageResult.total = response.total;
    }).catch((error)=>{
        console.log(error);
    });
}


function getPageDesignPartner(pageRequest,pageResult) { 
    api.designPartner.getPageByLeader(pageRequest).then((response)=>{
        pageResult.rows = response.rows;
        pageResult.total = response.total;
    }).catch((error)=>{
        console.log(error);
    });
}

function getPageDesignDept(pageRequest,pageResult) { 
    api.designDept.getPage(pageRequest).then((response)=>{
        pageResult.rows = response.rows;
        pageResult.total = response.total;
    }).catch((error)=>{
        console.log(error);
    });
}

//loadFile
function loadFile(apiClass,projectId,typeValue,files){
    api[apiClass].loadFile(projectId,typeValue).then(response =>{
        console.log(response);
        response.forEach(element => {
            let obj = new Object();
            obj.id = element.id;
            obj.name = element.showName;
            obj.url = element.url;
            files.push(obj);
        });
    }).catch(error =>{
        console.log(error);
    });
}


export  {pageRequest,pageSearch,conditionSearch,createdSearch}
export  {getPageConstructionPartner}
export  {getPageConstructionDept}
export  {getPagePurchasePartner}
export  {getPagePurchaseDept}
export  {getPageDesignPartner}
export  {getPageDesignDept}

export  {loadFile}

export default pageResult