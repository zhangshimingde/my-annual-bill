<template>
  <div  class='marketing'>
    <div class="containter">
      <div class="content">
        <p>2018年</p>
        <p>明源君一起经营了<span>{{datalist.Market_CustomerCount}}</span>个客户</p>
        <p>覆盖联系人<span>{{datalist.Market_UserCount}}</span>位</p>
        <p>孵化了<span>{{datalist.Market_TraceCount}}</span>个线索</p>
        <p>转化了<span>{{datalist.Market_OpportunityCount}}</span>个商机</p>
        <p class="tops">年度线索转化TOP3：
          <span>成都</span>
          <span>湖南</span>
          <span>重庆</span>
        </p>
        <p class="tops">年度商机成交TOP3：
          <span>深圳</span>
          <span>北京</span>
          <span>湖南</span>
        </p>
      </div>
      <div class="market_img"></div>
      <div class="footer">
        <p>在这里，</p>
        <p>我们相信一条重要的哲学原理：量变到质变。</p>
        <p>业务的提效，催生业绩的增长。</p>
      </div>
      <object class="btn_allow" data="../../../static/img/btn_arrow.svg" type="image/svg+xml"></object>
    </div>
  </div>
</template>

<script>
export default {
  name: 'marketing',
  props:['datalist'],
  created(){
    console.log(this.datalist)
  },
  components: {

  },
  data(){
    return{
      key:"",
      code:""
    }
  },
  methods:{

  },

  mounted(){
    this.code=localStorage.getItem("wxCode")
  }
  // watch:{
  //   datalist:{
  //     datalist(val){
  //       console.log(val)
  //     }
  //   }
  // }
}
</script>
<style lang="less">
  .marketing{
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
        .tops{
          span{
            font-size: 0.32rem;
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
