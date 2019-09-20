import React from 'react'
import OneCountryBlock from './OneCountryBlock'
import MultipleCountriesBlock from './MultipleCountriesBlock'

const ResultsBlock = ({filtCountries, handleShowBtn}) => {

  const filtCountriesLength = filtCountries.length; 

  const resultBlock = filtCountriesLength === 0 ?
    <InitialBlock /> :
    filtCountriesLength === 1 ?
      <OneCountryBlock country={filtCountries} /> :
      filtCountriesLength > 10 ? 
        <ToMuchCountriesBlock /> :
        <MultipleCountriesBlock 
          filtCountries={filtCountries} 
          handleShowBtn={handleShowBtn}
        />;

  return (
    <div>
      {resultBlock}
    </div>
  )
}

const InitialBlock = () => <div>start typing</div>;
const ToMuchCountriesBlock = () => <div>to many matches, specify another filter</div>;

export default ResultsBlock;