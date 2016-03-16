//hello
//id del div que encierra todos los inputs: parentOfInputs
var parentArray;

function initializeParentArray(){
	
	var parent = document.getElementById("parentOfInputs");
	parentArray = $("input");
	console.log(parentArray);
	//console.log(parentArray.length);

	for(var i = 0; i < parentArray.length; i++){
		
			parentArray[i].click(function(e){
				console.log(this);
			});
		
		

	}
}
//se va a implementar lo de cambiar de imagen cuando estas esten listas
function checkActiveOption(indexOption){
	
	for(i = 0; i < parentArray.length; i++){
		if(i == indexOption){
			parentArray[i].checked = true;
			//aqui cambiar la imagen de fondo
		}else{
			parentArray[i].checked = false;
		}
	}
}
function printSomething(){
	console.log("believe");
}








window.onload = function(){
	initializeParentArray();
};
