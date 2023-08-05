import Classes from './SearchBar.module.scss';
import { AiOutlineSearch } from "react-icons/ai";

export default function SearchBar(props){

    return(
        <label className={Classes['label']}>
            <AiOutlineSearch className={Classes['search-icon']}/>
            <input 
                className={Classes['input']} 
                type="text"
                placeholder='Search for a country...'
               {...props}
            />
        </label>
    );
}