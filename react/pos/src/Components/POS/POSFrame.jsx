import React, { useContext } from 'react'
import { StartContext } from '../../Context/StartContext';
import POSFilter from './POSFilter';
import LoadItems from './LoadItems';
import SelectedItems from './SelectedItems';

function POSFrame() {
    const commonData = useContext(StartContext);
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-8" >
                    <POSFilter />
                    <LoadItems />
                </div>
                <div className="col-4">
                    <div>
                        <form action="" className='d-flex gap-2'>
                            <input type="text" placeholder='Name' style={{width:"65%"}}/>
                            <input type="number" placeholder='Mobile No.' style={{width:"35%"}} />
                        </form>
                    </div>
                    <SelectedItems />
                    <div>
                        calcu
                    </div>

                </div>
            </div>
        </div>
    )
}

export default POSFrame
