import { usContext } from '../../src/tests-base/06-obj-destructuring';

describe('Test in 06-obj-destructuring', () => {
  test('usContext should return an object', () => {
    const codeName = 'CHOLO'
    const age = 18
    
    const testObject = {
      codeName: codeName,
      age: age,
      coordinates: {
        lat: 14.1232,
        lng: -12.3232,
      },
    };

    const object = usContext(codeName, age)
    expect(object).toEqual(testObject)
  })
})