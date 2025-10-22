// Task 3

// Функция countChars() из теории считает, сколько раз входит буква в предложение
//  и при этом учитывает регистр букв. То есть A и a с её точки зрения разные символы.
//  Реализуйте вариант этой же функции, так чтобы регистр букв был не важен:

countChars = (text, char) => {
   let count = 0
   let i = 0
    while(i < text.length) {
        if (text[i] === char.toLowerCase() || text[i] === char.toUpperCase()) {
          count += 1
        }
        i += 1
    }
    return count
}

console.log(countChars('HexlEt', 'E'))