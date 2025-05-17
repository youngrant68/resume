
function RandomCoverLetter01() {

    Subject01();
    Greeting01();
    Opener01();
    Body01();
    Gaps01();
    CallToAction01();
    Closer01();

}



function random(mn, mx) {
    return Math.random() * (mx - mn) + mn;
}

function Subject01() {

    var arr = ["RE: [Position Title] position", "RE: [Position Title] position - available to start immediately", "RE: Enthusiastic and Hard-Working [Position Title]", "RE: [Position Title] - ready to roll up my sleeves!"];

    var q = arr[Math.floor(random(1, 5))-1];

    document.getElementById("randomclcontent").value = q;

}

function Greeting01() {

    var arr = ["Dear hiring manager, ", "Dear recruitment manager, ", "Dear Recruiter, "];

    var q = arr[Math.floor(random(1, 4))-1];

    document.getElementById("randomclcontent02").value = q;

}

function Opener01() {

    var arr = ["I'm applying for the [Position Title] position, which I saw advertised on [Advertised on] website. I believe I meet all the essential criteria for the role and feel I can make an effective and immediate contribution to your team.", "I'm applying for the [Position Title] position, which I saw advertised on [Advertised on] website. I believe I would make a great addition to your team.", "Thank you for the opportunity to apply for the [Position Title] role at your company. After reviewing your job description, it's clear that you're looking for a candidate that is extremely familiar with the responsibilities associated with the role, and can perform them confidently. Given these requirements, I am certain that I have the necessary skills to successfully do the job adeptly and perform above your expectations.", "I'm applying for the [Position Title] position, which I saw advertised on [Advertised on] website. I believe that I have the characteristics that [Company Name] needs and deserves.", "With over [Number] years of experience as a [Position Title], I wanted to reach out to you with my interest in joining the [Company Name] team."];

    var q = arr[Math.floor(random(1, 6))-1];

    document.getElementById("randomclcontent03").value = q;

}

function Body01() {

    var arr = ["In my previous role as a [Position Title] with [Previous Employer], I handled tasks very similar to what you outlined in your job ad. With my ability to learn, I know I can quickly close any knowledge gaps to become an asset to your team.\n\nI am a fast efficient worker who is punctual and dependable, being someone who you can count on to show up and get the job done. I never shirk my responsibilities, and I'm always ready to step up and help out my co-workers.", "In my previous role as a [Position Title] with [Previous Employer], I handled tasks very similar to what you outlined in your job ad. I make it a priority to learn all I can to improve what I know and what I can offer my employer. I think this is one of the personal attributes that set me apart. Additionally, I pride myself on being organised, detail-oriented and a capable manager of my time.", "My work experiences have allowed me to strengthen my abilities in time management, prioritising tasks and working under pressure. I am punctual and dependable, being someone who you can count on to show up and get the job done. I never shirk my responsibilities, and I'm always ready to step up and help out my co-workers.\n\nI make it a priority to learn all I can to improve what I know and what I can offer my employer. I think this is one of the personal attributes that set me apart. Additionally, I pride myself on being organised, detail-oriented and a capable manager of my time.", "I handled various responsibilities in my previous [Position Title] position [Previous Employer] and quickly established talents in prioritising tasks, meeting deadlines and finding solutions to eliminate obstacles. My career has enabled me to develop and establish skills in time management, working independently and focussing on attention to detail.\n\nI am grateful for the opportunities afforded me in my prior position, and I'm ready to put those skills to use for your company. I am looking forward to new challenges, collaborating with a fresh team of talented professionals.", "My work experiences have allowed me to strengthen my abilities in prioritising tasks, working independently and working under pressure. I am punctual and dependable, being someone who you can count on to show up and get the job done. I never shirk my responsibilities, and I'm always ready to step up and help out my co-workers.\n\nI make it a priority to learn all I can to improve what I know and what I can offer my employer. I think this is one of the personal attributes that set me apart. Additionally, I pride myself on being organised, detail-oriented and a capable manager of my time.", "In my [Previous Job Title] position at [Previous Employer Name], I was recognised as a top performer and always went beyond basics to help the team and serve business needs. I would be happy to bring that same drive and enthusiasm to your team and know I could be a valuable asset.\n\nI am grateful for the opportunities afforded me in my prior position, and I'm ready to put those skills to use for your company. I am looking forward to new challenges, collaborating with a fresh team of talented professionals."];

    var q = arr[Math.floor(random(1, 7))-1];

    document.getElementById("randomclcontent04").value = q;

}

function Gaps01() {

    var arr = ["As you review my resume, you may notice that I haven't had any recent work experience. This is due to me resigning from my previous position as I needed to take some time out. Then the pandemic hit, which has forced a lot of people like me out of work, and I have yet been unable to secure another position. While this period was unplanned and unexpected, I feel that I am ready to get back into the workforce."];

    var q = arr[Math.floor(random(1, 2))-1];

    document.getElementById("randomclcontent05").value = q;

}

