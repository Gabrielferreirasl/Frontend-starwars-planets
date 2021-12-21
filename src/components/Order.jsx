import React, { useContext, useState } from 'react';
import SWContext from '../context/SWContext';
import '../style/order.css';

function Order() {
  const { addOrderFilter, data } = useContext(SWContext);

  const [orderSettings, setSettingsOrder] = useState({
    column: 'name', sort: 'ASC', options: Object.keys(data[0]),
  });

  const handleChange = ({ target: { name, value } }) => {
    setSettingsOrder((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="filters space-x-4 flex">
      <select
        name="column"
        data-testid="column-sort"
        onChange={ (ev) => handleChange(ev) }
        className="block bg-gray-200 border border-gray-200
        text-gray-700 py-3 px-4 pr-8 rounded
        leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
      >
        {orderSettings.options.map((option) => (
          <option name="column" key={ option } value={ option }>{option}</option>))}
      </select>
      <div className="space-x-4 flex radios">
        <label htmlFor="ASC" className="text-gray-600">
          Ascendente
          <input
            value="ASC"
            data-testid="column-sort-input-asc"
            type="radio"
            name="sort"
            id="ASC"
            className="radio"
            onChange={ (ev) => handleChange(ev) }
          />
        </label>
        <label htmlFor="DESC" className="text-gray-600">
          Decrescente
          <input
            onChange={ (ev) => handleChange(ev) }
            value="DESC"
            data-testid="column-sort-input-desc"
            type="radio"
            id="DESC"
            name="sort"
            className="radio"
          />
        </label>
      </div>
      <button
        onClick={ () => addOrderFilter({
          column: orderSettings.column, sort: orderSettings.sort,
        }) }
        data-testid="column-sort-button"
        type="button"
        className="flex-shrink-0 bg-violet-500 hover:bg-violet-700
        border-violet-500 hover:border-violet-700 text-sm border-4
        text-white py-1 px-2 rounded"
      >
        Ordenar
      </button>
    </div>
  );
}

export default Order;
