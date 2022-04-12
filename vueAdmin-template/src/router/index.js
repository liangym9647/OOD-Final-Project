import Vue from 'vue'
import Router from 'vue-router'

// in development-env not use lazy-loading, because lazy-loading too many pages will cause webpack hot update too slow. so only in production use lazy-loading;
// detail: https://panjiachen.github.io/vue-element-admin-site/#/lazy-loading

Vue.use(Router)

/* Layout */
import Layout from '../views/layout/Layout'

/**
* hidden: true                   if `hidden:true` will not show in the sidebar(default is false)
* alwaysShow: true               if set true, will always show the root menu, whatever its child routes length
*                                if not set alwaysShow, only more than one route under the children
*                                it will becomes nested mode, otherwise not show the root menu
* redirect: noredirect           if `redirect:noredirect` will no redirct in the breadcrumb
* name:'router-name'             the name is used by <keep-alive> (must set!!!)
* meta : {
    title: 'title'               the name show in submenu and breadcrumb (recommend set)
    icon: 'svg-name'             the icon show in the sidebar,
  }
**/
export const constantRouterMap = [
  //跳转页面
  { path: '/login', component: () => import('@/views/login/index'), hidden: true },
  { path: '/404', component: () => import('@/views/404'), hidden: true },


  {
    path: '/', 
    component: Layout,
    redirect: '/dashboard',
    name: 'Dashboard',
    hidden: true,
    children: [{
      path: 'dashboard',
      component: () => import('@/views/dashboard/index')
    }]
  },

  {
    path: '/trip', //path
    component: Layout,
    redirect: '/trip/index', //when click the widget, the website URL will change, format: localhost:XXXX + redirect
    children: [
      {
        path: 'trip',
        name: 'Trip',
        component: () => import('@/views/trip/index'),
        meta: { title: 'Trip', icon: 'form' }
      }
    ]
  },

  // {
  //   path: '/example',
  //   component: Layout,
  //   redirect: '/example/table',
  //   name: 'Example',
  //   meta: { title: 'Example', icon: 'example' },
  //   children: [
  //     {
  //       path: 'table',
  //       name: 'Table',
  //       component: () => import('@/views/table/index'),
  //       meta: { title: 'Table', icon: 'table' }
  //     },
  //     {
  //       path: 'tree',
  //       name: 'Tree',
  //       component: () => import('@/views/tree/index'),
  //       meta: { title: 'Tree', icon: 'tree' }
  //     }
  //   ]
  // },

  {
    path: '/news',
    component: Layout,
    redirect: '/news/index',
    children: [
      {
        path: 'index',
        name: 'News',
        component: () => import('@/views/news/index'),
        meta: { title: 'News', icon: 'form' }
      }
    ]
  },

  {
    path: '/takeout',
    component: Layout,
    redirect: '/takeout/index',
    children: [
      {
        path: 'index',
        name: 'Takeout',
        component: () => import('@/views/takeout/index'),
        meta: { title: 'Takeout', icon: 'form' }
      }
    ]
  },

  { path: '*', redirect: '/404', hidden: true }
]

export default new Router({
  mode: 'history', // 后端支持可开
  base: '/', // 链接host后面的固定格式，这里是m.local.cc/CMS/...，之后才是路由变化内容
  // scrollBehavior: () => ({ y: 0 }),
  // saveScrollPosition: true, // 记住页面位置
  // scrollBehavior(to, from, savedPosition) {
  //   console.log(arguments)
  //   if (savedPosition) {
  //     return savedPosition
  //   } else {
  //     return { x: 0, y: 0 }
  //   }
  // },
  routes: constantRouterMap
})

