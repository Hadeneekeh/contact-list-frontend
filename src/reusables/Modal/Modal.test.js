import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import Modal from './';

describe('Modal component', () => {
  it('renders with the right content', () => {
    const handleClose = jest.fn();
    const handleSubmit = jest.fn();
    
    render(
      <Modal title="Modal Title" onClose={handleClose} onSubmit={handleSubmit} submitTxt="Send">
        Modal content
      </Modal>
    );

    const modal = screen.getByRole('modal');
    const modalTitle = screen.getByText('Modal Title');
    const modalContent = screen.getByText('Modal content');

    expect(modal).toBeInTheDocument();
    expect(modal).toContainElement(modalTitle);
    expect(modalContent).toHaveTextContent('Modal content');
  });
});
