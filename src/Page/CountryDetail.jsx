import { useParams } from "react-router-dom"

export default function CountryDetail(){
    
    const params = useParams();
    
    return(
        <h1>CountryDetail: {params.countryId}</h1>
    )
}