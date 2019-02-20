<template>
  <div  class='cost'>
    <div class="containter">
      <div class="content">
        <p>{{datalist.CurYear}}年</p>
        <p>明源君一共发起了<span>{{datalist.Cost_LaunchCostCount}}</span>笔费用报销</p>
        <p>财务的小伙伴平均每天要处理<span>{{datalist.Cost_ArgDayHandleCount}}</span>笔</p>
        <p>发起数量TOP3的费用流程是</p>
        <p><span class="top3">{{datalist.Cost_ProcessNameTop1}}</span></p>
        <p><span class="top3">{{datalist.Cost_ProcessNameTop2}}</span></p>
        <p><span class="top3">{{datalist.Cost_ProcessNameTop3}}</span></p>
      </div>
      <div class="market_img"></div>
      <div class="footer">
        <p>我们关心发生了多少费用</p>
        <p>更关心每笔费用是否花在了正确的位置上</p>
      </div>
      <object class="btn_allow" data="../../../static/img/btn_arrow.svg" type="image/svg+xml"></object>
    </div>
  </div>
</template>

<script>
export default {
  name: 'cost',
  props:['datalist'],
  created(){

  },
  components: {

  },
  data(){
    return{
      key:""
    }
  },
  methods:{

  }
}
</script>
<style lang="less">
  .cost{
    width: 100%;
    height: 100%;
    .containter{
      width:100%;
      height: 100%;
      background: url("../../../static/img/mycommon_bg.png") 0 0 no-repeat;
      background-size: 100% 100%;
      position: relative;
      .content{
        width: 6.5rem;
        height: 3.5rem;
        position: absolute;
        left:0.6rem;
        top:0.563rem;
        p{
          font-family: "PingFangSC-Regular";
          font-size: 0.32rem;
          color: #E4E5FF;
          letter-spacing: 0;
          line-height: 0.7rem;
          text-shadow: 0 2px 4px rgba(0,0,0,0.50);
          padding-right: 20px;
          span{
            font-family: "DIN-Bold";
            font-size: 0.56rem;
            color: #62FFF4;
            letter-spacing: 0;
            line-height: 0.56rem;
            margin:0 0.1rem;
          }
          .top3{
            font-family: "PingFangSC-Regular";
            font-size:0.32rem;
            color: #62FFF4;
            letter-spacing: 0;
            text-align: center;
            line-height: 0.76rem;
          }
        }
      }
      .market_img{
        width: 6.3rem;
        height: 3.8rem;
        position: absolute;
        left:0.64rem;
        top:6rem;
        background: url("../../../static/img/componentCost_img.png") 0 0 no-repeat;
        background-size: 100% 100%;
      }
      .footer{
        width: 100%;
        position: absolute;
        left: 50%;
        bottom:1.2rem;
        transform: translateX(-50%);
        p{
          font-family: "PingFangSC-Regular";
          font-size: 0.32rem;
          color: #888AD9;
          letter-spacing: 0;
          text-align: center;
          line-height:0.54rem;
        }
      }
      .btn_allow{
        width: 0.36rem;
        height:0.54rem;
        position: absolute;
        left: 50%;
        bottom:0.3rem;
        transform: translateX(-50%);
      }
    }
  }
</style>
