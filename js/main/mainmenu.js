
		$('.ui.search.dropdown').dropdown();
		
		
		if($.jStorage.get("user-type") === null ){
			
			$('#changing-box2').hide();
			$('#search-b').hide();
			
		
			alert("nothing");
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
						
						location.replace("AreaMenu.html");
				
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
						

						location.replace("AreaMenu.html");
				
					}
					
				})
			
			});
			
			
				
		
		}else{


		
		
			$('#changing-box').hide();
				//skip to area and horario
				$('#search-b').on('click', function (){
				
				
					$.jStorage.set("selected-area", $('#dropdown').val());
					
					$('#box1').transition('scale', '1.5');
					$('#middle-container').transition({
						animation: 'scale',
						duration : '2',
						onComplete : function(){

							location.replace("AreaMenu.html");
					
						}
						
					})
				
				
			});
		
			
		}