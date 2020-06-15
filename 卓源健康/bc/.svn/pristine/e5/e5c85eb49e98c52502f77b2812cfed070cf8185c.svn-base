import Container from '@/container/Container'
import {methodRouteMenu} from '@/utils/routeToMenu'
/**
 * 劳务施工相关路由
 */
const constructionRouter = {
  path: '/construction',
  component: Container,
  name: '劳务施工',
  meta: {title: '劳务施工',roles: ['/construction']},
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
      name: '合伙人项目a',
      hidden: false,
      redirect: '/construction/partner/all',
      component: () => import('@/views/construction/partner'),
      meta: {title: '合伙人项目a',icon: 'fa fa-cog fa-lg',roles: ['/construction/partner']},
      children: [
        {
          path: 'all',
          name: '所有项目a',
          component: () => import('@/views/construction/partner/all'),
          meta: { title: '所有项目', icon: 'form', roles: ['/construction/partner'] }          
        },
        {
          path: 'detail',
          name: '项目详情a',
          hidden: true,
          component: () => import('@/views/construction/partner/detail'),
          meta: { title: '详情', icon: 'form', roles: ['/construction/partner'] }          
        },
        {
          path: 'progress',
          name: '进行中项目a',
          component: () => import('@/views/construction/partner/progress'),
          meta: { title: '进行中项目', icon: 'form', roles: ['/construction/partner'] },
          children: [
            {
              path: 'approval',
              name: '立项阶段a',
              component: () => import('@/views/construction/partner/progress/approval'),
              meta: { title: '立项阶段', icon: 'form', roles: ['/construction/partner'] }          
            },
            {
              path: 'menu',
              name: '上传清单阶段a',
              component: () => import('@/views/construction/partner/progress/menu'),
              meta: { title: '上传清单阶段', icon: 'form', roles: ['/construction/partner'] }          
            },
            {
              path: 'plan',
              name: '方案确认阶段a',
              component: () => import('@/views/construction/partner/progress/plan'),
              meta: { title: '方案确认阶段', icon: 'form', roles: ['/construction/partner'] }          
            },
            {
              path: 'month',
              name: '按月施工阶段a',
              component: () => import('@/views/construction/partner/progress/month'),
              meta: { title: '按月施工阶段', icon: 'form', roles: ['/construction/partner'] }          
            },
            {
              path: 'result',
              name: '成果确认阶段a',
              component: () => import('@/views/construction/partner/progress/result'),
              meta: { title: '成果确认阶段', icon: 'form', roles: ['/construction/partner'] }          
            },
            {
              path: 'appraise',
              name: '服务评价阶段a',
              component: () => import('@/views/construction/partner/progress/appraise'),
              meta: { title: '服务评价阶段', icon: 'form', roles: ['/construction/partner'] }          
            }
          ]         
        },
        {
          path: 'finish',
          name: '已完成项目a',
          component: () => import('@/views/construction/partner/finish'),
          meta: { title: '已完成项目', icon: 'form', roles: ['/construction/partner'] }         
        },
        {
          path: 'fail',
          name: '中断项目a',
          component: () => import('@/views/construction/partner/fail'),
          meta: { title: '中断项目', icon: 'form', roles: ['/construction/partner'] }         
        },
        {
          path: 'failDetail',
          name: '中断项目详情a',
          hidden: true,
          component: () => import('@/views/construction/partner/status/failDetail'),
          meta: { title: '中断项目详情', icon: 'form', roles: ['/construction/partner'] }         
        },

        {
          path: 'approvalUpload',
          name: '项目立项a',
          hidden: true,
          component: () => import('@/views/construction/partner/status/approvalUpload'),
          meta: { title: '项目立项', icon: 'form', roles: ['/construction/partner'] }         
        },
        {
          path: 'approvalPending',
          name: '待立项审核a',
          hidden: true,
          component: () => import('@/views/construction/partner/status/approvalPending'),
          meta: { title: '待立项审核', icon: 'form', roles: ['/construction/partner'] }         
        },
        {
          path: 'menuUpload',
          name: '立项通过，待上传清单a',
          hidden: true,
          component: () => import('@/views/construction/partner/status/menuUpload'),
          meta: { title: '立项通过，待上传清单', icon: 'form', roles: ['/construction/partner'] }         
        },
        {
          path: 'menuReview',
          name: '清单已上传，待确认a',
          hidden: true,
          component: () => import('@/views/construction/partner/status/menuReview'),
          meta: { title: '清单已上传，待确认', icon: 'form', roles: ['/construction/partner'] }         
        },
        {//提示页面，甲方清单已确认之后，提示信息为：清单已确认，方案编制中
          path: 'planUpload',
          name: '清单已确认，方案编制中a',
          hidden: true,
          component: () => import('@/views/construction/partner/status/planUpload'),
          meta: { title: '清单已确认，方案编制中', icon: 'form', roles: ['/construction/partner'] }         
        },
        {//提示页面
          path: 'planSuggest',
          name: '方案修改意见已提交，待修改a',
          hidden: true,
          component: () => import('@/views/construction/partner/status/planSuggest'),
          meta: { title: '方案修改意见已提交，待修改中', icon: 'form', roles: ['/construction/partner'] }         
        },
        {
          path: 'planReview',
          name: '方案已提交，请确认a',
          hidden: true,
          component: () => import('@/views/construction/partner/status/planReview'),
          meta: { title: '方案已提交，请确认', icon: 'form', roles: ['/construction/partner'] }         
        },
        {
          path: 'planUpdate',
          name: '方案已修改，请确认a',
          hidden: true,
          component: () => import('@/views/construction/partner/status/planUpdate'),
          meta: { title: '方案已修改，请确认', icon: 'form', roles: ['/construction/partner'] }         
        },
        {
          path: 'planFee',
          name: '方案已确认，请缴费a',
          hidden: true,
          component: () => import('@/views/construction/partner/status/planFee'),
          meta: { title: '方案已确认，请缴费', icon: 'form', roles: ['/construction/partner'] }         
        },
        {
          path: 'monthUpload',
          name: '月施工计划待提交a',
          hidden: true,
          component: () => import('@/views/construction/partner/status/monthUpload'),
          meta: { title: '月施工计划待提交', icon: 'form', roles: ['/construction/partner'] }         
        },
        {
          path: 'monthSuggest',
          name: '修改意见已提交，待修改a',
          hidden: true,
          component: () => import('@/views/construction/partner/status/monthSuggest'),
          meta: { title: '修改意见已提交，待修改', icon: 'form', roles: ['/construction/partner'] }         
        },
        {
          path: 'monthReview',
          name: '月施工计划已提交a',
          hidden: true,
          component: () => import('@/views/construction/partner/status/monthReview'),
          meta: { title: '月施工计划已提交', icon: 'form', roles: ['/construction/partner'] }         
        },
        {
          path: 'monthUpdate',
          name: '月施工计划已修改，请审核a',
          hidden: true,
          component: () => import('@/views/construction/partner/status/monthUpdate'),
          meta: { title: '月施工计划已修改，请审核', icon: 'form', roles: ['/construction/partner'] }         
        },
        {
          path: 'monthFee',
          name: '月施工计划已审核，请缴费a',
          hidden: true,
          component: () => import('@/views/construction/partner/status/monthFee'),
          meta: { title: '月施工计划已审核，请缴费', icon: 'form', roles: ['/construction/partner'] }         
        },
        {
          path: 'resultUpload',
          name: '成果待提交a',
          hidden: true,
          component: () => import('@/views/construction/partner/status/resultUpload'),
          meta: { title: '成果待提交', icon: 'form', roles: ['/construction/partner'] }         
        },
        {
          path: 'resultSuggest',
          name: '成果修改意见已提交，待修改a',
          hidden: true,
          component: () => import('@/views/construction/partner/status/resultSuggest'),
          meta: { title: '成果修改意见已提交，待修改', icon: 'form', roles: ['/construction/partner'] }         
        },
        {
          path: 'resultReview',
          name: '成果已提交，请确认a',
          hidden: true,
          component: () => import('@/views/construction/partner/status/resultReview'),
          meta: { title: '成果已提交，请确认', icon: 'form', roles: ['/construction/partner'] }         
        },
        {
          path: 'resultUpdate',
          name: '成果已修改，请确认a',
          hidden: true,
          component: () => import('@/views/construction/partner/status/resultUpdate'),
          meta: { title: '成果已修改，请确认', icon: 'form', roles: ['/construction/partner'] }         
        },
        {
          path: 'appraiseUpload',
          name: '成果已确认，请评价a',
          hidden: true,
          component: () => import('@/views/construction/partner/status/appraiseUpload'),
          meta: { title: '成果已确认，请评价', icon: 'form', roles: ['/construction/partner'] }         
        },
        {
          path: 'appraiseReview',
          name: '评价待确认a',
          hidden: true,
          component: () => import('@/views/construction/partner/status/appraiseReview'),
          meta: { title: '评价待确认', icon: 'form', roles: ['/construction/partner'] }         
        },
        {
          path: 'finishReview',
          name: '完成a',
          hidden: true,
          component: () => import('@/views/construction/partner/status/finish'),
          meta: { title: '完成', icon: 'form', roles: ['/construction/partner'] }         
        }
      ]
    },
    {
      path: 'dept',
      name: '工程部b',
      hidden: false,
      redirect: '/construction/dept/all',
      component: () => import('@/views/construction/dept'),
      meta: {title: '施工部',icon: 'fa fa-cog fa-lg',roles: ['/construction/dept']},
      children: [
        {
          path: 'all',
          name: '所有项目b',
          component: () => import('@/views/construction/dept/all'),
          meta: { title: '所有项目', icon: 'form', roles: ['/construction/dept'] }         
        },
        {
          path: 'detail',
          name: '项目详情b',
          hidden: true,
          component: () => import('@/views/construction/dept/detail'),
          meta: { title: '详情', icon: 'form', roles: ['/construction/dept'] }          
        },
        {
          path: 'progress',
          name: '进行中项目b',
          component: () => import('@/views/construction/dept/progress'),
          meta: { title: '进行中项目', icon: 'form', roles: ['/construction/dept'] },
          children: [
            {
              path: 'approval',
              name: '立项阶段b',
              component: () => import('@/views/construction/dept/progress/approval'),
              meta: { title: '立项阶段', icon: 'form', roles: ['/construction/dept'] }          
            },
            {
              path: 'menu',
              name: '上传清单阶段b',
              component: () => import('@/views/construction/dept/progress/menu'),
              meta: { title: '上传清单阶段', icon: 'form', roles: ['/construction/dept'] }          
            },
            {
              path: 'plan',
              name: '方案确认阶段b',
              component: () => import('@/views/construction/dept/progress/plan'),
              meta: { title: '方案确认阶段', icon: 'form', roles: ['/construction/dept'] }          
            },
            {
              path: 'month',
              name: '按月施工阶段b',
              component: () => import('@/views/construction/dept/progress/month'),
              meta: { title: '按月施工阶段', icon: 'form', roles: ['/construction/dept'] }          
            },
            {
              path: 'result',
              name: '成果确认阶段b',
              component: () => import('@/views/construction/dept/progress/result'),
              meta: { title: '成果确认阶段', icon: 'form', roles: ['/construction/dept'] }          
            },
            {
              path: 'appraise',
              name: '服务评价阶段b',
              component: () => import('@/views/construction/dept/progress/appraise'),
              meta: { title: '服务评价阶段', icon: 'form', roles: ['/construction/dept'] }          
            }
          ]         
        },
        {
          path: 'finish',
          name: '已完成项目b',
          component: () => import('@/views/construction/dept/finish'),
          meta: { title: '已完成项目', icon: 'form', roles: ['/construction/dept'] }         
        },
        {
          path: 'fail',
          name: '中断项目b',
          component: () => import('@/views/construction/dept/fail'),
          meta: { title: '中断项目', icon: 'form', roles: ['/construction/dept'] }         
        },
        {//提示
          path: 'failDetail',
          name: '中断项目详情b',
          hidden: true,
          component: () => import('@/views/construction/dept/status/failDetail'),
          meta: { title: '中断项目详情', icon: 'form', roles: ['/construction/dept'] }         
        },
        {
          path: 'approvalPending',
          name: '待立项审核b',
          hidden: true,
          component: () => import('@/views/construction/dept/status/approvalPending'),
          meta: { title: '待立项审核', icon: 'form', roles: ['/construction/dept'] }         
        },
        {//提示
          path: 'menuUpload',
          name: '立项通过，待上传清单b',
          hidden: true,
          component: () => import('@/views/construction/dept/status/menuUpload'),
          meta: { title: '立项通过，待上传清单', icon: 'form', roles: ['/construction/dept'] }         
        },
        {
          path: 'menuReview',
          name: '清单已上传，待确认b',
          hidden: true,
          component: () => import('@/views/construction/dept/status/menuReview'),
          meta: { title: '清单已上传，待确认', icon: 'form', roles: ['/construction/dept'] }         
        },
        {//1
          path: 'planUpload',
          name: '清单已确认，方案编制中b',
          hidden: true,
          component: () => import('@/views/construction/dept/status/planUpload'),
          meta: { title: '清单已确认，方案编制中', icon: 'form', roles: ['/construction/dept'] }         
        },
        {//2
          path: 'planSuggest',
          name: '方案修改意见已提交，待修改b',
          hidden: true,
          component: () => import('@/views/construction/dept/status/planSuggest'),
          meta: { title: '方案修改意见已提交，待修改中', icon: 'form', roles: ['/construction/dept'] }         
        },
        {//提示
          path: 'planReview',
          name: '方案已提交，请确认b',
          hidden: true,
          component: () => import('@/views/construction/dept/status/planReview'),
          meta: { title: '方案已提交，请确认', icon: 'form', roles: ['/construction/dept'] }         
        },
        {//提示
          path: 'planUpdate',
          name: '方案已修改，请确认b',
          hidden: true,
          component: () => import('@/views/construction/dept/status/planUpdate'),
          meta: { title: '方案已修改，请确认', icon: 'form', roles: ['/construction/dept'] }         
        },
        {//提示
          path: 'planFee',
          name: '方案已确认，请缴费b',
          hidden: true,
          component: () => import('@/views/construction/dept/status/planFee'),
          meta: { title: '方案已确认，请缴费', icon: 'form', roles: ['/construction/dept'] }         
        },
        {//1
          path: 'monthUpload',
          name: '月施工计划待提交b',
          hidden: true,
          component: () => import('@/views/construction/dept/status/monthUpload'),
          meta: { title: '月施工计划待提交', icon: 'form', roles: ['/construction/dept'] }         
        },
        {//2
          path: 'monthSuggest',
          name: '修改意见已提交，待修改b',
          hidden: true,
          component: () => import('@/views/construction/dept/status/monthSuggest'),
          meta: { title: '修改意见已提交，待修改', icon: 'form', roles: ['/construction/dept'] }         
        },
        {//提示
          path: 'monthReview',
          name: '月施工计划已提交b',
          hidden: true,
          component: () => import('@/views/construction/dept/status/monthReview'),
          meta: { title: '月施工计划已提交', icon: 'form', roles: ['/construction/dept'] }         
        },
        {//提示
          path: 'monthUpdate',
          name: '月施工计划已修改，请审核b',
          hidden: true,
          component: () => import('@/views/construction/dept/status/monthUpdate'),
          meta: { title: '月施工计划已修改，请审核', icon: 'form', roles: ['/construction/dept'] }         
        },
        {//提示
          path: 'monthFee',
          name: '月施工计划已审核，请缴费b',
          hidden: true,
          component: () => import('@/views/construction/dept/status/monthFee'),
          meta: { title: '月施工计划已审核，请缴费', icon: 'form', roles: ['/construction/dept'] }         
        },
        {//1
          path: 'resultUpload',
          name: '成果待提交b',
          hidden: true,
          component: () => import('@/views/construction/dept/status/resultUpload'),
          meta: { title: '成果待提交', icon: 'form', roles: ['/construction/dept'] }         
        },
        {//2
          path: 'resultSuggest',
          name: '成果修改意见已提交，待修改b',
          hidden: true,
          component: () => import('@/views/construction/dept/status/resultSuggest'),
          meta: { title: '成果修改意见已提交，待修改', icon: 'form', roles: ['/construction/dept'] }         
        },
        {//提示
          path: 'resultReview',
          name: '成果已提交，请确认b',
          hidden: true,
          component: () => import('@/views/construction/dept/status/resultReview'),
          meta: { title: '成果已提交，请确认', icon: 'form', roles: ['/construction/dept'] }         
        },
        {//提示
          path: 'resultUpdate',
          name: '成果已修改，请确认b',
          hidden: true,
          component: () => import('@/views/construction/dept/status/resultUpdate'),
          meta: { title: '成果已修改，请确认', icon: 'form', roles: ['/construction/dept'] }         
        },
        {//提示
          path: 'appraiseUpload',
          name: '成果已确认，请评价b',
          hidden: true,
          component: () => import('@/views/construction/dept/status/appraiseUpload'),
          meta: { title: '成果已确认，请评价', icon: 'form', roles: ['/construction/dept'] }         
        },
        {
          path: 'appraiseReview',
          name: '评价待确认b',
          hidden: true,
          component: () => import('@/views/construction/dept/status/appraiseReview'),
          meta: { title: '评价待确认', icon: 'form', roles: ['/construction/dept'] }         
        },
        {//提示
          path: 'finishReview',
          name: '完成b',
          hidden: true,
          component: () => import('@/views/construction/dept/status/finish'),
          meta: { title: '完成', icon: 'form', roles: ['/construction/dept'] }         
        }

      ]
    }
  ]
}
export default constructionRouter
