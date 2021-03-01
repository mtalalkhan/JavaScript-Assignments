var inc$ = 5;
document.write("Value after variable declaration is "  + inc$);


var inc$1 = ++inc$;
document.write("<br>");
document.write("Value after icreament is " + inc$1);


var inc$2 = 7 + inc$1;
document.write("<br>");
document.write("Value after addition is " + inc$2);


var inc$3 = --inc$2;
document.write("<br>");
document.write("Value after decrement is " + inc$3);


var inc$4 = inc$3 * 0 / 3 ;
document.write("<br>");
document.write("The remainder is " + inc$4);
