import React, { useContext } from 'react';
import SWContext from '../context/SWContext';

function RemoveBtn() {
  const { filters: { filterByNumericValues },
    removeComparisonFilter } = useContext(SWContext);
  return (
    <div className="mt-10 mb-10">
      {filterByNumericValues.map((filter) => (
        <div key={ filter.column } data-testid="filter">
          <p>{`${filter.column} ${filter.comparison} ${filter.value}`}</p>
          <button
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
