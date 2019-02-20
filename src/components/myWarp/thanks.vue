<template>
  <div  class='thanks'>
    <div class="containter">
      <div class="title">感谢有你</div>
      <div class="content">
        <p>2018，一路走来</p>
        <p>感谢有你</p>
        <p>2019，砥砺前行</p>
        <p>奋力追梦</p>
      </div>
      <router-link :to="{name:'keyword',query:{show:true}}">
        <div class="btn">
          生成我的年度关键词
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'thanks',
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
  .thanks{
    width: 100%;
    height: 100%;
    .containter{
      width:100%;
      height: 100%;
      background: url("../../../static/img/final_bg.png") 0 0 no-repeat;
      background-size: 100% 100%;
      position: relative;
      .title{
        font-family:" PingFangSC-Regular";
        font-size: 0.72rem;
        color: #61FAF1;
        letter-spacing: 0;
        text-align: center;
        position: absolute;
        left: 50%;
        top:1.5rem;
        transform: translateX(-50%);
      }
      .content{
        width: 6.5rem;
        height: 3.1rem;
        position: absolute;
        left: 50%;
        top:4rem;
        transform: translateX(-50%);
        p{
          font-family: "PingFangSC-Regular";
          font-size: 0.32rem;
          color: #E4E5FF;
          letter-spacing: 0;
          text-align: center;
          line-height: 0.8rem;
          span{
            font-family: "DIN-Bold";
            font-size: 0.42rem;
            color: #62FFF4;
            letter-spacing: 0;
            line-height: 0.56rem;
          }
        }
        .name{
          color: #62FFF4;
        }
      }
      .btn{
        width: 5.0rem;
        height: 0.9;
        background-image: linear-gradient(90deg, #3D3DFB 3%, #01D1B3 100%);
        box-shadow: 0 0 28px 0 rgba(0,136,165,0.85);
        border-radius: 1.0rem;
        font-family: "PingFangSC-Semibold";
        font-size: 0.36rem;
        color: #FFFFFF;
        letter-spacing: 0;
        text-align: center;
        line-height: 0.9rem;
        position: absolute;
        left: 50%;
        bottom:1.5rem;
        transform: translateX(-50%);
      }
    }
  }
</style>
