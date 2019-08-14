import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID daf4ffba9d6318a7c6e802d98c58c4ffbab60f5cfd2c64c3d3961ad63e6a81fd'
    }
})