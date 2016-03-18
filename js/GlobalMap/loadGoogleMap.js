var socket = io('http://antoniohernandez.me:8000/client');

function getCenterMap(areas){
    var maxLat, minLat, maxLng, minLng;
        maxLat = areas[0].coordinates[0].lat;
        minLat = areas[0].coordinates[0].lat;
        maxLng = areas[0].coordinates[0].lng;
        minLng = areas[0].coordinates[0].lng;
        for(var i = 0; i < areas.length; i++){
            for(var j = 0; j < areas[i].coordinates.length;j++){
                if(areas[i].coordinates[j].lat > maxLat){
                    maxLat = areas[i].coordinates[j].lat;
                }
                if(areas[i].coordinates[j].lat < minLat){
                    minLat = areas[i].coordinates[j].lat;
                }
                if(areas[i].coordinates[j].lng > maxLng){
                    maxLng = areas[i].coordinates[j].lng;
                }
                if(areas[i].coordinates[j].lng < minLng){
                    minLng = areas[i].coordinates[j].lng;
                }
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
        return "#66CC66";
    }else if(percentage > 0.0){
        return "#FF9900";
    }else{
        return "#FF0000";
    }
}
var arrayOfPolygons;
var areasGlobal;
function initialize(centerMap, areas) {
        var myOptions = {
          center: new google.maps.LatLng(centerMap[0], centerMap[1]),
          zoom: 17,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        var map = new google.maps.Map(document.getElementById("map_canvas"),
            myOptions);
        arrayOfPolygons = [];
        var arrayOfCoordinates;
        for(var i = 0; i < areas.length; i++){
            arrayOfCoordinates = [];
            for(var j = 0; j < areas[i].coordinates.length; j++){
                var coordinate = new google.maps.LatLng(areas[i].coordinates[j].lat, areas[i].coordinates[j].lng);
                arrayOfCoordinates.push(coordinate);
            }
            var color = getColor(areas[i]);
            var polygon = new google.maps.Polygon({
                paths: arrayOfCoordinates,
                strokeColor: color,
                strokeOpacity: 0.8,
                strokeWeight: 2,
                fillColor: color,
                fillOpacity: 0.35
            });
            polygon.setMap(map);
            arrayOfPolygons.push(polygon);
        }


      }


function changeColor(data){
    for(var i = 0; i < areasGlobal.length; i++){
        if(areasGlobal[i].area === data.area){
            var color = getColor(data);
            arrayOfPolygons[i].setOptions({strokeColor: color, strokeOpacity: 0.8, strokeWeight: 2, fillColor: color, fillOpacity: 0.35});
        }
    }
}
$(document).ready(function(){
    socket.on('initialize', function(areas){
        var center = getCenterMap(areas);
        initialize(center, areas);
        areasGlobal = areas;
    });
    socket.on('signal', function(data){
        changeColor(data);
    });
});