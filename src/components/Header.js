import React from 'react';
import './../style/index.sass';
import logo from './../images/logo.png';
import logo2x from './../images/logo@2x.png';
import logo3x from './../images/logo@3x.png';

export default function Header() {
  return (
    <header className='header'>
      <div className='container'>
        <img className='header__logo' src={logo}
          srcset={logo + ' 1x,' + logo2x + ' 2x,' + logo3x + ' 3x'}
          alt='logo firmy psd2css' />
      </div>
    </header>
  )
}
