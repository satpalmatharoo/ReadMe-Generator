//Packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const util = require ("util");

// writeFile function
const writeFileAsync = util.promisify(fs.writeFile);

const testing = () => {

return inquirer.prompt([
    {
    type: "input",
    message: "What is the title of the project?",
    name: "title",
  },
  {
    type: "input",
    message: "Give a detailed overview and description of the project",
    name:  "Description",
  },
  {
    type: "input",
    message: "Contents",
    name: "Table of Contents",
  },
  {
    type: "input",
    name: "Installation",
    message: "Provide any installation instructions",
  },
  {
    type: "input",
    name: "Usage",
    message: "Please explain usage",
  },
  {
    type: "list",
    name: "License",
    message: "Add your license or badge link if needed",
    choices: ["GNU GPLv3", "Mozilla Public License 2.0", "Apache License 2.0", "The Unlicense", "N/A"]
  },
  {
    type: "input",
    name: "Contributing",
    message: "Would you like to add contributors to your project?",
  },
  {
    type: "input",
    name: "Tests",
    message: "Do you have any project tests? If so please provide",
  },

])
}

const generateMarkdown = (answers) =>
  `#Table of contents
  *Title
  *Description
  *Installation
  *Usage
  *License
  *Contributing
  *Tests
   
   # ${answers.title}
   
   #Description
    ${answers.Description}
   # ${answers.TableofContents}
   # ${answers.Installation}
   # ${answers.Usage}
   # ${answers.License}
   # ${answers.Contributing}
   # ${answers.Tests}
  `;

const init = () => {
  testing()
    .then((data) => writeFileAsync('index.md', generateMarkdown(data)))
    .then(() => console.log('Successfully wrote to index.md'))
    .catch((err) => console.error(err));
};

init();

