function bootFFLApp() {
    hubInitialise(); // Boot up the Hub
    persist(); // Enable persistance!
}
window.onload = bootFFLApp;
// Runtime checks
if (/Mobi|Android/i.test(navigator.userAgent)) {
	var dM=localStorage.setItem('mDev', "1");
	var sM=localStorage.getItem('mDev');
	if(sM=="1"){
		alert('Multicam is not yet functional on mobile devices. An update will be released soon to enable this');
	}
	else{
		// Desktop Device
	}
}
// Deny IE (Compatibility Reasons)
function isIE() {
  ua = navigator.userAgent;
  /* MSIE used to detect old browsers and Trident used to newer ones*/
  //var is_ie = ua.indexOf("MSIE ") > -1 || ua.indexOf("Trident/") > -1;
  var is_ie=ua.indexOf("MSIE ") > -1;
  return is_ie; 
}
if (isIE()){
	$('html').css('background','black');
     $("html").replaceWith('<html><head><title>Not Supported</title><link href="/app/css/oof.css" rel="stylesheet" /></head><body><div><p>> <span>ERROR </span>: "<i>Unsupported browser</i>"</p><p>> <span>Internet Explorer, prior to version 11 is not supported via this app. This is due to several incompatibilites with modern standards.</span></p> <p><span>> Please use an up-to-date browser, such as: Edge, Chrome, Opera or Firefox.</p></span>  <p><span>> Thank you.</span></p></div></body></html>');
}else{
   //
}
// Funky code to do stuff
var zx = localStorage.getItem("FFLMC");
var z, oSize, pCount, u = window.location.href,
    x = new URL(u),
    c = x.searchParams.get("s"),
    v = zx.split(/,/);
function GrabChannel(e, i) {
    new Twitch.Embed(i, {
        width: "100%",
        height: 430,
        theme: "dark",
        channel: e,
        layout: "video",
        autoplay: !1
    })
}
// MultiCam Functionality
$(document).ready(function() {
    $('.chatcanvas').hide();
    absolute_center($("#helpbox")), v > "" && $("#helpbox").css("display", "block"), oSize = v.length, optimize_size(oSize), setTimeout(function() {
        optimize_size(oSize)
    }, 500)
}), $(window).resize(function() {
    absolute_center($("#helpbox")), optimize_size(-1)
});


// Analytics

 /* Place any Analytics code here! NOT in body!*/