export default class Messenger {
  person: string;

  constructor(person: string) {
    this.person = person;
  }

  sayHello() {
    return `Hello, my name is ${this.person}`;
  }
}