// eslint-disable-next-line no-unused-vars
import React from 'react'
import { useLocation } from 'react-router-dom'

const ProductDetails = () => {
    let location = useLocation()
    location = location.state

    return (
        <div className='row container mt-5'>
            <div className='col-md-2'>
                <div className="ms-5 photo-album sliderimage ">
                    <img className='sliderimg' src={location.image} alt="green apple" />
                    <img className='sliderimg' src={location.image1} alt="half apple" />
                    <img className='sliderimg' src={location.image2} alt="green apple" />
                    <img className='sliderimg' src={location.image3} alt="apple top" />
                </div >
            </div >
            <div className='col-md-4 text-center'>
                <div className="product__photo">
                    <img width={"100%"} src={location.image} alt="green apple slice" />
                </div>

            </div>
            <div className='col-md-6'>
                <center>
                    <section className="sroduct">

                        <div className="product__info">
                            <div className="title">
                                <h1>{location.title}</h1>
                            </div>
                            <div className="price">
                                ₹ <span className='fs-1'><del>{location.price}</del></span> <span className='text-secondary'>{location.price - (location.price * location.discount) / 100}₹</span>
                            </div>
                            <div className="variant">
                                <h3>SELECT A COLOR</h3>
                                <div className='d-flex gap-2 justify-content-center'>
                                    <button className='btn p-3 rounded-5' style={{ backgroundColor: "red" }}></button>
                                    <button className='btn p-3 rounded-5' style={{ backgroundColor: "black" }}></button>
                                    <button className='btn  p-3 rounded-5' style={{ backgroundColor: "blue" }}></button>
                                </div>

                            </div>

                            <div className="variant">
                                <h3>SELECT Size</h3>
                                <div className='d-flex gap-1 flex-wrap justify-content-center'>
                                    <button className='btn' style={{ width: "50px" }} >S</button>
                                    <button className='btn' style={{ width: "50px" }} >M</button>
                                    <button className='btn ' style={{ width: "50px" }}>L</button>
                                    <button className='btn ' style={{ width: "50px" }}>XL</button>
                                    <button className='btn ' style={{ width: "50px" }}>XXL</button>


                                </div>

                            </div>

                            <div className="description">
                                <p>{location.description}</p>
                            </div>
                            <button className='cartBtn'>ADD TO CART</button>
                        </div>
                    </section >

                </center >
            </div >




        </div >
    )
}

export default ProductDetails
