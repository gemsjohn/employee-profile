const inquirer = require('inquirer');
const Employee = require('./Employee');

const information = [
    {info: "Enter employee name:"},
    {info: "Enter employee title:"},
    {info: "Enter employee ID:"},
    {info: "Enter employee email:"},
    {info: "Enter employee office number:"}
];

function Tracker() {
    this.employeeCount = 0;
    this.employeeCountTracker = 0;
    this.isNewEmployee = false;
    this.employee = []
    this.currentEmployee;
}

Tracker.prototype.initializeTracker = function() {
    this.currentEmployee = this.employee[0];

    inquirer
        .prompt({
            type: 'text',
            name: 'count',
            message: 'How many employees do you have?'
        })
        .then(({ count }) => {
            this.employeeCount = count;
            console.log("Employee Count:", this.employeeCount);
            
            this.startEmployeeTracker();
        });
};

Tracker.prototype.startEmployeeTracker = function() {
        inquirer.prompt ([
    
            {
                type: 'input',
                name: 'name',
                message: information[0].info,
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
                name: 'title',
                message: information[1].info,
                choices: ['Employee', 'Engineer', 'Intern', 'Manager'],
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
            },
        ])
        .then((responses) => {
            this.employee.push (responses);
            console.log(this.employee);
            this.employeeCountTracker++;
            console.log("Employee count tracker: ", this.employeeCountTracker);
            console.log("Employee count:", this.employeeCount);
            if (this.employeeCountTracker < this.employeeCount) {
                this.startEmployeeTracker();
            }
            // console.log(responses);
            // writeFile(generateEmployees(responses));
        })
        .catch((error) => {
            if(error.isTtyError) {
                console.log("Prompt couldn't be rendered int he current environment.");
            } else {
                console.log("Something else went wrong.");
            }
        });
    
};

module.exports = Tracker;