// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
    ${data.desc}
    ${data.install}
    ${data.usage}
    ${data.collab}
    ${data.test}
`;
}

module.exports = generateMarkdown;
