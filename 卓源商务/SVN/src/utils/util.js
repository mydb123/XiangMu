
Date.prototype.format = function(fmt) { 
  var o = { 
     "M+" : this.getMonth()+1,                 //月份 
     "d+" : this.getDate(),                    //日 
     "h+" : this.getHours(),                   //小时 
     "m+" : this.getMinutes(),                 //分 
     "s+" : this.getSeconds(),                 //秒 
     "q+" : Math.floor((this.getMonth()+3)/3), //季度 
     "S"  : this.getMilliseconds()             //毫秒 
 }; 
 if(/(y+)/.test(fmt)) {
         fmt=fmt.replace(RegExp.$1, (this.getFullYear()+"").substr(4 - RegExp.$1.length)); 
 }
  for(var k in o) {
     if(new RegExp("("+ k +")").test(fmt)){
          fmt = fmt.replace(RegExp.$1, (RegExp.$1.length==1) ? (o[k]) : (("00"+ o[k]).substr((""+ o[k]).length)));
      }
  }
 return fmt; 
}
//行业
const Industry = [{
    value: 1,
    label: '智慧城市'
    }, {
    value: 2,
    label: '金融'
    }, {
    value: 3,
    label: '文体广场'
    }, {
    value: 4,
    label: '互联网'
    }, {
    value: 5,
    label: '军队'
    }, {
    value: 6,
    label: '行政办公'
    }, {
    value: 7,
    label: '医疗'
    }, {
    value: 8,
    label: '商业服务'
    }, {
    value: 9,
    label: '公检法'
    }, {
    value: 10,
    label: '住宅房屋'
    }, {
    value: 11,
    label: '科教'
    }, {
    value: 12,
    label: '厂房仓库'
    }, {
    value: 13,
    label: '管廊'
    }, {
    value: 14,
    label: '其他'
    }
];
//项目模式
const ProjectMode = [{
    value: 1,
    label: '设计+施工总承包(DB)'
    }, {
    value: 2,
    label: '交钥匙总承包(EPC)'
    }, {
    value: 3,
    label: '公私合作关系(PPP)'
    }, {
    value: 4,
    label: '专业承包'
    }
];
//招标模式
const TenderMode = [{
    value: 1,
    label: '公开招标'
},{
    value: 2
    ,
    label: '邀请招标'
}]

export {Industry,ProjectMode,TenderMode,ctool} 

const ctool ={
    setObj : function (key, obj) {
        obj = JSON.stringify(obj);
        sessionStorage.setItem(key, obj);
    },
    getObj : function (key) {
        var obj = JSON.parse(sessionStorage.getItem(key));
        return obj;
    }
}
