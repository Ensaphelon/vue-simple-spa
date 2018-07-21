import Vue from 'vue'
import Router from 'vue-router'
import Homepage from '@/pages/Homepage'
import About from '@/pages/About'
import Contacts from '@/pages/Contacts'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Homepage',
      component: Homepage
    },
    {
      path: '/about/',
      name: 'About',
      component: About
    },
    {
      path: '/contacts/',
      name: 'Contact',
      component: Contacts
    }
  ]
})
