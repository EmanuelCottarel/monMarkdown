import {createBrowserRouter} from "react-router-dom";
import Root from "../_components/root";
import ErrorPage from "../_components/error-page";
import Dashboard from "../_components/dashboard";
import Files from "../_components/files";
import Login from "../_components/login";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root/>,
        errorElement: <ErrorPage/>,
        children: [
            {
                path: '/',
                element: <Dashboard/>
            },
            {
                path: '/files',
                element: <Files/>
            },
        ],
    },
    {
        path: '/login',
        element: <Login />
    },
    {
        path: '/logout',
        element: <Login />
    }
])

export default router;