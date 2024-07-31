import React from 'react'

const SeasonalTrends = () => {
    return (
        <div id="SeasonalTrendsSlide" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-indicators">
                <button type="button" data-bs-target="#SeasonalTrendsSlide" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#SeasonalTrendsSlide" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#SeasonalTrendsSlide" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div class="carousel-inner">
                <div class="carousel-item active" data-bs-interval="10000">
                    <img src="https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-31072024-MainBanner-Z1-P2-Clarks-Min50.jpg" class="d-block w-100" alt="..." />
                </div>
                <div class="carousel-item" data-bs-interval="2000">
                    <img src="https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-RHS-MainBanner-Z1-P1.gif" class="d-block w-100" alt="..." />
                </div>
                <div class="carousel-item">
                    <img src="https://assets.ajio.com/cms/AJIO/WEB/D-1.0-UHP-31072024-MainBanner-Z3-P2-NIKE-ADIDAS-MIN40.jpg" class="d-block w-100" alt="..." />
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#SeasonalTrendsSlide" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#SeasonalTrendsSlide" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>
    )
}

export default SeasonalTrends
