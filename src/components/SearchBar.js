import React from 'react'


export const SearchBar = ({ filterText, inStockOnly, onFilterTextChange, onInStockOnlyChange }) => {
  return (
    <div className='search-bar'>
      <input
        type="text"
        placeholder='Search'
        className='search-input'
        value={filterText}
        onChange={e => onFilterTextChange(e.target.value)}
      ></input>
      <label>
        <input
          type='checkbox'
          checked={inStockOnly}
          onChange ={e => onInStockOnlyChange(e.target.checked)}
        ></input>
        {' '}
        Only show products in stock
      </label>
    </div>
  )
}
