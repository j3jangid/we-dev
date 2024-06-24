import React, { useState } from 'react'

const Accordion = ({ title, topics }) => {
  const [show, setShow] = useState(false)
  return (
    <div className='courseBox'>
      <div className='boxHead'>
        <h3 className='moreBtn btn p-0 ps-3 pe-3'  onClick={() => { setShow(!show) }}>{show ? "⇡" : "⇣"}</h3>
        <h3>{title}</h3>
      </div>
      {
      show &&
        <div id={"detailsOf" + title} className='detailsBox'>
        {topics.map((e) => (<li className={title + 'Details' + " " + "courseDetails"} >{e}</li>))}
      </div>
      }
    </div>
  )
}

export default Accordion
