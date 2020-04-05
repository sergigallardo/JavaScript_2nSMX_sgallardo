
//TASCA 1
//Imprimeix la taula de multiplicar del 9, utilitzant un bucle.
var y = 9;

for (var x = 0; x <= 10; x++) {
	r=y*x;
	document.write(y+"x"+x+"="+ r + "</br>");
}

//TASCA 2
//Imprimeix la taula de multiplicar del 5 a la inversa, utilitzant un bucle.

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
function generarTablas()
{
 var numTablas=document.getElementById('genera').value;
 document.write('<table>');
 for (var i=1; i<=12; i++)
 {
   document.write('<tr>');
  for (var j=1; j<=numTablas; j++)
  {
   document.write('<td>');
   document.write(j + " x " + i + " = "+i*j);
   document.write('</td>');
   document.write('<td>     </td>');
  }
   document.write('</tr>');
 }
  document.write('</table>');
}
 document.write('¿Fins a quina taula de multiplicar vols generar?');
 document.write('<input type="text" name="genera", id="genera" />');
 document.write('<input type="button"  value="Genera" onclick="generarTablas()"/>');
