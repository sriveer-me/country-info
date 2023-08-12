import { useEffect, useState } from 'react';
import Classes from './ComboBox.module.scss';

import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { MdOutlineKeyboardArrowUp } from "react-icons/md";

export default function ComboBox({
    placeHolder,
    items,
    selectedItem,
    onSelectedItemChange
}){
    
    const [open,setIsOpen] = useState(false);

    useEffect(() => {
        items.forEach((item) => {
            if(!item.selected){
                item.selected = false;
            }
        })
    },[items]);

    function handleNewItemSelected(newItem) {
        
        //deselect all other itesm
        items.forEach((item) => {
            if(item !== newItem)
                item.selected = false;
        })

        //notify parent that selected item has changed
        onSelectedItemChange(newItem);

        //close the dropdown
        setIsOpen(false);
    }

    return(
        <div className={Classes[`combo-box`]}>
            <div onClick={() => setIsOpen((prev) => !prev)} className={Classes['main-box']}>
                <span>{selectedItem || placeHolder}</span>
                {!open && <MdOutlineKeyboardArrowDown />}
                {open && <MdOutlineKeyboardArrowUp />}
            </div>
            {open && <div className={Classes['item-box']}>
                {items?.map((item,index) => <ComboBoxItem 
                    onSelectedItemChange={handleNewItemSelected} 
                    item={item} 
                    key={'combo-box-item'+index} 
                />)}
            </div>}
        </div>
    );
}

function ComboBoxItem({item,onSelectedItemChange}){
    return(
        <div onClick={() => onSelectedItemChange(item)}>
            {item.displayValue}
        </div>
    )
}