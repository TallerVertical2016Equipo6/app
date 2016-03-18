

//Extract data from url, in this case the area selected
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

var area = GetURLParameter('area');

var map;
	
//Initializes the map
	function initialize(){
		
		
		var myOptions = {
				  center: new google.maps.LatLng(20.734100, -103.455009),
				  zoom: 17,
				  mapTypeId: google.maps.MapTypeId.ROADMAP
		};


		map = new google.maps.Map(document.getElementById("map_canvas"),myOptions);
			
	}


	
$(document).ready(function(){
			//Check for emit
			
		var new_area;
		
		var socket = io('http://antoniohernandez.me:8000/client');

					//when the initialize message is received
					socket.on('initialize', function(areas){
						
						var poly = [];
						
				
						$.each(areas, function(i,field){		
					
							if(field.area == area){	
							
								//extracts coordinates for the given area
								var coord = field.coordinates;
				
								var center; 
								center = getCenterPoly(coord);
								
								
								$.each(coord, function(j,fild){
									console.log(fild.lat);
									poly[j] = new google.maps.LatLng(fild.lat, fild.lng);
								
								});
								
								
								//console.log(center[0] +" " +center[1]);
								//Moves center to the new coordinates
								map.panTo(new google.maps.LatLng(center[0], center[1]));
						
								document.getElementById("name").innerHTML = "Zona " +field.area;
								document.getElementById("desc").innerHTML = field.description;
								
								//polygon preferences
								 new_area = new google.maps.Polygon({
									paths: poly,
									strokeColor: "#FF9900",
									strokeOpacity: 0.8,
									strokeWeight: 2,
									fillColor: "#FF9900",
									fillOpacity: 0.35
								});
						
								//console.log(new_area);
								new_area.setMap(map);
								
								//new_area.setOptions({strokeColor:"AA9308", fillColor:"AA9308"});
									
							}
						});
					});
					
					
					socket.on('signal', function(data){
			
						if(data.area == area){
							document.getElementById("avali").innerHTML = data.availability +" lots available";
							
							var color = getColor(area);
							console.log(new_area.strokeColor);
							new_area.setOptions({strokeColor:color, fillColor:color});
							
							
						}
					});
		
			});		
			
		
		
		
		
		
		/*
			
			GET CENTER POLY
			-----------------
			gets the center coordinate from the given polygon
			
		*/
		
		

		
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

//selects the color from the avaliability and the capacity
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
			

