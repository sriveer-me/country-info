import { Outlet } from "react-router-dom";
import { useLocation } from "react-router-dom";

const stack = [];

export default function OutletComponent(){

    const location = useLocation();
    stack.push(location.pathname);

    return(
        <Outlet context={{historyStack: stack}}/>
    );
}