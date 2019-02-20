<template>
  <div  class='mycommon'>
    <div class="containter">
      <div class="content">
        <p>{{datalist.CurYear}}年</p>
        <p>你一共发起了<span>{{datalist.LaunchProcessCount}}</span>条流程</p>
        <p>发起最多的流程是： <span class="reason">{{datalist.LaunchMostName }}</span></p>
        <p>登记日历任务<span>{{datalist.SignCalendarTaskCount }}</span>次</p>
        <p>发送了<span>{{datalist.SendWeeklyCount }}</span>次在线周报</p>
        <p>主持了<span>{{datalist.HostMeetingCount }}</span>次会议</p>
      </div>
      <div class="market_img"></div>
      <div class="footer">
        <p>忙碌的一年，</p>
        <p>成长的一年，辛苦了</p>
      </div>
      <object class="btn_allow" data="../../../static/img/btn_arrow.svg" type="image/svg+xml"></object>
    </div>
  </div>
</template>

<script>
export default {
  name: 'mycommon',
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
  .mycommon{
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
        left:0.64rem;
        top:0.58rem;
        p{
          font-family: "PingFangSC-Regular";
          font-size: 0.32rem;
          color: #E4E5FF;
          letter-spacing: 0;
          line-height: 0.74rem;
          text-shadow: 0 2px 4px rgba(0,0,0,0.50);
          span{
            font-family: "DIN-Bold";
            font-size: 0.56rem;
            color: #62FFF4;
            letter-spacing: 0;
            line-height: 0.56rem;
            margin:0 0.1rem;
          }
          .reason{
            font-family: "PingFangSC-Regular";
            font-size:0.32rem;
            color: #62FFF4;
            letter-spacing: 0;
            line-height: 0.7rem;
          }
        }
      }
      .market_img{
        width: 6.3rem;
        height: 3.8rem;
        position: absolute;
        left:0.64rem;
        top:6rem;
        background: url("../../../static/img/mycommon_img.png") 0 0 no-repeat;
        background-size: 100% 100%;
      }
      .footer{
        width: 4.5rem;
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
