import React, { Component } from 'react'

// imports react-icons
import { FaWifi, FaBath, FaTv, FaBroom } from 'react-icons/fa'

// imports components
import Title from '../Title/Title'

export default class Services extends Component {
  state = {
    services: [
      {
        icon: <FaWifi />,
        title: 'WiFi',
        info: 'Free WiFi internet provided.'
      },
      {
        icon: <FaBath />,
        title: 'Shower',
        info: 'Warm and hot shower available.'
      },
      {
        icon: <FaTv />,
        title: 'Tv',
        info: 'All rooms have access to Television.'
      },
      {
        icon: <FaBroom />,
        title: 'Cleaning',
        info: 'Proffesional cleaning services provided.'
      }
    ]
  }

  render() {
    return (
      <section className='services'>
        <Title title='services' />

        <div className='services-center'>
          {this.state.services.map((item, index) => {
            return (
              <article key={index} className='services'>
                <span>{item.icon}</span>
                <h6>{item.title}</h6>
                <p>{item.info}</p>
              </article>
            )
          })}
        </div>
      </section>
    )
  }
}
