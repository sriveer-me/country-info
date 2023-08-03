import Classes from './Card.module.scss';

export default function Card({
    imgSrc,
    countryName,
    population,
    region,
    capital,
    onClick
}){
    
    return(
        <article onClick={onClick} className={Classes['article']}>
            <img src={imgSrc} alt={`${countryName} flag`} className={`${Classes['img']}`}/>
            <div className={Classes['margin-box']}>
                <h2 className={`h2 ${Classes['country-name']}`}>{countryName}</h2>
                <p className={Classes['country-stat']}><b>Population: </b>{population.toLocaleString("en-US")}</p>
                <p className={Classes['country-stat']}><b>Region: </b>{region}</p>
                <p className={Classes['country-stat']}><b>Capital: </b>{capital}</p>
            </div>
        </article>
    )
}