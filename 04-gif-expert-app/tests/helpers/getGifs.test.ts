import { getGifs } from '../../src/helpers/getGifs';

describe('Tests in getGifs', () => {
  test('should return a list of gifs', async () => {
    const gifList = await getGifs('Goku');
    expect(gifList.length).toBeGreaterThan(0);
    expect(gifList[0]).toEqual({
      id: expect.any(String),
      title: expect.any(String),
      url: expect.any(String),
    });
  });
});
