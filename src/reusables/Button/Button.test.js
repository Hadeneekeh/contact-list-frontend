import '@testing-library/jest-dom/extend-expect';
import { render, fireEvent, screen, cleanup } from '@testing-library/react';
import Button from './';

describe('Button component', () => {
  afterEach(cleanup);
  it('renders with the right label', () => {
    render(<Button label="Click" />);

    const button = screen.getByText('Click');

    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent('Click');
  });

  it('calls the onClick handler when clicked', () => {
    const handleClick = jest.fn();

    render(<Button label="Click" handleClick={handleClick} />);

    const button = screen.getByText('Click');
    fireEvent.click(button);

    expect(handleClick).toHaveBeenCalled();
    expect(handleClick).toBeCalledTimes(1);
  });
});
