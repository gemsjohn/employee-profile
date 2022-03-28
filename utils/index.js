const inquirer = require('inquirer');
const { generateEmployees } = require('./generateEmployees.js');
const { writeFile } = require('./generateHtml.js')

const information = [
    {info: "Enter employee name:"},
    {info: "Enter employee title:"},
    {info: "Enter employee ID:"},
    {info: "Enter employee email:"},
    {info: "Enter employee office number:"}
];

const init = arr => {
    if(!arr) {
        arr = [];
    }
    return inquirer.prompt ([
        {
            type: 'input',
            name: 'arr_0',
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
            type: 'input',
            name: 'arr_1',
            message: information[1].info,
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
            name: 'arr_2',
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
            name: 'arr_3',
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
            type: 'input',
            name: 'arr_4',
            message: information[4].info,
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
        writeFile(generateEmployees(responses));
    })
    .catch((error) => {
        if(error.isTtyError) {
            console.log("Prompt couldn't be rendered int he current environment.");
        } else {
            console.log("Something else went wrong.");
        }
    });
}

init();