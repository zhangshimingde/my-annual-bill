<template>
  <div  class='cloudLibrary'>
    <div class="containter">
      <div class="content">
        <p>{{datalist.CurYear}}年</p>
        <p>云库系统中已经沉淀了<span>{{datalist.yukun_FilesCount}}</span>个文件</p>
        <p>用户累计上传<span>{{datalist.yukun_uploadFileCount}}</span>次</p>
        <p>累计下载<span>{{datalist.yukun_downLoadCount}}</span>次</p>
        <p>累计登录<span>{{datalist.yukun_activeUsersCount}}</span>次</p>
        <p>pc端与移动端安装量<span>{{datalist.yukun_installCount}}</span>套</p>
      </div>
      <div class="market_img"></div>
      <div class="footer">
        <p>知识的积累形成企业核心竞争力的基础</p>
        <p>在此，感谢你每一KB的贡献</p>
      </div>
      <object class="btn_allow" data="../../../static/img/btn_arrow.svg" type="image/svg+xml"></object>
    </div>
  </div>
</template>

<script>
export default {
  name: 'cloudLibrary',
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
  .cloudLibrary{
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
        left:0.6rem;
        top:0.563rem;
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
      }
      .market_img{
        width: 6.3rem;
        height: 3.8rem;
        position: absolute;
        left:0.64rem;
        top:6rem;
        background: url("../../../static/img/cloud_img.png") 0 0 no-repeat;
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
