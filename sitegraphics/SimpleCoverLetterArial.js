function CoverLetterSimpleArial() {

  GetCoverLetterData();
  SimpleCoverLetterPDFArial();

}


function SimpleCoverLetterPDFArial() {




  // Default export is a4 paper, portrait, using millimeters for units
  var doc = new jsPDF()


  // Declarations of the data

  var BTStart = 12; //Body text start point
  var BTWidth = 186; // Body text width
  var SummarySpace = 15;



  doc.setFont("helvetica");
  doc.setFontSize(TextSize);

  doc.setFontSize(TextSize);
  doc.setTextColor(BodyTextCol01,BodyTextCol02,BodyTextCol03);

  var paragraph = CoverLetterContent;
  var lines = doc.splitTextToSize(paragraph, BTWidth);
  doc.text(BTStart, SummarySpace, lines);  // Career Summary


  // ***********************  Save File ****************************

  doc.save('cover-letter-arial.pdf')

    }
