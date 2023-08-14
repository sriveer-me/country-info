import { useOutletContext, useParams } from "react-router-dom"
import CountryChip from "../ui/CountryChip";
import Classes from './CountryDetail.module.scss';

export default function CountryDetail(){
    
    const params = useParams();
    const {flagData} = useOutletContext();

    if(flagData.data.length > 0){
        const country = flagData.data.find((flg) => flg.cca3 === params.countryId)

        const countryName = country.name.common; 

        const nativeName = country.name.nativeName[Object.keys(country.name.nativeName)[0]].common;
        const population = country.population.toLocaleString("en-US");
        const region = country.region;
        const subRegion = country.subregion;
        const capital = country.capital.toString();

        const topLevelDomain = country.tld.toString();
        const currencies = Object.keys(country.currencies).map((key) => country.currencies[key].name).toString();
        const languages = Object.keys(country.languages).map((key) => country.languages[key]).toString();

        let borderCountries = null;
        if("borders" in country){
            borderCountries = country.borders.map((countryId) => {
                const country = flagData.data.find((flg) => flg.cca3 === countryId);
                return(<CountryChip 
                            link={`/${countryId}`} 
                            name={country.name.common}
                            flag={country.flags.svg}
                            key={`country chip named ${countryId} for ${nativeName}`}
                        />);
            })
        }

        return(
            <section className={Classes['section']}>
                <div className={Classes['image-container']}>
                    <img 
                        src={country.flags.svg} 
                        alt={`Country Flag Of ${country.name}`}
                        className={Classes['img']}
                    />
                </div>
                <article className={Classes['article']}>
                <h1 className={Classes['country-heading']}>{countryName}</h1>
                    <div className={Classes['columns']}>
                        <div className={Classes['left-column']}>
                            <p><b>Native Name:</b> {nativeName}</p>
                            <p><b>Population:</b> {population}</p>
                            <p><b>Region:</b> {region}</p>
                            <p><b>Sub Region:</b> {subRegion}</p>
                            <p><b>Capital:</b> {capital}</p>
                        </div>
                        <div className={Classes['right-column']}>
                            <p><b>Top Level Domain:</b> {topLevelDomain}</p>
                            <p><b>Currencies:</b> {currencies}</p>
                            <p><b>Languages:</b> {languages}</p>
                        </div>
                    </div>
                    <footer className={Classes['footer']}>
                        <p className={Classes['border-countries']}><b>Border Countries:</b> {borderCountries}</p>
                    </footer>
                </article>
            </section>
        )
    }

    return(
        <></>
    )
}