import Vue from 'vue'
import VueRouter from 'vue-router'

// import component 
import Login from '@/components/MyLogin.vue'

// import component 
import Home from '@/components/MyHome.vue'

// import component 
import Users from '@/components/menus/MyUsers.vue'

// import component 
import Goods from '@/components/menus/MyGoods.vue'

// import component 
import Orders from '@/components/menus/MyOrders.vue'

// import component 
import Rights from '@/components/menus/MyRights.vue'

// import component 
import Settings from '@/components/menus/MySettings.vue'

// import component 
import UserDetail from '@/components/user/MyUserDetail.vue'


Vue.use(VueRouter)

const router =new VueRouter({
  routes: [
    {path: '/', redirect: '/login'},
    {path: '/login', component: Login},
    {path: '/home', redirect:'/home/users', component: Home, children: [
      {path: '/home/users', component: Users},
      {path: '/home/goods', component: Goods},
      {path: '/home/orders', component: Orders},
      {path: '/home/rights', component: Rights},
      {path: '/home/settings', component: Settings},
      {path: '/home/userinfo/:id', component: UserDetail, props:true},
    ]},
  ]
})

// global router defence
router.beforeEach((to, from, next) => {
  const pathArr = ['/home', '/home/users', '/home/rights', '/home/goods', '/home/settings','/home/orders']
  if (pathArr.indexOf(to.path) != -1) {
    const token = localStorage.getItem('token')
    if (token) {
      next()
    } else {
      next('/login')
    }
  } else {
    next()
  }
} )

export default router