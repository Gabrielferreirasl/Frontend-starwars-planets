import React, { useContext } from 'react';
import SWContext from '../context/SWContext';
import '../style/removeBtn.css';

function RemoveBtn() {
  const { filters: { filterByNumericValues },
    removeComparisonFilter } = useContext(SWContext);

  return (
    <div className="mt-10 mb-10 btn-remove-div space-y-2">
      {filterByNumericValues.map((filter) => (
        <div
          className="flex space-x-10 bg-transparent text-blue-700
        font-semibold py-2 px-4 border
        border-black-800 rounded"
          key={ filter.column }
          data-testid="filter"
        >
          <p className="self-center">
            {`${filter.column} ${filter.comparison} ${filter.value}`}
          </p>
          <button
            className="bg-transparent hover:bg-red-500 text-red-700
          font-semibold hover:text-white py-2 px-4 border
          border-red-500 hover:border-transparent rounded"
            value={ filter.column }
            type="button"
            onClick={ ({ target }) => removeComparisonFilter(target.value) }
          >
            X
          </button>
        </div>
      ))}
    </div>
  );
}

export default RemoveBtn;
