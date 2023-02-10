import React, { Component } from 'react'
import { FaSearchLocation } from 'react-icons/fa'

import { Link } from 'react-router-dom'
import img5 from '../assets/img/jpeg/room-5.jpeg'
import room25 from '../assets/img/jpeg/details-25.jpeg'
import room26 from '../assets/img/jpeg/details-26.jpeg'
import room35 from '../assets/img/jpeg/details-35.jpeg'

// import assets

// import components
import Banner from '../Components/Banner/Banner'
// import { RoomContext } from '../Context/Context'
import StyledHero from '../Components/StyledHero/StyledHero'

export default class SingleRoomTwo extends Component {
  // constructor(props) {
  //   super(props)
  //   // console.log(this.props);
  //   //   this.state = {
  //   //     slug: this.props.match.params.slug,
  //   //     defaultBcg
  //   //   }
  //   // }

  //   // static contextType = RoomContext
  //   // componentDidMount() {}
  // }
  render() {
    // const { getRoom } = this.context
    // const room = getRoom(this.state.slug)

    // if (!room) {
    //   return (
    //     <div className='error'>
    //       <h3>no such room could be found!</h3>
    //       <Link to='/rooms' className='btn-primary'>
    //         back to rooms
    //       </Link>
    //     </div>
    //   )
    // }

    // const {
    //   name,
    //   description,
    //   capacity,
    //   size,
    //   price,
    //   extras,
    //   breakfast,
    //   pets,
    //   images
    // } = room

    // const [mainImg, ...defaultImg] = images

    // const images = [
    //   {
    //     url: img5
    //   },
    //   {
    //     url: room25
    //   },
    //   {
    //     url: room3
    //   },
    //   {
    //     url: room4
    //   }
    // ]
    console.log('Isaj011')
    return (
      <>
        <StyledHero img={img5}>
          <Banner title='Explore'>
            <Link to='/rooms' className='btn-primary'>
              back to rooms
            </Link>
          </Banner>
        </StyledHero>

        <section className='single-room'>
          <div className='single-room-images'>
            <img key='1' src={room25} alt='explore images' />
            <img key='2' src={room26} alt='explore images 2' />
            <img key='3' src={room35} alt='explore images 3' />
          </div>

          <div className='single-room-info'>
            <article className='desc'>
              <h3>About us:</h3>
              <p>
                Missionary sisters of the Precious Blood Guesthouse has its aim
                of supporting its mission in Kenya. The guesthouse provides
                quality service to its customers guided by our policy that is in
                line with the international standards. Well furnished single,
                double rooms and executive room taken care by well trained house
                keepers, quality kitchen, excellent dining services and spacious
                conference room and highly motivated waiters.
                <br />
                Our friendly and helpful staff is always on hand to assist with
                anything you need, and we offer personalized services to help
                you make the most of your stay. We believe that staying at our
                guesthouse will provide you with a unique and unforgettable
                experience, immersing you in the local culture and offering
                one-of-a-kind activities.
              </p>
            </article>

            <article className='info'>
              <h3>Address information:</h3>
              <h6>phone : +254 20-444 557</h6>
              <h6>phone : +254 791 251 336</h6>
              <h6>P.O BOX : 56333-00200</h6>
              <h6>
                <FaSearchLocation />
                &nbsp; The Junction at David Osieli Road off Waiyaki Way -
                Westlands Nairobi
              </h6>
            </article>
          </div>
        </section>

        <section className='room-extras'>
          <h6>Our Vision & Mission</h6>
          <ul className='extras'>
            <li>To ensure our guest have access to quality services</li>
          </ul>
        </section>
      </>
    )
  }
}
