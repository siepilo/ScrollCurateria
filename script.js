var body = document.body,
	    html = document.documentElement;

var height = Math.max( body.scrollHeight, body.offsetHeight, 
	                       html.clientHeight, html.scrollHeight, html.offsetHeight );

var cancelled = false;

var ripetizioni = 4

function mouseDown() {
	var tempScrollTop = $(window).scrollTop();
	console.log("Scroll from Top: " + tempScrollTop.toString());
	$('body,html').animate({scrollTop: (tempScrollTop)}, 0);
	var cancelled = true;
}

function mouseUp(){
	if (cancelled){
		console.log("esci");
    	return;
  	} 

  	var caso = Math.floor(Math.random() * height)
	console.log(caso)

  	for (x = 1; x < ripetizioni; x ++){

  		if (x = ripetizioni-1){
  			$('body,html').animate({scrollTop: (caso)}, 1000);
  		}else{
			$('body,html').animate({scrollTop: (height)}, 1000);
			$('body,html').animate({scrollTop: (-height)}, 0);
		}
	}

}


function longRunningFunction() {


  console.log("entra")

  // do some work, but not all
  // save your progress to be able to resume when called again

  if (!done) {
    // release control, so that handlers can be called, and continue in 10ms
    setTimeout(longRunningFunction, 10);
  }
}