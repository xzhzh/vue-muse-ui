import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Renting from '@/components/Renting'
import Lease from '@/components/Lease'
import Roommate from '@/components/Roommate'
import Single from '@/components/Single'
import Male from '@/components/Male'
import Girl from '@/components/Girl'
import Baskroom from '@/components/Baskroom'
import Feedback from '@/components/Feedback'
import Gossip from '@/components/Gossip'
import Lieidle from '@/components/Lieidle'
import Makefriend from '@/components/Makefriend'

import Exhibition from '@/components/Exhibition'
import Atlas from '@/components/Atlas'
import More from '@/components/More'
import Comment from '@/components/Comment'
import Tag from '@/components/Tag'
import Find from '@/components/Fint'
import Others from '@/components/Others'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/renting',
      name: '求租',
      component: Renting
    },
    {
      path: '/lease',
      name: '出租',
      component: Lease
    },
    {
      path: '/roommate',
      name: '室友',
      component: Roommate
    },
    {
      path: '/single',
      name: '独卫',
      component: Single
    },
    {
      path: '/male',
      name: '男室友',
      component: Male
    },
     {
      path: '/girl',
      name: '女室友',
      component: Girl
    },
     {
      path: '/baskroom',
      name: '晒房',
      component: Baskroom
    },
     {
      path: '/feedback',
      name: '反馈',
      component: Feedback
    },
     {
      path: '/gossip',
      name: '闲聊',
      component: Gossip
    },
     {
      path: '/lieidle',
      name: '闲置',
      component: Lieidle
    },
     {
      path: '/Makefriend',
      name: '交友',
      component: Makefriend
    },
     {
      path: '/exhibition',
      name: '展集',
      component: Exhibition
    },
     {
      path: '/atlas',
      name: '图集',
      component: Atlas
    },
     {
      path: '/more',
      name: '更多',
      component: More
    },
     {
      path: '/comment',
      name: '更多',
      component: Comment
    },
     {
      path: '/tag',
      name: '分类标签',
      component: Tag
    },
     {
      path: '/find',
      name: '发现',
      component: Find
    },
     {
      path: '/others',
      name: '详情',
      component: Others
    }



  ]
})
