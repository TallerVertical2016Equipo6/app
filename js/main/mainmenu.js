
		$('.ui.search.dropdown').dropdown();
		
		
		//load json content 
		//var localData = JSON.parse(localStorage.getItem(''));
		
			
			$('#changing-box2').hide();
			$('#search-b').hide();
			
			$('#personal-b').on('click', function (){
				
				
				$.jStorage.set("user-type", "alumni");
				
				$('#changing-box').transition({
					animation	: 'scale',
					duration	: '1s',
					onComplete : function(){
					
						$('#changing-box2').transition('fade up');
						$('#search-b').transition('fade up');
		
						}
					})
			});
			
			
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
			
			
			$('#search-b').on('click', function (){
			
				$.jStorage.set("selected-area", $('#dropdown').val());
				
				$('#box1').transition('scale', '1.5');
				$('#middle-container').transition({
					animation: 'scale',
					duration : '2',
					onComplete : function(){
						location.replace("AreaMenu.html?area=" +$('#dropdown').val() +"&userType=personal");
				
					}
					
				})
			
			});
			
		
			