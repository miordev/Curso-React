import { render, screen } from '@testing-library/react';
import { GifItem } from '../../src/components/GifItem';

describe('Tests in <GifItem/>', () => {
  const mockTitle = 'Goku';
  const mockUrl = 'https://goku.jpg/';

  test('should do a match with the snapshot', () => {
    const { container } = render(<GifItem title={mockTitle} url={mockUrl} />);
    expect(container).toMatchSnapshot();
  });

  test('should show the title', () => {
    render(<GifItem title={mockTitle} url={mockUrl} />);
    expect(screen.getByTestId('test-title').innerHTML).toBe(mockTitle);
  });

  test('should show the image', () => {
    render(<GifItem title={mockTitle} url={mockUrl} />);
    const { src, alt } = screen.getByRole('img') as HTMLImageElement;
    expect(src).toBe(mockUrl);
    expect(alt).toBe(mockTitle);
  });
});
