<template>
  <div  class='contract'>
    <div class="containter">
      <div class="content">
        <p>{{datalist.CurYear}}年</p>
        <p>明源君累计会签<span>{{datalist.Contract_SignCount}}</span>次</p>
        <p>终端合同归档<span>{{datalist.Contract_ApprovalPassCount}}</span>份</p>
        <p>累计办理出库高达<span>{{datalist.Contract_ChukuCount}}</span>次</p>
        <p>较2017年提升了<span>{{datalist.Contract_IncreasePercent}}</span>%</p>
        <p class="tops">年度出库办理数量TOP3:
          <span>{{datalist.Chuku_AreaTop1}}</span>
          <span>{{datalist.Chuku_AreaTop2}}</span>
          <span>{{datalist.Chuku_AreaTop3}}</span>
        </p>
      </div>
      <div class="market_img"></div>
      <div class="footer">
        <p>笑容</p>
        <p>是背后咬紧牙关的灵魂</p>
      </div>
      <object class="btn_allow" data="../../../static/img/btn_arrow.svg" type="image/svg+xml"></object>
    </div>
  </div>
</template>

<script>
export default {
  name: 'contract',
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
  .contract{
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
          .area{
            font-size: 0.32rem;
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
        background: url("../../../static/img/contract_img.png") 0 0 no-repeat;
        background-size: 100% 100%;
      }
      .footer{
        height: 1.08rem;
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
