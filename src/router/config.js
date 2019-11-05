import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
export default new VueRouter({
    routes: [{
            path: '/',
            components: {
                default: resolve => require(['../components/module/HomePage/Index'], resolve),
            }
        },
        {
            path: '/index',
            components: {
                default: resolve => require(['../components/module/HomePage/Index'], resolve),
            }
        },
    ]
})
