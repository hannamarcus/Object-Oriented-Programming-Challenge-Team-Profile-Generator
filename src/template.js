const generateTeam = (team) => {
  console.log(team);
  const html = [];

//Employee Box
const employeeBox = (employee) => {`
<div class="card" style="width: 18rem; margin: 15px;">
    <div class="card-body bg-primary">
      <h5 class="card-title text-center"> ${employee.returnName()} </h5>
      <h6 class="card-subtitle mb-2 text-white text-center"> ${employee.returnRole()} </h6>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">ID #:${employee.returnId()}</li>
        <li class="list-group-item">Email: <a href="mailto:${employee.returnEmail()}"> ${manager.returnEmail()} </a></li>
      </ul>
    </div>
  </div>
  `
  html.push(employeeHtml);
};

//Engineer Box
const engineerBox = (engineer) => { `
    <div class="card" style="width: 18rem; margin: 15px;">
    <div class="card-body bg-primary">
      <h5 class="card-title text-white text-center"> ${engineer.returnName()} </h5>
      <h6 class="card-subtitle mb-2 text-white text-center"> ${engineer.returnRole()} </h6>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">ID #:${engineer.returnId()}</li>
        <li class="list-group-item">Email:<a href="mailto:${engineer.returnEmail()}">${engineer.returnEmail()}</a></li>
        <li class="list-group-item">GitHub:<a href="https://github.com/${engineer.returnGithub()}">${engineer.returnGithub()}</a></li>
      </ul>
    </div>
  </div>
  `
  html.push(engineerHtml);
}

//Intern Box
const internBox = (intern) => {`
    <div class="card" style="width: 18rem; margin: 15px;">
    <div class="card-body bg-primary">
      <h5 class="card-title text-white text-center">${intern.returnName()} </h5>
      <h6 class="card-subtitle mb-2 text-white text-center">${intern.returnRole()} </h6>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">ID:${intern.returnId()}</li>
        <li class="list-group-item">Email:<a href="mailto:${intern.returnEmail()}">${intern.returnEmail()}</a></li>
        <li class="list-group-item">School:${intern.returnSchool()}</li>
      </ul>
    </div>
  </div>
  `
  html.push(internHtml);
}

//Manager Box
const managerBox = (manager) => {`
<div class="card" style="width: 18rem; margin: 15px;">
    <div class="card-body bg-primary">
      <h5 class="card-title text-center"> ${manager.returnName()} </h5>
      <h6 class="card-subtitle mb-2 text-white text-center"> ${manager.returnRole()} </h6>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">ID #:${manager.returnId()}</li>
        <li class="list-group-item">Email: <a href="mailto:${manager.returnEmail()}"> ${manager.returnEmail()} </a></li>
        <li class="list-group-item">Office Location: ${manager.returnOffice()} </li>
      </ul>
    </div>
  </div>
  `
  html.push(managerHtml);
}

// Loop for all employees
for (let i = 0; i < team.length; i++) {
  if (employee[i].returnRole() === "Employee") {
    employeeBox(team[i]);
}
  if (manager[i].returnRole() === "Manager") {
      managerBox(team[i]);
  }
  if (engineer[i].getRole() === "Engineer") {
      engineerBox(team[i]);
  }
  if (intern[i].getRole() === "Intern") {
      internBox(team[i]);
  }
}

   // Join the HTML blocks
   return html.join('');
  }
  // Export function to generate HTML page
  
  module.exports = team => {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Team Profile</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx" crossorigin="anonymous">
    </head>
    <body>
    <div class="jumbotron bg-secondary">
    <h1 class="display-4 text-center text-white"> The Team </h1>
    <p class="lead text-center text-white">Generated with Inquirer</p>
    <hr class="my-4">
    </div>     
    
    <div class="card-group"> 
    ${generateTeam(team)}    
   
    </div>
    
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-A3rJD856KowSb7dwlZdYEkO39Gagi7vIsF0jrRAoQmDKKtQBHUuLZ9AsSv4jD4Xa" crossorigin="anonymous"></script>    </body>
    
    </body>
    </html>
    `;
};
module.exports = newHTML; 
