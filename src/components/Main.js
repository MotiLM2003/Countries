import React, { useState, useEffect } from 'react';
function Main() {
  const [originalState, setOriginalState] = useState([]);
  const [state, setState] = useState([]);
  const [search, setSearch] = useState('');

  const getData = async () => {
    const search = `https://restcountries.eu/rest/v2/all`;
    const res = await (await fetch(search)).json();
    setState(res);
    setOriginalState(res);
  };

  const setData = () => {
    const newState = originalState.filter(
      (x) =>
        x.name.toLowerCase().includes(search) ||
        x.capital.toLowerCase().includes(search)
    );

    setState(newState);
    console.log(newState);
  };

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    setData();
  }, [search]);

  return (
    <div>
      <div class='search-container'>
        Search:
        <input
          type='text'
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />{' '}
        {search}
      </div>
      <table border='1'>
        <thead>
          <tr>
            <th>Name</th>
            <th>Native Name</th>
            <th>Capital</th>
            <th>Population</th>
            <th>flag</th>
          </tr>
        </thead>
        <tbody>
          {state.map((country, index) => {
            const className = index % 2 === 0 ? 'bg-red' : 'bg-green';
            return (
              <tr className={className}>
                <td>{country.name}</td>
                <td>{country.nativeName}</td>
                <td>{country.capital}</td>
                <td>{country.population}</td>
                <td>
                  <img src={country.flag} />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Main;
