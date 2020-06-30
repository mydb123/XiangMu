
import {asyncRouterMap} from '@/router'
import store from '@/store'

const routeToMenu = [
  {
    path: '/',
    first:'/',
    second:'/introduction',
  },
  {
    path: '/introduction',
    first:'/',
    second:'/introduction',
  },
  {
    path: '/declaration',
    first:'/',
    second:'/declaration',
  },

  {
    path: '/Supplier',
    first:'/Supplier',
    second:'/Supplier/supplierLibrary',
  },
  {
    path: '/Supplier/supplierLibrary',
    first:'/Supplier',
    second:'/Supplier/supplierLibrary',
  },

// construction
  {
    path: '/construction',
    first:'/construction',
    second:'',
  },
  {
    path: '/construction/partner',
    first:'/construction',
    second:'/construction/partner/all',
  },
  {
    path: '/construction/partner/all',
    first:'/construction',
    second:'/construction/partner/all',
  },
  {
    path: '/construction/partner/detail',
    first:'/construction',
    second:'/construction/partner/all',
  },
  {
    path: '/construction/partner/progress',
    first:'/construction',
    second:'/construction/partner/progress/approval',
  },
  {
    path: '/construction/partner/progress/approval',
    first:'/construction',
    second:'/construction/partner/progress/approval',
  },
  {
    path: '/construction/partner/progress/menu',
    first:'/construction',
    second:'/construction/partner/progress/menu',
  },
  {
    path: '/construction/partner/progress/plan',
    first:'/construction',
    second:'/construction/partner/progress/plan',
  },
  {
    path: '/construction/partner/progress/month',
    first:'/construction',
    second:'/construction/partner/progress/month',
  },
  {
    path: '/construction/partner/progress/result',
    first:'/construction',
    second:'/construction/partner/progress/result',
  },
  {
    path: '/construction/partner/progress/appraise',
    first:'/construction',
    second:'/construction/partner/progress/appraise',
  },
  {
    path: '/construction/partner/finish',
    first:'/construction',
    second:'/construction/partner/finish',
  },
  {
    path: '/construction/partner/fail',
    first:'/construction',
    second:'/construction/partner/fail',
  },
  {
    path: '/construction/partner/failDetail',
    first:'/construction',
    second:'/construction/partner/fail',
  },
  {
    path: '/construction/partner/approvalUpload',
    first:'/construction',
    second:'/construction/progress/approval',
  },
  {
    path: '/construction/partner/approvalPending',
    first:'/construction',
    second:'/construction/partner/progress/approval',
  },
  {
    path: '/construction/partner/menuUpload',
    first:'/construction',
    second:'/construction/partner/progress/menu',
  },
  {
    path: '/construction/partner/menuReview',
    first:'/construction',
    second:'/construction/partner/progress/menu',
  },
  {
    path: '/construction/partner/planUpload',
    first:'/construction',
    second:'/construction/partner/progress/plan',
  },
  {
    path: '/construction/partner/planSuggest',
    first:'/construction',
    second:'/construction/partner/progress/plan',
  },
  {
    path: '/construction/partner/planReview',
    first:'/construction',
    second:'/construction/partner/progress/plan',
  },
  {
    path: '/construction/partner/planUpdate',
    first:'/construction',
    second:'/construction/partner/progress/plan',
  },
  {
    path: '/construction/partner/planFee',
    first:'/construction',
    second:'/construction/partner/progress/plan',
  },
  {
    path: '/construction/partner/monthUpload',
    first:'/construction',
    second:'/construction/partner/progress/month',
  },
  {
    path: '/construction/partner/monthSuggest',
    first:'/construction',
    second:'/construction/partner/progress/month',
  },
  {
    path: '/construction/partner/monthReview',
    first:'/construction',
    second:'/construction/partner/progress/month',
  },
  {
    path: '/construction/partner/monthUpdate',
    first:'/construction',
    second:'/construction/partner/progress/month',
  },
  {
    path: '/construction/partner/monthFee',
    first:'/construction',
    second:'/construction/partner/progress/month',
  },
  {
    path: '/construction/partner/resultUpload',
    first:'/construction',
    second:'/construction/partner/progress/result',
  },
  {
    path: '/construction/partner/resultSuggest',
    first:'/construction',
    second:'/construction/partner/progress/result',
  },
  {
    path: '/construction/partner/resultReview',
    first:'/construction',
    second:'/construction/partner/progress/result',
  },
  {
    path: '/construction/partner/resultUpdate',
    first:'/construction',
    second:'/construction/partner/progress/result',
  },
  {
    path: '/construction/partner/appraiseUpload',
    first:'/construction',
    second:'/construction/partner/progress/appraise',
  },
  {
    path: '/construction/partner/appraiseReview',
    first:'/construction',
    second:'/construction/partner/progress/appraise',
  },
  {
    path: '/construction/partner/finishReview',
    first:'/construction',
    second:'/construction/partner/finish',
  },
  // 
  {
    path: '/construction/dept',
    first:'/construction',
    second:'/construction/dept/all',
  },
  {
    path: '/construction/dept/all',
    first:'/construction',
    second:'/construction/dept/all',
  },
  {
    path: '/construction/dept/detail',
    first:'/construction',
    second:'/construction/dept/all',
  },
  {
    path: '/construction/dept/progress',
    first:'/construction',
    second:'/construction/dept/progress/approval',
  },
  {
    path: '/construction/dept/progress/approval',
    first:'/construction',
    second:'/construction/dept/progress/approval',
  },
  {
    path: '/construction/dept/progress/menu',
    first:'/construction',
    second:'/construction/dept/progress/menu',
  },
  {
    path: '/construction/dept/progress/plan',
    first:'/construction',
    second:'/construction/dept/progress/plan',
  },
  {
    path: '/construction/dept/progress/month',
    first:'/construction',
    second:'/construction/dept/progress/month',
  },
  {
    path: '/construction/dept/progress/result',
    first:'/construction',
    second:'/construction/dept/progress/result',
  },
  {
    path: '/construction/dept/progress/appraise',
    first:'/construction',
    second:'/construction/dept/progress/appraise',
  },
  {
    path: '/construction/dept/finish',
    first:'/construction',
    second:'/construction/dept/finish',
  },
  {
    path: '/construction/dept/fail',
    first:'/construction',
    second:'/construction/dept/fail',
  },
  {
    path: '/construction/dept/failDetail',
    first:'/construction',
    second:'/construction/dept/fail',
  },
  {
    path: '/construction/dept/approvalUpload',
    first:'/construction',
    second:'/construction/dept/approvalUpload',
  },
  {
    path: '/construction/dept/approvalPending',
    first:'/construction',
    second:'/construction/dept/progress/approval',
  },
  {
    path: '/construction/dept/menuUpload',
    first:'/construction',
    second:'/construction/dept/progress/menu',
  },
  {
    path: '/construction/dept/menuReview',
    first:'/construction',
    second:'/construction/dept/progress/menu',
  },
  {
    path: '/construction/dept/planUpload',
    first:'/construction',
    second:'/construction/dept/progress/plan',
  },
  {
    path: '/construction/dept/planSuggest',
    first:'/construction',
    second:'/construction/dept/progress/plan',
  },
  {
    path: '/construction/dept/planReview',
    first:'/construction',
    second:'/construction/dept/progress/plan',
  },
  {
    path: '/construction/dept/planUpdate',
    first:'/construction',
    second:'/construction/dept/progress/plan',
  },
  {
    path: '/construction/dept/planFee',
    first:'/construction',
    second:'/construction/dept/progress/plan',
  },
  {
    path: '/construction/dept/monthUpload',
    first:'/construction',
    second:'/construction/dept/progress/month',
  },
  {
    path: '/construction/dept/monthSuggest',
    first:'/construction',
    second:'/construction/dept/progress/month',
  },
  {
    path: '/construction/dept/monthReview',
    first:'/construction',
    second:'/construction/dept/progress/month',
  },
  {
    path: '/construction/dept/monthUpdate',
    first:'/construction',
    second:'/construction/dept/progress/month',
  },
  {
    path: '/construction/dept/monthFee',
    first:'/construction',
    second:'/construction/dept/progress/month',
  },
  {
    path: '/construction/dept/resultUpload',
    first:'/construction',
    second:'/construction/dept/progress/result',
  },
  {
    path: '/construction/dept/resultSuggest',
    first:'/construction',
    second:'/construction/dept/progress/result',
  },
  {
    path: '/construction/dept/resultReview',
    first:'/construction',
    second:'/construction/dept/progress/result',
  },
  {
    path: '/construction/dept/resultUpdate',
    first:'/construction',
    second:'/construction/dept/progress/result',
  },
  {
    path: '/construction/dept/appraiseUpload',
    first:'/construction',
    second:'/construction/dept/progress/appraise',
  },
  {
    path: '/construction/dept/appraiseReview',
    first:'/construction',
    second:'/construction/dept/progress/appraise',
  },
  {
    path: '/construction/dept/finishReview',
    first:'/construction',
    second:'/construction/dept/progress/finish',
  },
  // purchase
  {
    path: '/purchase',
    first:'/purchase',
    second:'',
  },
  {
    path: '/purchase/partner',
    first:'/purchase',
    second:'/purchase/partner/all',
  },
  {
    path: '/purchase/partner/all',
    first:'/purchase',
    second:'/purchase/partner/all',
  },
  {
    path: '/purchase/partner/detail',
    first:'/purchase',
    second:'/purchase/partner/all',
  },
  {
    path: '/purchase/partner/progress',
    first:'/purchase',
    second:'/purchase/partner/progress/approval',
  },
  {
    path: '/purchase/partner/progress/approval',
    first:'/purchase',
    second:'/purchase/partner/progress/approval',
  },
  {
    path: '/purchase/partner/progress/menu',
    first:'/purchase',
    second:'/purchase/partner/progress/menu',
  },
  {
    path: '/purchase/partner/progress/plan',
    first:'/purchase',
    second:'/purchase/partner/progress/plan',
  },
  {
    path: '/purchase/partner/progress/month',
    first:'/purchase',
    second:'/purchase/partner/progress/month',
  },
  {
    path: '/purchase/partner/progress/result',
    first:'/purchase',
    second:'/purchase/partner/progress/result',
  },
  {
    path: '/purchase/partner/progress/appraise',
    first:'/purchase',
    second:'/purchase/partner/progress/appraise',
  },
  {
    path: '/purchase/partner/finish',
    first:'/purchase',
    second:'/purchase/partner/finish',
  },
  {
    path: '/purchase/partner/fail',
    first:'/purchase',
    second:'/purchase/partner/fail',
  },
  {
    path: '/purchase/partner/failDetail',
    first:'/purchase',
    second:'/purchase/partner/fail',
  },
  {
    path: '/purchase/partner/approvalUpload',
    first:'/purchase',
    second:'/purchase/partner/approvalUpload',
  },
  {
    path: '/purchase/partner/approvalPending',
    first:'/purchase',
    second:'/purchase/partner/progress/approval',
  },
  {
    path: '/purchase/partner/menuUpload',
    first:'/purchase',
    second:'/purchase/partner/progress/menu',
  },
  {
    path: '/purchase/partner/menuReview',
    first:'/purchase',
    second:'/purchase/partner/progress/menu',
  },
  {
    path: '/purchase/partner/planUpload',
    first:'/purchase',
    second:'/purchase/partner/progress/plan',
  },
  {
    path: '/purchase/partner/planSuggest',
    first:'/purchase',
    second:'/purchase/partner/progress/plan',
  },
  {
    path: '/purchase/partner/planReview',
    first:'/purchase',
    second:'/purchase/partner/progress/plan',
  },
  {
    path: '/purchase/partner/planUpdate',
    first:'/purchase',
    second:'/purchase/partner/progress/plan',
  },
  {
    path: '/purchase/partner/planFee',
    first:'/purchase',
    second:'/purchase/partner/progress/plan',
  },
  {
    path: '/purchase/partner/monthUpload',
    first:'/purchase',
    second:'/purchase/partner/progress/month',
  },
  {
    path: '/purchase/partner/monthSuggest',
    first:'/purchase',
    second:'/purchase/partner/progress/month',
  },
  {
    path: '/purchase/partner/monthReview',
    first:'/purchase',
    second:'/purchase/partner/progress/month',
  },
  {
    path: '/purchase/partner/monthUpdate',
    first:'/purchase',
    second:'/purchase/partner/progress/month',
  },
  {
    path: '/purchase/partner/monthFee',
    first:'/purchase',
    second:'/purchase/partner/progress/month',
  },
  {
    path: '/purchase/partner/resultUpload',
    first:'/purchase',
    second:'/purchase/partner/progress/result',
  },
  {
    path: '/purchase/partner/resultSuggest',
    first:'/purchase',
    second:'/purchase/partner/progress/result',
  },
  {
    path: '/purchase/partner/resultReview',
    first:'/purchase',
    second:'/purchase/partner/progress/result',
  },
  {
    path: '/purchase/partner/resultUpdate',
    first:'/purchase',
    second:'/purchase/partner/progress/result',
  },
  {
    path: '/purchase/partner/appraiseUpload',
    first:'/purchase',
    second:'/purchase/partner/progress/appraise',
  },
  {
    path: '/purchase/partner/appraiseReview',
    first:'/purchase',
    second:'/purchase/partner/progress/appraise',
  },
  {
    path: '/purchase/partner/finishReview',
    first:'/purchase',
    second:'/purchase/partner/finish',
  },
  // 
  {
    path: '/purchase/dept',
    first:'/purchase',
    second:'/purchase/dept/all',
  },
  {
    path: '/purchase/dept/all',
    first:'/purchase',
    second:'/purchase/dept/all',
  },
  {
    path: '/purchase/dept/detail',
    first:'/purchase',
    second:'/purchase/dept/all',
  },
  {
    path: '/purchase/dept/progress',
    first:'/purchase',
    second:'/purchase/dept/progress/approval',
  },
  {
    path: '/purchase/dept/progress/approval',
    first:'/purchase',
    second:'/purchase/dept/progress/approval',
  },
  {
    path: '/purchase/dept/progress/menu',
    first:'/purchase',
    second:'/purchase/dept/progress/menu',
  },
  {
    path: '/purchase/dept/progress/plan',
    first:'/purchase',
    second:'/purchase/dept/progress/plan',
  },
  {
    path: '/purchase/dept/progress/month',
    first:'/purchase',
    second:'/purchase/dept/progress/month',
  },
  {
    path: '/purchase/dept/progress/result',
    first:'/purchase',
    second:'/purchase/dept/progress/result',
  },
  {
    path: '/purchase/dept/progress/appraise',
    first:'/purchase',
    second:'/purchase/dept/progress/appraise',
  },
  {
    path: '/purchase/dept/finish',
    first:'/purchase',
    second:'/purchase/dept/finish',
  },
  {
    path: '/purchase/dept/fail',
    first:'/purchase',
    second:'/purchase/dept/fail',
  },
  {
    path: '/purchase/dept/failDetail',
    first:'/purchase',
    second:'/purchase/dept/fail',
  },
  {
    path: '/purchase/dept/approvalUpload',
    first:'/purchase',
    second:'/purchase/dept/approvalUpload',
  },
  {
    path: '/purchase/dept/approvalPending',
    first:'/purchase',
    second:'/purchase/dept/progress/approval',
  },
  {
    path: '/purchase/dept/menuUpload',
    first:'/purchase',
    second:'/purchase/dept/progress/menu',
  },
  {
    path: '/purchase/dept/menuReview',
    first:'/purchase',
    second:'/purchase/dept/progress/menu',
  },
  {
    path: '/purchase/dept/planUpload',
    first:'/purchase',
    second:'/purchase/dept/progress/plan',
  },
  {
    path: '/purchase/dept/planSuggest',
    first:'/purchase',
    second:'/purchase/dept/progress/plan',
  },
  {
    path: '/purchase/dept/planReview',
    first:'/purchase',
    second:'/purchase/dept/progress/plan',
  },
  {
    path: '/purchase/dept/planUpdate',
    first:'/purchase',
    second:'/purchase/dept/progress/plan',
  },
  {
    path: '/purchase/dept/planFee',
    first:'/purchase',
    second:'/purchase/dept/progress/plan',
  },
  {
    path: '/purchase/dept/monthUpload',
    first:'/purchase',
    second:'/purchase/dept/progress/month',
  },
  {
    path: '/purchase/dept/monthSuggest',
    first:'/purchase',
    second:'/purchase/dept/progress/month',
  },
  {
    path: '/purchase/dept/monthReview',
    first:'/purchase',
    second:'/purchase/dept/progress/month',
  },
  {
    path: '/purchase/dept/monthUpdate',
    first:'/purchase',
    second:'/purchase/dept/progress/month',
  },
  {
    path: '/purchase/dept/monthFee',
    first:'/purchase',
    second:'/purchase/dept/progress/month',
  },
  {
    path: '/purchase/dept/resultUpload',
    first:'/purchase',
    second:'/purchase/dept/progress/result',
  },
  {
    path: '/purchase/dept/resultSuggest',
    first:'/purchase',
    second:'/purchase/dept/progress/result',
  },
  {
    path: '/purchase/dept/resultReview',
    first:'/purchase',
    second:'/purchase/dept/progress/result',
  },
  {
    path: '/purchase/dept/resultUpdate',
    first:'/purchase',
    second:'/purchase/dept/progress/result',
  },
  {
    path: '/purchase/dept/appraiseUpload',
    first:'/purchase',
    second:'/purchase/dept/progress/appraise',
  },
  {
    path: '/purchase/dept/appraiseReview',
    first:'/purchase',
    second:'/purchase/dept/progress/appraise',
  },
  {
    path: '/purchase/dept/finishReview',
    first:'/purchase',
    second:'/purchase/dept/progress/finish',
  },
  // design
  {
    path: '/design',
    first:'/design',
    second:'',
  },
  {
    path: '/design/partner',
    first:'/design',
    second:'/design/partner/all',
  },
  {
    path: '/design/partner/all',
    first:'/design',
    second:'/design/partner/all',
  },
  {
    path: '/design/partner/detail',
    first:'/design',
    second:'/design/partner/all',
  },
  {
    path: '/design/partner/progress',
    first:'/design',
    second:'/design/partner/progress/approval',
  },
  {
    path: '/design/partner/progress/approval',
    first:'/design',
    second:'/design/partner/progress/approval',
  },
  {
    path: '/design/partner/progress/drawing',
    first:'/design',
    second:'/design/partner/progress/drawing',
  },
  {
    path: '/design/partner/progress/plan',
    first:'/design',
    second:'/design/partner/progress/plan',
  },
  {
    path: '/design/partner/progress/fee',
    first:'/design',
    second:'/design/partner/progress/fee',
  },
  {
    path: '/design/partner/progress/result',
    first:'/design',
    second:'/design/partner/progress/result',
  },
  {
    path: '/design/partner/progress/appraise',
    first:'/design',
    second:'/design/partner/progress/appraise',
  },
  {
    path: '/design/partner/finish',
    first:'/design',
    second:'/design/partner/finish',
  },
  {
    path: '/design/partner/fail',
    first:'/design',
    second:'/design/partner/fail',
  },
  {
    path: '/design/partner/failDetail',
    first:'/design',
    second:'/design/partner/fail',
  },
  {
    path: '/design/partner/approvalUpload',
    first:'/design',
    second:'/design/partner/progress/approval',
  },
  {
    path: '/design/partner/approvalPending',
    first:'/design',
    second:'/design/partner/progress/approval',
  },
  {
    path: '/design/partner/drawingUpload',
    first:'/design',
    second:'/design/partner/progress/drawing',
  },
  {
    path: '/design/partner/drawingReview',
    first:'/design',
    second:'/design/partner/progress/drawing',
  },
  {
    path: '/design/partner/planUpload',
    first:'/design',
    second:'/design/partner/progress/plan',
  },
  {
    path: '/design/partner/planReview',
    first:'/design',
    second:'/design/partner/progress/plan',
  },
  {
    path: '/design/partner/planSuggest',
    first:'/design',
    second:'/design/partner/progress/plan',
  },
  {
    path: '/design/partner/planUpdate',
    first:'/design',
    second:'/design/partner/progress/plan',
  },
  {
    path: '/design/partner/planFee',
    first:'/design',
    second:'/design/partner/progress/fee',
  },
  {
    path: '/design/partner/resultUpload',
    first:'/design',
    second:'/design/partner/progress/result',
  },
  {
    path: '/design/partner/resultReview',
    first:'/design',
    second:'/design/partner/progress/result',
  },
  {
    path: '/design/partner/resultSuggest',
    first:'/design',
    second:'/design/partner/progress/result',
  },
  {
    path: '/design/partner/resultUpdate',
    first:'/design',
    second:'/design/partner/progress/result',
  },
  {
    path: '/design/partner/appraiseUpload',
    first:'/design',
    second:'/design/partner/progress/appraise',
  },
  {
    path: '/design/partner/appraiseReview',
    first:'/design',
    second:'/design/partner/progress/appraise',
  },
  {
    path: '/design/partner/finished',
    first:'/design',
    second:'/design/partner/finish',
  },
// 
  {
    path: '/design/dept',
    first:'/design',
    second:'/design/dept/all',
  },
  {
    path: '/design/dept/all',
    first:'/design',
    second:'/design/dept/all',
  },
  {
    path: '/design/dept/detail',
    first:'/design',
    second:'/design/dept/all',
  },
  {
    path: '/design/dept/progress',
    first:'/design',
    second:'/design/dept/progress/approval',
  },
  {
    path: '/design/dept/progress/approval',
    first:'/design',
    second:'/design/dept/progress/approval',
  },
  {
    path: '/design/dept/progress/drawing',
    first:'/design',
    second:'/design/dept/progress/drawing',
  },
  {
    path: '/design/dept/progress/plan',
    first:'/design',
    second:'/design/dept/progress/plan',
  },
  {
    path: '/design/dept/progress/fee',
    first:'/design',
    second:'/design/dept/progress/fee',
  },
  {
    path: '/design/dept/progress/result',
    first:'/design',
    second:'/design/dept/progress/result',
  },
  {
    path: '/design/dept/progress/appraise',
    first:'/design',
    second:'/design/dept/progress/appraise',
  },
  {
    path: '/design/dept/finish',
    first:'/design',
    second:'/design/dept/finish',
  },
  {
    path: '/design/dept/fail',
    first:'/design',
    second:'/design/dept/fail',
  },
  {
    path: '/design/dept/failDetail',
    first:'/design',
    second:'/design/dept/fail',
  },
  {
    path: '/design/dept/approvalUpload',
    first:'/design',
    second:'/design/dept/progress/approval',
  },
  {
    path: '/design/dept/approvalPending',
    first:'/design',
    second:'/design/dept/progress/approval',
  },
  {
    path: '/design/dept/drawingUpload',
    first:'/design',
    second:'/design/dept/progress/drawing',
  },
  {
    path: '/design/dept/drawingReview',
    first:'/design',
    second:'/design/dept/progress/drawing',
  },
  {
    path: '/design/dept/planUpload',
    first:'/design',
    second:'/design/dept/progress/plan',
  },
  {
    path: '/design/dept/planReview',
    first:'/design',
    second:'/design/dept/progress/plan',
  },
  {
    path: '/design/dept/planSuggest',
    first:'/design',
    second:'/design/dept/progress/plan',
  },
  {
    path: '/design/dept/planUpdate',
    first:'/design',
    second:'/design/dept/progress/plan',
  },
  {
    path: '/design/dept/planFee',
    first:'/design',
    second:'/design/dept/progress/plan',
  },
  {
    path: '/design/dept/resultUpload',
    first:'/design',
    second:'/design/dept/progress/result',
  },
  {
    path: '/design/dept/resultReview',
    first:'/design',
    second:'/design/dept/progress/result',
  },
  {
    path: '/design/dept/resultSuggest',
    first:'/design',
    second:'/design/dept/progress/result',
  },
  {
    path: '/design/dept/resultUpdate',
    first:'/design',
    second:'/design/dept/progress/result',
  },
  {
    path: '/design/dept/appraiseUpload',
    first:'/design',
    second:'/design/dept/progress/appraise',
  },
  {
    path: '/design/dept/appraiseReview',
    first:'/design',
    second:'/design/dept/progress/appraise',
  },
  {
    path: '/design/dept/finished',
    first:'/design',
    second:'/design/dept/finish',
  },


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
    if(firstUrl =='/Supplier'){
      return router.options.routes[3].children
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
