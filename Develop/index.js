// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require('fs');


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
    message: "Are there any installations are necessary to complete Project?",
  },

])

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile("fileName","data"), function (err){
        if (err) throw err;
        console.log (data)
    }
    
}

// TODO: Create a function to initialize app
function init(generateReadme) {
  this.generateReadme=generateReadme;
}
generateReadme.prototype.print=function (){
  console.log(this.generateReadme)
}

// Function call to initialize app
init();


var fs = require('fs');

//create a file named mynewfile3.txt:

