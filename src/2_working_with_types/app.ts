// Union(Объединения типов)
const compute = (p1: string | number, p2: string | number): string | number => {
    if (typeof p1 === 'number' && typeof p2 === 'number') {
        return p1 + p2
    } else {
        return p1.toString() + ' ' + p2.toString()
    }
}

console.log(compute(5, 4))

function logError(err: string | string[]): string | void {
    if (Array.isArray(err)) {
        return err.reduce((acc: string, cur): string => acc += ' ' + cur, '')
    } else {
        console.log(err)
    }
}


// Literal Types(Типы литералов)
// Данный вариант лучше использовать тех типов, которые можно записать в одну строчку
type OutputType = 'text' | 'json'

function convert(data: object, type: OutputType) {
    if (type === 'text') {
        return JSON.stringify(data)
    } else if (type === 'json') {
        return {...data}
    }
}

console.log(convert({a: 1}, 'text',))
console.log(convert({a: 1}, 'json',))


// Interfaces
// Данный вариант лучше использовать для классов и объектов
interface User {
    name: string
    age: number
    hobbies: string[]
}

interface Address {
    city: string
    street: string
}

interface FullUser extends User, Address {
    date: Date
}

const person: FullUser = {
    name: 'Nik',
    age: 23,
    hobbies: ['IS', 'JS', 'BD'],
    city: 'Moscow',
    street: 'Lenina',
    date: new Date()
}

interface UserMap {
    [key: number]: FullUser
    date?: Date
}

// Первая запись более безопасна, так как TypeScript проверяет соответствие типов.
const userMap: UserMap = {
    1: person,
    2: person,
    3: person,
}

// Вторая запись менее безопасна, так как вы берете на себя ответственность за соответствие типов,
// и TypeScript не будет проверять это.
// const userMap: = {
//     1: person,
//     2: person,
//     3: person,
// } as UserMap


// Unknown - более строгая подразновидность Any
let a: unknown = 42
let b = a === 10 // == === || && ? !

console.log(b)

// let c = a + 10 // error
// Если использовать any, то все будет без ошибок
if (typeof a === 'number') {
    let c = a + 10
}


// Never - используется для функций, которые никогда не закончатся
function loop(): never {
    while (true) {}
}


// Type Guard














