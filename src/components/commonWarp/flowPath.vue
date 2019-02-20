<template>
  <div  class='flowPath'>
    <div class="containter">
      <div class="content">
        <p>{{datalist.CurYear}}年</p>
        <p>明源君一共发起了<span>{{datalist.WF_LaunchProcessCount}}</span>条流程</p>
        <p>流程平均审批耗时<span>{{datalist.WF_ProcessArgApprovalCostTime}}</span>天</p>
        <p>节点平均审批耗时<span>{{datalist.WF_NodeArgApprovalCostTime}}</span>分钟</p>
        <p>2019年，如果我们每个节点审批缩减<span>10</span>分钟</p>
        <p>大约可以节省<span>{{datalist.WF_SaveMinute}}</span>天</p>
      </div>
      <div class="market_img"></div>
      <div class="footer">
        <p>成功的原因各不相同</p>
        <p>有时候可能就是比别人快了一秒钟</p>
      </div>
      <object class="btn_allow" data="../../../static/img/btn_arrow.svg" type="image/svg+xml"></object>
    </div>
  </div>
</template>

<script>
export default {
  name: 'flowPath',
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
  .flowPath{
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
        top:0.5rem;
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
            margin:0 0.1rem;
          }
        }
      }
      .market_img{
        width: 6.3rem;
        height: 3.8rem;
        position: absolute;
        left:0.64rem;
        top:6rem;
        background: url("../../../static/img/flowPath_img.png") 0 0 no-repeat;
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
