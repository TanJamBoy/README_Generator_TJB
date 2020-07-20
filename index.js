const fs = require("fs");
const inquirer = require("inquirer");
const util = require("util");
const Markdown = require("./utils/generateMarkdown");

const writeFileAsync = util.promisify(fs.writeFile);


// array of questions for user
const questions = [
    "What is the title of your project?",
    "What is the description of your project?",
    "What are the installation requirements of your project?",
    "How should people use your project?",
    "What are the contribution guidelines?",
    "How should people test your project?",
    "What license are you using?",
    "What is your GitHub username?",
    "What is your email address?",

];

// prompt function
function promptUser(){
    inquirer
        .prompt([
            {
                name: "title",
                message: questions[0],
                type: "input"
            },
            {
                name: "desc",
                message: questions[1],
                type: "input"
            },
            {
                name: "install",
                message: questions[2],
                type: "input"
            },
            {
                name: "usage",
                message: questions[3],
                type: "input"
            },
            {
                name: "collab",
                message: questions[4],
                type: "input"
            },
            {
                name: "test",
                message: questions[5],
                type: "input"
            },
            {
                name: "license",
                message: questions[6],
                type: "list",
                choices: ["MIT", "IBM", "Mozilla"]
            },
            {
                name: "gitHub",
                message: questions[7],
                type: "input"
            },
            {
                name: "email",
                message: questions[8],
                type: "input"
            },
        ])
        .then(e => {
            let readmeContent = Markdown(e);
            wrtieToFile("README_SAMPLE.md", readmeContent);
        })
        .catch(err => {
            if(err){console.log(err)};
        });
};

// function to write README file
function wrtieToFile(fileName, data) {
    writeFileAsync(fileName, data);
};

// function to initialize program
function init() {
    promptUser();
};

// function call to initialize program
init();
