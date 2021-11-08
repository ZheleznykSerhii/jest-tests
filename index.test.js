// №109 Дано натуральное число n. Вычислить 1*2 + 2*3*4 + ...+n(n+1)...*2n

const task1 = require('./index1')

describe('Task 1 takes the natural number and has to return 1+2 for the value of number = 1, after that by "n*(n+1)*...*2n" plus all previous values of expression', () => {
  test('should be defined', () => {
    expect(task1).toBeDefined()
  })
  test('sholud return hardcode 2, as showed 1*2', () => {
    expect(task1(1)).toBe(2)
  })
  test('Should expect 26, because according to "n*(n+1)*2n" for 2 is 2*3*4 = 24, sum n1+n2 = 26', () => {
    expect(task1(2)).toBe(26)
  })
  test('Should expect falsy, because 1.5 is not "natural number" ', () => {
    expect(task1(1.5)).toBeFalsy()
  })
  test('Should expect falsy, because -1 is not "natural number" ', () => {
    expect(task1(-1)).toBeFalsy()
  })
  test('Should expect 1*2 + 2*3*4 + 3*4*6 =  98', () => {
    expect(task1(3)).toBe(98)
  })
  test('Should expect 1846 by the same logic as for 3, or 2', () => {
    expect(task1(7)).toBe(1846)
  })
})
