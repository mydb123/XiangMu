<template>
<!-- 新闻详情 -->
  <div class="how">
      <div class="particulars" v-for="item in list" :key="item.id">
          <div v-if="id==item.id">
           <div class="particulars-title">{{item.title}}</div>  
           <div class="particulars-time">{{item.time}}</div>
           <div class="particulars-picture">
               <img :src="item.imgUrl" alt="">
           </div>
           <div class="particulars-article">
               {{item.txt}}
           </div>
      </div>
      </div>
  </div>
</template>

<script>
export default {

  data () {
         
    return {
        id:"",
        list:[
            {
                imgUrl:require("@/assets/news/news (7).jpg"),
                title:"慈湖高新区双创基地",
                id:"1",
                time:"2019-10-18",
                txt:"慈湖高新区双创基地智能化工程位于马鞍山慈湖高新区，智能化系统贯彻创业孵化楼南楼、北楼、管理中心、加速楼、创新楼、研发楼、会展中心、食堂、科技孵化器（1#-6#），共计14栋地上建筑及其附属配套的地下工程。具体包括，综合布线系统，语音通讯系统，信息发布系统，视频监控系统，入侵报警系统，电子巡更系统，一卡通系统，停车场管理系统，楼宇自动化控制系统，能耗监控系统，综合管路系统等。"
            },
            {
                imgUrl:require("@/assets/news/news (8).jpg"),
                title:"“广西东兴口岸二桥综合服务区",
                time:"2019-9-30",
                id:"2",
                txt:"东兴口岸二桥综合服务区信息化工程总投资为20522.65万元人民币，其中旅检区域涉及国门楼主塔楼、裙楼、以及周界限定区域海关、移民局等联检部门的信息化；货检区域信息化涉及验货场、东兴二桥引桥、楠木山大道等区域海关、移民局等联检部门的信息化。项目主要建设内容：东兴口岸二桥综合服务区信息化工程建设，主要包含旅检、货检及公共信息化配套建设，包括海关、移民局等联检部门执行进出境旅客，进出口货物监管职能所需的信息化软硬件；管委会及旅客出入境大厅、货场运营单位日常工作需要的信息化软硬件；相关配套服务器、存储、灾备与网络设备、网络专线、综合布线、视频监控、卡口、电子地磅及其他软硬件配套建设。"
            },
            {
                imgUrl:require("@/assets/news/news (6).jpg"),
                title:"马鞍山市档案资源管理中心",
                time:"2019-11-11",
                id:"3",
                txt:"为进一步加强马鞍山市档案基础设施建设，完善市级国家档案馆功能，经该市政府批准，拟新建市档案资源管理中心。该档案资源管理中心位于万达商住楼东侧，湖东路与永丰路交口西北角，总建筑面积为30250平方米，包含市档案馆、市城建档案馆、市方志馆三个场馆。其中，市档案馆17740平方米、市城建档案馆7910平方米（由档案库房、业务和技术用房、对外服务用房、办公和附属用房等组成），市方志馆1000平方米，地下停车场3600平方米。"
            },
            {
                imgUrl:require("@/assets/news/news (9).jpg"),
                title:"宣城中心医院",
                time:"2019-9-23",
                id:"4",
                txt:"宣城中心医院新院医疗综合楼，为共22层框架剪力结构医疗医疗综合楼，建筑面积约71501平方米，包含住院部、影像中心、诊室、重症监护、手术室等部分，形成完整的具有传统特色的综合医疗服务体系。医疗综合楼的建成使用，将极大的改善医疗条件和提升医疗服务功能。"
            },
        ]
    }
  },

  methods: {},

  created () {
    //   console.log(this.$route.query.id);
      this.id = this.$route.query.id

  }
}
</script>

<style lang='scss'>
    .how{
        .particulars{
            width: 1200px;
            margin: 0 auto;
            .particulars-title{
                font-size: 18px;
                font-weight: bold;
                color: #000000;
                text-align: center;
                margin-top:70px;
            }
            .particulars-time{
                width: 1200px;
                height: 55px;
                line-height: 55px;
                text-align: center;
                color: #ccc;
                font-size: 14px;
                border-bottom: 1px solid #ccc;

            }
            .particulars-picture{
                width: 756px;
                margin: 0 auto;
                margin-top: 80px;
            }
            img{
                width: 100%;
            }
            .particulars-article{
                line-height: 40px;
                text-indent:2em;
                margin-top: 80px;
            }
        }
    }
</style>






