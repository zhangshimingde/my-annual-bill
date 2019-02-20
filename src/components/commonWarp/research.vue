<template>
  <div  class='research'>
    <div class="containter">
      <div class="content">
        <p>{{datalist.CurYear}}年</p>
        <p>345位明源工程师与219位ODC研发人员一起</p>
        <p>共同完成了<span>89000+</span>人天开发量</p>
        <p>发布了<span>{{datalist.KF_ReleaseUpdatePackageCount}}</span>个更新包</p>
        <p>覆盖了<span>{{datalist.KF_CoverProjectCount}}</span>个项目</p>
        <p>服务了<span>{{datalist.KF_ServiceCustomerCount}}</span>个客户</p>
      </div>
      <div class="market_img"></div>
      <div class="footer">
        <p>每一个奋战的日夜，每一份努力的背后</p>
        <p>都秉持着我们的专业与责任</p>
      </div>
      <object class="btn_allow" data="../../../static/img/btn_arrow.svg" type="image/svg+xml"></object>
    </div>
  </div>
</template>

<script>
export default {
  name: 'research',
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
  .research{
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
      .market_img{
        width: 6.3rem;
        height: 3.8rem;
        position: absolute;
        left:0.64rem;
        top:6rem;
        background: url("../../../static/img/marketing_img.png") 0 0 no-repeat;
        background-size: 100% 100%;
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
