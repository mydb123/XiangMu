<template>
    <div id='page404'>
        <section class="center">
            <article>
                <h1 class="header">
                    404</h1>
                <p class="error">
                    您访问的网页不存在</p>
            </article>
            <article>
                <p>
                    <router-link to='/'>返回首页</router-link>
                </p>
            </article>
        </section>
    </div>
</template>
<style lang='scss'>
    #page404{
        .center a{
            color: #409EFF;
        }
        .center
        {
            text-align: center;
            color: #bbb;
            font: 100% "Lato" , sans-serif;
            font-size: 1.8rem;
            font-weight: 300;
            height:100%
        }
        
        /* 404 Styling */
        .header
        {
            font-size: 13rem;
            font-weight: 700;
            margin: 2% 0 2% 0;
            text-shadow: 0px 3px 0px #7f8c8d;
        }
        
        /* Error Styling */
        .error
        {
            margin: -70px 0 2% 0;
            font-size: 3.4rem;
            text-shadow: 0px 3px 0px #7f8c8d;
            font-weight: 100;
        }
    }     
        

</style>