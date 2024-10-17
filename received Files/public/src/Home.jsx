
// eslint-disable-next-line no-unused-vars
import React from 'react'
import { IoIosBasket } from "react-icons/io";
import { Data } from './Data'
import { useNavigate } from 'react-router-dom';
const Home = () => {
    const navigate = useNavigate()
    const clickHandle = (image, image1, image2, image3, category, title, description, price, rating, discount) => {
        return (
            navigate("/productDetails", {
                state: {
                    image, image1, image2, image3, category, title, description, price, rating, discount
                }
            })
        )
    }
    return (
        <div>
            {/* slider start */}

            <div id="carouselExampleCaptions" className="carousel slide">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="slider/img1.png" className="d-block w-100" alt="..." />
                        <div className="carousel-caption d-none d-md-block">
                            {/* <h5>First slide label</h5>
                            <p>Some representative placeholder content for the first slide.</p> */}
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src="slider/img2.png" className="d-block w-100" alt="..." />
                        <div className="carousel-caption d-none d-md-block">
                            {/* <h5>Second slide label</h5>
                            <p>Some representative placeholder content for the second slide.</p> */}
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src="slider/img3.png" className="d-block w-100" alt="..." />
                        <div className="carousel-caption d-none d-md-block">
                            {/* <h5>Third slide label</h5>
                            <p>Some representative placeholder content for the third slide.</p> */}
                        </div>
                    </div>

                    <div className="carousel-item">
                        <img src="slider/img4.png" className="d-block w-100" alt="..." />
                        <div className="carousel-caption d-none d-md-block">
                            {/* <h5>Third slide label</h5>
                            <p>Some representative placeholder content for the third slide.</p> */}
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>

            {/* close  */}
            <div className="shell">
                <div className="container">
                    <div className="row">
                        {
                            Data.map((ele) => {
                                return (
                                    <>
                                        <div className="col-md-3">
                                            <div className="wsk-cp-product" onClick={() => { clickHandle(ele.image, ele.image1, ele.image2, ele.image3, ele.category, ele.title, ele.description, ele.price, ele.rating, ele.discount) }}>
                                                <div className="wsk-cp-img">
                                                    <img src={ele.image} alt="Product" className="img-responsive" />
                                                </div>
                                                <div className="wsk-cp-text">
                                                    <div className="category">
                                                        <span>{ele.category}</span>
                                                    </div>
                                                    <div className="title-product">
                                                        <h3>{ele.title}</h3>
                                                    </div>
                                                    <div className="description-prod">
                                                        <p>{ele.description}</p>
                                                    </div>
                                                    <div className="card-footer">
                                                        <div className="wcf-left"><span className="price"><del className='text-secondary'>{ele.price}  ₹</del></span> <span>{ele.price - (ele.price * ele.discount) / 100}  ₹</span></div>
                                                        <div className="wcf-right"><a href="#" className="buy-btn "><IoIosBasket /></a></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </>
                                )
                            })
                        }



                    </div>
                </div>
            </div>

        </div>
    )
}

export default Home

