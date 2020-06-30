<template>
    <!-- <div>
        状态51.
        成果已提交，请确认
    </div> -->
    <div class='result_review_purchase_partner'>
        <StepComponent :index='index'></StepComponent>
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
                <p class='clickbox' v-on:click="click(1)" >采购方案</p>
                <div class='content' v-show="show1">
                    <el-row>
                        <el-col :span="5"><p>采购月次</p></el-col>
                        <el-col :span="8" >
                            <el-input  v-model="formData.count" placeholder="请输入内容"></el-input>
                        </el-col>
                        <el-col :span="5"><p>拟完成时间</p></el-col>
                        <el-col :span="6">
                            <el-input  v-model="formData.intendedCompleteTime" placeholder="请输入内容"></el-input>
                        </el-col>
                    </el-row>
                    <el-row >
                        <el-col :span="5"><p>采购人员</p></el-col>
                        <el-col :span="8">
                            <el-input  v-model="formData.buyer" placeholder="请输入内容"></el-input>
                        </el-col>
                        <el-col :span="5"><p>联系方式</p></el-col>
                        <el-col :span="6">
                            <el-input  v-model="formData.buyerPhone" placeholder="请输入内容"></el-input>
                        </el-col>
                    </el-row>
                    <el-row >
                        <el-col :span="5"><p>采购范围</p></el-col>
                        <el-col :span="19">
                            <el-input  v-model="formData.procurementScope" placeholder="请输入内容"></el-input>
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
                <p class='clickbox' v-on:click="click(2)">交付成果</p>
                <div class='content' v-show="show2">
                    <el-row >
                        <el-col :span="5"><p>内容</p></el-col>
                        <el-col :span="19">
                            <div v-for="item in resultFile" :key="item.id" class="text item">
                                <el-link type="primary" :href="downloadUrl+item.id">{{item.name}}</el-link>
                            </div>                            
                        </el-col>
                    </el-row>
                </div>
            </div>
            </el-form>
            <div class="wordborder" >
                <p class='clickbox' v-on:click="click(3)">修改意见</p>
                <div class='content' v-show="show3">
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
import api from "@/api/index";
export default {
    components: {
        StepComponent
    },
    data() {
        return {
            downloadUrl:base.sq+"/bizPurchase/partner/download?access_token="+store.getters.token+"&fileId=",//下载路径            
            show1:true,
            show2:true,
            show3:true,
            index:5,
            statusText:"成果待确认",
            formData:{
                id:"",
                name:"",
                count:"",
                intendedCompleteTime:"",
                buyer:"",
                buyerPhone:"",
                procurementScope:"",
                operator:sessionStorage.getItem("user"),
                userName:sessionStorage.getItem("user")
            },
            targetFile:[],//经营目标预算附件
            resultFile:[],//成果附件
            progress:""//意见
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
            }
        },
        refuse() {
            api.purchasePartner.updateStatusAndProgress(this.formData.id,50,this.progress).then(response => {
                this.$router.push('/purchase/partner/resultSuggest');
            }).catch(error => {
                console.log(error);
            });
        },
        accept() {
            api.purchasePartner.updateStatus(this.formData.id,6).then(response => {                
                this.$router.push({path:'/purchase/partner/appraiseUpload',query:{id:this.formData.id}});
            }).catch(error => {
                console.log(error);
            });
        },
        loadData(id) {
            api.purchasePartner.findById(id).then(response => {
                this.formData.name = response.name; //项目名称
                this.formData.count = response.count;//采购次数
                this.formData.intendedCompleteTime = response.intendedCompleteTime;//拟完成时间
                this.formData.buyer = response.buyer;//采购人
                this.formData.buyerPhone = response.buyerPhone;//联系方式
                this.formData.procurementScope = response.procurementScope;//采购范围
            }).catch(error => {
                console.log(error);
            });
        },      
        loadTargetFile(){//加载上传的经营目标预算
            api.purchasePartner.loadFile(this.formData.id,6).then(response =>{
                console.log(response);
                response.forEach(element => {
                    let obj = new Object();
                    obj.id = element.id;
                    obj.name = element.showName;
                    obj.url = element.url;
                    this.targetFile.push(obj);
                });
            }).catch(error =>{
                console.log(error);
            });
        },  
        loadResultFile(){//加载上传的成果附件
            api.purchasePartner.loadFile(this.formData.id,5).then(response =>{
                console.log(response);
                response.forEach(element => {
                    let obj = new Object();
                    obj.id = element.id;
                    obj.name = element.showName;
                    obj.url = element.url;
                    this.resultFile.push(obj);
                });
            }).catch(error =>{
                console.log(error);
            });
        }
    },
    mounted: function () {
        this.formData.id = this.$route.query.id; //获取路由传值
        this.loadData(this.formData.id); //加载数据
        this.loadTargetFile();//加载经营目标预算附件       
        this.loadResultFile();//加载文件        
    },
}
</script>

<style lang='scss'>
.result_review_purchase_partner{
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