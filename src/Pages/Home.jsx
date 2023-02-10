import React from 'react'
// import react-router-dom
import { Link } from 'react-router-dom'
import Banner from '../Components/Banner/Banner'
import FeaturedRooms from '../Components/FeaturedRooms/FeaturedRooms'
// imports components
import Hero from '../Components/Hero/Hero'
import Services from '../Components/Services/Services'

function Home() {
  return (
    <>
      <Hero>
        <Banner
          title='Home away from Home'
          // subtitle='single rooms starting at Ksh. 4,000'
        >
          <Link to='/rooms' className='btn-primary'>
            our rooms
          </Link>
        </Banner>
      </Hero>
      <Services />
      <FeaturedRooms />
    </>
  )
}

export default Home
