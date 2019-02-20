<template>
  <div  class='home'>
    <div class='containter animated slideInUp'>
      <div class="title">
        <span class="title_word">2018</span>
        <span class="home_line"></span>
      </div>
      <div class="content">
        <p>这一年，是辛勤奋斗的一年</p>
        <p>这一年，是硕果累累的一年</p>
        <p>这一年，注定是不平凡的一年</p>
        <p>这一年</p>
        <p>我们有目标，有梦想</p>
        <p>有泪水，也有欢笑</p>
        <p>有付出也有收获</p>
      </div>
      <div class="success">我们的成功是偶然吗？</div>
      <router-link class="footers" :to="{name:'commonWarp'}">
        <!-- <div class="final">点击查看</div> -->
        <div class="btn">开启数据谱写的明源2018</div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'home',
  created(){
  },
  components: {

  },
  data(){
    return{
     datalist:{},
    }
  },
  beforeMount(){

  },

  methods:{
  },

}
</script>
<style lang="less">
  .home{
    width: 100%;
    height: 100%;
    overflow: hidden;
    .containter{
    width: 100%;
    height: 100%;
    display: -webkit-flex;
    background: url("../../static/img/home_bg.png") 0 0 no-repeat;
    background-size: 100% 100%;
    display: flex;
    flex-direction:column;
    flex-wrap:nowrap;
    justify-content:space-between ;
    align-items:center ;
    .title{
      width: 100%;
      height:1.1rem;
      line-height: 1.1rem;
      font-family:"DIN-Bold";
      font-size: 1rem;
      color: #62FFF4;
      text-align: center;
      margin-top: 0.86rem;
      position: relative;
      .title_word{
        position: absolute;
        left: 50%;
        top:0rem;
        transform: translateX(-50%);
        z-index: 1000;
      }
      .home_line{
        display: block;
        width: 2.6rem;
        height:0.2rem;
        background: url("../../static/img/home_img.png") 0 0 no-repeat;
        background-size: 100% 100%;
        position: absolute;
        left: 50%;
        top:0.85rem;
        transform: translateX(-50%);
      }
    }

      .content{
        width: 6.5rem;
        p{
          font-family: "PingFangSC-Regular";
          font-size: 0.32rem;
          color: #E4E5FF;
          letter-spacing: 0;
          text-align: center;
          line-height: 0.56rem;
        }

      }
      .success{
        color: #62FFF4;
        font-size: 0.32rem;
      }
      .footers{
        margin-bottom:1.2rem;
        width: 4.5rem;
        .btn{
          width: 4.5rem;
          height: 0.9rem;
          background-image: linear-gradient(90deg, #3D3DFB 3%, #01D1B3 100%);
          box-shadow: 0 0 28px 0 rgba(0,136,165,0.85);
          border-radius: 1.0rem;
          font-family: "PingFangSC-Semibold";
          font-size: 0.36rem;
          color: #FFFFFF;
          letter-spacing: 0;
          text-align: center;
          line-height: 0.9rem;
        }
        .final{
          height:0.54rem;
          width: 4.5rem;
          font-family: "PingFangSC-Medium";
          font-size: 0.32rem;
          color: #9198DF;
          letter-spacing: 0;
          line-height: 0.54rem;
          text-align: center;
          margin-bottom: 0.1rem;
        }
      }
    }
  }
</style>
