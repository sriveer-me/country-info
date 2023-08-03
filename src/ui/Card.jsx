import Classes from './Card.module.scss';

export default function Card({
    imgSrc,
    countryName,
    population,
    region,
    capital
}){
    
    return(
        <article className={Classes['article']}>
            <img src={imgSrc} alt={`${countryName} flag`} />
            <div className={Classes['margin-box']}>
                <h2 className={`h2 ${Classes['country-name']}`}>{countryName}</h2>
                <p className={Classes['country-stat']}><b>Population: </b>{population.toLocaleString("en-US")}</p>
                <p className={Classes['country-stat']}><b>Region: </b>{region}</p>
                <p className={Classes['country-stat']}><b>Capital: </b>{capital}</p>
            </div>
        </article>
    )
}