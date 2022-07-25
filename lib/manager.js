const Employee = require("./Employee");

class Manager extends Employee {
    constructor(officeNumber){
        super(empName, id, email)
        this.officeNumber = officeNumber;
    }
    getRole() {
        return "manager";
    }
}





module.exports = Manager;
