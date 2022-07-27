const Employee = require("./lib/Employee");
// const Engineer = require("./lib/engineer");
// const Intern = require("./lib/intern");
const Manager = require("./lib/manager");
const fs = require("fs")
const generateHTML = require('./src/generateHTML')
const inquirer = require("inquirer");

teamMembers = [];

function init() {

    function createManager() {
      inquirer
        .prompt ([
          {            
              type: "input",
              message: "Hello Manager! What is your name?",
              name: "managerName"
          },
          {            
            type: "input",
            message: "please input your employee ID..",
            name: "managerID"
          },
          {            
            type: "input",
            message: "please input your email..",
            name: "managerEmail"
          },
          {            
            type: "input",
            message: "please input your office number..",
            name: "managerOfficeNumb"
          }
        ])
        .then(({managerName, managerID, managerEmail, managerOfficeNumb}) => {
          const manager = new Manager(managerName, managerID, managerEmail, managerOfficeNumb);
          console.log(manager);
        teamMembers.push(manager);
          console.log(teamMembers);

      // createTeam();
    })
    }
  
    // function createTeam() {
    //   // use inquirer
    //   // and prompt to ask questions - such as what type of employee they would like to add
  
    //   // then, based on their choice, run the function associated with adding that employee type
    //   .then((choice) => {
    //   // conditional that runs function for employee type that the user selected
    //   // if they choose Intern, run addIntern function
    //   // if they no longer want to add members, you'll need to run the function that actually builds the team (creates the file, etc)
    // })
    // }
  
    // // function for ADDING A MEMBER /////////////////
    // // a seperate function for each member type
    // function addIntern() {
    //   // use inquirer
    //   // and prompt to ask questions
    //   // take the answers, create a new instance of Intern, and add those answers to that new Intern
    //   // push this new member into you team array
    // }
  
    // // function for BUIDING THE TEAM //////////////////
    // function buildTeam() {
    //   // creating the file, adding your team to it
    //   // probably call a function, passing in your team members array - send it to another js file 
    // }
  
    // // last thing you'll want to do inside of this initializing function is call your function for creating a manager, so that it's the first question the user is asked
  
    createManager();
  }

  init();