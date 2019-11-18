function nombrespremiersmersenne()
{
	var nombremax = document.getElementById("numero").value;

	var i=1;
	var k=0;
	while (i <= nombremax){
		k = Math.pow(2,i)-1;
		$("#decodedMessage").html($('#decodedMessage').html() + k +"\n");
		i++;
	
	}

}



function nombrespremiersmersenne(){
	// On cherche les nombres premiers n fois

var nombremax = document.getElementById("numero").value;
var mersenne = [];
var premiers = [];
//se compteur 
compteur1=2;
compteur=1; //compteur mersenne

//mersenne


// end
// tant que i  n'est pas arrivé a 5000
while(compteur<=nombremax){

var compteur2 = 1;

var r = Math.floor(Math.sqrt(compteur1)); 

do {
compteur2++;
} while(compteur2 <= r && compteur1%compteur2 != 0);

if(compteur2 > r) {
			//mersenne
			k = Math.pow(2,compteur)-1;
			premiers.push(compteur1);
			mersenne.push(k);
			//$("#decodedMessage").html($('#decodedMessage').html() + "result ; " +result+  "compteur 1 : "+compteur1 +"\n");

//incrementer i
compteur++;
	

}

compteur1++;

}
		for (var i = 1, c = premiers.length; i <= c; i++) {
			for (var j = 1, d = mersenne.length; j <= d; j++) {
					if (premiers[i] === j){
				$("#decodedMessage").html($('#decodedMessage').html() + "Rang n  : "+premiers[i] + ", Mersenne(n) : " +mersenne[j-1]+"\n");

					}
			}
		}


}




