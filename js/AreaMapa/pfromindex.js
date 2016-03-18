
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

//var userType = GetURLParameter('userType');
var area = GetURLParameter('area');

	var map;
	

	function initialize(){
		
		var myOptions = {
				  center: new google.maps.LatLng(20.734100, -103.455009),
				  zoom: 17,
				  mapTypeId: google.maps.MapTypeId.ROADMAP
		};


		map = new google.maps.Map(document.getElementById("map_canvas"),myOptions);
			
	}


	

	//Check for emit
var socket = io('http://antoniohernandez.me:8000/client');

			socket.on('initialize', function(areas){
				//document.write('Initial Data');
				//document.write(JSON.stringify(areas));
				
				var poly = [];
				
		
				$.each(areas, function(i,field){		
			
					if(field.area == area){	
					
						var coord = field.coordinates;
		
						$.each(coord, function(j,fild){
							console.log(fild.lat);
							poly[j] = new google.maps.LatLng(fild.lat, fild.lng);
						
						});
						
						document.getElementById("name").innerHTML = "Zona " +field.area;
						document.getElementById("desc").innerHTML = field.description;
						
						
						 new_area = new google.maps.Polygon({
							paths: poly,
							strokeColor: "#FF9900",
							strokeOpacity: 0.8,
							strokeWeight: 2,
							fillColor: "#FF9900",
							fillOpacity: 0.35
						});
				
					
						new_area.setMap(map);
							
					}
				});
				
				
				

		});
		
		socket.on('signal', function(data){
			
			if(data.area == area){
				document.getElementById("avali").innerHTML = data.availability +" lots available";
			}
		});
			

			

