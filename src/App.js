import React, { useState } from 'react';
import { Button, Modal, Table, TextInput } from 'reusables';

const App = () => {
  const [open, setOpen] = useState(false);
  const [fullname, setName] = useState('');
  const [page, setPage] = useState(1);

  return (
    <div>
      <h1>Hello</h1>
      <Button label="Submit" handleClick={() => setOpen(true)} />
      <Button label="Submit" handleClick={() => console.log('click')} color="secondary" />
      <TextInput
        label="Name"
        name="fullname"
        value={fullname}
        handleChange={(e) => setName(e.target.value)}
        errorText=""
      />
      {open && (
        <Modal
          title="Modal Title"
          onClose={() => setOpen(false)}
          onSubmit={() => console.log('click')}
          submitTxt="Send"
        >
          Modal content
        </Modal>
      )}
      <Table
        columns={['Name', 'Email']}
        dataSource={[['Kafilat Abdulwahab', 'kafi@mail.com']]}
        page={page}
        totalPages={3}
        handleNext={() => setPage(page + 1)}
        handlePrev={page !== 1 ? () => setPage(page - 1) : null}
      />
    </div>
  );
};

export default App;
