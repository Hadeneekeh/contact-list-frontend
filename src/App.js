import ContactList from 'pages/ContactList';
import React from 'react';
import { Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<ContactList />} />
    </Routes>
  );
};

export default App;
