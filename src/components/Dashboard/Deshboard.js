import React from 'react';
import SimpleBarChart from '../SimpleBarChart/SimpleBarChart';
import SimpleLineChart from '../SimpleLineChart/SimpleLineChart';

const Deshboard = () => {
    return (
        <div className='text-center  mt-20'>
            <SimpleLineChart></SimpleLineChart>
            {/* <SimpleLineChart></SimpleLineChart> */}
            <SimpleBarChart></SimpleBarChart>
        </div>
    );
};

export default Deshboard;