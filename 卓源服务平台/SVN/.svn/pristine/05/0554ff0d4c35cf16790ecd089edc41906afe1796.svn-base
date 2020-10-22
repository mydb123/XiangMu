<template>
<!--所有项目列表 -->
    <div id="donorList">
        <button @click="test">新增项目</button>
        <button @click="test1">施工记录</button>
        <button @click="test2">施工方案</button>
        <button @click="test3">设计成果</button>
        <button @click="test5">设计方案</button>
        <button @click="test6">采购记录</button>
        <button @click="test7">采购方案</button>
    </div>
</template>

<script>
// import store from "@/store/index";
// import base from "@/api/base";
import api from "@/api/index";
import qs from 'qs' // 根据需求是否导入qs模块
export default {
  data() {
		return {
			
		};
	},
	methods: {
		test(){
            this.$router.push("/workbench/project/createProject")
		},
		test1(){
			 this.$router.push("/workbench/project/constructionRecord")
		},
		test2(){
			 this.$router.push("/workbench/project/constructionScheme")
		},
		test3(){
			 this.$router.push("/workbench/project/designResult")
		},
		test4(){
			 this.$router.push("/workbench/project/constructionRecord")
		},
		test5(){
			 this.$router.push("/workbench/project/designScheme")
		},
		test6(){
			 this.$router.push("/workbench/project/purchaseRecord")
		},
		test7(){
			 this.$router.push("/workbench/project/purchaseScheme")
		}
	},
	created() {
		
	}
};
</script>

<style lang="scss" >
#donorList{
	.mb20{
		margin-bottom: 20px;
		.lh40{
			line-height: 40px;
		}
	}
	
}
</style>


