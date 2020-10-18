import axios from 'axios';

export const viewAllContacts = async () => {
    const { data } = await axios.get(`/api/contacts`);
    return data.data;
}

export const viewContact = async id => {
    const { data } = await axios.get(`/api/contacts/${id}`);
    return data.data;
}

export const createContact = async contactData => {
    const { data } = await axios.post(`/api/contacts`, contactData);
    return data.data;
}

export const updateContact = async contactData => {
    const { data } = await axios.put(`/api/contacts/${contactData._id}`, contactData);
    return data.data;
}

export const deletedContact = async id => {
    const { data } = await axios.delete(`/api/contacts/${id}`);
    return data.data;
}