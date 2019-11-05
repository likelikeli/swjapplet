import config from './baseconfig'
import utils from './utils'
import store from './../vuex/index'
import md5 from './md5';
let qiniu = require('qiniu-js');
//请求拦截器
var http = axios.create()
http.interceptors.request.use(config => {   //请求之前 
      return config
}, error => {
    return Promise.reject(error)
})
// axios.defaults = {
//     ...axios.defaults,
//     ...config
// }
http.defaults.baseURL = config.baseURL;
http.defaults.timeout = config.timeout;
//响应拦截器即异常处理
http.interceptors.response.use(response => {
    //对参数进行处理
    return response;
}, err => {
    return Promise.reject(err)
})
export default {
    get (data) {//get请求
        return new Promise((resolve,reject) => {
            http({
                method: 'get',
                url:data.url,
                params: data,
                headers:config.headers,
            }).then(res => {
                if(res.status == 200 && res.code == 200){

                }else{
                    
                }
                resolve(res);
            }).catch(err=>{
                reject(err)
            })
        })
    },
    post (data) {//post请求
        return new Promise((resolve,reject) => {
            http({
                method: 'post',
                url:data.url,
                // data:utils.md5(data),
                data:data.data,
                headers:config.headers,
            }).then(res => {
                if(res.status == 200 && res.data.Code == 200){

                }else if(res.data.Code == 403){
                    //location.href = '/'
                }else{
                    
                }
                resolve(res);
            }).catch(err=>{
                reject(err)
            })
        })
    },
    md5:utils.md5
}
