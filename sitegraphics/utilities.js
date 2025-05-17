function SetSpacing() {

  spacingsummary = 0;
  spacingskills = 0;
  spacingexperience = 0;
  spacingexperiencePos2 = 0;
  spacingexperiencePos3 = 0;
  spacingeducation = 0;
  spacingeducationPos2 = 0;
  spacingeducationPos3 = 0;
  spacingeducationPos4 = 0;
  spacingextrasidebarPara = 0; // Extra Sidebar Section paragraph
  spacingextrasidebarOne = 0; // Extra Sidebar Section
  spacingextrasidebarTwo = 0; // Extra Sidebar Section Two
  spacingextrasidebarThree = 0; // Extra Sidebar Section Three
  spacingextraOne = 0; //Extra Main page section (one column) NEW ONE
  spacingextraOnePos2 = 0; //Extra Main page section (one column)
  spacingextraTwo = 0; // Extra main page section (Two columns)

    document.getElementById('summaryspacing').value = spacingsummary;
    document.getElementById('skillsspacing').value = spacingskills;
    document.getElementById('experiencespacing').value = spacingexperience;
    document.getElementById('experiencePos2spacing').value = spacingexperiencePos2;
    document.getElementById('experiencePos3spacing').value = spacingexperiencePos3;
    document.getElementById('educationspacing').value = spacingeducation;
    document.getElementById('educationPos2spacing').value = spacingeducationPos2;
    document.getElementById('educationPos3spacing').value = spacingeducationPos3;
    document.getElementById('educationPos4spacing').value = spacingeducationPos4;
    document.getElementById('extrasidebarParaspacing').value = spacingextrasidebarPara;
    document.getElementById('extrasidebarOnespacing').value = spacingextrasidebarOne;
    document.getElementById('extrasidebarTwospacing').value = spacingextrasidebarTwo;
    document.getElementById('extrasidebarThreespacing').value = spacingextrasidebarThree;
    document.getElementById('extraOnespacing').value = spacingextraOne;
    document.getElementById('extraOnePos2spacing').value = spacingextraOnePos2;
    document.getElementById('extraTwospacing').value = spacingextraTwo;
}

function ResetSpacing() {

  spacingsummary = 0;
  spacingskills = 0;
  spacingexperience = -3;
  spacingexperiencePos2 = 4;
  spacingexperiencePos3 = 0;
  spacingeducation = 0;
  spacingeducationPos2 = 0;
  spacingeducationPos3 = 0;
  spacingeducationPos4 = 0;
  spacingextrasidebarPara = -20; // Extra Sidebar Section paragraph
  spacingextrasidebarOne = 0; // Extra Sidebar Section
  spacingextrasidebarTwo = -5; // Extra Sidebar Section Two
  spacingextrasidebarThree = 0; // Extra Sidebar Section Three
  spacingextraOne = 0; //Extra Main page section (one column) NEW ONE
  spacingextraOnePos2 = 43; //Extra Main page section (one column)
  spacingextraTwo = -7; // Extra main page section (Two columns)

    document.getElementById('summaryspacing').value = spacingsummary;
    document.getElementById('skillsspacing').value = spacingskills;
    document.getElementById('experiencespacing').value = spacingexperience;
    document.getElementById('experiencePos2spacing').value = spacingexperiencePos2;
    document.getElementById('experiencePos3spacing').value = spacingexperiencePos3;
    document.getElementById('educationspacing').value = spacingeducation;
    document.getElementById('educationPos2spacing').value = spacingeducationPos2;
    document.getElementById('educationPos3spacing').value = spacingeducationPos3;
    document.getElementById('educationPos4spacing').value = spacingeducationPos4;
    document.getElementById('extrasidebarParaspacing').value = spacingextrasidebarPara;
    document.getElementById('extrasidebarOnespacing').value = spacingextrasidebarOne;
    document.getElementById('extrasidebarTwospacing').value = spacingextrasidebarTwo;
    document.getElementById('extrasidebarThreespacing').value = spacingextrasidebarThree;
    document.getElementById('extraOnespacing').value = spacingextraOne;
    document.getElementById('extraOnePos2spacing').value = spacingextraOnePos2;
    document.getElementById('extraTwospacing').value = spacingextraTwo;
}

