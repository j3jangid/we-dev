import React from 'react'
import Data from './Data'
import View from './View'
const Accordion = () => {
    return (
        <div>
            <div className='main mt-5'>

                {
                    Data.map((item) => {
                        return (
                            <>
                                <View title={item.title} topics={item.topics} />
                            </>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Accordion
