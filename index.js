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
    "Who are the collaborators on this project?",
    "How should people test your project?",

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
        ])
        .then(e => {
            let readmeContent = Markdown(e);
            wrtieToFile("README_TEST.md", readmeContent);
        })
        .catch(err => {
            if(err){console.log(err)};
        });
};

// function to write README file
function wrtieToFile(fileName, data) {
    data = JSON.stringify(data);
    writeFileAsync(fileName, data);
};

// function to initialize program
function init() {
    promptUser();
};

// function call to initialize program
init();