var summaryValue = function(val){

   spacingsummary = spacingsummary + parseInt(val);

    document.getElementById('summaryspacing').value = spacingsummary;
}

var skillsValue = function(val){

   spacingskills = spacingskills + parseInt(val);

    document.getElementById('skillsspacing').value = spacingskills;
}

var experienceValue = function(val){

   spacingexperience = spacingexperience + parseInt(val);

    document.getElementById('experiencespacing').value = spacingexperience;
}

var experiencePos2Value = function(val){

   spacingexperiencePos2 = spacingexperiencePos2 + parseInt(val);

    document.getElementById('experiencePos2spacing').value = spacingexperiencePos2;
}

var experiencePos3Value = function(val){

   spacingexperiencePos3 = spacingexperiencePos3 + parseInt(val);

    document.getElementById('experiencePos3spacing').value = spacingexperiencePos3;
}

var educationValue = function(val){

   spacingeducation = spacingeducation + parseInt(val);

    document.getElementById('educationspacing').value = spacingeducation;
}

var educationPos2Value = function(val){

   spacingeducationPos2 = spacingeducationPos2 + parseInt(val);

    document.getElementById('educationPos2spacing').value = spacingeducationPos2;
}

var educationPos3Value = function(val){

   spacingeducationPos3 = spacingeducationPos3 + parseInt(val);

    document.getElementById('educationPos3spacing').value = spacingeducationPos3;
}

var educationPos4Value = function(val){

   spacingeducationPos4 = spacingeducationPos4 + parseInt(val);

    document.getElementById('educationPos4spacing').value = spacingeducationPos4;
}

var extrasidebarParaValue = function(val){

   spacingextrasidebarPara = spacingextrasidebarPara + parseInt(val);

    document.getElementById('extrasidebarParaspacing').value = spacingextrasidebarPara;
}

var extrasidebarOneValue = function(val){

   spacingextrasidebarOne = spacingextrasidebarOne + parseInt(val);

    document.getElementById('extrasidebarOnespacing').value = spacingextrasidebarOne;
}

var extrasidebarTwoValue = function(val){

   spacingextrasidebarTwo = spacingextrasidebarTwo + parseInt(val);

    document.getElementById('extrasidebarTwospacing').value = spacingextrasidebarTwo;
}

var extrasidebarThreeValue = function(val){

   spacingextrasidebarThree = spacingextrasidebarThree + parseInt(val);

    document.getElementById('extrasidebarThreespacing').value = spacingextrasidebarThree;
}

var extraOneValue = function(val){

   spacingextraOne = spacingextraOne + parseInt(val);

    document.getElementById('extraOnespacing').value = spacingextraOne;
}

var extraOnePos2Value = function(val){

   spacingextraOnePos2 = spacingextraOnePos2 + parseInt(val);

    document.getElementById('extraOnePos2spacing').value = spacingextraOnePos2;
}

var extraTwoValue = function(val){

   spacingextraTwo = spacingextraTwo + parseInt(val);

    document.getElementById('extraTwospacing').value = spacingextraTwo;
}

function ResetDetails() {

var ClearDet01="";

  document.getElementById("fname").value=ClearDet01;
  document.getElementById("lname").value=ClearDet01;
  document.getElementById("city").value=ClearDet01;
  document.getElementById("state").value=ClearDet01;
  document.getElementById("zip").value=ClearDet01;
  document.getElementById("phonenumber").value=ClearDet01;
  document.getElementById("email").value=ClearDet01;
  document.getElementById("title").value=ClearDet01;
}

function ResetSummary() {

  var ClearDet01="";

  document.getElementById("careersummary").value=ClearDet01;
}

function ResetSkills() {

  var ClearDet01="";
  document.getElementById("skillsheader").value="Skills";
  document.getElementById("skill01").value=ClearDet01;
  document.getElementById("skill02").value=ClearDet01;
  document.getElementById("skill03").value=ClearDet01;
  document.getElementById("skill04").value=ClearDet01;
  document.getElementById("skill05").value=ClearDet01;
  document.getElementById("skill06").value=ClearDet01;
}

