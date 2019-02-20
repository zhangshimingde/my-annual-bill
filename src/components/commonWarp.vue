<template>
  <div  class='commonWarp'>
    <div class="containter animated fadeInUp" >
      <!-- <mt-swipe :show-indicators="false" :auto="0" :continuous="false">
        <mt-swipe-item v-for="(components,index) in componentview" :key="index">
            <div :is="components" :datalist="datalist"></div>
        </mt-swipe-item>
      </mt-swipe> -->
      <swiper :options="swiperOption" class="swipers"  ref="mySwiper" >
        <swiper-slide  v-for="(components,index) in componentview" :key="index" class="swiper_slide" >
          <div :is="components" :datalist="datalist"></div>
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>

<script>
import Marketing from  './commonWarp/marketing.vue';
import Contract from  './commonWarp/contract.vue';
import Delivery from  './commonWarp/delivery.vue';
import Research from  './commonWarp/research.vue';
import Operation from  './commonWarp/operation.vue';
import FlowPath from  './commonWarp/flowPath.vue';
import Cost from  './commonWarp/cost.vue';
import CloudLibrary from  './commonWarp/cloudLibrary.vue';
import CompanyConcluded from  './commonWarp/companyConcluded.vue';
export default {
  name: 'commonWarp',
  created(){
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
          this.datalist=res.data.Data.YearEndSummary.length>0?res.data.Data.YearEndSummary[0]:""
          console.log(this.datalist)
        }
      })
    },
  },
  components: {
    Marketing,
    Contract,
    Delivery,
    Research,
    Operation,
    FlowPath,
    Cost,
    CloudLibrary,
    CompanyConcluded,
  },
  data(){
    return{
      componentview:["Marketing","Contract","Delivery","Research","Operation","FlowPath","Cost","CloudLibrary","CompanyConcluded"],
      datalist:{},
      swiperOption: {
        loop:false,
        autoplay: false,
        direction:"vertical",
      }
    }
  },
}
</script>
<style lang="less">
  .commonWarp{
    width: 100%;
    height: 100%;
    .containter{
      width:100%;
      height:100%;
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

.fadein-enter,.fadein-leave-to{
	transform: translateX(50%);
}
</style>
