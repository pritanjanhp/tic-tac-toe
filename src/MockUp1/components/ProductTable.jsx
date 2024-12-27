import React from 'react'
import ProductCategoryRow from '../components/ProductCategoryRow'
import ProductRow from '../components/ProductRow'

const ProductTable = ({ products, filterText, inStock }) => {
  const rows = [];
  let lst = null;
  if (!products) {
    console.log("not availagbe")
  }
  console.log(products)

  products.forEach((pdt) => {
    if (pdt.name.toLowerCase().indexOf(filterText.toLowerCase()) === -1) {
      return;
    }
    if (inStock && !pdt.stocked) {
      return;
    }

    if (pdt.category !== lst) {
      rows.push(
        <ProductCategoryRow
          category={pdt.category}
          key={pdt.category}
        // key={pdt.id}
        />
      )
    }
    rows.push(
      <ProductRow
        pdt={pdt}
        key={pdt.name}
      />
    )
    lst = pdt.category;
  }
  )

  return (
    // <div>ProductTable</div>
    <table border={2} style={{ textAlign: 'center' }}>
      <thead>
        <tr>
          <th>Name</th>
          <th>price</th>
        </tr>
      </thead>
      <tbody>
        {rows}
      </tbody>

    </table>

  )
}

export default ProductTable