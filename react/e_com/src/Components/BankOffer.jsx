import React from 'react'

const BankOffer = () => {
    return (
        <div id="BankOffersSlide" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#BankOffersSlide" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#BankOffersSlide" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#BankOffersSlide" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner">
                <div className="carousel-item" data-bs-interval="2000">
                    <img src="https://assets.ajio.com/cms/AJIO/WEB/1440x128-11.jpg" className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item active" data-bs-interval="10000">
                    <img src="https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-05042024-bankoffers-Z1-5instant-prepaid.jpg" className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item">
                    <img src="https://assets.ajio.com/cms/AJIO/WEB/1440x128%202%20new%20federal%20bank%20comp.jpg" className="d-block w-100" alt="..." />
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#BankOffersSlide" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#BankOffersSlide" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    )
}

export default BankOffer
