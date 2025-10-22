// Task 4

// Напишите функцию makeItFunny(), которая принимает на вход строку
//  и возвращает её копию, у которой каждый n-ный элемент переведен
//  в верхний регистр. n – задается на входе в функцию.

makeItFunny = (text,number) => {
  let str = ""
  let i = 0
  while(i < text.length) {
    const current = text[i]
    if ((i + 1) % number === 0){
      str = str + current.toUpperCase()
    }
    else {
      str = str + current
    }
    i++
  }
  return str
}

console.log(makeItFunny('I never look back', 6))