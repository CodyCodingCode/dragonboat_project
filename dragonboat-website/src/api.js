import axios from 'axios';

const API_BASE_URL = 'http://127.0.0.1:8000/api';

export const fetchParticipants = async () => {
  try {
      const response = await axios.get(`${API_BASE_URL}/participants/`);
      return response.data;
  } catch (error) {
      console.error('Error fetching participants:', error);
      throw error;
  }
};

// Fetch events
export const fetchEvents = () => {
    return axios.get(`${API_BASE_URL}/events/`)
        .then(response => response.data)
        .catch(error => {
            console.error('Error fetching events:', error);
            return [];
        });
};

export const addParticipant = (participant) => {
  return axios.post(`${API_BASE_URL}/participants/`, participant)
      .then(response => response.data)
      .catch(error => {
          console.error('Error adding participant:', error.response || error.message || error);
          throw error; // Rethrow the error for further handling
      });
};