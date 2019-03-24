
var delay = 6000;
var automatico=true;  
            /* false; */


if (automatico){ /* MODO AVANCE AUTOMATICO  */	

			var slideIndex = 0;
			carousel();
			


			function plusDivs(n) {
				showDivs(slideIndex += n);
			
			}

			function showDivs(n) {
				var i;
				var x = document.getElementsByClassName("mySlides");
				if (n > x.length) {slideIndex = 1}    
					if (n < 1) {slideIndex = x.length}
						for (i = 0; i < x.length; i++) {
							x[i].style.display = "none";  
						}
				x[slideIndex-1].style.display = "block"; 

			}

			function carousel() {
				var i;
				var x = document.getElementsByClassName("mySlides");
				for (i = 0; i < x.length; i++) {
					x[i].style.display = "none"; 
				}
				slideIndex++;
				if (slideIndex > x.length) {slideIndex = 1} 
					x[slideIndex-1].style.display = "block"; 
		    	setTimeout(carousel, delay); // Change image every 2 seconds
			}

}  else  {     /* MODO AVANCE  MANUAL  */

				var slideIndex = 1;
				showDivs(slideIndex);

				function plusDivs(n) {
					showDivs(slideIndex += n);
					alert("hola");
				}

				function showDivs(n) {
					var i;
					var x = document.getElementsByClassName("mySlides");
					if (n > x.length) {slideIndex = 1}    
						if (n < 1) {slideIndex = x.length}
							for (i = 0; i < x.length; i++) {
								x[i].style.display = "none";  
							}
					x[slideIndex-1].style.display = "block";  
				}



}