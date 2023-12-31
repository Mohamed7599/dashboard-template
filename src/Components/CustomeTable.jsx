// CustomTable.jsx

import React from 'react';

const CustomTable = ({ data, columns }) => {
    return (
        <div className='flex flex-col h-full w-full'>
            <table className='w-full my-2 flex-grow'>
                <thead>
                    <tr>
                        {columns.map((col) => (
                            <th
                                className='text-center first:text-left first:pl-2 w-fit border-b border-gray-300 pb-2'
                                key={col.Header}
                            >
                                {col.Header}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody className='flex-grow'>
                    {data.map((row, index) => (
                        <tr key={index} className='flex-grow border-b border-dashed border-gray-300 last:border-none'>
                            {columns.map((col) => (
                                <td key={col.accessor} className='first:text-left text-center'>
                                    {typeof col.accessor === 'function' ? col.accessor(row) : row[col.accessor]}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default CustomTable;
