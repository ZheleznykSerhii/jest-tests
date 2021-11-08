const AnArr = require('./index2')

describe('Given natural numbers n, A1 ... An. Determine the number to enter A1, ... An. requirements - A) being odd numbers, B) Multiples of 3 and not multiples of 5, Satisfying the condition Ak <(Ak-1 + Ak + 1) / 2', () => {
  test('should be defined', () => {
    expect(AnArr).toBeDefined()
  })
  test('should return not the values (21, 51, 81), but the number of arr items', () => {
    expect(AnArr(100)).toBe(3)
  })
  test('should return 1, because only for 21 works Ak <(Ak-1 + Ak + 1) / 2', () => {
    expect(AnArr(30)).toBe(1)
  })
  test('should return underfined, because the numbers has to be natural', () => {
    expect(AnArr(-2)).toBeFalsy()
    expect(AnArr(100.1)).toBeFalsy()
  })
})
