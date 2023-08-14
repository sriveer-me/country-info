import { createBrowserRouter,RouterProvider } from "react-router-dom";

import OutletComponent from "./components/OutletComponent";
import MainNavigation from "./components/MainNavigation";
import Home from "./Page/Home";
import CountryDetailOutlet from "./Page/CountryDetailOutlet";
import CountryDetail from "./Page/CountryDetail";

import Classes from './App.module.scss';

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
                        element: <CountryDetailOutlet />,
                        children: [
                            {
                                index: true,
                                element: <CountryDetail />
                            }
                        ]
                    }
                ]
            }
        ]
    }
])

export default function App(){
    return (
        <div className={Classes['app']}>
            <RouterProvider router={router} />
        </div>
    );
}