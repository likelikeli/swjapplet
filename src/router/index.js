import router from './config'
import store from '../vuex/index'
//路由守卫
router.beforeEach((to,from,next) =>{
    NProgress.start()
    next();
})
router.afterEach(() => {
    NProgress.done()
  })
export default router;