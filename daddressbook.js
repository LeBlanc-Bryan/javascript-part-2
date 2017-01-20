function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.emails = [];
}

function Email(address, type) {
    this.address = address;
    if(type == "home") {
        this.type = "home";
    }
    else if(type == "work") {
        this.type = "work";   
    }
    else {
        this.type = "other";
    }
}

Person.prototype.addEmail = function(address, type) {
    this.emails.push(new Email(address, type));
}
var Bryan = new Person("Bryan", "LeBlanc");
Bryan.addEmail("bryan@bryan.com", "home");
Bryan.addEmail('leblanc@leblanc.com', 'work');
Bryan.addEmail("bryan@leblanc.com", "chibougamou");
console.log(Bryan);