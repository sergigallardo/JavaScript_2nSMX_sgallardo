
//TASCA 1
//Demana introduir dos números i digues quin és més gran, quin és més petit o si són iguals.
var num1 = prompt("Introdueix un número", "0");
var num2 = prompt("Introdueix un altre número", "0");
if (true) {
	document.write("<h1>Comparador de numeros</h1>");
	}
if (num1 = num2) {
document.write(num1+"&#62;"+num2);
} else {
document.write(num1+"&#60;"+num2);
}


//TASCA 2
//Demana introduir un número, i mostra la seva taula de multiplicar.
var y;
y=prompt('Digues quin numero vols multiplicar','');
y=parseInt(y);
if (true) {
	document.write("<h1>Taula de Multiplicar</h1>");
	}
for (var x = 0; x <= 10; x++) {
	r=y*x;
	document.write(y+"x"+x+"="+ r + "<br>");
}

//TASCA 3
//Demana introduir el nom, l’edat i el correu electrònic, i mostra’ls per pantalla juntament amb el text:
var nom = window.prompt("Introdueix el teu nom", "Maria");
var cognoms = window.prompt("Introdueix els teus cognoms", "Garcia");
var anys = window.prompt("Introdueix la teva edat", "numero d'anys");
var email = window.prompt("Introdueix la teva adreça electronica", "nom@gmail.com");
if (true) {
	document.write("<h1>Formulari</h1>");
	}
if (true){
	document.write("Hola "+ nom+" "+ cognoms +"</br>");
}

if(true){
		document.write("Moltes gràcies per presentar-te, i dir-me que tens "+anys+" anys </br>");
}
if(true){
		document.write("Em guardaré el teu correu electrònic "+email+" per si mai et vull enviar un missatge. </br>");
}
if(true){
		document.write("A reveure!");
}
