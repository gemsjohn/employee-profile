const fs = require('fs');

// const first = "John";
// const title = "Manager";
// const id = "0";
// const email = "email@email.com";
// const officeNum = "0";

const generateEmployees = data => {
    if (!data) {
        return '';
    }
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
    <main>
        <div class="card" style="width: 18rem;">
            <div class="card-body">
                <h5 class="primaryDetails">${data.arr_0}</h5>
                <p class="primaryDetails">${data.arr_1}</p>
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item"><b>ID: </b>${data.arr_2}</li>
                <li class="list-group-item"><b>Email: </b>${data.arr_3}</li>
                <li class="list-group-item"><b>Office Number: </b>${data.arr_4}</li>
            </ul>
      </div>
        
    </main>
    <footer></footer>
    
        
    </body>
    <script src="./assets/js/script.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
    </html>  
    `;
}

module.exports = { generateEmployees };
