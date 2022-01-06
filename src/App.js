import React, { useState } from 'react';
import { Button, Modal, TextInput } from 'reusables';

const App = () => {
  const [open, setOpen] = useState(false);
  const [fullname, setName] = useState('');

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
        errorText=''
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
    </div>
  );
};

export default App;
