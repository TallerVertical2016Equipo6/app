//This script sets the links to all the list of maps in the menu
function setClick(areaId, card){
	$(card).click(function(){
		$(location).attr('href', 'AreaMapa.html?map=' + areaId);
	});
}
//links to map
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
	