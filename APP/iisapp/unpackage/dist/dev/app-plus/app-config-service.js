
var isReady=false;var onReadyCallbacks=[];
var __uniConfig = {"pages":["pages/login","pages/editinfo","pages/home","pages/myinfo","pages/video/basement_1","pages/video/basement_1_play","pages/video/basement_2","pages/video/basement_2_play","pages/video/outdoor","pages/information/index","pages/information/indexdetail","pages/onecard/doormanrecord","pages/onecard/inoutrecord","pages/onecard/inoutrecordDetail","pages/carpark/inoutrecord","pages/carpark/cardetail","pages/carpark/inoutmonitor","pages/carpark/inoutmonitorplay","pages/realtime/device","pages/realtime/devicefull","pages/realtime/sonsystem","pages/realtime/loginfo","pages/Intrusion/alarm","pages/login2"],"window":{"navigationBarTextStyle":"white","navigationBarTitleText":"卓源智能","navigationBarBackgroundColor":"#0faeff","backgroundColor":"#F8F8F8"},"renderer":"auto","splashscreen":{"alwaysShowBeforeRender":true,"autoclose":false},"appname":"卓源智能","compilerVersion":"2.6.16","entryPagePath":"pages/login","networkTimeout":{"request":60000,"connectSocket":60000,"uploadFile":60000,"downloadFile":60000}};
var __uniRoutes = [{"path":"/pages/login","meta":{"isQuit":true},"window":{"navigationBarTitleText":"登录"}},{"path":"/pages/editinfo","meta":{},"window":{"navigationBarTitleText":"修改","autoBackButton":"true","buttons":[{"type":"back","float":"left"}]}},{"path":"/pages/home","meta":{},"window":{}},{"path":"/pages/myinfo","meta":{},"window":{}},{"path":"/pages/video/basement_1","meta":{},"window":{"navigationBarTitleText":"地下室一","autoBackButton":"true","buttons":[{"type":"back","float":"left"}]}},{"path":"/pages/video/basement_1_play","meta":{},"window":{"navigationBarTitleText":"播放","autoBackButton":"true","buttons":[{"type":"back","float":"left"}]}},{"path":"/pages/video/basement_2","meta":{},"window":{"navigationBarTitleText":"地下室二","autoBackButton":"true","buttons":[{"type":"back","float":"left"}]}},{"path":"/pages/video/basement_2_play","meta":{},"window":{"navigationBarTitleText":"播放","autoBackButton":"true","buttons":[{"type":"back","float":"left"}]}},{"path":"/pages/video/outdoor","meta":{},"window":{"navigationBarTitleText":"室外","autoBackButton":"true","buttons":[{"type":"back","float":"left"}]}},{"path":"/pages/information/index","meta":{},"window":{"navigationBarTitleText":"信息发布系统","autoBackButton":"true","buttons":[{"type":"back","float":"left"}]}},{"path":"/pages/information/indexdetail","meta":{},"window":{"navigationBarTitleText":"信息发布详情","autoBackButton":"true","buttons":[{"type":"back","float":"left"}]}},{"path":"/pages/onecard/doormanrecord","meta":{},"window":{"navigationBarTitleText":"门卫信息查询","enablePullDownRefresh":true,"autoBackButton":"true","buttons":[{"type":"back","float":"left"}]}},{"path":"/pages/onecard/inoutrecord","meta":{},"window":{"navigationBarTitleText":"人员出入记录表","enablePullDownRefresh":true,"autoBackButton":"true","buttons":[{"type":"back","float":"left"}]}},{"path":"/pages/onecard/inoutrecordDetail","meta":{},"window":{"navigationBarTitleText":"人员出入记录详情","autoBackButton":"true","buttons":[{"type":"back","float":"left"}]}},{"path":"/pages/carpark/inoutrecord","meta":{},"window":{"navigationBarTitleText":"出入记录","enablePullDownRefresh":true,"autoBackButton":"true","buttons":[{"type":"back","float":"left"}]}},{"path":"/pages/carpark/cardetail","meta":{},"window":{"navigationBarTitleText":"出入详情","autoBackButton":"true","buttons":[{"type":"back","float":"left"}]}},{"path":"/pages/carpark/inoutmonitor","meta":{},"window":{"navigationBarTitleText":"进出口监控视频列表","enablePullDownRefresh":true,"autoBackButton":"true","buttons":[{"type":"back","float":"left"}]}},{"path":"/pages/carpark/inoutmonitorplay","meta":{},"window":{"navigationBarTitleText":"进出口监控播放","enablePullDownRefresh":true,"autoBackButton":"true","buttons":[{"type":"back","float":"left"}]}},{"path":"/pages/realtime/device","meta":{},"window":{"navigationBarTitleText":"设备报警信息","enablePullDownRefresh":true,"autoBackButton":"true","buttons":[{"type":"back","float":"left"}]}},{"path":"/pages/realtime/devicefull","meta":{},"window":{"navigationBarTitleText":"设备报警信息详情","autoBackButton":"true","buttons":[{"type":"back","float":"left"}]}},{"path":"/pages/realtime/sonsystem","meta":{},"window":{"navigationBarTitleText":"子系统状态","autoBackButton":"true","buttons":[{"type":"back","float":"left"}]}},{"path":"/pages/realtime/loginfo","meta":{},"window":{"navigationBarTitleText":"日志信息","enablePullDownRefresh":true,"autoBackButton":"true","buttons":[{"type":"back","float":"left"}]}},{"path":"/pages/Intrusion/alarm","meta":{},"window":{}},{"path":"/pages/login2","meta":{},"window":{}}];
__uniConfig.onReady=function(callback){if(__uniConfig.ready){callback()}else{onReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"ready",{get:function(){return isReady},set:function(val){isReady=val;if(!isReady){return}const callbacks=onReadyCallbacks.slice(0);onReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
service.register("uni-app-config",{create(a,b,c){if(!__uniConfig.viewport){var d=b.weex.config.env.scale,e=b.weex.config.env.deviceWidth,f=Math.ceil(e/d);Object.assign(__uniConfig,{viewport:f,defaultFontSize:Math.round(f/20)})}return{instance:{__uniConfig:__uniConfig,__uniRoutes:__uniRoutes,global:void 0,window:void 0,document:void 0,frames:void 0,self:void 0,location:void 0,navigator:void 0,localStorage:void 0,history:void 0,Caches:void 0,screen:void 0,alert:void 0,confirm:void 0,prompt:void 0,fetch:void 0,XMLHttpRequest:void 0,WebSocket:void 0,webkit:void 0,print:void 0}}}});
