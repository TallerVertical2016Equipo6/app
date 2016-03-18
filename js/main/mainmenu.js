
		$('.ui.search.dropdown').dropdown();
		
		
	
			
			
			$('#changing-box2').hide();
			$('#search-b').hide();
			
			
			/*
			
			BUTTON FUNCTIONS
			---------------------
			unleash the next menu and store user prefs on url
			
			*/
			
			//Enter aplication as a student
			$('#personal-b').on('click', function (){
				
				
				$('#changing-box').transition({
					animation	: 'scale',
					duration	: '1s',
					onComplete : function(){
					
						$('#changing-box2').transition('fade up');
						$('#search-b').transition('fade up');
		
						}
					})
			});
			
			//Enter aplication as a visitant
			$('#visitant-b').on('click', function (){
			
				$('#box1').transition('scale', '1.5');
				$('#middle-container').transition({
					animation: 'scale',
					duration : '2',
					onComplete : function(){
						location.replace("AreaMenu.html?userType=visitante&area=nulo");
				
					}
					
				})
			
			});
			
			
			//Selects area and makes the area search
			$('#search-b').on('click', function (){
			
				//$.jStorage.set("selected-area", $('#dropdown').val());
				
				$('#box1').transition('scale', '1.5');
				$('#middle-container').transition({
					animation: 'scale',
					duration : '2',
					onComplete : function(){
						
						if($('#dropdown').val() == ""){
							location.replace("AreaMenu.html?area=" +"null" +"&userType=personal");
						}else{
							location.replace("AreaMenu.html?area=" +$('#dropdown').val() +"&userType=personal");
						}
					}
					
				})
			
			});
			
		
			
