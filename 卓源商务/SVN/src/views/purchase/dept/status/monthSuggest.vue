<template>
    <!-- <div>
        状态40.
        修改意见已提交，待修改
    </div> -->
    <div class='month_suggest_purchase_dept'>
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
            </el-form>
            <div class="wordborder" >
                <p class='clickbox' v-on:click="click(2)">采购记录</p>
                <div class='content' v-show="show2">
                    <el-form disabled>
                        <div class="box" v-for="(item,index) in previousMonthFormData" v-bind:key="item.id" >
                            <p class='clickbox' v-on:click="click2(index)" style='margin: -10px 0 0 26px;padding: 0 9px 0 18px;'>第{{index+1}}次采购</p>
                            <div class='content' v-show="item.flag" style='width: 91%;'>
                                <el-row>
                                    <el-col :span="5"><p>采购月次</p></el-col>
                                    <el-col :span="19"><el-date-picker v-model="item.purchasingMonth" type="date" placeholder="选择日期" value-format="yyyy-MM-dd"></el-date-picker></el-col>
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
                                        <el-input  v-model="item.cost" placeholder="请输入内容"><template slot="append">万元</template></el-input>
                                    </el-col>
                                </el-row>
                            </div> 
                        </div> 
                    </el-form>
                    <el-form :model="monthFormData" :rules="monthRules" ref="monthRuleForm">
                        <div class="box">
                            <p class='clickbox' v-on:click="currentShow()" style='margin: -10px 0 0 26px;padding: 0 9px 0 18px;'>第{{count}}次采购</p>
                            <div class='content' v-show="flag" style='width: 91%;'>
                                <el-row>
                                    <el-col :span="5"><p>采购月次</p></el-col>
                                    <el-col :span="19">
                                        <el-form-item prop="purchasingMonth">
                                            <el-date-picker v-model="monthFormData.purchasingMonth" type="month" placeholder="选择日期" value-format="yyyy-MM-dd" :picker-options="pickerOptions"></el-date-picker>
                                        </el-form-item>       
                                    </el-col>
                                </el-row>
                                <el-row>
                                    <el-col :span="5"><p>本次采购清单</p></el-col>
                                    <el-col :span="19">
                                        <el-upload class="upload-demo" action :http-request="uploadMonthFileMethod" list-type="text" :file-list="fileList"
                                         :before-upload="beforeUpload"
                                         :show-file-list="showFileFlag1"
                                         :on-remove="handleRemove">
                                            <el-button size="medium" type="primary" style="width:200px;">采购清单上传</el-button>
                                            <el-progress v-if="flag1 == true" type="line" :percentage="uploadPercent1" style="margin-top:30px;"></el-progress>
                                        </el-upload>
                                    </el-col>
                                </el-row>
                                <el-row>
                                    <el-col :span="5"><p>本次采购费用</p></el-col>
                                    <el-col :span="19">
                                        <el-form-item prop="cost">
                                            <el-input  v-model="monthFormData.cost" placeholder="请输入内容"><template slot="append">万元</template></el-input>
                                        </el-form-item>   
                                    </el-col>
                                </el-row>
                            </div> 
                        </div>
                    </el-form> 
                </div>
            </div>
            <el-form disabled>
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
            </el-form>
        </div>
        <div class='div5'>
            <el-button @click="submit('monthRuleForm')" type="primary" round>提交</el-button>
        </div>
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
            showFileFlag1:true,
            uploadPercent1:0,
            flag1:false,

            downloadUrl:base.sq+"/bizPurchase/dept/download?access_token="+store.getters.token+"&fileId=",//下载路径
            show1:true,
            show2:true,
            show3:true,
            index:4,
            flag:true,
            pickerOptions: {
                disabledDate(time) {
                    return time.getTime() < Date.now() - 8.64e7;
                }
            },    
            formData:{//项目基本信息
                id:"",
                name:"",//项目名称
                buyer:"",//采购人姓名
                buyerPhone:"",//采购人联系方式
            },
            targetFile:[],//经营目标预算
            previousMonthFormData:[],//在此之前的月度采购信息
            monthFormData:{//本次采购信息
                id:"",
                purchaseId:"",//项目id
                purchasingMonth:"",//采购月次
                cost:"",//本次采购费用
                operator:sessionStorage.getItem("user"),
                userName:sessionStorage.getItem("user"),
                fileIds:""//本次采购清单附件id
            },
            monthRules: {
                purchasingMonth: [
                    { required: true, message: '请选择采购月次', trigger: 'change' }
                ],
                cost: [
                    { pattern: /^\d+$|^\d*\.\d+$/g, required: true, message: '请输入有效数字', trigger: 'blur' }
                ]
            },
            count:"",
            fileList:[],//本次采购清单文件列表
            progress:""//最新的意见
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
        onSelected(data) {
            console.log(data)
        },
        submit(ruleForm) {
            this.$refs[ruleForm].validate((valid) => {
                if (valid) {
                    let fileIdList = new Array();
                    for(let i in this.fileList){
                        fileIdList.push(this.fileList[i].id);
                    }
                    this.monthFormData.fileIds = fileIdList.join(",");
                    api.purchaseDept.saveBizPurchaseMonth(this.monthFormData).then(response => {
                        this.$router.push('/purchase/dept/monthUpdate');
                    }).catch(error => {
                        console.log(error);
                    });
                }else{
                    console.log('error submit!!');
                    return false;
                }
            });
        },
        click2(index){          
            this.previousMonthFormData[index].flag = !this.previousMonthFormData[index].flag
        },
        currentShow(){
            this.flag = !this.flag;
        },
        loadData(id) {
            api.purchaseDept.findById(id).then(response => {
                this.formData.id = response.id;
                this.formData.name = response.name; //项目名称
                this.formData.buyer = response.buyer;//采购人员
                this.formData.buyerPhone = response.buyerPhone;//采购人员电话
            }).catch(error => {
                console.log(error);
            });
        },
        loadMonthData(id){
            api.purchaseDept.findMouthListByExample(this.formData.id).then(response => {
                console.log(response);
                this.count=response.length;
                for(let i in response){
                    let monthObject = new Object();
                    let fileList = new Array();
                    if(response[i].used=="Y"){
                        monthObject.id = response[i].id;
                        monthObject.purchasingMonth = response[i].purchasingMonth;
                        monthObject.cost = response[i].cost;
                        monthObject.fileList = response[i].fileList;
                        monthObject.flag=false;//当月度已审核，默认关闭表单
                        this.previousMonthFormData.push(monthObject);
                    }else{
                        this.monthFormData.id = response[i].id;//当前审核的月度id
                        this.monthFormData.purchasingMonth = response[i].purchasingMonth;//月次
                        this.monthFormData.cost = response[i].cost;//花费
                        for(let j in response[i].fileList){
                            let fileObject = new Object();
                            fileObject.id = response[i].fileList[j].id;
                            fileObject.name = response[i].fileList[j].showName;
                            fileObject.url = response[i].fileList[j].url;
                            this.fileList.push(fileObject);//文件列表
                        }
                        this.findBizPurchaseProgressByExample(this.monthFormData.id);//加载本月度最新意见
                    }
                }
            }).catch(error => {
                    console.log(error);
            });
        },
        beforeUpload(file){
        let fileSize = file.size/1024/1024 <100;
            if(!fileSize){
                this.$message("上传文件不得大于100M")
                return false
            }  
        },
        uploadMonthFileMethod(param) {//上传月度文件
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
            let monthFormData = new FormData();
            monthFormData.append("file", fileObject);
            monthFormData.append("projectId", this.formData.id);
            monthFormData.append("fileType",4);//月度采购清单文件
            monthFormData.append("operator", this.monthFormData.operator);
            monthFormData.append("userName", this.monthFormData.userName);
            api.purchaseDept.uploadMonthFile(monthFormData).then(response => {
                clearInterval(timer)
                this.uploadPercent1 = 100;
                setTimeout(()=>{
                    this.flag1 = false;
                    this.uploadPercent1 = 0;
                    this.showFileFlag1 = true
                },700)

                let fileObject = new Object();
                fileObject.id = response.id;
                fileObject.name = response.showName;
                fileObject.url = response.url;
                this.fileList.push(fileObject);
            }).catch(error => {
                console.log(error);
            });
        },
        handleRemove(file,fileList){
            let index = -1;
            for(let i in this.fileList){
                if(file.id==this.fileList[i].id){
                    index = i;
                    break;
                }
            }
            if(index!=-1){
                this.fileList.splice(index,1);
            }
            api.purchaseDept.deleteFile(file.id).then(response => {
                console.log(response);
            }).catch(error => {
                console.log(error);
            });
        },
        findBizPurchaseProgressByExample(monthId){
            api.purchaseDept.findBizPurchaseProgressByExampleMonth(this.formData.id,monthId,40).then(response => {
                this.progress = response.progress;
            }).catch(error => {
                console.log(error);
            });
        },
        loadTargetFile(){//加载上传的经营目标预算
            api.purchaseDept.loadFile(this.formData.id,6).then(response =>{
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
        }
    },
    mounted: function () {
        this.formData.id = this.$route.query.id; //获取路由传值
        this.monthFormData.purchaseId = this.$route.query.id;//写入项目id用于月度表单提交
        //加载数据
        this.loadData(this.formData.id); //项目基本信息
        this.loadMonthData(this.formData.id);//加载月度信息
        this.loadTargetFile();//加载经营目标预算
    },
}
</script>

<style lang='scss'>
.month_suggest_purchase_dept{
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