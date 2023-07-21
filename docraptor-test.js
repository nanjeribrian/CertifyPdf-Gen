const axios = require('axios');
const fs=require('fs')

// Replace 'YOUR_API_KEY_HERE' with your actual DocRaptor API key
const apiKey = ' hWx5eECrs1oJ';

// URL to the DocRaptor API endpoint
// Example HTML content
const htmlContent = `
  <html>
    <body>
      <h1>Hello, DocRaptor!</h1>
      <p>This is an example PDF generated using DocRaptor.</p>
    </body>
  </html>
`;

// Function to convert HTML to PDF using DocRaptor API
async function convertToPdf() {
  try {
    const response = await axios.post(`https://hWeK0cw1oJ@api.docraptor.com/docs`, {
      test: false,                // test documents are free but watermarked
      document_content: htmlContent,
      type: 'pdf',               // pdf or xls or xlsx
    });

    // The API response will contain the PDF file as binary data
    const pdfData = response.data;

    //  such as save it to a file
     fs.writeFileSync('docraptor.pdf', pdfData);

    console.log('PDF successfully generated.');
  } catch (error) {
    console.error('Error:', error.message);
  }
}

// Call the function to convert HTML to PDF
convertToPdf();