function ResetEducation() {

  var ClearDet01="";
  document.getElementById("educationheader").value="Education";
  document.getElementById("courseoneinstitute").value=ClearDet01;
  document.getElementById("courseonequal").value=ClearDet01;
  document.getElementById("courseonesubject").value=ClearDet01;
  document.getElementById("courseonecompleted").value=ClearDet01;
  document.getElementById("coursetwoinstitute").value=ClearDet01;
  document.getElementById("coursetwoqual").value=ClearDet01;
  document.getElementById("coursetwosubject").value=ClearDet01;
  document.getElementById("coursetwocompleted").value=ClearDet01;
  document.getElementById("coursethreeinstitute").value=ClearDet01;
  document.getElementById("coursethreequal").value=ClearDet01;
  document.getElementById("coursethreesubject").value=ClearDet01;
  document.getElementById("coursethreecompleted").value=ClearDet01;
  document.getElementById("coursefourinstitute").value=ClearDet01;
  document.getElementById("coursefourqual").value=ClearDet01;
  document.getElementById("coursefoursubject").value=ClearDet01;
  document.getElementById("coursefourcompleted").value=ClearDet01;
}

function ResetExperienceOne() {

  var ClearDet01="";
  document.getElementById("experienceheader").value="Experience";
  document.getElementById("positiononetitle").value=ClearDet01;
  document.getElementById("positiononeemployer").value=ClearDet01;
  document.getElementById("positiononestart").value=ClearDet01;
  document.getElementById("positiononefinished").value=ClearDet01;
  document.getElementById("positiononetwolineone").value=ClearDet01;
  document.getElementById("positiononetwolinetwo").value=ClearDet01;
  document.getElementById("positiononetwolinethree").value=ClearDet01;
  document.getElementById("positiononetwolinefour").value=ClearDet01;
  document.getElementById("positiononetwolinefive").value=ClearDet01;
  document.getElementById("positiononesinglelineone").value=ClearDet01;
  document.getElementById("positiononesinglelinetwo").value=ClearDet01;
  document.getElementById("positiononesinglelinethree").value=ClearDet01;
  document.getElementById("positiononesinglelinefour").value=ClearDet01;
  document.getElementById("positiononesinglelinefive").value=ClearDet01;
}

function ResetExperienceTwo() {

  var ClearDet01="";
  document.getElementById("positiontwotitle").value=ClearDet01;
  document.getElementById("positiontwoemployer").value=ClearDet01;
  document.getElementById("positiontwostart").value=ClearDet01;
  document.getElementById("positiontwofinished").value=ClearDet01;
  document.getElementById("positiontwotwolineone").value=ClearDet01;
  document.getElementById("positiontwotwolinetwo").value=ClearDet01;
  document.getElementById("positiontwotwolinethree").value=ClearDet01;
  document.getElementById("positiontwotwolinefour").value=ClearDet01;
  document.getElementById("positiontwotwolinefive").value=ClearDet01;
  document.getElementById("positiontwosinglelineone").value=ClearDet01;
  document.getElementById("positiontwosinglelinetwo").value=ClearDet01;
  document.getElementById("positiontwosinglelinethree").value=ClearDet01;
  document.getElementById("positiontwosinglelinefour").value=ClearDet01;
  document.getElementById("positiontwosinglelinefive").value=ClearDet01;
}

function ResetExperienceThree() {

  var ClearDet01="";
  document.getElementById("positionthreetitle").value=ClearDet01;
  document.getElementById("positionthreeemployer").value=ClearDet01;
  document.getElementById("positionthreestart").value=ClearDet01;
  document.getElementById("positionthreefinished").value=ClearDet01;
  document.getElementById("positionthreetwolineone").value=ClearDet01;
  document.getElementById("positionthreetwolinetwo").value=ClearDet01;
  document.getElementById("positionthreetwolinethree").value=ClearDet01;
  document.getElementById("positionthreetwolinefour").value=ClearDet01;
  document.getElementById("positionthreetwolinefive").value=ClearDet01;
  document.getElementById("positionthreesinglelineone").value=ClearDet01;
  document.getElementById("positionthreesinglelinetwo").value=ClearDet01;
  document.getElementById("positionthreesinglelinethree").value=ClearDet01;
  document.getElementById("positionthreesinglelinefour").value=ClearDet01;
  document.getElementById("positionthreesinglelinefive").value=ClearDet01;
}

