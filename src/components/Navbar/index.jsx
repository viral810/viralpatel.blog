import React, { Component } from "react";
import { Link } from "gatsby";

import sun from "../../images/sun.svg";
import moon from "../../images/moon.svg";
import kofi from "../../../content/thumbnails/kofi.png";
import ThemeContext from "../../context/ThemeContext";

export default class Navbar extends Component {
  static contextType = ThemeContext

  render() {
    const theme = this.context;

    return (
      <nav className='flex items-center justify-between flex-wrap mb-6'>
        <div className='flex items-center flex-shrink-0 mr-6 '>
          <Link to='/' className='font-semibold text-xl tracking-tight text-xl'>
            Viral Patel
          </Link>
        </div>
        {/* <div className='block md:hidden'>
          <button
            className='flex items-center px-3 py-2 border rounded'
            type='button'
          >
            <svg
              className='fill-current h-3 w-3'
              viewBox='0 0 20 20'
              xmlns='http://www.w3.org/2000/svg'
            >
              <title>Menu</title>
              <path d='M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z' />
            </svg>
          </button>
        </div> */}
        <div className='flex items-center justify-between w-40 font-bold text-sm'>
          <Link to='/blog'>
            Blog
          </Link>
          <button
            className='dark-switcher w-5'
            onClick={theme.toggleDark}
            aria-label='Toggle Dark Mode.'
            title='Toggle Dark Mode'
          >
            {theme.dark ? (
              <img src={sun} className='theme-icon' alt='Light Mode' />
            ) : (
              <img src={moon} className='theme-icon' alt='Dark Mode' />
            )}
          </button>
          <a
            className='kofi-button w-10 bg-indigo-700 p-2 rounded'
            target='_blank'
            rel='noopener noreferrer'
            href='https://ko-fi.com/viralpatel'
            aria-label='Buy me a coffee!'
            title='Buy me a coffee!'
          >
            <img src={kofi} alt='Kofi' className='kofi' />
          </a>
          <input type="text" class="st-default-search-input bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal"></input>
        </div>
      </nav>
    );
  }
}
