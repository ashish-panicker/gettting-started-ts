import { printArray } from './printArray.js';
import Course from './course.js';
import sum from './oper.js';
import Box from './box.js';
let user = 'Ashish';
let age = 30;
let isMentor = true;
let email = 'ashish.s.panicker@gmail.com';
let address = 'Thiruvanathapuram';
let x = 10;
x = '10';
let fruits = ['Apple', 'Orange', 'Pineapple'];
let numbers = [1, 2, 3, 4, 5];
printArray(fruits);
printArray(numbers);
var Gender;
(function (Gender) {
    Gender[Gender["MALE"] = 0] = "MALE";
    Gender[Gender["FEMALE"] = 1] = "FEMALE";
})(Gender || (Gender = {}));
let employee = {
    id: 1,
    email: 'john.doe',
    address: {
        street: 'Street 1',
        city: 'city',
        state: 'state'
    },
    gender: Gender.MALE,
    prevDesignations: [],
    designation: 'Manager'
};
let course = new Course('JS', ['Variables', 'Functions']);
console.log(sum(1, 2, 3));
console.log(sum(1, 2, 3, 4, 5));
let strbox = new Box('welcome');
let numbox = new Box(10);
//# sourceMappingURL=index.js.map