import React, { useState } from "react";

const ProfilePictureCell = ({ imageUrl, name }) => {
  const [isImageLoaded, setIsImageLoaded] = useState(true);

  return (
    <div className="h-28 w-20 overflow-hidden">
      {isImageLoaded && imageUrl ? (
        <img
          src={imageUrl}
          alt={name}
          className="w-full h-full object-cover"
          onLoad={() => setIsImageLoaded(true)}
          onError={() => setIsImageLoaded(false)}
        />
      ) : (
        <div className="h-28 w-20 bg-gray-200 flex items-center justify-center">
          <span className="text-gray-500">No Image</span>
        </div>
      )}
    </div>
  );
};

const CMSTable = ({ columns, data, actions }) => {
  return (
    <div className="relative overflow-x-auto shadow-md rounded-lg my-10">
      <table className="w-full">
        <thead className="text-white bg-dark-2 text-left">
          <tr>
            <th scope="col" className="p-4 w-4 text-center">No.</th>
            {columns.map((column) => (
              <th key={column.id} scope="col" className={`p-4 ${column.width || "w-auto"}`}>
                {column.title}
              </th>
            ))}
            {actions && <th className="p-4 text-center">Actions</th>}
          </tr>
        </thead>
        <tbody className="text-base text-body-color dark:text-dark-6">
          {data.length === 0 ? (
            <tr>
              <td colSpan={columns.length + (actions ? 1 : 0) + 1} className="text-center py-4">
                No data available
              </td>
            </tr>
          ) : (
            data.map((item, index) => (
              <tr key={index} className="border-b hover:bg-gray-100">
                <th scope="row" className="px-2 py-4 text-center">{index + 1}</th>
                {columns.map((column) => (
                  <td key={column.id} className="px-2 py-4">
                    {column.id === 'profilePicture' ? (
                      <ProfilePictureCell imageUrl={item[column.id]} name={item.name} />
                    ) : (
                      item[column.id]
                    )}
                  </td>
                ))}
                {actions && (
                  <td className="px-2 py-4 text-center">
                    {actions.map((action, actionIndex) => (
                      <a key={actionIndex} href="#" className={action.className} onClick={() => action.onClick(item)}>
                        {action.label}
                      </a>
                    ))}
                  </td>
                )}
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default CMSTable;
