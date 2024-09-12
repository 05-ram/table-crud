import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Home";
import Error from "../components/Error";
import Create from "../components/Create";
import Update from "../components/Update";

const RouterData = () => {
    const strictRoute = createBrowserRouter([
        {
            path: '/',
            element: <Home />,
            errorElement: <Error />
        },
        {
            path: '/create',
            element: <Create />,
        },
        {
            path: '/update/:id',
            element: <Update />,
        }
    ])
    return strictRoute;
}

export default RouterData;