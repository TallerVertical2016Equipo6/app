//hacer arreglo y cargar todas las zonas

var socket = io('http://antoniohernandez.me:8000/client');


//cargar las zonas del servidor
var areasAvailable;
$(document).ready(function(){
	socket.on('initialize', function(areas){
		
		areasAvailable = areas;
		loadAreas(userType, area);
		setLinks(areasAvailable);
	});
});

function getCenterPoly(PolygonArray){
		var maxLat, minLat, maxLng, minLng;
		maxLat = PolygonArray[0].lat;
		minLat = PolygonArray[0].lat;
		maxLng = PolygonArray[0].lng;
		minLng = PolygonArray[0].lng;
		for(var i = 1; i < PolygonArray.length; i++){
			if(PolygonArray[i].lat > maxLat){
				maxLat = PolygonArray[i].lat;
			}
			if(PolygonArray[i].lat < minLat){
				minLat = PolygonArray[i].lat;
			}
			if(PolygonArray[i].lng > maxLng){
				maxLng = PolygonArray[i].lng;
			}
			if(PolygonArray[i].lng < minLng){
				minLng = PolygonArray[i].lng;
			}
		}

		var centerLat, centerLng;
		centerLat = (maxLat + minLat) / 2;
		centerLng = (maxLng + minLng) /2;
		return [centerLat, centerLng];
}
function getColor(area){
	var percentage = area.availability / area.capacity;
	if(percentage > 0.3){
		return "green";
	}else if(percentage > 0.0){
		return "orange";
	}else{
		return "red";
	}
}
function getPath(area){
	var color = getColor(area);
	var path = "path=color:" + color + "|weight:0|fillcolor:" + color;
	for(var i = 0; i < area.coordinates.length; i++){
		path += "|"+ area.coordinates[i].lat + "," + area.coordinates[i].lng;
	}
	return path;
}
function returnRow(area){
	var center = getCenterPoly(area.coordinates);
	var path = getPath(area);
	//document.write("https://maps.googleapis.com/maps/api/staticmap?center="+center[0]+","+center[1]+"&zoom=18&size=1044x522&maptype=roadmap&"+ path + "<br>");
	return `<div class="row">
              <div class="sixteen wide column">
                  <div id="link`+ area.area +`" class="ui card cardSize">
                    <div class="image">
                      <img src="https://maps.googleapis.com/maps/api/staticmap?center=`+center[0]+`,`+center[1]+`&zoom=18&size=1044x522&maptype=roadmap&`+ path +`" class="AreaMenuImg">
                    </div>
                    <div class="content">
                      <a id="header" class="header">Zona `+ area.area +`</a> 
                      <div class="description">
                        `+ area.description +`
                      </div>
                    </div>
                    <div class="extra content">
                      <a>
                        <i class="car icon"></i>
                        <span id ="`+ area.area +`" class="colorBottomCard">`+ area.availability  +` lots available</span>
                      </a>
                    </div>
                  </div>
              </div>
            </div>`;
}
function loadAreas(userType , area){
	var containerCards = document.getElementById("containerCards");
	containerCards.innerHTML = "";
	if(userType === "visitante"){
		//desplegar solo las zonas que son para visitantes
		//por el momento va a desplegar toda la lista, ya que los datos de prueba no indican que zonas son para visitantes o para personal del tec
		for(var i = 0; i < areasAvailable.length; i++){
			containerCards.innerHTML += returnRow(areasAvailable[i]);
		}
	}else{
		if(area==="nulo"){
			//desplegar todas las areas en orden indistinto
			for(var i = 0; i < areasAvailable.length; i++){
				containerCards.innerHTML += returnRow(areasAvailable[i]);
			}

		}else{
			//desplegar las areas con prioridad, ahorita como el input de ejemplo no nos dice que zonas son vecinas, solo indicaremos hasta arriba la zona escojida y despues se desplegaran las demas
			var selectedArea;
			for(var i = 0; i < areasAvailable.length; i++){
				if(areasAvailable[i].area = area){
					selectedArea = areasAvailable[i];
					areasAvailable.splice(i, 1);
					break;
				}
			}
			containerCards.innerHTML += returnRow(selectedArea);
			for(var i = 0; i < areasAvailable.length; i++){
				containerCards.innerHTML += returnRow(areasAvailable[i]);
			}

		}

	}

}