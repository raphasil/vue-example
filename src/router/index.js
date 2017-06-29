import Vue from 'vue'
import Router from 'vue-router'

// Import views
import HomeView from '@/components/home/Home.vue'
import LoginView from '@/components/login/Login.vue'
import ErrorView from '@/components/error/Error.vue'
import DashboardView from '@/components/dashboard/Dashboard.vue'
import RandomUsersView from '@/components/random-users/RandomUsers.vue'
import TextExampleView from '@/components/examples/text/TextExample.vue'
import ShowExampleView from '@/components/examples/show/ShowExample.vue'
import DirectiveExampleView from '@/components/examples/directive/DirectiveExample.vue'
import LoopExampleView from '@/components/examples/loop/LoopExample.vue'
import EventExampleView from '@/components/examples/event/EventExample.vue'
import DesafioInfoView from '@/components/desafio/DesafioInfo.vue'
import SessionManager from '@/core/session-manager'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      children: [
        {
          path: '/dashboard',
          alias: '',
          name: 'dashboard',
          component: DashboardView,
          meta: {
            title: 'Código Samurai / Bushido'
          }
        },
        {
          path: '/random-user',
          name: 'random-user',
          component: RandomUsersView,
          meta: {
            title: 'Random Users'
          }
        },
        {
          path: '/example/text',
          name: 'example-text',
          component: TextExampleView,
          meta: {
            title: 'Example Directive Text'
          }
        },
        {
          path: '/example/show-hide',
          name: 'example-show-hide',
          component: ShowExampleView,
          meta: {
            title: 'Example Directive Show / Hide'
          }
        },
        {
          path: '/example/directive',
          name: 'example-directive',
          component: DirectiveExampleView,
          meta: {
            title: 'Example Custom Directive'
          }
        },
        {
          path: '/example/loop',
          name: 'example-loop',
          component: LoopExampleView,
          meta: {
            title: 'Example Loop'
          }
        },
        {
          path: '/example/event',
          name: 'example-event',
          component: EventExampleView,
          meta: {
            title: 'Example Event'
          }
        },
        {
          path: '/desafio',
          name: 'desafio',
          component: DesafioInfoView,
          meta: {
            title: 'Desafio'
          }
        }
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView
    },
    {
      path: '*',
      name: 'error',
      component: ErrorView
    }
  ]
})

// router middleware
router.beforeEach((to, from, next) => {
  console.log(`router middleware, to: ${to.name}`, SessionManager)
  if (to.name === 'login' || to.name === 'error' || SessionManager.authenticated) {
    next()
  } else {
    next({
      path: '/login',
      query: { redirect: to.fullPath }
    })
  }
})

export default router
