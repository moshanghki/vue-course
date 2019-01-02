import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import About from 'views/About'
import { setTitle } from '../common/util'

Vue.use(Router)
const router = new Router({
  routes: [
    {
      path: '/',
      alias: '/home_page',
      name: 'HelloWorld',
      component: HelloWorld,
      beforeEnter: (to, from, next) => {
        console.log(to)
        next()
      }
    },
    // 命名路由
    {
      path: '/about',
      name: 'about',
      component: About
    },
    // 动态路由
    {
      path: '/argu/:id',
      name: 'argu',
      component: () => import('views/Argu.vue')
    },
    // 嵌套路由
    {
      path: '/parent',
      component: () => import('views/Parent.vue'),
      children: [
        {
          path: 'child',
          alias: '/child',
          component: () => import('views/Child')
        }
      ]
    },
    // 命名视图
    {
      path: '/named_view',
      components: {
        default: HelloWorld,
        email: () => import('views/Email.vue'),
        tel: () => import('views/Tel.vue')
      }
    },
    // 重定向
    {
      path: '/main',
      redirect: to => {
        return {
          name: 'HelloWorld'
        }
      }
    },
    // 路由组件传参
    {
      path: '/food',
      component: () => import('views/Food'),
      props: route => ({
        food: route.query.food
      })
    },
    {
      path: '/store',
      component: () => import('views/Store'),
      beforeEnter: (to, from, next) => {
        window.document.title = 'store'
        next()
      }
    },
    {
      path: '/user',
      component: () => import('views/User')
    },
    {
      path: '/count',
      component: () => import('views/CountTo')
    },
    {
      path: '/split-pane',
      component: () => import('views/Split')
    }]
})

router.beforeEach((to, from, next) => {
  setTitle(to.name)
  next()
})

export default router
