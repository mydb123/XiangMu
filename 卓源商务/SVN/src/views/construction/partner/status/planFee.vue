<template>
    <!-- <div>
        状态31
        方案已提交，请确认。
    </div> -->
    <div class='plan_review_construction_partner'>
        <StepComponent :index='index' :flag='3'></StepComponent>
        <div>
            <el-form disabled>
            <div class='div2'>
                <div class='content'>
                    <el-row>
                        <el-col :span="5"><p>项目名称</p></el-col>
                        <el-col :span="8" >
                            <el-input v-model="formData.name" placeholder="请输入内容"></el-input>
                        </el-col>
                        <el-col :span="5"><p>状态</p></el-col>
                        <el-col :span="6">
                            <el-input v-model="statusText" placeholder="请输入内容"></el-input>
                        </el-col>
                    </el-row>
                </div>
            </div>
            <div class="wordborder" >
                <p class='clickbox' v-on:click="click(1)" >施工方案</p>
                <div class='content' v-show="show1">
                    <el-row>
                        <el-col :span="5"><p>施工月次</p></el-col>
                        <el-col :span="8" >
                            <el-input v-model="formData.count" placeholder="请输入内容"></el-input>
                        </el-col>
                        <el-col :span="5"><p>拟完成时间</p></el-col>
                        <el-col :span="6">
                            <el-date-picker
                                value-format="yyyy-MM-dd"
                                v-model="formData.intendedCompleteTime"
                                type="date"
                                placeholder="选择日期">
                            </el-date-picker>
                        </el-col>
                    </el-row>
                    <el-row >
                        <el-col :span="5"><p>施工人员</p></el-col>
                        <el-col :span="8">
                            <el-input v-model="formData.builder" placeholder="请输入内容"></el-input>
                        </el-col>
                        <el-col :span="5"><p>联系方式</p></el-col>
                        <el-col :span="6">
                            <el-input v-model="formData.builderPhone" placeholder="请输入内容"></el-input>
                        </el-col>
                    </el-row>
                    <el-row >
                        <el-col :span="5"><p>施工范围</p></el-col>
                        <el-col :span="19">
                            <el-input v-model="formData.buildScope" type="textarea" :rows="3" placeholder="请输入内容"></el-input>
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
                    <el-row >
                        <el-col :span="5"><p>管理费</p></el-col>
                        <el-col :span="8">
                            <el-input v-model="formData.manageCost" placeholder="请输入内容">
                                <template slot="append">万元</template>
                            </el-input>
                        </el-col>
                    </el-row>
                </div>
            </div>
            </el-form>
        </div>
        <div class='div5'>
            <el-button @click="centerDialogVisible = true" type="primary" round>缴费</el-button>
        </div>
        <el-dialog
            title="选择支付方式"
            :visible.sync="centerDialogVisible"
            width="20%"
            center>
            <el-row style="text-align:center;">
                <img src="@/assets/alipay.png" style="vertical-align: middle;cursor:pointer" width="80" @click="alipay()"/>
            </el-row>
        </el-dialog>
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
            index:3,
            options: ProjectMode,
            options2:Industry,
            statusText:"方案已提交，请确认",
            centerDialogVisible:false,
            formData:{
                id:"",
                name:"",
                count:"",//采购次数
                intendedCompleteTime:"",//拟完成时间
                buyer:"",//采购人员
                buyerPhone:"",//采购员联系方式
                procurementScope:"",//采购范围
                manageCost:"",//管理费
                progress:""//意见
            },
            targetFile:[]
        }
    },
    methods: {
        click(index){
            if(index==1){
                this.show1 = !this.show1
            }else if(index==2){
                this.show2 = !this.show2
            }
        },
        loadData(id) {
            api.constructionPartner.findById(id).then(response => {
                console.log(response);
                this.formData.id = response.id;
                this.formData.name = response.name; //项目名称
                this.formData.count = response.count;//采购次数
                this.formData.intendedCompleteTime = response.intendedCompleteTime;//拟完成时间
                this.formData.builder = response.builder;//采购人员
                this.formData.builderPhone = response.builderPhone;//采购人员电话
                this.formData.buildScope = response.buildScope;//采购范围
                this.formData.manageCost = response.manageCost;//管理费
            }).catch(error => {
                console.log(error);
            });
        },
        loadTargetFile(){//加载经营目标预算
            loadFile('constructionPartner',this.formData.id,6,this.targetFile)
        },
        alipay(){
            api.constructionPartner.manageCostPay(this.formData.id).then(response => {
                document.write(response);
                document.close();
            }).catch(error => {
                console.log(error);
            });
        },
        wechat(){
            alert("暂未开通微信支付");
        }
    },
    mounted: function () {
        this.formData.id = this.$route.query.id; //获取路由传值
        //加载数据
        this.loadData(this.formData.id); //项目基本信息
        this.loadTargetFile();//经营目标预算附件
    }
}
</script>

<style lang='scss'>
.plan_review_construction_partner{
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