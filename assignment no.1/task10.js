var f = parseInt(prompt("Input fahrenhiet Value"));
var c = parseInt(prompt("Input celsius Value"));

var celsius = (f-32) * 5/9;
var fahrenhiet = (c*9/5)+32;

document.write(f + "\u00B0F" + " " + "is" + " " + celsius + "\u00B0C");
document.write("<br>");
document.write(c + "\u00B0C is" + " " +  fahrenhiet + "\u00B0F");