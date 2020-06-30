<template>
    <!-- <div>
        状态6.
        成果已确认，请评价
    </div> -->
    <div class='appraise_upload_design_partner'>
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
            <div class="wordborder" >
                <p class='clickbox' v-on:click="click(1)" >服务评价</p>
                <div class='content' v-show="show1">
                    <el-row>
                        <el-col :span="5"><p>总体评价</p></el-col>
                        <el-col :span="8" >
                            <!-- <el-input  v-model="formData.overallEvaluation" placeholder="请输入内容"></el-input> -->
                            <el-input  v-model="formData.overallEvaluation" placeholder="请输入内容"></el-input>
                        </el-col>
                    </el-row>
                    <el-row >
                        <el-col :span="5"><p>设计评价</p></el-col>
                        <el-col :span="8">
                            <el-input  v-model="formData.designEvaluation" placeholder="请输入内容"></el-input>
                        </el-col>
                    </el-row>
                    <el-row >
                        <el-col :span="5"><p>响应速度</p></el-col>
                        <el-col :span="19">
                            <el-input  v-model="formData.respondSpeed" placeholder="请输入内容"></el-input>
                        </el-col>
                    </el-row>
                    <el-row >
                        <el-col :span="5"><p>其他意见</p></el-col>
                        <el-col :span="19">
                            <el-input  v-model="formData.otherSuggest" placeholder="请输入内容"></el-input>
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
import DesignStepComponent from '@/components/DesignStepComponent';
import {getStatusDesignPartnerRouter} from '@/utils/statusDesignRouter';
import api from '@/api/index';
export default {
    components: {
        DesignStepComponent,
    },
    data() {
        return {
            readonly:true,
            show1:true,
            show2:true,
            show3:true,
            index:6,
            statusText:'成果已确认,请评价',
            status:'',
            formData:{
                id:"",//项目主键
                name:"",//项目名称
                overallEvaluation:"",//总体评价
                designEvaluation:"",//设计评价
                respondSpeed:"",//响应速度
                otherSuggest:"",//其他意见
                status:60,//状态
                operator:sessionStorage.getItem("user"),//操作人
                userName:sessionStorage.getItem("user")//日志记录
            }
        }
    },
    methods: {
        onSelected(data) {
            console.log(data)
        },
        click(index){
            if(index==1){
                this.show1 = !this.show1
            }else if(index==2){
                this.show2 = !this.show2
            }else if(index==3){
                this.show3 = !this.show3
            }
        },
        submit() {
            api.designPartner.saveDesignAppraise(this.formData).then(response => {
                this.$message.success("提交成功");
                this.$router.push(getStatusDesignPartnerRouter(60));
            }).catch(error => {
                console.log(error);
            });
        },
        loadData(id) {
            api.designPartner.findById(id).then(response => {
                this.formData.id = response.id;
                this.formData.name = response.name; //项目名称
            }).catch(error => {
                console.log(error);
            });
        }
    },
    mounted: function () {
        // console.info(Industry)
        this.formData.id = this.$route.query.id; //获取路由传值
        //加载数据
        this.loadData(this.formData.id); //项目基本信息
    },
}
</script>

<style lang='scss'>
.appraise_upload_design_partner{
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