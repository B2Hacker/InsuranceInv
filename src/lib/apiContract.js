import axios from 'axios';

export const viewAllContracts = async () => {
    const { data } = await axios.get(`/api/contracts`);
    return data.data;
}

export const viewContract = async id => {
    const { data } = await axios.get(`/api/contracts/${id}`);
    return data.data;
}

export const createContract = async contractData => {
    const { data } = await axios.post(`/api/contracts`, contractData);
    return data.data;
}

export const updateContract = async contractData => {
    const { data } = await axios.put(`/api/contracts/${contractData._id}`, contractData);
    return data.data;
}

export const deleteContract = async id => {
    const { data } = await axios.delete(`/api/contracts/${id}`);
    return data.data;
}