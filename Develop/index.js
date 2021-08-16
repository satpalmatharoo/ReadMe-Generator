// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const util = require ("util");

// writeFile function
const writeFileAsync = util.promisify(fs.writeFile);


inquirer
    .prompt([
    {
  // TODO: Create an array of questions for user input
    type: "input",
    name: "Title",
    message: "What is the title of the project?"
  },
  {
    type: "input",
    name: "Description",
    message:  "Give a detailed overview and description of the project"
  },
  {
    type: "input",
    name: "Table of Contents",
    message: "Guidence about funtionality",
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
    type: "input",
    name: "License",
    message: "Add your license or badge link if needed",
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
// const generateMarkdown = (answers) => is there where to put answers?


// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then ((answers) => writeFileAsync("GeneratedMarkdown.md",generateMarkdown(answers)))
    .then(()=>console.log("generated"))
    .catch ((err) => console.log(err));

};

// Function call to initialize app
init();


// var fs = require('fs');

//create a file named mynewfile3.txt:
