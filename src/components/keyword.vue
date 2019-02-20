<template>
  <div  class='keyword animated fadeInUp'>
    <div class="title">我的年度关键词</div>
    <div class="contdata" v-if="isshow">
      <transition  enter-active-class="animated zoomInUp delayenter" leave-active-class="animated zoomOut delayleave" v-for="(data,index) in taglist" :key="index">
        <div class="content clearfix" v-show="shownum==index">
          <span class="titleWord">“{{data.TagName}}”</span>
          <span class="descrition">{{data.TagDescription}}</span>
        </div>
      </transition>
      <transition enter-active-class="animated zoomInUp" >
        <div class="taglist clearfix" v-if="shownum==taglist.length+1">
          <div class="tops2" v-if="taglist.length==1">
              <span class="tag" v-for="(tag,index) in taglist" :key="index" @click="gokeyword(tag)">{{tag.TagName}}</span>
          </div>
          <div class="tops" v-else>
            <div class="tag" v-for="(tag,index) in taglist" :key="index" @click="gokeyword(tag)">{{tag.TagName}}</div>
          </div>
          <div class="bottoms">
            <p class="nums">2019</p>
            <p class="Btitle">新周期，从头越</p>
            <p class="deword">明源文化：</p>
            <p class="deword">合伙奋斗，变革创新，用户成功</p>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>
<script>
export default {
  name: 'keyword',
  created(){
    this.usermsg=localStorage.getItem("usermsg");
    if(!!this.usermsg){
      this.getDatalist(this.usermsg)
    }
  },
  mounted(){
    this.show=this.$route.query.show
    setTimeout(()=>{
      this.shownum=0
    },200)
    var timer=setInterval(()=>{
      this.shownum++;
      console.log(this.shownum)
      if(this.shownum==this.taglist.length){
        clearInterval(timer)
        setTimeout(()=>{
          this.shownum=this.shownum+1
        },500)
      }
    },2000)



  },
  updated(){

  },
  components: {

  },
  data(){
    return{
      arrlist:["在路上","去哪里","在干嘛"],
      shownum:1000,
      usermsg:"",
      taglist:[],
      isshow:true,
      oneData:""
    }
  },
  methods:{
    gokeyword(data){
      this.isshow=false;
      this.oneData=data;
      this.$router.push({
        name:"detail",
        params:{
          title:encodeURIComponent(data.TagName),
          content:encodeURIComponent(data.TagDescription),
        }
      })
    },
    getDatalist(usermsg){
      this.$http.get(`api/ProjectInfo/GetYearEndInfo?code=${usermsg.replace("\"","").replace("\"","")}`).then((res)=>{
        if(res.data.Success){
          console.log(res.data.Data)
          this.taglist=res.data.Data.PersonalTags
          console.log( this.taglist)
        }
      })
    },
  },
}
</script>
<style lang="less">
  .keyword{
    width: 100%;
    height: 100%;
    width:100%;
    height: 100%;
    background: url("../../static/img/keyword1.png") 0 0 no-repeat;
    background-size: 100% 100%;
    position: relative;
    display: -webkit-flex;
    display: flex;
    flex-direction:column;
    flex-wrap:nowrap;
    justify-content:space-between ;
    align-items:center ;
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
    .contdata{
      width: 100%;
      .content{
        width: 100%;
        height: 2rem;
        position: absolute;
        top:4rem;
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
          bottom:3rem;
          transform: translateX(-50%);
        }
      }
      .taglist{
        padding:0 0.2rem;
        position: absolute;
        left:0;
        top:2.6rem;
        padding:0 0.5rem;
        .tops{
          height: 5rem;
          padding:0 0.5rem;
          .tag{
            padding: 0.3rem 0.4rem;
            display: inline-block;
            background-image: linear-gradient(-142deg, #7F3292 0%, #522A90 30%, #472890 38%, #2F528D 100%);
            box-shadow: 0 0 0.14rem 0.2rem rgba(127,87,255,0.00);
            border-radius:0.55rem;
            font-family: "PingFangSC-Regular";
            font-size: 0.42rem;
            color: #FFFFFF;
            letter-spacing: 0.03rem;
            text-align: center;
            line-height: 0.42rem;
            text-shadow: 0 0 0.05rem #411AFE;
            // float: left;
            margin:0.2rem 0.3rem;
            // float: left;
          }
        }
        .tops2{
          width:100%;
          height: 5rem;
          padding:0 0.5rem;
          position: relative;
          .tag{
            padding: 0.3rem 0.4rem;
            display: inline-block;
            background-image: linear-gradient(-142deg, #7F3292 0%, #522A90 30%, #472890 38%, #2F528D 100%);
            box-shadow: 0 0 0.14rem 0.2rem rgba(127,87,255,0.00);
            border-radius:0.55rem;
            font-family: "PingFangSC-Regular";
            font-size: 0.42rem;
            color: #FFFFFF;
            letter-spacing: 0.03rem;
            text-align: center;
            line-height: 0.42rem;
            text-shadow: 0 0 0.05rem #411AFE;
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%,-50%)
          }
        }
        .bottoms{
          width: 100%;
          // margin-top:0.5rem;
          .nums{
            font-family: "DIN-Bold";
            font-size: 0.48rem;
            color: #61FAF1;
            letter-spacing: 0;
            text-align: center;
            margin-bottom: 0.2rem;
          }
          .Btitle{
            font-family: "PingFangSC-Regular";
            font-size: 0.48rem;
            color: #FFFFFF;
            letter-spacing: 0;
            text-align: center;
            margin-bottom: 0.78rem;
          }
          .deword{
            width: 100%;
            font-family: "PingFangSC-Regular";
            font-size:0.3rem;
            color: #9198DF;
            letter-spacing: 0;
            text-align: center;
            line-height: 0.48rem;
          }
        }
      }
    }
    .animated {
      -webkit-animation-duration: 2s;
      animation-duration: 2s; // 动画执行时间
      -webkit-animation-fill-mode: both;
      animation-fill-mode: both;
    }

    .delayenter{
      animation-delay:500ms;
      -webkit-animation-delay:500ms;
    }
    .delayleave{
      animation-delay:1000ms;
      -webkit-animation-delay:1000ms;
    }
    // .delaytag{
    //   animation-delay:500ms;
    //   -webkit-animation-delay:500ms;
    // }
  }

</style>
