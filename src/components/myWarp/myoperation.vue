<template>
  <div  class='myoperation' >
    <div class="containter">
      <div class="content">
        <p>{{datalist.CurYear}}年</p>
        <p>你一共通话了<span>{{datalist.CallPhoneCount }}</span>次</p>
        <p>在线服务<span>{{datalist.OnLineServiceCount }}</span>次</p>
        <p>解决了<span>{{datalist.SolveUserMatterCount }}</span>位用户的问题</p>
        <p>处理了<span>{{datalist.HandleGdCount }}</span>个工单</p>
        <p><span>{{datalist.GwOnTimePercent }}%</span>的工单都按时解决</p>
        <p>工作量排名第<span>{{datalist.GwNumRank }}</span></p>
      </div>
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
  name: 'myoperation',
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
  .myoperation{
    width: 100%;
    height: 100%;
    .containter{
      width:100%;
      height: 100%;
      background: url("../../../static/img/manage_bg.png") 0 0 no-repeat;
      background-size: 100% 100%;
      position: relative;
      .content{
        width: 6.5rem;
        height: 6.08rem;
        position: absolute;
        left:50%;
        top:1.8rem;
        transform: translateX(-50%);
        p{
          font-family: "PingFangSC-Regular";
          font-size: 0.32rem;
          color: #E4E5FF;
          letter-spacing: 0;
          line-height: 1rem;
          text-shadow: 0 2px 4px rgba(0,0,0,0.50);
          text-align: center;
          span{
            font-family: "DIN-Bold";
            font-size: 0.56rem;
            color: #62FFF4;
            letter-spacing: 0;
            line-height: 0.56rem;
            margin:0 0.1rem;
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
      .footer{
        width:6rem;
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
