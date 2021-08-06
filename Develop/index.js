// TODO: Include packages needed for this application
const inquirer = require("inquirer");

// TODO: Create an array of questions for user input
const questions = inquirer
.prompt([
  {
    type: "input",
    name: "Title",
    message: "What is the title of the project?"
  },
  {
    type: "input",
    name: "Project",
    message:  "Give a detailed overview and description of the project"
  },
  {
    type: "input",
    name: "Acceptance Criteria",
    message: "Guidence about funtionality",
  },
  {
    type: "input",
    name: "User Story",
    message: "Explain the context of the Functionality",
  },
  {
    type: "input",
    name: "Installation",
    message: "Explain the context of the Functionality",
  },


  }  

])
      



// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
