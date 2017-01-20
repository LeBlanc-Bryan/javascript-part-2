function Warrior(name, gender) {
    this.name = name;
    this.gender = gender;
    this.level = 1;
    this.weapon = "wooden sword";
    this.power = (Math.random() * 100) + 1;
    this.fight = function() {
        console.log(this.name + " rushes to the arena with their " + this.weapon);
    }
    this.faceoff = function(opponent) {
        if(this.power > opponent.power) {
            console.log(this.name + " has defeated " + opponent.name + " with a " + this.weapon);
        }
        else if(this.power < opponent.power) {
            console.log(opponent.name + " has defeated " + this.name + " with a " + opponent.weapon);
        }
        else {
        console.log(this.name + "'s " + this.weapon + " clashes with " + opponent.name + "'s " + opponent.weapon + " , they are evenly matched!");
        }
    }
}

var BrainX = new Warrior("Bryan", "M");
var BobX = new Warrior("Robert", "M");

console.log(BrainX);
console.log(BobX);

console.log(BrainX.faceoff(BobX));