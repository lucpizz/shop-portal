import axios from 'axios';

export default {
  getItemById: function () {
    return axios.get('/api/products/:id');
  },
  getItemBySku: function () {
    return axios.get('/api/sku/:sku');
  },
  getItemByName: function () {
    return axios.get('api/name/:name');
  },
};
