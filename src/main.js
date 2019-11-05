// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// import "babel-polyfill"
import store from './vuex/index'
import api from './api/index'
import _ from 'lodash'
Vue.prototype._ = _
Vue.prototype.$api = api
Vue.config.productionTip = false
// import Footer from './components/module/common/footer'
// import Header from './components/module/common/header'
// import Nav from './components/module/common/Nav'
// Vue.component('Footer',Footer);
// Vue.component('Header',Header);
// Vue.component('Nav',Nav)
    /* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    components: { App },
    template: '<App/>'
})
