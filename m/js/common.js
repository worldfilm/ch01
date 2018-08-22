(function() {
  var myScroll;
  $(".download").on("click", function() {
    var u = navigator.userAgent;
    var isPc = navigator.userAgent.indexOf('Windows') > -1
    var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1;
    var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
    var domain = window.location.href;
    domain = 'http://tch02.bvchfsuujkyul.com'
    var channelUrl = domain.split("/")[2];
    var channel = domain.split(".")[0];
    channel = channel.split("//")[1];
    channel = 'tch01'
    var urls = {
      'android': "/app/android/vbo_" + channel + "_v3.0.12.apk",
      'otherandroid': 'http://d.sxsyajj.com/apk/vbo_v3.0.12.apk',
      'ios': "http://"+channel+".bvchfsuujkyul.com/app/ios/vbo_" + channel + "_v3.0.12.plist",
      'downloadIos': "itms-services://?action=download-manifest&url=http://" + channelUrl + "/app/ios/vbo_" + channel + "_v3.0.12.plist",
      'downloadOtherios': 'itms-services://?action=download-manifest&url=https://i.sxsyajj.com/ios/vbo_v3.0.12.plist',
    };
    if (isAndroid) {
      console.log(urls.android)
      network(urls.android,function(data){
        console.log(data)
        if (data.status == 204) {
          console.log('链接有效=>渠道包')
          console.log(urls.android)
          window.location.href = urls.android;
        } else {
          console.log('链接失效=>官方包')
          console.log(urls.otherandroid)
          window.location.href = urls.otherandroid
        }
      })
    }
    if (isiOS) {
      console.log(urls.downloadIos)
      network(urls.ios, function(data){
        console.log(data)
        if (data.status == 200) {
          console.log('链接有效=>渠道包')
          window.location.href = urls.downloadIos;
        } else {
          console.log('链接失效=>官方包')
          window.location.href = urls.downloadOtherios
        }
      })
      $(".course").show();
      var mySwiper = new Swiper('.swiper-container-course', {
        pagination: '.pagination',
        loop: true,
        grabCursor: true,
        paginationClickable: true,
        autoplay: 3000
      });
    }
    function network(url, fun) {
      $.ajax({
        url: url,
        type: 'GET',
        dataType: 'json',
        complete: function(response) {
          fun(response)
        },
      })
    }
  })
  $(".closeBtn").on("click", function() {
    $(".course").fadeOut();
    // window.location.reload();
  });

  // function loaded() {
  //   myScroll = new iScroll('wrapper', {
  //     checkDOMChanges: true
  //   });
  // }
  document.addEventListener('touchmove', function(e) {
    e.preventDefault();
  }, false);
  // document.addEventListener('DOMContentLoaded', loaded, false);



  function browserTips() {
    var ua = navigator.userAgent.toLowerCase();
    var isWechat = ua.indexOf('micromessenger') != -1;
    if (isWechat) {
      $(".b-t-b").fadeIn();
      return true;
    } else {
      return false;
    }
  }
  browserTips()
})()