function ResetExtrasecTwo() {

  var ClearDet01="";
  document.getElementById("extrasec2header").value=ClearDet01;
  document.getElementById("extrasec2subleft").value=ClearDet01;
  document.getElementById("extrasec2leftone").value=ClearDet01;
  document.getElementById("extrasec2lefttwo").value=ClearDet01;
  document.getElementById("extrasec2leftthree").value=ClearDet01;
  document.getElementById("extrasec2leftfour").value=ClearDet01;
  document.getElementById("extrasec2leftfive").value=ClearDet01;
  document.getElementById("extrasec2subright").value=ClearDet01;
  document.getElementById("extrasec2rightone").value=ClearDet01;
  document.getElementById("extrasec2righttwo").value=ClearDet01;
  document.getElementById("extrasec2rightthree").value=ClearDet01;
  document.getElementById("extrasec2rightfour").value=ClearDet01;
  document.getElementById("extrasec2rightfive").value=ClearDet01;
}

function ResetExtrasecOne() {

  var ClearDet01="";
  document.getElementById("extrasec1header").value=ClearDet01;
  document.getElementById("extrasec1paragraph").value=ClearDet01;

}

function ResetExtrasecOneA() {

  var ClearDet01="";
  document.getElementById("extrasec1Aheader").value=ClearDet01;
  document.getElementById("extrasec1Aparagraph").value=ClearDet01;

}

function ResetExtrasecSidebar() {

  var ClearDet01="";
  document.getElementById("extrasidebarheader").value=ClearDet01;
  document.getElementById("extrasidebarsubtop").value=ClearDet01;
  document.getElementById("extrasidebarsubbottom").value=ClearDet01
  document.getElementById("extrasidebarsubmostbottom").value=ClearDet01;
  document.getElementById("extrasidebartopone").value=ClearDet01;
  document.getElementById("extrasidebartoptwo").value=ClearDet01;
  document.getElementById("extrasidebartopthree").value=ClearDet01;
  document.getElementById("extrasidebartopfour").value=ClearDet01;
  document.getElementById("extrasidebartopfive").value=ClearDet01;
  document.getElementById("extrasidebarbottomone").value=ClearDet01;
  document.getElementById("extrasidebarbottomtwo").value=ClearDet01;
  document.getElementById("extrasidebarbottomthree").value=ClearDet01;
  document.getElementById("extrasidebarbottomfour").value=ClearDet01;
  document.getElementById("extrasidebarbottomfive").value=ClearDet01;
  document.getElementById("extrasidebarmostbottomone").value=ClearDet01;
  document.getElementById("extrasidebarmostbottomtwo").value=ClearDet01;
  document.getElementById("extrasidebarmostbottomthree").value=ClearDet01;
  document.getElementById("extrasidebarmostbottomfour").value=ClearDet01;
  document.getElementById("extrasidebarmostbottomfive").value=ClearDet01;
}

function ResetExtrasecSidebar2() {

  var ClearDet01="";
  document.getElementById("extrasidebarheader2").value=ClearDet01;
  document.getElementById("extrasidebartext2").value=ClearDet01;

}

function ResetCoverLetter2() {

  var ClearDet01="";
  document.getElementById("coverlettercontent2").value=ClearDet01;

}

