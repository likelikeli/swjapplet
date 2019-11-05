Vue.use(Vuex);
import baseurl from '../api/baseconfig'
import api from '../api/index'
export default new Vuex.Store({
    state: {
        url: baseurl.baseURL,
        loginon: false,
        api: api,
        baseParams: {
            ReqTime: new Date().getTime(),
            Nonce: '66666666666sdf',
            Signature: '',
            TerminalType: '5555',
            TerminalVersion: '3333'
        }
    },
    getters: {},
    mutations: {
        getlogin(state, loginon) {
            state.loginon = loginon
        },
    },
    actions: {},
    modules: {}
})