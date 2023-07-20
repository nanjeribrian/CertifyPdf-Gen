import { jsPDF } from 'jspdf';
import autoTable from 'jspdf-autotable';


// Rest of the code remains the same
const doc = new jsPDF();


const tableData = {
  head: [['Name', 'Email', 'Country']],
  body: [
    ['David', 'david@example.com', 'Sweden'],
    ['Castille', 'castille@example.com', 'Spain'],
    // ... Add more rows as needed
  ],
};
doc.autoTable(tableData);

// Save the PDF file
doc.save('table.pdf');