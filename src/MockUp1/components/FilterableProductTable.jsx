import React, { useState } from 'react'
import SearchBar from "../components/SearchBar"
import ProductTable from './ProductTable'

const FilterableProductTable = ({ products }) => {
  let [filterText, setFilterText] = useState('');
  let [inStock, setInStock] = useState(false);

  let handleFilterText = (text) => {
    setFilterText(text);
  }

  let handleInStock = (stock) => {
    setInStock(stock);
  }

  return (
    <div>
      <SearchBar
        filterText={filterText}
        inStock={inStock}
        onFilterTextChange={handleFilterText}
        onInStockChange={handleInStock}
      />
      <ProductTable
        products={products}
        filterText={filterText}
        inStock={inStock}
      />

      {/* {products.map((pdt, idx) => (
        <div key={idx}>
          {pdt.name} - {pdt.price} - {pdt.category}
        </div>
      ))} */}
    </div>
  )
}

export default FilterableProductTable