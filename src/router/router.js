import { createBrowserRouter } from 'react-router-dom'
import Default from "../screens/Default"
import Product from "../screens/Product"
import { LoginForm } from '../screens/Forms/LoginForm'

import App from "../App"

const basename = process.env.NODE_ENV === 'production' ? '/desarrollo-frontend-react' : '/';

const routes = createBrowserRouter([
    {
        path: '/',
        element: <App/>,
        children: [
            {
                path: '/default',
                element: <Default></Default>,
            },
            {
                path: '/product',
                element: <Product></Product>,
            },
            {
                path: '/forms',
                element: <LoginForm/>
            }
        ]
    }
],
{
    basename: basename
})

export default routes