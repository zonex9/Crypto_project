function nombrespremiersfibonacci(){
	// On cherche les nombres premiers n fois
var nombremax = document.getElementById("numero").value;
var fibo = [];
var premiers = [];
//se compteur 
compteur1=2;
compteur=1;
//fibonacci
	var a,b,result;
	a=0;
	b=1;

// end
// tant que i  n'est pas arrivé a 5000
while(compteur<=nombremax){

var compteur2 = 1;

var r = Math.floor(Math.sqrt(compteur1)); 

do {
compteur2++;
} while(compteur2 <= r && compteur1%compteur2 != 0);

if(compteur2 > r) {


			premiers.push(compteur1);
			fibo.push(result);
			//$("#decodedMessage").html($('#decodedMessage').html() + "result ; " +result+  "compteur 1 : "+compteur1 +"\n");
			result = a+b;
			a=b;
			b=result;

//incrementer i
compteur++;
	

}

compteur1++;

}
		for (var i = 1, c = premiers.length; i <= c; i++) {
			for (var j = 1, d = fibo.length; j <= d; j++) {
					if (premiers[i] === j){
				$("#decodedMessage").html($('#decodedMessage').html() + "Rang n  : "+premiers[i] + ", Fibonacci(n) : " +fibo[j-1]+"\n");

					}
			}
		}


}


