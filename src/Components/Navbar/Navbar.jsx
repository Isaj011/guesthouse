import React, { Component } from 'react'

// import react-router-dom
import { Link } from 'react-router-dom'

// import assets
import { FaAlignRight, FaBed } from 'react-icons/fa'

export default class Navbar extends Component {
  state = {
    isOpen: false
  }
  handleToggle = () => {
    this.setState({ isOpen: !this.state.isOpen })
  }

  render() {
    return (
      <nav className='navbar'>
        <div className='nav-center'>
          <div className='nav-header'>
            {/* app logo */}
            <Link to='/'>
              {/* <img src={Logo} alt='Reach Resort' /> */}
              <FaBed className='nav-icon2' />
            </Link>

            {/* navbar toggle button */}
            <button
              type='button'
              className='nav-btn'
              onClick={this.handleToggle}
            >
              <FaAlignRight className='nav-icon' />
            </button>
          </div>
          {/* navbar link */}
          <ul
            className={this.state.isOpen ? 'nav-links show-nav' : 'nav-links'}
          >
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/rooms'>Rooms</Link>
            </li>
            <li>
              <Link to='/explore'>Explore</Link>
            </li>
          </ul>
        </div>
      </nav>
    )
  }
}
