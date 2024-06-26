import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/todo-list',
    name: 'todolist',
    component: () => import(/* webpackChunkName: "about" */ '../views/TodoListView.vue')
  },
  {
    path: '/',
    name: 'home',
    component: () => import(/* webpackChunkName: "about" */ '../views/HomeView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
