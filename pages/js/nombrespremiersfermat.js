function nombrespremiersfermat(){
	var nombre = document.getElementById("numero").value;

(function() {	
	for ( var i=1;i<=nombre;i++)  {
		var n1 = Math.pow(2, i),
		    n2 = Math.pow(2, n1),
		    fermat = n2 + 1;

		//$("#decodedMessage").html($('#decodedMessage').html() + " Fermat(" + i + ") est " + fermat+"\n");
				$("#decodedMessage").html($('#decodedMessage').html() + "Rang n  : "+i +  ", Fermat(" + i + ") : " +fermat+"\n");
	}
})();		
}
