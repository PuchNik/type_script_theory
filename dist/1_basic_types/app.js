// // Variables
// const a: number = 20
//
// // Functions
// // function sum(a: number, b: number): number {
// //     return a + b
// // }
// //
// // console.log(sum(23, 40))
//
// const sum = (a: number, b: number): number => {
//     return a + b
// }
//
// console.log(sum(23, 40))
//
//
// // Objects (base option)
// // ! Необязательный параметр помечается "?", пример - "street"
// const person: {
//     name: string
//     age: number
//     surname: string
//     address: { city: string; street?: string }
// } = {
//     name: 'Nik',
//     age: 23,
//     surname: 'Puchkov',
//     address: {city: 'Moscow'},
// }
//
// const printInfoPerson = (obj: {
//     name: string
//     address: { city: string }
//     age: number
// }): string => {
//     return `My name is ${obj.name}, I am ${obj.age} years old. A live in ${obj.address.city}`
// }
//
// console.log(printInfoPerson(person))
//
//
// // Arrays
// const names: string[] = ['Nik', 'Anny', 'Vlad']
// names.push('Irina')
// console.log(names)
//
// const result = names
//     .filter(n => n !== 'Vlad')
//     .map(n => n.length)
//     .reduce((acc, cur) => (acc + cur), 0)
//
// console.log(result)
//
//
// // Tuples(кортежи) - массивы с фиксированными типами данных
// const tuple1: [string, number] = ['car', 12]
// console.log(tuple1)
//
// const tuple2: [string, boolean, ...number[]] = ['apple', true, 1, 2, 3, 4, 5]
// console.log(tuple2)
//
//
// // Enums
// enum Roles {
//     admin,
//     user,
// }
//
// const person1 = {
//     role: Roles.admin
// }
//
// const person2 = {
//     role: Roles.user
// }
//
// const check = (person: { role: Roles }) => {
//     if (person.role === Roles.admin) {
//         console.log('Admin')
//     } else {
//         console.log('User')
//     }
// }
//
// check(person1)
// check(person2)
//
//
// // BigInt
// const numBig1: bigint = 123n
// const numBig2: bigint = BigInt(321)
//
// console.log(numBig1)
// console.log(numBig2)
//
//
// // void vs undefined
// // Если функция ничего не возвращает, то это void
// const greet = (message: string): void => {
//     console.log(message)
// }
//
// greet('Hi')
//
// // Если переменная при ее создании не имеет значения, то это void vs undefined
// let temp: undefined
//
//
// // Типизация функций(углубленно)
// const log = (data: any): void => {
//     console.log(data)
// }
//
// const summ = (a: number, b: number, callback: (a:any) => void): number => {
//     const result = a + b
//     callback(result)
//     return result
// }
//
// // Описание интерфейса(тип функции)
// let fn: (n1: number, n2: number, cb: (d: any) => void) => number
//
// // fn = log - error
// fn = summ
//
// console.log(fn(1, 2, log))
