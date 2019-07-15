"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Messenger {
    constructor(person) {
        this.person = person;
    }
    sayHello() {
        return `Hello, my name is ${this.person}`;
    }
}
exports.default = Messenger;
