import { useOutletContext,useNavigate } from "react-router-dom";
import Card from "../ui/Card";
import SearchBar from "../ui/SearchBar";

import Classes from './Home.module.scss';
import { useState } from "react";

export default function Home(){
    const outletContext = useOutletContext();
    const navigate = useNavigate();
    const [searchText,setSearchText] = useState('');

    function handleCardClick(countryCode){
        navigate(`/${countryCode}`);
    }

    let cards=null;
    if(outletContext.flagData.data.length > 0 && searchText !== ''){
        cards = outletContext.flagData.fuse.search(searchText).map((
            {item: flg},index) => <Card 
                        onClick={() => handleCardClick(flg.cca3)}
                        key={`card-${flg.numericCode}-${index}`} 
                        imgSrc={flg.flags.svg} 
                        countryName={flg.name.official} 
                        population={flg.population} 
                        region={flg.region} 
                        capital={flg.capital?.toString()}
                    />);
    }
    else{
        cards = outletContext.flagData.data.map(
                    (flg,index) => <Card 
                        onClick={() => handleCardClick(flg.cca3)}
                        key={`card-${flg.numericCode}-${index}`} 
                        imgSrc={flg.flags.svg} 
                        countryName={flg.name.official} 
                        population={flg.population} 
                        region={flg.region} 
                        capital={flg.capital}
                    />
                )
    }

    return(
        <main className={Classes['main']}>
            <div className={Classes['filter-rack']}>
                <SearchBar value={searchText} onChange={(e) => setSearchText(e.target.value)}/>
            </div>
            <div className={Classes['card-holder']}>
                {cards}
            </div>
        </main>
    );
}