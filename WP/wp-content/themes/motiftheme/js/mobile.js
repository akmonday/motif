jQuery( document ).ready(function() {
	var isAndroid = navigator.userAgent.toLowerCase().indexOf("android") >= 0;
	var isiPhone = navigator.userAgent.toLowerCase().indexOf("iphone") >= 0;
	var isWindows = navigator.userAgent.toLowerCase().indexOf("windows phone") >= 0;

	if (isiPhone ) {
		 $("#android").hide();
	}

	if (isAndroid) {
		 $("#ios").hide();
	}
});