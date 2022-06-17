import { render } from '@testing-library/react';
import { FirstApp } from '../src/FirstApp';

describe('Tests in <FirstApp />', () => {
  test('should do match with the snapshot', () => {
    const title = 'Hello, I am Goku';
    const { container } = render(<FirstApp title={title} />);
    expect(container).toMatchSnapshot();
  });

  test('should show the title', () => {
    const title = 'Hello, I am Goku';
    const { getByText, getByTestId } = render(<FirstApp title={title} />);

    expect(getByText(title)).toBeTruthy();
    expect(getByTestId('test-title').innerHTML).toContain(title);
    // const h1 = container.querySelector('h1');
    // expect(h1?.innerHTML).toContain(title);
  });

  test('should show the subtitle', () => {
    const title = 'Hello, I am Goku';
    const subtitle = 'This is the sub title';
    const { getAllByText } = render(<FirstApp title={title} subtitle={subtitle} />);

    expect(getAllByText(subtitle).length).toBe(2);
  });
});
