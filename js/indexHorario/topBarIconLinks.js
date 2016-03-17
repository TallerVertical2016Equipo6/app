//topBarIcon AreaMenu

//links al mapa
$(document).ready(function(){
	//console.log("ready");
	$("#backArrow").click(function(){
		$(location).attr('href','index.html');
	});
    
    // inicia el dropdown 
    $('.ui.dropdown')
        .dropdown()
    ;	
    
   /*$('#monHorario')
    .dropdown('set value', "B")
    ;*/
    console.log("hola");
});			