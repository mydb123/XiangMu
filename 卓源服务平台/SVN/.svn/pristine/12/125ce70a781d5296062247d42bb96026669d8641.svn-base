<template>
<!--新增项目 -->
    <div id="createProject">
		<el-breadcrumb>
            <el-breadcrumb-item :to="{ path:'/workbench/project/allProjectList'}">所有项目列表</el-breadcrumb-item>
            <el-breadcrumb-item>新增项目</el-breadcrumb-item>
        </el-breadcrumb>
		<el-card>
			<el-form :model="formData"  :rules="rules"   ref="formData">
				<div class="wordborder">
					<div>建筑信息</div>
					<div class='content'>
						<el-row>
							<el-col :span="5"><p>项目名称</p></el-col>
							<el-col :span="8" >
								<el-form-item prop="name">
									<el-input  v-model="formData.name" placeholder="请输入项目名称"></el-input>
								</el-form-item>
							</el-col>
							<el-col :span="5"><p>项目类别</p></el-col>
							<el-col :span="6">
								<el-form-item prop="type">
									<el-select v-model="sortType" placeholder="请选择行业">
										<el-option
											v-for="item in options2"
											:key="item.value"
											:label="item.label"
											:value="item">
										</el-option>
									</el-select>
								</el-form-item>    
							</el-col>
						</el-row>
						<el-row >
							<el-col :span="5"><p>地区</p></el-col>
							<el-col :span="8">
								<el-form-item prop = "region">
									<v-distpicker 
										:province="formData.province" 
										:city='formData.city'
										:area='formData.region'
										@selected="onSelected" 
										>
										
									</v-distpicker>
								</el-form-item>    
							</el-col>
							<el-col :span="5"><p>项目建筑地址</p></el-col>
							<el-col :span="6">
								<el-form-item prop="address">
									<el-input  v-model="formData.address" placeholder="请输入内容"></el-input>
								</el-form-item> 
							</el-col>
							
						</el-row>
						<el-row >
							<el-col :span="5"><p>建筑面积</p></el-col>
							<el-col :span="8">
								<el-form-item prop="area">
									<el-input  v-model="formData.area" placeholder="请输入内容">
										<template slot="append">m²</template>
									</el-input>
								</el-form-item>  
							</el-col>

							<el-col :span="5"><p>建筑使用单位</p></el-col>
							<el-col :span="6">
								<el-form-item prop = "useCompany">
								<el-input  v-model="formData.useCompany" placeholder="请输入内容"></el-input>
								</el-form-item>
							</el-col>
						</el-row>
						<el-row >
							<el-col :span="5"><p>总包单位</p></el-col>
							<el-col :span="8">
								<el-form-item prop="tempZbCompany">
									<el-select v-model="tempZbCompany" placeholder="请选择">
										<el-option
											v-for="item in addoptions"
											:key="item.value"
											:label="item.label"
											:value="item">
										</el-option>
									</el-select>
								</el-form-item> 
							</el-col>
						</el-row>
					</div>
				</div>
				<!--  -->
				<div class="wordborder" >
					<div>商务信息</div>
					<div class='content'>
						<el-row>
							<el-col :span="5"><p>项目模式</p></el-col>
							<el-col :span="8" >
								<el-form-item prop="mode">
									<el-select v-model="tempMode" placeholder="请选择"  >
										<el-option
											v-for="item in options"
											:key="item.value"
											:label="item.label"
											:value="item"
											 >
										</el-option>
									</el-select>
								</el-form-item> 
							</el-col>
							<el-col :span="5"><p>招标模式</p></el-col>
							<el-col :span="6">
								<el-form-item prop = "inviteMode">
								<el-select v-model="tempInviteMode" placeholder="请选择">
									<el-option
										v-for="item in options3"
										:key="item.value"
										:label="item.label"
										:value="item">
									</el-option>
								</el-select>
								</el-form-item>
							</el-col>
						</el-row>
						<el-row>
							<el-col :span="5"><p>业主需求对接人</p></el-col>
							<el-col :span="8">
								<el-form-item prop = "ownerPerson">
								<el-input  v-model="formData.ownerPerson" placeholder="请输入内容"></el-input>
								</el-form-item>
							</el-col>
							<el-col :span="5"><p>业主需求对接人联系方式</p></el-col>
							<el-col :span="6">
								<el-form-item prop = "ownerPersonPhone">
								<el-input  v-model="formData.ownerPersonPhone" placeholder="请输入内容"></el-input>
								</el-form-item>
							</el-col>
						</el-row>
						<el-row >
							<el-col :span="5"><p>项目规模</p></el-col>
							<el-col :span="8">
								<el-form-item prop = "scale">
								<el-input  v-model="formData.scale" placeholder="请输入内容">
									<template slot="append">万元</template>
								</el-input>
								</el-form-item>
							</el-col>
							<el-col :span="5"><p>项目年度</p></el-col>
							<el-col :span="6">
								<el-date-picker
										v-model="formData.year"
										type="year"
										value-format="yyyy"
										placeholder="选择日期" >
								</el-date-picker>
							</el-col>
						</el-row>
						<el-row >
							<el-col :span="5"><p>项目内容简介</p></el-col>
							<el-col :span="19">
								<el-form-item prop = "summary">
								<el-input 
									type="textarea"
									:rows="5"
									placeholder="请输入内容"
									v-model="formData.summary">
								</el-input>
								</el-form-item>
							</el-col>
						</el-row>
					</div>
				</div>
				<div class='tac'>
            		<el-button  type="primary" @click="submit('formData')" round>提交</el-button>
        		</div>
			</el-form>
        </el-card>
    </div>
