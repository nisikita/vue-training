import Vue from 'vue'
import VueRouter from 'vue-router'
import views from '../views'
import australia from '../views/country/australia'
import brazil from '../views/country/brazil'
import colombia from '../views/country/colombia'
import denmark from '../views/country/denmark'
import eswatini from '../views/country/eswatini'
import france from '../views/country/france'
import greece from '../views/country/greece'
import honduras from '../views/country/honduras'
import india from '../views/country/india'
import japan from '../views/country/japan'
import kazakhstan from '../views/country/kazakhstan'
import lebanon from '../views/country/lebanon'
import madagascar from '../views/country/madagascar'
import norway from '../views/country/norway'
import oman from '../views/country/oman'

import mercury from '../views/planet/mercury'
import venus from '../views/planet/venus'
import earth from '../views/planet/earth'
import mars from '../views/planet/mars'

import index from '../views/accountBook'
import top from '../views/accountBook/top'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'views',
    component: views
  },
  {
    path: '/country/australia',
    name: 'australia',
    component: australia
  },
  {
    path: '/country/brazil',
    name: 'brazil',
    component: brazil
  },
  {
    path: '/country/colombia',
    name: 'colombia',
    component: colombia
  },
  {
    path: '/country/denmark',
    name: 'denmark',
    component: denmark
  },
  {
    path: '/country/eswatini',
    name: 'eswatini',
    component: eswatini
  },
  {
    path: '/country/france',
    name: 'france',
    component: france
  },
  {
    path: '/country/greece',
    name: 'greece',
    component: greece
  },
  {
    path: '/country/honduras',
    name: 'honduras',
    component: honduras
  },
  {
    path: '/country/india',
    name: 'india',
    component: india
  },
  {
    path: '/country/japan',
    name: 'japan',
    component: japan
  },
  {
    path: '/country/kazakhstan',
    name: 'kazakhstan',
    component: kazakhstan
  },
  {
    path: '/country/lebanon',
    name: 'lebanon',
    component: lebanon
  },
  {
    path: '/country/madagascar',
    name: 'madagascar',
    component: madagascar
  },
  {
    path: '/country/norway',
    name: 'norway',
    component: norway
  },
  {
    path: '/country/oman',
    name: 'oman',
    component: oman
  },
  {
    path: '/planet/mercury',
    name: 'mercury',
    component: mercury
  },
  {
    path: '/planet/venus',
    name: 'venus',
    component: venus
  },
  {
    path: '/planet/earth',
    name: 'earth',
    component: earth
  },
  {    
    path: '/planet/mars',
    name: 'mars',
    component: mars
  },
  {
    path: '/account-book',
    name: 'index',
    component: index
  },
  {
    path: '/account-book/top',
    name: 'top',
    component: top
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
