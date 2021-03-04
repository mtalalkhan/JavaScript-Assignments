var gnum = prompt("Gusses a number between 1 to 10");
var num = Math.ceil(Math.random() * 10);
if (gnum == num) {
    alert("Congrats your gusses is Matched");
}
else if (gnum < num) {
    alert("Your No. is smaller than Guss No. ");
}
else if (gnum > num) {
    alert("Your No. is greater than Guss No.");
}

else {
    alert("Sorry your guss number is not Matched. " + ("The gusses number is " + num));
}