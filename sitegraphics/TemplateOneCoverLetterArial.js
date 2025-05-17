function CoverLetterTemplateOneArial() {

  GetData();
  CoverLetterTempOneArial();

}


function CoverLetterTempOneArial() {




  // Default export is a4 paper, portrait, using millimeters for units
  var doc = new jsPDF()


  // Declarations of the data

  var BTStart = 10; //Body text start point
  var BTWidth = 190; // Body text width

  var VertSpace = 0;
  //var BTStart = 65; //Body text start point
//  var BTWidth = 140; // Body text width
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
  doc.rect(2, 2, 206, 36);
  doc.rect(3, 3, 204, 34, 'F'); // filled maroon square

  var firstname = pdetails01.toUpperCase();
  var lastname = pdetails02.toUpperCase();
  var fullname = firstname + " " + lastname;

  doc.setFont("helvetica");
  doc.setTextColor(HeaderTextCol01,HeaderTextCol02,HeaderTextCol03);
  doc.setFontSize(HeaderText01);
  doc.text(8, 15, fullname); // Name

  var HeaderDiff = 24-HTDiff;
  doc.setFontSize(HeaderText02);
  doc.text(8, HeaderDiff, pdetails08); // Career Title

  var addy = pdetails03 + ", " + pdetails04 + " " + pdetails05;

  var start01 = addy.length;
  //var start02 = start01*1.5; //10pt
  //var start02 = start01*1.7; // 11pt
  //var start02 = start01*1.9; // 12pt
  var start02 = start01*SP01;
  var startpoint = 190 - start02;
  doc.setFontSize(13);
  doc.text(startpoint, 22, addy); // Address

  var start01 = pdetails07.length;
  //var start02 = start01*1.6; // 10pt
  //var start02 = start01*1.8; // 11pt
  //var start02 = start01*2.0; // 12pt
  var start02 = start01*SP02;
  var startpoint = 190 - start02;
  doc.setFontSize(13);
  doc.text(startpoint, 28, pdetails07); // Email Address

  var start01 = pdetails06.length;
  //var start02 = start01*1.5; // 10pt
  //var start02 = start01*1.7; // 11pt
  //var start02 = start01*1.9; // 12pt
  var start02 = start01*SP01;
  var startpoint = 190 - start02;
  doc.setFontSize(13);
  doc.text(startpoint, 34, pdetails06); // Phone Number

  //doc.setDrawColor(HeadingTextCol01, HeadingTextCol02, HeadingTextCol03);
//  doc.line(LinePoint, 38, LinePoint,297); // Summary Section Line

  // ***********************  Draw Summary ****************************

  var SummaryTop = 46;
  var SummarySpace = 46;


  doc.setFontSize(TextSize);
  doc.setTextColor(BodyTextCol01,BodyTextCol02,BodyTextCol03);

  var paragraph = CoverLetterContentResume;
  var lines = doc.splitTextToSize(paragraph, BTWidth);
  doc.text(BTStart, SummarySpace, lines);  // Career Summary





  // ***********************  Save File ****************************

  doc.save('cover-letter-one-arial.pdf')

    }
