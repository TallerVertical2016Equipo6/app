//a piece of code made to test this function.
//catching parameters from url
function GetURLParameter(sParam){
	var sPageURL = window.location.search.substring(1);
	var sURLVariables = sPageURL.split('&');
	for(var i = 0; i < sURLVariables.length; i++){
		var sParameterName = sURLVariables[i].split("=");
		if(sParameterName[0] == sParam){
			return sParameterName[1];
		}
	}
}

var map = GetURLParameter('map');
switch(map){
	case 'A':
		console.log("A");
		break;
	case 'B':
		console.log("B");
		break;
	case 'C':
		console.log("C");
		break;
	case 'D':
		console.log("D");
		break;
	case 'E':
		console.log("E");
		break;
	default:
		console.log("no se selecciono mapa");
}