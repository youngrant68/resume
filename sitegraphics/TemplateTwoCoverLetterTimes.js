function CoverLetterTemplateTwoTimes() {

  GetData();
  CoverLetterTempTwoTimes();

}



function CoverLetterTempTwoTimes() {




// Default export is a4 paper, portrait, using millimeters for units
var doc = new jsPDF()


// Declarations of the data
var BTStart = 10; //Body text start point
var BTWidth = 190; // Body text width

var VertSpace = 0;
//var BTStart = 65; //Body text start point
//var BTWidth = 140; // Body text width
var LinePoint = 60; // Vertical line point (Border of the side menu and body text)
var BulletPoint = 69; // Bullet points
var BPStart = 73;  // Start Bullet Point text
var BPWidth = 132;  //Bullet Point Text Width
//var LineHeight = 4.5; //Line height
var SBBullet = 8; // Sidebar Bullet Point
var SidebarLeftMargin = 4; //Sidebar Left Margin
var SBWidth = 52; // Sidebar column width
var RightColumn = 135;
// ***********************  Draw Header ****************************

doc.setDrawColor(HeaderCol01,HeaderCol02,HeaderCol03);
doc.setFillColor(HeaderCol01,HeaderCol02,HeaderCol03);
doc.setLineWidth(0.25);
//doc.rect(2, 2, 206, 36);
doc.rect(3, 3, 204, 30, 'F'); // filled maroon square

//doc.setLineWidth(2);
//doc.line(3, 35, 204, 35); // horizontal Lines
//doc.line(3, 36, 207, 36);

doc.setLineWidth(1.25);
//doc.line(3, 35, 204, 35); // horizontal Lines
doc.line(3, 34.8, 207, 34.8);

doc.setLineWidth(0.75);
//doc.line(3, 35, 204, 35); // horizontal Lines
doc.line(3, 36.7, 207, 36.7);

doc.setLineWidth(0.25);
//doc.line(3, 35, 204, 35); // horizontal Lines
doc.line(3, 38.1, 207, 38.1);

doc.setLineWidth(0.25);
doc.setDrawColor(HeadingTextCol01, HeadingTextCol02, HeadingTextCol03);
//doc.line(LinePoint, 38.1, LinePoint,297); // Vertical Section Line



var firstname = pdetails01.toUpperCase();
var lastname = pdetails02.toUpperCase();
var fullname = firstname + " " + lastname;

doc.setFont("times");
doc.setTextColor(HeaderTextCol01,HeaderTextCol02,HeaderTextCol03);
doc.setFontSize(HeaderText01);
//doc.text(8, 15, fullname); // Name
doc.text(fullname, 105, 15, 0, 'center');

var HeaderDiff = 24-HTDiff;
doc.setFontSize(HeaderText02);
//doc.text(8, HeaderDiff, pdetails08); // Career Title
doc.text(pdetails08, 105, HeaderDiff, 0, 'center');

var addy = pdetails03 + ", " + pdetails04 + " " + pdetails05;
var addydetails = pdetails07 + "  |  " + pdetails06 + "  |  " + addy
doc.setFontSize(14);

doc.text(addydetails, 105, 30, 0, 'center');
//doc.text(startpoint, 28, pdetails07); // Email Address

//doc.text(startpoint, 34, pdetails06); // Phone Number




// ***********************  Draw Summary ****************************

var SummaryTop = 46;
var SummarySpace = 46;


doc.setFontSize(TextSize);
doc.setTextColor(BodyTextCol01,BodyTextCol02,BodyTextCol03);

var paragraph = CoverLetterContentResume;
var lines = doc.splitTextToSize(paragraph, BTWidth);
doc.text(BTStart, SummarySpace, lines);  // Career Summary





// ***********************  Save File ****************************

doc.save('cover-letter-two-times.pdf')

  }
