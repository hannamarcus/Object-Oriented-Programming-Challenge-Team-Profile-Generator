// Engineer takes from Employee class (parent)
const engineer = require('./Employee');
const employee = require('./Employee');


/*Extend employee class and call parent constructor using super
class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);
*/

class Engineer {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email; 
        this.github = github;      
    }

    returnName(){
        return this.name;
    }

    returnId(){
        return this.id;
    }

    returnEmail(){
        return this.email;
    }
    
    returnGithub() {
        return this.github;
    }

    returnRole() {
        return "Engineer";
    }
}

//Export engineer information
module.exports = Engineer;