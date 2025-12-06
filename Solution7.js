// Task 7
// Реализуйте и экспортируйте по умолчанию функцию, которая меняет в строке
// регистр каждой буквы на противоположный. Функция должна возвращать полученный результат
// Примеры:
// invertCase('Hello, World!') // hELLO, wORLD!
// invertCase('I loVe JS') // i LOvE js

const invertCase = (str) => {
    let newStr = ''
    for (let i = 0; i < str.length; i++) {
        if (str[i] === str[i].toUpperCase()) {
            newStr = newStr + str[i].toLowerCase()
        }
        else {
            newStr = newStr + str[i].toUpperCase()
        }
    }
    return newStr
}
console.log(invertCase('I loVe JS'))