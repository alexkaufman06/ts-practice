"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const createMessage_1 = require("./createMessage");
const settings_1 = require("./settings");
class Student {
    constructor(firstName, middleInitial, lastName) {
        this.firstName = firstName;
        this.middleInitial = middleInitial;
        this.lastName = lastName;
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
}
const numbers = [1, 2, 3];
function greeter(person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}
let user = new Student("Jane", "M.", "User");
class Warrior {
    constructor(firstName, middleInitial, lastName) {
        this.firstName = firstName;
        this.middleInitial = middleInitial;
        this.lastName = lastName;
        this.weapon = 'Sword';
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
}
function heroStats(hero) {
    return hero.firstName + " " + hero.middleInitial + " " + hero.lastName + " | Weapon: " + hero.weapon;
}
let warrior = new Warrior("Joe", "F.", "You");
let messages = new createMessage_1.default(warrior.fullName);
console.log(messages.sayHello() + settings_1.Settings.goodBye);
// document.body.textContent = greeter(user) + heroStats(warrior) + ' ' + numbers[1] + ' | ' + Settings.goodBye;
