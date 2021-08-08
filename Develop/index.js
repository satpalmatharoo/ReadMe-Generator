// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require('fs');
const utils = require ("utils");


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
  {
    type: "input",
    name: "Questions",
    message: "Are there any installations are necessary to complete Project?",
  },

])

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFileAsync = utils.promisfy (fs.writeFile);

  const promptUser = () => {
    return inquirer.prompt ([
      )
  }
  
}




// // function writeToFile(fileName, data) {
//     fs.writeFile("fileName","data"), function (err){
//         if (err) throw err;
//         console.log (data)
//     }
    
// }

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

