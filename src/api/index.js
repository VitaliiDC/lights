import axios from 'axios';

const instance = axios.create({
    baseURL: "https://lightbuttons.herokuapp.com/"
});

const api = {
    async getList() {
        return await instance.get('/').then(res => res.data);
    },
    async setList({preList}) {
        return await instance.post('/', {preList});
    }
}

export default api;