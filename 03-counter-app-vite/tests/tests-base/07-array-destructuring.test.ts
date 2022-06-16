import { getArray } from '../../src/tests-base/07-array-destructuring';

describe('Test in 07-array-destructuring', () => {
  test('getArray should return a string and a number', () => {
    const [letters, numbers] = getArray()
    expect(letters).toEqual(expect.any(String))
    expect(numbers).toEqual(expect.any(Number))
  })
})