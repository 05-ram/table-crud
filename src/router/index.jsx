import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Home";
import Error from "../components/Error";
import Create from "../components/Create";

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
        }
    ])
    return strictRoute;
}

export default RouterData;