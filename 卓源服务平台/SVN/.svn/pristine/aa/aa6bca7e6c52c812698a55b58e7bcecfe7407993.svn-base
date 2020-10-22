<template>
    <!-- <div>
        状态1
        合伙人立项等待审核页面.
    </div> -->
    <div class='approval_pending_construction_dept'>
        <StepComponent :index='index' :flag='3'></StepComponent>
        <div>
            <el-form disabled>
            <div class='div2'>
                <div class='content'>
                    <el-row>
                        <el-col :span="5"><p>项目负责人</p></el-col>
                        <el-col :span="8" >
                            <el-input v-model="formData.leader" placeholder="请输入内容"></el-input>
                        </el-col>
                        <el-col :span="5"><p>提交日期</p></el-col>
                        <el-col :span="6">
                            <el-date-picker
                                value-format="yyyy-MM-dd"
                                v-model="formData.submitDate"
                                type="date"
                                placeholder="选择日期">
                            </el-date-picker>
                        </el-col>
                    </el-row>
                </div>
            </div>
            <div class="wordborder" >
                <p class='clickbox' v-on:click="click(1)" >建筑信息</p>
                <div class='content' v-show="show1">
                    <el-row>
                        <el-col :span="5"><p>项目名称</p></el-col>
                        <el-col :span="8" >
                            <el-input v-model="formData.name" placeholder="请输入内容"></el-input>
                        </el-col>
                        <el-col :span="5"><p>行业</p></el-col>
                        <el-col :span="6">
                            <el-select v-model="formData.industry" placeholder="请选择" >
                                <el-option
                                    v-for="item in options2"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item.value">
                                </el-option>
                            </el-select>
                        </el-col>
                    </el-row>
                    <el-row >
                        <el-col :span="5"><p>地区</p></el-col>
                        <el-col :span="17">
                            <v-distpicker :province="formData.province" 
                                :city='formData.city'
                                :area='formData.region'
                                @selected="onSelected" disabled></v-distpicker>
                        </el-col>
                    </el-row>
                    <el-row >
                        <el-col :span="5"><p>建筑面积</p></el-col>
                        <el-col :span="8">
                            <el-input v-model="formData.floorArea" placeholder="请输入内容">
                                <template slot="append">m²</template>
                            </el-input>
                        </el-col>
                        <el-col :span="5"><p>项目规模</p></el-col>
                        <el-col :span="6">
                            <el-input v-model="formData.scale" placeholder="请输入内容">
                                <template slot="append">万元</template>
                            </el-input>
                        </el-col>
                    </el-row>
                    <el-row >
                        <el-col :span="5"><p>项目建筑地址</p></el-col>
                        <el-col :span="19">
                            <el-input v-model="formData.buildingAddr" placeholder="请输入内容"></el-input>
                        </el-col>
                    </el-row>
                </div>
            </div>
            <div class="wordborder" >
                <p class='clickbox' v-on:click="click(2)">施工信息</p>
                <div class='content' v-show="show2">
                    <el-row>
                        <el-col :span="5"><p>项目模式</p></el-col>
                        <el-col :span="8" >
                            <el-select v-model="formData.projectMode" placeholder="请选择">
                                <el-option
                                    v-for="item in options"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item.value">
                                </el-option>
                            </el-select>
                        </el-col>
                        <el-col :span="5"><p>预计施工时间</p></el-col>
                        <el-col :span="6">
                            <el-date-picker
                                value-format="yyyy-MM-dd"
                                v-model="formData.estimateBuildTime"
                                type="date"
                                placeholder="选择日期">
                            </el-date-picker>
                        </el-col>

                    </el-row>
                    <el-row>
                        <el-col :span="5"><p>实施阶段</p></el-col>
                        <el-col :span="19">
                            <el-input v-model="formData.buildStage" type="textarea"
                                :rows="3" placeholder="请输入内容"></el-input>
                        </el-col>
                    </el-row>
                    <el-row >
                        <el-col :span="5"><p>实施目标</p></el-col>
                        <el-col :span="19">
                            <el-input v-model="formData.buildTarget" type="textarea"
                                :rows="3" placeholder="请输入内容"></el-input>
                        </el-col>
                    </el-row>
                    <el-row v-if="formData.otherExplain?true:false">
                        <el-col :span="5"><p>其他说明</p></el-col>
                        <el-col :span="19">
                            <el-input
                                type="textarea"
                                :rows="3"
                                placeholder="请输入内容"
                                v-model="formData.otherExplain">
                            </el-input>
                        </el-col>
                    </el-row>
                </div>
            </div>
            </el-form>
            <div class="wordborder" >
                <p class='clickbox' v-on:click="click(3)">拒绝原因</p>
                <div class='content' v-show="show3">
                    <el-row >
                        <el-col :span="5"><p>说明</p></el-col>
                        <el-col :span="19">
                            <el-input
                                type="textarea"
                                :rows="3"
                                placeholder="请输入内容"
                                v-model="formData.progress">
                            </el-input>
                        </el-col>
                    </el-row>
                </div>
            </div>
            </div>
        <div class='div5'>
            <el-button style='background-color:#666' @click="refuse" type="primary" round>拒绝</el-button>
            <el-button @click="accept" type="primary" round>立项</el-button>
        </div>
    </div>
