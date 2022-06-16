import { getGreet } from '../../src/tests-base/02-template-string';

describe('Test in 02-template-string.ts', () => {
  test('getGreet should return the correct name', () => {
    const name = 'Miguel'
    const message = getGreet(name)
    expect(message).toBe(`Hello ${name}`)
  })
})