function setClick(areaId, card){
	$(card).click(function(){
		$(location).attr('href', 'AreaMapa.html?map=' + areaId);
	});
}
//links al mapa
function setLinks(areasAvailable){
	//console.log("ready");
	var card;
	var areaId;
	for(var i = 0; i < areasAvailable.length; i++){
		areaId = areasAvailable[i].area;
		card = document.getElementById("link"+areaId);
		console.log(card);
		//console.log(card);
		if(card != null){
			setClick(areaId, card);			
		}
		
	}
}
	/*$("#A").click(function(){
		console.log("ready");
		$(location).attr('href','AreaMapa.html?map=A');
	});
	$("#B").click(function(){
		$(location).attr('href','AreaMapa.html?map=B');
	});
	$("#C").click(function(){
		$(location).attr('href','AreaMapa.html?map=C');
	});
	$("#D").click(function(){
		$(location).attr('href','AreaMapa.html?map=D');
	});
	$("#E").click(function(){
		$(location).attr('href','AreaMapa.html?map=E');
	});*/
