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

const OUTPUT = path.resolve(__dirname, 'dist')
const outputPath = path.join(OUTPUT, 'index.html')

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
    const manager = new Manager(answers.managerName, answers.managerId, answers.managerEmail, answers.managerOfficeNumber);
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
    const engineer = new Engineer(answers.name, answers.engineerId, answers.engineerEmail, answers.githubUsername);
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
    const intern = new Intern(answers.name, answers.employeeId, answers.email, answers.school);
    teamArr.push(intern);
    addToTeam();
  })
};

function pushHTML() {

  if (!fs.existsSync(OUTPUT)) {
      fs.mkdirSync(OUTPUT);
  }

  fs.writeFile(outputPath, generateTeam(teamArr), (error) => {
    if (error) {
        console.log('There was an error: ', error);
    } else {
        console.log('HTML team file created');
    }
});
}


promptManager();