function GetData() {

pdetails01 = document.getElementById("fname").value;
pdetails02 = document.getElementById("lname").value;
pdetails03 = document.getElementById("city").value;
pdetails04 = document.getElementById("state").value;
pdetails05 = document.getElementById("zip").value;
pdetails06 = document.getElementById("phonenumber").value;
pdetails07 = document.getElementById("email").value;
pdetails08 = document.getElementById("title").value;
//pdetails09 = document.getElementById("addyextra").value;
SummaryText = document.getElementById("careersummary").value;
SummaryHeader = document.getElementById("summaryheader").value;
Skill01 = document.getElementById("skill01").value;
Skill02 = document.getElementById("skill02").value;
Skill03= document.getElementById("skill03").value;
Skill04 = document.getElementById("skill04").value;
Skill05 = document.getElementById("skill05").value;
Skill06 = document.getElementById("skill06").value;
SkillsHeader = document.getElementById("skillsheader").value;
EducationHeader = document.getElementById("educationheader").value;
CourseOneInstitute = document.getElementById("courseoneinstitute").value;
CourseOneQual = document.getElementById("courseonequal").value;
CourseOneSubject = document.getElementById("courseonesubject").value;
CourseOneCompleted = document.getElementById("courseonecompleted").value;
CourseTwoInstitute = document.getElementById("coursetwoinstitute").value;
CourseTwoQual = document.getElementById("coursetwoqual").value;
CourseTwoSubject = document.getElementById("coursetwosubject").value;
CourseTwoCompleted = document.getElementById("coursetwocompleted").value;
CourseThreeInstitute = document.getElementById("coursethreeinstitute").value;
CourseThreeQual = document.getElementById("coursethreequal").value;
CourseThreeSubject = document.getElementById("coursethreesubject").value;
CourseThreeCompleted = document.getElementById("coursethreecompleted").value;
CourseFourInstitute = document.getElementById("coursefourinstitute").value;
CourseFourQual = document.getElementById("coursefourqual").value;
CourseFourSubject = document.getElementById("coursefoursubject").value;
CourseFourCompleted = document.getElementById("coursefourcompleted").value;
ExperienceHeader = document.getElementById("experienceheader").value;
PositionOneTitle = document.getElementById("positiononetitle").value;
PositionOneEmployer = document.getElementById("positiononeemployer").value;
PositionOneStart = document.getElementById("positiononestart").value;
PositionOneFinished = document.getElementById("positiononefinished").value;
PositionOneTwoLineOne = document.getElementById("positiononetwolineone").value;
PositionOneTwoLineTwo = document.getElementById("positiononetwolinetwo").value;
PositionOneTwoLineThree = document.getElementById("positiononetwolinethree").value;
PositionOneTwoLineFour = document.getElementById("positiononetwolinefour").value;
PositionOneTwoLineFive = document.getElementById("positiononetwolinefive").value;
PositionOneSingleLineOne = document.getElementById("positiononesinglelineone").value;
PositionOneSingleLineTwo = document.getElementById("positiononesinglelinetwo").value;
PositionOneSingleLineThree = document.getElementById("positiononesinglelinethree").value;
PositionOneSingleLineFour = document.getElementById("positiononesinglelinefour").value;
PositionOneSingleLineFive = document.getElementById("positiononesinglelinefive").value;
PositionTwoTitle = document.getElementById("positiontwotitle").value;
PositionTwoEmployer = document.getElementById("positiontwoemployer").value;
PositionTwoStart = document.getElementById("positiontwostart").value;
PositionTwoFinished = document.getElementById("positiontwofinished").value;
PositionTwoTwoLineOne = document.getElementById("positiontwotwolineone").value;
PositionTwoTwoLineTwo = document.getElementById("positiontwotwolinetwo").value;
PositionTwoTwoLineThree = document.getElementById("positiontwotwolinethree").value;
PositionTwoTwoLineFour = document.getElementById("positiontwotwolinefour").value;
PositionTwoTwoLineFive = document.getElementById("positiontwotwolinefive").value;
PositionTwoSingleLineOne = document.getElementById("positiontwosinglelineone").value;
PositionTwoSingleLineTwo = document.getElementById("positiontwosinglelinetwo").value;
PositionTwoSingleLineThree = document.getElementById("positiontwosinglelinethree").value;
PositionTwoSingleLineFour = document.getElementById("positiontwosinglelinefour").value;
PositionTwoSingleLineFive = document.getElementById("positiontwosinglelinefive").value;
PositionThreeTitle = document.getElementById("positionthreetitle").value;
PositionThreeEmployer = document.getElementById("positionthreeemployer").value;
PositionThreeStart = document.getElementById("positionthreestart").value;
PositionThreeFinished = document.getElementById("positionthreefinished").value;
PositionThreeTwoLineOne = document.getElementById("positionthreetwolineone").value;
PositionThreeTwoLineTwo = document.getElementById("positionthreetwolinetwo").value;
PositionThreeTwoLineThree = document.getElementById("positionthreetwolinethree").value;
PositionThreeTwoLineFour = document.getElementById("positionthreetwolinefour").value;
PositionThreeTwoLineFive = document.getElementById("positionthreetwolinefive").value;
PositionThreeSingleLineOne = document.getElementById("positionthreesinglelineone").value;
PositionThreeSingleLineTwo = document.getElementById("positionthreesinglelinetwo").value;
PositionThreeSingleLineThree = document.getElementById("positionthreesinglelinethree").value;
PositionThreeSingleLineFour = document.getElementById("positionthreesinglelinefour").value;
PositionThreeSingleLineFive = document.getElementById("positionthreesinglelinefive").value;
Extrasec2Header = document.getElementById("extrasec2header").value;
Extrasec2SubLeft = document.getElementById("extrasec2subleft").value;
Extrasec2LeftOne = document.getElementById("extrasec2leftone").value;
Extrasec2LeftTwo = document.getElementById("extrasec2lefttwo").value;
Extrasec2LeftThree = document.getElementById("extrasec2leftthree").value;
Extrasec2LeftFour = document.getElementById("extrasec2leftfour").value;
Extrasec2LeftFive = document.getElementById("extrasec2leftfive").value;
Extrasec2SubRight = document.getElementById("extrasec2subright").value;
Extrasec2RightOne = document.getElementById("extrasec2rightone").value;
Extrasec2RightTwo = document.getElementById("extrasec2righttwo").value;
Extrasec2RightThree = document.getElementById("extrasec2rightthree").value;
Extrasec2RightFour = document.getElementById("extrasec2rightfour").value;
Extrasec2RightFive = document.getElementById("extrasec2rightfive").value;
Extrasec1Header = document.getElementById("extrasec1header").value;
Extrasec1Paragraph = document.getElementById("extrasec1paragraph").value;
Extrasec1AHeader = document.getElementById("extrasec1Aheader").value;
Extrasec1AParagraph = document.getElementById("extrasec1Aparagraph").value;


ExtraSidebarHeader2 = document.getElementById("extrasidebarheader2").value;
ExtraSidebarPara = document.getElementById("extrasidebartext2").value;

ExtraSidebarHeader = document.getElementById("extrasidebarheader").value;
ExtraSidebarSubTop = document.getElementById("extrasidebarsubtop").value;
ExtraSidebarSubBottom = document.getElementById("extrasidebarsubbottom").value;
ExtraSidebarSubMostBottom = document.getElementById("extrasidebarsubmostbottom").value;
ExtraSidebarTopOne = document.getElementById("extrasidebartopone").value;
ExtraSidebarTopTwo = document.getElementById("extrasidebartoptwo").value;
ExtraSidebarTopThree = document.getElementById("extrasidebartopthree").value;
ExtraSidebarTopFour = document.getElementById("extrasidebartopfour").value;
ExtraSidebarTopFive = document.getElementById("extrasidebartopfive").value;
ExtraSidebarBottomOne = document.getElementById("extrasidebarbottomone").value;
ExtraSidebarBottomTwo = document.getElementById("extrasidebarbottomtwo").value;
ExtraSidebarBottomThree = document.getElementById("extrasidebarbottomthree").value;
ExtraSidebarBottomFour = document.getElementById("extrasidebarbottomfour").value;
ExtraSidebarBottomFive = document.getElementById("extrasidebarbottomfive").value;
ExtraSidebarMostBottomOne = document.getElementById("extrasidebarmostbottomone").value;
ExtraSidebarMostBottomTwo = document.getElementById("extrasidebarmostbottomtwo").value;
ExtraSidebarMostBottomThree = document.getElementById("extrasidebarmostbottomthree").value;
ExtraSidebarMostBottomFour = document.getElementById("extrasidebarmostbottomfour").value;
ExtraSidebarMostBottomFive = document.getElementById("extrasidebarmostbottomfive").value;

CoverLetterContentResume = document.getElementById("coverlettercontent2").value;
}

