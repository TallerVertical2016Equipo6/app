//topBarIcon AreaMenu

//links al mapa
$(document).ready(function(){
	//console.log("ready");
	$("#backArrow").click(function(){
		$(location).attr('href','index.html');
	});
	
	
	$("#settings").click(function(){
		$(location).attr('href','indexHorario.html');
		
	});
	
});