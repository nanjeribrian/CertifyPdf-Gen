import { PDFDocument } from 'pdf-lib';
import fs from 'fs';


  try {
    // PDF Creation
    const pdfDoc = await PDFDocument.create();
    const page = pdfDoc.addPage();
    page.drawText('You can create PDFs!');
    const pdfBytes = await pdfDoc.save();

    // Write the PDF to a file
    fs.writeFileSync('output.pdf', pdfBytes);

    console.log('PDF successfully created.');
  } catch (error) {
    console.error('An error occurred:', error.message);
  }

