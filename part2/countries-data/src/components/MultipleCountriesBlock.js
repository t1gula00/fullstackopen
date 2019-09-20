import React from 'react'

const MultipleCountriesBlock = ({filtCountries, handleShowBtn}) => {
  return (
    <ul>
      {filtCountries.map((country) => {
        return(
          <li key={country.name}>
            {country.name}
            <button onClick={() => handleShowBtn(country.name)}>show</button>  
          </li>
        )
      })}
    </ul>
  )
}

export default MultipleCountriesBlock;