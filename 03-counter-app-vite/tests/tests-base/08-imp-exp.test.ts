import heroes from '../../src/data/heroes';
import { getHeroById, getHeroesByOwner } from '../../src/tests-base/08-imp-exp';

describe('Test in 08-imp-exp', () => {
  test('getHeroById should return a hero if the id exists', () => {
    const heroId = 1;
    const hero = getHeroById(heroId);
    expect(hero).toEqual({
      id: 1,
      name: 'Batman',
      owner: 'DC'
    })
  })

  test('getHeroById should return a hero if the id does not exists', () => {
    const heroId = 100;
    const hero = getHeroById(heroId);
    expect(hero).toBeFalsy()
  })

  test('getHeroByOwner should return the heroes by DC', () => {
    const owner = 'DC';
    const heroList = getHeroesByOwner(owner);

    expect(heroList.length).toBe(3)
    expect(heroList).toEqual(heroes.filter((hero) => hero.owner === owner))
  })
  
  test('getHeroByOwner should return the heroes by Marvel', () => {
    const owner = 'Marvel';
    const heroList = getHeroesByOwner(owner);

    expect(heroList.length).toBe(2)
    expect(heroList).toEqual(heroes.filter((hero) => hero.owner === owner))
  })
  
})