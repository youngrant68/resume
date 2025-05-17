function TemplateOneCourierSinglePage() {

  GetData();
  TempOneCourier();

}


function TempOneCourier() {




// Default export is a4 paper, portrait, using millimeters for units
var doc = new jsPDF()


// Declarations of the data

//var VertSpace = 0;

//var pdetails01 = document.getElementById("fname").value;

//var pdetails02 = document.getElementById("lname").value;

//var pdetails03 = document.getElementById("city").value;

//var pdetails04 = document.getElementById("state").value;

//var pdetails05 = document.getElementById("zip").value;

//var pdetails06 = document.getElementById("phonenumber").value;

//var pdetails07 = document.getElementById("email").value;

//var pdetails08 = document.getElementById("title").value;


// ***********************  Draw Header ****************************

doc.setDrawColor(0);
doc.setFillColor(HeaderCol01,HeaderCol02,HeaderCol03);
doc.rect(3, 3, 204, 34, 'F'); // filled maroon square

var firstname = pdetails01.toUpperCase();
var lastname = pdetails02.toUpperCase();
var fullname = firstname + " " + lastname;

doc.setFont("courier");
doc.setTextColor(HeaderTextCol01,HeaderTextCol02,HeaderTextCol03);
doc.setFontSize(34);
doc.text(8, 15, fullname); // Name

doc.setFontSize(28);
doc.text(9, 24, pdetails08); // Career Title

var addy = pdetails03 + ", " + pdetails04 + " " + pdetails05

var start01 = addy.length;
var start02 = start01*2.4;
var startpoint = 190 - start02;
doc.setFontSize(12);
doc.setFontType('bold');
doc.text(startpoint, 22, addy); // Address

var start01 = pdetails07.length;
var start02 = start01*2.4;
var startpoint = 190 - start02;
doc.setFontSize(12);
doc.text(startpoint, 28, pdetails07); // Email Address

var start01 = pdetails06.length;
var start02 = start01*2.4;
var startpoint = 190 - start02;
doc.setFontSize(12);
doc.text(startpoint, 34, pdetails06); // Phone Number



doc.save('resume-one-courier.pdf')

  }