function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.emails = [];
}

Person.prototype.addEmail = function (address, type) {
    this.emails.push(new Email(address,type));
}
       

function Email(address, type) {
    this.address = address;
        if 
        (type.toLowerCase() === "home") {
            this.type = type;
        }
            else if(this.type.toLowerCase() === "work") {
                this.type = type;
            }
                else {
                    this.type = "other";
            }
        }
    var me = new Person("Bryan", "LeBlanc");
    me.addEmail("Bryan@bryan.com", "home");
    
    console.log(me);