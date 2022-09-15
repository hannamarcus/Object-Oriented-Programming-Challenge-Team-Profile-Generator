//Requirements
const inquirer = require("inquirer");
const Employee = require("./lib/Employee");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
const generateHTML = require("./src/template");
const util = require("util");
const fs = require("fs");
const teamArr = [];
//const createFileSync = util.promisify(fs.appendFile);
//const appendFileSync = util.promisify(fs.createFile);

function newTeam() {
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


const buildTeam = () => {
if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR)
}
fs.writeFileSync(outputPath, generateSite(teamArr), "utf-8");
}

newTeam();