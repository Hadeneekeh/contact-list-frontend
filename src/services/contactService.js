import axios from "axios";

const Api = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL || 'https://ancient-woodland-30424.herokuapp.com/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

const getAllContacts = async () => {
  try {
    const response = await Api.get("contacts");
    return response.data;
  } catch (e) {
    throw new Error(e);
  }
}

const addContact = async (params) => {
  try {
    const response = await Api.post("contacts", params);
    return response.data;
  } catch (e) {
    throw new Error(e);
  }
}

export const contactService = {
  getAllContacts, addContact
};

