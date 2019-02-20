<template>
  <div  class='mymanage'>
    <div class="containter clearfix">
      <div class="content">
        <p>{{datalist.CurYear}}年</p>
        <p>你一共审批了<span>{{datalist.ApproveProcessCount }}</span>条流程</p>
        <p>审批最多的流程是：</p>
        <p class="reason">{{datalist.ApproveMostName }}</p>
        <p>流程平均审批耗时<span>{{datalist.ProcessApproveArgTime }}</span>小时</p>
      </div>
      <div class="contdata footers">
        <p>与整体对比</p>
        <p>审批效率排名或打败了<span>{{datalist.BeatPercent }}%</span>的人</p>
        <p>审批最快的一条流程：</p>
        <p class="reason">{{datalist.ApproveFastestName }}</p>
        <p>审批最慢的一条流程：</p>
        <p class="reason">{{datalist.ApproveSlowestName }}</p>
      </div>
      <object class="btn_allow" data="../../../static/img/btn_arrow.svg" type="image/svg+xml"></object>
    </div>
  </div>
</template>

<script>
export default {
  name: 'mymanage',
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
  .mymanage{
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
        position: absolute;
        left:50%;
        top:1rem;
        transform: translateX(-50%);
        p{
          font-family: "PingFangSC-Regular";
          font-size: 0.32rem;
          color: #E4E5FF;
          letter-spacing: 0;
          line-height: 0.76rem;
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
      .contdata{
        width: 6.5rem;
        position: absolute;
        left:50%;
        top:3rem;
        transform: translateX(-50%);
        p{
          font-family: "PingFangSC-Regular";
          font-size: 0.32rem;
          color: #E4E5FF;
          letter-spacing: 0;
          line-height: 0.76rem;
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
      .footers{
        top:6rem;
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
