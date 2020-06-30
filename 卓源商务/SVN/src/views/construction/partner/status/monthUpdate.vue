<template>
    <!-- <div>
        状态42.
        月采购计划已修改，请审核
    </div> -->
    <div class='month_update_construction_partner'>
        <StepComponent :index='index' :flag='3'></StepComponent>
        <div>
            <el-form disabled>
            <div class="wordborder" >
                <p class='clickbox' v-on:click="click(1)"> 项目信息</p>
                <div class='content' v-show="show1">
                    <el-row>
                        <el-col :span="5"><p>项目名称</p></el-col>
                        <el-col :span="8" >
                            <el-input  v-model="formData.name" placeholder="请输入内容"></el-input>
                        </el-col>
                    </el-row>
                    <el-row >
                        <el-col :span="5"><p>采购人员</p></el-col>
                        <el-col :span="8">
                            <el-input  v-model="formData.builder" placeholder="请输入内容"></el-input>
                        </el-col>
                        <el-col :span="5"><p>联系方式</p></el-col>
                        <el-col :span="6">
                            <el-input  v-model="formData.builderPhone" placeholder="请输入内容"></el-input>
                        </el-col>
                    </el-row>
                    <el-row >
                        <el-col :span="5"><p>经营目标预算</p></el-col>
                        <el-col :span="19">
                            <div v-for="item in targetFile" :key="item.id" class="text item">
                                <el-link type="primary" :href="downloadUrl+item.id">{{item.name}}</el-link>
                            </div>
                        </el-col>
                    </el-row>
                </div>
            </div>
            <div class="wordborder" >
                <p class='clickbox' v-on:click="click(2)">施工记录</p>
                <div class='content' v-show="show2" >
                    <div class="box" v-for="(item,index) in monthFormData" v-bind:key="item.id" >
                            <p class='clickbox' v-on:click="click2(index)" style='margin: -10px 0 0 26px;padding: 0 9px 0 18px;'>第{{index+1}}次施工</p>
                            <div class='content' v-show="item.flag" style='width: 91%;'>
                                <el-row>
                                    <el-col :span="5"><p>施工月次</p></el-col>
                                    <el-col :span="19">
                                        <el-date-picker v-model="item.buildMonth" type="month" 
                                         value-format="yyyy-MM-dd" placeholder="选择日期">
                                    </el-date-picker></el-col>
                                </el-row>
                                <el-row>
                                    <el-col :span="5"><p>本次施工清单</p></el-col>
                                    <el-col :span="19">
                                        <div v-for="fileItem in item.fileList" :key="fileItem.id" class="text item">
                                            <el-link type="primary" :href="downloadUrl+fileItem.id">{{fileItem.showName }}</el-link>
                                        </div>
                                    </el-col>
                                </el-row>
                                <el-row>
                                    <el-col :span="5"><p>本次采购费用</p></el-col>
                                    <el-col :span="19">
                                        <el-input  v-model="item.cost" placeholder="请输入内容">
                                            <template slot="append">万元</template>
                                        </el-input>
                                    </el-col>
                                </el-row>
                            </div> 
                    </div> 
                </div>
            </div>
            <div class="wordborder" >
                <p class='clickbox' v-on:click="click(3)">上次意见</p>
                <div class='content' v-show="show3">
                    <el-row >
                        <el-col :span="5"><p>意见内容</p></el-col>
                        <el-col :span="19">
                            <el-input
                                type="textarea"
                                :rows="3"
                                placeholder="请输入内容"
                                v-model="lastProgress">
                            </el-input>
                        </el-col>
                    </el-row>
                </div>
            </div>
            </el-form>
            <div class="wordborder" >
                <p class='clickbox' v-on:click="click(4)">修改意见</p>
                <div class='content' v-show="show4">
                    <el-row >
                        <el-col :span="5"><p>意见内容</p></el-col>
                        <el-col :span="19">
                            <el-input
                                type="textarea"
                                :rows="3"
                                placeholder="请输入内容"
                                v-model="progress">
                            </el-input>
                        </el-col>
                    </el-row>
                </div>
            </div>
        </div>
        <div class='div5'>
            <el-button style='background-color:#666' @click="refuse" type="primary" round>拒绝</el-button>
            <el-button @click="accept" type="primary" round>接受</el-button>
        </div>
    </div>
