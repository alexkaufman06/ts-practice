import messenger from './createMessage';
import { Settings } from './settings';

class Student {
  fullName: string;
  constructor(public firstName: string, public middleInitial: string, public lastName: string) {
      this.fullName = firstName + " " + middleInitial + " " + lastName;
  }
}

const numbers: number[] = [1,2,3];

interface Person {
  firstName: string;
  lastName: string;
}

function greeter(person: Person): string {
  return "Hello, " + person.firstName + " " + person.lastName;
}

let user = new Student("Jane", "M.", "User");

class Warrior {
  fullName: string;
  weapon: string = 'Sword';
  constructor(public firstName: string, public middleInitial: string, public lastName: string) {
    this.fullName = firstName + " " + middleInitial + " " + lastName;
  }
}

interface Hero {
  firstName: string;
  lastName: string;
  middleInitial: string;
  weapon: string;
}

function heroStats(hero: Hero): string {
  return hero.firstName + " " + hero.middleInitial + " " + hero.lastName + " | Weapon: " + hero.weapon;
}

let warrior = new Warrior("Joe", "F.", "You");

let messages = new messenger(warrior.fullName);

console.log(messages.sayHello() + Settings.goodBye);

// document.body.textContent = greeter(user) + heroStats(warrior) + ' ' + numbers[1] + ' | ' + Settings.goodBye;
