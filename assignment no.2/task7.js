var num1 = parseInt(prompt("Input a first number"));
var num2 = parseInt(prompt("Input a second number"));
var opera = prompt("Input a operation");
document.write("First Number = " + num1);
document.write("<br>");
document.write("Second Number = " + num2);
document.write("<br>");
if (opera == "+") {
    document.write("Adding of to Numbers is " + (num1+num2));
}

else if (opera == "-") {
    document.write("Subracting of two Numbers is " + (num1-num2));
}

else if (opera == "*") {
    document.write("Multiplication of two Numbers is " + (num1*num2)); 
}
else  if (opera == "/") {
    document.write("Division of two Number is " + (num1/num2));
}

else {
    document.write("Please Input correct values");
}
