import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      // redirect: '/index'
      redirect: '/admin/teach'
    },
    {
      path: '/index',
      name: 'IndexPage',
      component: () => import('@/pages/Index.vue'),
      meta: {title: '主页'}
    },
    {
      path: '/account/login',
      name: 'LoginRegister',
      component: () => import('@/pages/login_or_register.vue'),
      meta: {title: '注册登录页'}
    },
    {
      path: '/content/clss',
      name: 'ClassList',
      component: () => import('@/pages/class_list.vue'),
      meta: {title: '课程列表'}
    },
    {
      path: '/content/cls/:id',
      name: 'ClassDetail',
      component: () => import('@/pages/class_detail.vue'),
      meta: {title: '课程详情页'}
    },
    {
      path: '/content/cls-time/:id',
      name: 'ClassTimeDetail',
      component: () => import('@/pages/class_time_detail.vue'),
      meta: {title: '课时详情页'}
    },
    {
      path: '/admin/mystu',
      name: 'AdminMyStudy',
      component: () => import('@/pages/admin_myStudy.vue'),
      meta: {title: '后台管理 - 我的学习'}
    },
    {
      path: '/admin/teach',
      name: 'AdminTeacher',
      component: () => import('@/pages/admin_teacher.vue'),
      meta: {title: '后台管理 - 老师端'}
    },
    {
      path: '*',
      name: '404',
      component: () => import('@/pages/404.vue'),
      meta: {title: '404'}
    },
  ]
})
