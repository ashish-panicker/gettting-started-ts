import { printArray } from './printArray.js'
import Course from './course.js'

let user: string = 'Ashish'
let age: number = 30
let isMentor: boolean = true
let email = 'ashish.s.panicker@gmail.com'
// email = 10 Possible in JS but now allowed in TS
let address = 'Thiruvanathapuram'

let x: string | number = 10
x = '10'

let fruits: string[] = ['Apple', 'Orange', 'Pineapple']
let numbers: number[] = [1, 2, 3, 4, 5]

/**
 * function is not returning any value hence void return type
 * @param arr string array
 */

printArray(fruits)
printArray(numbers)

enum Gender {
    MALE, FEMALE
}

interface Employee {
    id: number
    email: string
    address: Address,
    gender: Gender
}

interface Employee {
    prevDesignations: string[]
}

type Address = {
    street: string
    city: string
    state: string
}

interface Manager extends Employee {
    designation: string
}

let employee: Manager = {
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
}

let course = new Course('JS', ['Variables', 'Functions'] )
