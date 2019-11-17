function myFunction(){
// On cherche les nombres premiers n fois
var nombremax = document.getElementById("numero").value;
//se compteur 
compteur1=2;
compteur=1;
// tant que i  n'est pas arrivé a 5000
while(compteur<=nombremax){

var compteur2 = 1;

var r = Math.floor(Math.sqrt(compteur1)); 

do {
compteur2++;
} while(compteur2 <= r && compteur1%compteur2 != 0);

if(compteur2 > r) {

// On affiche les nombres premiers trouvés
		$("#decodedMessage").html($('#decodedMessage').html() + compteur1+"\t");

//incrementer i
compteur++;

}
compteur1++;

}
}