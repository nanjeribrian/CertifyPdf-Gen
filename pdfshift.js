const pdfshift = require('pdfshift')('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');
const fs = require('fs');
 
pdfshift.convert('http://localhost:3000/')
  .then(function (binary_file) {
    fs.writeFile('result.pdf', binary_file, 'binary', function (err) {
      if (err) {
        console.error('Error writing the PDF file:', err);
      } else {
        console.log('PDF file successfully created!');
      }
    });
  })
  .catch(function ({ message, code, response, errors = null }) {
    console.error('PDF generation failed:', message);
  });

