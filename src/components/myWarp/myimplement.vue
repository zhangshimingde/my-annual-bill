<template>
  <div  class='mymanage' >
    <div class="containter">
      <div class="content">
        <p>{{datalist.CurYear}}年</p>
        <p>你一共参与过<span>{{datalist.ParticleProjCount }}</span>个项目</p>
        <p>验收了<span>{{datalist.AcceptanceProjCount }}</span>个项目</p>
        <p>做过<span>{{datalist.ReportCount }}</span>次汇报跟进</p>
        <!-- <p>贡献了<span>{{datalist.ProjResultCount }}</span>项目成果</p> -->
        <p>提交过<span>{{datalist.SubmitXQCount }}</span>个需求</p>
        <p>最早汇报时间：</p>
        <p class="reason">{{datalist.EarliestReportDate }}</p>
        <p>最晚汇报时间：</p>
        <p class="reason">{{datalist.LatestReportDate   }}</p>
        <p>年度顾问工时量：</p>
        <p><span>{{datalist.YearGwWorkTimes }}</span></p>
      </div>
      <div class="footer">
        <p>荣誉代表昨天，</p>
        <p>光荣预示未来，</p>
        <p>加油！</p>
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
        height: 6.08rem;
        position: absolute;
        left:50%;
        top:0.8rem;
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
