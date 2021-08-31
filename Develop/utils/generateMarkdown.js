// Function that returns a license badge based on which license is passed in

function renderLicenseBadge(license) {
  return (license)
 "[![GPLv3 license](https://img.shields.io/badge/License-GPLv3-blue.svg)](http://perso.crans.org/besson/LICENSE.html)";
 "[![MIT license](https://img.shields.io/badge/License-MIT-blue.svg)](https://lbesson.mit-license.org/)";
 "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0);
}

renderLicenseBadge ()

// Function that returns the license link

function renderLicenseLink(license) {
  return (license)
}
renderLicenseLink ()


// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  return (license)
}
renderLicenseSection ()

// unction to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`;
}

module.exports = generateMarkdown;
