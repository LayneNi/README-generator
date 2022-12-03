// TODO: Include packages needed for this application
// const generate = require('./utils/generateMarkdown')
const path = require("path");
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
// const questions = [];
inquirer
  .prompt([
    {
      type: 'input',
      message: 'What is your app title?',
      name: 'title',
    },
    {
      type: 'input',
      message: 'What is a description of your app?',
      name: 'description',
    },
    {
      type: 'confirm',
      message: 'What would you like to include in your table of contents?',
      name: 'contents',
    },
    {
      type: 'input',
      message: 'Are there any steps necessary for installation?',
      name: 'installation',
    },
    {
      type: 'input',
      message: 'Please share any instructions and examples for use of this app.',
      name: 'usage',
    },
    {
      type: 'input',
      message: 'Please credit any contributors.',
      name: 'credits',
    },
    {
      type: 'list',
      choices: ['None', 'MIT', 'Mozilla', 'Apache', 'GPLv3'],
      message: 'Which license is associated with this application?',
      name: 'license',
    },
    {
      type: 'input',
      message: 'Please list any key features of this application.',
      name: 'features',
    },
    {
      type: 'input',
      message: 'How can someone contrinute to your application?',
      name: 'contribute',
    },
    {
      type: 'input',
      message: 'Please list instructions for testing.',
      name: 'tests',
    },
    {
      type: 'input',
      message: 'What is your Github username?',
      name: 'username',
    },
    {
      type: 'input',
      message: 'What is your email?',
      name: 'email',
    },
  ])
  .then((response) => {
    console.log(response);
    writeToFile("README.md", generateMarkdown({ ...response }));

  });

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFileSync(path.join(process.cwd(), fileName), data)
}

// TODO: Create a function to initialize app
function init() {

}

// Function call to initialize app
init();
