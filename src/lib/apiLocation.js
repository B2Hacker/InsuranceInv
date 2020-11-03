import axios from 'axios';

export const viewAllLocations = async () => {
    const { data } = await axios.get(`/api/locations`);
    return data.data;
}

export const viewLocation = async id => {
    const { data } = await axios.get(`/api/locations/${id}`);
    return data.data;
}

export const createLocation = async locationData => {
    const { data } = await axios.post(`/api/locations`, locationData);
    return data.data;
}

export const updateLocation = async locationData => {
    const { data } = await axios.put(`/api/locations/${locationData._id}`, locationData);
    return data.data;
}

export const deleteLocation = async id => {
    const { data } = await axios.delete(`/api/locations/${id}`);
    return data.data;
}