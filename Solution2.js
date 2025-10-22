// Task 2

// Реализуйте функцию mySubstr(), которая извлекает из строки подстроку указанной длины.
//  Она принимает на вход два аргумента (строку и длину)
//  и возвращает подстроку, начиная с первого символа:

mySubstr = (text, len) => {
  let str = ""
  let i = 0
  while (i < len) {
    str = `${str}${text[i]}`
    i += 1
  }
  return str
}

console.log(mySubstr('If I look back I am lost', 7))