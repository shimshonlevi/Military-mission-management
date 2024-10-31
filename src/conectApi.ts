import axios from 'axios';
import { Mission } from './types/Types';

const API_BASE_URL = 'https://reactexambackend.onrender.com/missions/:8351071';

export const getMissions = async () => {
    return await axios.get(`${API_BASE_URL}`);
};
export const addMission = async (mission: Mission) => {
    return await axios.post(`${API_BASE_URL}`, mission);
};
export const deleteMission = async (id: any) => {
    return await axios.delete(`${API_BASE_URL}/${id}`);
};
export const updateMissionStatus = async (id: any) => {
    return await axios.post(`${API_BASE_URL}/progress/${id}`);
};