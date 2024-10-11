import React from 'react'
import { json, useLocation } from 'react-router-dom';

function Format1() {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const data = queryParams.get('data');
    
    console.log(JSON.parse(data));
    console.log("QP",queryParams);


    return (
        <div>
            format1
        </div>
    )
}

export default Format1