</template>

<script>
import store from '@/store/index'
import base from '@/api/base'
import StepComponent from '@/components/StepComponent'
import {Industry,ProjectMode} from '@/utils/util'
import api from '@/api/index'
import {loadFile} from '@/utils/pageResult';
export default {
    components: {
        StepComponent
    },
    data() {
        return {
            downloadUrl:base.sq+"/bizConstruction/partner/download?access_token="+store.getters.token+"&fileId=",//下载路径
            show1:true,
            show2:true,
            show3:true,
            show4:true,
            index:4,
            obj: '',
            arr:[{flag:false},{flag:false},{flag:true}],
            formData:{
                id:"",
                name:"",
                builder:"",//采购人姓名
                builderPhone:"",//采购人联系方式
            },
            targetFile:[],//经营目标预算
            monthFormData:[],//月度采购
            monthId:"",//月度id
            lastProgress:"",//意见
            progress:""//本次意见
        }
    },
    methods: {
        click(index){
            if(index==1){
                this.show1 = !this.show1
            }else if(index==2){
                this.show2 = !this.show2
            }else if(index==3){
                this.show3 = !this.show3
            }else if(index==4){
                this.show4 = !this.show4
            }
        },
        refuse() {
            api.constructionPartner.refuseMonth(this.monthId,this.progress).then(response => {
                //console.log(response);
                this.$router.push('/construction/partner/monthSuggest');
            }).catch(error => {
                console.log(error);
            });
        },
        accept() {
            api.constructionPartner.updateStatus(this.formData.id,43).then(response => {
                //console.log(response);
                this.$router.push({path:'/construction/partner/monthFee',query:{id:this.formData.id}});
            }).catch(error => {
                console.log(error);
            });
        },
        click2(index){          
            this.monthFormData[index].flag = !this.monthFormData[index].flag;
        },
        loadData(id) {
            api.constructionPartner.findById(id).then(response => {
                this.formData.id = response.id;
                this.formData.name = response.name; //项目名称
                this.formData.builder = response.builder;//采购人员
                this.formData.builderPhone = response.builderPhone;//采购人员电话
            }).catch(error => {
                console.log(error);
            });
        },
        loadMonthData(id){
            api.constructionPartner.findMouthListByExample(this.formData.id).then(response => {
                for(let i in response){
                    let monthObject = new Object();
                    let fileList = new Array();
                    monthObject.id = response[i].id;
                    monthObject.buildMonth = response[i].buildMonth;
                    monthObject.cost = response[i].cost;
                    monthObject.fileList = response[i].fileList;
                    if(response[i].used=="Y"){
                        monthObject.flag=false;//当月度已审核，默认关闭表单
                    }else{
                        this.monthId = response[i].id;//当前审核的月度id
                        monthObject.flag=true;
                    }
                    this.monthFormData.push(monthObject);
                }
                this.findBizConstructionProgressByExample(this.monthId);//加载本月度最新意见
            }).catch(error => {
                console.log(error);
            });
        },
        findBizConstructionProgressByExample(monthId){
            api.constructionPartner.findBizConstructionProgressByExampleMonth(this.formData.id,monthId,40).then(response => {
                this.lastProgress = response.progress;
            }).catch(error => {
                console.log(error);
            });
        },
        loadTargetFile(){//加载上传的经营目标预算
            loadFile('constructionPartner',this.formData.id,6,this.targetFile)
        }                        
    },
    mounted: function () {
        this.formData.id = this.$route.query.id; //获取路由传值
        //加载数据
        this.loadData(this.formData.id); //项目基本信息
        this.loadMonthData(this.formData.id);//月度采购信息
        this.loadTargetFile();//经营目标预算附件
    },
}
</script>

<style lang='scss'>
.month_update_construction_partner{
    margin: 10px auto;
    border:1px solid #E7E8ED; 
    .div2{
        position:relative;
        margin: 25px;
        min-height:20px;
        line-height: 40px;
        .content{
            width: 80%;
            margin: 35px;
            margin-left:50px;
            p{
                padding:0px 5px;   
                margin:0px 10px; 
            }
        }
    }
    .div5{
        text-align: center;
        margin-bottom: 20px;
    }
}

</style>