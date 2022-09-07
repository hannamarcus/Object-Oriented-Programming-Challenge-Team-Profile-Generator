//Requirements

const inquirer = require("inquirer");
const util = require('util')
const fs = require("fs");
const Employee = require("./lib/Employee");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
const createHTML = require("./src/template");
const { choices } = require("yargs");

const teamArr = [];
const createFileSync = util.promisify(fs.appendFile);
const appendFileSync = util.promisify(fs.createFile);

function newTeam() {
  inquirer.prompt([ {
      type: 'list',
      message: 'Please select the correct title.',
      name: 'homePage',
      choices: ["Manager", "Engineer", "Intern", "Employee"]
    },

  ]).then(function (choice) {
    switch (choices.homePage) {
      case "Manager":
        addManager();
        break;
      case "Engineer":
        addEngineer();
        break;

      case "Intern":
        addIntern();
        break;

      case "Employee":
        buildHTML();
    }}
  )}


function addManager() {
  inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: "Input manager's name:"
    },

    {
      type: "input",
      name: "id",
      message: "Input manager's ID number:"
    },

    {
      type: "input",
      name: "email",
      message: "Input manager's email:"
    },

    {
      type: "input",
      name: "office",
      message: "Enter manager's office number:"
    }

  ]).then(input => {
    const manager = new Manager(input.name, input.id, input.email, input.office);
    Team.push(manager);
    newTeam();
  }
  )};

function addEngineer() {
  inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: "Input engineer's name:"
    },

    {
      type: "input",
      name: "id",
      message: "Input engineer's ID number:"
    },

    {
      type: "input",
      name: "email",
      message: "Input engineer's email:"
    },

    {
      type: "input",
      name: "github",
      message: "Enter engineer's Github username:"
    }

  ]).then(input => {
    const engineer = new Engineer(input.name, input.id, input.email, input.github);
    Team.push(engineer);
    newTeam();
  }

  )};

function addIntern() {
  inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: "Input intern's name:"
    },

    {
      type: "input",
      name: "id",
      message: "Input intern's ID number:"
    },

    {
      type: "input",
      name: "email",
      message: "Input intern's email:"
    },

    {
      type: "input",
      name: "school",
      message: "Enter intern's school name:"
    }

  ]).then(input => {
    const intern = new Intern(input.name, input.id, input.email, input.school);
    Team.push(intern);
    newTeam();
  }

  )};

function addEmployee() {
    inquirer.prompt([
      {
        type: "input",
        name: "name",
        message: "Input employee's name:"
      },
  
      {
        type: "input",
        name: "id",
        message: "Input employee's ID number:"
      },
  
      {
        type: "input",
        name: "email",
        message: "Input employee's email:"
      },
  
      {
        type: "input",
        name: "school",
        message: "Enter employee's school name:"
      }
  
    ]).then(input => {
      const intern = new Employee (input.name, input.id, input.email, input.school);
      Team.push(intern);
      newTeam();
    }
  
    )};

    newTeam();

function createHTML() {
  fs.createFileSync(distPath, createHTML(Team), 'utf-8')
}