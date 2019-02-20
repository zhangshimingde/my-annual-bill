<template>
<div class="detaisls">
  <div  class='detail animated fadeInUp'>
    <div class="title">我的年度关键词</div>
    <div class="content">
      <span class="titleWord">“{{title}}”</span>
      <span class="descrition">{{content}}</span>
    </div>
  </div>
</div>
</template>
<script>
export default {
  name: 'detail',
  created(){

  },
  mounted(){
    this.title=decodeURIComponent(this.$route.params.title)
    this.content=decodeURIComponent(this.$route.params.content)

  },
  components: {

  },
  data(){
    return{
      title:"",
      content:""
    }
  },
  methods:{

  },
}
</script>
<style lang="less">
.detaisls{
  width: 100%;
  height: 100%;
  overflow: hidden;
  .detail{
    width: 100%;
    height: 100%;
    background: url("../../../static/img/keyword_bg.png") 0 0 no-repeat;
    background-size: 100% 100%;
    position: relative;
    overflow: hidden;
    // display: -webkit-flex;
    // display: flex;
    // flex-direction:column;
    // flex-wrap:nowrap;
    // justify-content:center  ;
    // align-items:center ;
    .title{
      height: 0.48rem;
      font-family: "PingFangSC-Regular";
      font-size: 0.48rem;
      color: #61FAF1;
      letter-spacing: 0;
      text-align: center;
      line-height: 0.48rem;
      position: absolute;
      left: 50%;
      top:1.1rem;
      transform: translateX(-50%);
    }
    .content{
      width: 6.5rem;
      height: 2rem;
      position: absolute;
      left: 50%;
      top:4rem;
      transform: translateX(-50%);
      .titleWord{
        display: inline-block;
        width: 100%;
        height:1rem;
        line-height: 1rem;
        font-family: "PingFangSC-Medium";
        font-size: 0.72rem;
        color: #FFFEFE;
        letter-spacing: 0;
        text-align: center;
        float: left;
      }
      .descrition{
        display: inline-block;
        width: 100%;
        height: 0.5rem;
        line-height: 0.5rem;
        font-family: "PingFangSC-Regular";
        font-size: 0.36rem;
        color: #9198DF;
        letter-spacing: 0;
        text-align: center;
        float: left;
        margin-top:0.2rem;
      }

    }

  // .animated {
  //   -webkit-animation-duration: 2s;
  //   animation-duration: 2s; // 动画执行时间
  //   -webkit-animation-fill-mode: both;
  //   animation-fill-mode: both;
  // }

  // .delayenter{
  //   animation-delay:500ms;
  //   -webkit-animation-delay:500ms;
  // }
  // .delayleave{
  //   animation-delay:500ms;
  //   -webkit-animation-delay:500ms;
  // }

  }
}

</style>
