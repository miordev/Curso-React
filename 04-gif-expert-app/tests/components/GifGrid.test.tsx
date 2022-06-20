import { render, screen } from '@testing-library/react';
import { GifGrid } from '../../src/components/GifGrid';
import { useFetchGifs } from '../../src/hooks/useFetchGifs';

jest.mock('../../src/hooks/useFetchGifs');

describe('Test in <GifGrid/>', () => {
  const mockCategory = 'One Punch';

  test('should show the loading if there is not gifs', () => {
    (useFetchGifs as any).mockReturnValue({
      gifList: [],
      isLoading: true,
    });
    const loadingMessage = '...Loading';

    render(<GifGrid category={mockCategory} />);
    expect(screen.getByText(loadingMessage));
    expect(screen.getByText(mockCategory));
  });

  test('should show the list of image', () => {
    const gifList = [
      {
        id: '1',
        title: 'Saitama',
        url: 'https://localhost/saitama.jpg',
      },
      {
        id: '2',
        title: 'Goku',
        url: 'https://localhost/goku.jpg',
      },
    ];

    (useFetchGifs as any).mockReturnValue({
      gifList,
      isLoading: false,
    });

    render(<GifGrid category={mockCategory} />);
    expect(screen.getAllByRole('img').length).toBe(2);
  });
});
