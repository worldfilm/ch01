new Vue({
  data() {
    return {
      num:'800'
    }
  },
  el: '#app',
  components: {},
  methods: {
    downloadApp() {
      var u = navigator.userAgent;
      var isPc = navigator.userAgent.indexOf('Windows') > -1
      var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1;
      var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
      var domain = window.location.href;
      var channelUrl= domain.split("/")[2];
      var channel = domain.split(".")[0];
      channel = channel.split("//")[1];
      // channel='tch01'
      var urls = {
        'android':"/app/android/vbo_" + channel + "_v3.0.12.apk",
        'otherandroid': 'http://d.sxsyajj.com/apk/vbo_v3.0.12.apk',
        'ios': "/app/ios/vbo_" + channel + "_v3.0.12.plist",
        'downloadIos': "itms-services://?action=download-manifest&url=http://"+channelUrl+"/app/ios/vbo_" + channel + "_v3.0.12.plist",
        'downloadOtherios': 'itms-services://?action=download-manifest&url=https://i.sxsyajj.com/ios/vbo_v3.0.12.plist',
      };
      if (isAndroid) {
        console.log(urls.android)
        this.network(urls.android,data=>{
        console.log(data)
          if (data.status == 204) {
            console.log('链接有效=>渠道包')
            window.location.href=urls.android;
          } else {
            console.log('链接失效=>官方包')
            window.location.href=urls.otherandroid
          }
        })
      }
      if (isiOS) {
        console.log(urls.downloadIos)
        this.network(urls.ios,data=>{
          console.log(data)
          if (data.status == 200) {
            console.log('链接有效=>渠道包')
            window.location.href=urls.downloadIos;
          } else {
            console.log('链接失效=>官方包')
            window.location.href=urls.downloadOtherios
          }
        })
      }
    },
    network(url,fun) {
        fetch(url, {method: 'GET'})
        .then(function(data) {
          fun(data)
        })
        .then(data => {
          fun(data)
        })
        .catch(data => {
          console.log("GETerror");
          })
    },
  },
  created() {
    console.log('created');
    let height=window.screen.height
    console.log(height)
    this.num=height
    console.log(this.num)
  },
})
