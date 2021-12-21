import React, { useContext, useEffect, useState } from 'react';
import SWContext from '../context/SWContext';
import makeTheaderArray from '../helpers';
import FilterForm from './FilterForm';
import RemoveBtn from './RemoveBtn';
import '../style/table.css';

function Table() {
  const { data, arrayFiltered } = useContext(SWContext);

  const [tableInfo, setTableInfo] = useState({ tHead: [], infoIsLoaded: false });

  useEffect(() => {
    if (data.length !== 0) {
      setTableInfo({
        tHead: makeTheaderArray(data), infoIsLoaded: true,
      });
    }
  }, [data]);

  return (
    <main className="flex flex-col space-y-10 bg-slate-50">
      {tableInfo.infoIsLoaded && (
        <div>
          <h1
            className="text-center mt-10 font-sans
            text-3xl italic font-bold tracking-wider underline
          decoration-indigo-500 decoration-4"
          >
            Starwars Planets Search
          </h1>
          <FilterForm />
          <RemoveBtn />
          <div className="table-info flex-col">
            <table className="min-w-full text-center border">
              <thead className="border-b">
                <tr>
                  {tableInfo.tHead.map((item) => (
                    <th
                      className="text-sm font-medium text-violet-700 px-6 py-4 border-r"
                      key={ item }
                    >
                      {item}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {arrayFiltered.map((planet) => (
                  <tr key={ planet.orbital_period } className="border-b">
                    {Object.values(planet).map((value, index) => (
                      <td
                        className="px-3 py-2 text-sm hover:bg-gray-300
                         font-medium text-gray-900 border-r"
                        data-testid={ index === 0 && 'planet-name' }
                        key={ value }
                      >
                        { value }
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </main>
  );
}

export default Table;
