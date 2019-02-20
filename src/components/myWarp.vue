<template>
  <div  class='myWarp'>
    <div class="containter animated fadeInUp" >
      <swiper :options="swiperOption" class="swipers"  ref="mySwiper">
        <swiper-slide class="swiper_slide">
            <Welcomes :datalist="datalist"/>
        </swiper-slide>
        <swiper-slide v-if="datalist.WorkHoursLatestDate" class="swiper_slide">
            <HR :datalist="datalist"/>
        </swiper-slide>
        <swiper-slide v-if="datalist.eLloginCount" class="swiper_slide">
            <MyElearning :datalist="datalist"/>
        </swiper-slide>
        <swiper-slide v-if="datalist.LaunchProcessCount" class="swiper_slide">
            <Mycommon :datalist="datalist"/>
        </swiper-slide>
        <swiper-slide v-if="datalist.ApplyReimbursementCount" class="swiper_slide">
            <Mycost :datalist="datalist"/>
        </swiper-slide>
        <swiper-slide v-if="datalist.ApproveProcessCount" class="swiper_slide">
            <Mymanage :datalist="datalist"/>
        </swiper-slide>
        <swiper-slide v-if="datalist.VisitFollwCount||datalist.FollowTraceCount||datalist.DealOpportunityCount" class="swiper_slide">
            <Mymarketing :datalist="datalist"/>
        </swiper-slide>
        <swiper-slide v-if="datalist.FirstSignDate " class="swiper_slide">
            <Mycontract :datalist="datalist"/>
        </swiper-slide>
        <swiper-slide v-if="(datalist.StaionName=='顾问岗'||datalist.StaionName=='项目经理岗')&&datalist.YearGwWorkTimes>=1" class="swiper_slide">
            <Myimplement :datalist="datalist" />
        </swiper-slide>
         <swiper-slide class="swiper_slide" v-if="datalist.CompleteXqCount||datalist.SvoleBugCount||datalist.ReportWorkLoad">
            <Myresearch :datalist="datalist"/>
        </swiper-slide>
         <swiper-slide class="swiper_slide" v-if="datalist.CallPhoneCount||datalist.OnLineServiceCount||datalist.SolveUserMatterCount||datalist.HandleGdCount">
            <Myoperation :datalist="datalist"/>
        </swiper-slide>
        <swiper-slide class="swiper_slide">
            <Thanks :datalist="datalist"/>
        </swiper-slide>

      </swiper>
    </div>
  </div>
</template>

<script>
import Welcomes from  './myWarp/welcomes.vue';
import HR from  './myWarp/HR.vue';
import MyElearning from  './myWarp/Elearning.vue';
import Mycommon from  './myWarp/mycommon.vue';
import Mycost from  './myWarp/mycost.vue';
import Mymanage from  './myWarp/mymanage.vue';
import Mymarketing from  './myWarp/mymarketing.vue';
import Mycontract from  './myWarp/mycontract.vue';
import Myimplement from  './myWarp/myimplement.vue';
import Myresearch from  './myWarp/myresearch.vue';
import Myoperation from  './myWarp/myoperation.vue';
import Thanks from  './myWarp/thanks.vue';
export default {
  name: 'myWarp',
  created(){
  },
  components: {
    Welcomes,
    HR,
    MyElearning,
    Mycommon,
    Mycost,
    Mymanage,
    Mymarketing,
    Mycontract,
    Myimplement,
    Myresearch,
    Myoperation,
    Thanks,

  },

  data(){
    return{
      mycomponentview:["Welcomes","HR","MyElearning","Mycommon","Mycost","Mymanage","Mymarketing","Mycontract","Myimplement","Thanks"],
      datalist:{},
      swiperOption: {
        loop:false,
        autoplay: false,
        direction:"vertical",
      }
    }
  },

  mounted(){
    this.usermsg=localStorage.getItem("usermsg");
    if(!!this.usermsg){
      this.getDatalist(this.usermsg)
    }
  },

  methods:{
    getDatalist(usermsg){
      this.$http.get(`api/ProjectInfo/GetYearEndInfo?code=${usermsg.replace("\"","").replace("\"","")}`).then((res)=>{
        if(res.data.Success){
          console.log(res.data.Data)
          this.datalist=res.data.Data.PersonalYearEndSummary.length>0?res.data.Data.PersonalYearEndSummary[0]:""
        }
      })
    },
  }
}
</script>
<style lang="less">
  .myWarp{
    width: 100%;
    height: 100%;
    .containter{
      width:100%;
      height: 100%;
      .swipers{
        width:100%;
        height: 100%;
        .swiper-wrapper{
          width: 100%;
          height: 100%;
          .swiper_slide{
            width: 100%;
            height: 100%;
          }
        }
      }
    }
  }
</style>
