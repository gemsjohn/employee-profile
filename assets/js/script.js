const first = "John";
const title = "Manager";
const id = "0";
const email = "email@email.com";
const officeNum = "0";


function addCode() {
    document.getElementById("employee-cards").innerHTML += 
      `<div class="card" style="width: 18rem;">
        <div class="card-body">
            <h5 class="primaryDetails">${first}</h5>
            <p class="primaryDetails">${title}</p>
        </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item"><b>ID: </b>${id}</li>
            <li class="list-group-item"><b>Email: </b>${email}</li>
            <li class="list-group-item"><b>Office Number: </b>${officeNum}</li>
        </ul>
      </div>`
}
