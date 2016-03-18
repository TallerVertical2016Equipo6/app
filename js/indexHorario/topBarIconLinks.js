
$(document).ready(function(){
	
	
	//Return function
	$("#backArrow").click(function(){
		$(location).attr('href','index.html');
	});
   	
	
	//
				
	$('.ui.search.dropdown').dropdown();
		
        
	
	if(localStorage.getItem("cal")){
		
		
		 var storedNames = JSON.parse(localStorage.getItem("cal"));
		 console.log(storedNames[0]);
		 
		
		 
			$('#0Horario').dropdown('set selected', storedNames[0]);
			$('#1Horario').dropdown('set selected', storedNames[1]);
			$('#2Horario').dropdown('set selected', storedNames[2]);
		    $('#3Horario').dropdown('set selected', storedNames[3]);
			$('#4Horario').dropdown('set selected', storedNames[4]);
	
	}
    
    var socket = io('http://antoniohernandez.me:8000/client');
	var str = "<option value=\"" +"" +"\">Select Area</option>";
			
			socket.on('initialize', function(areas){
											
					$.each(areas, function(i,field){		
							str +=  "<option value= \"" +field.area +"\" > Area " +field.area +"</option>";
					});
					
					
					document.getElementById("0Horario").innerHTML = str;
					document.getElementById("1Horario").innerHTML = str;
					document.getElementById("2Horario").innerHTML = str;
					document.getElementById("3Horario").innerHTML = str;
					document.getElementById("4Horario").innerHTML = str;
					
					$('#0Horario').dropdown("setup menu");
					$('#1Horario').dropdown("setup menu");
					$('#2Horario').dropdown("setup menu");
					$('#3Horario').dropdown("setup menu");
					$('#4Horario').dropdown("setup menu");
					
					
	});
			

    /*
		Done Function
		-------------
		Once changes are done variables are locally stored
		with jstorage
	
	*/
	
    $('#done').on('click', function(){
		
		
		var str2 = "";
		var calendar = [];
		var val, val2, val3, val4, val5;

		
		val = $('#0Horario').val();
		val2 = $('#1Horario').val();
		val3 = $('#2Horario').val();
		val4 = $('#3Horario').val();
		val5 = $('#4Horario').val();
		
		
		calendar[0] = val;
		calendar[1] = val2;
		calendar[2] = val3;
		calendar[3] = val4;
		calendar[4] = val5;
		
		
		
		//alert(window.history.previous.href);
		localStorage.setItem("cal", JSON.stringify(calendar));
		
		
		$(location).attr('href','index.html');
	   
    });
    
});			