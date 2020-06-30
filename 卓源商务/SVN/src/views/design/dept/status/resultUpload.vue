<template>
    <!-- <div>
        状态5.
        成果待提交
    </div> -->
    <div class='result_upload_design_dept'>
        <DesignStepComponent :index='index'></DesignStepComponent>
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
            <el-form disabled>
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
                            <el-input  v-model="formData.designScope" placeholder="请输入内容"></el-input>
                        </el-col>
                    </el-row>
                </div>
            </div>
            </el-form>
            <div class="wordborder" >
                <p class='clickbox' v-on:click="click(2)">交付成果</p>
                <div class='content' v-show="show2">
                    <el-row >
                        <el-col :span="5"><p>最终成果</p></el-col>
                        <el-col :span="19">
                            <el-upload
                                class="upload-demo"
                                action
                                :http-request="uploadFileMethod"
                                :before-upload="beforeUpload"
                                :show-file-list="showFileFlag1"
                                list-type="text" :file-list="resultFile" :on-remove="handleRemove">
                                <el-button size="medium" type="primary" style="width:200px;">成果上传</el-button>
                                <el-progress v-if="flag1 == true" type="line" :percentage="uploadPercent1" style="margin-top:30px;"></el-progress>
                            </el-upload>
                        </el-col>
                    </el-row>
                </div>
            </div>
        </div>
        <div class='div5'>
            <el-button @click="submit('formData')" type="primary" round>提交</el-button>
        </div>
    </div>
</template>

<script>
import DesignStepComponent from "@/components/DesignStepComponent";
import api from "@/api/index";
import {getStatusDesignDeptRouter} from '@/utils/statusDesignRouter';
export default {
  components: {
    DesignStepComponent
  },
  data() {
    return {
      showFileFlag1:true,
      uploadPercent1:0,
      flag1:false,

      readonly:true,
      disabled:true,
      show1: true,
      show2: true,
      show3: true,
      index: 5,
      statusText: "项目设计中,成果待提交",
      formData: {
        id: "", //项目主键
        name: "", //项目名称
        designCycle: "", //设计周期
        estimateDeliverTime: "", //拟交付时间
        designerName: "", //主设计师
        phone: "", //联系方式
        designScope: "", //设计范围
        designResult: "", //交付成果
        status:50,//提交成果后的状态
        operator: sessionStorage.getItem("user"), //操作人
        userName: sessionStorage.getItem("user") //日志记录
      },
      resultFile:[],//成果文件,
    };
  },
  methods: {
    onSelected(data) {
      console.log(data);
    },
    click(index) {
      if (index == 1) {
        this.show1 = !this.show1;
      } else if (index == 2) {
        this.show2 = !this.show2;
      } else if (index == 3) {
        this.show3 = !this.show3;
      }
    },
    submit() {
          api.designDept.saveDesignResult(this.formData).then(response => {
            if (!response) {
              this.$message.success("提交成功");
              this.$router.push(getStatusDesignDeptRouter(50));
            } else {
              this.$message.error("提交失败");
            }
          });
    },
    loadData(id) {
      api.designDept.findById(id).then(response => {
          this.formData.id = response.id;
          this.formData.name = response.name; //项目名称
                this.formData.id = response.id;
                this.formData.name = response.name; //项目名称
                this.formData.designCycle = response.designCycle;//设计周期
                this.formData.estimateDeliverTime = response.estimateDeliverTime;//拟交付时间
                this.formData.designerName = response.designerName;//主设计师
                this.formData.phone = response.phone;//联系方式
                this.formData.designScope = response.designScope;//设计范围
                this.formData.designResult = response.designResult;//交付成果
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
            formData.append("fileType",4);//最终成果
            formData.append("operator", this.formData.operator);
            formData.append("userName", this.formData.userName);
            api.designDept.uploadFile(formData).then(response => {
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
                this.resultFile.push(obj);
            }).catch(error => {
                console.log(error);
            });
    },
    loadResultFile(){//加载上传的成果附件
        api.designDept.loadFile(this.formData.id,4).then(response =>{
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
    },
    handleRemove(file,fileList){
        let index = -1;
        for(let i in this.resultFile){
            if(file.id==this.resultFile[i].id){
                index = i;
                break;
            }
        }
        if(index!=-1){
            this.resultFile.splice(index,1);
        }
        this.deleteFile(file.id);
    }        
  },
  deleteFile(fileId){
        api.designPartner.deleteFile(fileId).then(response => {
            console.log(response);
        }).catch(error => {
            console.log(error);
        });
  },
  mounted: function() {
    // console.info(Industry)
    this.formData.id = this.$route.query.id; //获取路由传值
    //加载数据
    this.loadData(this.formData.id); //项目基本信息
    this.loadResultFile();//加载文件
  }
};
</script>

<style lang='scss'>
.result_upload_design_dept {
  margin: 10px auto;
  border: 1px solid #e7e8ed;
  .div2 {
    position: relative;
    margin: 25px;
    min-height: 20px;
    line-height: 40px;
    .content {
      width: 80%;
      margin: 35px;
      margin-left: 50px;
      p {
        padding: 0px 5px;
        margin: 0px 10px;
      }
    }
  }
  .div5 {
    text-align: center;
    margin-bottom: 20px;
  }
}
</style>