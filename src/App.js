import ContactDetails from 'pages/ContactDetails';
import ContactList from 'pages/ContactList';
import NotFound from 'pages/NotFound';
import React from 'react';
import { Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <Routes>
      <Route path="contact-list-frontend" element={<ContactList />} />
      <Route path="contact-list-frontend/:contactId" element={<ContactDetails />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default App;
