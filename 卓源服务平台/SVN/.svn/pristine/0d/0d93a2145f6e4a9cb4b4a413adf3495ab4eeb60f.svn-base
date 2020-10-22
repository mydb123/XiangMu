<template>
    <!-- <div>
        立项审核阶段
    </div> -->
<div class='approval_purchase_dept'>
    <div class="wordborder ">
        <p class='clickbox' v-on:click="click(1)" >项目列表</p>
        <div class='content' v-show="show1">
            <el-form :inline="true" :model="formInline" class="demo-form-inline">
                <el-form-item label="项目名称">
                    <el-input v-model="formInline.name" placeholder="项目名称"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="onSubmit">查询</el-button>
                </el-form-item>
            </el-form>            
            <el-table :data="pageResult.rows" style="margin-bottom:20px;" stripe border>
                <el-table-column type="index" label="序号" width="50">    
                </el-table-column>
                <el-table-column prop="name" label="项目名称" width="180">    
                    <template slot-scope="scope">
                        <el-link type="primary" @click="lookDetails(scope.row.id)">{{scope.row.name}}</el-link>
                    </template>                    
                </el-table-column>
                <el-table-column label="项目规模" width="180">
                    <template slot-scope="scope">{{ scope.row.scale }}万</template>
                </el-table-column>
                <el-table-column label="当前进度">
                    <template slot-scope="scope">
                        <el-button
                        size="small"
                        @click="handleEdit(scope.$index, scope.row)">{{scope.row.statusText}}</el-button>
                    </template>
                </el-table-column>
            </el-table>
            <el-pagination
                @current-change="handleCurrentChange"
                :current-page="pageResult.currentPage"
                :page-size="pageResult.pageSize"
                layout="total, prev, pager, next, jumper"
                :total="pageResult.total">
            </el-pagination>
        </div>        
    </div>
</div>

</template>
<script>
import api from '@/api/index';
import {getStatusPurchaseDeptRouter} from '@/utils/statusPurchaseRouter';
import pageResult from '@/utils/pageResult';
import {pageRequest,pageSearch,conditionSearch,createdSearch,getPagePurchaseDept} from '@/utils/pageResult';
export default {
    data() {
        return {
            show1:true,
            pageResult:pageResult,
            status:1,
            formInline: {
                name: '',
            },
        }
    },
    methods: {
        click(index){
            this.show1 = !this.show1
        },
        handleCurrentChange: function(currentPage){
            pageSearch(getPagePurchaseDept,pageRequest,this.pageResult,currentPage,this.formInline.name,1)
        },
        handleEdit(index,row){
            let r = getStatusPurchaseDeptRouter(row.status)
            this.$router.push({path:r,query:{id:row.id}});
        },
        onSubmit(){
            conditionSearch(getPagePurchaseDept,pageRequest,this.pageResult,this.formInline.name,1)
        },
        lookDetails(id){
            this.$router.push({path:"/purchase/dept/detail",query:{id:id}});
        }   
    },
    created() {
        createdSearch(getPagePurchaseDept,pageRequest,this.pageResult,1)
    },
}
</script>
 

<style lang='scss'>
.approval_purchase_dept{
    margin: 0 auto;
    padding: 15px 25px;
}

</style>
