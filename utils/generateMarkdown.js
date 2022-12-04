// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license) {
    case 'MIT':
      return `![badge](https://img.shields.io/badge/License-MIT-blue)`
    case 'Mozilla':
      return `![badge](https://img.shields.io/badge/License-Mozilla-blue)`
    case 'Apache':
      return `![badge](https://img.shields.io/badge/License-Apache-blue)`
    case 'GPLv3':
      return `![badge](https://img.shields.io/badge/License-GPLv3-blue)`
    default:
      return "";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch (license) {
    case 'MIT':
      return `This project is licensed under the MIT license. https://choosealicense.com/licenses/mit/`
    case 'Mozilla':
      return `This project is licensed under the Mozilla license. https://choosealicense.com/licenses/mpl-2.0/`
    case 'Apache':
      return `This project is licensed under the Apache license. https://choosealicense.com/licenses/apache-2.0/`
    case 'GPLv3':
      return `This project is licensed under the GPLv3 license. https://choosealicense.com/licenses/gpl-3.0/`
    default:
      return "";
}
}
// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  switch (license) {
    case 'None':
      return "" 
    default:
      return "## License";
  }
}

function renderTableOfContentSection(content) {
if (content === true){
  return "## Table of Contents"
  } else {
    return ""
  }
}

function renderTableOfContent(content) {
  switch (content) {
    case false:
      return "" 
    default:
      return `<br\>- [installation](#installation)
      <br\>- [usage](#usage)
      <br\>- [credits](#credits)
      <br\>- [license](#license)
      <br\>- [features](#features)
      <br\>- [how-to-contribute](#how-to-contribute)
      <br\>- [tests](#tests)
      <br\>- [questions](#questions)`
  }
}


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
# ${data.title}

${renderLicenseBadge(data.license)}

## Description

${data.description}


${renderTableOfContentSection(data.contents)}
${renderTableOfContent(data.contents)}

## Installation
To install necessary dependencies, run the following command:
${data.installation}

## Usage

${data.usage}


## Credits

Contributors: ${data.credits}

${renderLicenseSection(data.license)}
${renderLicenseLink(data.license)}

## Features

My application has features such as: ${data.features}

## How to Contribute

To contribute to my application, ${data.contribute}


## Tests
To test the application, run the following command:
${data.tests}


## Questions

Github Username: ${data.username}
\nGithin Profile link: https://github.com/${data.username}

\nFor any additional questions please reach out to me via email at ${data.email}
`;
}

module.exports = generateMarkdown;
