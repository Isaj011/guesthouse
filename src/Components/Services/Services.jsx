import React, { Component } from 'react'

// imports react-icons
import { FaWifi, FaBath, FaTv, FaPhoneVolume } from 'react-icons/fa'

// imports components
import Title from '../Title/Title'

export default class Services extends Component {
  state = {
    services: [
      {
        icon: <FaWifi />,
        title: 'WiFi',
        info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores est eaque error provident unde eligendi.'
      },
      {
        icon: <FaBath />,
        title: 'Shower',
        info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores est eaque error provident unde eligendi.'
      },
      {
        icon: <FaTv />,
        title: 'Tv',
        info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores est eaque error provident unde eligendi.'
      },
      {
        icon: <FaPhoneVolume />,
        title: 'Telephone',
        info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores est eaque error provident unde eligendi.'
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
