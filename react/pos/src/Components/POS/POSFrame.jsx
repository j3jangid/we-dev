import React, { useContext, useState } from 'react'
import { StartContext } from '../../Context/StartContext';
import POSFilter from './POSFilter';
import LoadItems from './LoadItems';
import SelectedItems from './SelectedItems';
import Calculation from './Calculation';

function POSFrame() {
    const commonData = useContext(StartContext);
    const [customer, setCustomer] = useState({
        name:"",
        number:"",
    })

    function getCustomerDetail(e) {
        const id = e.target.id;
        const value = e.target.value;
        setCustomer((preVal)=>({...preVal, [id]: value}));
    }

    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-8" >
                    <POSFilter />
                    <LoadItems />
                </div>
                <div className="col-4 bg-dark p-2">
                    <div>
                        <form action="" className='d-flex gap-2 mb-2'>
                            <input type="text" placeholder='Name' style={{width:"65%"}} id='name' onChange={getCustomerDetail}/>
                            <input type="number" placeholder='Mobile No.' style={{width:"35%"}} id='number' onChange={getCustomerDetail}/>
                        </form>
                    </div>
                    <SelectedItems />
                    <Calculation customer={customer}/>
                </div>
            </div>
        </div>
    )
}

export default POSFrame
