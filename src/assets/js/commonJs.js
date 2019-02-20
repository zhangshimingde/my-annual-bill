import axios from 'axios';
const Common ={
  getUserMsg(to, from, next){
    var code=localStorage.getItem("wxCode")?localStorage.getItem("wxCode").replace("\"","").replace("\"",""):"";
    var usermsg=localStorage.getItem("usermsg");
    if(!!usermsg){
      next()
      return
    }
    var wxurl="https://open.weixin.qq.com/connect/oauth2/authorize?appid=wxfe3aa6c1dd22f053&redirect_uri=" + encodeURIComponent(window.location.href) + "&response_type=code&scope=snsapi_base&state=Receivables#wechat_redirect";
    //alert("getmsg")
    if(!!code){
      //alert(code)
      var url=`https://mp.mingyuanyun.com/api/oauth2/get-wx-user-info?code=${code}&client_id=ndzd2018`
      // var url=`http://xmgl-api.mingyuanyun.com/api/ProjectInfo/GetWxUserInfo?code=${code}`
      //alert(url)
        axios.get(url).then((res)=>{
          if(res.data.result){
            if(res.data.userData.userName){
              localStorage.setItem("usermsg",JSON.stringify(res.data.userData.userName));
              next();
            }else{
              alert("未找到对应的用户信息")
              localStorage.removeItem("wxCode")
              window.location.href=wxurl
              next(false);
            }
          }else{
            alert("请求失败")
            localStorage.removeItem("wxCode")
            window.location.href=wxurl
            next(false);
          }
        }, (error) => {
          next(false);
        })
    }else{
      next(false);
    }
  }
}

export default Common
