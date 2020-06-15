<template>
    <!-- <div>
        状态41.
        月采购计划已提交
    </div> -->
    <div class='month_review_construction_dept'>
        <StepComponent :index='index' :flag='3'></StepComponent>
        <div>
            <p class='p1'>月施工计划已提交...</p>
            <p class='p2'>等待合伙人确认</p>
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
            this.$router.push('/construction/dept/progress/month').then(()=>{
                location.reload();
            });
        },
    },
}
</script>

<style lang='scss'>
.month_review_construction_dept{
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