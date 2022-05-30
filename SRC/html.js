const Employee = require("../Lib/Employee.js");
const Manager = require("../Lib/Manager.js");
const Intern = require("../Lib/Intern.js");
const Engineer = require("../Lib/Engineer.js");

function createManagerCard(manager) {
    return `<div class="card m-3" style="width: 18rem;">
                <div class="card-header bg-primary text-white">
                    <h4>${manager.getName()}</h4>
                    <h5>${manager.getRole()}</h5>
                </div>
                <div class="card-body" style="background-color:#D9D9D9;">
                    <ul class="list-group">
                        <li class="list-group-item">ID: ${manager.getId()}</li>
                        <li class="list-group-item">Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></li>
                        <li class="list-group-item">Office: ${
                          manager.officeNumber
                        } </li>
                    </ul>
                </div>
            </div>
    
            `;
}

function createEngineerCard(engineer) {
    return `<div class="card m-3" style="width: 18rem;">
                <div class="card-header bg-primary text-white">
                    <h4>${engineer.getName()}</h4>
                    <h5>${engineer.getRole()}</h5>
                </div>
                <div class="card-body" style="background-color:#D9D9D9;">
                    <ul class="list-group">
                        <li class="list-group-item">ID: ${engineer.getId()}</li>
                        <li class="list-group-item">Email: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}<a></li>
                        <li class="list-group-item">GitHub: <a href="https://github.com/${engineer.getGithub()}" target="_blank">${engineer.getGithub()}</a></li>
                    </ul>
                </div>
            </div>
    
            `;
}

function createInternCard(intern) {
    return `<div class="card m-3" style="width: 18rem;">
                <div class="card-header bg-primary text-white">
                    <h4>${intern.getName()}</h4>
                    <h5>${intern.getRole()}</h5>
                </div>
                <div class="card-body" style="background-color:#D9D9D9;">
                    <ul class="list-group">
                        <li class="list-group-item">ID: ${intern.getId()}</li>
                        <li class="list-group-item">Email: <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></li>
                        <li class="list-group-item">School: ${intern.getSchool()}</li>
                    </ul>
                </div>
            </div>
    
            `;
}

function createHTML(staff) {
    const cards = staff
        .map((employee) => {
            if (employee.getRole() == "Manager") {
                return createManagerCard(employee);
            } else if (employee.getRole() == "Engineer") {
                return createEngineerCard(employee);
            } else if (employee.getRole() == "Intern") {
                return createInternCard(employee);
            }
        })
        .join("");

    return `<!DOCTYPE html>
 <html lang="en">
 
 <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css">
    <title>Team Profile</title>
 </head>
 
 <body>
 
     <!-- Header -->
     <header class="container-fluid bg-danger mb-3 p-2">
         <h1 class="display-5 text-white text-center">My Team</h1>
     </header>
     <!-- Main -->
     <main class = "container">
         <div class = "row d-flex justify-content-center">
 
         ${cards}
 
         </div>
     </main>
 
 <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
 <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js"></script>
 <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/js/bootstrap.min.js"></script>
 
 </body>
 
 </html>
 `;
}

module.exports = createHTML;