</template>

<script>
import StepComponent from '@/components/StepComponent'
import {Industry,ProjectMode} from '@/utils/util'
import api from '@/api/index';
export default {
    components: {
        StepComponent
    },
    data() {
        return {
            show1:true,
            show2:true,
            show3:true,
            index:1,
            options: ProjectMode,
            options2:Industry,
            formData:{
                id:"",//项目主键
                leader:"",//项目负责人
                submitDate:"",//提交日期
                name:"",//项目名称
                industry:"",//行业
                province:"",//省
                city:"",//市
                region:"",//区
                floorArea:"",//建筑面积
                scale:"",//采购原型图中没有项目规模字段
                buildingAddr:"",//建筑地址
                projectMode:"",//项目规模
                buildStage:"",//采购阶段
                buildTarget:"",//采购目标
                estimateBuildTime:"",//预计采购时间
                otherExplain:"",//其他说明
                progress:""//备注
            }
        }
    },
    methods: {
        onSelected(data) {
            this.formData.province = data.province.value;
            this.formData.city = data.city.value;
            this.formData.region = data.area.value;
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
        refuse() {
            api.constructionDept.updateStatusAndProgress(this.formData.id,0,this.formData.progress).then((response)=>{
                this.$router.push('/construction/dept/failDetail');
            }).catch((error)=>{
                console.log(error);
            });
        },
        accept() {
            api.constructionDept.updateStatus(this.formData.id,2).then((response)=>{
                this.$router.push('/construction/dept/menuUpload');
            }).catch((error)=>{
                console.log(error);
            });
        },
        loadData(id){
            api.constructionDept.findById(id).then((response)=>{
                this.formData.leader = response.leader;//项目负责人
                this.formData.submitDate = response.submitDate;//创建日期
                this.formData.name = response.name;//项目名称
                this.formData.industry = response.industry;//行业
                this.formData.province = response.province//省
                this.formData.city = response.city;//市
                this.formData.region = response.region;//区
                this.formData.buildingAddr = response.buildingAddr;//建筑地址
                this.formData.scale = response.scale;//项目规模
                this.formData.buildingAddr = response.buildingAddr;//项目地址
                //采购信息
                this.formData.projectMode = response.projectMode;//项目模式
                this.formData.buildStage = response.buildStage;//阶段
                this.formData.buildTarget = response.buildTarget;//目标
                this.formData.estimateBuildTime = response.estimateBuildTime;//预计时间
                this.formData.otherExplain = response.otherExplain;//其他说明

            }).catch((error)=>{
                console.log(error);
            });
        }
    },
    mounted: function () {
        this.formData.id = this.$route.query.id;//获取路由传值
        this.loadData(this.formData.id);//加载数据
    },
}
</script>

<style lang='scss'>
.approval_pending_construction_dept{
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
    .distpicker-address-wrapper{
        select{
            color: #C0C4CC;
            background: #F5F7FA;
            // appearance:none;
            // -moz-appearance:none; /* Firefox */
            // -webkit-appearance:none; /* Safari 和 Chrome */
        }
    }
}

</style>