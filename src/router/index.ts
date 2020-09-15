import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      title: "客户端-用户登录"
    }
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/publish',
    name: 'Publish',
    component: () => import(/* webpackChunkName: "about" */ '../views/Publish.vue')
  },
  {
    path: '/missionManage',
    name: 'MissionManage',
    component: () => import(/* webpackChunkName: "about" */ '../views/missionManage.vue')
  },
  {
    path: '/personal',
    name: 'Personal',
    component: () => import(/* webpackChunkName: "about" */ '../views/Personal.vue')
  },
  {
    path: '/blackList',
    name: 'BlackList',
    component: () => import(/* webpackChunkName: "about" */ '../views/BlackList.vue')
  },
  {
    path: '/shopManage',
    name: 'ShopManage',
    component: () => import(/* webpackChunkName: "about" */ '../views/ShopManage.vue')
  },
  {
    path: '/goodsManage',
    name: 'GoodsManage',
    component: () => import(/* webpackChunkName: "about" */ '../views/GoodsManage.vue')
  },
  {
    path: '/addGoods',
    name: 'AddGoods',
    component: () => import(/* webpackChunkName: "about" */ '../views/AddGoods.vue')
  },
  {
    path: '/smartHelper',
    name: 'SmartHelper',
    component: () => import(/* webpackChunkName: "about" */ '../views/SmartHelper.vue')
  },
  {
    path: '/platNotice',
    name: 'PlatNotice',
    component: () => import(/* webpackChunkName: "about" */ '../views/PlatNotice.vue')
  },
  {
    path: '/editUnit',
    name: 'EditUnit',
    component: () => import(/* webpackChunkName: "about" */ '../views/EditUnit.vue')
  },
  {
    path: '/blackListManage',
    name: 'BlackListManage',
    component: () => import(/* webpackChunkName: "about" */ '../views/BlackListManage.vue')
  },
  {
    path: '/customService',
    name: 'CustomService',
    component: () => import(/* webpackChunkName: "about" */ '../views/CustomService.vue')
  },
  {
    path: '/inviteFriends',
    name: 'InviteFriends',
    component: () => import(/* webpackChunkName: "about" */ '../views/InviteFriends.vue')
  },
  {
    path: '/payAccount',
    name: 'PayAccount',
    component: () => import(/* webpackChunkName: "about" */ '../views/PayAccount.vue')
  },
  {
    path: '/transFerAccountManage',
    name: 'TransFerAccountManage',
    component: () => import(/* webpackChunkName: "about" */ '../views/TransFerAccountManage.vue')
  },
  {
    path: '/fundManage',
    name: 'FundManage',
    component: () => import(/* webpackChunkName: "about" */ '../views/fundManage.vue')
  },{
    path: '/orderManage',
    name: '/OrderManage',
    component: () => import(/* webpackChunkName: "about" */ '../views/orderManage.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
