
alert('Hey are you really want to enter in this page ?');


// downloading resume
function downloadPDF() {
    const pdfLink = 'https://drive.google.com/file/d/1lLMx3MMT9CtzIFPWFZ2wnAuicvL96aNH/view?usp=drivesdk'; // Replace YOUR_FILE_ID with the actual ID from the shareable link
    const link = document.createElement('a');
    link.href = pdfLink;
    link.download = 'sourav-resume.pdf'; // Replace document-name.pdf with your desired filename
    link.click();
  }