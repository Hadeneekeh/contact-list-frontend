import '@testing-library/jest-dom/extend-expect';
import { fireEvent, render, screen } from '@testing-library/react';
import TextInput from './';

describe('TextInput component', () => {
  it('renders with the right content', () => {
    const handleChange = jest.fn();

    render(<TextInput label="Name" name="name" value="Kafi" handleChange={handleChange} />);

    const input = screen.getByRole('textbox');

    fireEvent.change(input, { target: { value: 'Kafi' } });
    expect(input.value).toBe('Kafi');
  });

  it('renders error accordingly', () => {
    const handleChange = jest.fn();

    render(
      <TextInput
        label="Name"
        name="name"
        value="Kafi"
        handleChange={handleChange}
        errorText="This is required"
      />
    );

    const input = screen.getByRole('textbox');
    const errorMessage = screen.getByText('This is required');

    fireEvent.change(input, { target: { value: '' } });
    expect(errorMessage).toBeInTheDocument();
  });
});
