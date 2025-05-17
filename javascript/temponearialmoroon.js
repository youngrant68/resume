    
function temponearialmaroon() {


     
// Default export is a4 paper, portrait, using millimeters for units
var doc = new jsPDF()


// Declarations of the data

var VertSpace = 60;

var pdetails01 = document.getElementById("fname").value;

var pdetails02 = document.getElementById("lname").value;

var pdetails03 = document.getElementById("city").value;

var pdetails04 = document.getElementById("state").value;

var pdetails05 = document.getElementById("phonenumber").value;

var pdetails06 = document.getElementById("email").value;

var pdetails07 = document.getElementById("title").value;


// ***********************  Draw Header ****************************

doc.setDrawColor(0);
doc.setFillColor(139,0,0);
doc.rect(3, 3, 204, 34, 'F'); // filled maroon square

doc.setTextColor(255,255,255);
doc.setFontSize(30);
doc.text(pdetails01, 105, 18, 0, 'center');





doc.save('resume-one-arial-maroon.pdf')

  }