
let qiniu = require('qiniu-js');
function upfiletoqiniu(type,fire,name,token,SubFolder){ //  fire   文件名称   接口返回token
    let putExtra = {
        fname: name,
        params: {},
        mimeType: type
    };
    let config = {
        useCdnDomain: false,
        region: qiniu.region.z0
    };
    let observable = qiniu.upload(fire.raw, SubFolder + "/" +  name, token, putExtra, config)
    return new Promise((resove,reject)=>{
        observable.subscribe({ // 上传开始
            next(res){
                if(res.total.percent == 100){
                    resove();
                }
            },
            error(err){
                reject();
            },
            complete(res){

            }
        })
    })
}
export default upfiletoqiniu
    