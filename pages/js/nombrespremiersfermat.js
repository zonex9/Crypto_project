function nombrespremiersfermat(){
	var p = document.getElementById("numero").value;

(function() {
	let limit = 1;	 

	while ( limit <= p) {
		let firstPower = Math.pow(2, limit),
		    secondPower = Math.pow(2, firstPower),
		    fermatNumber = secondPower + 1;

		//$("#decodedMessage").html($('#decodedMessage').html() + " Fermat(" + limit + ") est " + fermatNumber+"\n");
				$("#decodedMessage").html($('#decodedMessage').html() + "Rang n  : "+limit +  ", Fermat(" + limit + ") : " +fermatNumber+"\n");

		limit++; 
	}
})();		
}