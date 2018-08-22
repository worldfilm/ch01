var $$ = {

	setMinHeight : function(){

		var mHeight = $(window).height();

		$("body").css("minHeight",mHeight);

	},

	browserTips : function(){
		var ua = navigator.userAgent.toLowerCase();
		var isWechat = ua.indexOf('micromessenger') != -1;
		if (isWechat) {
			$(".b-t-b").fadeIn();
		    return true;
		}else{
		    return false;
		}
	}

}
