<template>
    <!-- <div>
        状态42.
        月采购计划已修改，请审核
    </div> -->
    <div class='month_update_purchase_dept'>
        <StepComponent :index='index'></StepComponent>
        <div>
            <p class='p1'>月采购计划已修改...</p>
            <p class='p2'>等待合伙人审核</p>
            <el-button @click="goList" type="primary" round>返回项目列表</el-button>
        </div>
    </div>    
</template>

<script>
import StepComponent from '@/components/StepComponent'
export default {
    components: {
        StepComponent
    },
    data() {
        return {
            index:4,
        }
    },
    methods: {
        goList() {
            this.$router.push('/purchase/dept/progress/month').then(()=>{
                location.reload();
            });            
        },
    },
}
</script>

<style lang='scss'>
.month_update_purchase_dept{
    margin: 0px auto;
    border: solid 1px #bbb;
    padding-bottom: 20px;
    text-align: center;
    .p1{
        width:70%;
        left: 27px;
        position: relative;
        text-align: left;
        height: 100px;
        margin-top:70px;
    }
    .p2{
        border: solid 1px #bbb;
        width: 50%;
        margin: 20px auto;
        padding: 20px 0;
        margin-bottom: 50px;
    }
}

</style>