<template>
    <!-- <div>
        状态21.
        上传清单待确认页面
    </div> -->
    <div class='menu_review_purchase_dept'>
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
            <div class="wordborder" >
                <p class='clickbox' v-on:click="click(1)">清单信息</p>
                <div class='content' v-show="show1">
                    <el-row >
                        <el-col :span="5"><p>电子版图纸</p></el-col>
                        <el-col :span="17">
                            <el-card class="box-card">
                            <div v-for="fileItem in uploadFile.electronic" :key="fileItem.id" class="text item">
                                <el-link type="primary" :href="downloadUrl+fileItem.id">{{fileItem.showName }}</el-link>
                            </div>
                            </el-card>
                        </el-col>
                    </el-row>
                    <el-row >
                        <el-col :span="5"><p>智能化图纸</p></el-col>
                        <el-col :span="17">
                            <el-card class="box-card">
                            <div v-for="fileItem in uploadFile.intelligent" :key="fileItem.id" class="text item">
                                <el-link type="primary" :href="downloadUrl+fileItem.id">{{fileItem.showName }}</el-link>
                            </div>
                            </el-card>
                        </el-col>
                    </el-row>
                    <el-row >
                        <el-col :span="5"><p>装饰效果图</p></el-col>
                        <el-col :span="17">
                            <el-card class="box-card">
                            <div v-for="fileItem in uploadFile.decoration" :key="fileItem.id" class="text item">
                                <el-link type="primary" :href="downloadUrl+fileItem.id">{{fileItem.showName }}</el-link>
                            </div>
                            </el-card>
                        </el-col>
                    </el-row>
                    <el-row >
                        <el-col :span="5"><p>采购清单</p></el-col>
                        <el-col :span="17">
                            <el-card class="box-card">
                            <div v-for="fileItem in uploadFile.list" :key="fileItem.id" class="text item">
                                <el-link type="primary" :href="downloadUrl+fileItem.id">{{fileItem.showName }}</el-link>
                            </div>
                            </el-card>
                        </el-col>
                    </el-row>
                </div>
            </div>
            <div class="wordborder" >
                <p class='clickbox' v-on:click="click(1)">采购需求</p>
                <div class='content' v-show="show2">
                    <el-row>
                        <el-col :span="5"><p>账期要求</p></el-col>
                        <el-col :span="19" >
                            <el-input  v-model="formData.accountRequire" placeholder="请输入内容"></el-input>
                        </el-col>
                    </el-row>
                    <el-row>
                        <el-col :span="5"><p>到货要求</p></el-col>
                        <el-col :span="19" >
                            <el-input  v-model="formData.arrivalRequire" placeholder="请输入内容"></el-input>
                        </el-col>
                    </el-row>
                    <el-row>
                        <el-col :span="5"><p>其他要求</p></el-col>
                        <el-col :span="19" >
                            <el-input  v-model="formData.otherRequire" placeholder="请输入内容"></el-input>
                        </el-col>
                    </el-row>
                </div>
            </div>
            </el-form>
        </div>
        <div class='div5'>
            <el-button @click="submit" type="primary" round>编制方案</el-button>
        </div>
    </div>
</template>

<script>
import store from '@/store/index'
import base from '@/api/base'
import StepComponent from '@/components/StepComponent'
import api from '@/api/index'
export default {
  components: {
      StepComponent
  },
  data() {
    return {
        downloadUrl:base.sq+"/bizPurchase/dept/download?access_token="+store.getters.token+"&fileId=",//下载路径
        readonly:true,
        statusText:"方案确认中",
        index:2,
        obj: '',
        show1:true,
        show2:true,
        uploadFile:{
            electronic:[],
            intelligent:[],
            decoration:[],
            list:[]
        },
        formData:{
            id:"",
            name:"",
            accountRequire: "", //账期要求
            arrivalRequire: "", //到货要求
            otherRequire: "" //其他要求
        }
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
    submit() {
        api.purchaseDept.updateStatus(this.formData.id,3).then(response => {
            this.$router.push({path:'/purchase/dept/planUpload',query:{id:this.formData.id}});
        }).catch(error =>{
            console.log(error);
        });
    },
    loadData(id) {
        api.purchaseDept.findById(id).then(response => {
            this.formData.name = response.name; //项目名称
            this.formData.accountRequire = response.accountRequire;//账期要求
            this.formData.arrivalRequire = response.arrivalRequire;//到货要求
            this.formData.otherRequire = response.otherRequire;//其他要求
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
    },
    loadFileElectronic(){//电子版图纸附件
        api.purchaseDept.loadFile(this.formData.id,0).then(response =>{
            this.uploadFile.electronic = response;
        }).catch(error =>{
            console.log(error);
        });
    },
    loadFileIntelligent(){//智能化图纸附近
        api.purchaseDept.loadFile(this.formData.id,1).then(response =>{
            this.uploadFile.intelligent = response;
        }).catch(error =>{
            console.log(error);
        });
    },
    loadFileDecoration(){//装饰化图纸
        api.purchaseDept.loadFile(this.formData.id,2).then(response =>{
            this.uploadFile.decoration = response;
        }).catch(error =>{
            console.log(error);
        });
    },
    loadFileList(){//采购清单
        api.purchaseDept.loadFile(this.formData.id,3).then(response =>{
            this.uploadFile.list = response;
        }).catch(error =>{
            console.log(error);
        });
    }
  },
  mounted: function () {
    this.formData.id = this.$route.query.id; //获取路由传值
    //加载数据
    this.loadData(this.formData.id); //项目基本信息
    this.loadFileElectronic();
    this.loadFileIntelligent();
    this.loadFileDecoration();
    this.loadFileList();
  },
}
</script>

<style lang='scss'>
.menu_review_purchase_dept{
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
.text {
    font-size: 14px;
}
</style>