import { useEffect, useState } from "react";
import Card from "../ui/Card";

import axios from 'axios';

let flagData =null;
export default function Home(){

    const [state,setState] = useState(false);

    useEffect(function(){
        async function getFlagData(){
            const {data} = await axios.get('https://restcountries.com/v3.1/all')
            flagData = data;
            setState(true);
        }
        getFlagData();
    },[])

    if(state === true){
        const cards = flagData.map((flg,index) => <Card key={`card-${flg.numericCode}-${index}`} imgSrc={flg.flags.svg} countryName={flg.name.official} population={flg.population} region={flg.region} capital={flg.capital}/>);
        return cards;
    }
    return(
        <h1>hi</h1>
    );
}