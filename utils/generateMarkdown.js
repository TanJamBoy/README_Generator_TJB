// function to generate markdown for README
function generateMarkdown(data) {
  if (data.license === "MIT"){
    licenseBadge = `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
}else if(data.license === "IBM"){
    licenseBadge = `[![License: IPL 1.0](https://img.shields.io/badge/License-IPL%201.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)`
}else if(data.license === "Mozilla"){
    licenseBadge = `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`
};
  return `# ${data.title}

  ${licenseBadge}

## Description
${data.desc}

---
## Table of Contents
[Installation](#installation-instructions)

[Usage](#usage-information)

[Contribution](#contribution-guidelines)

[Testing](#testing)

[License](#License)

[Questions](#questions)

---
## Installation Instructions
${data.install}

---
## Usage Information
${data.usage}

---
## Contribution Guidelines
${data.collab}

---
## Testing
${data.test}

---
## License
Coverd under the ${data.license} license

---
## Questions
GitHub: [${data.gitHub}](https://github.com/${data.gitHub})

Email: ${data.email}

---
`;
}

module.exports = generateMarkdown;
