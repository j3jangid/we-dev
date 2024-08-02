import React from 'react'
import HotOffer from './HotOffer'
import BankOffer from './BankOffer'
import DealOfTheDay from './DealOfTheDay'
import SeasonalTrends from './SeasonalTrends'
import TopBrands from './TopBrands'

const Home = () => {
  return (
    <div className=''>
      <p className="h4 text-center m-2 text-decoration-underline" style={{fontFamily:"Brush Script MT, cursive"}}>Hot Deals</p>
      <HotOffer/>
      <p className="h4 text-center m-2 text-decoration-underline" style={{fontFamily:"Brush Script MT, cursive"}}>Bank Offers</p>
      <BankOffer/>
      <p className="h4 text-center m-2 text-decoration-underline" style={{fontFamily:"Brush Script MT, cursive"}}>Deal of the Day</p>
      <DealOfTheDay/>
      <p className="h4 text-center m-2 text-decoration-underline" style={{fontFamily:"Brush Script MT, cursive"}}>Seasonal Trends</p>
      <SeasonalTrends/>
      <p className="h4 text-center m-2 text-decoration-underline" style={{fontFamily:"Brush Script MT, cursive"}}>Top Brands</p>
      <TopBrands/>
    </div>
  )
}

export default Home
