
# 原型地址

[开放注册平台](http://192.168.1.115:8071/AddedService/OpenService/start.html)
[团队后台](http://192.168.1.115:8071/AddedService/stationmis/start.html)
[递易后台](http://192.168.1.115:8071/AddedService/dymis/start.html)


# 项目所需依赖

    vue.js  
    vue-router
    vuex
    crypto-js
    js-cookie
    sass-loader   
    lodash 
    noprogress

# 项目结构
    |-- src
    |   |---api  接口请求相关
    |   |   |---baseconfig  请求基本参数的配置
    |   |   |---buildConfig 接口根目录配置
    |   |   |---index       请求api的配置 请求数据集中处理
    |   |   |---md5         支持汉字加密的md5
    |   |   |---utils       存放用于接口请求的相关功能函数
    |   |   |---upqn        图片上传七牛
    |   |---assetc 存放小的静态文件（会被webpack处理）
    |   |---components 页面组件
    |   |---element   公共组件
    |   |   |---button 防抖按钮
    |   |   |---tabel   表格
    |   |---router    路由
    |   |---utils     项目中公共方法 正则
    |   |---vuex      数据管理 

# 接口请求 （默认请求头、返回头都是  application/json）

    引入 src/api/index.js 

    imporit api from  '相对路径url'

    get请求 

        api.get({
            url:'api/login/login',
            ismd5: true,  //是否进行加密处理 
            data:{
                //发送的参数
            }
        }).then(res=>{
            console.log(res) // 接口返回值
        })

    post请求

        api.post({
            url:'api/login/login',
            ismd5: true,  //是否进行加密处理 
            data:{
                //发送的参数
            }
        }).then(res=>{
            console.log(res) // 接口返回值
        })

完整demo

    saync  getDate(){
        await api.post({
            url:'api/login/login1',
            ismd5: true,  //是否进行加密处理 
            data:{
                //发送的参数
            }
        }).then(res=>{   //接口请求成功执行
            console.log(res) // 接口返回值
        })
    }

    
# 组件 



# 开发建议

>接口请求建议统一使用  Promis  async await

>关于array  object  的相关处理使用 <label style="color:red">lodash</label>  

>接口请求相关代码放到vuex中处理 模板内部处理交互逻辑减少代码量

>计划针对element-ui的table组件进行二次封装减少代码量增加可读性

>404等通用页面编写单独页面是用ifream调用

>样式编写采用 css预编译器 sass

>针对重要的业务逻辑或者编码复杂的组件增加相关说明的readme文件

>开发过程尽量编写复用性高的代码、相同功能的组件做模块化封装处理


# 学习资料
    
[Js日报](https://daily.fairyever.com/post/)
[资料](http://t.cn/RGE7EXW)



