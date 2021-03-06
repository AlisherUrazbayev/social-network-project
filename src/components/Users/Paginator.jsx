import React from 'react';
import cn from 'classnames';
import styles from './Paginator.module.css';
import { Button, } from '@material-ui/core';
import { useState } from 'react';


const Paginator = ({ totalItemsCount, pageSize, currenPage, onPageChanged, portionSize }) => {

    let pagesCount = Math.ceil(totalItemsCount / pageSize);

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    let portionCount = Math.ceil(pagesCount / portionSize);
    let [portionNumber, setPortionNumber] = useState(1);
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
    let rightPortionPageNumber = portionNumber * portionSize;

    return <div >
        {portionNumber > 1 &&
            <Button variant="contained" color="primary" onClick={() => { setPortionNumber(portionNumber - 1) }} >Prev</Button>
        }
        {pages.filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
            .map((p) => {
                return <span className={cn({
                    [styles.selectedPage]: currenPage === p
                }, styles.pageNumber)}
                    key={p}
                    onClick={(e) => {
                        onPageChanged(p);
                    }}>{p}</span>
            })}
        {portionCount > portionNumber &&
            <Button variant="contained" color="primary" onClick={() => { setPortionNumber(portionNumber + 1) }} >Next</Button>
        }
    </div>

}

export default Paginator;
