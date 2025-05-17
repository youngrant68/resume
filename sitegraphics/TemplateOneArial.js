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

  doc.setDrawColor(HeadingTextCol01, HeadingTextCol02, HeadingTextCol03);
  doc.line(LinePoint, 38, LinePoint,297); // Summary Section Line

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


  // ***********************  Experience Section ****************************

  var ExperienceTop = SummaryBottom + 15 + spacingexperience;
  var ExperienceSpace = SummaryBottom + 15 + spacingexperience;

  doc.setFontSize(HeadingSize);
  doc.setTextColor(HeadingTextCol01,HeadingTextCol02,HeadingTextCol03);
  var inputVal = ExperienceHeader.toUpperCase();

  doc.text(BTStart, ExperienceSpace, inputVal); //Experience Header

  var empt = document.experience.experienceheader.value;
  if (empt === ""){
  ExperienceSpace = ExperienceSpace;
  } else {
  ExperienceSpace = ExperienceSpace + (LineHeight*1.25);
  }

  doc.setFontSize(TextSize);
  doc.setTextColor(BodyTextCol01,BodyTextCol02,BodyTextCol03);
  doc.setFontType("bold");

  var inputVal = PositionOneTitle.toUpperCase();
  doc.text(BTStart, ExperienceSpace, inputVal + "         " + PositionOneStart + " - " + PositionOneFinished); // Position one title

  var empt = document.experience.positiononetitle.value;
  if (empt === ""){
  ExperienceSpace = ExperienceSpace;
  doc.setTextColor(HeaderTextCol01,HeaderTextCol02,HeaderTextCol03);
  doc.text(BTStart, ExperienceSpace, "         " + " - "); // Delete the | & -
  doc.setTextColor(BodyTextCol01,BodyTextCol02,BodyTextCol03);
  } else {
  ExperienceSpace = ExperienceSpace + LineHeight;
  }

  doc.setFontType("italic");

  doc.text(BTStart, ExperienceSpace, PositionOneEmployer); // Position one employer

  var empt = document.experience.positiononeemployer.value;
  if (empt === ""){
  ExperienceSpace = ExperienceSpace;
  } else {
  ExperienceSpace = ExperienceSpace + LineHeight;
  }

  doc.setFontType("normal");

  var paragraph = PositionOneTwoLineOne;
  var lines = doc.splitTextToSize(paragraph, BPWidth);
  doc.text(BPStart, ExperienceSpace, lines);  // Position One two line point

  var empt = document.experience.positiononetwolineone.value;
  if (empt === ""){
  ExperienceSpace = ExperienceSpace;
  } else {
  doc.text(BulletPoint, ExperienceSpace, '\u2022');
  ExperienceSpace = ExperienceSpace + (LineHeight*2);
  }

  var paragraph = PositionOneTwoLineTwo;
  var lines = doc.splitTextToSize(paragraph, BPWidth);
  doc.text(BPStart, ExperienceSpace, lines);  // Position One two line point

  var empt = document.experience.positiononetwolinetwo.value;
  if (empt === ""){
  ExperienceSpace = ExperienceSpace;
  } else {
  doc.text(BulletPoint, ExperienceSpace, '\u2022');
  ExperienceSpace = ExperienceSpace + (LineHeight*2);
  }

  var paragraph = PositionOneTwoLineThree;
  var lines = doc.splitTextToSize(paragraph, BPWidth);
  doc.text(BPStart, ExperienceSpace, lines);  // Position One two line point

  var empt = document.experience.positiononetwolinethree.value;
  if (empt === ""){
  ExperienceSpace = ExperienceSpace;
  } else {
  doc.text(BulletPoint, ExperienceSpace, '\u2022');
  ExperienceSpace = ExperienceSpace + (LineHeight*2);
  }

  var paragraph = PositionOneTwoLineFour;
  var lines = doc.splitTextToSize(paragraph, BPWidth);
  doc.text(BPStart, ExperienceSpace, lines);  // Position One two line point

  var empt = document.experience.positiononetwolinefour.value;
  if (empt === ""){
  ExperienceSpace = ExperienceSpace;
  } else {
  doc.text(BulletPoint, ExperienceSpace, '\u2022');
  ExperienceSpace = ExperienceSpace + (LineHeight*2);
  }

  var paragraph = PositionOneTwoLineFive;
  var lines = doc.splitTextToSize(paragraph, BPWidth);
  doc.text(BPStart, ExperienceSpace, lines);  // Position One two line point

  var empt = document.experience.positiononetwolinefive.value;
  if (empt === ""){
  ExperienceSpace = ExperienceSpace;
  } else {
  doc.text(BulletPoint, ExperienceSpace, '\u2022');
  ExperienceSpace = ExperienceSpace + (LineHeight*2);
  }

  doc.text(BPStart, ExperienceSpace, PositionOneSingleLineOne);  // Position One single line point
  var empt = document.experience.positiononesinglelineone.value;
  if (empt === ""){
  ExperienceSpace = ExperienceSpace;
  } else {
  doc.text(BulletPoint, ExperienceSpace, '\u2022');
  ExperienceSpace = ExperienceSpace + LineHeight;
  }

  doc.text(BPStart, ExperienceSpace, PositionOneSingleLineTwo);  // Position One single line point
  var empt = document.experience.positiononesinglelinetwo.value;
  if (empt === ""){
  ExperienceSpace = ExperienceSpace;
  } else {
  doc.text(BulletPoint, ExperienceSpace, '\u2022');
  ExperienceSpace = ExperienceSpace + LineHeight;
  }

  doc.text(BPStart, ExperienceSpace, PositionOneSingleLineThree);  // Position One single line point
  var empt = document.experience.positiononesinglelinethree.value;
  if (empt === ""){
  ExperienceSpace = ExperienceSpace;
  } else {
  doc.text(BulletPoint, ExperienceSpace, '\u2022');
  ExperienceSpace = ExperienceSpace + LineHeight;
  }

  doc.text(BPStart, ExperienceSpace, PositionOneSingleLineFour);  // Position One single line point
  var empt = document.experience.positiononesinglelinefour.value;
  if (empt === ""){
  ExperienceSpace = ExperienceSpace;
  } else {
  doc.text(BulletPoint, ExperienceSpace, '\u2022');
  ExperienceSpace = ExperienceSpace + LineHeight;
  }

  doc.text(BPStart, ExperienceSpace, PositionOneSingleLineFive);  // Position One single line point
  var empt = document.experience.positiononesinglelinefive.value;
  if (empt === ""){
  ExperienceSpace = ExperienceSpace;
  } else {
  doc.text(BulletPoint, ExperienceSpace, '\u2022');
  ExperienceSpace = ExperienceSpace + LineHeight;
  }

  // ***********************  Experience Section Position Two ****************************

  var ExperienceTwoTop = ExperienceSpace + 5 + spacingexperiencePos2;
  var ExperienceTwoSpace = ExperienceSpace + 5 + spacingexperiencePos2;

  doc.setFontSize(TextSize);
  doc.setTextColor(BodyTextCol01,BodyTextCol02,BodyTextCol03);
  doc.setFontType("bold");

  var inputVal = PositionTwoTitle.toUpperCase();
  doc.text(BTStart, ExperienceTwoSpace, inputVal + "         " + PositionTwoStart + " - " + PositionTwoFinished); // Position two title

  var empt = document.experience.positiontwotitle.value;
  if (empt === ""){
  ExperienceTwoSpace = ExperienceTwoSpace;
  doc.setTextColor(HeaderTextCol01,HeaderTextCol02,HeaderTextCol03);
  doc.text(BTStart, ExperienceTwoSpace, "         " + " - "); // Delete the | & -
  doc.setTextColor(BodyTextCol01,BodyTextCol02,BodyTextCol03);
  } else {
  ExperienceTwoSpace = ExperienceTwoSpace + LineHeight;
  }

  doc.setFontType("italic");

  doc.text(BTStart, ExperienceTwoSpace, PositionTwoEmployer); // Position two employer

  var empt = document.experience.positiontwoemployer.value;
  if (empt === ""){
  ExperienceTwoSpace = ExperienceTwoSpace;
  } else {
  ExperienceTwoSpace = ExperienceTwoSpace + LineHeight;
  }

  doc.setFontType("normal");

  var paragraph = PositionTwoTwoLineOne;
  var lines = doc.splitTextToSize(paragraph, BPWidth);
  doc.text(BPStart, ExperienceTwoSpace, lines);  // Position 2 two line point

  var empt = document.experience.positiontwotwolineone.value;
  if (empt === ""){
  ExperienceTwoSpace = ExperienceTwoSpace;
  } else {
  doc.text(BulletPoint, ExperienceTwoSpace, '\u2022');
  ExperienceTwoSpace = ExperienceTwoSpace + (LineHeight*2);
  }

  var paragraph = PositionTwoTwoLineTwo;
  var lines = doc.splitTextToSize(paragraph, BPWidth);
  doc.text(BPStart, ExperienceTwoSpace, lines);  // Position 2 two line point

  var empt = document.experience.positiontwotwolinetwo.value;
  if (empt === ""){
  ExperienceTwoSpace = ExperienceTwoSpace;
  } else {
  doc.text(BulletPoint, ExperienceTwoSpace, '\u2022');
  ExperienceTwoSpace = ExperienceTwoSpace + (LineHeight*2);
  }

  var paragraph = PositionTwoTwoLineThree;
  var lines = doc.splitTextToSize(paragraph, BPWidth);
  doc.text(BPStart, ExperienceTwoSpace, lines);  // Position 2 two line point

  var empt = document.experience.positiontwotwolinethree.value;
  if (empt === ""){
  ExperienceTwoSpace = ExperienceTwoSpace;
  } else {
  doc.text(BulletPoint, ExperienceTwoSpace, '\u2022');
  ExperienceTwoSpace = ExperienceTwoSpace + (LineHeight*2);
  }

  var paragraph = PositionTwoTwoLineFour;
  var lines = doc.splitTextToSize(paragraph, BPWidth);
  doc.text(BPStart, ExperienceTwoSpace, lines);  // Position 2 two line point

  var empt = document.experience.positiontwotwolinefour.value;
  if (empt === ""){
  ExperienceTwoSpace = ExperienceTwoSpace;
  } else {
  doc.text(BulletPoint, ExperienceTwoSpace, '\u2022');
  ExperienceTwoSpace = ExperienceTwoSpace + (LineHeight*2);
  }

  var paragraph = PositionTwoTwoLineFive;
  var lines = doc.splitTextToSize(paragraph, BPWidth);
  doc.text(BPStart, ExperienceTwoSpace, lines);  // Position 2 two line point

  var empt = document.experience.positiontwotwolinefive.value;
  if (empt === ""){
  ExperienceTwoSpace = ExperienceTwoSpace;
  } else {
  doc.text(BulletPoint, ExperienceTwoSpace, '\u2022');
  ExperienceTwoSpace = ExperienceTwoSpace + (LineHeight*2);
  }

  doc.text(BPStart, ExperienceTwoSpace, PositionTwoSingleLineOne);  // Position 2 single line point
  var empt = document.experience.positiontwosinglelineone.value;
  if (empt === ""){
  ExperienceTwoSpace = ExperienceTwoSpace;
  } else {
  doc.text(BulletPoint, ExperienceTwoSpace, '\u2022');
  ExperienceTwoSpace = ExperienceTwoSpace + LineHeight;
  }

  doc.text(BPStart, ExperienceTwoSpace, PositionTwoSingleLineTwo);  // Position 2 single line point
  var empt = document.experience.positiontwosinglelinetwo.value;
  if (empt === ""){
  ExperienceTwoSpace = ExperienceTwoSpace;
  } else {
  doc.text(BulletPoint, ExperienceTwoSpace, '\u2022');
  ExperienceTwoSpace = ExperienceTwoSpace + LineHeight;
  }

  doc.text(BPStart, ExperienceTwoSpace, PositionTwoSingleLineThree);  // Position 2 single line point
  var empt = document.experience.positiontwosinglelinethree.value;
  if (empt === ""){
  ExperienceTwoSpace = ExperienceTwoSpace;
  } else {
  doc.text(BulletPoint, ExperienceTwoSpace, '\u2022');
  ExperienceTwoSpace = ExperienceTwoSpace + LineHeight;
  }

  doc.text(BPStart, ExperienceTwoSpace, PositionTwoSingleLineFour);  // Position 2 single line point
  var empt = document.experience.positiontwosinglelinefour.value;
  if (empt === ""){
  ExperienceTwoSpace = ExperienceTwoSpace;
  } else {
  doc.text(BulletPoint, ExperienceTwoSpace, '\u2022');
  ExperienceTwoSpace = ExperienceTwoSpace + LineHeight;
  }

  doc.text(BPStart, ExperienceTwoSpace, PositionTwoSingleLineFive);  // Position 2 single line point
  var empt = document.experience.positiontwosinglelinefive.value;
  if (empt === ""){
  ExperienceTwoSpace = ExperienceTwoSpace;
  } else {
  doc.text(BulletPoint, ExperienceTwoSpace, '\u2022');
  ExperienceTwoSpace = ExperienceTwoSpace + LineHeight;
  }

  // ***********************  Experience Section Position Three ****************************

  var ExperienceThreeTop = ExperienceTwoSpace + 5 + spacingexperiencePos3;
  var ExperienceThreeSpace = ExperienceTwoSpace + 5 + spacingexperiencePos3;

  doc.setFontSize(TextSize);
  doc.setTextColor(BodyTextCol01,BodyTextCol02,BodyTextCol03);
  doc.setFontType("bold");

  var inputVal = PositionThreeTitle.toUpperCase();
  doc.text(BTStart, ExperienceThreeSpace, inputVal + "         " + PositionThreeStart + " - " + PositionThreeFinished); // Position three title

  var empt = document.experience.positionthreetitle.value;
  if (empt === ""){
  ExperienceThreeSpace = ExperienceThreeSpace;
  doc.setTextColor(HeaderTextCol01,HeaderTextCol02,HeaderTextCol03);
  doc.text(BTStart, ExperienceThreeSpace, "         " + " - "); // Delete the | & -
  doc.setTextColor(BodyTextCol01,BodyTextCol02,BodyTextCol03);
  } else {
  ExperienceThreeSpace = ExperienceThreeSpace + LineHeight;
  }

  doc.setFontType("italic");

  doc.text(BTStart, ExperienceThreeSpace, PositionThreeEmployer); // Position two employer

  var empt = document.experience.positionthreeemployer.value;
  if (empt === ""){
  ExperienceThreeSpace = ExperienceThreeSpace;
  } else {
  ExperienceThreeSpace = ExperienceThreeSpace + LineHeight;
  }

  doc.setFontType("normal");

  var paragraph = PositionThreeTwoLineOne;
  var lines = doc.splitTextToSize(paragraph, BPWidth);
  doc.text(BPStart, ExperienceThreeSpace, lines);  // Position 3 two line point

  var empt = document.experience.positionthreetwolineone.value;
  if (empt === ""){
  ExperienceThreeSpace = ExperienceThreeSpace;
  } else {
  doc.text(BulletPoint, ExperienceThreeSpace, '\u2022');
  ExperienceThreeSpace = ExperienceThreeSpace + (LineHeight*2);
  }

  var paragraph = PositionThreeTwoLineTwo;
  var lines = doc.splitTextToSize(paragraph, BPWidth);
  doc.text(BPStart, ExperienceThreeSpace, lines);  // Position 3 two line point

  var empt = document.experience.positionthreetwolinetwo.value;
  if (empt === ""){
  ExperienceThreeSpace = ExperienceThreeSpace;
  } else {
  doc.text(BulletPoint, ExperienceThreeSpace, '\u2022');
  ExperienceThreeSpace = ExperienceThreeSpace + (LineHeight*2);
  }

  var paragraph = PositionThreeTwoLineThree;
  var lines = doc.splitTextToSize(paragraph, BPWidth);
  doc.text(BPStart, ExperienceThreeSpace, lines);  // Position 3 two line point

  var empt = document.experience.positionthreetwolinethree.value;
  if (empt === ""){
  ExperienceThreeSpace = ExperienceThreeSpace;
  } else {
  doc.text(BulletPoint, ExperienceThreeSpace, '\u2022');
  ExperienceThreeSpace = ExperienceThreeSpace + (LineHeight*2);
  }

  var paragraph = PositionThreeTwoLineFour;
  var lines = doc.splitTextToSize(paragraph, BPWidth);
  doc.text(BPStart, ExperienceThreeSpace, lines);  // Position 3 two line point

  var empt = document.experience.positionthreetwolinefour.value;
  if (empt === ""){
  ExperienceThreeSpace = ExperienceThreeSpace;
  } else {
  doc.text(BulletPoint, ExperienceThreeSpace, '\u2022');
  ExperienceThreeSpace = ExperienceThreeSpace + (LineHeight*2);
  }

  var paragraph = PositionThreeTwoLineFive;
  var lines = doc.splitTextToSize(paragraph, BPWidth);
  doc.text(BPStart, ExperienceThreeSpace, lines);  // Position 3 two line point

  var empt = document.experience.positionthreetwolinefive.value;
  if (empt === ""){
  ExperienceThreeSpace = ExperienceThreeSpace;
  } else {
  doc.text(BulletPoint, ExperienceThreeSpace, '\u2022');
  ExperienceThreeSpace = ExperienceThreeSpace + (LineHeight*2);
  }

  doc.text(BPStart, ExperienceThreeSpace, PositionThreeSingleLineOne);  // Position 3 single line point
  var empt = document.experience.positionthreesinglelineone.value;
  if (empt === ""){
  ExperienceThreeSpace = ExperienceThreeSpace;
  } else {
  doc.text(BulletPoint, ExperienceThreeSpace, '\u2022');
  ExperienceThreeSpace = ExperienceThreeSpace + LineHeight;
  }

  doc.text(BPStart, ExperienceThreeSpace, PositionThreeSingleLineTwo);  // Position 3 single line point
  var empt = document.experience.positionthreesinglelinetwo.value;
  if (empt === ""){
  ExperienceThreeSpace = ExperienceThreeSpace;
  } else {
  doc.text(BulletPoint, ExperienceThreeSpace, '\u2022');
  ExperienceThreeSpace = ExperienceThreeSpace + LineHeight;
  }

  doc.text(BPStart, ExperienceThreeSpace, PositionThreeSingleLineThree);  // Position 3 single line point
  var empt = document.experience.positionthreesinglelinethree.value;
  if (empt === ""){
  ExperienceThreeSpace = ExperienceTwoSpace;
  } else {
  doc.text(BulletPoint, ExperienceThreeSpace, '\u2022');
  ExperienceThreeSpace = ExperienceThreeSpace + LineHeight;
  }

  doc.text(BPStart, ExperienceThreeSpace, PositionThreeSingleLineFour);  // Position 3 single line point
  var empt = document.experience.positionthreesinglelinefour.value;
  if (empt === ""){
  ExperienceThreeSpace = ExperienceThreeSpace;
  } else {
  doc.text(BulletPoint, ExperienceThreeSpace, '\u2022');
  ExperienceThreeSpace = ExperienceThreeSpace + LineHeight;
  }

  doc.text(BPStart, ExperienceThreeSpace, PositionThreeSingleLineFive);  // Position 3 single line point
  var empt = document.experience.positionthreesinglelinefive.value;
  if (empt === ""){
  ExperienceThreeSpace = ExperienceThreeSpace;
  } else {
  doc.text(BulletPoint, ExperienceThreeSpace, '\u2022');
  }

  // ***********************  Extra Section ONE (One Column)  (mainpage)****************************

  //var ExtraOneTop = ExtraTwoLeftSpace + 10 + spacingextraOnePos2
  //var ExtraOneSpace = ExtraTwoLeftSpace + 10 + spacingextraOnePos2

  var ExtraOneTop = ExperienceThreeSpace + 10 + spacingextraOnePos2
  var ExtraOneSpace = ExperienceThreeSpace + 10 + spacingextraOnePos2

  doc.setFontSize(HeadingSize);
  doc.setTextColor(HeadingTextCol01,HeadingTextCol02,HeadingTextCol03);
  var inputVal = Extrasec1Header.toUpperCase();

  doc.text(BTStart, ExtraOneSpace, inputVal); //Extra section one column Header

  var empt = document.extrasec1.extrasec1header.value;
  if (empt === ""){
  ExtraOneSpace = ExtraOneSpace;
  } else {
  ExtraOneSpace = ExtraOneSpace + (LineHeight*1.25);
  }

  doc.setFontSize(TextSize);
  doc.setTextColor(BodyTextCol01,BodyTextCol02,BodyTextCol03);
  doc.setFontType("normal");

  var paragraph = Extrasec1Paragraph;
  var lines = doc.splitTextToSize(paragraph, BTWidth);
  doc.text(BTStart, ExtraOneSpace, lines);  // Extra section one column text
  var empt = document.extrasec1.extrasec1paragraph.value;
  if (empt === ""){
  ExtraOneSpace = ExtraOneSpace;
  } else {
  var a = paragraph.length;
  var b = a/80;
  var c = Math.ceil(b);
  ExtraOneSpace = (c*LineHeight) + ExtraOneTop;
  }

  // ***********************  Extra Section TWO (One Column)  (mainpage)****************************

  //var ExtraOneTop = ExtraTwoLeftSpace + 10 + spacingextraOnePos2
  //var ExtraOneSpace = ExtraTwoLeftSpace + 10 + spacingextraOnePos2

  var ExtraOneTopA = ExtraOneSpace + 10 + spacingextraOne
  var ExtraOneSpaceA = ExtraOneSpace + 10 + spacingextraOne

  doc.setFontSize(HeadingSize);
  doc.setTextColor(HeadingTextCol01,HeadingTextCol02,HeadingTextCol03);
  var inputVal = Extrasec1AHeader.toUpperCase();

  doc.text(BTStart, ExtraOneSpaceA, inputVal); //Extra section one column Header

  var empt = document.extrasec1A.extrasec1Aheader.value;
  if (empt === ""){
  ExtraOneSpaceA = ExtraOneSpaceA;
  } else {
  ExtraOneSpaceA = ExtraOneSpaceA + (LineHeight*1.25);
  }

  doc.setFontSize(TextSize);
  doc.setTextColor(BodyTextCol01,BodyTextCol02,BodyTextCol03);
  doc.setFontType("normal");

  var paragraph = Extrasec1AParagraph;
  var lines = doc.splitTextToSize(paragraph, BTWidth);
  doc.text(BTStart, ExtraOneSpaceA, lines);  // Extra section one column text
  var empt = document.extrasec1A.extrasec1Aparagraph.value;
  if (empt === ""){
  ExtraOneSpaceA = ExtraOneSpaceA;
  } else {
  var a = paragraph.length;
  var b = a/80;
  var c = Math.ceil(b);
  ExtraOneSpaceA = (c*LineHeight) + ExtraOneTopA;
  }


  // ***********************  Extra Section (Two Column)  (mainpage)****************************


  var ExtraTwoTop = ExtraOneSpaceA + 10 + spacingextraTwo;
  var ExtraTwoLeftSpace = ExtraOneSpaceA + 10 + spacingextraTwo;
  var ExtraTwoRightSpace = ExtraOneSpaceA + 10 + spacingextraTwo;

  doc.setFontSize(HeadingSize);
  doc.setTextColor(HeadingTextCol01,HeadingTextCol02,HeadingTextCol03);
  var inputVal = Extrasec2Header.toUpperCase();

  doc.text(BTStart, ExtraTwoLeftSpace, inputVal); //Experience Header

  var empt = document.extrasec2.extrasec2header.value;
  if (empt === ""){
  ExtraTwoLeftSpace = ExtraTwoLeftSpace;
  } else {
  ExtraTwoLeftSpace = ExtraTwoLeftSpace + (LineHeight*1.25);
  ExtraTwoRightSpace = ExtraTwoRightSpace + (LineHeight*1.25);
  }

  doc.setFontSize(TextSize);
  doc.setTextColor(BodyTextCol01,BodyTextCol02,BodyTextCol03);
  doc.setFontType("bold");

  doc.text(BPStart, ExtraTwoLeftSpace, Extrasec2SubLeft); //Experience left sub Header
  var empt = document.extrasec2.extrasec2subleft.value;
  if (empt === ""){
  ExtraTwoLeftSpace = ExtraTwoLeftSpace;
  } else {
  ExtraTwoLeftSpace = ExtraTwoLeftSpace + LineHeight;
  }

  doc.setFontType("normal");

  doc.text(BPStart, ExtraTwoLeftSpace, Extrasec2LeftOne); //Experience left line one
  var empt = document.extrasec2.extrasec2leftone.value;
  if (empt === ""){
  ExtraTwoLeftSpace = ExtraTwoLeftSpace;
  } else {
  ExtraTwoLeftSpace = ExtraTwoLeftSpace + LineHeight;
  }

  doc.text(BPStart, ExtraTwoLeftSpace, Extrasec2LeftTwo); //Experience left line two
  var empt = document.extrasec2.extrasec2lefttwo.value;
  if (empt === ""){
  ExtraTwoLeftSpace = ExtraTwoLeftSpace;
  } else {
  ExtraTwoLeftSpace = ExtraTwoLeftSpace + LineHeight;
  }

  doc.text(BPStart, ExtraTwoLeftSpace, Extrasec2LeftThree); //Experience left line three
  var empt = document.extrasec2.extrasec2leftthree.value;
  if (empt === ""){
  ExtraTwoLeftSpace = ExtraTwoLeftSpace;
  } else {
  ExtraTwoLeftSpace = ExtraTwoLeftSpace + LineHeight;
  }

  doc.text(BPStart, ExtraTwoLeftSpace, Extrasec2LeftFour); //Experience left line four
  var empt = document.extrasec2.extrasec2leftfour.value;
  if (empt === ""){
  ExtraTwoLeftSpace = ExtraTwoLeftSpace;
  } else {
  ExtraTwoLeftSpace = ExtraTwoLeftSpace + LineHeight;
  }

  doc.text(BPStart, ExtraTwoLeftSpace, Extrasec2LeftFive); //Experience left line Five
  var empt = document.extrasec2.extrasec2leftfive.value;
  if (empt === ""){
  ExtraTwoLeftSpace = ExtraTwoLeftSpace;
  } else {
  ExtraTwoLeftSpace = ExtraTwoLeftSpace + LineHeight;
  }

  doc.setFontType("bold");

  doc.text(RightColumn, ExtraTwoRightSpace, Extrasec2SubRight); //Experience right sub Header
  var empt = document.extrasec2.extrasec2subright.value;
  if (empt === ""){
  ExtraTwoRightSpace = ExtraTwoRightSpace;
  } else {
  ExtraTwoRightSpace = ExtraTwoRightSpace + LineHeight;
  }

  doc.setFontType("normal");

  doc.text(RightColumn, ExtraTwoRightSpace, Extrasec2RightOne); //Experience right line one
  var empt = document.extrasec2.extrasec2rightone.value;
  if (empt === ""){
  ExtraTwoRightSpace = ExtraTwoRightSpace;
  } else {
  ExtraTwoRightSpace = ExtraTwoRightSpace + LineHeight;
  }

  doc.text(RightColumn, ExtraTwoRightSpace, Extrasec2RightTwo); //Experience right line two
  var empt = document.extrasec2.extrasec2righttwo.value;
  if (empt === ""){
  ExtraTwoRightSpace = ExtraTwoRightSpace;
  } else {
  ExtraTwoRightSpace = ExtraTwoRightSpace + LineHeight;
  }

  doc.text(RightColumn, ExtraTwoRightSpace, Extrasec2RightThree); //Experience right line three
  var empt = document.extrasec2.extrasec2rightthree.value;
  if (empt === ""){
  ExtraTwoRightSpace = ExtraTwoRightSpace;
  } else {
  ExtraTwoRightSpace = ExtraTwoRightSpace + LineHeight;
  }

  doc.text(RightColumn, ExtraTwoRightSpace, Extrasec2RightFour); //Experience right line four
  var empt = document.extrasec2.extrasec2rightfour.value;
  if (empt === ""){
  ExtraTwoRightSpace = ExtraTwoRightSpace;
  } else {
  ExtraTwoRightSpace = ExtraTwoRightSpace + LineHeight;
  }

  doc.text(RightColumn, ExtraTwoRightSpace, Extrasec2RightFive); //Experience right line five
  var empt = document.extrasec2.extrasec2rightfive.value;
  if (empt === ""){
  ExtraTwoRightSpace = ExtraTwoRightSpace;
  } else {
  ExtraTwoRightSpace = ExtraTwoRightSpace + LineHeight;
  }



  // ***********************  Save File ****************************

  doc.save('resume-one-arial.pdf')

    }
