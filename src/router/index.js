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
          path:'mv',
          name:'mv',
          component:() => import('@/views/07.mv')
        },
        {
          path:'like',
          name:'like',
          component:() => import('@/views/09.like')
        },
        {
          path:'userInfo',
          name:'userInfo',
          component:() => import('@/views/10.userInfo')
        },
        {
          path:'singerlist',
          name:'singerlist',
          component:() => import('@/views/11.singerlist')
        },
        {
          path:'singerdetail',
          name:'singerdetail',
          component:() => import('@/views/12.singerdetail')
        },
        {
          path:'songinfo',
          name:'songinfo',
          component:() => import('@/views/13.songInfo')
        }
      ]
    },
    {
      path:'/user',
      name:'login',
      component:() => import('../views/08.loginRegist.vue'),
      children:[
        {
          path:'regist',
          name:'regist',
          component:() => import('../components/03.regist.vue')
        },
        {
          path:'login',
          name:'login',
          component:() => import('../components/04.login.vue')
        }
      ]
    }
  ]
})
