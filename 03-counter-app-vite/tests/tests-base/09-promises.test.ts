import { getHeroByIdAsync } from '../../src/tests-base/09-promises';

describe('Tests in 09-promises', () => {
  test('getHeroByIdAsync should return a hero if the id exists', (done) => {
    const heroId = 1
    getHeroByIdAsync(heroId)
      .then(hero => {
        expect(hero).toEqual({ id: 1, name: 'Batman', owner: 'DC' })
        done()
      });
  });

  test('getHeroByIdAsync should return undefined if the id does not exist', (done) => {
    const heroId = 100
    getHeroByIdAsync(heroId)
      .catch(error => {
        expect(error).toBe(`The hero with id: ${heroId} does not exist`)
        done()
      });
  });
})