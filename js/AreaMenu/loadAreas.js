//hacer arreglo y cargar todas las zonas

var socket = io('http://antoniohernandez.me:8000/client');


//cargar las zonas del servidor
var areasAvailable;
$(document).ready(function(){
	socket.on('initialize', function(areas){
		
		areasAvailable = areas;
		loadAreas(userType, area);
	});
});


function returnRow(area){
	return `<div class="row">
              <div class="sixteen wide column">
                  <div class="ui card cardSize">
                    <div class="image">
                      <img src="img/crop/recorteAmarillo.png" class="AreaMenuImg">
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