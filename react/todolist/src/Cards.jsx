import React from 'react'

const Cards = ({ allData, editHandle, deleteHandle }) => {
    return (
        <div>
            {
                allData.map((obj, i) => (
                    <div key={i}>
                        <h2>Title : {obj.title}</h2>
                        <h4>Description : {obj.desc}</h4>
                        <p>Saving Time : {obj.savingTime}</p>
                        <p>Update Time : {obj.updateTime}</p>
                        <button onClick={()=>editHandle(obj,i)}>edit</button>
                        <button onClick={()=>deleteHandle(i)}>delete</button>
                    </div>
                ))
            }

        </div>
    )
}

export default Cards
