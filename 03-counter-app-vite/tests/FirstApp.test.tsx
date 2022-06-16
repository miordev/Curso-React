import { render } from '@testing-library/react';
import { FirstApp } from '../src/FirstApp';

describe('Tests in <FirstApp />', () => {
  test('should do match with the snapshot', () => {
    const title = 'Hello, I am Goku';
    render(<FirstApp title={title} />);
  });
});
