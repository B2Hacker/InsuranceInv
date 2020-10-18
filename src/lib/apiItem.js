import axios from 'axios';

export const viewAllItems = async () => {
    const { data } = await axios.get(`/api/items`);
    return data.data;
}

export const viewItem = async id => {
    const { data } = await axios.get(`/api/items/${id}`);
    return data.data;
}

export const createItem = async itemData => {
    const { data } = await axios.post(`/api/items`, itemData);
    return data.data;
}

export const updateItem = async itemData => {
    const { data } = await axios.put(`/api/items/${itemData._id}`, itemData);
    return data.data;
}

export const deletedItem = async id => {
    const { data } = await axios.delete(`/api/items/${id}`);
    return data.data;
}