<template>
    <!-- <div>
        状态3.
        清单已确认，方案编制中.
    </div> -->
    <div class='plan_upload_purchase_dept'>
        <StepComponent :index='index'></StepComponent>
        <div>
            <el-form disabled>
            <div class='div2'>
                <div class='content'>
                    <el-row>
                        <el-col :span="5"><p>项目名称</p></el-col>
                        <el-col :span="8" >
                            <el-input v-model="formData.name" placeholder="请输入内容" :readonly="readonly"></el-input>
                        </el-col>
                        <el-col :span="5"><p>状态</p></el-col>
                        <el-col :span="6">
                            <el-input v-model="statusText" placeholder="请输入内容" :readonly="readonly"></el-input>
                        </el-col>
                    </el-row>
                </div>
            </div>
            </el-form>
            <el-form :model="formData" :rules="rules" ref="ruleForm">
                <div class="wordborder" >
                    <p class='clickbox' v-on:click="click(1)" >采购方案</p>
                    <div class='content' v-show="show1">
                        <el-row>
                            <el-col :span="5"><p>采购月次</p></el-col>
                            <el-col :span="8" >
                                <el-form-item prop="count">
                                    <el-input  v-model.number="formData.count" placeholder="请输入内容"></el-input>
                                </el-form-item> 
                            </el-col>
                            <el-col :span="5"><p>拟完成时间</p></el-col>
                            <el-col :span="6">
                                <el-form-item prop="intendedCompleteTime">
                                    <el-date-picker
                                        v-model="formData.intendedCompleteTime"
                                        type="date"
                                        placeholder="选择日期" value-format="yyyy-MM-dd" :picker-options="pickerOptions">
                                    </el-date-picker>
                                </el-form-item>     
                            </el-col>
                        </el-row>
                        <el-row >
                            <el-col :span="5"><p>采购人员</p></el-col>
                            <el-col :span="8">
                                <el-form-item prop="buyer">
                                    <el-input  v-model="formData.buyer" placeholder="请输入内容"></el-input>
                                </el-form-item>         
                            </el-col>
                            <el-col :span="5"><p>联系方式</p></el-col>
                            <el-col :span="6">
                                <el-form-item prop="buyerPhone">
                                    <el-input  v-model.number="formData.buyerPhone" placeholder="请输入内容"></el-input>
                                </el-form-item>    
                            </el-col>
                        </el-row>
                        <el-row >
                            <el-col :span="5"><p>采购范围</p></el-col>
                            <el-col :span="19">
                                <el-form-item prop="procurementScope">
                                    <el-input  v-model="formData.procurementScope" placeholder="请输入内容"></el-input>
                                </el-form-item>      
                            </el-col>
                        </el-row>
                        <el-row >
                            <el-col :span="5"><p>经营目标预算</p></el-col>
                            <el-col :span="19">
                                <el-upload
                                class="upload-demo"
                                action
                                :http-request="uploadFileMethod"
                                :before-upload="beforeUpload"
                                :show-file-list="showFileFlag1"
                                list-type="text" :file-list="targetFile" :on-remove="handleRemove"
                            >
                                <el-button size="medium" type="primary" style="width:200px;">经营目标预算</el-button>
                                <el-progress v-if="flag1 == true" type="line" :percentage="uploadPercent1" style="margin-top:30px;"></el-progress>
                                </el-upload>
                            </el-col>
                        </el-row> 
                        <el-row >
                            <el-col :span="5"><p>管理费</p></el-col>
                            <el-col :span="8">
                                <el-form-item prop="manageCost">
                                <el-input  v-model="formData.manageCost" placeholder="请输入内容">
                                    <template slot="append">万元</template>
                                </el-input>
                                </el-form-item>   
                            </el-col>
                        </el-row>
                    </div>
                </div>
            </el-form>
        </div>
        <div class='div5'>
            <el-button @click="submit('ruleForm')" type="primary" round>提交</el-button>
        </div>
    </div>
</template>

