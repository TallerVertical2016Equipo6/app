
//back arrow button to go back, script that all pages with a topbar use.
$(document).ready(function(){
	//console.log("ready");
	$("#backArrow").click(function(){
		window.history.back();
	});
	
});