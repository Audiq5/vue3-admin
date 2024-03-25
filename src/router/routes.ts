// import login from "@/view/login/index.vue";


export const constantRoute = [
  {
    path: '/login',
    component: () => import("@/view/login/index.vue"),
    // component: login,
    name: 'login'
  },
  {
    path: '/',
    // component: () => import("@/view/home/index.vue"),
    name: 'layout',
    redirect: '/home'
  },
  {
    path: '/home',
    component: () => import("@/view/home/index.vue"),
    name: 'home',
  },
  {
    path: '/404',
    component: () => import("@/view/404/index.vue"),
    name: '404',
  },
  {
    path: '/:pathMatch(.*)*',
    // component: () => import("@/view/home/index.vue"),
    name: 'Any',
    redirect: '/404'
  }
]