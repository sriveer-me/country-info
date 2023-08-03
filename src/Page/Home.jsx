import { useOutletContext,useNavigate } from "react-router-dom";
import Card from "../ui/Card";

import Classes from './Home.module.scss';

export default function Home(){
    const outletContext = useOutletContext();
    const navigate = useNavigate();

    function handleCardClick(countryCode){
        console.log(countryCode);
        navigate(`/${countryCode}`);
    }

    return(
        <main className={Classes['main']}>
            {outletContext.flagData.map(
                    (flg,index) => <Card 
                        onClick={() => handleCardClick(flg.cca3)}
                        key={`card-${flg.numericCode}-${index}`} 
                        imgSrc={flg.flags.svg} 
                        countryName={flg.name.official} 
                        population={flg.population} 
                        region={flg.region} 
                        capital={flg.capital}
                    />
                )}
        </main>
    );
}