function CallToAction01() {

    var arr = ["Please take a moment to review my attached resume and credentials. I would greatly appreciate the opportunity to speak with you regarding my candidacy.", "Please take a moment to review my attached resume and credentials. I'd be happy to provide greater detail about my skills and experience during an interview.", "You can reach me at the phone number or email listed above. Please contact me if you would like to schedule an interview or have any questions about my skills or experience.", "You can reach me at the phone number or email listed above. I look forward to hearing from you.", "Please take a look at my enclosed resume for more details about my work experience and qualifications. I'd really like to speak with you more about the position, and I look forward to hearing from you soon.", "I've attached my resume with additional details of my work experience and qualifications. If you have any questions, please feel free to contact me.", "I would greatly appreciate your review of my enclosed resume and outlined credentials. I believe that I can be a valuable addition to your business. At your convenience, I am available for an interview or further discussion. I look forward to your response."];

    var q = arr[Math.floor(random(1, 8))-1];

    document.getElementById("randomclcontent06").value = q;

}

function Closer01() {

    var arr = ["Thank you for your valued time.\n\nSincerely,", "Thank you, in advance, for your consideration.\n\nBest regards,", "Have a lovely day.\n\nSincerely,", "I appreciate your consideration.\n\nBest regards,", "Thank you in advance for considering me.\n\nSincerely,", "I welcome the opportunity to contribute my skills to your team.\n\nWith regards,", "Looking forward to hearing from you.\n\nSincerely,", "Thank you for your interest.\n\nSincerely,", "Thank you for your time and attention.\n\nSincerely,", "I am sure that you are very busy, so I greatly appreciate your time and attention.\n\nWarm regards,", "I look forward to speaking with you soon.\n\nBest regards,", "Thank you for your careful consideration.\n\nSincerely,"];

    var q = arr[Math.floor(random(1, 13))-1];

    document.getElementById("randomclcontent07").value = q;

}


function CompleteCL01() {

  var empt = document.details.recipientname.value;
  if (empt === ""){

var name1 = document.getElementById("fullname").value;
var phone1 = document.getElementById("phonenumber").value;
var email1 = document.getElementById("email").value;
var address1 = document.getElementById("addyress").value;
var date1 = document.getElementById("thedate").value;
var companyname1 = document.getElementById("companyname").value;
var companyaddress1 = document.getElementById("companyaddress").value;
var subject1 = document.getElementById("randomclcontent").value;
var greeting1 = document.getElementById("randomclcontent02").value;
var opener1 = document.getElementById("randomclcontent03").value;
var bodytext1 = document.getElementById("randomclcontent04").value;
var gaptext1 = document.getElementById("randomclcontent05").value;
var calltoactiontext1 = document.getElementById("randomclcontent06").value;
var closertext1 = document.getElementById("randomclcontent07").value;

var completeString1 = name1 + "\n" + phone1 + "\n" + email1 + "\n" + address1 + "\n\n" + date1 + "\n\n" + companyname1 + "\n" + companyaddress1 + "\n\n" + subject1 + "\n\n" + greeting1 + "\n\n" + opener1 + "\n\n" + bodytext1 + "\n\n" + gaptext1 + "\n\n" + calltoactiontext1 + "\n\n" + closertext1 + "\n" + name1;
document.getElementById("coverlettercontent").value = completeString1;

} else {

  var name1 = document.getElementById("fullname").value;
  var phone1 = document.getElementById("phonenumber").value;
  var email1 = document.getElementById("email").value;
  var address1 = document.getElementById("addyress").value;
  var date1 = document.getElementById("thedate").value;
  var recipname1 = document.getElementById("recipientname").value;
  var companyname1 = document.getElementById("companyname").value;
  var companyaddress1 = document.getElementById("companyaddress").value;
  var subject1 = document.getElementById("randomclcontent").value;
  var greeting1 = document.getElementById("randomclcontent02").value;
  var opener1 = document.getElementById("randomclcontent03").value;
  var bodytext1 = document.getElementById("randomclcontent04").value;
  var gaptext1 = document.getElementById("randomclcontent05").value;
  var calltoactiontext1 = document.getElementById("randomclcontent06").value;
  var closertext1 = document.getElementById("randomclcontent07").value;

  var completeString1 = name1 + "\n" + phone1 + "\n" + email1 + "\n" + address1 + "\n\n" + date1 + "\n\n" + recipname1 + "\n" + companyname1 + "\n" + companyaddress1 + "\n\n" + subject1 + "\n\n" + greeting1 + "\n\n" + opener1 + "\n\n" + bodytext1 + "\n\n" + gaptext1 + "\n\n" + calltoactiontext1 + "\n\n" + closertext1 + "\n" + name1;
  document.getElementById("coverlettercontent").value = completeString1;

}


}
