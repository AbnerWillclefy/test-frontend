import { useState } from 'react';

import Styles from './styles.module.css';

import Logo from '../../assets/logo.svg';
import HamIcon from '../../assets/icon-hamburger.svg';
import CloseIcon from '../../assets/icon-close.svg';

import { IconButton } from '@material-ui/core';

import NavMenu from '../NavMenu';

export default function Header() {
  const [display, setDisplay] = useState(false);

  function handleDisplayChange() {
    if (display) {
      setDisplay(false);
    } else {
      setDisplay(true);
    }
  }

  return (
    <>
      <div className={Styles.container}>
        <header>
          <img src={Logo} alt="Company logo" className={Styles.logo} />
          <NavMenu />
          <button onClick={handleDisplayChange} className={Styles.icon}>
            <img src={HamIcon} alt="" />
          </button>
        </header>
        <div className={Styles.description}>
          <h1>IMMERSIVE EXPERIENCES THAT DELIVER</h1>
        </div>
      </div>
      <aside className={display ? Styles.displayed : Styles.noDisplayed}>
        <header className={Styles.headerAside}>
          <img src={Logo} alt="Company logo" className={Styles.logo} />
          <IconButton onClick={handleDisplayChange}>
            <img
              src={CloseIcon}
              alt="Close Menu Icon"
              className={Styles.icon}
            />
          </IconButton>
        </header>
        <div className={Styles.titles}>
          <a href="#about" onClick={handleDisplayChange}>
            ABOUT
          </a>
          <a href="#careers" onClick={handleDisplayChange}>
            CAREERS
          </a>
          <a href="#events" onClick={handleDisplayChange}>
            EVENTS
          </a>
          <a href="#creationsMobile" onClick={handleDisplayChange}>
            PRODUCTS
          </a>
          <a href="#footerMobile" onClick={handleDisplayChange}>
            SUPPORT
          </a>
        </div>
      </aside>
    </>
  );
}
