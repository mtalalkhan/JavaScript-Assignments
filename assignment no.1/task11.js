var d = parseInt(prompt("Input Dollar Amount"));
var s = parseInt(prompt("Input Saudi Riyal Amount"));
var dollarConvert = d * 155;
var riyalConvert = s * 41;
var pakCurrency = dollarConvert + riyalConvert;
console.log(pakCurrency);

document.write("<h1>Curency in PKR</h1>");

document.write("<br>");
document.write("<br>");
document.write("<br>");
document.write("<br>");
document.write("<br>");
document.write("<br>");
document.write("<br>");

document.write("Dollar " + d);
document.write("<br>");
document.write("Conver Dollar into Rupees = " + dollarConvert);
document.write("<br>");
document.write("<br>");
document.write("Riyal " + s);
document.write("<br>");
document.write("Conver Riyal into Rupees = " + riyalConvert);
document.write("<br>");
document.write("<br>");
document.write("<br>");
document.write("Total Currency in PKR:" + " " + pakCurrency); 