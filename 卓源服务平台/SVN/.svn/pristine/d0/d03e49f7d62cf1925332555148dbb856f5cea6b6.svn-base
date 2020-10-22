import Container from '@/container/Container'
/**
 * 后台分析相关路由
 */
const backstageRouter = {
    path: '/backstageManagement',
    component: Container,
    name: '数据中心',
    meta: {title: '数据中心',roles: ['backstageManagement']},
    redirect: '/backstageManagement/underAnalysis',
    children: [
        // 后台管理-数据中心概况
        {
            path: 'underAnalysis',
            name: '数据中心概况',
            component: () => import('@/views/backstageManagement/underAnalysis'),
            meta: { title: '数据中心概况', icon: 'form', roles: ['backstageManagement']}
        },
        // 后台管理-总包分析
        {
            path: 'totalPackageAnalysis',
            name: '总包分析',
            hidden: true,
            component: () => import('@/views/backstageManagement/totalPackageAnalysis'),
            meta: { title: '总包分析', icon: 'form', roles: ['backstageManagement']}
        },
        // 后台管理-供应商分析
        {
            path: 'supplierAnalysis',
            name: '供应商分析',
            hidden: true,
            component: () => import('@/views/backstageManagement/supplierAnalysis'),
            meta: { title: '供应商分析', icon: 'form', roles: ['backstageManagement']}
        },
        // 后台管理-劳务分析
        {
            path: 'laborAnalysis',
            name: '劳务分析',
            hidden: true,
            component: () => import('@/views/backstageManagement/laborAnalysis'),
            meta: { title: '劳务分析', icon: 'form', roles: ['backstageManagement']}
        },
    ]
}
export default backstageRouter
