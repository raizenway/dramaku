import React from 'react';

const CMSTable = ({ columns, data }) => {
  return (
    <div className="relative overflow-x-auto shadow-md rounded-lg mb-10">
      <table className="w-full">
        <thead className="text-white bg-dark-2 text-left">
          <tr>
            {columns.map((col) => (
              <th key={col.id} className={`p-4 ${col.width}`}>
                {col.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="text-base text-body-color dark:text-dark-6">
          {data.map((row, index) => (
            <tr key={row.id} className="border-b hover:bg-gray-100">
              {columns.map((col) => (
                <td key={col.id} className="px-2 py-4">
                  {col.render ? col.render(row) : row[col.id]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CMSTable;
