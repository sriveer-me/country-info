import { createBrowserRouter,RouterProvider } from "react-router-dom";

import OutletComponent from "./components/OutletComponent";
import MainNavigation from "./components/MainNavigation";
import Home from "./Page/Home";
import CountryDetail from "./Page/CountryDetail";

const router = createBrowserRouter([
    {
        path: '/',
        element: <OutletComponent />,
        children: [
            {
                path: '/',
                element:<MainNavigation />,
                children: [
                    {
                        index: true,
                        element: <Home/>
                    },
                    {
                        path: '/:countryId',
                        element: <CountryDetail />
                    }
                ]
            }
        ]
    }
])

export default function App(){
    return (
       <RouterProvider router={router} />
    );
}