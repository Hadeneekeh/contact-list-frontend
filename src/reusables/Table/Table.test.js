import '@testing-library/jest-dom/extend-expect';
import { fireEvent, render, screen } from '@testing-library/react';
import Table from './';

describe('Table component', () => {
  it('renders with the right content', () => {
    render(
      <Table
        columns={['Name', 'Email']}
        dataSource={[['Kafilat Abdulwahab', 'kafi@mail.com']]}
        page={1}
        totalPages={3}
        tableType='list'
      />
    );

    const table = screen.getByRole('table');
    expect(table).toBeInTheDocument();
  });
});
