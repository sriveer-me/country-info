import { Outlet,Link } from "react-router-dom";
import { BsMoonFill,BsMoon } from "react-icons/bs";
import { useState } from "react";

import Classes from './MainNavigation.module.scss';

export default function MainNavigation(){
    const [darkModeEnabled,setDarkModeEnabled] = useState(false);
    
    function darkModeButtonClick(){
        setDarkModeEnabled(!darkModeEnabled);
        document.documentElement.classList.toggle('dark-mode');
    }

    return(
        <>
            <header className={Classes['header']}>
                <Link className="h1">Where in the world?</Link>
                <button
                    className={Classes['button']}
                    onClick={darkModeButtonClick}
                >
                    {darkModeEnabled && <BsMoonFill />}
                    {!darkModeEnabled && <BsMoon />}
                    <span className="body-text"><b>Dark Mode</b></span>
                </button>
            </header>
            <Outlet />
        </>
    );
}