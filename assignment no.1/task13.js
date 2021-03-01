var a = parseInt(prompt("Input First No."));
var b = parseInt(prompt("Input Second NO."));


document.write(--a);
document.write("<br/>");
document.write("<br/>");

document.write(--a - --b);
document.write("<br/>");
document.write("<br/>");

document.write(--a - --b + ++b);
document.write("<br/>");
document.write("<br/>");

document.write(--a - --b + ++b + b--);
document.write("<br/>");
document.write("<br/>");

document.write("a is" + " " + a);
document.write("<br/>");
document.write("b is" + " " + b);
document.write("<br>");
var result = --a - --b + ++b + b++;
document.write("Result is" + " " + result);

