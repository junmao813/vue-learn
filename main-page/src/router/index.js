import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import func1 from '@/components/func1'
import func2 from '@/components/func2'
import func3 from '@/components/func3'
import func4 from '@/components/func4'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home,
      redirect: '/func1',
      children: [
        // 这也是个路由记录
        // {path: '/', name:'func1', component: func1, meta: {title: '功能1'}},
        { path: 'func1', component: func1, meta: {title: '功能1'} },
        { path: 'func2', component: func2, meta: {title: '功能2'} },
        { path: 'func3', component: func3, meta: {title: '功能3'} },
        {path: 'func4', component: func4, meta: {title: '功能4'}}
      ]
    }
  ]
})
