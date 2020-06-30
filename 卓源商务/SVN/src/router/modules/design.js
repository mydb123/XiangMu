import Container from '@/container/Container'
import {methodRouteMenu} from '@/utils/routeToMenu'
/**
 * 系统管理相关路由
 */
const designRouter = {
  path: '/design',
  component: Container,
  name: '咨询设计',
  meta: {
    title: '咨询设计',
    roles: ['/design']
  },
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
      name: '合伙人项目c',
      hidden: false, 
      redirect: '/design/partner/all',
      component: () => import('@/views/design/partner'),
      meta: { 
        title: '合伙人项目c',
        icon: 'fa fa-cog fa-lg',
        roles: ['/design/partner']  
      },
      children:[
        {
          path: 'all',
          name: '所有项目c',
          hidden: false, 
          component: () => import('@/views/design/partner/all'),
          meta: { 
            title: '所有项目c', 
            icon: 'fa fa-cog fa-lg',
            roles: ['/design/partner']  
          }
        } ,
        {
          path: 'detail',
          name: '项目详情c',
          hidden: true,
          component: () => import('@/views/design/partner/detail'),
          meta: {title: '详情', icon: 'form', roles:['/design/partner']}          
        },
        {
          path: 'progress',
          name: '进行中项目c',
          hidden: false, 
          // redirect: '/design/partner/progress/approval',
          component: () => import('@/views/design/partner/progress'),
          meta: { 
            title: '进行中项目c', 
            icon: 'fa fa-cog fa-lg',
            roles: ['/design/partner']  
          },
          children: [
            { path: 'approval', name: '设计立项c', 
              component: () => import('@/views/design/partner/progress/approval'), 
              meta: { title: '设计立项c', icon: 'form', roles: ['/design/partner'] } 
            },
            { path: 'drawing', name: '上传图纸c', 
              component: () => import('@/views/design/partner/progress/drawing'), 
              meta: { title: '上传图纸c', icon: 'form', roles: ['/design/partner'] } 
            },
            { path: 'plan', name: '方案确认c', 
              component: () => import('@/views/design/partner/progress/plan'), 
              meta: { title: '方案确认c', icon: 'form', roles: ['/design/partner'] } 
            },
            { path: 'fee', name: '缴纳费用c', 
              component: () => import('@/views/design/partner/progress/fee'), 
              meta: { title: '缴纳费用c', icon: 'form', roles: ['/design/partner'] } 
            },
            { path: 'result', name: '成果确认c', 
              component: () => import('@/views/design/partner/progress/result'), 
              meta: { title: '成果确认c', icon: 'form', roles: ['/design/partner'] } 
            },
            { path: 'appraise', name: '服务评价c', 
              component: () => import('@/views/design/partner/progress/appraise'), 
              meta: { title: '服务评价c', icon: 'form', roles: ['/design/partner'] } 
            }
          ]
        } ,    
        {
          path: 'finish',
          name: '已完成项目c',
          hidden: false, 
          // redirect: '/design/all',
          component: () => import('@/views/design/partner/finish'),
          meta: { 
            title: '已完成项目c', 
            icon: 'fa fa-cog fa-lg',
            roles: ['/design/partner']  
          }
        } ,    
        {
          path: 'fail',
          name: '中断项目c',
          hidden: false, 
          // redirect: '/design/all',
          component: () => import('@/views/design/partner/fail'),
          meta: { 
            title: '中断项目c', 
            icon: 'fa fa-cog fa-lg',
            roles: ['/design/partner']  
          }
        } ,
        {
          path: 'failDetail',
          name: '中断项目详情c',
          hidden: true,
          component: () => import('@/views/design/partner/status/failDetail'),
          meta: { title: '中断项目详情c', icon: 'form', roles: ['/design/partner']}         
        },
        {
          path: 'approvalUpload',
          name: '项目立项c',
          hidden: true,
          component: () => import('@/views/design/partner/status/approvalUpload'),
          meta: { title: '项目立项c', icon: 'form', roles: ['/design/partner']}         
        },
        {
          path: 'approvalPending',
          name: '待立项审核c',
          hidden: true,
          component: () => import('@/views/design/partner/status/approvalPending'),
          meta: { title: '待立项审核c', icon: 'form', roles: ['/design/partner'] }         
        },
        {
          path: 'drawingUpload',
          name: '立项通过，待上传图纸c',
          hidden: true,
          component: () => import('@/views/design/partner/status/drawingUpload'),
          meta: { title: '立项通过，待上传图纸c', icon: 'form', roles: ['/design/partner'] }         
        },
        {
          path: 'drawingReview',
          name: '图纸已上传，待确认c',
          hidden: true,
          component: () => import('@/views/design/partner/status/drawingReview'),
          meta: { title: '图纸已上传，待确认c', icon: 'form', roles: ['/design/partner'] }         
        },
        {
          path: 'planUpload',
          name: '图纸已确认，方案编制中c',
          hidden: true,
          component: () => import('@/views/design/partner/status/planUpload'),
          meta: { title: '图纸已确认，方案编制中c', icon: 'form', roles: ['/design/partner'] }         
        },
        {
          path: 'planReview',
          name: '方案已提交，请确认c',
          hidden: true,
          component: () => import('@/views/design/partner/status/planReview'),
          meta: { title: '方案已提交，请确认c', icon: 'form', roles: ['/design/partner'] }         
        },
        {
          path: 'planSuggest',
          name: '方案修改意见已提交，待修改c',
          hidden: true,
          component: () => import('@/views/design/partner/status/planSuggest'),
          meta: { title: '方案修改意见已提交，待修改c', icon: 'form', roles: ['/design/partner'] }         
        },
        {
          path: 'planUpdate',
          name: '方案已修改，请确认c',
          hidden: true,
          component: () => import('@/views/design/partner/status/planUpdate'),
          meta: { title: '方案已修改，请确认c', icon: 'form', roles: ['/design/partner'] }         
        },
        {
          path: 'planFee',
          name: '方案已确认，请缴费c',
          hidden: true,
          component: () => import('@/views/design/partner/status/planFee'),
          meta: { title: '方案已确认，请缴费c', icon: 'form', roles: ['/design/partner'] }         
        },
        {
          path: 'resultUpload',
          name: '项目设计中c',
          hidden: true,
          component: () => import('@/views/design/partner/status/resultUpload'),
          meta: { title: '项目设计中c', icon: 'form', roles: ['/design/partner'] }         
        },
        {
          path: 'resultReview',
          name: '成果已提交，请确认c',
          hidden: true,
          component: () => import('@/views/design/partner/status/resultReview'),
          meta: { title: '成果已提交，请确认c', icon: 'form', roles: ['/design/partner'] }         
        },
        {
          path: 'resultSuggest',
          name: '成果修改意见已提交，待修改c',
          hidden: true,
          component: () => import('@/views/design/partner/status/resultSuggest'),
          meta: { title: '成果修改意见已提交，待修改c', icon: 'form', roles: ['/design/partner'] }         
        },
        {
          path: 'resultUpdate',
          name: '成果已修改，请确认c',
          hidden: true,
          component: () => import('@/views/design/partner/status/resultUpdate'),
          meta: { title: '成果已修改，请确认', icon: 'form', roles: ['/design/partner'] }         
        },
        {
          path: 'appraiseUpload',
          name: '成果已确认，请评价c',
          hidden: true,
          component: () => import('@/views/design/partner/status/appraiseUpload'),
          meta: { title: '成果已确认，请评价c', icon: 'form', roles: ['/design/partner'] }         
        },
        {
          path: 'appraiseReview',
          name: '评价待确认c',
          hidden: true,
          component: () => import('@/views/design/partner/status/appraiseReview'),
          meta: { title: '评价待确认c', icon: 'form', roles: ['/design/partner'] }         
        },
        {
          path: 'finished',
          name: '完成c',
          hidden: true,
          component: () => import('@/views/design/partner/status/finish'),
          meta: { title: '完成c', icon: 'form', roles: ['/design/partner'] }         
        }
      ]
    },
    {
      path: 'dept',
      name: '设计部d',
      hidden: false, 
      redirect: '/design/dept/all',
      component: () => import('@/views/design/dept'),
      meta: { 
        title: '设计部d',
        icon: 'fa fa-cog fa-lg',
        roles: ['/design/dept']  
      },
      children:[
        {
          path: 'all',
          name: '所有项目d',
          hidden: false, 
          component: () => import('@/views/design/dept/all'),
          meta: { 
            title: '所有项目d', 
            icon: 'fa fa-cog fa-lg',
            roles: ['/design/dept']  
          }
        } ,
        {
          path: 'detail',
          name: '项目详情d',
          hidden: true,
          component: () => import('@/views/design/dept/detail'),
          meta: { title: '详情', icon: 'form', roles: ['/design/dept'] }          
        },
        {
          path: 'progress',
          name: '进行中项目d',
          hidden: false, 
          // redirect: '/design/partner/progress/approval',
          component: () => import('@/views/design/dept/progress'),
          meta: { 
            title: '进行中项目d', 
            icon: 'fa fa-cog fa-lg',
            roles: ['/design/dept']  
          },
          children: [
            { path: 'approval', name: '设计立项d', 
              component: () => import('@/views/design/dept/progress/approval'), 
              meta: { title: '立项d', icon: 'form', roles: ['/design/dept'] } 
            },
            { path: 'drawing', name: '上传图纸d', 
              component: () => import('@/views/design/dept/progress/drawing'), 
              meta: { title: '图纸确认d', icon: 'form', roles: ['/design/dept'] } 
            },
            { path: 'plan', name: '方案确认d', 
              component: () => import('@/views/design/dept/progress/plan'), 
              meta: { title: '方案确认d', icon: 'form', roles: ['/design/dept'] } 
            },
            { path: 'fee', name: '缴纳费用d', 
              component: () => import('@/views/design/dept/progress/fee'), 
              meta: { title: '缴费d', icon: 'form', roles: ['/design/dept'] } 
            },
            { path: 'result', name: '成果确认d', 
              component: () => import('@/views/design/dept/progress/result'), 
              meta: { title: '设计中项目d', icon: 'form', roles: ['/design/dept'] } 
            },
            { path: 'appraise', name: '服务评价d', 
              component: () => import('@/views/design/dept/progress/appraise'), 
              meta: { title: '待评价项目d', icon: 'form', roles: ['/design/dept'] } 
            }
          ]
        } ,    
        {
          path: 'finish',
          name: '已完成项目d',
          hidden: false, 
          // redirect: '/design/all',
          component: () => import('@/views/design/dept/finish'),
          meta: { 
            title: '已完成项目d', 
            icon: 'fa fa-cog fa-lg',
            roles: ['/design/dept']  
          }
        } ,    
        {
          path: 'fail',
          name: '中断项目d',
          hidden: false, 
          // redirect: '/design/all',
          component: () => import('@/views/design/dept/fail'),
          meta: { 
            title: '中断项目d', 
            icon: 'fa fa-cog fa-lg',
            roles: ['/design/dept']  
          }
        } ,   
        {
          path: 'failDetail',
          name: '中断项目详情d',
          hidden: true,
          component: () => import('@/views/design/dept/status/failDetail'),
          meta: { title: '中断项目详情d', icon: 'form', roles: ['/design/dept'] }         
        },
        {
          path: 'approvalPending',
          name: '待立项审核d',
          hidden: true,
          component: () => import('@/views/design/dept/status/approvalPending'),
          meta: { title: '待立项审核d', icon: 'form', roles: ['/design/dept'] }         
        },
        {
          path: 'drawingUpload',
          name: '立项通过，待上传图纸d',
          hidden: true,
          component: () => import('@/views/design/dept/status/drawingUpload'),
          meta: { title: '立项通过，待上传图纸d', icon: 'form', roles: ['/design/dept'] }         
        },
        {
          path: 'drawingReview',
          name: '图纸已上传，待确认d',
          hidden: true,
          component: () => import('@/views/design/dept/status/drawingReview'),
          meta: { title: '图纸已上传，待确认d', icon: 'form', roles: ['/design/dept'] }         
        },
        {
          path: 'planUpload',
          name: '图纸已确认，方案编制中d',
          hidden: true,
          component: () => import('@/views/design/dept/status/planUpload'),
          meta: { title: '图纸已确认，方案编制中d', icon: 'form', roles: ['/design/dept'] }         
        },
        {
          path: 'planReview',
          name: '方案已提交，请确认d',
          hidden: true,
          component: () => import('@/views/design/dept/status/planReview'),
          meta: { title: '方案已提交，请确认d', icon: 'form', roles: ['/design/dept'] }         
        },
        {
          path: 'planSuggest',
          name: '方案修改意见已提交，待修改d',
          hidden: true,
          component: () => import('@/views/design/dept/status/planSuggest'),
          meta: { title: '方案修改意见已提交，待修改d', icon: 'form', roles: ['/design/dept'] }         
        },
        {
          path: 'planUpdate',
          name: '方案已修改，请确认d',
          hidden: true,
          component: () => import('@/views/design/dept/status/planUpdate'),
          meta: { title: '方案已修改，请确认d', icon: 'form', roles: ['/design/dept'] }         
        },
        {
          path: 'planFee',
          name: '方案已确认，请缴费d',
          hidden: true,
          component: () => import('@/views/design/dept/status/planFee'),
          meta: { title: '方案已确认，请缴费d', icon: 'form', roles: ['/design/dept'] }         
        },
        {
          path: 'resultUpload',
          name: '项目设计中d',
          hidden: true,
          component: () => import('@/views/design/dept/status/resultUpload'),
          meta: { title: '项目设计中d', icon: 'form', roles: ['/design/dept'] }         
        },
        {
          path: 'resultReview',
          name: '成果已提交，请确认d',
          hidden: true,
          component: () => import('@/views/design/dept/status/resultReview'),
          meta: { title: '成果已提交，请确认d', icon: 'form', roles: ['/design/dept'] }         
        },
        {
          path: 'resultSuggest',
          name: '成果修改意见已提交，待修改d',
          hidden: true,
          component: () => import('@/views/design/dept/status/resultSuggest'),
          meta: { title: '成果修改意见已提交，待修改d', icon: 'form', roles: ['/design/dept'] }         
        },
        {
          path: 'resultUpdate',
          name: '成果已修改，请确认d',
          hidden: true,
          component: () => import('@/views/design/dept/status/resultUpdate'),
          meta: { title: '成果已修改，请确认d', icon: 'form', roles: ['/design/dept'] }         
        },
        {
          path: 'appraiseUpload',
          name: '成果已确认，请评价d',
          hidden: true,
          component: () => import('@/views/design/dept/status/appraiseUpload'),
          meta: { title: '成果已确认，请评价d', icon: 'form', roles: ['/design/dept'] }         
        },
        {
          path: 'appraiseReview',
          name: '评价待确认d',
          hidden: true,
          component: () => import('@/views/design/dept/status/appraiseReview'),
          meta: { title: '评价待确认d', icon: 'form', roles: ['/design/dept'] }         
        },
        {
          path: 'finished',
          name: '完成d',
          hidden: true,
          component: () => import('@/views/design/dept/status/finish'),
          meta: { title: '图纸已确认，方案编制中d', icon: 'form', roles: ['/design/dept'] }         
        }
      ]
    }  
  ],
}

export default designRouter