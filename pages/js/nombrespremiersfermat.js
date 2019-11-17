function nombrespremiersfermat(){
(function() {
	let limit = 0;	 

	while ( limit < 5) {
		let firstPower = Math.pow(2, limit),
		    secondPower = Math.pow(2, firstPower),
		    fermatNumber = secondPower + 1;

		$("#decodedMessage").html($('#decodedMessage').html() + " Fermat(" + limit + ") est " + fermatNumber+"\n");

		limit++; 
	}
})();		
}