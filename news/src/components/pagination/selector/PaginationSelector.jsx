import React from "react";
import './PaginationSelector.css';

const PaginationSelector = ({itemsPerPage, setItemsPerPage}) => {

    return (
        <div className="selector">
            <select className="selector-box"
            
            value={itemsPerPage} onChange={(e) => setItemsPerPage(Number(e.target.value))}>
                <option value={5}>5</option>
                <option value={10}>10</option>
                <option value={20}>20</option>
                <option value={25}>25</option>
            </select>
        </div>
    )

}

export default PaginationSelector