function Warrior(name, gender) {
    this.name = name;
    this.gender = gender;
    this.level = 1;
    this.weapon = "wooden sword";
    this.power = ((Math.random() * (99) + 1));
    this.fight = function () {
        console.log(" rushes to the arena with ");
    }
    this.faceoff = function (opponent) {
        if (this.power > opponent.power) {
            console.log(this.name + " wins");
        }
        else if(this.power < opponent.power) {
            console.log(opponent.name + " wins");
        }
        else {
            console.log("Its a tie!");
        }
    }
    
}
var bigDaddy = new Warrior("Big Daddy","M");
var dankeyKang = new Warrior("Dankey Kang","W");
var sheHulk = new Warrior("She Hulk", "W");
var michelleObama = new Warrior("Michelle Obama", "W");

console.log(bigDaddy.faceoff(dankeyKang));

console.log(bigDaddy.faceoff(sheHulk));

console.log(dankeyKang.faceoff(michelleObama));