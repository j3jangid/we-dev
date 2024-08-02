import React from 'react'

const TopBrands = () => {
  return (
    <div className='d-flex'>
      <div className='position-relative mx-2' style={{ height: "400px", width: "400px" }}>
        <img className='object-fit-cover' src="https://cdn.britannica.com/94/193794-050-0FB7060D/Adidas-logo.jpg" alt="" style={{ height: "400px" }} />
        <div className="position-absolute bottom-0 start-50 translate-middle-x text-dark">
          <p className='h3 text-center'>Upto 30% off</p>
          <p className='h4 text-center'>Addidas</p>
        </div>
      </div>
      <div className='position-relative mx-2' style={{ height: "400px", width: "400px" }}>
        <img className='object-fit-cover' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlAHSjq7Gk3-FboSL_OMkC42bdCkxD12e4mw&s" alt="" style={{ height: "400px" }} />
        <div className="position-absolute bottom-0 start-50 translate-middle-x text-dark">
          <p className='h3 text-center'>Upto 30% off</p>
          <p className='h4 text-center'>Nike</p>
        </div>
      </div>
      <div className='position-relative mx-2' style={{ height: "400px", width: "400px" }}>
        <img className='object-fit-cover' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSITaYcj-k1Dm8TZqvPZM6UFngTYIpx2p1pBA&s" alt="" style={{ height: "400px" }} />
        <div className="position-absolute bottom-0 start-50 translate-middle-x text-dark">
          <p className='h3 text-center'>Upto 30% off</p>
          <p className='h4 text-center'>Puma</p>
        </div>
      </div>
      <div className='position-relative mx-2' style={{ height: "400px", width: "400px" }}>
        <img className='object-fit-cover' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFbBCUy3mYz9dJ8gYc8dS4HLxms2gLCy6fOg&s" alt="" style={{ height: "400px" }} />
        <div className="position-absolute bottom-0 start-50 translate-middle-x text-dark">
          <p className='h3 text-center'>Upto 30% off</p>
          <p className='h4 text-center'>Tommy Hilfiger</p>
        </div>
      </div>
    </div>
  )
}

export default TopBrands
