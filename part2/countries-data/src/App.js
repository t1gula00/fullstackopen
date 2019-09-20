import React, {useState, useEffect} from 'react';
import SearchPanel from './components/SearchPanel'
import ResultsBlock from './components/ResultsBlock'
import axios from 'axios'

const App = () => {
  const [countries, setCountries] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [filtCountries, setFiltCountries] = useState([]);

  useEffect(() => {
    axios
      .get('https://restcountries.eu/rest/v2/all?fields=name;capital;population;languages;flag')
      .then(response => {
        // console.log(response.data);
        setCountries(response.data);
      })
  }, []);

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
    filterAndSetCountries(e.target.value);
  }

  const handleShowBtn = (value) => {
    setSearchQuery(value);
    filterAndSetCountries(value);
  }

  const filterAndSetCountries = (val) => {
    const filtCountries = countries.filter((county) => {
      if ( val === '' ) return;
      if ( county.name.toLowerCase().indexOf(val.toLowerCase()) !== -1 ) {
        return county;
      }
    })
    setFiltCountries(filtCountries);
  }

  return (
    <div>
      <SearchPanel searchQuery={searchQuery} handleSearch={handleSearch}/>
      <ResultsBlock filtCountries={filtCountries} handleShowBtn={handleShowBtn}/>
    </div>
  );
}

export default App;
