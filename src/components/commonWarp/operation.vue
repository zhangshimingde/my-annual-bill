<template>
  <div  class='operation'>
    <div class="containter">
      <div class="content">
        <p>{{datalist.CurYear}}年</p>
        <p>明源君一共服务了<span>{{datalist.YW_ServiceAreaCount}}</span>个区域的<span>{{datalist.YW_ServiceCustomerCount}}</span>个客户</p>
        <p>共通话<span>{{datalist.YW_CallingCount}}</span>次</p>
        <p>在线服务<span>{{datalist.YW_OnLineServiceCount}}</span>次</p>
        <p>受理工单<span>{{datalist.YW_HandleGwCount}}</span>个</p>
        <p>解决了<span>{{datalist.YW_SolveUserMatterCount}}</span>位用户的问题</p>
      </div>
      <div class="footer">
        <p>顾客后还有顾客，</p>
        <p>服务的开始才是销售的开始</p>
      </div>
      <object class="btn_allow" data="../../../static/img/btn_arrow.svg" type="image/svg+xml"></object>
    </div>
  </div>
</template>

<script>
export default {
  name: 'operation',
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
  .operation{
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
        bottom:1.5rem;
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
