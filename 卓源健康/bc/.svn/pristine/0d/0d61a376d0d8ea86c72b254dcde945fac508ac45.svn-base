<template>
    <!-- <div>
        状态2.
        合伙人上传清单页面
    </div> -->
    <div class='menu_upload_purchase_dept'>
        <StepComponent :index='index'></StepComponent>
        <div>
            <p class='p1'>立项通过...</p>
            <p class='p2'>等待合伙人上传清单</p>
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
            index:2,
        }
    },
    methods: {
        goList() {
            this.$router.push('/purchase/dept/progress/menu').then(()=>{
                location.reload();
            });
        },
    },
}
</script>

<style lang='scss'>
.menu_upload_purchase_dept{
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