import React from 'react'

const SearchBar = ({ filterText, inStock, onFilterTextChange, onInStockChange }) => {
  return (
    // <div>SearchBar</div>
    <form action="">
      <input type='text' value={filterText} placeholder='search here...'

        onChange={(e) => onFilterTextChange(e.target.value)}
      /> <br />
      <label >
        <input type='checkbox' checked={inStock} onChange={(e) => onInStockChange(e.target.checked)} />only shows products in stochs
      </label>
    </form>
  )
}

export default SearchBar