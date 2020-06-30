<template>
<div class='all_construction_partner'>


    <div class="wordborder ">
        <p class='clickbox' v-on:click="click(1)" >项目列表</p>
        <div class='content' v-show="show1">
            <el-table :data="pageResult.rows" style="margin-bottom:20px;" stripe border >
                <el-table-column prop="sys_name" label="系统名称" >    </el-table-column>
                <el-table-column prop="brand" label="品牌" >    </el-table-column>
                <el-table-column prop="supplier" label="供应商名称" >    </el-table-column>
                <el-table-column prop="link_man" label="联系人" >    </el-table-column>
                <el-table-column prop="phone" label="联系方式" >    </el-table-column>
                <el-table-column prop="payment_type" label="付款方式" >    </el-table-column>
                <el-table-column prop="is_use" label="是否有效" >    </el-table-column>
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
import res from '@/utils/supplier';
import pageResult from '@/utils/pageResult';
export default {
    data() {
        return {
            show1:true,
            pageResult:pageResult
        }
    },
    methods: {
        click(index){
            this.show1 = !this.show1
        },
        handleCurrentChange: function(currentPage){
            this.getPage(currentPage-1);
        },
        getPage(currentPage){
          this.pageResult = res[currentPage];
        }

    },
    created() {
        this.getPage(0);
    },
}
</script>
 

<style lang='scss'>
    .all_construction_partner{
    margin: 0 auto;
    padding: 15px 25px;
    position: relative;
    .title{
        position: absolute;
        right: 85px;
        z-index: 1000;
        top: 58px;
    }
}

</style>
