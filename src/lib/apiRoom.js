import axios from 'axios';

export const viewAllRooms = async () => {
    const { data } = await axios.get(`/api/rooms`);
    return data.data;
}

export const viewRoom = async id => {
    const { data } = await axios.get(`/api/rooms/${id}`);
    return data.data;
}

export const createRoom = async roomData => {
    const { data } = await axios.post(`/api/rooms`, roomData);
    return data.data;
}

export const updateRoom = async roomData => {
    const { data } = await axios.put(`/api/rooms/${roomData._id}`, roomData);
    return data.data;
}

export const deletedRoom = async id => {
    const { data } = await axios.delete(`/api/rooms/${id}`);
    return data.data;
}