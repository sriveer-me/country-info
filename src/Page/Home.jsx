import { useOutletContext,useNavigate } from "react-router-dom";
import Card from "../ui/Card";
import SearchBar from "../ui/SearchBar";
import ComboBox from "../ui/ComboBox/ComboBox";

import Classes from './Home.module.scss';
import { useState } from "react";

const ITEMS = [
    {displayValue: 'Africa', value: 'Africa'},
    {displayValue: 'Americas', value: 'Americas'},
    {displayValue: 'Asia', value: 'Asia'},
    {displayValue: 'Europe', value: 'Europe'},
    {displayValue: 'Oceania', value: 'Oceania'}
];

const placeHolder = 'Filter By Region';

export default function Home(){
    const outletContext = useOutletContext();
    const navigate = useNavigate();
    const [searchText,setSearchText] = useState('');
    const [filterByRegion, setFilterByRegion] = useState(null);

    function handleCardClick(countryCode){
        navigate(`/${countryCode}`);
    }

    function onFilterByRegionChange(newFilterRegion){
        setFilterByRegion(newFilterRegion.value);
    }

    let cards=null;
    if(outletContext.flagData.data.length > 0)
    {
        let filteredFlags = outletContext.flagData.data;
        if(searchText !== ''){
            filteredFlags = outletContext.flagData.fuse.search(searchText).map((flg) => flg.item);
        }
        if(filterByRegion){
            filteredFlags = filteredFlags.filter((flg) => filterByRegion === flg.region);
        }
        cards = filteredFlags.map(
            (flg,index) => <Card 
                onClick={() => handleCardClick(flg.cca3)}
                key={`card-${flg.numericCode}-${index}`} 
                imgSrc={flg.flags.svg} 
                countryName={flg.name.official} 
                population={flg.population} 
                region={flg.region} 
                capital={flg.capital}
            />
        );
    }

    return(
        <main className={Classes['main']}>
            <div className={Classes['filter-rack']}>
                <SearchBar value={searchText} onChange={(e) => setSearchText(e.target.value)}/>
                <ComboBox 
                    placeHolder={placeHolder}
                    items={ITEMS}
                    onSelectedItemChange={(item) => onFilterByRegionChange(item)}
                    selectedItem={filterByRegion}
                />
            </div>
            <div className={Classes['card-holder']}>
                {cards}
            </div>
        </main>
    );
}