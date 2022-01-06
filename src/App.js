import React, { useState } from 'react';
import { Button, Modal } from 'reusables';

const App = () => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <h1>Hello</h1>
      <Button label="Submit" handleClick={() => setOpen(true)} />
      <Button label="Submit" handleClick={() => console.log('click')} color="secondary" />
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
