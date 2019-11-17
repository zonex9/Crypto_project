function myFunction(){
	
	var premier = document.getElementById("premier").value;
 	var dernier = document.getElementById("dernier").value;
	var f = document.getElementById("decodedMessage").value;
	var i;
	var k;
  var j;
  var sipremier;

  if(premier<2){
  	premier = 2;
  }
  for (i=premier;i<=dernier;i++){
  	sipremier = 1;
     	for(j=2;j<i/2;j++){
     		if (i%j ==0){
					sipremier = 0;
          break;
      }
     }
    if (sipremier == 1){
		$("#decodedMessage").html($('#decodedMessage').html() + i+"\t");
	}
  }
}




