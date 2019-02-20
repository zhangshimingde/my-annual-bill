<template>
  <div  class='mycontract'>
    <div class="containter">
      <div class="content">
       <p><span class="date">{{datalist.FirstSignDate ?datalist.FirstSignDate .substring(0,4):""}}</span>年<span class="date">{{datalist.FirstSignDate ?datalist.FirstSignDate .substring(5,7):""}}</span>月<span class="date">{{datalist.FirstSignDate ?datalist.FirstSignDate .substring(8,10):""}}</span>日</p>
        <p>你签订了今年第一份合同，实现了18年</p>
        <p>"开门红"征途</p>
        <p>18年，你的总签约金额高达<span>{{datalist.QyTotalAmount }}</span>元</p>
        <p>回款金额高达<span>{{datalist.HkAmount}}</span>元</p>
        <p>签约业绩排名<span>{{datalist.Ranking}}</span></p>
        <p>你的签约业绩大概可以购买<span>{{datalist.BuyBMWCount }}</span>辆宝马320LI</p>
      </div>
      <div class="market_img"></div>
      <div class="footer">
        <p>一向陪着你的</p>
        <p>是那个了不起的自己</p>
      </div>
      <object class="btn_allow" data="../../../static/img/btn_arrow.svg" type="image/svg+xml"></object>
    </div>
  </div>
</template>

<script>
export default {
  name: 'mycontract',
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
  .mycontract{
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
          span{
            font-family: "DIN-Bold";
            font-size: 0.56rem;
            color: #62FFF4;
            letter-spacing: 0;
            line-height: 0.56rem;
          }
          .date{
            font-family: "PingFangSC-Regular";
            font-size: 0.32rem;
            color: #E4E5FF;
            letter-spacing: 0;
            line-height: 0.7rem;
            color: #62FFF4;
          }
        }
        .reason{
          font-family: "PingFangSC-Regular";
          font-size:0.32rem;
          color: #62FFF4;
          letter-spacing: 0;
          line-height: 0.7rem;
        }
      }
      .market_img{
        width: 6.3rem;
        height: 3.8rem;
        position: absolute;
        left:0.64rem;
        top:7rem;
        background: url("../../../static/img/mycontract_img.png") 0 0 no-repeat;
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