<script>
import StepComponent from '@/components/StepComponent'
import {Industry,ProjectMode} from '@/utils/util'
import api from '@/api/index'
export default {
    components: {
        StepComponent
    },
    data() {
        return {
            showFileFlag1:true,
            uploadPercent1:0,
            flag1:false,

            show1:true,
            index:3,
            options: ProjectMode,
            options2:Industry,
            readonly:true,
            statusText:"方案编制中",
            pickerOptions: {
                disabledDate(time) {
                    return time.getTime() < Date.now() - 8.64e7;
                }
            },  
            formData:{
                id:"",//项目主键
                name:"",//项目名称
                count:"",//采购次数
                intendedCompleteTime:"",//拟完成时间
                buyer:"",//采购人员
                buyerPhone:"",//采购员联系方式
                procurementScope:"",//采购范围
                manageCost:"",//管理费
                status:31,//提交表单后的状态
                operator:sessionStorage.getItem("user"),//操作人
                userName:sessionStorage.getItem("user")//日志记录
            },
            targetFile:[],//经营目标预算文件
            rules:{
                count: [
                    { type: 'number', required: true, message: '请输入采购月次', trigger: 'blur' }
                ],
                intendedCompleteTime: [
                    { required: true, message: '请选择拟完成时间', trigger: 'change' }
                ],
                buyer: [
                    { required: true, message: '请输入采购人姓名', trigger: 'blur' }
                ],
                buyerPhone: [
                    { required: true, pattern: /^1[345789]\d{9}$/, message: '请输入采购人正确的联系方式', trigger: 'blur' }
                ],
                procurementScope: [
                    {  required: true, message: '请输入采购范围', trigger: 'blur' }
                ],
                manageCost : [
                    { pattern: /^\d+$|^\d*\.\d+$/g , required: true, message: '请输入合法数字', trigger: 'blur' }
                ]      
            }
        }
    },
    methods: {
        beforeUpload(file){
        let fileSize = file.size/1024/1024 <100;
            if(!fileSize){
                this.$message("上传文件不得大于100M")
                return false
            }  
        },
        uploadFileMethod(param) {
            if(this.flag1){
                this.$message("请等待当前文件上传完毕")
                return
            }
            this.showFileFlag1 = false
            this.flag1 = true;
            this.uploadPercent1 = 1;
            let timer = setInterval(()=>{
                // alert()
                if(this.uploadPercent1<95){
                this.uploadPercent1 += Math.ceil(Math.random()*5);
                }
            }, 700);

            let fileObject = param.file;
            let formData = new FormData();
            formData.append("file", fileObject);
            formData.append("id", this.formData.id);
            formData.append("fileType",6);//目标经营预算
            formData.append("operator", this.formData.operator);
            formData.append("userName", this.formData.userName);
            api.purchaseDept.uploadFile(formData).then(response => {
                clearInterval(timer)
                this.uploadPercent1 = 100;
                setTimeout(()=>{
                    this.flag1 = false;
                    this.uploadPercent1 = 0;
                    this.showFileFlag1 = true
                },700)
                
                let obj = new Object();
                obj.id = response.id;
                obj.name = response.showName;
                obj.url = response.url;
                this.targetFile.push(obj);
            }).catch(error => {
                console.log(error);
            });
        },
        loadTargetFile(){//加载上传的经营目标预算附件
            api.purchaseDept.loadFile(this.formData.id,6).then(response =>{
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
        handleRemove(file,fileList){
            let index = -1;
            for(let i in this.targetFile){
                if(file.id==this.targetFile[i].id){
                    index = i;
                    break;
                }
            }
            if(index!=-1){
                this.targetFile.splice(index,1);
            }
            api.purchaseDept.deleteFile(file.id).then(response => {
                //console.log(response);
            }).catch(error => {
                console.log(error);
            });
        },  
        click(index){
            if(index==1){
                this.show1 = !this.show1
            }
        },
        onSelected(data) {
            console.log(data)
        },
        submit(ruleForm) {
            this.$refs[ruleForm].validate((valid) => {
                if (valid) {
                    api.purchaseDept.savePurchasePlan(this.formData).then(response => {
                        this.$router.push('/purchase/dept/planReview');
                    }).catch(error => {
                        console.log(error);
                    });               
                } else {
                    console.log('error submit!!');
                    return false;
                }
            });
        },
        loadData(id) {
            api.purchaseDept.findById(id).then(response => {
                this.formData.id = response.id;
                this.formData.name = response.name; //项目名称
                // this.formData.accountRequire = response.accountRequire;//账期要求
                // this.formData.arrivalRequire = response.arrivalRequire;//到货要求
                // this.formData.otherRequire = response.otherRequire;//其他要求
                // this.formData.leader = response.leader;//项目负责人
                // this.formData.submitDate = response.submitDate;//创建日期
                // this.formData.industry = response.industry;//行业
                // this.formData.province = response.province//省
                // this.formData.city = response.city;//市
                // this.formData.region = response.region;//区
                // this.formData.buildingAddr = response.buildingAddr;//建筑地址
                // this.formData.scale = response.scale;//项目规模
                // this.formData.buildingAddr = response.buildingAddr;//项目地址
                //采购信息
                // this.formData.projectMode = response.projectMode;//项目模式
                // this.formData.acquisitionStage = response.acquisitionStage;//采购阶段
                // this.formData.purchasingTarget = response.purchasingTarget;//采购目标
                // this.formData.estimatedPurchaseTime = response.estimatedPurchaseTime;//预计采购时间
                // this.formData.otherDescription = response.otherDescription;//其他说明
            }).catch(error => {
                console.log(error);
            });
        }
    },
    mounted: function () {
        this.formData.id = this.$route.query.id; //获取路由传值
        //加载数据
        this.loadData(this.formData.id); //项目基本信息
        this.loadTargetFile();//经营目标预算
    },
}
</script>

<style lang='scss'>
.plan_upload_purchase_dept{
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