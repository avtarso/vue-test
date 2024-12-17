import axios from 'axios';

const API_URL = window.location.protocol === 'https:'
    ? 'https://spa.up.railway.app/api/comments/'
    : 'http://localhost:8000/api/comments/';

export default {
    async fetchComments() {
        try {
            const response = await axios.get(API_URL);
            return response.data;
        } catch (error) {
            console.error('Ошибка при получении комментариев:', error);
            throw error;
        }
    }
};
