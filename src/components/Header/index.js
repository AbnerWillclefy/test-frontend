import Styles from './styles.module.css'
import Logo from '../../assets/logo.svg'
import HamIcon from '../../assets/icon-hamburger.svg'
import CloseIcon from '../../assets/icon-close.svg'
import { IconButton } from '@material-ui/core'
import { useState } from 'react'

export default function Header() {
  const [display, setDisplay] = useState(false)

  function handleDisplayChange() {
    if(display) {
      setDisplay(false)
    } else {
      setDisplay(true)
    }
  }

  return(
    <>
      <div className={Styles.container}>
        <header>
          <img src={Logo} alt='Logotipo da empresa'/>
          <ul className={Styles.menu}>
            <li><a href='#about'>About</a></li>
            <li><a href='#'>Careers</a></li>
            <li><a href='#'>Events</a></li>
            <li><a href='#creations'>Products</a></li>
            <li><a href='#footer'>Support</a></li>
          </ul>
          <IconButton onClick={handleDisplayChange}><img src={HamIcon} alt='' className={Styles.icon}/></IconButton>
        </header>
        <div className={Styles.description}>
          <h1>IMMERSIVE EXPERIENCES THAT DELIVER</h1>
        </div>
      </div>
      <aside className={display ? Styles.displayed : Styles.noDisplayed}>
        <header className={Styles.headerAside}>
          <img src={Logo} alt='Logotipo da empresa'/>
          <IconButton onClick={handleDisplayChange}><img src={CloseIcon} alt='' className={Styles.icon}/></IconButton>
        </header>
        <div className={Styles.titles}>
          <h2>ABOUT</h2>
          <h2>CAREERS</h2>
          <h2>EVENTS</h2>
          <h2>PRODUCTS</h2>
          <h2>SUPPORT</h2>
        </div>
      </aside>
    </>
  )
}