<template>
    <!-- <div>
        状态0
        中断项目
    </div> -->
    <div class='fail_detail_construction_partner'>
        <StepComponent :index='index' :flag='3'></StepComponent>
        <div>
            <p class='p1'>您的项目已中止...</p>
            <p class='p2'>近期您将收到本平台的电话回访邀请，<br/>在信息确认后您将获得更多此项目的信息</p>
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
            index:0,
        }
    },
    methods: {
        goList() {
            this.$router.push('/construction/partner/fail').then(()=>{
                location.reload();
            });
        },
    },
}
</script>

<style lang='scss'>
.fail_detail_construction_partner{
    margin: 0px auto;
    border:1px solid #E7E8ED; 
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
        border: solid 1px #E7E8ED;
        width: 50%;
        margin: 20px auto;
        padding: 20px 0;
        margin-bottom: 50px;
    }
}

</style>