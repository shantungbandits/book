import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Login from '@/components/Login'
import Courses from '@/components/Courses'
import Course from '@/components/Course'
import User from '@/components/User'
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/courses',
      name: 'Courses',
      component: Courses
    },
    {
      path: '/courses/:courseid',
      name: 'Course',
      component: Course
    },
    {
      path: '/user',
      name: 'User',
      component: User
    }
  ]
})
