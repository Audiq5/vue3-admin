// import login from "@/view/login/index.vue";

export const constantRoute = [
  {
    path: "/login",
    component: () => import("@/view/login/index.vue"),
    // component: login,
    name: "login",
    meta: {
      title: '登录',
      icon: "HomeFilled",
      hidden: true
    }
  },
  {
    path: "/",
    component: () => import("@/layout/index.vue"),
    name: "layout",

    meta: {
      title: 'layout',
      hidden: false,
      icon: '',
    },
    redirect: "/home",
    children: [
      {
        path: "/home",
        component: () => import("@/view/home/index.vue"),
        meta: {
          title: "首页",
          hidden: false,
          icon: "HomeFilled",
        },
      },
      {
        path: '/test',
        component: () => import("@/view/text/index.vue"),
        meta: {
          title: ' 测试 ',
          icon: '',
          hidden: false //代表路由标题在菜单中是否隐藏
        }
      }
    ],
  },

  {
    path: "/404",
    component: () => import("@/view/404/index.vue"),
    name: "404",
    meta: {
      title: '404',
      hidden: true
    }
  },

];
//任意路由
export const anyRoute = {
  //任意路由
  path: '/:pathMatch(.*)*',
  redirect: '/404',
  name: 'Any',
  meta: {
    title: '任意路由',
    hidden: true,
    icon: 'DataLine',
  },
}
