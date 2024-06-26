import axios from './apiClient';
const route = '/book'

export default {
  all() {
    return axios.get('/books');
  },

  get(id) {
    return axios.get(route + '/' + id);
  },

  create(data) {
    return axios.put('/api' + route, data);
  },

  update(data) {
    return axios.post('/api' + route, data);
  },

  delete(data) {
    return axios.delete('/api' + route + '/' + data.id);
  }

};
