const inquirer = require('inquirer');
const Manager = require('./Manager');
const Engineer = require('./Engineer');
const Intern = require('./Intern');
const { generateEmployees } = require('./generateEmployees.js');
const { writeFile } = require('./generateHtml.js');

const information = [
    {info: "Enter employee name:"},
    {info: "Select employee title:"},
    {info: "Enter employee ID:"},
    {info: "Enter employee email:"},
    {info: "Select employee office number:"}
];

function Tracker() {
    // this.managerName = '';
    // this.employeeCountTracker = 0;
    this.employee = []
    this.currentEmployee;
}

Tracker.prototype.initializeTracker = function() {
    inquirer
        .prompt({
            type: 'text',
            name: 'name',
            message: 'What is the team managers name?'
        })
        .then(({ name }) => {
            information[0].info = name;
            information[1].info = 'Manager'
            console.log("Name: ", information[0].info, " Title: ", information[1].info);
            
            this.managerSetupTracker();
        })
};

Tracker.prototype.managerSetupTracker = function () {
    inquirer.prompt ([
        {
            type: 'input',
            name: 'id',
            message: information[2].info,
            validate: userInfo => {
                if (userInfo) {
                    return true;
                } else {
                    console.log('Please provide a response!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: information[3].info,
            validate: userInfo => {
                if (userInfo) {
                    return true;
                } else {
                    console.log('Please provide a response!');
                    return false;
                }
            }
        },
        {
            type: 'list',
            name: 'officenum',
            message: information[4].info,
            choices: [ '01', '02', '03', '04', '05'],
            validate: userInfo => {
                if (userInfo) {
                    return true;
                } else {
                    console.log('Please provide a response!');
                    return false;
                }
            }
        }
    ])
    .then((responses) => {
        information[2].info = responses.id;
        information[3].info = responses.email;
        information[4].info = responses.officenum;
        this.manager = new Manager(information[0].info, information[2].info, information[3].info, information[4].info);
        this.employee.push(this.manager);
        this.employeeSetupTracker();
    })
};

Tracker.prototype.employeeSetupTracker = function() {
    inquirer.prompt ([
        {
            type: 'list',
            name: 'role',
            message: 'What role would you like to add?',
            choices: ['Engineer', 'Intern', 'Finish building the team'],
            validate: userInfo => {
                if (userInfo) {
                    return true;
                } else {
                    console.log('Please provide a response!');
                    return false;
                }
            }
        }
    ])
    .then((response) => {
        if (response.role === 'Engineer') {
            this.engineerSetupTracker();
        } else if (response.role === 'Intern') {
            this.internSetupTracker();
        } else if (response.role === 'Finish building the team') {
            console.log(responses);
            writeFile(generateEmployees(this.employee));
        }
    })
    .catch((error) => {
        if (error.isTtyError) {
            console.log("Prompt couldn't be rendered in the current environment");
        } else {
            console.log("Something else went wrong");
        }
    });
};

Tracker.prototype.engineerSetupTracker = function () {
    inquirer.prompt([
        {
            type: 'text',
            name: 'name',
            message: 'What is the Engineers name?',
            validate: userInfo => {
                if (userInfo) {
                    return true;
                } else {
                    console.log('Please provide a response!');
                    return false;
                }
            }
        },
        {
            type: 'text',
            name: 'id',
            message: 'Enter employee ID:',
            validate: userInfo => {
                if (userInfo) {
                    return true;
                } else {
                    console.log('Please provide a response!');
                    return false;
                }
            }
        },
        {
            type: 'text',
            name: 'email',
            message: 'Enter employee email:',
            validate: userInfo => {
                if (userInfo) {
                    return true;
                } else {
                    console.log('Please provide a response!');
                    return false;
                }
            }
        },
        {
            type: 'text',
            name: 'github',
            message: 'Enter employee GitHub username:',
            validate: userInfo => {
                if (userInfo) {
                    return true;
                } else {
                    console.log('Please provide a response!');
                    return false;
                }
            }
        }
    ])
    .then((response) => {
        this.engineer = new Engineer(response.name, response.id, response.email, response.github);
        this.employee.push(this.engineer);
        console.log(this.employee);
        this.employeeSetupTracker();
    })
}

Tracker.prototype.internSetupTracker = function () {
    inquirer.prompt([
        {
            type: 'text',
            name: 'name',
            message: 'What is the Interns name?',
            validate: userInfo => {
                if (userInfo) {
                    return true;
                } else {
                    console.log('Please provide a response!');
                    return false;
                }
            }
        },
        {
            type: 'text',
            name: 'id',
            message: 'Enter employee ID:',
            validate: userInfo => {
                if (userInfo) {
                    return true;
                } else {
                    console.log('Please provide a response!');
                    return false;
                }
            }
        },
        {
            type: 'text',
            name: 'email',
            message: 'Enter employee email:',
            validate: userInfo => {
                if (userInfo) {
                    return true;
                } else {
                    console.log('Please provide a response!');
                    return false;
                }
            }
        },
        {
            type: 'text',
            name: 'school',
            message: 'What school does the intern currently attend?',
            validate: userInfo => {
                if (userInfo) {
                    return true;
                } else {
                    console.log('Please provide a response!');
                    return false;
                }
            }
        }
    ])
    .then((response) => {
        this.intern = new Intern(response.name, response.id, response.email, response.school);
        this.employee.push(this.intern);
        console.log(this.employee);
        this.employeeSetupTracker();
    })
}

module.exports = Tracker;