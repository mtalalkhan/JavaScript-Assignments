var time = prompt("Whats time is its")
var morning = prompt("AM/PM?");

if (time >= 0000  && time < 1200 && morning == "AM") {
    alert("Good Morning!");
}
else if (time >= 1200  && time < 1700 || time < 5 && morning == "PM") {
    alert("Good Afternoon!");
}
else if (time >=1700 || time >= 5 && time < 9 && time < 2100 && morning == "PM") {
    alert("Good Evening!");
}
else if (time >= 9 || time >=2100 &&  time <=2159 || time <=11.99 && morning == "PM") {
    alert("Good Night!");
}
else {
    alert("Wrong Input");
}
