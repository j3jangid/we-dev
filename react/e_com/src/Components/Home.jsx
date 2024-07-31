import React from 'react'
import HotOffer from './HotOffer'
import BankOffer from './BankOffer'
import DealOfTheDay from './DealOfTheDay'
import SeasonalTrends from './SeasonalTrends'

const Home = () => {
  return (
    <div>
      <h1>Hot Deals</h1>
      <HotOffer/>
      <h1>Bank Offers</h1>
      <BankOffer/>
      <h1>Deal of the Day</h1>
      <DealOfTheDay/>
      <h1>Seasonal Trends</h1>
      <SeasonalTrends/>
      <h1>Top Brands</h1>
    </div>
  )
}

export default Home
