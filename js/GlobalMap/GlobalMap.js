//No longer useful file of code. Mainly made for testinig

var parentArray;

function initializeParentArray(){
	
	var parent = document.getElementById("parentOfInputs");
	parentArray = $("input");
	console.log(parentArray);


	for(var i = 0; i < parentArray.length; i++){
		
			parentArray[i].click(function(e){
				console.log(this);
			});
		
		

	}
}

function checkActiveOption(indexOption){
	
	for(i = 0; i < parentArray.length; i++){
		if(i == indexOption){
			parentArray[i].checked = true;
		
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
