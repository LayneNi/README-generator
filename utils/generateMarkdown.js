// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
# ${data.title}

![badge](https://img.shields.io/badge/license-${data.license}-${data.color})

## Description

${data.description}

## Table of Contents

- [${data.contents[0]}](#${data.contents[0]})
- [${data.contents[1]}](#${data.contents[1]})
- [${data.contents[2]}](#${data.contents[2]})
- [${data.contents[3]}](#${data.contents[3]})
- [${data.contents[4]}](#${data.contents[4]})
- [${data.contents[5]}](#${data.contents[5]})
- [${data.contents[6]}](#${data.contents[6]})
- [${data.contents[7]}](#${data.contents[7]})

## Installation

${data.installation}

## Usage

${data.usage}


## Credits

My contributors were ${data.credits}

## License

License: ${data.license}

## Features

My applications had features such as: ${data.features}

## How to Contribute

To contribute to my application: ${data.contribute}


## Tests

${data.tests}


## Questions

Github Username: ${data.username}
\nGithin Profile link: https://github.com/${data.username}

\nFor any additional questions please reach out to me via email at ${data.email}
`;
}

module.exports = generateMarkdown;
