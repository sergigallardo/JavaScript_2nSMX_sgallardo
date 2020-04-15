//TASCA 1
//Imprimeix la taula de multiplicar del 9, utilitzant un bucle.
document.write("<h1>Tasca 1</h1>");
var y = 9;

for (var x = 0; x <= 10; x++) {
	r=y*x;
	document.write(y+"x"+x+"="+ r + "</br>");
}

//TASCA 2
//Imprimeix la taula de multiplicar del 5 a la inversa, utilitzant un bucle.
document.write("<h1>Tasca 2</h1>");
var s = 5;
var r1= 1;

for (mult = 10; r1 <= 11; mult--) {
		document.write(s+ " x " +mult+ " = " +s*mult+ "</br>");
	r1++;
	if( mult == 10){
		document.write ("</br>");
		}
}
//TASCA 3
//Imprimeix totes les taules de multiplicar, utilitzant dos o més bucles.
document.write("<h1>Tasca 3</h1>");
var bucle = 1;
var cont = 0 ;
var cont2 = 1;

document.write("<table>");

while(bucle <= 100){
	if(cont == 0){
		document.write("<tr>");

	}
	 cont++;
	 document.write("<td>"+cont2+"x" +cont+"=" +cont * cont2+"</td>");

	 bucle++;
	 if(cont == 10){
		 	document.write("</td>");
			cont = 0;
			cont2++;
	 }
}
document.write("</table>")
