import React from 'react'

const Filter = ({searchVal, handleSearchVal}) => {
  return (
    <input value={searchVal} onChange={handleSearchVal} />
  )
}

export default Filter