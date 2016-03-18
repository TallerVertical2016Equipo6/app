//links al mapa
function setLinks(areasAvailable){
	//console.log("ready");
	var card;
	
	for(var i = 0; i < areasAvailable.length; i++){
		card = document.getElementById("link"+areasAvailable[i].area);
		
		if(card != null){
			$(card).click(function(){
				$(location).attr('href', 'AreaMapa.html?map=' + areasAvailable[i].area);
			});
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
