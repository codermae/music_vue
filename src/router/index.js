import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/views/HelloWorld'
// import Test from '../components/test.vue'

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      redirect:'/discovery',
      component: () => import('@/views/HelloWorld'),
      children:[
        {
          path:'discovery',
          name:'discovery',
          component:() => import('@/views/01.discovery')
        },
        {
          path:'playlists',
          name:'playlists',
          component:() => import('@/views/02.playlists')
        },
        {
          path:'songs',
          name:'songs',
          component:() => import('@/views/03.songs')
        },
        {
          path:'mvs',
          name:'mvs',
          component:() => import('@/views/04.mvs')
        },
        {
          path:'result',
          name:'result',
          component:() => import('@/views/05.result')
        },
        {
          path:'playlist',
          name:'playlist',
          component:() => import('@/views/06.playlist')
        },
        {
          path:'my',
          name:'mv',
          component:() => import('@/views/07.mv')
        }
      ]
    },
    {
      path:'/test',
      name:'test',
      component:() => import('../views/08.login.vue'),
      children:[
        {
          path:'mainone',
          name:'mainone',
          component:() => import('../components/mainone.vue')
        },
        {
          path:'maintwo',
          name:'maintwo',
          component:() => import('../components/maintwo.vue')
        }
      ]
    }
  ]
})
