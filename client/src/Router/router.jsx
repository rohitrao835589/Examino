import {createBrowserRouter} from 'react-router-dom'
import App from '../App'
import {DashBoard , SetQuestion} from '../pages/import'
const  router = createBrowserRouter([
    {
        path:'/',
        element: <App></App>,
    },
    {
        path:'/dashboard',
        element: <DashBoard />,
    },{
        path:'/test/:id/edit',
        element: <SetQuestion />
    }
])
export default router