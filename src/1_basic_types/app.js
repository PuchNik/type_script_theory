// Variables
const a = 20;
// Functions
// function sum(a: number, b: number): number {
//     return a + b
// }
//
// console.log(sum(23, 40))
const sum = (a, b) => {
    return a + b;
};
console.log(sum(23, 40));
// Objects (base option)
// ! Необязательный параметр помечается "?", пример - "street"
const person = {
    name: 'Nik',
    age: 23,
    surname: 'Puchkov',
    address: { city: 'Moscow' },
};
const printInfoPerson = (obj) => {
    return `My name is ${obj.name}, I am ${obj.age} years old. A live in ${obj.address.city}`;
};
console.log(printInfoPerson(person));
// Arrays
const names = ['Nik', 'Anny', 'Vlad'];
names.push('Irina');
console.log(names);
const result = names
    .filter(n => n !== 'Vlad')
    .map(n => n.length)
    .reduce((acc, cur) => (acc + cur), 0);
console.log(result);
// Tuples(кортежи) - массивы с фиксированными типами данных
const tuple1 = ['car', 12];
console.log(tuple1);
const tuple2 = ['apple', true, 1, 2, 3, 4, 5];
console.log(tuple2);
