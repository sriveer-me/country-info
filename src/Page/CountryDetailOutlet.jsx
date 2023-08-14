import { Outlet, useNavigate, useOutletContext } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";
import Classes from './CountryDetailOutlet.module.scss'

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
            <button
                className={Classes['button']} 
                onClick={handleBack}
            >
                <BsArrowLeft />
                Back
            </button>
            <Outlet context={{flagData: flagData}}/>
        </>
    );
}