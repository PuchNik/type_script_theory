// Union(Объединения типов)
const compute = (p1, p2) => {
    if (typeof p1 === 'number' && typeof p2 === 'number') {
        return p1 + p2;
    }
    else {
        return p1.toString() + ' ' + p2.toString();
    }
};
console.log(compute(5, 4));
function logError(err) {
    if (Array.isArray(err)) {
        return err.reduce((acc, cur) => acc += ' ' + cur, '');
    }
    else {
        console.log(err);
    }
}
function convert(data, type) {
    if (type === 'text') {
        return JSON.stringify(data);
    }
    else if (type === 'json') {
        return { ...data };
    }
}
console.log(convert({ a: 1 }, 'text'));
console.log(convert({ a: 1 }, 'json'));
const person = {
    name: 'Nik',
    age: 23,
    hobbies: ['IS', 'JS', 'BD'],
    city: 'Moscow',
    street: 'Lenina',
    date: new Date()
};
// Первая запись более безопасна, так как TypeScript проверяет соответствие типов.
const userMap = {
    1: person,
    2: person,
    3: person,
};
// Вторая запись менее безопасна, так как вы берете на себя ответственность за соответствие типов,
// и TypeScript не будет проверять это.
// const userMap: = {
//     1: person,
//     2: person,
//     3: person,
// } as UserMap
// Unknown - более строгая подразновидность Any
let a = 42;
let b = a === 10; // == === || && ? !
console.log(b);
// let c = a + 10 // error
// Если использовать any, то все будет без ошибок
if (typeof a === 'number') {
    let c = a + 10;
}
// Never - используется для функций, которые никогда не закончатся
function loop() {
    while (true) { }
}
// Type Guard
