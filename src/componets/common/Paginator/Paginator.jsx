import React, { useState } from "react";
import classes from './paginator.module.css';

export const Paginator = ({totalItemsCount, pageSize, currentPage, onPageChanged, portionSize = 10}) => {

    let pagesCout = Math.ceil(totalItemsCount / pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCout; i++) {
        pages.push(i);
    }

    let portionCount = Math.ceil(pagesCout / portionSize);
    let [portionNumber, setPortionNumber] = useState(1);
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
    let rightPortionPageNumber = portionNumber * portionSize;


    return ( 
        <div>
            { portionNumber > 1 && <button onClick={() => {setPortionNumber(portionNumber - 1)}}>PREV</button> }
            {pages
                .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
                .map(p => {
                    return (
                        <span className={currentPage === p ? classes.selectedPage : `${classes.pagBar}`} onClick={(e) => { onPageChanged(p); }}>{p}</span>
                )})
            }
            { portionCount > portionNumber && <button onClick={() => {setPortionNumber(portionNumber + 1)}}>NEXT</button> }
        </div>
    )
}