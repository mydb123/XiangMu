<template>
    <div class='appraise_design_partner'>
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
            <el-table :data="pageResult.rows" style="margin-bottom:20px;" stripe border size='small'>
                <el-table-column type="index" label="序号" width="50">    
                </el-table-column>
                <el-table-column prop="name" label="项目名称" width="180">  
                    <template slot-scope="scope">
                        <el-link type="primary" @click="lookDetails(scope.row.id)">{{scope.row.name}}</el-link>
                    </template>   
                </el-table-column>
                <el-table-column prop="scale" label="项目规模" width="180">
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
                layout="total, sizes, prev, pager, next, jumper"
                :total="pageResult.total">
            </el-pagination>
        </div>        
    </div>
</div>
</template>

<script>
import api from '@/api/index';
import {getStatusDesignPartnerRouter} from '@/utils/statusDesignRouter';
import pageResult from '@/utils/pageResult';
import {pageRequest,pageSearch,conditionSearch,createdSearch,getPageDesignPartner} from '@/utils/pageResult';

export default {
    data(){
        return {
            show1:true,
            pageResult:pageResult,
            status:6,
            formInline: {
                name: '',
            }
        };
    },
    methods:{
        click(index){
            this.show1 = !this.show1
        },
        handleCurrentChange: function(currentPage){
            this.pageResult.currentPage = currentPage;
            this.handleList();
        },
        handleEdit(index,row){
            let router = getStatusDesignPartnerRouter(row.status)
            this.$router.push(router+"?id="+row.id);
        },
        onSubmit() {
            conditionSearch(getPageDesignPartner,pageRequest,this.pageResult,this.formInline.name,6)
        },
        lookDetails(id){
            this.$router.push({path:"/design/partner/detail",query:{id:id}});
        }
    },
    created() {
        createdSearch(getPageDesignPartner,pageRequest,this.pageResult,6)
    }
}
</script>
<style lang='scss'>
.appraise_design_partner{
    margin: 0 auto;
    padding: 25px 25px;
}
</style>