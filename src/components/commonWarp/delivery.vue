<template>
  <div  class='delivery'>
    <div class="containter">
      <div class="content">
        <p>{{datalist.CurYear}}年</p>
        <p>我们一共实施了<span>{{datalist.PM_ImplementProjCount}}</span>个项目</p>
        <p>其中交付完成了<span>{{datalist.PM_DeliveryCompleteCount}}</span>个</p>
        <p>提交了<span>{{datalist.PM_SubmitXQCount}}</span>个需求</p>
        <p>完成<span>{{datalist.PM_XQHandleCount}}</span>人天的需求处理</p>
        <p>完成<span>{{datalist.PM_WorkPlanReportCount}}</span>项工作项汇报跟进</p>
        <p>沉淀成果文档<span>{{datalist.PM_ResultDocCount}}</span>个</p>
      </div>
      <div class="footer">
        <p>每一份交付成果</p>
        <p>每一张客户满意笑脸的背后</p>
        <p>是每一位顾问无数个日夜的默默付出</p>
      </div>
      <object class="btn_allow" data="../../../static/img/btn_arrow.svg" type="image/svg+xml"></object>
    </div>
  </div>
</template>

<script>
export default {
  name: 'delivery',
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
  .delivery{
    width: 100%;
    height: 100%;
    .containter{
      width:100%;
      height: 100%;
      background: url("../../../static/img/delivery_bg.png") 0 0 no-repeat;
      background-size: 100% 100%;
      position: relative;
      .content{
        width: 6.5rem;
        height: 6.08rem;
        position: absolute;
        left:50%;
        top:0.6rem;
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
          .date{
            font-family: "PingFangSC-Regular";
            font-size: 0.32rem;
            color: #ffffff;
            letter-spacing: 0;
            text-align: center;
            line-height: 0.74rem;
            color: #62FFF4;
          }
        }
      }
      .footer{
        width: 6rem;
        position: absolute;
        left: 50%;
        bottom:1.2rem;
        transform: translateX(-50%);
        p{
          font-family: "PingFangSC-Regular";
          font-size: 0.32rem;
          color: #9198DF;
          letter-spacing: 0;
          text-align: center;
          line-height:0.7rem;
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