function RedBG() {

 HeaderCol01 = 128;
 HeaderCol02 = 0;
 HeaderCol03 = 0;
 HeaderTextCol01 = 255;
 HeaderTextCol02 = 255;
 HeaderTextCol03 = 255;
 HeadingTextCol01 = 128;
 HeadingTextCol02 = 0;
 HeadingTextCol03 = 0;
 BodyTextCol01 = 0;
 BodyTextCol02 = 0;
 BodyTextCol03 = 0;

}

function GreenBG() {

 HeaderCol01 = 0;
 HeaderCol02 = 85;
 HeaderCol03 = 0;
 HeaderTextCol01 = 255;
 HeaderTextCol02 = 255;
 HeaderTextCol03 = 255;
 HeadingTextCol01 = 0;
 HeadingTextCol02 = 85;
 HeadingTextCol03 = 0;
 BodyTextCol01 = 0;
 BodyTextCol02 = 0;
 BodyTextCol03 = 0;

}

function BlueBG() {

 HeaderCol01 = 0;
 HeaderCol02 = 0;
 HeaderCol03 = 139;
 HeaderTextCol01 = 255;
 HeaderTextCol02 = 255;
 HeaderTextCol03 = 255;
 HeadingTextCol01 = 0;
 HeadingTextCol02 = 0;
 HeadingTextCol03 = 139;
 BodyTextCol01 = 0;
 BodyTextCol02 = 0;
 BodyTextCol03 = 0;

}

