import React, { Fragment } from 'react'
import SearchBar from './SearchBar'
import ProductTable1 from './ProductTable1'
// import db from "../json/db.json"

function FilterableProductTable({ products }) {
    console.log(products)
    return (
        <Fragment>
            <h1>Filterable Product Table</h1>
            <SearchBar />
            <ProductTable1 db={products} />
        </Fragment>
    )
}

export default FilterableProductTable