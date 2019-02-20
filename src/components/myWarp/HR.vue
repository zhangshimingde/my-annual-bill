<template>
  <div  class='HR'>
    <div class="containter">
      <div class="content">
        <p><span class="date">{{datalist.WorkHoursLatestDate?datalist.WorkHoursLatestDate.substring(0,4):""}}</span>年<span class="date">{{datalist.WorkHoursLatestDate?datalist.WorkHoursLatestDate.substring(5,7):""}}</span>月<span class="date">{{datalist.WorkHoursLatestDate?datalist.WorkHoursLatestDate.substring(8,10):""}}</span>日</p>
        <p>这一天</p>
        <p>你加班到了<span class="date">{{datalist.WorkHoursLatestTime}}点</span></p>
        <p>原因是：</p>
        <p class="reason">{{datalist.WorkHoursReason}}</p>
      </div>
      <div class="market_img"></div>
      <div class="footer">
        <p>人因梦想而伟大</p>
        <p>祝你早日到达自己的目标</p>
      </div>
      <object class="btn_allow" data="../../../static/img/btn_arrow.svg" type="image/svg+xml"></object>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HR',
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
  .HR{
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
        top:6rem;
        background: url("../../../static/img/hr_img.png") 0 0 no-repeat;
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
