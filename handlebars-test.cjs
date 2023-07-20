const fs = require('fs');
const Handlebars = require('handlebars');

const fs = require('fs');
const Handlebars = require('handlebars');

// Define the Handlebars template
const template = `
<div class="post">
  <h1>By {{fullName author}}</h1>
  <div class="body">{{body}}</div>

  <h1>Comments</h1>

  {{#each comments}}
  <h2>By {{fullName author}}</h2>
  <div class="body">{{body}}</div>
  {{/each}}
</div>
`;

// Prepare the context with the data you want to use in the template
const context = {
  author: { firstName: "Alan", lastName: "Johnson" },
  body: "I Love Handlebars",
  comments: [{
    author: { firstName: "Yehuda", lastName: "Katz" },
    body: "Me too!"
  }]
};

// Register the helper function
Handlebars.registerHelper('fullName', function (person) {
  return person.firstName + " " + person.lastName;
});

// Compile the Handlebars template
const compiledTemplate = Handlebars.compile(template);

// Render the template with the context
const renderedHtml = compiledTemplate(context);

// Example: Write the rendered HTML to a file
fs.writeFileSync('output.html', renderedHtml);

console.log('Handlebars template rendered successfully.');

