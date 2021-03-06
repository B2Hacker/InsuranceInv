import axios from 'axios';

export const viewAllConditions = async () => {
    const { data } = await axios.get(`/api/conditions`);
    return data.data;
}

export const viewCondition = async id => {
    const { data } = await axios.get(`/api/conditions/${id}`);
    return data.data;
}

export const createCondition = async conditionData => {
    const { data } = await axios.post(`/api/conditions`, conditionData);
    return data.data;
}

export const updateCondition = async conditionData => {
    const { data } = await axios.put(`/api/conditions/${conditionData._id}`, conditionData);
    return data.data;
}

export const deleteCondition = async id => {
    const { data } = await axios.delete(`/api/conditions/${id}`);
    return data.data;
}