<template>
  <div  class='myElearning'>
    <div class="containter">
      <div class="content">
        <p>{{datalist.CurYear}}年</p>
        <p>你一共登录E-learning<span>{{datalist.eLloginCount}}</span>次</p>
        <p>在线学习<span>{{datalist.elOnlineMinute}}</span>分钟</p>
        <p>获得学分<span>{{datalist.elScore }}</span></p>
      </div>
      <div class="footer">
        <p>学习使我快乐，</p>
        <p>提升让我成功，2019我要高升</p>
      </div>
      <object class="btn_allow" data="../../../static/img/btn_arrow.svg" type="image/svg+xml"></object>
    </div>
  </div>
</template>

<script>
export default {
  name: 'myElearning',
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
  .myElearning{
    width: 100%;
    height: 100%;
    .containter{
      width:100%;
      height: 100%;
      background: url("../../../static/img/e-learning_bg.png") 0 0 no-repeat;
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
