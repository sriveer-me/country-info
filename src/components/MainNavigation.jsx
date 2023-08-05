import { Outlet,Link } from "react-router-dom";
import { BsMoonFill,BsMoon } from "react-icons/bs";
import { useEffect, useState } from "react";

import Fuse from 'fuse.js'

import axios from 'axios';
import Classes from './MainNavigation.module.scss';

export default function MainNavigation(){
    const [darkModeEnabled,setDarkModeEnabled] = useState(false);
    const [flagData,setFlagData] = useState({ data: [],fuse: null});

    useEffect(function(){
        async function getFlagData(){
            const {data} = await axios.get('https://restcountries.com/v3.1/all')
            setFlagData({
                data,
                fuse: new Fuse(data,{
                    keys: ['name.common','capital','cca3','altSpellings'],
                    shouldSort: true,
                    findAllMatches: true
                })
            });
        }
        getFlagData();
    },[])
    
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
            <Outlet context={{flagData: flagData}}/>
        </>
    );
}