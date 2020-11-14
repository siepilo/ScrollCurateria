var body = document.body,
    html = document.documentElement;

var height = Math.max( body.scrollHeight, body.offsetHeight, 
                       html.clientHeight, html.scrollHeight, html.offsetHeight );


$(document).ready(function(){

	for (let i = 0; i < 1000; i++){


		$('body,html').animate({scrollTop: (height)}, 3000);
		$('body,html').animate({scrollTop: (-height)}, 0);		 

	}

});