function BrownBG() {

 HeaderCol01 = 133;
 HeaderCol02 = 99;
 HeaderCol03 = 99;
 HeaderTextCol01 = 255;
 HeaderTextCol02 = 255;
 HeaderTextCol03 = 255;
 HeadingTextCol01 = 133;
 HeadingTextCol02 = 99;
 HeadingTextCol03 = 99;
 BodyTextCol01 = 0;
 BodyTextCol02 = 0;
 BodyTextCol03 = 0;

}

function PurpleBG() {

 HeaderCol01 = 128;
 HeaderCol02 = 0;
 HeaderCol03 = 128;
 HeaderTextCol01 = 255;
 HeaderTextCol02 = 255;
 HeaderTextCol03 = 255;
 HeadingTextCol01 = 128;
 HeadingTextCol02 = 0;
 HeadingTextCol03 = 128;
 BodyTextCol01 = 0;
 BodyTextCol02 = 0;
 BodyTextCol03 = 0;

}

function TealBG() {

 HeaderCol01 = 0;
 HeaderCol02 = 128;
 HeaderCol03 = 128;
 HeaderTextCol01 = 255;
 HeaderTextCol02 = 255;
 HeaderTextCol03 = 255;
 HeadingTextCol01 = 0;
 HeadingTextCol02 = 128;
 HeadingTextCol03 = 128;
 BodyTextCol01 = 0;
 BodyTextCol02 = 0;
 BodyTextCol03 = 0;

}

function GreyBG() {

 HeaderCol01 = 112;
 HeaderCol02 = 128;
 HeaderCol03 = 144;
 HeaderTextCol01 = 255;
 HeaderTextCol02 = 255;
 HeaderTextCol03 = 255;
 HeadingTextCol01 = 112;
 HeadingTextCol02 = 128;
 HeadingTextCol03 = 144;
 BodyTextCol01 = 0;
 BodyTextCol02 = 0;
 BodyTextCol03 = 0;

}


 function ChooseTextSize12() {

TextSize = 12;
LineHeight = 4.85;
SP01 = 1.9;
SP02 = 2.0;

 }

 function ChooseTextSize11() {

TextSize = 11;
LineHeight = 4.5;
SP01 = 1.7;
SP02 = 1.8;

 }

 function ChooseTextSize10() {

TextSize = 10;
LineHeight = 4;
SP01 = 1.5;
SP02 = 1.6;

 }

function ChooseTextSize9() {

TextSize = 9;
LineHeight = 3.6;
SP01 = 1.3;
SP02 = 1.4;

 }

function ChooseHeadingSize13() {

HeadingSize = 13;

}

function ChooseHeadingSize14() {

HeadingSize = 14;

}

function ChooseHeadingSize15() {

HeadingSize = 15;

}

function ChooseHeadingSize16() {

HeadingSize = 16;

}

function ChooseHeaderSize26() {

HeaderText01 = 26;

}

function ChooseHeaderSize28() {

HeaderText01 = 28;

}

function ChooseHeaderSize30() {

HeaderText01 = 30;

}

function ChooseHeaderSize32() {

HeaderText01 = 32;

}

function ChooseHeaderSize18() {

HeaderText02 = 18;
HTDiff = 2.5;

}

function ChooseHeaderSize20() {

HeaderText02 = 20;
HTDiff = 2;

}

function ChooseHeaderSize22() {

HeaderText02 = 22;
HTDiff = 1;

}

function ChooseHeaderSize24() {

HeaderText02 = 24;
HTDiff = 0.5;

}
