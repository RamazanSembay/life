import React from 'react';
import './header.css';
import '../js/main.js';

const Header = () => {
  return (
    <header className='header' id='header'>
      <nav className='nav container'>
        <a href="#" className='nav__logo'>
          NURRAMAZAN SEMBAY
          <i className='bx bxs-home-alt-2'></i>
        </a>

        <div className='nav__menu'>
          <ul className='nav__list'>
            <li className='nav__item'>
              <a href="#home" className='nav__link active-link'>
                <i className='bx bx-home-alt-2' ></i>
                <span>Home</span>
              </a>
            </li>

            <li>
              <a href="#footer" className='nav__link'>
                <i className='bx bx-list-ul' ></i>
                <span>Residences</span>
              </a>
            </li>

            {/* <li>
              <a href="#value" className='nav__link'>
                <i className='bx bx-award'></i>
                <span>Value</span>
              </a>
            </li>

            <li>
              <a href="#footer" className='nav__link'>
                <i className='bx bx-phone'></i>
                <span>Contact</span>
              </a>
            </li> */}

          </ul>

        </div>
        
        {/* Theme change button */}
        <i className='bx bx-moon change-theme' id='theme-button'></i>

        <a href="#" className="button nav__button">Subscrible</a>
      </nav>
    </header>
  )
}

export default Header
