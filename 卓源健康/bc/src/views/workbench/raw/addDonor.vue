<template>
        <div >
            <div>
            <el-breadcrumb>
                <el-breadcrumb-item :to="{ path: '/workbench/raw/donorList'}">原料管理</el-breadcrumb-item>
                <el-breadcrumb-item :to="{ path: '/workbench/raw/donorList'}">供体列表</el-breadcrumb-item>
                <el-breadcrumb-item >新增供体</el-breadcrumb-item>
            </el-breadcrumb>
            </div>
            <el-card>    
            <div class="box">
                <p class='clickbox' v-on:click="click(1)" >供体信息</p>
                <div class='content' v-show="show1">
                    <el-form :model="formData" :rules="rules" ref="ruleForm">
                    <el-row>
                        <el-col :span="4"><p class="fuji"><i class="ziji">*</i>供体姓名</p></el-col>
                        <el-col :span="8">
                            <el-form-item  prop="name">
                                <el-input class="w260" v-model="formData.name"></el-input>
                            </el-form-item>
                        </el-col>
                    </el-row>
                    <el-row >
                        <el-col :span="4"><p class="fuji"><i class="ziji">*</i>供体性别</p></el-col>
                        <el-col :span="8">
                            <el-form-item  prop="sex">
                                <el-select class="w260" v-model="formData.sex" placeholder="请选择">
                                    <el-option
                                        v-for="item in optionsSex"
                                        :key="item.value"
                                        :label="item.label"
                                        :value="item.value">
                                    </el-option>
                                </el-select>
                            </el-form-item>
                        </el-col>
                        <el-col :span="4"> <p class="fuji"><i class="ziji">*</i>出生日期</p></el-col>
                        <el-col :span="8">
                            <el-form-item  prop="birthday">
                                <el-date-picker
                                    class="w260"
                                    v-model="formData.birthday"
                                    type="date"
                                    value-format="yyyy-MM-dd">
                                </el-date-picker>
                            </el-form-item>
                        </el-col>                       
                    </el-row>
                    <el-row >
                        <el-col :span="4"><p class="fuji"><i class="ziji">*</i>来源地区</p></el-col>
                        <el-col :span="8">
                            <el-form-item  prop="sourceArea">
                                <el-cascader
                                    class="w260"
                                    size="large"
                                    :options="options"
                                    v-model="selectedOptions"
                                    @change="handleChange">
                                </el-cascader>
                            </el-form-item>
                        </el-col>
                        <el-col :span="4"><p class="fuji"><i class="ziji">*</i>入组日期</p></el-col>
                        <el-col :span="8">
                            <el-form-item  prop="joinDate">
                                <el-date-picker
                                    class="w260"
                                    v-model="formData.joinDate"
                                    type="date"
                                    value-format="yyyy-MM-dd">
                                </el-date-picker>
                            </el-form-item>
                        </el-col>
                    </el-row>
                    <el-row >

                        <el-col :span="4"><p class="fuji"> <i class="ziji">*</i>最近体检日期</p></el-col>
                        <el-col :span="8">
                            <el-form-item  prop="lastExamDate">
                                <el-date-picker
                                    class="w260"
                                    v-model="formData.lastExamDate"
                                    type="date"
                                    value-format="yyyy-MM-dd">
                                </el-date-picker>
                            </el-form-item>
                        </el-col>
                        <el-col :span="4"><p class="fuji"><i class="ziji">*</i>最近16S日期</p></el-col>
                        <el-col :span="8">
                            <el-form-item  prop="sixteenDate">
                                <el-date-picker
                                    class="w260"
                                    v-model="formData.sixteenDate"
                                    type="date"
                                    value-format="yyyy-MM-dd">
                                </el-date-picker>
                            </el-form-item>
                        </el-col>
                    </el-row>
                    <el-row >
                        <el-col :span="4"><p class="fuji"><i class="ziji">*</i>体检结果</p></el-col>
                        <el-col :span="8">
                            <el-upload
                                class="upload-demo "
                                action 
                                :show-file-list="showFileFlag1"
                                list-type="text"
                                :before-upload="beforeUpload"
                                :http-request="uploadExamFileMethod" 
                                :file-list="uploadFile.examResult" 
                                :on-remove="handleRemoveExamResult">
                                <el-button size="medium" type="primary" class="w220">体检结果上传</el-button>
                                <el-progress v-if="flag1 == true" type="line" :percentage="uploadPercent1" style="margin-top:30px;"></el-progress>
                            </el-upload>
                        </el-col>
                        <el-col :span="4"><p class="fuji"><i class="ziji">*</i>16S结果</p></el-col>
                        <el-col :span="8">
                            <el-upload
                                class="upload-demo"
                                action 
                                :show-file-list="showFileFlag2"
                                list-type="text" 
                                :before-upload="beforeUpload"
                                :http-request="uploadsixteenFileMethod" 
                                :file-list="uploadFile.sixteenResult" 
                                :on-remove="handleRemoveSixteenResult">
                                <el-button size="medium" type="primary" class="w220">16S结果上传</el-button>
                                <el-progress v-if="flag2 == true" type="line" :percentage="uploadPercent2" style="margin-top:30px;"></el-progress>
                            </el-upload>
                        </el-col>

                    </el-row>
                    </el-form>
                </div>
                </div>
                    <div class="tac">
                        <el-button @click="save('ruleForm')" type="primary" round>提交</el-button>
                    </div>
            </el-card>
        </div>    
