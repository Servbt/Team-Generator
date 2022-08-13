const Employee = require("./Employee")

class  Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email)
        this.github = github;
    }
}

getGithub()

// overridden to return 'Engineer'
getRole()   


module.exports = Engineer;