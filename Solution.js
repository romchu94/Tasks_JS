// Task 1
//
// Реализуйте функцию joinNumbersFromRange()
// которая объединяет все числа из диапазона
//  в строку и возвращает её


joinNumbersFromRange = (start,finish) => {
  let str = ""
  let i = start
  while (i <= finish) {
    str = `${str}${i}`
    i += 1
  }
  return str
}

console.log(joinNumbersFromRange(5,10))