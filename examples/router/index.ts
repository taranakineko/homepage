import { createRouter, createWebHistory } from 'vue-router' //导入路由  createRouter创建路由 createWebHistory模式
import Index from '../Index.vue' //导入页面
import notfound from '../404.vue'

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes: [
        { 
            path: '/', 
            component: Index ,
            meta:{title:'Taranakineko is here.'}
        },
        { 
            path: '/404', 
            component: notfound,
            meta:{title:'404!'}
        },
        {
            path: '/:pathMatch(.*)',
            redirect: '/404'
        }
    ]
});

router.beforeEach((to) => {
    /* 路由发生变化修改页面title */
    if (typeof (to.meta?.title) === 'string') {
      document.title = to.meta?.title
    }
  })

export default router;  //最后导出路由表