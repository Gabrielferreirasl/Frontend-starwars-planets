import React, { useContext, useEffect, useState } from 'react';
import SWContext from '../context/SWContext';
import Order from './Order';

function FilterForm() {
  const { changeByNameFilter, addComparisonFilter,
    filters: { filterByName }, optionColumns } = useContext(SWContext);

  const [filter, setFilter] = useState({
    column: 'population',
    comparison: 'maior que',
    value: 0,
  });

  useEffect(() => {
    setFilter((prev) => ({
      ...prev,
      column: optionColumns[0],
    }));
  }, [optionColumns]);

  const handleChange = ({ target: { name, value } }) => {
    setFilter({
      ...filter,
      [name]: value,
    });
  };

  return (
    <section className="flex space-x-10">
      <input
        type="text"
        onChange={ (ev) => changeByNameFilter(ev) }
        value={ filterByName.name }
        data-testid="name-filter"
        name="name"
        id="name"
        placeholder="Filter by name"
        className="bg-gray-200 appearance-none border-2
        border-gray-200 rounded py-2 px-4 text-gray-700
        leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
      />
      <select
        onChange={ handleChange }
        name="column"
        id="column"
        className="block bg-gray-200 border border-gray-200
        text-gray-700 py-3 px-4 pr-8 rounded
        leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
        data-testid="column-filter"
      >
        {optionColumns.map((option) => (
          <option
            key={ option }
            name="column"
            value={ option }
          >
            {option}
          </option>
        ))}
      </select>
      <select
        onChange={ handleChange }
        data-testid="comparison-filter"
        name="comparison"
        id="comparison"
        className="block bg-gray-200 border border-gray-200
        text-gray-700 py-3 px-4 pr-8 rounded
        leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
      >
        <option name="comparison" value="maior que">maior que</option>
        <option name="comparison" value="menor que">menor que</option>
        <option name="comparison" value="igual a">igual a</option>
      </select>
      <input
        onChange={ handleChange }
        type="number"
        value={ filter.value }
        data-testid="value-filter"
        name="value"
        id="value"
        className="bg-gray-200 appearance-none border-2
        border-gray-200 rounded py-2 px-4 text-gray-700
        leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
      />
      <button
        onClick={ () => addComparisonFilter(filter) }
        type="button"
        value={ filter.value }
        data-testid="button-filter"
        className="flex-shrink-0 bg-violet-500 hover:bg-violet-700
        border-violet-500 hover:border-violet-700 text-sm border-4
        text-white py-1 px-2 rounded"
      >
        Filtrar
      </button>
      <Order />
    </section>
  );
}

export default FilterForm;
