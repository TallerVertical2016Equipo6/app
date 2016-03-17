//catching parameters from url in MenuArea from Index
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

var userType = GetURLParameter('userType');
var area = GetURLParameter('area');


loadAreas(userType, area);