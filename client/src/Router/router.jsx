import {createBrowserRouter} from 'react-router-dom'
import App from '../App'
const  router = createBrowserRouter([
    {
        path:'/',
        element: <App></App>,
    },
    {
        path:'/dashboard',
        element: <div>This is dash Board</div>,
    },{
        path:'/test/:id/edit',
        element: <div>hellow you are going to create a Test</div>
    }
])
export default router