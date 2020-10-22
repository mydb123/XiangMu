<template>
    <!-- <div>
        状态4
        缴费。
    </div> -->
    <div class='plan_review_design_partner'>
        <DesignStepComponent :index='index'></DesignStepComponent>
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
                <p class='clickbox' v-on:click="click(1)" >设计方案</p>
                <div class='content' v-show="show1">
                    <el-row>
                        <el-col :span="5"><p>设计周期</p></el-col>
                        <el-col :span="8" >
                            <el-input  v-model="formData.designCycle" placeholder="请输入内容"></el-input>
                        </el-col>
                        <el-col :span="5"><p>拟交付时间</p></el-col>
                        <el-col :span="6">
                            <el-date-picker
                                v-model="formData.estimateDeliverTime"
                                type="date"
                                placeholder="选择日期">
                            </el-date-picker>
                        </el-col>
                    </el-row>
                    <el-row >
                        <el-col :span="5"><p>主设计师</p></el-col>
                        <el-col :span="8">
                            <el-input  v-model="formData.designerName" placeholder="请输入内容"></el-input>
                        </el-col>
                        <el-col :span="5"><p>联系方式</p></el-col>
                        <el-col :span="6">
                            <el-input  v-model="formData.phone" placeholder="请输入内容"></el-input>
                        </el-col>
                    </el-row>
                    <el-row >
                        <el-col :span="5"><p>设计范围</p></el-col>
                        <el-col :span="19">
                            <el-input  v-model="formData.designScope" placeholder="请输入内容"></el-input>
                        </el-col>
                    </el-row>
                    <el-row >
                        <el-col :span="5"><p>交付成果</p></el-col>
                        <el-col :span="19">
                            <el-input  v-model="formData.designResult" placeholder="请输入内容"></el-input>
                        </el-col>
                    </el-row>
                    <el-row >
                        <el-col :span="5"><p>设计费用</p></el-col>
                        <el-col :span="8">
                            <el-input  v-model="formData.designCost" placeholder="请输入内容">
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
import DesignStepComponent from '@/components/DesignStepComponent'
import {getStatusDesignPartnerRouter} from '@/utils/statusDesignRouter';
import {Industry,ProjectMode} from '@/utils/util'
import api from '@/api/index'
export default {
    components: {
        DesignStepComponent
    },
    data() {
        return {
            show1:true,
            show2:true,
            index:3,
            statusText:"方案已提交，请确认",
            centerDialogVisible:false,
            formData:{
                id:"",//项目主键
                name:"",//项目名称
                designCycle:"",//设计周期
                estimateDeliverTime:"",//拟交付时间
                designerName:"",//主设计师
                phone:"",//联系方式
                designScope:"",//设计范围
                designResult:"",//交付成果
                designCost:"",//设计费用
                operator:sessionStorage.getItem("user"),//操作人
                userName:sessionStorage.getItem("user")//日志记录
            },
            rules: {
                progress: [
                  {required: true, message: "拒绝请输入拒绝原因", trigger: "blur"}
              ]
            }
        };
    },
    methods: {
        click(index){
            if(index==1){
                this.show1 = !this.show1
            }else if(index==2){
                this.show2 = !this.show2
            }
        },
        onSelected(data) {
            console.log(data)
        },
        loadData(id) {
            api.designPartner.findById(id).then(response => {
                console.log(response);
                this.formData.id = response.id;
                this.formData.name = response.name; //项目名称
                this.formData.designCycle = response.designCycle;//设计周期
                this.formData.estimateDeliverTime = response.estimateDeliverTime;//拟交付时间
                this.formData.designerName = response.designerName;//主设计师
                this.formData.phone = response.phone;//联系方式
                this.formData.designScope = response.designScope;//设计范围
                this.formData.designResult = response.designResult;//交付成果
                this.formData.designCost = response.designCost;//设计费用
            }).catch(error => {
                console.log(error);
            });
        },
        alipay(){
            api.designPartner.manageDesignPay(this.formData.id).then(response => {
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
    }
}
</script>

<style lang='scss'>
.plan_review_design_partner{
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