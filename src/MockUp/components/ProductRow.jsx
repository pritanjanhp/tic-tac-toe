import React, { Fragment } from 'react'

const ProductRow = ({ db }) => {
    // const name = db.stocked ? db.name :
    //     <span style={{ color: 'red' }} >
    //         {db.name}
    //     </span>
    return (
        <Fragment>
            {/* <h2>ProductRow</h2> */}
            <tr>
                <td>{db.name}</td>
                <td>{db.price} </td>
            </tr>
        </Fragment>
    )
}

export default ProductRow