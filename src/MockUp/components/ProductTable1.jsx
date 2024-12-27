import React, { Fragment } from 'react'
import ProductCategoryRow from './ProductCategoryRow'
import ProductRow from './ProductRow'

function ProductTable1({ db }) {
    if (!Array.isArray(db)) {
        return "error"
    }
    console.log(db)
    let rows = [];
    let lastCategory = null;

    db.forEach((pdt, idx) => {
        // if (pdt.category !== db[idx - 1].category) {
        if (pdt.category !== lastCategory) {
            rows.push(
                <ProductCategoryRow
                    category={pdt.category}
                    key={pdt.category}
                />
                // <tr key={pdt.category}>
                //     <td colSpan="2"> {pdt.category} </td>
                // </tr>
            )
        }

        rows.push(
            <ProductRow
                pdt={pdt} key={pdt.name} />
        )
        // rows.push(<tr key={pdt.name}>
        //     <td>{pdt.name}</td>
        //     <td>{pdt.price}</td>
        // </tr>)
    })

    return (
        <Fragment>
            <h1>ProductTable </h1>
            <table border={2}>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {rows}
                </tbody>
            </table>


        </Fragment>
    )
}

export default ProductTable1