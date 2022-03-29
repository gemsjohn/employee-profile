const fs = require('fs');
const Manager = require('./Manager');

const employeeArr = [];

const generateEmployees = data => {
    if (!data) {
        return '';
    }

    for (let i = 0; i < data.length; i++) {
        // if class = Engineer then, if class = Intern then, etc
        if (data[i].title == 'Manager') {
            employeeArr[i] = `
                <div class="card" style="width: 18rem;">
                    <div class="card-body">
                        <h5 class="primaryDetails">${data[i].name}</h5>
                        <p class="primaryDetails">${data[i].title}</p>
                    </div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item"><b>ID: </b>${data[i].id}</li>
                        <li class="list-group-item"><b>Email: </b>${data[i].email}</li>
                        <li class="list-group-item"><b>Office Number: </b>${data[i].officeNum}</li>
                    </ul>
                </div>
            `
        } else if (data[i].title == 'Engineer') {
            employeeArr[i] = `
                <div class="card" style="width: 18rem;">
                    <div class="card-body">
                        <h5 class="primaryDetails">${data[i].name}</h5>
                        <p class="primaryDetails">${data[i].title}</p>
                    </div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item"><b>ID: </b>${data[i].id}</li>
                        <li class="list-group-item"><b>Email: </b>${data[i].email}</li>
                        <li class="list-group-item"><b>Github: </b>${data[i].github}</li>
                    </ul>
                </div>
            `
        } else if (data[i].title == 'Intern') {
            employeeArr[i] = `
                <div class="card" style="width: 18rem;">
                    <div class="card-body">
                        <h5 class="primaryDetails">${data[i].name}</h5>
                        <p class="primaryDetails">${data[i].title}</p>
                    </div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item"><b>ID: </b>${data[i].id}</li>
                        <li class="list-group-item"><b>Email: </b>${data[i].email}</li>
                        <li class="list-group-item"><b>School: </b>${data[i].school}</li>
                    </ul>
                </div>
            `
        }
        
    }
    // <a href="https://github.com/${data.arr_7}">${data.arr_7}</a>
    

    // console.log(data);

    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
        <link rel="stylesheet" href="./assets/css/style.css" />
        <title>Employee Profile</title>
    </head>
    <body>
    <header>
        <h1>Team Profile Generator</h1>
    </header>
    <main id="employee-cards">
        ${employeeArr}
    </main>
    <footer></footer>
    </body>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
    </html>  
    `;
}

module.exports = { generateEmployees };

        
        
