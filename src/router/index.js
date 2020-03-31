import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/Layout/index.vue' // 引入layout模板

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      // name: 'HelloWorld',
      component: Layout,
      redirect: '/HelloWorld',
      children: [
        {
          path: 'HelloWorld',
          name: 'HelloWorld',
          component: () => import('@/components/HelloWorld'),
          meta: { title: 'HelloWorld', icon: 'dashboard' }
        }
      ]
    },
    {
      path: '/demo',
      component: Layout,
      redirect: '/demo/index',
      meta: {
        title: 'demo'
      },
      children: [
        {
          path: 'index', name: 'demo1', component: () => import('@/views/demo/demo1'), meta: { title: 'demo1', icon: 'dashboard' }
        },
        {
          path: 'demo2', name: 'demo2', component: () => import('@/views/demo/demo2'), meta: { title: 'demo2', icon: 'dashboard' }
        },
        {
          path: 'demo3', name: 'demo3', component: () => import('@/views/demo/demo3'), meta: { title: 'demo3', icon: 'dashboard' }
        }
      ]
    },
    {
      path: '/login',
      name: 'Login',
      component: () => import('@/views/login')
    }
  ]
})
