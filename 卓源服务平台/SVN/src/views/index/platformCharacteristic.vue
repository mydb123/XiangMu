<template>
  <div id="platformCharacteristic">
      <!-- <div class="home_title">平台特点</div> -->
       <el-row :gutter="40">
            <el-col :span="12">
                    <el-card class="h200 tls">
                        <div class="fudong">
                        <img class="cardimg" src="../../assets/img/zhinenghangye.png" alt="">
                        </div>
                    <div>
                            <div class="home_subtitle">智能化行业新模式</div><br>
                        <div class="neiro">世界经济进入下行趋势，各国对于制造业发展愈发重视，纷纷加快推动技术创新，促进制造业转型升级，智能制造战略由此不断升温。目前，因此，智能化、绿色化已成为制造业发展的主流方向，智能制造也将成为世界各国竞争的焦点。</div>
                    </div>
                </el-card>
            </el-col>
            <el-col :span="12">
                    <el-card class="h200 ls">
                        <div class="fudong">
                        <img class="cardimg" src="../../assets/img/yewuliucheng.png" alt="">
                        </div>
                    <div>
                            <div class="home_subtitle">智能化行业新模式</div><br>
                        <div class="neiro">世界经济进入下行趋势，各国对于制造业发展愈发重视，纷纷加快推动技术创新，促进制造业转型升级，智能制造战略由此不断升温。目前，因此，智能化、绿色化已成为制造业发展的主流方向，智能制造也将成为世界各国竞争的焦点。</div>
                    </div>
                </el-card>
            </el-col>
                <el-col :span="12">
                    <el-card class="h200 ns">
                        <div class="fudong">
                        <img class="cardimg" src="../../assets/img/zixun.png" alt="">
                        </div>
                    <div>
                            <div class="home_subtitle">智能化行业新模式</div><br>
                        <div class="neiro">世界经济进入下行趋势，各国对于制造业发展愈发重视，纷纷加快推动技术创新，促进制造业转型升级，智能制造战略由此不断升温。目前，因此，智能化、绿色化已成为制造业发展的主流方向，智能制造也将成为世界各国竞争的焦点。</div>
                    </div>
                </el-card>
            </el-col>
            <el-col :span="12">
                    <el-card class="h200 zs">
                        <div class="fudong">
                        <img class="cardimg" src="../../assets/img/zhenghe.png" alt="">
                        </div>
                    <div>
                            <div class="home_subtitle">智能化行业新模式</div><br>
                        <div class="neiro">世界经济进入下行趋势，各国对于制造业发展愈发重视，纷纷加快推动技术创新，促进制造业转型升级，智能制造战略由此不断升温。目前，因此，智能化、绿色化已成为制造业发展的主流方向，智能制造也将成为世界各国竞争的焦点。</div>
                    </div>
                </el-card>
            </el-col>
                <el-col :span="12">
                    <el-card class="h2003 cs">
                        <div class="fudong">
                        <img class="cardimg" src="../../assets/img/shujucangku.png" alt="">
                        </div>
                    <div>
                            <div class="home_subtitle">智能化行业新模式</div><br>
                        <div class="neiro">世界经济进入下行趋势，各国对于制造业发展愈发重视，纷纷加快推动技术创新，促进制造业转型升级，智能制造战略由此不断升温。目前，因此，智能化、绿色化已成为制造业发展的主流方向，智能制造也将成为世界各国竞争的焦点。</div>
                    </div>
                </el-card>
            </el-col>
            <el-col :span="12">
                    <el-card class="h2003 hs">
                        <div class="fudong">
                        <img class="cardimg" src="../../assets/img/tiyan.png" alt="">
                        </div>
                    <div>
                            <div class="home_subtitle">智能化行业新模式</div><br>
                        <div class="neiro">世界经济进入下行趋势，各国对于制造业发展愈发重视，纷纷加快推动技术创新，促进制造业转型升级，智能制造战略由此不断升温。目前，因此，智能化、绿色化已成为制造业发展的主流方向，智能制造也将成为世界各国竞争的焦点。</div>
                    </div>
                </el-card>
            </el-col>
        </el-row>
  </div>
</template>

<script>
export default {

  data () {
    return {
    }
  },

  methods: {},

  created () {
  }
}
</script>

<style lang='scss' >
    #platformCharacteristic{
        // .home_title{
        //     font-weight: 900;
        //     font-size: 20px;
        //     color: rgb(54, 96, 146);
        //     padding-left: 5px;
        //     border-left: 4px solid #fb973f;
        // }
        .tls{
            border-left: 12px solid #3f8de9;
        }
        .ls{
            border-left: 12px solid #4ccaf3;

        }
        
        .ns{
            border-left: 12px solid #2cd6cd;

        }
        .zs{
            border-left: 12px solid #b692e9;

        }
        .cs{
            border-left: 12px solid #f2c872;

        }
        .hs{
            border-left: 12px solid #f6739d;
        }
        .h200{
            overflow: hidden;
            height: 200px;
            border-radius: 25px;
            margin-left: 50px;
            margin-bottom: 40px;
            margin-right: 70px;
        }
        .h2003{
            overflow: hidden;
            height: 200px;
            border-radius: 25px;
            margin-left: 50px;
            margin-bottom: 0px;
            margin-right: 70px;
        }
        .fudong{
            float: left;
        }
        .cardimg{
            height: 100%;
            vertical-align: middle;
            margin-right: 20px;
            margin-left: 35px;

        }
        .home_subtitle{
            margin-top: 32px;
            font-size: 18px;
            font-weight: 700;
        }
        .neiro{
            color: #d5d5d5;
            overflow: hidden;
            text-overflow: ellipsis;
            display:-webkit-box; //作为弹性伸缩盒子模型显示。
            -webkit-box-orient:vertical; //设置伸缩盒子的子元素排列方式--从上到下垂直排列
            -webkit-line-clamp:3; //显示的行
        }

    }
     
</style>
