import React from 'react'

const SearchPanel = ({searchQuery, handleSearch}) => {
  return (
    <div>
      <span>find countries</span> 
      <input type="text" value={searchQuery} onChange={handleSearch}/>
    </div>
  )
}

export default SearchPanel;