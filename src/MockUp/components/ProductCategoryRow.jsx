import React, { Fragment } from 'react'

const ProductCategoryRow = ({ category }) => {
    return (
        <Fragment>
            {/* <h2> Product Category Row </h2> */}
            <tr>
                <th colSpan="2">
                    {category}
                </th>
            </tr>
        </Fragment>
    )
}

export default ProductCategoryRow