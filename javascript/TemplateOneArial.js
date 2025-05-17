function TemplateOneArialSinglePage() {

  GetData();
  TempOneArial();

}



function TempOneArial() {




// Default export is a4 paper, portrait, using millimeters for units
var doc = new jsPDF()


// Declarations of the data

var VertSpace = 0;
var BTStart = 65; //Body text start point
var BTWidth = 140; // Body text width
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
var startpoint = 198 - start02;
doc.setFontSize(TextSize);
doc.text(startpoint, 22, addy); // Address

var start01 = pdetails07.length;
//var start02 = start01*1.6; // 10pt
//var start02 = start01*1.8; // 11pt
//var start02 = start01*2.0; // 12pt
var start02 = start01*SP02;
var startpoint = 198 - start02;
doc.setFontSize(TextSize);
doc.text(startpoint, 28, pdetails07); // Email Address

var start01 = pdetails06.length;
//var start02 = start01*1.5; // 10pt
//var start02 = start01*1.7; // 11pt
//var start02 = start01*1.9; // 12pt
var start02 = start01*SP01;
var startpoint = 198 - start02;
doc.setFontSize(TextSize);
doc.text(startpoint, 34, pdetails06); // Phone Number

doc.setDrawColor(HeadingTextCol01, HeadingTextCol02, HeadingTextCol03);
doc.line(LinePoint, 38, LinePoint,297); // Summary Section Line





// ***********************  Skills Section ****************************

var SkillsTop = 46 + spacingskills;
var SkillsBottom = SkillsTop;

doc.setFontSize(HeadingSize);
doc.setTextColor(HeadingTextCol01,HeadingTextCol02,HeadingTextCol03);

var skillhead = SkillsHeader.toUpperCase();
doc.text(SidebarLeftMargin, SkillsBottom, skillhead); // Skills Header
var empt = document.skills.skillsheader.value;
if (empt === ""){
SkillsBottom = SkillsBottom;
} else {
SkillsBottom = SkillsBottom + (LineHeight*1.25);
}

doc.setFontSize(TextSize);
doc.setTextColor(BodyTextCol01,BodyTextCol02,BodyTextCol03);


doc.text(SBBullet, SkillsBottom, Skill01);
var empt = document.skills.skill01.value;
if (empt === ""){
SkillsBottom = SkillsBottom;
} else {
doc.text(SidebarLeftMargin, SkillsBottom, '\u2022');
SkillsBottom = SkillsBottom + LineHeight;
}

doc.text(SBBullet, SkillsBottom, Skill02);
var empt = document.skills.skill02.value;
if (empt === ""){
SkillsBottom = SkillsBottom;
} else {
doc.text(SidebarLeftMargin, SkillsBottom, '\u2022');
SkillsBottom = SkillsBottom + LineHeight;
}

doc.text(SBBullet, SkillsBottom, Skill03);
var empt = document.skills.skill03.value;
if (empt === ""){
SkillsBottom = SkillsBottom;
} else {
doc.text(SidebarLeftMargin, SkillsBottom, '\u2022');
SkillsBottom = SkillsBottom + LineHeight;
}

doc.text(SBBullet, SkillsBottom, Skill04);
var empt = document.skills.skill04.value;
if (empt === ""){
SkillsBottom = SkillsBottom;
} else {
doc.text(SidebarLeftMargin, SkillsBottom, '\u2022');
SkillsBottom = SkillsBottom + LineHeight;
}

doc.text(SBBullet, SkillsBottom, Skill05);
var empt = document.skills.skill05.value;
if (empt === ""){
SkillsBottom = SkillsBottom;
} else {
doc.text(SidebarLeftMargin, SkillsBottom, '\u2022');
SkillsBottom = SkillsBottom + LineHeight;
}

doc.text(SBBullet, SkillsBottom, Skill06);
var empt = document.skills.skill06.value;
if (empt === ""){
SkillsBottom = SkillsBottom;
} else {
doc.text(SidebarLeftMargin, SkillsBottom, '\u2022');
SkillsBottom = SkillsBottom;
}

// ***********************  Education Section  Course ONE ****************************

var EducationTop = SkillsBottom + 15 + spacingeducation;
var EducationBottom = EducationTop;

doc.setFontSize(HeadingSize);
doc.setTextColor(HeadingTextCol01,HeadingTextCol02,HeadingTextCol03);

var educationhead = EducationHeader.toUpperCase();
doc.text(SidebarLeftMargin, EducationBottom, educationhead); // Education Header
var empt = document.education.educationheader.value;
if (empt === ""){
EducationBottom = EducationBottom;
} else {
EducationBottom = EducationBottom + (LineHeight*1.25);
}


doc.setFontSize(TextSize);
doc.setTextColor(BodyTextCol01,BodyTextCol02,BodyTextCol03);
doc.setFontType("bold");

doc.text(SidebarLeftMargin, EducationBottom, CourseOneInstitute); // Course one institute
var empt = document.education.courseoneinstitute.value;
if (empt === ""){
EducationBottom = EducationBottom;
} else {
EducationBottom = EducationBottom + LineHeight;
}

doc.setFontType("normal");

doc.text(SidebarLeftMargin, EducationBottom, CourseOneQual); // Course one qualification
var empt = document.education.courseonequal.value;
if (empt === ""){
EducationBottom = EducationBottom;
} else {
EducationBottom = EducationBottom + LineHeight;
}

doc.text(SidebarLeftMargin, EducationBottom, CourseOneSubject); // Course one subject
var empt = document.education.courseonesubject.value;
if (empt === ""){
EducationBottom = EducationBottom;
} else {
EducationBottom = EducationBottom + LineHeight;
}

var empt = document.education.courseonecompleted.value;
if (empt === ""){
EducationBottom = EducationBottom;
} else {
doc.text(SidebarLeftMargin, EducationBottom, "Completed " + CourseOneCompleted); // Course one year completed
EducationBottom = EducationBottom;
}

// ***********************  Education Section  Course two ****************************

EducationBottom = EducationBottom + 10 + spacingeducationPos2;

doc.setFontType("bold");

doc.text(SidebarLeftMargin, EducationBottom, CourseTwoInstitute); // Course two institute

var empt = document.education.coursetwoinstitute.value;
if (empt === ""){
EducationBottom = EducationBottom;
} else {
EducationBottom = EducationBottom + LineHeight;
}

doc.setFontType("normal");

doc.text(SidebarLeftMargin, EducationBottom, CourseTwoQual); // Course two qualification
var empt = document.education.coursetwoqual.value;
if (empt === ""){
EducationBottom = EducationBottom;
} else {
EducationBottom = EducationBottom + LineHeight;
}

doc.text(SidebarLeftMargin, EducationBottom, CourseTwoSubject); // Course two subject
var empt = document.education.coursetwosubject.value;
if (empt === ""){
EducationBottom = EducationBottom;
} else {
EducationBottom = EducationBottom + LineHeight;
}

var empt = document.education.coursetwocompleted.value;
if (empt === ""){
EducationBottom = EducationBottom;
} else {
doc.text(SidebarLeftMargin, EducationBottom, "Completed " + CourseTwoCompleted); // Course two year completed
EducationBottom = EducationBottom;
}


// ***********************  Education Section  Course three ****************************

EducationBottom = EducationBottom + 10 + spacingeducationPos3;

doc.setFontType("bold");

doc.text(SidebarLeftMargin, EducationBottom, CourseThreeInstitute); // Course three institute

var empt = document.education.coursethreeinstitute.value;
if (empt === ""){
EducationBottom = EducationBottom;
} else {
EducationBottom = EducationBottom + LineHeight;
}

doc.setFontType("normal");

doc.text(SidebarLeftMargin, EducationBottom, CourseThreeQual); // Course three qualification
var empt = document.education.coursethreequal.value;
if (empt === ""){
EducationBottom = EducationBottom;
} else {
EducationBottom = EducationBottom + LineHeight;
}

doc.text(SidebarLeftMargin, EducationBottom, CourseThreeSubject); // Course three subject
var empt = document.education.coursethreesubject.value;
if (empt === ""){
EducationBottom = EducationBottom;
} else {
EducationBottom = EducationBottom + LineHeight;
}

var empt = document.education.coursethreecompleted.value;
if (empt === ""){
EducationBottom = EducationBottom;
} else {
doc.text(SidebarLeftMargin, EducationBottom, "Completed " + CourseThreeCompleted); // Course three completed
EducationBottom = EducationBottom;
}

// ***********************  Education Section  Course four ****************************

EducationBottom = EducationBottom + 10 + spacingeducationPos4;

doc.setFontType("bold");

doc.text(SidebarLeftMargin, EducationBottom, CourseFourInstitute); // Course four institute

var empt = document.education.coursefourinstitute.value;
if (empt === ""){
EducationBottom = EducationBottom;
} else {
EducationBottom = EducationBottom + LineHeight;
}

doc.setFontType("normal");

doc.text(SidebarLeftMargin, EducationBottom, CourseFourQual); // Course four qualification
var empt = document.education.coursefourqual.value;
if (empt === ""){
EducationBottom = EducationBottom;
} else {
EducationBottom = EducationBottom + LineHeight;
}

doc.text(SidebarLeftMargin, EducationBottom, CourseFourSubject); // Course four subject
var empt = document.education.coursefoursubject.value;
if (empt === ""){
EducationBottom = EducationBottom;
} else {
EducationBottom = EducationBottom + LineHeight;
}

var empt = document.education.coursefourcompleted.value;
if (empt === ""){
EducationBottom = EducationBottom;
} else {
doc.text(SidebarLeftMargin, EducationBottom, "Completed " + CourseFourCompleted); // Course four completed
EducationBottom = EducationBottom;
}


// ***********************  Extra Section 1 Sidebar Paragraph****************************

//var ExtraOneTop = ExtraTwoLeftSpace + 10 + spacingextraOnePos2
//var ExtraOneSpace = ExtraTwoLeftSpace + 10 + spacingextraOnePos2

var ExtraSidebarATop = EducationBottom + 15 + spacingextrasidebarPara;
var ExtraSidebarABottom = ExtraSidebarATop;


doc.setFontSize(HeadingSize);
doc.setTextColor(HeadingTextCol01,HeadingTextCol02,HeadingTextCol03);
var inputVal = ExtraSidebarHeader2.toUpperCase();

doc.text(SidebarLeftMargin, ExtraSidebarABottom, inputVal); //Extra section one column Header

var empt = document.extrasidebar2.extrasidebarheader2.value;
if (empt === ""){
ExtraSidebarABottom = ExtraSidebarABottom;
} else {
ExtraSidebarABottom = ExtraSidebarABottom + (LineHeight*1.25);
}

doc.setFontSize(TextSize);
doc.setTextColor(BodyTextCol01,BodyTextCol02,BodyTextCol03);
doc.setFontType("normal");

var paragraph = ExtraSidebarPara;
var lines = doc.splitTextToSize(paragraph, SBWidth);
doc.text(SidebarLeftMargin, ExtraSidebarABottom, lines);  // Extra section one column text
var empt = document.extrasidebar2.extrasidebartext2.value;
if (empt === ""){
ExtraSidebarABottom = ExtraSidebarABottom;
} else {
var a = paragraph.length;
var b = a/35;
var c = Math.ceil(b);
ExtraSidebarABottom = (c*LineHeight) + ExtraSidebarATop;
}


// ***********************  Extra Section Sidebar Part one ****************************


var ExtraSidebarTop = ExtraSidebarABottom + 15 + spacingextrasidebarOne;
var ExtraSidebarBottom = ExtraSidebarTop;

doc.setFontSize(HeadingSize);
doc.setTextColor(HeadingTextCol01,HeadingTextCol02,HeadingTextCol03);

var extrasidebarhead = ExtraSidebarHeader.toUpperCase();
doc.text(SidebarLeftMargin, ExtraSidebarBottom, extrasidebarhead); // Sidebar Header
var empt = document.extrasidebar.extrasidebarheader.value;
if (empt === ""){
ExtraSidebarBottom = ExtraSidebarBottom;
} else {
ExtraSidebarBottom = ExtraSidebarBottom + (LineHeight*1.25);
}

doc.setFontSize(TextSize);
doc.setTextColor(BodyTextCol01,BodyTextCol02,BodyTextCol03);
doc.setFontType("bold");

doc.text(SidebarLeftMargin, ExtraSidebarBottom, ExtraSidebarSubTop); // Extra section sidebar Part 1 sub header
var empt = document.extrasidebar.extrasidebarsubtop.value;
if (empt === ""){
ExtraSidebarBottom = ExtraSidebarBottom;
} else {
ExtraSidebarBottom = ExtraSidebarBottom + LineHeight;
}

doc.setFontType("normal");

doc.text(SidebarLeftMargin, ExtraSidebarBottom, ExtraSidebarTopOne); // Extra section sidebar Part 1 Line one
var empt = document.extrasidebar.extrasidebartopone.value;
if (empt === ""){
ExtraSidebarBottom = ExtraSidebarBottom;
} else {
ExtraSidebarBottom = ExtraSidebarBottom + LineHeight;
}

doc.text(SidebarLeftMargin, ExtraSidebarBottom, ExtraSidebarTopTwo); // Extra section sidebar Part 1 line two
var empt = document.extrasidebar.extrasidebartoptwo.value;
if (empt === ""){
ExtraSidebarBottom = ExtraSidebarBottom;
} else {
ExtraSidebarBottom = ExtraSidebarBottom + LineHeight;
}

doc.text(SidebarLeftMargin, ExtraSidebarBottom, ExtraSidebarTopThree); // Extra section sidebar Part 1 line three
var empt = document.extrasidebar.extrasidebartopthree.value;
if (empt === ""){
ExtraSidebarBottom = ExtraSidebarBottom;
} else {
ExtraSidebarBottom = ExtraSidebarBottom + LineHeight;
}

doc.text(SidebarLeftMargin, ExtraSidebarBottom, ExtraSidebarTopFour); // Extra section sidebar Part 1 line four
var empt = document.extrasidebar.extrasidebartopfour.value;
if (empt === ""){
ExtraSidebarBottom = ExtraSidebarBottom;
} else {
ExtraSidebarBottom = ExtraSidebarBottom + LineHeight;
}

doc.text(SidebarLeftMargin, ExtraSidebarBottom, ExtraSidebarTopFive); // Extra section sidebar Part 1 line five
var empt = document.extrasidebar.extrasidebartopfive.value;
if (empt === ""){
ExtraSidebarBottom = ExtraSidebarBottom;
} else {
ExtraSidebarBottom = ExtraSidebarBottom;
}


// ***********************  Extra Section Sidebar Part two ****************************

ExtraSidebarBottom = ExtraSidebarBottom + 10 + spacingextrasidebarTwo;

doc.setFontType("bold");

doc.text(SidebarLeftMargin, ExtraSidebarBottom, ExtraSidebarSubBottom); // Extra section sidebar Part 2 sub header
var empt = document.extrasidebar.extrasidebarsubbottom.value;
if (empt === ""){
ExtraSidebarBottom = ExtraSidebarBottom;
} else {
ExtraSidebarBottom = ExtraSidebarBottom + LineHeight;
}

doc.setFontType("normal");

doc.text(SidebarLeftMargin, ExtraSidebarBottom, ExtraSidebarBottomOne); // Extra section sidebar Part 2 Line one
var empt = document.extrasidebar.extrasidebarbottomone.value;
if (empt === ""){
ExtraSidebarBottom = ExtraSidebarBottom;
} else {
ExtraSidebarBottom = ExtraSidebarBottom + LineHeight;
}

doc.text(SidebarLeftMargin, ExtraSidebarBottom, ExtraSidebarBottomTwo); // Extra section sidebar Part 2 line two
var empt = document.extrasidebar.extrasidebarbottomtwo.value;
if (empt === ""){
ExtraSidebarBottom = ExtraSidebarBottom;
} else {
ExtraSidebarBottom = ExtraSidebarBottom + LineHeight;
}

doc.text(SidebarLeftMargin, ExtraSidebarBottom, ExtraSidebarBottomThree); // Extra section sidebar Part 2 line three
var empt = document.extrasidebar.extrasidebarbottomthree.value;
if (empt === ""){
ExtraSidebarBottom = ExtraSidebarBottom;
} else {
ExtraSidebarBottom = ExtraSidebarBottom + LineHeight;
}

doc.text(SidebarLeftMargin, ExtraSidebarBottom, ExtraSidebarBottomFour); // Extra section sidebar Part 2 line four
var empt = document.extrasidebar.extrasidebarbottomfour.value;
if (empt === ""){
ExtraSidebarBottom = ExtraSidebarBottom;
} else {
ExtraSidebarBottom = ExtraSidebarBottom + LineHeight;
}

doc.text(SidebarLeftMargin, ExtraSidebarBottom, ExtraSidebarBottomFive); // Extra section sidebar Part 2 line five
var empt = document.extrasidebar.extrasidebarbottomfive.value;
if (empt === ""){
ExtraSidebarBottom = ExtraSidebarBottom;
} else {
ExtraSidebarBottom = ExtraSidebarBottom;
}

// ***********************  Extra Section Sidebar Part three ****************************

ExtraSidebarBottom = ExtraSidebarBottom + 10 + spacingextrasidebarThree;

doc.setFontType("bold");

doc.text(SidebarLeftMargin, ExtraSidebarBottom, ExtraSidebarSubMostBottom); // Extra section sidebar Part 3 sub header
var empt = document.extrasidebar.extrasidebarsubmostbottom.value;
if (empt === ""){
ExtraSidebarBottom = ExtraSidebarBottom;
} else {
ExtraSidebarBottom = ExtraSidebarBottom + LineHeight;
}

doc.setFontType("normal");

doc.text(SidebarLeftMargin, ExtraSidebarBottom, ExtraSidebarMostBottomOne); // Extra section sidebar Part 3 Line one
var empt = document.extrasidebar.extrasidebarmostbottomone.value;
if (empt === ""){
ExtraSidebarBottom = ExtraSidebarBottom;
} else {
ExtraSidebarBottom = ExtraSidebarBottom + LineHeight;
}

doc.text(SidebarLeftMargin, ExtraSidebarBottom, ExtraSidebarMostBottomTwo); // Extra section sidebar Part 3 line two
var empt = document.extrasidebar.extrasidebarmostbottomtwo.value;
if (empt === ""){
ExtraSidebarBottom = ExtraSidebarBottom;
} else {
ExtraSidebarBottom = ExtraSidebarBottom + LineHeight;
}

doc.text(SidebarLeftMargin, ExtraSidebarBottom, ExtraSidebarMostBottomThree); // Extra section sidebar Part 3 line three
var empt = document.extrasidebar.extrasidebarmostbottomthree.value;
if (empt === ""){
ExtraSidebarBottom = ExtraSidebarBottom;
} else {
ExtraSidebarBottom = ExtraSidebarBottom + LineHeight;
}

doc.text(SidebarLeftMargin, ExtraSidebarBottom, ExtraSidebarMostBottomFour); // Extra section sidebar Part 3 line four
var empt = document.extrasidebar.extrasidebarmostbottomfour.value;
if (empt === ""){
ExtraSidebarBottom = ExtraSidebarBottom;
} else {
ExtraSidebarBottom = ExtraSidebarBottom + LineHeight;
}

doc.text(SidebarLeftMargin, ExtraSidebarBottom, ExtraSidebarMostBottomFive); // Extra section sidebar Part 3 line five
var empt = document.extrasidebar.extrasidebarmostbottomfive.value;
if (empt === ""){
ExtraSidebarBottom = ExtraSidebarBottom;
} else {
ExtraSidebarBottom = ExtraSidebarBottom;
}


// ***********************  Draw Summary ****************************

var SummaryTop = 46 + spacingsummary;
var SummarySpace = 46 + spacingsummary;

doc.setFontSize(HeadingSize);
doc.setTextColor(HeadingTextCol01,HeadingTextCol02,HeadingTextCol03);
var inputVal = SummaryHeader.toUpperCase();
//doc.text(inputVal, (LinePoint/2),SummaryTop , 0, 'center');// Summary Header
doc.text(BTStart, SummarySpace, inputVal); // Summary Header

var empt = document.summary.summaryheader.value;
if (empt === ""){
SummarySpace = SummarySpace;
} else {
SummarySpace = SummarySpace + (LineHeight*1.25);
}

doc.setFontSize(TextSize);
doc.setTextColor(BodyTextCol01,BodyTextCol02,BodyTextCol03);

var paragraph = SummaryText;
var lines = doc.splitTextToSize(paragraph, BTWidth);
doc.text(BTStart, SummarySpace, lines);  // Career Summary

var empt = document.summary.careersummary.value;
if (empt === ""){
var SummaryBottom = SummarySpace;
} else {
  var a = paragraph.length;
  var b = a/80;
  var c = Math.ceil(b);
  var SummaryBottom = (c*LineHeight) + SummaryTop;
}



// ***********************  Save File ****************************

doc.save('resume-one-arial.pdf')

  }
