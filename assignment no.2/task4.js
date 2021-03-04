   var totalMarks = 300;
    var marksObtained = parseInt(prompt("Input your Marks Obtained"));
    var percentage = (parseInt(marksObtained / 300 * 100));

    document.write("<h1>Marks sheet</h1>");
    document.write("<br>");
    document.write("<br>");
    document.write("<br>");
    document.write("<br>");
    document.write("Total Marks : "  + totalMarks);
    document.write("<br>");
    document.write("Marks Obtained : " + marksObtained);
    document.write("<br>");
    document.write("Percentage :" + " " + percentage + "%");
    document.write("<br>");
    
    document.write("<br>");    
    if (marksObtained > 240) {
        
        document.write("Grade A<sup>+</sup>");
        document.write("<br>");
        document.write("Remarks : Excellent");
    }
   else if (marksObtained > 209) {
    document.write("Grade A");
    document.write("<br>");
    document.write("Remarks : Good");
   }
   else if (marksObtained > 180) {
    document.write("Grade B");
    document.write("<br>");
    document.write("Remarks : You need to improve");
   }
   else if (marksObtained > 1) {
       document.write("Grade : Fail");
       document.write("<br>");
       document.write("Sorry");
   }
