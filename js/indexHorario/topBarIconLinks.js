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
    
    
   /*$('#monHorario')
     .dropdown('set text', function(){
        $.jStorage.get('monday')
     })
    ;*/
    
    $('#monHorario')
     .dropdown('set text','B')
    ;
    
        
    //Funcion para boton 
    $('#done').on('click', function(){
        console.log(
            $('#monHorario')
             .dropdown('get value', "#monHorario"
            )
        );
        console.log("hola");   
    })
    
});			