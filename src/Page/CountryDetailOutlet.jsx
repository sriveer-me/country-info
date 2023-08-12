import { Outlet, useNavigate, useOutletContext } from "react-router-dom";

export default function CountryDetailOutlet(){

    const {historyStack,flagData} = useOutletContext();
    const navigate = useNavigate();

    function handleBack(){
        historyStack.pop(); //pop off current route..
        
        let lastRoute = historyStack.pop();
        if(!lastRoute)
            lastRoute = '/' //goto home if nothing else exists 
        
        navigate(lastRoute);
    }

    return(
        <>
            <button onClick={handleBack}>Back</button>
            <Outlet context={{flagData: flagData}}/>
        </>
    );
}