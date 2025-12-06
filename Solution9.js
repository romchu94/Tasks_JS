// Task 9
// Реализуйте функцию fib() и экспортируйте её по умолчанию. Функция вычисляет положительные числа Фибоначчи.
// Аргументом является порядковый номер числа, нумерация чисел в последовательности начинается с нуля.

const fib = (num) => {
    if (num === 0) {
        return 0;
    }
    if (num === 1) {
        return 1;
    }
    let first = 0;
    let second = 1;
    let result = first + second

    for (let i = 2; i <= num; i++) {
        result = first + second;
        first = second;
        second = result;
    }
    return result;
}

console.log(fib(10))