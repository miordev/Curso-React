import { getImage } from '../../src/tests-base/11-async-await';
describe('Tests in 11-async-await', () => {
  test('getImage should return an url', async () => {
    const url = await getImage()
    expect(typeof url).toEqual(expect.any(String))
  })
})