const Employee = require("./Employee");

class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email)
        this.school = school;
    }
}


getSchool()

// overridden to return 'Intern'
getRole()




module.exports = Intern;