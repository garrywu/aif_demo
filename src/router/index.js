import Main from '../views/index.vue'
import Abstract from '../views/layout/abstract.vue'
import Home from '../views/home/home.vue'
import Login from '../views/login.vue'
import Table from '../views/table/table.vue'

export const loginRouter = {
  path: '/login',
  name: 'login',
  meta: {
    title: '登录'
  },
  component: Login
}

export const appRouter = [
  {
    title: '首页',
    path: '/home',
    name: 'home',
    icon: 'fa fa-home fa-lg',
    component: Home
  },
  {
    title: '内容管理',
    path: '/content',
    name: 'content',
    icon: 'fa fa-home fa-lg',
    component: Abstract,
    children: [
      {
        title: '文章管理',
        name: 'article',
        path: 'article',
        icon: 'ios-paper',
        component: Login
      },
      {
        title: '评论管理',
        name: 'comment',
        path: 'comment',
        icon: 'images',
        component: Table
      },
      {
        title: '举报管理',
        name: 'report',
        path: 'report',
        icon: 'images',
        component: Table
      }
    ]

  },
  {
    title: '用户管理',
    path: '/user',
    name: 'user',
    icon: 'fa fa-home fa-lg',
    component: Abstract,
    children: [
      {
        title: '新增用户',
        name: 'usr_new',
        path: 'new',
        icon: 'fa fa-home fa-lg',
        component: Login
      },
      {
        title: '活跃用户',
        name: 'usr_activated',
        path: 'activated',
        icon: 'fa fa-home fa-lg',
        component: Table
      }
    ]
  },
  {
    title: '统计分析',
    path: '/statistics',
    name: 'statistics',
    icon: 'fa fa-home fa-lg',
    component: Abstract,
    children: [
      {
        title: '新增和启动',
        name: 'stats_new',
        path: 'new',
        icon: 'fa fa-home fa-lg',
        component: Login
      },
      {
        title: '活跃分析',
        name: 'stats_activated',
        path: 'activated',
        icon: 'fa fa-home fa-lg',
        component: Table
      },
      {
        title: '时段分析',
        name: 'stats_time',
        path: 'time',
        icon: 'fa fa-home fa-lg',
        component: Table
      },
      {
        title: '用户留存',
        name: 'retention',
        path: 'retention',
        icon: 'fa fa-home fa-lg',
        component: Table
      },
      {
        title: '流失用户',
        name: 'churn',
        path: 'churn',
        icon: 'fa fa-home fa-lg',
        component: Table
      }
    ]

  }

]

export const mainRouter = {
  path: '/',
  redirect: '/home',
  name: 'index',
  component: Main,
  children: appRouter
}

export const routers = [
  loginRouter,
  mainRouter,
  // catch all redirect
  {path: '*', redirect: '/home'}

]