</template>
<script>
import {Industry,ProjectMode,TenderMode} from '@/utils/util'
import api from "@/api/index";
export default {
  data() {
		return {
			options: ProjectMode,//项目模式
			options2:Industry,//项目类别
			options3: TenderMode,//招标模式
			tempMode:null,//项目模式值和内容
			sortType:null,//项目类别值和内容
			tempInviteMode:null,//招标模式值和内容
			addoptions: [],//总包
			tempZbCompany:null,//临时总包对象
			formData:{
				name:"",//项目名称
				type:"",//项目类别名字
				typeName:"",//项目类别值
				province:"",//省
                city:"",//市
                region:"",//区
				address:"",//项目建筑地址
				area:"",//建筑面积
				useCompany:"",//建筑使用单位
				zbCompany:"",//总包单位
				zbCompanyName:"",//总包单位
				mode:"",//项目模式值
				modeName:"",//项目模式名字
				inviteMode:"",//招标模式名字
				inviteModeName:"",//招标模式值
				ownerPerson:"",//业主需求对接人
				ownerPersonPhone:"",//业主联系方式
				scale:"",//项目规模
				summary:"",//项目内容简介
				year:'2020',

			},
			rules: {
			
				area: [{ pattern: /^[+]{0,1}(\d+)$|^[+]{0,1}(\d+\.\d+)$/, required: true, message: '请输入合法数字', trigger: 'blur' }],

				//ownerPersonPhone: [{ required: true, message: '请输入业主需求对接人联系方式'},{pattern: /^1[345789]\d{9}$/, message: '请输入正确的手机号', trigger: "blur"}],

				scale: [{ pattern: /^[+]{0,1}(\d+)$|^[+]{0,1}(\d+\.\d+)$/, required: true, message: '请输入合法数字', trigger: 'blur' }],

			}
		};
	},
	methods: {
		// 地区
		onSelected(data) {
			this.formData.province = data.province.value;
			this.formData.city = data.city.value;
			this.formData.region = data.area.value;
			this.$refs['formData'].validateField('region', regionError => {
       		})
		},
		submit(formData) {
			this.formData.zbCompany = this.tempZbCompany&&this.tempZbCompany.value
			this.formData.zbCompanyName = this.tempZbCompany&&this.tempZbCompany.label
			this.formData.inviteMode = this.tempInviteMode&&this.tempInviteMode.value
			this.formData.inviteModeName =  this.tempInviteMode&&this.tempInviteMode.label
			this.formData.type = this.sortType&&this.sortType.value
			this.formData.typeName = this.sortType&&this.sortType.label
			this.formData.mode = this.tempMode&&this.tempMode.value
			this.formData.modeName = this.tempMode&&this.tempMode.label
			console.info(this.formData)
			this.$refs[formData].validate(valid => {
				if (valid) {
					api.project.lxxx(this.formData).then(response => {
						if (response.state==200) {
							this.$message.success("提交成功");
							//  this.$router.push(getStatusDesignPartnerRouter(1));
							this.$router.go(-1);
						} else {
							this.$message.error("提交失败");
						}
					});
				} else {
					this.$message("请检查输入是否正确");
					return false;
				}
			});
		},
	},
	created() {
		api.project.getUserByRoleNamePost("zb").then(response => {
			let array = response.data
			for (let index = 0; index < array.length; index++) {
				const element = array[index];
				this.addoptions.push({
					"value":element["id"],
					"label":element["name"],
				})
			}

		});
	}
};
</script>

<style lang="scss">
#createProject{
	.tac{
		text-align: center;
	}
}
</style>


