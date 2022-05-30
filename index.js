const inquirer = require("inquirer");
const fs = require("fs");
const createHTML = require("./Src/html.js");

const Employee = require("./Test/Employee.test.js");
const Manager = require("./Test/Manager.test.js");
const Intern = require("./Test/Intern.test.js");
const Engineer = require("./Test/Engineer.test.js");

const staff = [];

function getEmployeeData(role) {
    return inquirer
        .prompt([{
                type: "input",
                message: `What is the ${role}'s name? `,
                name: "name",
            },
            {
                type: "number",
                message: `What is the ${role}'s ID? `,
                name: "id",
            },
            {
                type: "input",
                message: `What is the ${role}'s email? `,
                name: "email",
            },
            {
                type: "input",
                message: "What is the manager's office number? ",
                name: "officeNumber",
                when: role === "manager",
            },
            {
                type: "input",
                message: "What is the engineer's GitHub username? ",
                name: "github",
                when: role === "engineer",
            },
            {
                type: "input",
                message: "What is the intern's school? ",
                name: "school",
                when: role === "intern",
            },
            {
                type: "list",
                message: `What do you wish to do next?`,
                name: "nextStep",
                choices: ["Add an engineer", "Add an intern", "Build my team"],
            },
        ])
        .then((response) => {
            let newEmployee = {};

            switch (role) {
                case "manager":
                    newEmployee = new Manager(
                        response.name,
                        response.id,
                        response.email,
                        response.officeNumber
                    );
                    break;
                case "engineer":
                    newEmployee = new Engineer(
                        response.name,
                        response.id,
                        response.email,
                        response.github
                    );
                    break;
                case "intern":
                    newEmployee = new Intern(
                        response.name,
                        response.id,
                        response.email,
                        response.school
                    );
                    break;
                default:
                    throw new Error("unknown employee role");
            }

            // add new employee to array of all employees
            staff.push(newEmployee);

            if (response.nextStep === "Add an engineer") {
                return getEmployeeData("engineer");
            } else if (response.nextStep === "Add an intern") {
                return getEmployeeData("intern");
            } else {
                const html = createHTML(staff);
                writeToFile(html);
            }
        });
}

function writeToFile(generatedHTML) {
    fs.writeFile("./dist/index.html", generatedHTML, (err) =>
        err ? console.log(err) : console.log("Success!")
    );
}

function init() {
    console.log("\nWelcome to the Team Profile Generator.");
    console.log("Begin by entering manager information.");
    getEmployeeData("manager");
}

init();