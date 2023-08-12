import { Link } from "react-router-dom";
import Classes from './CountryChip.module.scss';

export default function CountryChip({flag,name,link}){
    return(
        <Link to={link} className={Classes['link']}>
            <img className={Classes['img']} src={flag} alt={`${name} flag`} />
            <span>{name}</span>
        </Link>
    );
}