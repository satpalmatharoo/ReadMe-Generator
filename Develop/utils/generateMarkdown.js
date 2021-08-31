// Function that returns a license badge based on which license is passed in
function renderLicenseBadge(license) {
  if (license === 'N/A') {
    return '';
  }

  return `![GitHub License]((https://img.shields.io/badge/License-${license}-blue.svg)`;
}

// Function that returns the license link
function renderLicenseLink(license) {
  if (license === 'N/A') {
    return '';
  }

  return '[License](#license)'
}

// A function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  return (license)
}


// unction to generate markdown for README
function generateMarkdown(data) {
  return data
}

module.exports = generateMarkdown;
