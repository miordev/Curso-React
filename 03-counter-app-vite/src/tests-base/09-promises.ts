import { getHeroById } from './08-imp-exp';

export const getHeroByIdAsync = (id: number) => {

  return new Promise((resolve, reject) => {
    setTimeout(() =>  {
      const hero = getHeroById(id);
      if (hero) {
        resolve(hero);
      } else {
        reject(`The hero with id: ${id} does not exist`);
      }
    }, 1000)
  });
}