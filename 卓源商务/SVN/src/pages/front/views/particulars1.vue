<template>
<!-- 图片详情 -->
  <div class="how">
      <div class="particulars" v-for="item in list" :key="item.id">
            <div v-if="id==item.id">
                <div class="particulars-title">
                    {{item.title}}
                </div>   
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
               imgUrl:require("@/assets/latest/xiangmu (7).jpg"),
                time:"添加时间：2019年11月06日",
                id:"1",
                title:"滁州奥体中心",
                txt:"滁州奥体中心位于明湖景观区域，滁州大道东、明湖西岸半岛地块，是该区域打造的首个大型民生工程，是滁州市积极申办安徽省十五运的重大举措。规划占地约1100亩，总建筑面积约13.35万平方米，主要为一场两馆、含全民健身中心和大型体育生态公园建设项目，包括40000座的体育场、6000座的体育馆和1500座的游泳馆。项目主要建设内容包括滁州市奥体中心体育场、体育馆、游泳馆及室外的弱电智能化各类系统安装，场地智能照明系统安装，室外照明（含亮化、道路、泛光）及智慧总控系统安装施工图纸范围内全部安装工程，包括设计图纸深化、调试交付业主。"
            },
            {
                imgUrl:require("@/assets/latest/xiangmu (8).jpg"),
                id:"2",
                time:"添加时间：2018年09月18日",
                title:"马鞍山市体育会展中心",
                txt:"马鞍山市体育中心是马鞍山重要的公共体育设施建设项目，是集体育比赛、展览、演出、教学、健身、休闲为一体的综合性项目，项目占地750亩，主体育场主要建设内容为“两场四馆”，分别是：36000座主体育场、400米室外田径场、6000座综合体育馆、800标准展位的会展中心以及室内网球馆、游泳馆，总建筑面积近16万平方米"
            },
            {
                imgUrl:require("@/assets/latest/xiangmu (9).jpg"),
                id:"3",
                time:"添加时间：2016年04月13日",
                title:"宣城中心医院",
                txt:"宣城中心医院新院医疗综合楼，为共22层框架剪力结构医疗医疗综合楼，建筑面积约71501平方米，包含住院部、影像中心、诊室、重症监护、手术室等部分，形成完整的具有传统特色的综合医疗服务体系。医疗综合楼的建成使用，将极大的改善医疗条件和提升医疗服务功能。"
            },
            {
                imgUrl:require("@/assets/latest/xiangmu (12).jpg"),
                id:"4",
                time:"添加时间：2016年04月13日",
                title:"兰州理工学院",
                txt:"兰州理工学院智能化工程位于兰州新区，南临纬路十六路，东临辅西路，北临纬二十六路，西临文曲中路。基地南北长约2084米，东西宽约840米，呈不规则多边形，场地用地面积达180.65公顷，150余栋单体工程。项目要求规划用地2709.75亩，规划总建筑面积1002032.84平方米，地上建筑面积951532.84平方米。"
            },
            {
                imgUrl:require("@/assets/latest/xiangmu (14).jpg"),
                id:"5",
                time:"添加时间：2016年04月13日",
                title:"新疆库车县安置房",
                txt:"十七冶新疆库车县安置房智能化项目位于库车县安康路和天河路，建设用地约1084.55亩，包括A-H及人才公寓9个地块，建筑总面积约1356351.87平方米，新建安置房及人才公寓楼约10839套。本项目主要是负责安置房ADH地块智能化工程，包括监控系统、综合配线系统及安防对讲系统等。"
            },
            {
                imgUrl:require("@/assets/latest/xiangmu (15).jpg"),
                id:"6",
                title:"合肥滨湖润园",
                time:"添加时间：2019年11月06日",
                txt:"滨湖润园位于安徽省合肥市迎淮路与天津路交叉口，分区南、北两个区域，总建筑面积达60万平方米，其中南、北区住宅（34栋）面积约为47万平方米，南、北区商业楼（8栋）、北区幼儿园、南区养老中心、南区社区综合楼、地下停车库等配套建筑面积约14万平方米。"
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
                font-size: 26px;
                font-weight: bold;
                color: #000000;
                text-align: center;
                margin-top:70px;
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
                line-height: 22px;
                text-indent:2em;
                font-size: 14px;
                color: #333333;
                margin: 0 43px;
                 margin-top: 40px;
            }
            .fr{
                float: right;
                font-size: 16px
            }
        }
    }
</style>






