import { useOutletContext, useParams } from "react-router-dom"
import Classes from './CountryDetail.module.scss';

export default function CountryDetail(){
    
    const params = useParams();
    const {flagData} = useOutletContext();

    if(flagData.data.length > 0){
        const country = flagData.data.find((flg) => flg.cca3 === params.countryId)

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
            borderCountries = country.borders.toString();
        }

        return(
            <section className={Classes['section']}>
                <img 
                    src={country.flags.svg} 
                    alt={`Country Flag Of ${country.name}`}
                    className={Classes['img']}
                />
                <article className={Classes['article']}>
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
                        <p><b>Border Countries:</b> {borderCountries}</p>
                    </footer>
                </article>
            </section>
        )
    }

    return(
        <></>
    )
}