import md5 from './md5'
import vuex from '../vuex/index'
export default {
    md5:_md5
}

function _md5(data,token){
    return changesign(data,token)
}
function changesign(params,token){
    let list = []
    for(let prop in params){
        if(typeof (params[prop]) == 'number' && params[prop] == 0){
            list.push(prop)
        }else if(params[prop]){
            if(typeof (params[prop]) == 'string' && prop.indexOf('Time') == -1 && prop != 'SearchData'){
                params[prop] =  params[prop].replace(/\s*/g,"");
            }
            if(params[prop]){
                list.push(prop)
            }
        }
    }
    list = list.sort();
    let str = '';
    for(let i = 0; i < list.length; i++){
        let aa
        if(typeof (params[list[i]]) == 'object'){
            if(params[list[i]].length){
                for(let j = 0; j < params[list[i]].length; j++){
                    let bb = params[list[i]][j];
                    for(let pop in bb){
                        if(typeof (bb[pop]) == 'string' && !bb[pop]){
                            delete bb[pop]
                        }
                    }
                }
                aa = JSON.stringify(params[list[i]])
            }else{
                aa = params[list[i]]
                for(let prop in aa){
                    if(typeof (aa[prop]) == 'string' && !aa[prop]){
                        delete aa[prop]
                    }
                }
                aa = JSON.stringify(aa)
            }
        }else{
            aa = params[list[i]]
        }
        str = str + list[i] + '=' + aa + '&'
    }
    str = str.slice(0, str.length - 1);
    token ? str += "&key=" + token :'';
        return {
            ...params,
            Signature:md5(str).toUpperCase()
        }
   }