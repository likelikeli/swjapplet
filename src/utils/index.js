/*
*使用路较高的方法
*/

export default {
    judgeDataType (data) {  //判断数据的类型 
        let obj = {}
        'Array Date RegExp Object Error'.split(' ').forEach(e => obj[ '[object ' + e + ']' ] = e.toLowerCase());
        if (data == null) return String(data);
        return typeof data === 'object' ? obj[ Object.prototype.toString.call(data) ] || 'object' : typeof data;
    }
}