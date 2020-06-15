import Container from '@/container/Container'
import {methodRouteMenu} from '@/utils/routeToMenu'
/**
 * 采购管理相关路由
 */
const purchaseRouter = {
  path: '/purchase',
  component: Container,
  //redirect: '/purchase/manage/purchaseList',
  name: '采购供应',
  meta: {title: '采购供应',roles: ['/purchase']},
  redirect: to => {
    // 方法接收 目标路由 作为参数
    // return 重定向的 字符串路径/路径对象
    let element = methodRouteMenu.getRouteMenu(to.path)
    let _second = methodRouteMenu.getSecond(element)
    if(!element.second){
      return _second
    }
  },
  children: [
    {
      path: 'partner',
      name: '合伙人项目e',
      hidden: false,
      redirect: '/purchase/partner/all',
      component: () => import('@/views/purchase/partner'),
      meta: {title: '合伙人项目e',icon: 'fa fa-cog fa-lg',roles: ['/purchase/partner']},
      children: [
        {
          path: 'all',
          name: '所有项目e',
          component: () => import('@/views/purchase/partner/all'),
          meta: { title: '所有项目', icon: 'form', roles: ['/purchase/partner'] }          
        },
        {
          path: 'detail',
          name: '项目详情e',
          hidden: true,
          component: () => import('@/views/purchase/partner/detail'),
          meta: { title: '详情', icon: 'form', roles: ['/purchase/partner'] }          
        },
        {
          path: 'progress',
          name: '进行中项目e',
          component: () => import('@/views/purchase/partner/progress'),
          meta: { title: '进行中项目', icon: 'form', roles: ['/purchase/partner'] },
          children: [
            {
              path: 'approval',
              name: '立项阶段e',
              component: () => import('@/views/purchase/partner/progress/approval'),
              meta: { title: '立项阶段', icon: 'form', roles: ['/purchase/partner'] }          
            },
            {
              path: 'menu',
              name: '上传清单阶段e',
              component: () => import('@/views/purchase/partner/progress/menu'),
              meta: { title: '上传清单阶段', icon: 'form', roles: ['/purchase/partner'] }          
            },
            {
              path: 'plan',
              name: '方案确认阶段e',
              component: () => import('@/views/purchase/partner/progress/plan'),
              meta: { title: '方案确认阶段', icon: 'form', roles: ['/purchase/partner'] }          
            },
            {
              path: 'month',
              name: '按月采购阶段e',
              component: () => import('@/views/purchase/partner/progress/month'),
              meta: { title: '按月采购阶段', icon: 'form', roles: ['/purchase/partner'] }          
            },
            {
              path: 'result',
              name: '成果确认阶段e',
              component: () => import('@/views/purchase/partner/progress/result'),
              meta: { title: '成果确认阶段', icon: 'form', roles: ['/purchase/partner'] }          
            },
            {
              path: 'appraise',
              name: '服务评价阶段e',
              component: () => import('@/views/purchase/partner/progress/appraise'),
              meta: { title: '服务评价阶段', icon: 'form', roles: ['/purchase/partner'] }          
            }
          ]         
        },
        {
          path: 'finish',
          name: '已完成项目e',
          component: () => import('@/views/purchase/partner/finish'),
          meta: { title: '已完成项目', icon: 'form', roles: ['/purchase/partner'] }         
        },
        {
          path: 'fail',
          name: '中断项目e',
          component: () => import('@/views/purchase/partner/fail'),
          meta: { title: '中断项目', icon: 'form', roles: ['/purchase/partner'] }         
        },
        {
          path: 'failDetail',
          name: '中断项目详情e',
          hidden: true,
          component: () => import('@/views/purchase/partner/status/failDetail'),
          meta: { title: '中断项目详情', icon: 'form', roles: ['/purchase/partner'] }         
        },
        {
          path: 'approvalUpload',
          name: '项目立项e',
          hidden: true,
          component: () => import('@/views/purchase/partner/status/approvalUpload'),
          meta: { title: '项目立项', icon: 'form', roles: ['/purchase/partner'] }         
        },
        {
          path: 'approvalPending',
          name: '待立项审核e',
          hidden: true,
          component: () => import('@/views/purchase/partner/status/approvalPending'),
          meta: { title: '待立项审核', icon: 'form', roles: ['/purchase/partner'] }         
        },
        {
          path: 'menuUpload',
          name: '立项通过，待上传清单e',
          hidden: true,
          component: () => import('@/views/purchase/partner/status/menuUpload'),
          meta: { title: '立项通过，待上传清单', icon: 'form', roles: ['/purchase/partner'] }         
        },
        {
          path: 'menuReview',
          name: '清单已上传，待确认e',
          hidden: true,
          component: () => import('@/views/purchase/partner/status/menuReview'),
          meta: { title: '清单已上传，待确认', icon: 'form', roles: ['/purchase/partner'] }         
        },
        {
          path: 'planUpload',
          name: '清单已确认，方案编制中e',
          hidden: true,
          component: () => import('@/views/purchase/partner/status/planUpload'),
          meta: { title: '清单已确认，方案编制中', icon: 'form', roles: ['/purchase/partner'] }         
        },
        {
          path: 'planSuggest',
          name: '方案修改意见已提交，待修改e',
          hidden: true,
          component: () => import('@/views/purchase/partner/status/planSuggest'),
          meta: { title: '方案修改意见已提交，待修改中', icon: 'form', roles: ['/purchase/partner'] }         
        },
        {
          path: 'planReview',
          name: '方案已提交，请确认e',
          hidden: true,
          component: () => import('@/views/purchase/partner/status/planReview'),
          meta: { title: '方案已提交，请确认', icon: 'form', roles: ['/purchase/partner'] }         
        },
        {
          path: 'planUpdate',
          name: '方案已修改，请确认e',
          hidden: true,
          component: () => import('@/views/purchase/partner/status/planUpdate'),
          meta: { title: '方案已修改，请确认', icon: 'form', roles: ['/purchase/partner'] }         
        },
        {
          path: 'planFee',
          name: '方案已确认，请缴费e',
          hidden: true,
          component: () => import('@/views/purchase/partner/status/planFee'),
          meta: { title: '方案已确认，请缴费', icon: 'form', roles: ['/purchase/partner'] }         
        },
        {
          path: 'monthUpload',
          name: '月采购计划待提交e',
          hidden: true,
          component: () => import('@/views/purchase/partner/status/monthUpload'),
          meta: { title: '月采购计划待提交', icon: 'form', roles: ['/purchase/partner'] }         
        },
        {
          path: 'monthSuggest',
          name: '修改意见已提交，待修改e',
          hidden: true,
          component: () => import('@/views/purchase/partner/status/monthSuggest'),
          meta: { title: '修改意见已提交，待修改', icon: 'form', roles: ['/purchase/partner'] }         
        },
        {
          path: 'monthReview',
          name: '月采购计划已提交e',
          hidden: true,
          component: () => import('@/views/purchase/partner/status/monthReview'),
          meta: { title: '月采购计划已提交', icon: 'form', roles: ['/purchase/partner'] }         
        },
        {
          path: 'monthUpdate',
          name: '月采购计划已修改，请审核e',
          hidden: true,
          component: () => import('@/views/purchase/partner/status/monthUpdate'),
          meta: { title: '月采购计划已修改，请审核', icon: 'form', roles: ['/purchase/partner'] }         
        },
        {
          path: 'monthFee',
          name: '月采购计划已审核，请缴费e',
          hidden: true,
          component: () => import('@/views/purchase/partner/status/monthFee'),
          meta: { title: '月采购计划已审核，请缴费', icon: 'form', roles: ['/purchase/partner'] }         
        },
        {
          path: 'resultUpload',
          name: '成果待提交e',
          hidden: true,
          component: () => import('@/views/purchase/partner/status/resultUpload'),
          meta: { title: '成果待提交', icon: 'form', roles: ['/purchase/partner'] }         
        },
        {
          path: 'resultSuggest',
          name: '成果修改意见已提交，待修改e',
          hidden: true,
          component: () => import('@/views/purchase/partner/status/resultSuggest'),
          meta: { title: '成果修改意见已提交，待修改', icon: 'form', roles: ['/purchase/partner'] }         
        },
        {
          path: 'resultReview',
          name: '成果已提交，请确认e',
          hidden: true,
          component: () => import('@/views/purchase/partner/status/resultReview'),
          meta: { title: '成果已提交，请确认', icon: 'form', roles: ['/purchase/partner'] }         
        },
        {
          path: 'resultUpdate',
          name: '成果已修改，请确认e',
          hidden: true,
          component: () => import('@/views/purchase/partner/status/resultUpdate'),
          meta: { title: '成果已修改，请确认', icon: 'form', roles: ['/purchase/partner'] }         
        },
        {
          path: 'appraiseUpload',
          name: '成果已确认，请评价e',
          hidden: true,
          component: () => import('@/views/purchase/partner/status/appraiseUpload'),
          meta: { title: '成果已确认，请评价', icon: 'form', roles: ['/purchase/partner'] }         
        },
        {
          path: 'appraiseReview',
          name: '评价待确认e',
          hidden: true,
          component: () => import('@/views/purchase/partner/status/appraiseReview'),
          meta: { title: '评价待确认', icon: 'form', roles: ['/purchase/partner'] }         
        },
        {
          path: 'finishReview',
          name: '完成e',
          hidden: true,
          component: () => import('@/views/purchase/partner/status/finish'),
          meta: { title: '完成', icon: 'form', roles: ['/purchase/partner'] }         
        }
      ]
    },
    {
      path: 'dept',
      name: '采购部f',
      hidden: false,
      redirect: '/purchase/dept/all',
      component: () => import('@/views/purchase/dept'),
      meta: {title: '采购部',icon: 'fa fa-cog fa-lg',roles: ['/purchase/dept']},
      children: [
        {
          path: 'all',
          name: '所有项目f',
          component: () => import('@/views/purchase/dept/all'),
          meta: { title: '所有项目', icon: 'form', roles: ['/purchase/dept'] }         
        },
        {
          path: 'detail',
          name: '项目详情f',
          hidden: true,
          component: () => import('@/views/purchase/dept/detail'),
          meta: { title: '详情', icon: 'form', roles: ['/purchase/dept'] }          
        },
        {
          path: 'progress',
          name: '进行中项目f',
          component: () => import('@/views/purchase/dept/progress'),
          meta: { title: '进行中项目', icon: 'form', roles: ['/purchase/dept'] },
          children: [
            {
              path: 'approval',
              name: '立项阶段f',
              component: () => import('@/views/purchase/dept/progress/approval'),
              meta: { title: '立项阶段', icon: 'form', roles: ['/purchase/dept'] }          
            },
            {
              path: 'menu',
              name: '上传清单阶段f',
              component: () => import('@/views/purchase/dept/progress/menu'),
              meta: { title: '上传清单阶段', icon: 'form', roles: ['/purchase/dept'] }          
            },
            {
              path: 'plan',
              name: '方案确认阶段f',
              component: () => import('@/views/purchase/dept/progress/plan'),
              meta: { title: '方案确认阶段', icon: 'form', roles: ['/purchase/dept'] }          
            },
            {
              path: 'month',
              name: '按月采购阶段f',
              component: () => import('@/views/purchase/dept/progress/month'),
              meta: { title: '按月采购阶段', icon: 'form', roles: ['/purchase/dept'] }          
            },
            {
              path: 'result',
              name: '成果确认阶段f',
              component: () => import('@/views/purchase/dept/progress/result'),
              meta: { title: '成果确认阶段', icon: 'form', roles: ['/purchase/dept'] }          
            },
            {
              path: 'appraise',
              name: '服务评价阶段f',
              component: () => import('@/views/purchase/dept/progress/appraise'),
              meta: { title: '服务评价阶段', icon: 'form', roles: ['/purchase/dept'] }          
            }
          ]         
        },
        {
          path: 'finish',
          name: '已完成项目f',
          component: () => import('@/views/purchase/dept/finish'),
          meta: { title: '已完成项目', icon: 'form', roles: ['/purchase/dept'] }         
        },
        {
          path: 'fail',
          name: '中断项目f',
          component: () => import('@/views/purchase/dept/fail'),
          meta: { title: '中断项目', icon: 'form', roles: ['/purchase/dept'] }         
        },
        {
          path: 'failDetail',
          name: '中断项目详情f',
          hidden: true,
          component: () => import('@/views/purchase/dept/status/failDetail'),
          meta: { title: '中断项目详情', icon: 'form', roles: ['/purchase/dept'] }         
        },
        {
          path: 'approvalPending',
          name: '待立项审核f',
          hidden: true,
          component: () => import('@/views/purchase/dept/status/approvalPending'),
          meta: { title: '待立项审核', icon: 'form', roles: ['/purchase/dept'] }         
        },
        {
          path: 'menuUpload',
          name: '立项通过，待上传清单f',
          hidden: true,
          component: () => import('@/views/purchase/dept/status/menuUpload'),
          meta: { title: '立项通过，待上传清单', icon: 'form', roles: ['/purchase/dept'] }         
        },
        {
          path: 'menuReview',
          name: '清单已上传，待确认f',
          hidden: true,
          component: () => import('@/views/purchase/dept/status/menuReview'),
          meta: { title: '清单已上传，待确认', icon: 'form', roles: ['/purchase/dept'] }         
        },
        {
          path: 'planUpload',
          name: '清单已确认，方案编制中f',
          hidden: true,
          component: () => import('@/views/purchase/dept/status/planUpload'),
          meta: { title: '清单已确认，方案编制中', icon: 'form', roles: ['/purchase/dept'] }         
        },
        {
          path: 'planSuggest',
          name: '方案修改意见已提交，待修改f',
          hidden: true,
          component: () => import('@/views/purchase/dept/status/planSuggest'),
          meta: { title: '方案修改意见已提交，待修改中', icon: 'form', roles: ['/purchase/dept'] }         
        },
        {
          path: 'planReview',
          name: '方案已提交，请确认f',
          hidden: true,
          component: () => import('@/views/purchase/dept/status/planReview'),
          meta: { title: '方案已提交，请确认', icon: 'form', roles: ['/purchase/dept'] }         
        },
        {
          path: 'planUpdate',
          name: '方案已修改，请确认f',
          hidden: true,
          component: () => import('@/views/purchase/dept/status/planUpdate'),
          meta: { title: '方案已修改，请确认', icon: 'form', roles: ['/purchase/dept'] }         
        },
        {
          path: 'planFee',
          name: '方案已确认，请缴费f',
          hidden: true,
          component: () => import('@/views/purchase/dept/status/planFee'),
          meta: { title: '方案已确认，请缴费', icon: 'form', roles: ['/purchase/dept'] }         
        },
        {
          path: 'monthUpload',
          name: '月采购计划待提交f',
          hidden: true,
          component: () => import('@/views/purchase/dept/status/monthUpload'),
          meta: { title: '月采购计划待提交', icon: 'form', roles: ['/purchase/dept'] }         
        },
        {
          path: 'monthSuggest',
          name: '修改意见已提交，待修改f',
          hidden: true,
          component: () => import('@/views/purchase/dept/status/monthSuggest'),
          meta: { title: '修改意见已提交，待修改', icon: 'form', roles: ['/purchase/dept'] }         
        },
        {
          path: 'monthReview',
          name: '月采购计划已提交f',
          hidden: true,
          component: () => import('@/views/purchase/dept/status/monthReview'),
          meta: { title: '月采购计划已提交', icon: 'form', roles: ['/purchase/dept'] }         
        },
        {
          path: 'monthUpdate',
          name: '月采购计划已修改，请审核f',
          hidden: true,
          component: () => import('@/views/purchase/dept/status/monthUpdate'),
          meta: { title: '月采购计划已修改，请审核', icon: 'form', roles: ['/purchase/dept'] }         
        },
        {
          path: 'monthFee',
          name: '月采购计划已审核，请缴费f',
          hidden: true,
          component: () => import('@/views/purchase/dept/status/monthFee'),
          meta: { title: '月采购计划已审核，请缴费', icon: 'form', roles: ['/purchase/dept'] }         
        },
        {
          path: 'resultUpload',
          name: '成果待提交f',
          hidden: true,
          component: () => import('@/views/purchase/dept/status/resultUpload'),
          meta: { title: '成果待提交', icon: 'form', roles: ['/purchase/dept'] }         
        },
        {
          path: 'resultSuggest',
          name: '成果修改意见已提交，待修改f',
          hidden: true,
          component: () => import('@/views/purchase/dept/status/resultSuggest'),
          meta: { title: '成果修改意见已提交，待修改', icon: 'form', roles: ['/purchase/dept'] }         
        },
        {
          path: 'resultReview',
          name: '成果已提交，请确认f',
          hidden: true,
          component: () => import('@/views/purchase/dept/status/resultReview'),
          meta: { title: '成果已提交，请确认', icon: 'form', roles: ['/purchase/dept'] }         
        },
        {
          path: 'resultUpdate',
          name: '成果已修改，请确认f',
          hidden: true,
          component: () => import('@/views/purchase/dept/status/resultUpdate'),
          meta: { title: '成果已修改，请确认', icon: 'form', roles: ['/purchase/dept'] }         
        },
        {
          path: 'appraiseUpload',
          name: '成果已确认，请评价f',
          hidden: true,
          component: () => import('@/views/purchase/dept/status/appraiseUpload'),
          meta: { title: '成果已确认，请评价', icon: 'form', roles: ['/purchase/dept'] }         
        },
        {
          path: 'appraiseReview',
          name: '评价待确认f',
          hidden: true,
          component: () => import('@/views/purchase/dept/status/appraiseReview'),
          meta: { title: '评价待确认', icon: 'form', roles: ['/purchase/dept'] }         
        },
        {
          path: 'finishReview',
          name: '完成f',
          hidden: true,
          component: () => import('@/views/purchase/dept/status/finish'),
          meta: { title: '完成', icon: 'form', roles: ['/purchase/dept'] }         
        }

      ]
    }
  ]
}
export default purchaseRouter
