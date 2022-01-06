import React from 'react';
import { Button } from 'reusables';

const App = () => {
  return (
    <div>
      <h1>Hello</h1>
      <Button label="Submit" handleClick={() => console.log('click')} />
      <Button label="Submit" handleClick={() => console.log('click')} color="secondary" />
    </div>
  );
};

export default App;
