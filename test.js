// export {}
var Student = /** @class */ (function () {
    function Student(firstName, middleInitial, lastName) {
        this.firstName = firstName;
        this.middleInitial = middleInitial;
        this.lastName = lastName;
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
    return Student;
}());
function greeter(person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}
var user = new Student("Jane", "M.", "User");
var Warrior = /** @class */ (function () {
    function Warrior(firstName, middleInitial, lastName) {
        this.firstName = firstName;
        this.middleInitial = middleInitial;
        this.lastName = lastName;
        this.weapon = 'Sword';
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
    return Warrior;
}());
function heroStats(hero) {
    return hero.firstName + " " + hero.middleInitial + " " + hero.lastName + " | Weapon: " + hero.weapon;
}
var warrior = new Warrior("Joe", "F.", "You");
document.body.textContent = greeter(user) + '\n\n\n' + heroStats(warrior);
