import { getUser, getActiveUser } from '../../src/tests-base/05-functions';

describe('Tests in 05-functions', () => {
  test('getUser should return an object', () => {
    const testUser = {
      uid: 'ABC123',
      username: 'EL CHOLO',
    }
    const user = getUser()
    expect(user).toEqual(testUser)
  })

  test('getActiveUser should return an object', () => {
    const name = 'Miguel'
    const testUser = {
      uid: 'ABC567',
      username: name,
    }
    const user = getActiveUser(name)
    expect(user).toEqual(testUser)
  })
})