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
      message: 'What is the title of your app?',
      name: 'title',
    },
    {
      type: 'input',
      message: 'Please write a short description of your app.',
      name: 'description',
    },
    {
      type: 'confirm',
      message: 'Would you like to include a table of contents?',
      name: 'contents',
    },
    {
      type: 'input',
      message: 'What commands should be run to install dependencies?',
      name: 'installation',
    },
    {
      type: 'input',
      message: 'What does the user need to know about using the repo?',
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
      message: 'Are there any key features for your repo?',
      name: 'features',
    },
    {
      type: 'input',
      message: 'What does the user need to know about contrinuting to your repo?',
      name: 'contribute',
    },
    {
      type: 'input',
      message: 'What commands should be run to run tests?',
      name: 'tests',
    },
    {
      type: 'input',
      message: 'What is your Github username?',
      name: 'username',
    },
    {
      type: 'input',
      message: 'What is your email address?',
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
