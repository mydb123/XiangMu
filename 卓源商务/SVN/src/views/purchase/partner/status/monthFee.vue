<template>
     <div class='month_fee_purchase_partner'>
        <StepComponent :index='index'></StepComponent>
        <div>
            <el-form disabled>
            <div class="wordborder" >
                <p class='clickbox' v-on:click="click(1)">项目信息</p>
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
                            <el-input  v-model="formData.buyer" placeholder="请输入内容"></el-input>
                        </el-col>
                        <el-col :span="5"><p>联系方式</p></el-col>
                        <el-col :span="6">
                            <el-input  v-model="formData.buyerPhone" placeholder="请输入内容"></el-input>
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
                <p class='clickbox' v-on:click="click(2)">采购记录</p>
                <div class='content' v-show="show2">

                    <div class="box" v-for="(item,index) in monthFormData" v-bind:key="item.id" >
                        <p class='clickbox' v-on:click="click2(index)" style='margin: -10px 0 0 26px;padding: 0 9px 0 18px;'>第{{index+1}}次采购</p>
                        <div class='content' v-show="item.flag" style='width: 91%;'>
                            <el-row>
                                <el-col :span="5"><p>采购月次</p></el-col>
                                <el-col :span="19"><el-date-picker v-model="item.purchasingMonth" type="month" placeholder="选择日期" value-format="yyyy-MM-dd"></el-date-picker></el-col>
                            </el-row>
                            <el-row>
                                <el-col :span="5"><p>本次采购清单</p></el-col>
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
export default {
    components: {
        StepComponent
    },
    data() {
        return {
            downloadUrl:base.sq+"/bizPurchase/partner/download?access_token="+store.getters.token+"&fileId=",//下载路径
            show1:true,
            show2:true,
            index:4,
            centerDialogVisible:false,
            formData:{
                id:"",
                name:"",
                buyer:"",//采购人姓名
                buyerPhone:"",//采购人联系方式
            },
            targetFile:[],
            monthFormData:[],//月度
            monthId:"",//月度id
            progress:""//意见
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
        click2(index){          
            this.monthFormData[index].flag = !this.monthFormData[index].flag;
        },
        loadData(id) {
            api.purchasePartner.findById(id).then(response => {
                this.formData.id = response.id;
                this.formData.name = response.name; //项目名称
                this.formData.buyer = response.buyer;//采购人员
                this.formData.buyerPhone = response.buyerPhone;//采购人员电话
            }).catch(error => {
                console.log(error);
            });
        },
        loadMonthData(id){
            api.purchasePartner.findMouthListByExample(this.formData.id).then(response => {
                for(let i in response){
                    let monthObject = new Object();
                    let fileList = new Array();
                    monthObject.id = response[i].id;
                    monthObject.purchasingMonth = response[i].purchasingMonth;
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
            }).catch(error => {
                console.log(error);
            });
        },
        loadTargetFile(){//加载上传的成果附件
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
        alipay(){
            api.purchasePartner.monthFeePay(this.monthId).then(response => {
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
        this.loadMonthData(this.formData.id);//月度采购信息
        //加载经营目标预算文件
        this.loadTargetFile();        
    }
}
</script>
<style lang='scss'>
.month_fee_purchase_partner{
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