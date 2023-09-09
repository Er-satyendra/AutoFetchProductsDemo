import ProductDetails from '@products/Pages/ProductDetail/ProductDetails'
import Products from '@products/Pages/Products'
import ROUTES from '@products/Routes/routes'

const GENERAL_ROUTES = [
  {
    id: '1',
    path: ROUTES.HOME,
    component: Products,
    type: 'public',
  },
  {
    id: '2',
    path: ROUTES.PRODUCTS,
    component: Products,
    type: 'public',
  },
  {
    id: '3',
    path: ROUTES.PRODUCT_DETAILS,
    component: ProductDetails,
    type: 'public',
  },
]

export default GENERAL_ROUTES
