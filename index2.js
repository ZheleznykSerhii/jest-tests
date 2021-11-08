/* Даны натуральные числа n, A1 ... An. Определить количество членов Ак последовательности А1, ... Аn
Я мав робити лише Г, але лише Г ніколи не буде виконуватись, тому роблю А, Б, Г. 

A) Являющихся нечетными числами
Б) Кратных 3 и не кратных 5
Г) Удовлетворяющих условию Ak < (Ak-1 + Ak+1)/2
*/

let AnArr = (n) => {
  // Отримуємо масив натуральних чисел від 1 до вказаного n
  let arr = []
  for (let i = 1; i <= n; i++) {
    arr.push(i)

    // Дія А, отримую лише непарні.
    arr = arr.filter((number) => !Number.isInteger(number / 2))
    // Дія Б, з непарних отримую спочатку лише ті, що діляться на 3, а потім ті з них, які ще й не діляться на 5.
    arr = arr.filter((number) => Number.isInteger(number / 3))
    arr = arr.filter((number) => !Number.isInteger(number / 5))
    // Дія Г, перевіряю Ak < (Ak-1 + Ak+1)/2 і заношу у фінальний масив.
  }
  let finalArr = []
  for (let i = 1; i < arr.length; i++) {
    if ((arr[i - 1] + arr[i + 1]) / 2 < arr[i]) {
      finalArr.push(arr[i])
    }
  }
  console.log(arr)
  console.log(finalArr)

  if (!Number.isInteger(n) || n < 0) {
    return console.log('Не натуральное число')
  } else {
    return finalArr.length
  }
}

console.log(`фінальна відповідь ${AnArr(100)}`)

module.exports = AnArr
