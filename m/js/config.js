var _cig = {
	setSize : function() {
		var html = document.getElementsByTagName('html')[0];
		var width = html.getBoundingClientRect().width;
		html.style.fontSize = width / 7.5 + "px";
	},
	writeMeta : function(){
		var pixelRatio = 1 / window.devicePixelRatio;
		document.write('<meta name="viewport" content="width=device-width,initial-scale='+pixelRatio+',minimum-scale='+pixelRatio+',maximum-scale='+pixelRatio+'" />');
	},
	windowEvent : function(){
		window.addEventListener("resize", this.setSize, false);
		window.addEventListener("orientationchange", this.setSize, false);		
	},
	formEles : function(){
		$('input, textarea, button, a, select').off('touchstart mousedown').on('touchstart mousedown', function(e) {
	        e.stopPropagation();
	    });
	}
}

_cig.writeMeta();
_cig.setSize();
_cig.windowEvent();
_cig.formEles();
