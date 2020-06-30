<template>
    <!-- <div>
        状态6
        服务评价页面
    </div> -->
    <div class='appraise_upload_construction_partner'>
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
            </el-form>
            <div class="wordborder" >
                <p class='clickbox' v-on:click="click(1)" >服务评价</p>
                <div class='content' v-show="show1">
                    <el-row >
                        <el-col :span="5"><p>总体评价</p></el-col>
                        <el-col :span="19">
                            <el-input v-model="formData.overallEvaluation" placeholder="请输入内容"></el-input>
                        </el-col>
                    </el-row>
                    <el-row >
                        <el-col :span="5"><p>设计评价</p></el-col>
                        <el-col :span="19">
                            <el-input v-model="formData.designEvaluation" placeholder="请输入内容"></el-input>
                        </el-col>
                    </el-row>
                    <el-row >
                        <el-col :span="5"><p>响应速度</p></el-col>
                        <el-col :span="19">
                            <el-input v-model="formData.respondSpeed" placeholder="请输入内容"></el-input>
                        </el-col>
                    </el-row>
                    <el-row >
                        <el-col :span="5"><p>其他意见</p></el-col>
                        <el-col :span="19">
                            <el-input v-model="formData.otherSuggest" placeholder="请输入内容"></el-input>
                        </el-col>
                    </el-row>
                </div>
            </div>
        </div>
        <div class='div5'>
            <el-button @click="submit" type="primary" round>提交</el-button>
        </div>
    </div>
</template>

<script>
import StepComponent from '@/components/StepComponent'
import api from "@/api/index";
export default {
    components: {
        StepComponent
    },
    data() {
        return {
            statusText:"成果已确认，待评价",
            show1:true,
            index:6,
            formData:{
                id:"",
                name:"",
                overallEvaluation:"",
                designEvaluation:"",
                respondSpeed:"",
                otherSuggest:"",
                leader:sessionStorage.getItem("user"),
                userName:sessionStorage.getItem("user")
            }
            
        }
    },
    methods: {
        submit() {
            api.constructionPartner.saveConstructionAppraise(this.formData).then(response => {
                this.$router.push('/construction/partner/appraiseReview');
            }).catch(error => {
                console.log(error);
            });
        },
        click(index){
            if(index==1){
                this.show1 = !this.show1
            }
        },
        loadData(id) {
            api.constructionPartner.findById(id).then(response => {
                this.formData.name = response.name; //项目名称
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
                // this.formData.estimatedConstructionTime = response.estimatedConstructionTime;//预计采购时间
                // this.formData.otherDescription = response.otherDescription;//其他说明
            }).catch(error => {
                console.log(error);
            });
        },        
    },
    mounted: function () {
        this.formData.id = this.$route.query.id; //获取路由传值
        this.loadData(this.formData.id); //加载数据        
    }
}
</script>

<style lang='scss'>
.appraise_upload_construction_partner{
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