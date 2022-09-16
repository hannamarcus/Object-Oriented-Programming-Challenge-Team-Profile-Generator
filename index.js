//Requirements
const inquirer = require("inquirer");
const Employee = require("./lib/Employee");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
const teamHTML = require("./src/template");
const util = require("util");
const fs = require("fs");
const path = require('path');
const generateTeam = require("./src/template");
const dist_dir = path.resolve(__dirname, 'dist');
const distPath = path.join(dist_dir, 'template.html')
//const outputPath = path.join(OUTPUT_DIR, "template.html");

const teamArr = [];

const promptManager = () => {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'managerName',
      message: 'Enter the team managers name',
      validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'managerId',
      message: 'Enter the team managers employee ID',
      validate: idInput => {
        if (idInput) {
          return true;
        } else {
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'managerEmail',
      message: 'Enter the team managers email address',
      validate: emailInput => {
        if (emailInput) {
          return true;
        } else {
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'managerOfficeNumber',
      message: 'Enter the team managers office number',
      validate: officeNumberInput => {
        if (officeNumberInput) {
          return true;
        } else {
          return false;
        }
      }
    },
  ]).then(answers => {
    const manager = new Manager(answers.nameInput, answers.idInput, answers.emailInput, answers.officeNumberInput);
    teamArr.push(manager);
    addToTeam();
  })
};

const addToTeam = () => {
  return inquirer.prompt([
    {
      type: 'list',
      name: 'menu',
      message: 'Please select from the option to add an engineer or an intern or to finish building your team',
      choices: ['add an engineer', 'add an intern', 'finish building my team']
    }])
    .then(userChoice => {
      switch (userChoice.menu) {
        case "add an engineer":
          promptEngineer();
          break;
        case "add an intern":
          promptIntern();
          break;
        default:
          pushHTML();
      }
    });
};

const promptEngineer = () => {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: 'Enter the team engineers name',
      validate: name => {
        if (name) {
          return true;
        } else {
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'engineerId',
      message: 'Enter the engineers ID',
      validate: idInput => {
        if (idInput) {
          return true;
        } else {
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'engineerEmail',
      message: 'Enter the engineers email',
      validate: email => {
        if (email) {
          return true;
        } else {
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'githubUsername',
      message: 'Enter the engineers github username',
      validate: githubUsername => {
        if (githubUsername) {
          return true;
        } else {
          return false;
        }
      }
    }
  ]).then(answers => {
    const engineer = new Engineer(answers.name, answers.idInput, answers.email, answers.githubUsername);
    teamArr.push(engineer);
    addToTeam();
  })
};

const promptIntern = () => {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: 'Enter the interns name',
      validate: name => {
        if (name) {
          return true;
        } else {
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'employeeId',
      message: 'Enter the interns employee ID',
      validate: idInput => {
        if (idInput) {
          return true;
        } else {
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'email',
      message: 'Enter the interns email',
      validate: email => {
        if (email) {
          return true;
        } else {
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'school',
      message: 'Enter the interns school',
      validate: schoolInput => {
        if (schoolInput) {
          return true;
        } else {
          return false;
        }
      }
    }
  ]).then(answers => {
    console.log(answers);
    const intern = new Intern(answers.name, answers.idInput, answers.email, answers.schoolInput);
    teamArr.push(intern);
    addToTeam();
  })
};

function pushHTML() {
  fs.writeFileSync(distPath, generateTeam(teamArr), 'utf-8');
}

promptManager();

// Old code that didn't ask in correct order of readme request (work with tutor to correct)
/*function newTeam() {
  inquirer.prompt([ {
      type: 'list',
      name: 'choice',
      message: 'Please select the correct title.',
      choices: ['Employee', 'Engineer', 'Intern', 'Manager'],
    },

  ]).then(function (response) {
    switch (response.choice) {
      case "Employee":
        addEmployee();
        break;

      case "Engineer":
          addEngineer();
          break;

      case "Intern":
            addIntern();
            break;
    
      case "Manager":
        addManager();
        break;

    }}
  )}

function addManager() {
  inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: "Please input manager's name.:"
    },

    {
      type: "input",
      name: "id",
      message: "Please input manager's ID number:"
    },

    {
      type: "input",
      name: "email",
      message: "Please input manager's email address:"
    },

    {
      type: "input",
      name: "office",
      message: "Please input manager's office location:"
    }

  ]).then(answers => {
    const newManager = new Manager(answers.name, answers.id, answers.email, answers.office);
    teamArr.push(newManager);
    newTeam();
  }
  )};

function addEngineer() {
  inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: "Please input engineer's name:"
    },

    {
      type: "input",
      name: "id",
      message: "Please input engineer's ID number:"
    },

    {
      type: "input",
      name: "email",
      message: "Please input engineer's email address:"
    },

    {
      type: "input",
      name: "github",
      message: "Enter Engineer's Github username:"
    }

  ]).then(answers => {
    const newEngineer = new Engineer(answers.name, answers.id, answers.email, answers.github);
    teamArr.push(newEngineer);
    newTeam();
  }

  )};

function addIntern() {
  inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: "Please input intern's name:"
    },

    {
      type: "input",
      name: "id",
      message: "Please input intern's ID number:"
    },

    {
      type: "input",
      name: "email",
      message: "Please input intern's email address:"
    },

    {
      type: "input",
      name: "school",
      message: "Please input intern's school name:"
    }

  ]).then(answers => {
    const newIntern = new Intern(answers.name, answers.id, answers.email, answers.school);
    teamArr.push(newIntern);
    newTeam();
  }

  )};

function addEmployee() {
    inquirer.prompt([
      {
        type: "input",
        name: "name",
        message: "Please input employee's name:"
      },
  
      {
        type: "input",
        name: "id",
        message: "Please input employee's ID number:"
      },
  
      {
        type: "input",
        name: "email",
        message: "Please input employee's email address:"
      }
  
    ]).then(answers => {
      const newEmployee = new Employee (answers.name, answers.id, answers.email);
      teamArr.push(newEmployee);
      newTeam();
    }
  
    )};

    newTeam();

function buildTeam() {
  fs.writeFileSync(distPath, generateSite(teamArr), 'utf-8')
}

newTeam();
*/