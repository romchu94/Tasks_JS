// Task 10
// Реализуйте и экспортируйте по умолчанию функцию, которая переворачивает цифры
// в переданном числе и возвращает новое число.
// Примеры:
// reverseInt(13) // 31
// reverseInt(-123) // -321
// reverseInt(8900) // 98

const reverseNumber = (num) => {
    const sign = Math.sign(num)
    let newNum = ''
    let str = num.toString()
    for (let i = 0; i < str.length; i++) {
        newNum = str[i] + newNum
    }
    return parseInt(newNum.replace(/^0+/, "")) * sign;

}

console.log(reverseNumber(321))
