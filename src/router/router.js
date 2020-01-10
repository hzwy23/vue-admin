import VueRouter from "vue-router"
import BaseLayout from '@/layout/BaseLayout'
import EmptyLayout from '@/layout/EmptyRouter'
import Dashboard from '@/views/Dashboard'
import Login from '@/views/Login';

import Modeller from '@/views/modeller/Modeller'
import ModelUpdate from '@/views/modeller/ModelUpdate'
import ModelColumn from '@/views/modeller/column/ModelColumn'
import ModelColumnUpdate from '@/views/modeller/column/ModelColumnUpdate'


const routes = [{
    path: '',
    component: EmptyLayout,
    redirect: 'dashboard',
    children: [{
        path: '/login',
        component: Login,
        name: 'login',
        meta: {
            title: '登录'
        }
    }]
},{
    path: '',
    component: BaseLayout,
    redirect: 'dashboard',
    children: [{
        path: 'dashboard',
        component: Dashboard,
        name: 'dashboard',
        meta: {
            title: '首页'
        }
    }]
}, {
    path: '/',
    component: BaseLayout,
    children: [{
        path: 'modeller',
        component: Modeller,
        meta: {
            title: '数据集管理'
        }
    }, {
        path: 'modeller',
        component: EmptyLayout,
        meta: {
            title: '数据集管理'
        }, children: [
            {
                path: 'add',
                name: 'add',
                component: ModelUpdate,
                meta: {
                    title: '新增数据集',
                }
            }, {
                path: 'column',
                name: 'column',
                component: ModelColumn,
                meta: {
                    title: '字段管理'
                }
            }, {
                path: 'column',
                component: EmptyLayout,
                meta: {
                    title: '字段管理'
                },
                children: [
                    {
                        path: 'add',
                        name: 'modeller-column-add',
                        component: ModelColumnUpdate,
                        meta: {
                            title: '新增字段'
                        }
                    }
                ]
            }
        ]
    }]
}]


var router = new VueRouter({
    scrollBehavior: () => ({ y: 0 }),
    routes
})

export default router;