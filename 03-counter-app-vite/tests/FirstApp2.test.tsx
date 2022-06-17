import { render, screen } from '@testing-library/react';
import { FirstApp } from '../src/FirstApp';

describe('Tests in <FirstApp />', () => {
  const title = 'I am Miguel';
  const subtitle = 'This is a subtitle';

  test('should do match with the snapshot', () => {
    const { container } = render(<FirstApp title={title} />);
    expect(container).toMatchSnapshot();
  });

  test('should show the title', () => {
    render(<FirstApp title={title} />);
    expect(screen.getByTestId('test-title').innerHTML).toBe(title);
  });

  test('should show the title in h1', () => {
    render(<FirstApp title={title} />);
    expect(screen.getByRole('heading', { level: 1 })).toBeTruthy();
  });

  test('should show the subtitle', () => {
    render(<FirstApp title={title} subtitle={subtitle} />);
    expect(screen.getAllByText(subtitle).length).toBe(2);
  });
});
