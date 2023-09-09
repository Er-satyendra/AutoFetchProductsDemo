const ApiDefination = {
  getProducts: {
    url: '/products',
    method: 'GET',
    data: {},
  },
  getProduct: {
    url: '/products/:id',
    method: 'GET',
    data: {
      id: '',
    },
  },
}
export default ApiDefination