</template>

<script>
import { gender } from "@/utils/util";
import { provinceAndCityData, regionData, provinceAndCityDataPlus, regionDataPlus, CodeToText, TextToCode } from 'element-china-area-data';
import { FILE_TYPE} from "@/utils/util";
import api from '@/api/index';
export default {
    data(){
        var checkSourceArea = (rule, value, callback) =>{
            value = this.selectedOptions;
            if(value == null || value == ''){
                callback(new Error('请选择来源地区'))
            }
            callback()
        };
        return{   
            options: regionData,
            selectedOptions: [],
            optionsSex: gender,
            show1:true,
            flag1:false,
            flag2:false,
            uploadPercent1:0,
            uploadPercent2:0,
            showFileFlag1:true,
            showFileFlag2:true,
            formData:{
                name:'',//供体姓名
                sex:'',//供体性别
                birthday:'',//出生日期
                province: "", //省
                city: "", //市
                region: "", //区
                joinDate:'',//入组日期
                examResult:'',//体检结果
                lastExamDate:'',//最近体检日期
                sixTeenResult:'',//16s结果
                sixTeenDate:'',//最近16s日期
            },
            rules: {
                name: [
                    { required: true, message: '请输入供体姓名', trigger: 'blur' },
                ],
                sex: [
                    { required: true, message: '请选择供体性别', trigger: 'change' },
                ],
                birthday: [
                    { required: true, message: '请选择出生日期', trigger: 'change' },
                ],
                sourceArea: [
                    { validator:checkSourceArea,trigger: 'change' },
                ],
                joinDate: [
                    { required: true, message: '请选择入组日期', trigger: 'change' },
                ],
                lastExamDate: [
                    { required: true, message: '请选择最近体检日期', trigger: 'change' },
                ],
                sixteenDate: [
                    { required: true, message: '请选择最近16s日期', trigger: 'change' },
                ]
            },
            uploadFile: {
                //文件列表
                examResult: [],
                sixteenResult: [],
            },
            examIds: [],
            sixteenIds: [],
    }},
    methods:{
        handleChange(){
            this.formData.province = CodeToText[this.selectedOptions[0]];
            this.formData.city = CodeToText[this.selectedOptions[1]];
            this.formData.region = CodeToText[this.selectedOptions[2]];
        },
        click(index) {
            if (index == 1) {
                this.show1 = !this.show1;
            }
        },
        //新增供体提交
        save(ruleForm){
            this.formData.examResult = this.examIds.join(',')
            this.formData.sixTeenResult = this.sixteenIds.join(',')
            this.$refs[ruleForm].validate((valid) => {
            if (valid) {
                if(this.uploadFile.examResult.length == 0 && this.uploadFile.sixteenResult.length == 0){
                    this.$message('文件待上传');
                    return
                }else if(this.uploadFile.examResult.length == 0){
                    this.$message("体检文件待上传");
                    return
                }else if(this.uploadFile.sixteenResult.length == 0){
                    this.$message("16s文件待上传");
                    return
                }
                api.donator.save(this.formData).then(response =>{
                    this.$router.push('/workbench/raw/donorList');
                }).catch(error=>{
                    console.log(error)
                })
            } else {
                console.log('error submit!!');
                return false;
            }
            });
        },
        //体检结果pdf文件上传
        uploadExamFileMethod(param){
            if(this.flag1){
                this.$message("请等待当前文件上传完毕")
                return
            }
            this.showFileFlag1 = false
            this.flag1 = true;
            this.uploadPercent1 = 1;
            let timer = setInterval(()=>{
                if(this.uploadPercent1<95){
                this.uploadPercent1 += Math.ceil(Math.random()*5);
                }
            }, 700);
            let fileObject = param.file;
            let formData = new FormData();
            formData.append("file", fileObject);
            formData.append("type", FILE_TYPE.EXAM_RESULT);
            api.file.uploadFile(formData).then(response =>{
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
                this.uploadFile.examResult.push(obj);
                console.log(this.uploadFile.examResult);
                this.examIds.push(obj.id);
            }).catch((error)=>{
                console.log(error)   
            })
        },
        //文件上传大小处理
        beforeUpload(file){
            let fileSize = file.size/1024/1024 <100;
            if(!fileSize){
                this.$message("上传文件不得大于100M")
                return false
            }  
        },
        //体检结果pdf删除
        handleRemoveExamResult(file,fileList){
            let index = -1;
            for(let i in this.uploadFile.examResult){
                if(file.id==this.uploadFile.examResult[i].id){
                    index = i;
                    break;
                }
            }
            if(index!=-1){
                this.uploadFile.examResult.splice(index,1);
                this.examIds.splice(index,1);
            }
            this.deleteFile(file.id);
        },
        //16s体检结果删除
        handleRemoveSixteenResult(file,fileList){
            let index = -1;
            for(let i in this.uploadFile.sixteenResult){
                if(file.id==this.uploadFile.sixteenResult[i].id){
                    index = i;
                    break;
                }
            }
            if(index!=-1){
                this.uploadFile.sixteenResult.splice(index,1);
                this.sixteenIds.splice(index,1);
            }
            this.deleteFile(file.id);
        },
        deleteFile(id){
            api.file.deleteFile(id).then(response => {
                
            }).catch(error => {
                console.log(error);
            });
        },
        //16s体检上传
        uploadsixteenFileMethod(param){
            if(this.flag2){
                this.$message("请等待当前文件上传完毕")
                return
            }
            this.showFileFlag2 = false
            this.flag2 = true;
            this.uploadPercent2 = 1;
            let timer = setInterval(()=>{
                // alert()
                if(this.uploadPercent2<95){
                this.uploadPercent2 += Math.ceil(Math.random()*5);
                }
            }, 700);
            let fileObject = param.file;
            let formData = new FormData();
            formData.append("file", fileObject);
            formData.append("type", FILE_TYPE.SIXTEEN_RESULT);
            api.file.uploadFile(formData).then(response=>{
                clearInterval(timer)
                this.uploadPercent2 = 100;
                setTimeout(()=>{
                    this.flag2 = false;
                    this.uploadPercent2 = 0;
                    this.showFileFlag2 = true
                },700)
                let obj = new Object();
                obj.id = response.id;
                obj.name = response.showName;
                obj.url = response.url;
                this.uploadFile.sixteenResult.push(obj);
                this.sixteenIds.push(obj.id);
            }).catch((error)=>{
                console.log(error)   
            })
        }
    }
}
</script>

<style lang='scss'>
.w220{
    width: 220px;
}
.tac{
  text-align: center;
  .el-button{
    width: 114px;
    height: 50px;
  } 
}
</style>