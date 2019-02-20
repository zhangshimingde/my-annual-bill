<template>
  <div  class='welcomes'>
    <div class="containter">
      <div class="content">
        <p>你好，<span class="name">{{datalist.UserName}}</span></p>
        <p>从<span class="date">{{datalist.EntryTime?datalist.EntryTime.substring(0,4):""}}</span>年<span class="date">{{datalist.EntryTime?datalist.EntryTime.substring(5,7):""}}</span>月<span class="date">{{datalist.EntryTime?datalist.EntryTime.substring(8,10):""}}</span>日入职那一天起</p>
        <p>你已经来到明源<span>{{getFormatYMD(datalist.EntryTime?datalist.EntryTime.substring(0,10):"")}} </span>天了</p>
        <p>2018年，你一共出勤<span>{{datalist.WorkDays}}</span>天</p>
        <p>加班<span>{{datalist.OverWorkDays}}</span>天</p>
        <!-- <p>感谢每一天的陪伴</p> -->
      </div>
      <div class="footer">
        <p>陪伴是最长情的告白，</p>
        <p>而守护是最沉默的陪伴</p>
      </div>
      <object class="btn_allow" data="../../../static/img/btn_arrow.svg" type="image/svg+xml"></object>
    </div>
  </div>
</template>

<script>
export default {
  name: 'welcomes',
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
    getFormatYMD(datestr){
      var time=Date.parse(new Date());
      var lasttime=Date.parse(datestr);
      var day=parseInt((time-lasttime)/(1000*60*60*24));
      return day;
    }
  }
}
</script>
<style lang="less">
  .welcomes{
    width: 100%;
    height: 100%;
    .containter{
      width:100%;
      height: 100%;
      background: url("../../../static/img/welcome_bg.png") 0 0 no-repeat;
      background-size: 100% 100%;
      position: relative;
      .content{
        width: 6.5rem;
        height: 4.5rem;
        position: absolute;
        left:50%;
        top:1.8rem;
        transform: translateX(-50%);
        p{
          font-family: "PingFangSC-Regular";
          font-size: 0.32rem;
          color: #E4E5FF;
          letter-spacing: 0;
          line-height: 0.7rem;
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
          .name{
            font-family: "PingFangSC-Regular";
            font-size: 0.32rem;
            color: #62FFF4;
            letter-spacing: 0;
            text-align: center;
            line-height: 0.74rem;
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
