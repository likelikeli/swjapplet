const target = process.env.HOST;
let obj = {};
switch (target){
    case 'test' :
    obj.BASE_URL = 'http://129.211.129.92:6105';  //测试环境
    break;
    case 'gray' :
    obj.BASE_URL = '2'; //灰度环境
    break;
    case 'pro' :
    obj.BASE_URL = '3'; //正式环境
    break;
    default :
    obj.BASE_URL = 'https://opendemo.diyibox.cn'; //开发环境
}
module.exports = obj;