import React from "react";
import './PaginationComponent.css';

const PaginationComponent = ({ pages, setCurrentPage }) => {

    return (
        <div className="pagination">
            {/* renderiza numero de itens da página */}
            {Array.from(Array(pages), (item, index) => {
                return <button className="page-number"  value={index} onClick={(e) => setCurrentPage(Number(e.target.value))}>{index + 1}</button>
            })}
        </div>
    )
}

export default PaginationComponent