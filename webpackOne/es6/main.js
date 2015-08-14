// Modules
import Person from './Person.js';
import { zip, map } from 'lodash';

// Class
var myperson = new Person('Jhon Doe');
var body = document.getElementById('main');
var oneToThree = [1, 2, 3];

// Template strings
body.textContent = `New Person: ${myperson.get()}`;

console.log(zip(oneToThree, ['a', 'b', 'c']));
console.log(map(oneToThree, function(n) { return n * 3; } ));