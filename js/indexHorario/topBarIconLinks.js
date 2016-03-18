//topBarIcon AreaMenu

//links al mapa
$(document).ready(function(){
	//console.log("ready");
	$("#backArrow").click(function(){
		$(location).attr('href','index.html');
	});
    
    // inicia el dropdown 
    //$('.ui.dropdown')
      //  .dropdown()
    //;	
    
    
    
    $('#monHorario')
     .dropdown('set value',"B")
    ;
    
      $('#tueHorario')
     .dropdown('set value',"B")
    ;
      $('#wedHorario')
     .dropdown('set value',"B")
    ;
      $('#thuHorario')
     .dropdown('set value',"B")
    ;
      $('#friHorario')
     .dropdown('set value',"B")
    ;
    
  /*  $('#tueHorario')
    .dropdown('set value',function(){
        $.jStorage.set('monday')
    })
    ;*/
        
    //Funcion para boton 
    $('#done').on('click', function(){
        console.log(
            $('#monHorario')
             .dropdown('get value', "#monHorario"
            )
        );  
    })
    
});			